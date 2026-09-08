export interface SystemDesignDecision {
  slug: string;
  title: string;
  question: string;
  choices: readonly string[];
  factors: readonly string[];
  status: 'planned';
}

export const SYSTEM_DESIGN_DECISIONS: SystemDesignDecision[] = [
  { slug: 'sql-vs-nosql', title: 'SQL vs NoSQL', question: 'Which data model and guarantees fit the access pattern?', choices: ['Relational database', 'Non-relational database'], factors: ['relationships', 'transactions', 'query patterns', 'scale'], status: 'planned' },
  { slug: 'rest-vs-messaging', title: 'REST vs messaging', question: 'Should the caller wait for the work to finish?', choices: ['Synchronous API', 'Asynchronous message'], factors: ['coupling', 'latency', 'delivery', 'failure'], status: 'planned' },
  { slug: 'cache-aside-vs-write-through', title: 'Cache-aside vs write-through', question: 'Who owns cache population and consistency?', choices: ['Cache-aside', 'Write-through'], factors: ['read ratio', 'staleness', 'complexity', 'failure'], status: 'planned' },
  { slug: 'strong-vs-eventual-consistency', title: 'Strong vs eventual consistency', question: 'How soon must every reader observe a write?', choices: ['Strong consistency', 'Eventual consistency'], factors: ['correctness', 'latency', 'availability', 'conflicts'], status: 'planned' },
  { slug: 'horizontal-vs-vertical-scaling', title: 'Horizontal vs vertical scaling', question: 'Should capacity grow through larger machines or more machines?', choices: ['Scale up', 'Scale out'], factors: ['limits', 'cost', 'availability', 'operations'], status: 'planned' },
  { slug: 'replication-vs-partitioning', title: 'Replication vs partitioning', question: 'Is the primary pressure availability, reads or total data size?', choices: ['Replicate', 'Partition'], factors: ['capacity', 'failover', 'hotspots', 'rebalancing'], status: 'planned' },
  { slug: 'offset-vs-cursor-pagination', title: 'Offset vs cursor pagination', question: 'How should clients move through a changing result set?', choices: ['Offset pagination', 'Cursor pagination'], factors: ['consistency', 'random access', 'query cost', 'API design'], status: 'planned' },
  { slug: 'optimistic-vs-pessimistic-locking', title: 'Optimistic vs pessimistic locking', question: 'How likely is concurrent modification?', choices: ['Optimistic locking', 'Pessimistic locking'], factors: ['contention', 'retries', 'latency', 'correctness'], status: 'planned' },
  { slug: 'monolith-vs-microservices', title: 'Monolith vs microservices', question: 'Does distribution solve a current organisational or scaling constraint?', choices: ['Modular monolith', 'Microservices'], factors: ['team boundaries', 'deployment', 'data ownership', 'operations'], status: 'planned' },
  { slug: 'round-robin-vs-least-connections', title: 'Round robin vs least connections', question: 'Are requests similar enough to distribute evenly by count?', choices: ['Round robin', 'Least connections'], factors: ['request duration', 'server health', 'state', 'fairness'], status: 'planned' },
];
