export const KEYS = {
  progress: 'atlas-progress:v1',
  bookmarks: 'atlas-bookmarks:v1',
  drafts: 'atlas-code-drafts:v1',
  knowledge: 'atlas-knowledge-checks:v1',
  project: 'atlas-project-progress:v1',
  activity: 'atlas-activity:v1',
  goal: 'atlas-learning-goal:v1',
  revisions: 'atlas-revisions:v1',
  urlShortenerLab: 'atlas-url-shortener-lab:v1',
  articleFeedback: 'atlas-article-feedback:v1',
} as const;

export type LearningStorageKey = typeof KEYS[keyof typeof KEYS];

const memoryStore = new Map<string, Record<string, unknown>>();
let persistentStorageAvailable: boolean | undefined;

function emitLearningChange() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('atlas-learning-state-changed'));
  }
}

export function storageIsAvailable(): boolean {
  if (persistentStorageAvailable !== undefined) return persistentStorageAvailable;
  if (typeof window === 'undefined') return false;

  try {
    const testKey = 'atlas-storage-test';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    persistentStorageAvailable = true;
  } catch {
    persistentStorageAvailable = false;
  }
  return persistentStorageAvailable;
}

export function readRecord<T = unknown>(key: LearningStorageKey): Record<string, T> {
  if (storageIsAvailable()) {
    try {
      const value = JSON.parse(window.localStorage.getItem(key) || '{}');
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        const record = value as Record<string, T>;
        memoryStore.set(key, { ...record });
        return { ...record };
      }
    } catch {
      // Fall through to the in-memory copy.
    }
  }
  return { ...(memoryStore.get(key) ?? {}) } as Record<string, T>;
}

export function writeRecord<T = unknown>(key: LearningStorageKey, value: Record<string, T>): boolean {
  const copy = { ...value } as Record<string, unknown>;
  memoryStore.set(key, copy);
  let persisted = false;

  if (storageIsAvailable()) {
    try {
      window.localStorage.setItem(key, JSON.stringify(copy));
      persisted = true;
    } catch {
      persistentStorageAvailable = false;
    }
  }
  emitLearningChange();
  return persisted;
}

export function recordArticleVisit(slug: string): boolean {
  if (!slug) return false;
  const activity = readRecord<number>(KEYS.activity);
  activity[slug] = Date.now();
  return writeRecord(KEYS.activity, activity);
}

export function setArticleProgress(slug: string, state: string): boolean {
  if (!slug || !['not-started', 'attempted', 'solved', 'revisit'].includes(state)) return false;
  const progress = readRecord<string>(KEYS.progress);
  const revisions = readRecord<number>(KEYS.revisions);

  if (state === 'not-started') delete progress[slug];
  else progress[slug] = state;

  if (state === 'revisit') revisions[slug] = Date.now();
  else if (state === 'solved') revisions[slug] = Date.now() + 7 * 24 * 60 * 60 * 1000;
  else delete revisions[slug];

  const revisionsPersisted = writeRecord(KEYS.revisions, revisions);
  const progressPersisted = writeRecord(KEYS.progress, progress);
  return revisionsPersisted && progressPersisted;
}

export function setLearningGoal(id: string): boolean {
  if (!/^[a-z0-9-]+$/.test(id)) return false;
  return writeRecord(KEYS.goal, { selected: id });
}

export function markReviewed(slug: string): boolean {
  const revisions = readRecord<number>(KEYS.revisions);
  const progress = readRecord<string>(KEYS.progress);
  revisions[slug] = Date.now() + 7 * 24 * 60 * 60 * 1000;
  if (progress[slug] === 'revisit') progress[slug] = 'solved';
  const revisionPersisted = writeRecord(KEYS.revisions, revisions);
  const progressPersisted = writeRecord(KEYS.progress, progress);
  return revisionPersisted && progressPersisted;
}

export function resetLearningData(includeDrafts = false): boolean {
  const keys = Object.values(KEYS).filter((key) => includeDrafts || key !== KEYS.drafts);
  let persisted = storageIsAvailable();

  for (const key of keys) {
    memoryStore.delete(key);
    if (storageIsAvailable()) {
      try {
        window.localStorage.removeItem(key);
      } catch {
        persistentStorageAvailable = false;
        persisted = false;
      }
    } else {
      persisted = false;
    }
  }
  emitLearningChange();
  return persisted;
}
