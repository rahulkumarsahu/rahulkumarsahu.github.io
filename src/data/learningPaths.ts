export const DSA_SECTIONS = [
  {
    slug: 'complexity',
    number: '01',
    title: 'Complexity and foundations',
    description: 'Learn Big O, constraints, dry runs, invariants, and how to compare possible approaches.',
    topics: ['Time and space complexity', 'Constraints', 'Dry runs', 'Recursion basics'],
  },
  {
    slug: 'arrays',
    number: '02',
    title: 'Arrays',
    description: 'Start with traversal, then build toward two pointers, hashing, prefix sums, and in place transformations.',
    topics: ['Traversal', 'Two pointers', 'Rotation', 'Hashing', 'Prefix sums'],
  },
  {
    slug: 'hashing',
    number: '03',
    title: 'Hashing and sliding windows',
    description: 'Use fast lookups and controlled windows to remove repeated work.',
    topics: ['HashMap', 'HashSet', 'Frequency maps', 'Sliding window'],
  },
  {
    slug: 'binary-search',
    number: '04',
    title: 'Binary search',
    description: 'Search sorted data, find boundaries, and binary search an answer space with a clear invariant.',
    topics: ['Classic search', 'Lower and upper bounds', 'Rotated arrays', 'Search on answer'],
  },
  {
    slug: 'linked-lists',
    number: '05',
    title: 'Linked lists',
    description: 'Reason about pointers, ownership, cycles, and local changes to a chain of nodes.',
    topics: ['Pointer movement', 'Reversal', 'Fast and slow pointers', 'Merge patterns'],
  },
  {
    slug: 'stacks-queues',
    number: '06',
    title: 'Stacks and queues',
    description: 'Model ordering, deferred work, monotonic structures, and breadth first processing.',
    topics: ['Stack', 'Queue', 'Deque', 'Monotonic stack'],
  },
  {
    slug: 'recursion-backtracking',
    number: '07',
    title: 'Recursion and backtracking',
    description: 'Define state, choices, stopping conditions, and how to undo a choice safely.',
    topics: ['Recursion trees', 'Subsets', 'Permutations', 'Constraint search'],
  },
  {
    slug: 'trees',
    number: '08',
    title: 'Trees',
    description: 'Traverse hierarchical data and learn the recursive patterns behind most tree problems.',
    topics: ['DFS', 'BFS', 'Binary search trees', 'Lowest common ancestor'],
  },
  {
    slug: 'heaps',
    number: '09',
    title: 'Heaps and priority queues',
    description: 'Keep the next best candidate available without sorting everything repeatedly.',
    topics: ['Top K', 'Two heaps', 'K way merge', 'Scheduling'],
  },
  {
    slug: 'graphs',
    number: '10',
    title: 'Graphs',
    description: 'Model relationships, connectivity, dependencies, paths, and cycles.',
    topics: ['Graph traversal', 'Topological sort', 'Shortest paths', 'Union find'],
  },
  {
    slug: 'greedy',
    number: '11',
    title: 'Greedy algorithms',
    description: 'Recognize when the best local choice can safely lead to a global result.',
    topics: ['Intervals', 'Scheduling', 'Exchange arguments', 'Ordering'],
  },
  {
    slug: 'dynamic-programming',
    number: '12',
    title: 'Dynamic programming',
    description: 'Turn repeated recursive work into explicit state, transitions, and reusable results.',
    topics: ['One dimensional DP', 'Grid DP', 'Subsequences', 'Partition DP'],
  },
] as const;

