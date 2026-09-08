export const REVISION_COLLECTIONS = [
  { topic: 'dsa', title: 'DSA patterns', description: 'Recognition signals, invariants, Java templates and complexity reminders.', items: ['Array traversal', 'Two pointers', 'Hashing', 'Prefix sum', 'Recursion', 'Backtracking'] },
  { topic: 'java', title: 'Java and JVM', description: 'Language rules, collections, concurrency, memory and testing reminders.', items: ['Collections choices', 'Generics', 'JVM memory', 'Concurrency', 'Testing'] },
  { topic: 'java', title: 'Spring Boot', description: 'Request flow, dependency injection, persistence, security and production checks.', items: ['Spring container', 'Request lifecycle', 'Transactions', 'Security', 'Actuator'] },
  { topic: 'lld', title: 'Low-Level Design', description: 'Principles, pattern intent, object relationships and case-study prompts.', items: ['SOLID', 'Object relationships', 'Creational patterns', 'Structural patterns', 'Behavioral patterns'] },
  { topic: 'system-design', title: 'System Design', description: 'Estimation formulas, component choices, failure modes and decision tradeoffs.', items: ['Estimation', 'Databases', 'Caching', 'Messaging', 'Reliability'] },
  { topic: 'cloud-native', title: 'Docker', description: 'Image, runtime, networking, storage and security checks.', items: ['Images and layers', 'Dockerfiles', 'Networks', 'Volumes', 'Security'] },
  { topic: 'cloud-native', title: 'Kubernetes', description: 'Workloads, networking, storage, scheduling and operations reminders.', items: ['Workloads', 'Services', 'Configuration', 'Storage', 'Reliability'] },
] as const;
