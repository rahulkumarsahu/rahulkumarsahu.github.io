export interface ProjectResource {
  title: string;
  href: string;
  note: string;
}

export interface ProjectMilestone {
  id: string;
  number: string;
  title: string;
  outcome: string;
  concepts: string[];
  resources: ProjectResource[];
  planned: string[];
}

export const URL_SHORTENER_MILESTONES: ProjectMilestone[] = [
  {
    id: 'domain-model', number: '01', title: 'Model the domain using LLD', outcome: 'Define links, aliases, expiry rules, responsibilities and extension points before choosing infrastructure.',
    concepts: ['entities and value objects', 'invariants', 'service boundaries'],
    resources: [
      { title: 'Java OOP for LLD', href: '/posts/java-oop-for-low-level-design/', note: 'Model responsibility and object state.' },
      { title: 'Low Level Design Roadmap', href: '/posts/low-level-design-roadmap/', note: 'Use a repeatable design process.' },
    ],
    planned: ['URL shortener domain model walkthrough'],
  },
  {
    id: 'core-java', number: '02', title: 'Implement the core logic in Java', outcome: 'Create short codes, resolve destinations and enforce domain rules with testable Java classes.',
    concepts: ['modern Java', 'collections', 'error handling'],
    resources: [
      { title: 'Java Foundations for Backend Engineers', href: '/posts/java-backend-foundations/', note: 'Review the Java building blocks used by the service.' },
      { title: 'Choosing the Right Java Collection', href: '/posts/java-collections-guide/', note: 'Choose maps and sets from access patterns.' },
    ],
    planned: ['Core service implementation and unit tests'],
  },
  {
    id: 'rest-api', number: '03', title: 'Expose REST APIs using Spring Boot', outcome: 'Create endpoints for shortening and redirecting while keeping transport concerns outside the domain model.',
    concepts: ['request lifecycle', 'controllers and services', 'HTTP contracts'],
    resources: [
      { title: 'How a Spring Boot Request Flows Through an Application', href: '/posts/spring-boot-request-lifecycle/', note: 'Follow a request through the application boundary.' },
    ],
    planned: ['URL API contract and controller implementation'],
  },
  {
    id: 'persistence-tests', number: '04', title: 'Add validation, persistence and tests', outcome: 'Store link mappings safely, validate requests and protect behavior with focused tests.',
    concepts: ['validation', 'repository boundaries', 'integration testing'],
    resources: [],
    planned: ['Persistence model', 'Validation and testing strategy'],
  },
  {
    id: 'cache-rate-limit', number: '05', title: 'Add caching and rate limiting', outcome: 'Reduce redirect latency and protect write endpoints without hiding freshness or failure behavior.',
    concepts: ['cache-aside', 'eviction', 'rate limiting'],
    resources: [
      { title: 'Interactive LRU cache simulator', href: '/topics/system-design/caching/', note: 'Explore hits, misses, recency and eviction.' },
    ],
    planned: ['Cache integration', 'Token bucket rate limiter'],
  },
  {
    id: 'distributed-scale', number: '06', title: 'Reason about distributed scaling', outcome: 'Estimate demand and decide how identifiers, storage, caches and redirects behave across many instances.',
    concepts: ['capacity estimation', 'key generation', 'replication and failure'],
    resources: [
      { title: 'URL Shortener System Design', href: '/posts/url-shortener-system-design/', note: 'Connect requirements to the distributed architecture.' },
      { title: 'Back of the Envelope Estimation', href: '/posts/back-of-envelope-estimation/', note: 'Use workload numbers to guide the design.' },
    ],
    planned: ['Failure-mode review and scaling worksheet'],
  },
  {
    id: 'docker', number: '07', title: 'Package the application with Docker', outcome: 'Build a small, reproducible container image with a clear runtime boundary.',
    concepts: ['image layers', 'multi-stage builds', 'non-root runtime'],
    resources: [
      { title: 'Docker and Container Fundamentals', href: '/posts/docker-container-fundamentals/', note: 'Understand the process and image model.' },
      { title: 'A Production Minded Dockerfile for Java', href: '/posts/production-java-dockerfile/', note: 'Package Java with production constraints in view.' },
    ],
    planned: ['Project Dockerfile and local Compose environment'],
  },
  {
    id: 'kubernetes', number: '08', title: 'Deploy it using Kubernetes', outcome: 'Run replicated instances behind stable networking with explicit resources and rollout behavior.',
    concepts: ['Deployments', 'Services', 'configuration and rollouts'],
    resources: [
      { title: 'Kubernetes Workload Fundamentals', href: '/posts/kubernetes-workload-fundamentals/', note: 'Choose and configure the workload controller.' },
    ],
    planned: ['Deployment, Service and configuration manifests'],
  },
  {
    id: 'observability', number: '09', title: 'Add health checks, metrics, logging and tracing', outcome: 'Make correctness, latency and failure visible before the service reaches production.',
    concepts: ['health signals', 'structured logs', 'metrics and traces'],
    resources: [],
    planned: ['OpenTelemetry instrumentation', 'Service dashboard and alert review'],
  },
];
