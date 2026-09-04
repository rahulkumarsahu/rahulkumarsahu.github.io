export const DSA_PATTERN_SLUGS = [
  'array-traversal',
  'running-answer',
  'two-pointers',
  'in-place-compaction',
  'reversal',
  'hashing',
  'prefix-sum',
  'xor',
  'recursion',
  'backtracking',
] as const;

export type DsaPatternSlug = typeof DSA_PATTERN_SLUGS[number];

export interface DsaPattern {
  slug: DsaPatternSlug;
  name: string;
  description: string;
  solves: string;
  signals: string[];
  invariant: string;
  expectedComplexity: string;
  auxiliarySpace: string;
  javaTemplate: string;
  mistakes: string[];
  plannedPractice: string[];
}

export const DSA_PATTERNS: DsaPattern[] = [
  {
    slug: 'array-traversal',
    name: 'Array Traversal',
    description: 'Read each value once while carrying only the state needed for the answer.',
    solves: 'Questions that ask you to inspect, validate, count or summarize an entire array.',
    signals: ['every element matters', 'one pass is possible', 'the answer can be updated while scanning'],
    invariant: 'After index i, the stored state correctly describes the processed prefix from 0 through i.',
    expectedComplexity: 'Usually O(n) time',
    auxiliarySpace: 'Usually O(1)',
    javaTemplate: `for (int index = 0; index < values.length; index++) {
    int value = values[index];
    // Update the answer using value.
}`,
    mistakes: ['Starting from an unsafe default value', 'Skipping the first or last index', 'Forgetting empty-input behavior'],
    plannedPractice: ['Count elements matching a condition', 'Maximum consecutive ones'],
  },
  {
    slug: 'running-answer',
    name: 'Running Answer',
    description: 'Maintain the best answer seen so far instead of storing or sorting everything.',
    solves: 'Maximum, minimum and top-k questions where the answer can be updated incrementally.',
    signals: ['largest or smallest seen so far', 'one result from an unsorted input', 'sorting feels unnecessary'],
    invariant: 'The running variables contain the best valid answer for the prefix already processed.',
    expectedComplexity: 'Usually O(n) time',
    auxiliarySpace: 'Usually O(1)',
    javaTemplate: `int best = values[0];
for (int index = 1; index < values.length; index++) {
    best = Math.max(best, values[index]);
}`,
    mistakes: ['Using zero as the initial answer', 'Updating dependent answers in the wrong order', 'Ignoring duplicate rules'],
    plannedPractice: ['Third largest distinct value', 'Best time to buy and sell stock'],
  },
  {
    slug: 'two-pointers',
    name: 'Two Pointers',
    description: 'Coordinate two positions so each movement removes work that never needs to be repeated.',
    solves: 'Sorted-array merging, in-place updates and problems with meaningful left, right, read or write boundaries.',
    signals: ['sorted input', 'preserve order in place', 'compare from two positions', 'merge two sequences'],
    invariant: 'Everything before the confirmed boundary is already in its final valid form.',
    expectedComplexity: 'Often O(n) or O(n + m) time',
    auxiliarySpace: 'Often O(1), excluding output',
    javaTemplate: `int left = 0;
int right = values.length - 1;
while (left < right) {
    // Inspect both boundaries and move at least one pointer.
}`,
    mistakes: ['Moving the wrong pointer', 'Losing stable order', 'Not advancing on equal values'],
    plannedPractice: ['Two sum in a sorted array', 'Container with most water'],
  },
  {
    slug: 'in-place-compaction',
    name: 'In-place Compaction',
    description: 'Use separate read and write positions to keep valid values at the front of the same array.',
    solves: 'Removing, moving or deduplicating values without allocating another full collection.',
    signals: ['modify the same array', 'preserve relative order', 'return the new valid length'],
    invariant: 'Positions before write contain exactly the valid values encountered so far, in original order.',
    expectedComplexity: 'O(n) time',
    auxiliarySpace: 'O(1)',
    javaTemplate: `int write = 0;
for (int read = 0; read < values.length; read++) {
    if (shouldKeep(values[read])) {
        values[write++] = values[read];
    }
}`,
    mistakes: ['Advancing write for rejected values', 'Reading overwritten data', 'Returning the last index instead of the length'],
    plannedPractice: ['Remove a chosen value', 'Keep at most two duplicates'],
  },
  {
    slug: 'reversal',
    name: 'Reversal',
    description: 'Reverse carefully chosen ranges to move array blocks without extra array storage.',
    solves: 'Rotations and block rearrangements where the result can be expressed as reordered segments.',
    signals: ['rotate in place', 'move a prefix behind a suffix', 'reverse words or ranges'],
    invariant: 'Each completed reversal places one required block orientation into the transformation sequence.',
    expectedComplexity: 'O(n) time',
    auxiliarySpace: 'O(1)',
    javaTemplate: `while (left < right) {
    int temporary = values[left];
    values[left++] = values[right];
    values[right--] = temporary;
}`,
    mistakes: ['Not normalizing k', 'Using the wrong inclusive boundaries', 'Forgetting the empty array'],
    plannedPractice: ['Rotate right by k', 'Reverse words in a character array'],
  },
  {
    slug: 'hashing',
    name: 'Hashing',
    description: 'Trade extra memory for fast lookup of information seen earlier.',
    solves: 'Membership, frequency and earliest-position questions where repeated searching is the bottleneck.',
    signals: ['have we seen this before', 'count occurrences', 'find a matching earlier state'],
    invariant: 'The map contains exactly the historical facts needed to answer the current step.',
    expectedComplexity: 'Usually O(n) expected time',
    auxiliarySpace: 'Usually O(n)',
    javaTemplate: `Map<Integer, Integer> firstIndex = new HashMap<>();
for (int index = 0; index < values.length; index++) {
    firstIndex.putIfAbsent(values[index], index);
}`,
    mistakes: ['Overwriting the earliest index', 'Assuming worst-case O(1) lookup', 'Using a map when a small fixed array is clearer'],
    plannedPractice: ['Two sum', 'Subarray sum equals k'],
  },
  {
    slug: 'prefix-sum',
    name: 'Prefix Sum',
    description: 'Represent a range by subtracting two cumulative totals.',
    solves: 'Contiguous range-sum questions and repeated queries over a stable sequence.',
    signals: ['contiguous subarray', 'range sum', 'sum ending at this index'],
    invariant: 'prefix is the exact sum from index 0 through the current index.',
    expectedComplexity: 'O(n) preprocessing or scan',
    auxiliarySpace: 'O(1) to O(n), depending on stored history',
    javaTemplate: `long prefix = 0;
for (int value : values) {
    prefix += value;
    // Compare or store this prefix state.
}`,
    mistakes: ['Missing the empty prefix at index -1', 'Using int when sums may overflow', 'Applying a positive-only window to negative values'],
    plannedPractice: ['Count subarrays with sum k', 'Range sum query'],
  },
  {
    slug: 'xor',
    name: 'XOR Cancellation',
    description: 'Cancel paired values so the unpaired value remains.',
    solves: 'Missing or unique-number problems whose input guarantees exact pairing.',
    signals: ['every value appears twice except one', 'numbers come from a known range', 'constant extra space'],
    invariant: 'All matched values cancel regardless of processing order, while the unmatched value remains.',
    expectedComplexity: 'O(n) time',
    auxiliarySpace: 'O(1)',
    javaTemplate: `int answer = 0;
for (int value : values) {
    answer ^= value;
}`,
    mistakes: ['Using XOR without the required pairing guarantee', 'Forgetting expected range values', 'Treating XOR as addition'],
    plannedPractice: ['Single number', 'Find two unique numbers'],
  },
  {
    slug: 'recursion',
    name: 'Recursion',
    description: 'Solve a problem by defining a smaller version of the same problem and a stopping condition.',
    solves: 'Naturally nested structures, divide-and-conquer work and decision trees.',
    signals: ['same task on smaller input', 'tree or directory structure', 'choose and continue'],
    invariant: 'Each call owns one well-defined subproblem and moves closer to the base case.',
    expectedComplexity: 'Depends on branches and depth',
    auxiliarySpace: 'At least O(depth) call stack',
    javaTemplate: `static void solve(int index) {
    if (index == limit) return;
    solve(index + 1);
}`,
    mistakes: ['Missing a base case', 'Not reducing the problem', 'Ignoring call-stack space'],
    plannedPractice: ['Print from 1 to n', 'Generate valid parentheses'],
  },
  {
    slug: 'backtracking',
    name: 'Backtracking',
    description: 'Explore a choice, undo it, then explore the next choice from the same clean state.',
    solves: 'Generating combinations, permutations and valid configurations.',
    signals: ['all combinations', 'choose or skip', 'return every valid arrangement'],
    invariant: 'The current path represents exactly the decisions made before the current depth.',
    expectedComplexity: 'Often exponential because the output is exponential',
    auxiliarySpace: 'O(depth), excluding output',
    javaTemplate: `path.add(value);
search(nextIndex, path, answer);
path.remove(path.size() - 1);
search(nextIndex, path, answer);`,
    mistakes: ['Forgetting to undo a choice', 'Adding the mutable path without copying it', 'Claiming output space as constant'],
    plannedPractice: ['Combination sum', 'Permutations'],
  },
];

export function getDsaPattern(slug: string) {
  return DSA_PATTERNS.find((pattern) => pattern.slug === slug);
}
