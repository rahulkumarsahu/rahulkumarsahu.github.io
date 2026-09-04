export interface ApproachRow {
  name: string;
  operations: string;
  extraMemory: string;
  modifiesInput: string;
  time: string;
  space: string;
  tradeoff: string;
}

export interface ApproachComparisonData {
  input: string;
  observation: string;
  rows: ApproachRow[];
  note?: string;
}

export const APPROACH_COMPARISONS: Record<string, ApproachComparisonData> = {
  'second-largest-element-in-array': {
    input: '[7, 2, 7, 5]',
    observation: 'Only the two largest distinct values matter, so a full ordering performs work the answer never uses.',
    rows: [
      { name: 'Sort then scan', operations: 'Sort 4 values, then skip duplicates', extraMemory: 'Depends on sort', modifiesInput: 'Usually yes', time: 'O(n log n)', space: 'O(log n) typical stack', tradeoff: 'Simple, but creates a full ordering.' },
      { name: 'One-pass tracking', operations: '4 value inspections', extraMemory: 'Two values', modifiesInput: 'No', time: 'O(n)', space: 'O(1)', tradeoff: 'Requires careful distinct-value updates.' },
    ],
  },
  'remove-duplicates-sorted-array': {
    input: '[1, 1, 2, 2, 3]',
    observation: 'Sorted duplicates are adjacent, so a read pointer can compact each new value directly into the input.',
    rows: [
      { name: 'Extra collection', operations: '5 reads and up to 3 appends', extraMemory: 'Up to n values', modifiesInput: 'Not initially', time: 'O(n)', space: 'O(n)', tradeoff: 'Straightforward, but ignores the in-place requirement.' },
      { name: 'Read/write pointers', operations: '4 comparisons and 2 writes', extraMemory: 'Two indexes', modifiesInput: 'Yes', time: 'O(n)', space: 'O(1)', tradeoff: 'Only the returned prefix is meaningful.' },
    ],
  },
  'rotate-array-left': {
    input: '[1, 2, 3, 4, 5], k = 2',
    observation: 'The result swaps two blocks. Three range reversals perform that block swap in place.',
    rows: [
      { name: 'Shift one step k times', operations: '10 element moves for this input', extraMemory: 'One temporary value', modifiesInput: 'Yes', time: 'O(n × k)', space: 'O(1)', tradeoff: 'Easy to picture, but repeats the same movement.' },
      { name: 'Three reversals', operations: '4 swaps for this input', extraMemory: 'One temporary value', modifiesInput: 'Yes', time: 'O(n)', space: 'O(1)', tradeoff: 'Boundary order needs care.' },
    ],
  },
  'union-two-sorted-arrays': {
    input: '[1, 1, 3, 5] and [2, 3, 4]',
    observation: 'The sorted inputs already expose the next smallest candidate, so a tree is not needed to discover order.',
    rows: [
      { name: 'TreeSet', operations: '7 ordered insertions', extraMemory: 'Distinct values plus tree nodes', modifiesInput: 'No', time: 'O((n + m) log(n + m))', space: 'O(n + m)', tradeoff: 'Very concise, but discards the sorted-input advantage.' },
      { name: 'Two-pointer merge', operations: 'At most n + m inspections', extraMemory: 'Output only', modifiesInput: 'No', time: 'O(n + m)', space: 'O(1) auxiliary', tradeoff: 'Needs explicit duplicate handling.' },
    ],
  },
  'find-missing-number': {
    input: '[1, 2, 4, 5], n = 5',
    observation: 'Pairing expected and present values makes every match cancel, leaving the missing value without overflow.',
    rows: [
      { name: 'Sort and scan', operations: 'Sort, then compare positions', extraMemory: 'Depends on sort', modifiesInput: 'Usually yes', time: 'O(n log n)', space: 'O(log n) typical stack', tradeoff: 'Easy to verify, but slower and mutates order.' },
      { name: 'Arithmetic sum', operations: 'One pass', extraMemory: 'One total', modifiesInput: 'No', time: 'O(n)', space: 'O(1)', tradeoff: 'Fast, but fixed-width sums can overflow.' },
      { name: 'XOR cancellation', operations: 'One pass of paired XORs', extraMemory: 'One answer', modifiesInput: 'No', time: 'O(n)', space: 'O(1)', tradeoff: 'Depends on the exact one-missing-value guarantee.' },
    ],
  },
  'longest-subarray-sum-k': {
    input: '[1, -1, 5, -2, 3], k = 3',
    observation: 'A stored prefix sum answers whether a matching earlier boundary exists without rescanning every start position.',
    rows: [
      { name: 'Nested range scans', operations: 'Up to 15 ranges for n = 5', extraMemory: 'Running sum', modifiesInput: 'No', time: 'O(n²)', space: 'O(1)', tradeoff: 'Simple, but repeats overlapping sums.' },
      { name: 'Prefix sum + map', operations: '5 prefix updates and lookups', extraMemory: 'Up to n prefix entries', modifiesInput: 'No', time: 'O(n) expected', space: 'O(n)', tradeoff: 'Faster by spending memory on history.' },
    ],
  },
  'subsets-in-java': {
    input: '[1, 2, 3]',
    observation: 'Every correct method must produce 2ⁿ subsets. Backtracking improves adaptability, not the exponential output bound.',
    rows: [
      { name: 'Bitmask generation', operations: '8 masks × 3 bit checks', extraMemory: 'Each output subset', modifiesInput: 'No', time: 'O(n × 2ⁿ)', space: 'O(n × 2ⁿ) output', tradeoff: 'Compact and iterative, but less natural for pruning.' },
      { name: 'Backtracking', operations: 'Visits the binary decision tree', extraMemory: 'O(n) path and call stack', modifiesInput: 'No', time: 'O(n × 2ⁿ)', space: 'O(n) auxiliary + output', tradeoff: 'Easy to extend with constraints and pruning.' },
    ],
    note: 'Neither approach is asymptotically faster because copying the complete output already costs O(n × 2ⁿ).',
  },
};
