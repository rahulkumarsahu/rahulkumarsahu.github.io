interface LearningLink {
  title: string;
  href: string;
  note: string;
}

export interface ArticleLearningLinks {
  prerequisites: LearningLink[];
  practiceNext: LearningLink[];
}

export const ARTICLE_LEARNING_LINKS: Record<string, ArticleLearningLinks> = {
  'largest-element-in-array': {
    prerequisites: [
      { title: 'Array Fundamentals in Java', href: '/posts/array-fundamentals/', note: 'Review indexing, traversal and running answers.' },
    ],
    practiceNext: [
      { title: 'Find the Second Largest Element', href: '/posts/second-largest-element-in-array/', note: 'Maintain two running answers instead of one.' },
      { title: 'Check Whether an Array Is Sorted', href: '/posts/check-array-sorted/', note: 'Turn a full scan into a clear invariant.' },
    ],
  },
  'move-zeroes-to-end': {
    prerequisites: [
      { title: 'Array Fundamentals in Java', href: '/posts/array-fundamentals/', note: 'Understand in-place updates and indexed traversal.' },
    ],
    practiceNext: [
      { title: 'Remove Duplicates from a Sorted Array', href: '/posts/remove-duplicates-sorted-array/', note: 'Reuse separate read and write positions.' },
      { title: 'Rotate an Array Left', href: '/posts/rotate-array-left/', note: 'Practice another in-place array transformation.' },
    ],
  },
  'subsets-in-java': {
    prerequisites: [
      { title: "Recursion in Java: A Beginner's Guide", href: '/posts/recursion-in-java-beginners-guide/', note: 'Review base cases, call frames and stack unwinding.' },
    ],
    practiceNext: [
      { title: 'Recursion and Backtracking section', href: '/dsa/recursion-backtracking/', note: 'Return here as the next backtracking problems are published.' },
    ],
  },
};
