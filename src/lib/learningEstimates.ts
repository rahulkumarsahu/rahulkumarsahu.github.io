import { estimateReadTime, type Post } from './posts';

export interface LearningEstimate {
  lessonCount: number;
  conceptCount: number;
  problemCount: number;
  otherCount: number;
  readingMinutes: number;
  studyMinutesMin: number;
  studyMinutesMax: number;
  totalMinutesMin: number;
  totalMinutesMax: number;
}

/** Time to read and try the available lessons once, not a measure of mastery. */
export function getLearningEstimate(posts: Post[]): LearningEstimate {
  const published = Array.from(new Map(
    posts.filter((post) => !post.data.draft).map((post) => [post.id, post]),
  ).values());

  const estimate: LearningEstimate = {
    lessonCount: published.length,
    conceptCount: 0,
    problemCount: 0,
    otherCount: 0,
    readingMinutes: 0,
    studyMinutesMin: 0,
    studyMinutesMax: 0,
    totalMinutesMin: 0,
    totalMinutesMax: 0,
  };

  for (const post of published) {
    const contentType = post.data.contentType ?? 'concept';
    estimate.readingMinutes += estimateReadTime(post);

    let studyAllowance: [number, number];
    if (contentType === 'problem') {
      estimate.problemCount += 1;
      studyAllowance = post.data.difficulty === 'hard'
        ? [40, 75]
        : post.data.difficulty === 'medium' ? [25, 45] : [15, 30];
    } else if (contentType === 'concept') {
      estimate.conceptCount += 1;
      studyAllowance = [10, 20];
    } else {
      estimate.otherCount += 1;
      studyAllowance = contentType === 'case-study' ? [25, 45] : [15, 30];
    }

    estimate.studyMinutesMin += studyAllowance[0];
    estimate.studyMinutesMax += studyAllowance[1];
  }

  estimate.totalMinutesMin = estimate.readingMinutes + estimate.studyMinutesMin;
  estimate.totalMinutesMax = estimate.readingMinutes + estimate.studyMinutesMax;
  return estimate;
}

export function formatLearningDuration(minutes: number): string {
  const roundedMinutes = Math.max(0, Math.ceil(Number.isFinite(minutes) ? minutes : 0));
  const hours = Math.floor(roundedMinutes / 60);
  const remainder = roundedMinutes % 60;
  if (!hours) return `${remainder} min`;
  return `${hours} hr${remainder ? ` ${remainder} min` : ''}`;
}
