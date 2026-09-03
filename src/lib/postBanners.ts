import type { ImageMetadata } from 'astro';
import { getBannerArt } from '../data/banners';
import { DSA_SECTIONS, getLearningPath } from '../data/learningPaths';
import { getPostSlug, getTopicForPost, type Post } from './posts';
import recursionNotebook from '../../public/images/dsa/recursion-call-stack.webp';
import classesAndObjects from '../assets/lld/oop/classes-and-objects.png';
import lldRoadmap from '../assets/lld/roadmap/hld-vs-lld.png';

export type ArticleVisual = {
  mode: 'sequence' | 'flow' | 'compare' | 'branch';
  title: string;
  items: string[];
  result: string;
};

const articleVisuals: Record<string, ArticleVisual> = {
  array: { mode: 'flow', title: 'Build your array toolkit', items: ['Traverse', 'Search', 'Transform', 'Patterns'], result: 'A clear route from basics to interview problems' },
  'array-fundamentals': { mode: 'sequence', title: 'One value at every index', items: ['0', '1', '2', '3', '4'], result: 'Contiguous positions give constant-time access' },
  'largest-element-in-array': { mode: 'sequence', title: 'Carry the largest value forward', items: ['4', '7', '2', '9', '3'], result: 'maximum = 9' },
  'second-largest-element-in-array': { mode: 'sequence', title: 'Track two distinct leaders', items: ['7', '2', '7', '5'], result: 'largest = 7 · second = 5' },
  'check-array-sorted': { mode: 'sequence', title: 'Compare every neighbouring pair', items: ['1', '2', '2', '5'], result: '1 ≤ 2 ≤ 2 ≤ 5 · sorted' },
  'remove-duplicates-sorted-array': { mode: 'compare', title: 'Keep one copy of each value', items: ['1  1  2  2  3', '1  2  3'], result: 'write pointer returns length 3' },
  'rotate-array-left': { mode: 'compare', title: 'Move the first k values behind the rest', items: ['1  2  3  4  5', '3  4  5  1  2'], result: 'left rotation by k = 2' },
  'move-zeroes-to-end': { mode: 'compare', title: 'Compact values without changing order', items: ['0  1  0  3  12', '1  3  12  0  0'], result: 'non-zero values remain stable' },
  'union-two-sorted-arrays': { mode: 'flow', title: 'Merge in sorted order', items: ['1 1 3 5', 'two pointers', '2 3 4', '1 2 3 4 5'], result: 'advance past duplicates as you merge' },
  'find-missing-number': { mode: 'sequence', title: 'Use XOR to expose the gap', items: ['1', '2', '?', '4', '5'], result: 'missing number = 3' },
  'longest-subarray-sum-k': { mode: 'sequence', title: 'Remember where each prefix sum appeared', items: ['1', '-1', '5', '-2', '3'], result: 'sum 3 · longest length = 4' },
  'recursion-in-java-beginners-guide': { mode: 'sequence', title: 'Calls pause, then return in reverse', items: ['n = 3', 'n = 2', 'n = 1', 'base case'], result: 'the call stack empties after the base case' },
  'subsets-in-java': { mode: 'branch', title: 'Choose, explore, undo', items: ['[ ]', '[1]', '[2]', '[1, 2]'], result: 'every choice creates another valid subset' },
  'design-pattern': { mode: 'branch', title: 'Patterns grouped by purpose', items: ['Design need', 'Create', 'Compose', 'Behave'], result: 'choose a pattern only after the problem is clear' },
  'oops-concept': { mode: 'flow', title: 'Objects protect state and behaviour', items: ['Class', 'Object', 'Message', 'Result'], result: 'model responsibilities, not only data' },
  'solid-principles-practical-java': { mode: 'sequence', title: 'Five pressures on a design', items: ['S', 'O', 'L', 'I', 'D'], result: 'focused classes with safer dependencies' },
  'java-oop-for-low-level-design': { mode: 'flow', title: 'Turn a class into independent objects', items: ['Class', 'Constructor', 'Object', 'State'], result: 'each object owns its own valid state' },
  'low-level-design-roadmap': { mode: 'flow', title: 'Move from requirements to working code', items: ['Scope', 'Entities', 'Design', 'Test'], result: 'explain responsibilities, relationships and tradeoffs' },
  'system-design': { mode: 'flow', title: 'A repeatable design route', items: ['Requirements', 'Data', 'Scale', 'Failures'], result: 'make every tradeoff explicit' },
  'system-design-foundations': { mode: 'flow', title: 'Design from requirements outward', items: ['Needs', 'Estimates', 'Components', 'Tradeoffs'], result: 'architecture follows the constraints' },
  'back-of-envelope-estimation': { mode: 'sequence', title: 'Estimate before choosing components', items: ['RPS', 'Storage', 'Bandwidth', 'Concurrency'], result: '86M requests/day ≈ 1,000 requests/second' },
  'url-shortener-system-design': { mode: 'flow', title: 'Keep the redirect path short', items: ['GET /a7B', 'Cache', 'Database', '302 redirect'], result: 'analytics stays off the critical path' },
  'java-backend-foundations': { mode: 'flow', title: 'Build Java knowledge in layers', items: ['Language', 'Objects', 'Collections', 'JVM'], result: 'a foundation for backend applications' },
  'java-collections-guide': { mode: 'branch', title: 'Choose by the operation you need', items: ['Collection', 'List', 'Set', 'Map'], result: 'ordering, uniqueness and lookup decide the type' },
  'spring-boot-request-lifecycle': { mode: 'flow', title: 'Follow one request end to end', items: ['HTTP', 'Controller', 'Service', 'Repository'], result: 'response and errors return through clear boundaries' },
  'docker-container-fundamentals': { mode: 'flow', title: 'From image to isolated process', items: ['Image', 'Container', 'Process', 'Ports'], result: 'the image is the package · the container is the run' },
  'production-java-dockerfile': { mode: 'flow', title: 'Build with more, run with less', items: ['Source', 'Maven build', 'JRE image', 'App user'], result: 'small multi-stage runtime image' },
  'kubernetes-workload-fundamentals': { mode: 'flow', title: 'Declare the workload Kubernetes should maintain', items: ['Deployment', 'ReplicaSet', 'Pod', 'Service'], result: 'desired state drives reconciliation' },
  'ai-engineering-foundations': { mode: 'flow', title: 'Treat AI as a complete system', items: ['Input', 'Context', 'Model', 'Evaluation'], result: 'quality, safety, latency and cost stay measurable' },
  'failure-aware-cicd-log-reduction': { mode: 'flow', title: 'Preserve evidence, remove noise', items: ['Raw logs', 'First failure', 'Redact', 'Rank evidence'], result: '18,420 lines become a bounded diagnostic package' },
};

