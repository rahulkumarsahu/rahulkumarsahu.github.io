import type { CollectionEntry } from 'astro:content';
import { TOPICS, type Topic } from '../data/site';

export type Post = CollectionEntry<'posts'>;

export function getSortedPosts(posts: Post[]) {
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function getPostSlug(post: Post) {
  return post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.(md|mdx)$/, '');
}

export function getTopicForPost(post: Post): Topic {
  if (post.data.topic) {
    return TOPICS.find((topic) => topic.slug === post.data.topic)!;
  }

  const haystack = [
    post.data.title,
    ...post.data.categories,
    ...post.data.tags,
  ]
    .join(' ')
    .toLowerCase();

  if (/artificial intelligence|\bai\b|llm|large language model|rag|embedding|prompt engineering|model evaluation/.test(haystack)) {
    return TOPICS.find((topic) => topic.slug === 'ai')!;
  }

  if (/engineering note|developer productivity|developer tooling|failure analysis|build pipeline|technical deep dive/.test(haystack)) {
    return TOPICS.find((topic) => topic.slug === 'engineering-notes')!;
  }

  if (/docker|kubernetes|helm|cloud-native|devops/.test(haystack)) {
    return TOPICS.find((topic) => topic.slug === 'cloud-native')!;
  }

  if (/system design|system-design|distributed|scalability|microservice/.test(haystack)) {
    return TOPICS.find((topic) => topic.slug === 'system-design')!;
  }

  if (/design pattern|designpattern|object-oriented|oops|low-level/.test(haystack)) {
    return TOPICS.find((topic) => topic.slug === 'lld')!;
  }

  if (/java|spring|jvm/.test(haystack)) {
    return TOPICS.find((topic) => topic.slug === 'java')!;
  }

  return TOPICS.find((topic) => topic.slug === 'dsa')!;
}

export function getPostsForTopic(posts: Post[], topicSlug: string) {
  return getSortedPosts(posts).filter((post) => getTopicForPost(post).slug === topicSlug);
}

export function getPostsForSeries(posts: Post[], series: string) {
  return posts
    .filter((post) => !post.data.draft && post.data.series === series)
    .sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
}

export function getPostsForLearningSection(posts: Post[], learningSection: string) {
  return getSortedPosts(posts).filter((post) => post.data.learningSection === learningSection);
}

export function formatDifficulty(difficulty?: Post['data']['difficulty']) {
  if (!difficulty) return 'Field note';
  return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
}

export function estimateReadTime(post: Post) {
  const words = post.body?.trim().split(/\s+/).filter(Boolean).length ?? 0;
  return Math.max(1, Math.ceil(words / 210));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  }).format(date);
}
