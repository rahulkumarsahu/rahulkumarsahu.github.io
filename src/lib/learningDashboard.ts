import { KEYS, readRecord, storageIsAvailable } from './learningStorage';

export interface DashboardArticle {
  slug: string;
  title: string;
  href: string;
  topic: string;
  patterns?: string[];
}

export interface DashboardGoal {
  id: string;
  title: string;
  slugs: string[];
  destination: { title: string; href: string };
}

export interface DashboardMilestone {
  id: string;
  title: string;
  resources: string[];
}

export interface DashboardInput {
  catalog: DashboardArticle[];
  goals: DashboardGoal[];
  milestones: DashboardMilestone[];
}

type DraftValue = string | { code?: string; savedAt?: number };

export function createDashboardModel(input: DashboardInput, now = Date.now()) {
  const bySlug = new Map(input.catalog.map((article) => [article.slug, article]));
  const progress = readRecord<string>(KEYS.progress);
  const bookmarks = readRecord<boolean>(KEYS.bookmarks);
  const drafts = readRecord<DraftValue>(KEYS.drafts);
  const activity = readRecord<number>(KEYS.activity);
  const goalRecord = readRecord<string>(KEYS.goal);
  const revisions = readRecord<number>(KEYS.revisions);
  const projectRecord = readRecord<string>(KEYS.project);
  const completeMilestones = input.milestones.filter((milestone) => projectRecord[milestone.id] === 'complete');
  const inProgressMilestones = input.milestones.filter((milestone) => projectRecord[milestone.id] === 'in-progress');
  const nextMilestone = inProgressMilestones[0]
    ?? input.milestones.find((milestone) => projectRecord[milestone.id] !== 'complete');

  const findArticle = (slug: string) => bySlug.get(slug);
  const selectedGoal = input.goals.find((goal) => goal.id === goalRecord.selected);
  const mostRecentSlug = Object.entries(activity)
    .filter(([slug, visitedAt]) => bySlug.has(slug) && Number.isFinite(visitedAt))
    .sort((a, b) => b[1] - a[1])[0]?.[0];
  const inferredGoal = mostRecentSlug
    ? input.goals.find((goal) => goal.slugs.includes(mostRecentSlug))
    : input.goals.find((goal) => goal.slugs.some((slug) => progress[slug] && progress[slug] !== 'not-started'));
  const hasProjectActivity = Object.values(projectRecord).some((state) => state && state !== 'not-started');
  const projectGoal = hasProjectActivity ? input.goals.find((goal) => goal.id === 'url-shortener') : undefined;
  const currentGoal = selectedGoal ?? projectGoal ?? inferredGoal;
  const pathNextLesson = currentGoal?.slugs.map(findArticle).find((article) => article && progress[article.slug] !== 'solved');
  const projectNextLesson = currentGoal?.id === 'url-shortener'
    ? input.milestones
      .filter((milestone) => projectRecord[milestone.id] !== 'complete')
      .flatMap((milestone) => milestone.resources)
      .map((href) => href.match(/^\/posts\/([^/]+)\/$/)?.[1])
      .filter(Boolean)
      .map((slug) => findArticle(slug!))
      .find((article) => article && progress[article.slug] !== 'solved')
    : undefined;
  const nextLesson = projectNextLesson ?? pathNextLesson;
  const currentGoalArticles = currentGoal?.slugs.map(findArticle).filter(Boolean) as DashboardArticle[] | undefined;

  const selectCatalog = (predicate: (article: DashboardArticle) => boolean) => input.catalog.filter(predicate);
  const recent = Object.entries(activity)
    .filter(([slug, visitedAt]) => bySlug.has(slug) && Number.isFinite(visitedAt))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([slug]) => bySlug.get(slug)!);
  const completed = selectCatalog((article) => progress[article.slug] === 'solved');
  const attempted = selectCatalog((article) => progress[article.slug] === 'attempted');
  const bookmarked = selectCatalog((article) => bookmarks[article.slug] === true);
  const savedDrafts = Object.entries(drafts).flatMap(([slug, value]) => {
    const article = bySlug.get(slug);
    const code = typeof value === 'string' ? value : value?.code;
    if (!article || typeof code !== 'string') return [];
    return [{ ...article, savedAt: typeof value === 'object' ? value.savedAt : undefined }];
  });
  const revisionTopics = selectCatalog((article) => {
    const dueAt = revisions[article.slug];
    return progress[article.slug] === 'revisit'
      || (Number.isFinite(dueAt) && dueAt <= now)
      || (progress[article.slug] === 'solved' && !Number.isFinite(dueAt));
  }).map((article) => ({
    ...article,
    dueAt: revisions[article.slug],
    reason: progress[article.slug] === 'revisit'
      ? 'Marked to revisit'
      : Number.isFinite(revisions[article.slug]) ? 'Revision due' : 'Review date not recorded',
  }));

  const hasActivity = Boolean(
    currentGoal || recent.length || completed.length || attempted.length || bookmarked.length
    || savedDrafts.length || revisionTopics.length || completeMilestones.length || inProgressMilestones.length,
  );

  return {
    storageAvailable: storageIsAvailable(),
    currentGoal,
    nextLesson,
    recent,
    completed,
    attempted,
    bookmarks: bookmarked,
    drafts: savedDrafts,
    revisions: revisionTopics,
    project: {
      complete: completeMilestones.length,
      total: input.milestones.length,
      inProgress: inProgressMilestones.length,
      next: nextMilestone,
    },
    goalCompleted: currentGoalArticles?.filter((article) => progress[article.slug] === 'solved').length ?? 0,
    goalTotal: currentGoalArticles?.length ?? 0,
    hasActivity,
  };
}