const customCovers: Record<string, { image: ImageMetadata; alt: string }> = {
  'recursion-in-java-beginners-guide': {
    image: recursionNotebook,
    alt: 'Notebook diagram showing the call phase, base case and return phase for printNTimes recursion.',
  },
  'java-oop-for-low-level-design': {
    image: classesAndObjects,
    alt: 'BankAccount class blueprint showing constructors creating independent objects with their own state.',
  },
  'low-level-design-roadmap': {
    image: lldRoadmap,
    alt: 'Comparison showing how high level design maps services while low level design maps classes and relationships.',
  },
};

export function getPostBanner(post: Post) {
  const topic = getTopicForPost(post);
  const slug = getPostSlug(post);
  const sectionSlug = post.data.learningSection ?? post.data.series;
  const dsaSection = topic.slug === 'dsa' ? DSA_SECTIONS.find((section) => section.slug === sectionSlug) : undefined;
  const path = getLearningPath(topic.slug);
  const group = path?.groups.find((item) => item.sections.some((section) => section.slug === sectionSlug));
  const section = group?.sections.find((item) => item.slug === sectionSlug);
  const art = getBannerArt(topic.slug, sectionSlug, group?.slug);
  const custom = customCovers[slug];
  const visual = articleVisuals[slug] ?? {
    mode: 'flow', title: post.data.title, items: ['Understand', 'Build', 'Test', 'Apply'],
    result: `A practical ${topic.shortTitle} field note`,
  } satisfies ArticleVisual;

  return {
    ...art, slug, image: custom?.image ?? art.image,
    imageUrl: `/images/articles/${slug}.svg`,
    alt: custom?.alt ?? `Educational diagram for ${post.data.title}: ${visual.title}.`,
    label: dsaSection?.title ?? section?.title ?? topic.title,
    custom: Boolean(custom), visual,
  };
}
