import { URL_SHORTENER_MILESTONES } from './connectedProject';
import { getPostSlug, type Post } from '../lib/posts';

export interface GoalLesson {
  title: string;
  slug?: string;
}

export interface LearningGoal {
  id: string;
  title: string;
  introduction: string;
  audience: string;
  prerequisites: string;
  outcome: string;
  topics: string[];
  accent: 'indigo' | 'amber' | 'cyan' | 'green';
  destination: { title: string; href: string };
  lessons: GoalLesson[];
}

// The beginner sequence is shared with the existing Start Here panel.
export const DSA_STARTER_SLUGS = [
  'array-fundamentals',
  'largest-element-in-array',
  'check-array-sorted',
  'move-zeroes-to-end',
  'recursion-in-java-beginners-guide',
  'subsets-in-java',
] as const;

export const LEARNING_GOALS: LearningGoal[] = [
  {
    id: 'dsa-beginner',
    title: 'Learn DSA from the beginning',
    introduction: 'Start with an array, solve a few small problems, then follow your first recursive calls.',
    audience: 'Your first DSA course, or a fresh start after learning by memorising solutions.',
    prerequisites: 'Basic Java variables, loops and methods. No previous DSA experience needed.',
    outcome: 'Traverse arrays, explain a running answer, move values in place and trace recursive subset generation.',
    topics: ['dsa'],
    accent: 'indigo',
    destination: { title: 'Explore all DSA topics', href: '/topics/dsa/' },
    lessons: [
      { slug: 'array-fundamentals', title: 'Array Fundamentals in Java' },
      { slug: 'largest-element-in-array', title: 'Find the Largest Element in an Array' },
      { slug: 'check-array-sorted', title: 'Check Whether an Array Is Sorted' },
      { slug: 'move-zeroes-to-end', title: 'Move Zeroes to the End' },
      { slug: 'recursion-in-java-beginners-guide', title: 'Recursion in Java: A Beginner’s Guide' },
      { slug: 'subsets-in-java', title: 'Subsets in Java' },
      { title: 'Big O and choosing an approach' },
      { title: 'Binary search and boundary decisions' },
      { title: 'Linked lists, stacks and queues' },
      { title: 'From recursion to tree and graph problems' },
    ],
  },
  {
    id: 'java-backend',
    title: 'Become a Java backend engineer',
    introduction: 'Connect the Java language to object design, collections and the path of a Spring Boot request.',
    audience: 'You can write small programs and want to understand how backend services fit together.',
    prerequisites: 'Basic programming and familiarity with methods. A local JDK helps you try the examples.',
    outcome: 'Model object responsibilities, choose Java collections and follow a request through controllers and services.',
    topics: ['java', 'lld'],
    accent: 'amber',
    destination: { title: 'Explore Java, Spring Boot and Microservices', href: '/topics/java/' },
    lessons: [
      { slug: 'java-backend-foundations', title: 'Java Foundations for Backend Engineers' },
      { slug: 'java-oop-for-low-level-design', title: 'Java OOP for LLD' },
      { slug: 'java-collections-guide', title: 'Choosing the Right Java Collection' },
      { slug: 'solid-principles-practical-java', title: 'SOLID Principles in Practical Java' },
      { slug: 'spring-boot-request-lifecycle', title: 'How a Spring Boot Request Flows Through an Application' },
      { title: 'Exceptions and unit tests' },
      { title: 'Spring dependency injection and configuration' },
      { title: 'Persistence and transactions' },
      { title: 'Security and integration testing' },
      { title: 'Microservice communication and resilience' },
    ],
  },
  {
    id: 'system-design-interviews',
    title: 'Prepare for system design interviews',
    introduction: 'Turn a vague product request into requirements, estimates and an architecture you can explain.',
    audience: 'Backend engineers preparing for their first system design interview or revisiting the fundamentals.',
    prerequisites: 'Basic HTTP, APIs and databases. Experience with distributed systems is optional.',
    outcome: 'Clarify requirements, estimate traffic and storage, and discuss the tradeoffs in a URL shortener design.',
    topics: ['system-design'],
    accent: 'cyan',
    destination: { title: 'Explore system design topics', href: '/topics/system-design/' },
    lessons: [
      { slug: 'system-design-foundations', title: 'System Design Foundations' },
      { slug: 'back-of-envelope-estimation', title: 'Back of the Envelope Estimation' },
      { slug: 'url-shortener-system-design', title: 'URL Shortener System Design' },
      { title: 'Database indexes, replication and partitioning' },
      { title: 'Caching strategies and consistency tradeoffs' },
      { title: 'Queues, delivery guarantees and failure handling' },
      { title: 'A timed design interview walkthrough' },
    ],
  },
  {
    id: 'url-shortener',
    title: 'Build the production URL shortener',
    introduction: 'Use one service to connect LLD, Java, Spring Boot, system design, Docker and Kubernetes.',
    audience: 'You learn best through a project and want to understand each layer of a backend service.',
    prerequisites: 'Basic Java and HTTP, plus a local development environment for later implementation work.',
    outcome: 'Understand the design, Java building blocks and deployment concepts you will use in the project. Implementation walkthroughs are still planned.',
    topics: ['cloud-native'],
    accent: 'green',
    destination: { title: 'Open the nine project milestones', href: '/projects/production-url-shortener/' },
    lessons: URL_SHORTENER_MILESTONES.flatMap((milestone) => [
      ...milestone.resources.filter((resource) => resource.href.startsWith('/posts/')).map((resource) => ({
        title: resource.title,
        slug: resource.href.replace(/^\/posts\//, '').replace(/\/$/, ''),
      })),
      ...milestone.planned.map((title) => ({ title })),
    ]),
  },
];

export function resolveLearningGoal(goal: LearningGoal, posts: Post[]) {
  const published = new Map(posts.filter((post) => !post.data.draft).map((post) => [getPostSlug(post), post]));
  const available: Post[] = [];
  const planned: GoalLesson[] = [];
  const seen = new Set<string>();
  for (const lesson of goal.lessons) {
    const post = lesson.slug ? published.get(lesson.slug) : undefined;
    if (post && !seen.has(getPostSlug(post))) {
      available.push(post);
      seen.add(getPostSlug(post));
    } else if (!post) {
      planned.push(lesson);
    }
  }
  return { goal, available, planned, first: available[0] };
}
