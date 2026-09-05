export const SYSTEM_DESIGN_CASE_STUDY_SECTIONS = [
  { number: '01', title: 'Requirements', slug: 'requirements', question: 'What must the system do, and what is outside scope?' },
  { number: '02', title: 'Scale assumptions', slug: 'scale-assumptions', question: 'Which workload and growth assumptions drive the design?' },
  { number: '03', title: 'Estimation', slug: 'estimation', question: 'What traffic, storage and bandwidth must the system handle?' },
  { number: '04', title: 'API contracts', slug: 'api-contracts', question: 'How do clients create and consume the core resource?' },
  { number: '05', title: 'Data model', slug: 'data-model', question: 'Which records and access paths must remain durable?' },
  { number: '06', title: 'Simple design', slug: 'simple-design', question: 'What is the smallest architecture that meets the requirements?' },
  { number: '07', title: 'Bottlenecks', slug: 'bottlenecks', question: 'Where will latency, load or failure appear first?' },
  { number: '08', title: 'Improved architecture', slug: 'improved-architecture', question: 'Which components earn their additional complexity?' },
  { number: '09', title: 'Failure scenarios', slug: 'failure-scenarios', question: 'How should the system degrade when dependencies fail?' },
  { number: '10', title: 'Tradeoff matrix', slug: 'tradeoff-matrix', question: 'What does each major choice improve and sacrifice?' },
  { number: '11', title: 'Interview discussion', slug: 'interview-discussion', question: 'How should the design be explained and challenged?' },
  { number: '12', title: 'Production checklist', slug: 'production-checklist', question: 'What must be true before real traffic arrives?' },
] as const;
