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
  'second-largest-element-in-array': {
    prerequisites: [
      { title: 'Find the Largest Element in an Array', href: '/posts/largest-element-in-array/', note: 'Extend one running answer into two distinct running answers.' },
    ],
    practiceNext: [
      { title: 'Check Whether an Array Is Sorted', href: '/posts/check-array-sorted/', note: 'Practice another one-pass invariant.' },
      { title: 'Move Zeroes to the End', href: '/posts/move-zeroes-to-end/', note: 'Coordinate reading and writing in one scan.' },
    ],
  },
  'check-array-sorted': {
    prerequisites: [
      { title: 'Array Fundamentals in Java', href: '/posts/array-fundamentals/', note: 'Review adjacent positions and safe traversal boundaries.' },
    ],
    practiceNext: [
      { title: 'Remove Duplicates from a Sorted Array', href: '/posts/remove-duplicates-sorted-array/', note: 'Use sorted order to compact repeated values.' },
      { title: 'Move Zeroes to the End', href: '/posts/move-zeroes-to-end/', note: 'Turn a scan into a stable in-place transformation.' },
    ],
  },
  'remove-duplicates-sorted-array': {
    prerequisites: [
      { title: 'Check Whether an Array Is Sorted', href: '/posts/check-array-sorted/', note: 'See why adjacent values provide useful information in sorted input.' },
    ],
    practiceNext: [
      { title: 'Move Zeroes to the End', href: '/posts/move-zeroes-to-end/', note: 'Reuse the read and write pointer model.' },
      { title: 'Union of Two Sorted Arrays', href: '/posts/union-two-sorted-arrays/', note: 'Coordinate pointers across two inputs.' },
    ],
  },
  'rotate-array-left': {
    prerequisites: [
      { title: 'Array Fundamentals in Java', href: '/posts/array-fundamentals/', note: 'Review in-place swaps and inclusive array ranges.' },
    ],
    practiceNext: [
      { title: 'Move Zeroes to the End', href: '/posts/move-zeroes-to-end/', note: 'Compare another constant-space transformation.' },
      { title: 'Arrays section', href: '/dsa/arrays/', note: 'Continue through the published array practice list.' },
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
  'union-two-sorted-arrays': {
    prerequisites: [
      { title: 'Remove Duplicates from a Sorted Array', href: '/posts/remove-duplicates-sorted-array/', note: 'Review how a sorted sequence exposes adjacent duplicates.' },
    ],
    practiceNext: [
      { title: 'Longest Subarray with Sum K', href: '/posts/longest-subarray-sum-k/', note: 'Move from pointer state to prefix history.' },
      { title: 'Two Pointers pattern', href: '/dsa/patterns/two-pointers/', note: 'Review recognition signals and the reusable template.' },
    ],
  },
  'find-missing-number': {
    prerequisites: [
      { title: 'Array Fundamentals in Java', href: '/posts/array-fundamentals/', note: 'Review linear traversal before adding bitwise cancellation.' },
    ],
    practiceNext: [
      { title: 'Longest Subarray with Sum K', href: '/posts/longest-subarray-sum-k/', note: 'Practice using stored state to avoid repeated work.' },
      { title: 'XOR Cancellation pattern', href: '/dsa/patterns/xor/', note: 'Revisit the guarantee that makes cancellation correct.' },
    ],
  },
  'longest-subarray-sum-k': {
    prerequisites: [
      { title: 'Array Fundamentals in Java', href: '/posts/array-fundamentals/', note: 'Be comfortable with indexed traversal and contiguous ranges.' },
    ],
    practiceNext: [
      { title: 'Prefix Sum pattern', href: '/dsa/patterns/prefix-sum/', note: 'Review range identities and common edge cases.' },
      { title: 'Hashing pattern', href: '/dsa/patterns/hashing/', note: 'See when stored history removes repeated lookup work.' },
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
