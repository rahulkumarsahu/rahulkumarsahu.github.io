import type { ImageMetadata } from 'astro';
import type { Topic } from './site';
import dsa from '../assets/banners/dsa.png';
import java from '../assets/banners/java.png';
import lld from '../assets/banners/lld.png';
import systemDesign from '../assets/banners/system-design.png';
import cloudNative from '../assets/banners/cloud-native.png';
import ai from '../assets/banners/ai.png';
import engineeringNotes from '../assets/banners/engineering-notes.png';
import linearStructures from '../assets/banners/linear-structures.png';
import search from '../assets/banners/search.png';
import recursion from '../assets/banners/recursion.png';
import trees from '../assets/banners/trees.png';
import graphs from '../assets/banners/graphs.png';
import dynamicProgramming from '../assets/banners/dynamic-programming.png';
import databases from '../assets/banners/databases.png';
import caching from '../assets/banners/caching.png';
import concurrency from '../assets/banners/concurrency.png';

export const BANNER_ART = {
  dsa, java, lld,
  'system-design': systemDesign,
  'cloud-native': cloudNative,
  ai,
  'engineering-notes': engineeringNotes,
  'linear-structures': linearStructures,
  search, recursion, trees, graphs,
  'dynamic-programming': dynamicProgramming,
  databases, caching, concurrency,
} satisfies Record<string, ImageMetadata>;

export type BannerArt = keyof typeof BANNER_ART;

const accents: Record<Topic['slug'], string> = {
  dsa: '#d5ed9b',
  java: '#ffd39a',
  lld: '#a0ecdf',
  'system-design': '#d6c5ff',
  'cloud-native': '#c0f0bb',
  ai: '#ffc6db',
  'engineering-notes': '#ffcca3',
};

// Subject families keep related chapters recognizable without making a new image
// a requirement every time an author adds another subsection.
const sectionArt: Record<string, BannerArt> = {
  complexity: 'dsa',
  arrays: 'linear-structures',
  hashing: 'search',
  'binary-search': 'search',
  'linked-lists': 'linear-structures',
  'stacks-queues': 'linear-structures',
  'recursion-backtracking': 'recursion',
  trees: 'trees',
  heaps: 'trees',
  graphs: 'graphs',
  greedy: 'graphs',
  'dynamic-programming': 'dynamic-programming',
  'object-oriented-java': 'lld',
  'collections-generics-streams': 'linear-structures',
  'jvm-memory-performance': 'linear-structures',
  'java-concurrency': 'concurrency',
  'java-testing-build-tools': 'engineering-notes',
  'spring-data-transactions': 'databases',
  'spring-testing': 'engineering-notes',
  'spring-production': 'cloud-native',
  'microservice-data': 'databases',
  'microservice-observability': 'engineering-notes',
  'multithreading-foundations': 'concurrency',
  'thread-safe-design': 'concurrency',
  'concurrency-patterns': 'concurrency',
  'lld-design-process': 'lld',
  'lld-case-studies': 'lld',
  'database-fundamentals': 'databases',
  'indexes-transactions': 'databases',
  'replication-partitioning': 'databases',
  caching: 'caching',
  'messaging-events': 'concurrency',
  'traffic-management': 'graphs',
  'storage-delivery-search': 'databases',
  'observability-operations': 'engineering-notes',
  'embeddings-vector-search': 'databases',
  'rag-systems': 'ai',
  'prompting-context': 'ai',
  'tool-use-agents': 'ai',
  'data-pipeline-deep-dives': 'databases',
  'architecture-deep-dives': 'system-design',
  'platform-patterns': 'cloud-native',
};

export function getBannerArt(topic: Topic['slug'], section?: string, group?: string) {
  const family = section && sectionArt[section]
    ? sectionArt[section]
    : topic === 'java' && group === 'microservices' ? 'system-design'
    : topic === 'cloud-native' && group === 'operations' ? 'engineering-notes'
    : topic === 'engineering-notes' && group === 'architecture-experiments' ? 'system-design'
    : topic;

  return { family, image: BANNER_ART[family], accent: accents[topic] };
}
