export const SITE = {
  name: 'The System Design Atlas',
  shortName: 'System Design Atlas',
  title: 'The System Design Atlas — Rahul Kumar',
  description:
    'Practical guides on DSA, Java, Spring Boot, microservices, low level design, system design, Docker, and Kubernetes.',
  tagline: 'Navigate from algorithms to distributed systems.',
  url: 'https://rahulkumarsahu.github.io',
  author: 'Rahul Kumar',
  email: 'rahulkumar060995@gmail.com',
  github: 'https://github.com/rahulkumarsahu',
  linkedin: 'https://www.linkedin.com/in/rahul-kumar-techie',
  portfolio: 'https://rahulkumarsahu.github.io/personal-portfolio/',
  scalableStack: 'https://thescalablestack.substack.com/',
  topmate: 'https://topmate.io/rahul_kumar_295',
  locale: 'en_IN',
} as const;

export const TOPICS = [
  {
    slug: 'dsa',
    number: '01',
    title: 'Data Structures & Algorithms',
    shortTitle: 'DSA',
    description:
      'Build pattern recognition through intuition, dry runs, complexity analysis, and Java-first solutions.',
    meta: 'Foundations',
    accent: 'indigo',
  },
  {
    slug: 'java',
    number: '02',
    title: 'Java, Spring Boot & Microservices',
    shortTitle: 'Java + Spring',
    description:
      'Build from modern Java and concurrency through Spring Boot applications and reliable microservices.',
    meta: 'Backend platform',
    accent: 'amber',
  },
  {
    slug: 'lld',
    number: '03',
    title: 'Low-Level Design',
    shortTitle: 'LLD',
    description:
      'Turn requirements into clean objects, patterns, interfaces, and maintainable application code.',
    meta: 'Application design',
    accent: 'cyan',
  },
  {
    slug: 'system-design',
    number: '04',
    title: 'System Design',
    shortTitle: 'Systems',
    description:
      'Reason about scale, failure, data, and trade-offs through architecture foundations and case studies.',
    meta: 'Architecture',
    accent: 'violet',
  },
  {
    slug: 'cloud-native',
    number: '05',
    title: 'Cloud Native',
    shortTitle: 'Cloud Native',
    description:
      'Package, deploy, observe, and operate reliable systems using Docker and Kubernetes.',
    meta: 'Production',
    accent: 'green',
  },
] as const;

export type Topic = (typeof TOPICS)[number];
