export const LEARNING_STAGE_IDS = ['foundations', 'core', 'practice', 'production', 'deep-dives'] as const;

export type LearningStageId = typeof LEARNING_STAGE_IDS[number];

export interface LearningStage {
  id: LearningStageId;
  number: string;
  title: string;
  description: string;
  outcome: string;
  sectionSlugs: readonly string[];
}

const stage = (
  id: LearningStageId,
  number: string,
  title: string,
  description: string,
  outcome: string,
  sectionSlugs: readonly string[] = [],
): LearningStage => ({ id, number, title, description, outcome, sectionSlugs });

export const TOPIC_LEARNING_STAGES: Record<string, LearningStage[]> = {
  dsa: [
    stage('foundations', '01', 'Foundations', 'Build the vocabulary for constraints, complexity, arrays and recursive thinking.', 'Explain an algorithm clearly before writing code.', ['complexity', 'arrays']),
    stage('core', '02', 'Core concepts', 'Learn the data structures and recurring techniques used across interview problems.', 'Recognise which structure or invariant a problem is testing.', ['hashing', 'binary-search', 'linked-lists', 'stacks-queues', 'recursion-backtracking', 'trees', 'heaps', 'graphs']),
    stage('practice', '03', 'Practice', 'Apply each idea through the master sheet, company sets and pattern collections.', 'Turn recognition into a repeatable problem-solving process.'),
    stage('production', '04', 'Production connections', 'Carry algorithmic ideas into queues, caches, indexes and stream processing.', 'Explain where an algorithmic choice affects a real system.'),
    stage('deep-dives', '05', 'Deep dives', 'Study greedy reasoning, dynamic programming and harder combinations of patterns.', 'Solve multi-step problems without memorising isolated answers.', ['greedy', 'dynamic-programming']),
  ],
  java: [
    stage('foundations', '01', 'Foundations', 'Learn Java syntax, object modelling and the standard library used in backend code.', 'Write small, readable Java programs with clear responsibilities.', ['java-language-foundations', 'object-oriented-java', 'collections-generics-streams']),
    stage('core', '02', 'Core concepts', 'Understand the JVM, concurrency, testing and Spring’s application model.', 'Build and test a complete Java application.', ['jvm-memory-performance', 'java-concurrency', 'java-testing-build-tools', 'spring-core', 'spring-boot-foundations']),
    stage('practice', '03', 'Practice', 'Use focused exercises for APIs, persistence, security and service communication.', 'Convert requirements into working backend features.', ['spring-rest-apis', 'spring-data-transactions', 'spring-security', 'spring-testing']),
    stage('production', '04', 'Production', 'Add resilience, observability, configuration and safe delivery to services.', 'Operate a Spring Boot service with visible failure behaviour.', ['spring-production', 'microservice-foundations', 'service-communication', 'microservice-resilience', 'spring-cloud', 'microservice-observability']),
    stage('deep-dives', '05', 'Deep dives', 'Explore data ownership, distributed workflows and JVM performance tradeoffs.', 'Reason about backend architecture beyond framework annotations.', ['microservice-data']),
  ],
  lld: [
    stage('foundations', '01', 'Foundations', 'Model objects, relationships, responsibilities and domain rules.', 'Translate a requirement into a small object model.', ['object-oriented-design', 'relationships-uml', 'domain-modeling']),
    stage('core', '02', 'Core concepts', 'Use SOLID, cohesion, coupling and patterns with clear design intent.', 'Choose an abstraction because of a real change pressure.', ['solid-principles', 'cohesion-coupling', 'simple-design', 'design-pattern-foundations', 'creational-patterns', 'structural-patterns', 'behavioral-patterns']),
    stage('practice', '03', 'Practice', 'Follow a repeatable design process and work through complete case studies.', 'Explain and extend an interview-ready design.', ['lld-design-process', 'lld-case-studies']),
    stage('production', '04', 'Production', 'Design thread-safe boundaries and account for failure, testing and observability.', 'Make an object design safe under concurrent production workloads.', ['multithreading-foundations', 'thread-safe-design', 'concurrency-patterns']),
    stage('deep-dives', '05', 'Deep dives', 'Compare alternative patterns and study how designs evolve as requirements change.', 'Defend design tradeoffs instead of presenting one perfect diagram.'),
  ],
  'system-design': [
    stage('foundations', '01', 'Foundations', 'Clarify requirements, scale assumptions, APIs and data before drawing boxes.', 'Produce a defensible first design from an open-ended prompt.', ['system-design-foundations', 'capacity-estimation', 'api-data-modeling']),
    stage('core', '02', 'Core concepts', 'Study databases, caching, messaging, consistency and common building blocks.', 'Choose components from access patterns and guarantees.', ['database-fundamentals', 'indexes-transactions', 'replication-partitioning', 'caching', 'distributed-system-fundamentals', 'consistency-consensus', 'messaging-events', 'traffic-management', 'storage-delivery-search']),
    stage('practice', '03', 'Practice', 'Use decision guides and case studies to compare realistic alternatives.', 'Explain benefits, costs and failure modes during an interview.', ['system-design-case-studies']),
    stage('production', '04', 'Production', 'Add reliability, observability, security and operational readiness.', 'Describe how a system behaves during failure and recovery.', ['distributed-reliability', 'observability-operations', 'system-security']),
    stage('deep-dives', '05', 'Deep dives', 'Investigate hot keys, replication lag, coordination and system evolution.', 'Reason about second-order effects at scale.'),
  ],
  'cloud-native': [
    stage('foundations', '01', 'Foundations', 'Understand containers, images, processes and Kubernetes architecture.', 'Explain what the platform is doing below a deployment command.', ['docker-foundations', 'docker-images-builds', 'kubernetes-architecture']),
    stage('core', '02', 'Core concepts', 'Learn workloads, networking, configuration, storage and packaging.', 'Deploy a correctly configured service to Kubernetes.', ['docker-compose-networking', 'kubernetes-workloads', 'kubernetes-networking', 'kubernetes-config-storage', 'helm-packaging']),
    stage('practice', '03', 'Practice', 'Build images, write manifests and debug deliberately broken workloads.', 'Diagnose common container and cluster failures.'),
    stage('production', '04', 'Production', 'Add delivery, security, reliability, observability and incident response.', 'Operate a workload with safe rollouts and useful signals.', ['container-security', 'kubernetes-reliability', 'kubernetes-security', 'continuous-delivery', 'gitops-infrastructure', 'cloud-native-observability', 'sre-operations']),
    stage('deep-dives', '05', 'Deep dives', 'Study capacity, cost, policies and difficult cross-layer debugging.', 'Balance reliability, performance and infrastructure cost.', ['capacity-cost-debugging']),
  ],
  ai: [
    stage('foundations', '01', 'Foundations', 'Understand probabilistic systems, models, data and evaluation basics.', 'Set useful boundaries for an AI feature.', ['ai-engineering-foundations', 'machine-learning-foundations', 'data-model-lifecycle']),
    stage('core', '02', 'Core concepts', 'Learn context, embeddings, retrieval and bounded tool use.', 'Design a grounded LLM application.', ['prompting-context', 'embeddings-vector-search', 'rag-systems', 'tool-use-agents']),
    stage('practice', '03', 'Practice', 'Build small evaluation-driven workflows and inspect their failures.', 'Improve an AI feature using evidence instead of prompt guessing.', ['ai-evaluation']),
    stage('production', '04', 'Production', 'Address safety, observability, serving, latency, cost and reliability.', 'Operate an AI feature with measurable quality and controlled risk.', ['ai-safety-security', 'ai-observability', 'model-serving-inference', 'ai-latency-cost']),
    stage('deep-dives', '05', 'Deep dives', 'Combine application, retrieval, model and evaluation services into complete designs.', 'Reason about AI systems as production software.', ['ai-system-design']),
  ],
  'engineering-notes': [
    stage('foundations', '01', 'Foundations', 'Build practical habits for technical writing, debugging and engineering judgement.', 'Record a decision or investigation so another engineer can use it.', ['engineering-judgment', 'technical-writing']),
    stage('core', '02', 'Core concepts', 'Study delivery systems, developer experience, reliability and observability.', 'Connect a technical symptom to the system that produced it.', ['ci-cd-build-systems', 'developer-experience', 'failure-analysis', 'observability-deep-dives']),
    stage('practice', '03', 'Practice', 'Work through focused investigations and architecture experiments.', 'Use evidence to test an engineering idea.', ['architecture-deep-dives', 'data-pipeline-deep-dives']),
    stage('production', '04', 'Production', 'Apply platform patterns, performance debugging and operational lessons.', 'Improve a real workflow without hiding its tradeoffs.', ['performance-debugging', 'platform-patterns']),
    stage('deep-dives', '05', 'Deep dives', 'Explore AI-assisted tooling, career lessons and unusual system failures.', 'Form reusable judgement from a specific engineering experience.', ['ai-assisted-developer-tools', 'career-lessons']),
  ],
};

export function getLearningStages(topic: string): LearningStage[] {
  return TOPIC_LEARNING_STAGES[topic] ?? [];
}

export function getStageForSection(topic: string, section?: string): LearningStage | undefined {
  if (!section) return undefined;
  return getLearningStages(topic).find((item) => item.sectionSlugs.includes(section));
}