export const LEARNING_PATHS = [
  {
    slug: 'java',
    number: '02',
    title: 'Java, Spring Boot & Microservices',
    description: 'Move from modern Java to production Spring Boot applications and reliable microservices.',
    groups: [
      {
        slug: 'core-java', number: '01', title: 'Core Java',
        description: 'Build strong language, library, JVM, testing, and concurrency foundations before adding a framework.',
        sections: [
          { slug: 'java-language-foundations', number: '01', title: 'Java language foundations', description: 'Learn syntax, control flow, methods, exceptions, packages, and the modern language features used in backend code.', topics: ['Types and variables', 'Control flow', 'Methods', 'Exceptions', 'Packages and modules', 'Records and sealed classes'] },
          { slug: 'object-oriented-java', number: '02', title: 'Object oriented Java', description: 'Use objects to protect rules and make code easier to understand and change.', topics: ['Classes and objects', 'Encapsulation', 'Immutability', 'Interfaces', 'Inheritance', 'Composition and polymorphism'] },
          { slug: 'collections-generics-streams', number: '03', title: 'Collections, generics and streams', description: 'Choose data structures by behavior and process data with type safe, readable APIs.', topics: ['Generics', 'List, Set and Map', 'Queues and deques', 'Lambdas', 'Stream API', 'Optional'] },
          { slug: 'jvm-memory-performance', number: '04', title: 'JVM, memory and performance', description: 'Understand what happens below the language when Java code is loaded, allocated, collected, and profiled.', topics: ['JVM architecture', 'Heap and stack', 'Class loading', 'Garbage collection', 'Profiling', 'Memory leaks'] },
          { slug: 'java-concurrency', number: '05', title: 'Concurrency and multithreading', description: 'Write concurrent code with clear ownership, safe shared state, and the right high level abstractions.', topics: ['Processes and threads', 'Java Memory Model', 'Synchronization and locks', 'Executors', 'Concurrent collections', 'Virtual threads'] },
          { slug: 'java-testing-build-tools', number: '06', title: 'Testing and build tools', description: 'Build repeatable Java projects and test behavior without tying tests to implementation details.', topics: ['JUnit', 'Mockito', 'Maven', 'Gradle', 'Debugging', 'Logging'] },
        ],
      },
      {
        slug: 'spring-boot', number: '02', title: 'Spring Boot',
        description: 'Build complete backend applications from dependency injection through security, persistence, testing, and operations.',
        sections: [
          { slug: 'spring-core', number: '01', title: 'Spring Core', description: 'Understand the container and the design ideas that the rest of Spring builds upon.', topics: ['IoC and dependency injection', 'Beans and lifecycle', 'Configuration', 'AOP', 'Events', 'Validation'] },
          { slug: 'spring-boot-foundations', number: '02', title: 'Spring Boot foundations', description: 'Use starters, auto configuration, profiles, and external configuration without treating them as magic.', topics: ['Starters', 'Auto configuration', 'Application configuration', 'Profiles', 'Configuration properties', 'Application lifecycle'] },
          { slug: 'spring-rest-apis', number: '03', title: 'REST APIs and web', description: 'Design a clean request path from HTTP input to application behavior and a useful response.', topics: ['Spring MVC', 'Request lifecycle', 'Controllers and DTOs', 'Validation', 'Exception handling', 'API versioning'] },
          { slug: 'spring-data-transactions', number: '04', title: 'Data access and transactions', description: 'Keep persistence decisions explicit while using Spring JDBC, JPA, and transaction management.', topics: ['Spring JDBC', 'Spring Data JPA', 'Hibernate', 'Transactions', 'Database migrations', 'Query performance'] },
          { slug: 'spring-security', number: '05', title: 'Spring Security', description: 'Protect APIs with clear authentication, authorization, and security boundaries.', topics: ['Security filter chain', 'Authentication', 'Authorization', 'JWT', 'OAuth 2', 'Method security'] },
          { slug: 'spring-testing', number: '06', title: 'Testing Spring applications', description: 'Choose the smallest useful test and add integration coverage where framework wiring matters.', topics: ['Unit tests', 'Slice tests', 'Integration tests', 'MockMvc', 'Testcontainers', 'Contract tests'] },
          { slug: 'spring-production', number: '07', title: 'Production readiness', description: 'Make application health, behavior, and configuration visible before deploying to production.', topics: ['Actuator', 'Health checks', 'Metrics', 'Logging', 'Tracing', 'Graceful shutdown'] },
        ],
      },
      {
        slug: 'microservices', number: '03', title: 'Microservices',
        description: 'Learn where service boundaries help, what distribution costs, and how Spring supports common operational patterns.',
        sections: [
          { slug: 'microservice-foundations', number: '01', title: 'Microservice foundations', description: 'Start with boundaries and independent delivery before choosing infrastructure.', topics: ['When to use microservices', 'Service boundaries', 'Domain ownership', 'Independent deployment', 'API contracts', 'Monolith to services'] },
          { slug: 'service-communication', number: '02', title: 'Service communication', description: 'Choose synchronous or asynchronous communication based on coupling, latency, and failure behavior.', topics: ['REST', 'gRPC', 'Messaging', 'Events', 'Idempotency', 'Schema evolution'] },
          { slug: 'microservice-resilience', number: '03', title: 'Resilience patterns', description: 'Control failure propagation with explicit time and resource boundaries.', topics: ['Timeouts', 'Retries', 'Circuit breakers', 'Bulkheads', 'Rate limiting', 'Graceful degradation'] },
          { slug: 'spring-cloud', number: '04', title: 'Spring Cloud patterns', description: 'Apply distributed configuration, discovery, routing, and client side resilience where they are justified.', topics: ['Configuration server', 'Service discovery', 'Load balancing', 'API gateway', 'Circuit breaker', 'Spring Cloud Stream'] },
          { slug: 'microservice-data', number: '05', title: 'Data across services', description: 'Keep service ownership clear while coordinating workflows that span more than one database.', topics: ['Database per service', 'Eventual consistency', 'Outbox pattern', 'Saga pattern', 'CQRS', 'Distributed transactions'] },
          { slug: 'microservice-observability', number: '06', title: 'Microservice observability', description: 'Follow one request across services and measure behavior from the user’s point of view.', topics: ['Correlation IDs', 'Centralized logs', 'Metrics', 'Distributed tracing', 'SLIs and SLOs', 'Alerting'] },
        ],
      },
    ],
  },
  {
    slug: 'lld',
    number: '03',
    title: 'Low Level Design',
    description: 'Turn requirements into objects, responsibilities, interfaces, and maintainable code.',
    groups: [
      {
        slug: 'object-design', number: '01', title: 'Object design', description: 'Model responsibilities, relationships, state, and behavior before thinking about patterns.',
        sections: [
          { slug: 'object-oriented-design', number: '01', title: 'OOP foundations', description: 'Use encapsulation, abstraction, polymorphism, and composition to create understandable boundaries.', topics: ['Objects and responsibilities', 'Encapsulation', 'Abstraction', 'Polymorphism', 'Inheritance', 'Composition'] },
          { slug: 'relationships-uml', number: '02', title: 'Relationships and UML', description: 'Communicate how objects know about, own, and collaborate with each other.', topics: ['Association', 'Aggregation', 'Composition', 'Dependency', 'Class diagrams', 'Sequence diagrams'] },
          { slug: 'domain-modeling', number: '03', title: 'Domain modeling', description: 'Translate requirements into entities, values, rules, states, and use cases.', topics: ['Entities and value objects', 'Invariants', 'State machines', 'Use cases', 'Boundaries', 'Domain services'] },
        ],
      },
      {
        slug: 'design-principles', number: '02', title: 'Design principles', description: 'Use principles as questions that expose change risk, unclear ownership, and unnecessary complexity.',
        sections: [
          { slug: 'solid-principles', number: '01', title: 'SOLID principles', description: 'Apply SOLID when it makes an expected change safer and the code easier to test.', topics: ['Single responsibility', 'Open closed', 'Liskov substitution', 'Interface segregation', 'Dependency inversion'] },
          { slug: 'cohesion-coupling', number: '02', title: 'Cohesion, coupling and composition', description: 'Keep related decisions together and reduce the knowledge each component needs about the rest.', topics: ['High cohesion', 'Loose coupling', 'Composition over inheritance', 'Information hiding', 'Dependency direction'] },
          { slug: 'simple-design', number: '03', title: 'Simple design', description: 'Avoid abstractions that do not yet solve a real problem.', topics: ['DRY', 'KISS', 'YAGNI', 'Law of Demeter', 'Tell, do not ask', 'Refactoring signals'] },
        ],
      },
      {
        slug: 'design-patterns', number: '03', title: 'Design patterns', description: 'Learn patterns through their intent, tradeoffs, and the design pressure they resolve.',
        sections: [
          { slug: 'design-pattern-foundations', number: '01', title: 'Pattern foundations', description: 'Learn when a named pattern helps, what it costs, and how to compare it with a simpler design.', topics: ['Intent and design pressure', 'Pattern tradeoffs', 'Composition', 'Extension points', 'Recognizing overengineering'] },
          { slug: 'creational-patterns', number: '02', title: 'Creational patterns', description: 'Separate object creation when construction varies or carries important rules.', topics: ['Factory Method', 'Abstract Factory', 'Builder', 'Prototype', 'Singleton tradeoffs'] },
          { slug: 'structural-patterns', number: '03', title: 'Structural patterns', description: 'Compose objects and interfaces without exposing unnecessary implementation detail.', topics: ['Adapter', 'Decorator', 'Facade', 'Composite', 'Proxy', 'Bridge'] },
          { slug: 'behavioral-patterns', number: '04', title: 'Behavioral patterns', description: 'Organize changing behavior and communication between collaborating objects.', topics: ['Strategy', 'Observer', 'Command', 'State', 'Template Method', 'Chain of Responsibility'] },
        ],
      },
      {
        slug: 'concurrent-design', number: '04', title: 'Multithreading and concurrency', description: 'Design object interactions that remain correct when work happens at the same time.',
        sections: [
          { slug: 'multithreading-foundations', number: '01', title: 'Multithreading foundations', description: 'Understand threads, tasks, executors, and where concurrency changes a design.', topics: ['Threads and tasks', 'Executors', 'Thread pools', 'Futures', 'Virtual threads', 'Structured concurrency'] },
          { slug: 'thread-safe-design', number: '02', title: 'Thread safe design', description: 'Protect invariants through immutability, confinement, synchronization, and safe publication.', topics: ['Race conditions', 'Immutability', 'Thread confinement', 'Locks', 'Atomics', 'Concurrent collections'] },
          { slug: 'concurrency-patterns', number: '03', title: 'Concurrency patterns', description: 'Coordinate work with established patterns while keeping failure and backpressure visible.', topics: ['Producer consumer', 'Worker pool', 'Read write lock', 'Guarded suspension', 'Backpressure', 'Async pipelines'] },
        ],
      },
      {
        slug: 'practice', number: '05', title: 'Design practice', description: 'Turn a short requirement into tested code and explain how the design can evolve.',
        sections: [
          { slug: 'lld-design-process', number: '01', title: 'A repeatable LLD process', description: 'Clarify requirements, find responsibilities, model interactions, and validate the design with examples.', topics: ['Requirement questions', 'Use cases', 'Core objects', 'Interactions', 'Extension points', 'Testing strategy'] },
          { slug: 'lld-case-studies', number: '02', title: 'LLD case studies', description: 'Practice complete designs and compare reasonable alternatives.', topics: ['Parking lot', 'Elevator', 'Splitwise', 'Cache', 'Booking system', 'Notification service'] },
        ],
      },
    ],
  },
  {
    slug: 'system-design',
    number: '04',
    title: 'System Design',
    description: 'Learn how requirements become architecture, data models, APIs, and operational choices.',
    groups: [
      {
        slug: 'design-process', number: '01', title: 'Design process', description: 'Move from a vague product idea to measurable requirements, APIs, data, and tradeoffs.',
        sections: [
          { slug: 'system-design-foundations', number: '01', title: 'System design foundations', description: 'Clarify functional requirements and the quality attributes that should drive architecture.', topics: ['Functional requirements', 'Quality attributes', 'Latency and throughput', 'Availability and durability', 'Consistency', 'Tradeoffs'] },
          { slug: 'capacity-estimation', number: '02', title: 'Capacity estimation', description: 'Use simple numbers to reveal which parts of a design need special attention.', topics: ['Requests per second', 'Peak traffic', 'Storage', 'Bandwidth', 'Concurrency', 'Growth assumptions'] },
          { slug: 'api-data-modeling', number: '03', title: 'API and data modeling', description: 'Make the main workflows and ownership boundaries concrete before drawing infrastructure.', topics: ['API contracts', 'Data models', 'Read and write paths', 'Pagination', 'Idempotency', 'Schema evolution'] },
        ],
      },
      {
        slug: 'data-systems', number: '02', title: 'Databases and caching', description: 'Choose storage and caching strategies from access patterns, consistency needs, and failure behavior.',
        sections: [
          { slug: 'database-fundamentals', number: '01', title: 'Database fundamentals', description: 'Choose a data model and store by the guarantees the application needs.', topics: ['Relational databases', 'Document stores', 'Key value stores', 'Wide column stores', 'Graph databases', 'Choosing a database'] },
          { slug: 'indexes-transactions', number: '02', title: 'Indexes and transactions', description: 'Understand how query access paths and transaction guarantees affect correctness and performance.', topics: ['Indexes', 'Query plans', 'ACID', 'Isolation levels', 'Locking', 'Optimistic concurrency'] },
          { slug: 'replication-partitioning', number: '03', title: 'Replication and partitioning', description: 'Scale and protect data while reasoning about lag, hotspots, and rebalancing.', topics: ['Leader follower', 'Multi leader', 'Leaderless replication', 'Sharding', 'Consistent hashing', 'Rebalancing'] },
          { slug: 'caching', number: '04', title: 'Caching', description: 'Reduce latency and load without hiding staleness, invalidation, and failure tradeoffs.', topics: ['Cache aside', 'Read through and write through', 'TTL and eviction', 'Invalidation', 'Distributed caches', 'Cache failure'] },
        ],
      },
      {
        slug: 'distributed-systems', number: '03', title: 'Distributed systems', description: 'Reason about partial failure, coordination, time, and data that exists in more than one place.',
        sections: [
          { slug: 'distributed-system-fundamentals', number: '01', title: 'Distributed system foundations', description: 'Build the mental model needed for systems where the network and other machines can fail independently.', topics: ['Partial failure', 'Network latency', 'Clocks and ordering', 'Fault models', 'Redundancy', 'Failure detection'] },
          { slug: 'consistency-consensus', number: '02', title: 'Consistency and consensus', description: 'Understand the guarantees a distributed system can provide and the coordination they require.', topics: ['Consistency models', 'CAP', 'Quorums', 'Leader election', 'Consensus', 'Distributed locks'] },
          { slug: 'messaging-events', number: '03', title: 'Messaging and event systems', description: 'Decouple work with queues and streams while making delivery and ordering guarantees explicit.', topics: ['Message queues', 'Event streams', 'Delivery semantics', 'Ordering', 'Consumer groups', 'Dead letter queues'] },
          { slug: 'distributed-reliability', number: '04', title: 'Failure and reliability patterns', description: 'Prevent a local failure from becoming a system wide outage.', topics: ['Timeouts', 'Retries and backoff', 'Circuit breakers', 'Bulkheads', 'Rate limiting', 'Graceful degradation'] },
        ],
      },
      {
        slug: 'building-blocks', number: '04', title: 'Architecture building blocks', description: 'Understand the common components that appear in scalable architectures and the job each one performs.',
        sections: [
          { slug: 'traffic-management', number: '01', title: 'Traffic management', description: 'Route, protect, and balance requests before they reach application services.', topics: ['DNS', 'Load balancers', 'API gateways', 'Reverse proxies', 'Rate limiters', 'Service discovery'] },
          { slug: 'storage-delivery-search', number: '02', title: 'Storage, delivery and search', description: 'Serve large objects and searchable content without forcing every request through the primary database.', topics: ['Object storage', 'Block and file storage', 'CDN', 'Search indexes', 'Blob metadata', 'Data pipelines'] },
          { slug: 'observability-operations', number: '03', title: 'Observability and operations', description: 'Measure system behavior, investigate failures, and plan capacity before users notice a problem.', topics: ['Metrics', 'Logs', 'Traces', 'SLIs and SLOs', 'Alerting', 'Incident response'] },
          { slug: 'system-security', number: '04', title: 'Security and abuse prevention', description: 'Treat identity, authorization, data protection, and misuse as architecture concerns.', topics: ['Authentication', 'Authorization', 'Encryption', 'Secrets', 'Threat modeling', 'Abuse prevention'] },
        ],
      },
      {
        slug: 'case-studies', number: '05', title: 'Case studies', description: 'Apply the same design process to products with different traffic, data, and reliability needs.',
        sections: [
          { slug: 'system-design-case-studies', number: '01', title: 'System design case studies', description: 'Practice complete designs and compare the decisions that change from one product to another.', topics: ['URL shortener', 'Notification service', 'Chat system', 'News feed', 'Payment system', 'File storage'] },
        ],
      },
    ],
  },
  {
    slug: 'cloud-native',
    number: '05',
    title: 'Cloud Native',
    description: 'Package, deploy, observe, and operate services with Docker and Kubernetes.',
    groups: [
      {
        slug: 'containers', number: '01', title: 'Docker and containers', description: 'Understand the container model, then build images and local environments that are small, safe, and repeatable.',
        sections: [
          { slug: 'docker-foundations', number: '01', title: 'Container foundations', description: 'Understand images, containers, layers, registries, isolation, and process boundaries.', topics: ['Containers and virtual machines', 'Images and layers', 'Container lifecycle', 'Registries', 'Ports', 'Volumes'] },
          { slug: 'docker-images-builds', number: '02', title: 'Dockerfiles and image builds', description: 'Create efficient, reproducible images and keep build tooling out of the runtime image.', topics: ['Dockerfile instructions', 'Build context', 'Layer cache', 'Multi stage builds', 'Base images', 'Multi platform builds'] },
          { slug: 'docker-compose-networking', number: '03', title: 'Compose, networking and storage', description: 'Run applications with multiple containers and make their communication and state explicit.', topics: ['Docker Compose', 'Container networks', 'DNS', 'Volumes', 'Environment configuration', 'Local dependencies'] },
          { slug: 'container-security', number: '04', title: 'Container security', description: 'Reduce the attack surface of images and protect the runtime and software supply chain.', topics: ['Non root containers', 'Minimal images', 'Secrets', 'Image scanning', 'SBOM', 'Runtime security'] },
        ],
      },
      {
        slug: 'kubernetes', number: '02', title: 'Kubernetes', description: 'Learn the cluster abstractions used to run, connect, configure, scale, and protect workloads.',
        sections: [
          { slug: 'kubernetes-architecture', number: '01', title: 'Cluster architecture', description: 'Understand the control plane, worker nodes, controllers, and desired state model.', topics: ['Control plane', 'Worker nodes', 'API server', 'Scheduler', 'Controllers', 'etcd'] },
          { slug: 'kubernetes-workloads', number: '02', title: 'Workloads', description: 'Choose the controller that matches how an application should run and change.', topics: ['Pods', 'Deployments', 'ReplicaSets', 'StatefulSets', 'DaemonSets', 'Jobs and CronJobs'] },
          { slug: 'kubernetes-networking', number: '03', title: 'Services and networking', description: 'Give replaceable workloads stable discovery and controlled network access.', topics: ['Services', 'Cluster DNS', 'Ingress', 'Gateway API', 'Network policies', 'Load balancing'] },
          { slug: 'kubernetes-config-storage', number: '04', title: 'Configuration and storage', description: 'Keep configuration outside images and attach durable storage where workloads require it.', topics: ['ConfigMaps', 'Secrets', 'Volumes', 'PersistentVolumes', 'StorageClasses', 'CSI'] },
          { slug: 'kubernetes-reliability', number: '05', title: 'Reliable workloads', description: 'Make scheduling, health, rollout, and scaling behavior explicit.', topics: ['Requests and limits', 'Health probes', 'Horizontal scaling', 'Rolling updates', 'Pod disruption budgets', 'Scheduling'] },
          { slug: 'kubernetes-security', number: '06', title: 'Kubernetes security', description: 'Control who and what can act in a cluster and reduce workload privileges.', topics: ['RBAC', 'Service accounts', 'Security contexts', 'Admission control', 'Network policy', 'Secret handling'] },
        ],
      },
      {
        slug: 'delivery', number: '03', title: 'Delivery and infrastructure', description: 'Move a tested change from source control to a repeatable environment with clear review and rollback paths.',
        sections: [
          { slug: 'continuous-delivery', number: '01', title: 'CI and continuous delivery', description: 'Build, test, scan, publish, deploy, and roll back changes through an automated pipeline.', topics: ['CI pipelines', 'Artifact promotion', 'Environment strategy', 'Deployment strategies', 'Rollbacks', 'Supply chain security'] },
          { slug: 'helm-packaging', number: '02', title: 'Helm and packaging', description: 'Package Kubernetes configuration without hiding the resources being created.', topics: ['Charts', 'Templates', 'Values', 'Dependencies', 'Releases', 'Chart testing'] },
          { slug: 'gitops-infrastructure', number: '03', title: 'GitOps and infrastructure as code', description: 'Keep desired infrastructure and cluster state reviewable, versioned, and continuously reconciled.', topics: ['Infrastructure as code', 'GitOps', 'Reconciliation', 'Drift', 'Environment promotion', 'Policy as code'] },
        ],
      },
      {
        slug: 'operations', number: '04', title: 'Operations and reliability', description: 'Observe workloads, plan capacity, debug failures, and improve the system after incidents.',
        sections: [
          { slug: 'cloud-native-observability', number: '01', title: 'Cloud native observability', description: 'Collect useful signals across applications, containers, and clusters.', topics: ['Metrics', 'Logs', 'Traces', 'Dashboards', 'Alerting', 'OpenTelemetry'] },
          { slug: 'sre-operations', number: '02', title: 'SRE and incident response', description: 'Define reliability goals and operate services with useful alerts, runbooks, and learning reviews.', topics: ['SLIs and SLOs', 'Error budgets', 'On call', 'Runbooks', 'Incident response', 'Postmortems'] },
          { slug: 'capacity-cost-debugging', number: '03', title: 'Capacity, cost and debugging', description: 'Use evidence to right size workloads and investigate failures across layers.', topics: ['Capacity planning', 'Cost allocation', 'Resource efficiency', 'Cluster debugging', 'Application debugging', 'Performance analysis'] },
        ],
      },
    ],
  },
  {
    slug: 'ai',
    number: '06',
    title: 'AI Engineering',
    description: 'Build useful AI systems through strong context, retrieval, evaluation, safety, and production engineering.',
    groups: [
      {
        slug: 'ai-foundations', number: '01', title: 'AI foundations', description: 'Build the mental models needed to make sound product and engineering decisions around AI systems.',
        sections: [
          { slug: 'ai-engineering-foundations', number: '01', title: 'AI engineering foundations', description: 'Understand models, prompts, context, outputs, evaluation, and the surrounding software system as one product.', topics: ['AI product boundaries', 'Probabilistic behavior', 'Models and inference', 'Context and output', 'Evaluation loops', 'Human review'] },
          { slug: 'machine-learning-foundations', number: '02', title: 'Machine learning foundations', description: 'Learn the basic ideas behind training, inference, features, generalization, and common model families.', topics: ['Supervised learning', 'Unsupervised learning', 'Training and inference', 'Features', 'Overfitting', 'Model selection'] },
          { slug: 'data-model-lifecycle', number: '03', title: 'Data and model lifecycle', description: 'Treat data quality, versioning, feedback, and model change as production concerns.', topics: ['Data quality', 'Dataset versioning', 'Labeling', 'Experiment tracking', 'Model registry', 'Feedback loops'] },
        ],
      },
      {
        slug: 'llm-applications', number: '02', title: 'LLM applications', description: 'Build language model features with explicit context, grounding, tools, and predictable output boundaries.',
        sections: [
          { slug: 'prompting-context', number: '01', title: 'Prompting and context engineering', description: 'Give a model the instructions and information it needs without relying on fragile prompt tricks.', topics: ['System instructions', 'Context windows', 'Few shot examples', 'Structured outputs', 'Prompt versioning', 'Context budgets'] },
          { slug: 'embeddings-vector-search', number: '02', title: 'Embeddings and vector search', description: 'Represent meaning numerically and retrieve useful candidates with measurable relevance.', topics: ['Embeddings', 'Similarity measures', 'Chunking', 'Vector indexes', 'Hybrid search', 'Reranking'] },
          { slug: 'rag-systems', number: '03', title: 'Retrieval augmented generation', description: 'Ground model responses in trusted information and make retrieval quality visible.', topics: ['Ingestion pipelines', 'Retrieval', 'Grounding', 'Citations', 'Freshness', 'RAG evaluation'] },
          { slug: 'tool-use-agents', number: '04', title: 'Tool use and agents', description: 'Let models take bounded actions through typed tools, explicit state, and controlled workflows.', topics: ['Function calling', 'Tool contracts', 'Workflow state', 'Planning', 'Memory', 'Approval boundaries'] },
        ],
      },
      {
        slug: 'ai-quality', number: '03', title: 'Quality, safety and trust', description: 'Measure behavior, protect sensitive data, and design for the ways an AI feature can fail.',
        sections: [
          { slug: 'ai-evaluation', number: '01', title: 'AI evaluation', description: 'Turn product expectations into repeatable datasets, metrics, and review loops.', topics: ['Golden datasets', 'Offline evaluation', 'Online evaluation', 'LLM judges', 'Human review', 'Regression testing'] },
          { slug: 'ai-safety-security', number: '02', title: 'AI safety and security', description: 'Protect models, tools, users, and data from unsafe or adversarial behavior.', topics: ['Prompt injection', 'Data leakage', 'Tool permissions', 'Content safety', 'Guardrails', 'Threat modeling'] },
          { slug: 'ai-observability', number: '03', title: 'AI observability', description: 'Trace requests, context, model behavior, cost, and quality without collecting unnecessary sensitive data.', topics: ['Prompt traces', 'Token usage', 'Quality signals', 'Drift', 'Feedback', 'Privacy aware logging'] },
        ],
      },
      {
        slug: 'production-ai', number: '04', title: 'Production AI systems', description: 'Operate AI features with predictable latency, cost, capacity, reliability, and change management.',
        sections: [
          { slug: 'model-serving-inference', number: '01', title: 'Model serving and inference', description: 'Choose hosted or self managed inference and understand batching, caching, and model routing.', topics: ['Hosted models', 'Self hosting', 'Inference servers', 'Batching', 'Model routing', 'Response caching'] },
          { slug: 'ai-latency-cost', number: '02', title: 'Latency, cost and reliability', description: 'Control token budgets, fallback behavior, timeouts, and resource use from the start.', topics: ['Token budgets', 'Streaming', 'Timeouts', 'Fallbacks', 'Rate limits', 'Cost attribution'] },
          { slug: 'ai-system-design', number: '03', title: 'AI system design', description: 'Combine application services, data pipelines, retrieval, models, evaluation, and operations into a coherent architecture.', topics: ['AI gateways', 'Async workflows', 'Data pipelines', 'Model fallbacks', 'Evaluation services', 'Case studies'] },
        ],
      },
    ],
  },
  {
    slug: 'engineering-notes',
    number: '07',
    title: 'Engineering Notes',
    description: 'Independent deep dives into tools, failures, experiments, and the practical decisions behind software systems.',
    groups: [
      {
        slug: 'developer-tooling', number: '01', title: 'Developer tooling', description: 'Explore the systems that help engineers build, test, understand, and ship software with less friction.',
        sections: [
          { slug: 'ci-cd-build-systems', number: '01', title: 'CI, CD and build systems', description: 'Study pipelines, build performance, test feedback, artifact flow, and deployment safety.', topics: ['Pipeline design', 'Build caching', 'Test selection', 'Artifact flow', 'Deployment feedback', 'Failure diagnosis'] },
          { slug: 'ai-assisted-developer-tools', number: '02', title: 'AI assisted developer tools', description: 'Use AI where it improves engineering feedback while keeping context, cost, privacy, and trust under control.', topics: ['Failure aware log reduction', 'Code review assistance', 'Repository context', 'Tool calling', 'Evaluation', 'Human approval'] },
          { slug: 'developer-experience', number: '03', title: 'Developer experience', description: 'Reduce the time between an idea, a useful local signal, and a safe production change.', topics: ['Local environments', 'Inner loop speed', 'Documentation', 'Golden paths', 'Platform APIs', 'Feedback loops'] },
        ],
      },
      {
        slug: 'reliability-lessons', number: '02', title: 'Reliability and failure', description: 'Use incidents and production behavior to understand how systems actually fail and recover.',
        sections: [
          { slug: 'failure-analysis', number: '01', title: 'Failure analysis', description: 'Find the earliest meaningful failure, reconstruct its context, and separate cause from secondary noise.', topics: ['Failure timelines', 'Root cause analysis', 'Cascading errors', 'Retries', 'Recovery', 'Learning reviews'] },
          { slug: 'observability-deep-dives', number: '02', title: 'Observability deep dives', description: 'Turn logs, metrics, traces, and profiles into useful answers instead of larger data collections.', topics: ['Signal design', 'Structured logs', 'Metrics', 'Distributed traces', 'Cardinality', 'Alert quality'] },
          { slug: 'performance-debugging', number: '03', title: 'Performance and debugging', description: 'Follow evidence across code, runtime, network, and infrastructure when a system becomes slow or unstable.', topics: ['Profiling', 'Flame graphs', 'Memory', 'Database latency', 'Network behavior', 'Capacity bottlenecks'] },
        ],
      },
      {
        slug: 'architecture-experiments', number: '03', title: 'Architecture and experiments', description: 'Capture useful technical explorations that do not need to become a permanent learning path.',
        sections: [
          { slug: 'architecture-deep-dives', number: '01', title: 'Architecture deep dives', description: 'Examine one design choice closely, including the constraints that make it reasonable or risky.', topics: ['Architecture decisions', 'Tradeoffs', 'Evolution', 'Migration', 'Boundaries', 'Case studies'] },
          { slug: 'data-pipeline-deep-dives', number: '02', title: 'Data pipeline deep dives', description: 'Explore ingestion, transformation, quality, delivery, and recovery in practical data flows.', topics: ['Ingestion', 'Stream processing', 'Batch processing', 'Data quality', 'Backfills', 'Lineage'] },
          { slug: 'platform-patterns', number: '03', title: 'Platform patterns', description: 'Study reusable platform capabilities without hiding the infrastructure and ownership behind them.', topics: ['Self service platforms', 'Control planes', 'Service catalogs', 'Policy', 'Templates', 'Platform metrics'] },
        ],
      },
      {
        slug: 'engineering-practice', number: '04', title: 'Engineering practice', description: 'Write about the judgment, communication, and habits that shape maintainable technical work.',
        sections: [
          { slug: 'engineering-judgment', number: '01', title: 'Engineering judgment', description: 'Make decisions with incomplete information and explain why a tradeoff is appropriate now.', topics: ['Decision making', 'Risk', 'Scope', 'Technical debt', 'Prioritization', 'Tradeoff records'] },
          { slug: 'technical-writing', number: '02', title: 'Technical writing', description: 'Turn technical work into explanations, design documents, runbooks, and reviews that people can use.', topics: ['Design documents', 'Runbooks', 'Architecture records', 'Code review', 'Teaching', 'Documentation maintenance'] },
          { slug: 'career-lessons', number: '03', title: 'Career lessons', description: 'Capture the practical lessons that come from owning systems, collaborating, and helping others grow.', topics: ['Ownership', 'Mentoring', 'Communication', 'Learning', 'Leadership', 'Sustainable growth'] },
        ],
      },
    ],
  },
] as const;

export type DsaSection = (typeof DSA_SECTIONS)[number];
export type LearningPath = (typeof LEARNING_PATHS)[number];
export type LearningGroup = LearningPath['groups'][number];
export type LearningSection = LearningGroup['sections'][number];

export function getLearningPath(slug: string) {
  return LEARNING_PATHS.find((path) => path.slug === slug);
}
