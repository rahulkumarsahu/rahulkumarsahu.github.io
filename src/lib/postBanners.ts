import type { ImageMetadata } from 'astro';
import { getBannerArt, type BannerArt } from '../data/banners';
import { DSA_SECTIONS, getLearningPath } from '../data/learningPaths';
import { getTopicForPost, type Post } from './posts';
import recursionNotebook from '../../public/images/dsa/recursion-call-stack.webp';

const descriptions: Record<BannerArt, string> = {
  dsa: 'Blueprint illustration of data structures and connected algorithm steps.',
  java: 'Blueprint illustration of Java application components and their connections.',
  lld: 'Blueprint illustration of connected classes and object relationships.',
  'system-design': 'Blueprint illustration of services, databases and the connections between them.',
  'cloud-native': 'Blueprint illustration of containers and cloud infrastructure.',
  ai: 'Blueprint illustration of connected AI components and data flow.',
  'engineering-notes': 'Blueprint illustration of an engineering workflow and its connected stages.',
  'linear-structures': 'Blueprint illustration of array cells, a vertical stack and linked nodes.',
  search: 'Blueprint illustration of search boundaries and connected data structures.',
  recursion: 'Blueprint illustration of nested recursive calls with arrows showing calls and returns.',
  trees: 'Blueprint illustration of tree nodes branching into smaller groups.',
  graphs: 'Blueprint illustration of graph nodes joined by paths.',
  'dynamic-programming': 'Blueprint illustration of related states and a dynamic programming grid.',
  databases: 'Blueprint illustration of database storage and connected data services.',
  caching: 'Blueprint illustration of a cache between an application and its data store.',
  concurrency: 'Blueprint illustration of parallel execution paths and coordination.',
};

// Preserve an article's existing custom artwork. Import additional custom covers
// here so Astro can generate correctly sized images instead of stretching them.
const customCovers: Record<string, { image: ImageMetadata; alt: string }> = {
  '/images/dsa/recursion-call-stack.webp': {
    image: recursionNotebook,
    alt: 'Notebook diagram of printNTimes calls from 3 down to the base case at 0, with separate arrows for calls and returns.',
  },
};

export function getPostBanner(post: Post) {
  const topic = getTopicForPost(post);
  const sectionSlug = post.data.learningSection ?? post.data.series;
  const dsaSection = topic.slug === 'dsa'
    ? DSA_SECTIONS.find((section) => section.slug === sectionSlug)
    : undefined;
  const path = getLearningPath(topic.slug);
  const group = path?.groups.find((item) =>
    item.sections.some((section) => section.slug === sectionSlug));
  const section = group?.sections.find((item) => item.slug === sectionSlug);
  const art = getBannerArt(topic.slug, sectionSlug, group?.slug);
  const custom = post.data.image ? customCovers[post.data.image] : undefined;

  return {
    ...art,
    image: custom?.image ?? art.image,
    alt: custom?.alt ?? descriptions[art.family],
    label: dsaSection?.title ?? section?.title ?? topic.title,
    custom: Boolean(custom),
  };
}
