export type MasterDifficulty = 'easy' | 'medium' | 'hard';
export type MasterPlatform = 'LeetCode' | 'GeeksforGeeks' | 'HackerRank';

export interface MasterTopic {
  id: string;
  title: string;
  description: string;
  order: number;
}

export interface MasterProblem {
  id: string;
  title: string;
  topic: string;
  difficulty: MasterDifficulty;
  patterns: string[];
  platform: MasterPlatform;
  url: string;
  important: boolean;
}

export const MASTER_TOPICS: MasterTopic[] = [
  { id: 'arrays', title: 'Arrays', description: 'Traversal, running answers, prefix state and in-place transformations.', order: 1 },
  { id: 'strings', title: 'Strings', description: 'Character processing, parsing, matching and palindrome reasoning.', order: 2 },
  { id: 'hashing', title: 'Hashing', description: 'Fast lookup, frequency maps, sets and prefix-sum history.', order: 3 },
  { id: 'two-pointers', title: 'Two Pointers', description: 'Coordinate positions to remove repeated scans or compact data.', order: 4 },
  { id: 'sliding-window', title: 'Sliding Window', description: 'Maintain a useful contiguous range while its boundaries move.', order: 5 },
  { id: 'binary-search', title: 'Binary Search', description: 'Search sorted values and monotonic answer spaces.', order: 6 },
  { id: 'linked-lists', title: 'Linked Lists', description: 'Pointer movement, reversal, cycles and structural updates.', order: 7 },
  { id: 'stacks-queues', title: 'Stacks and Queues', description: 'Order-sensitive processing, monotonic stacks and frontier state.', order: 8 },
  { id: 'recursion-backtracking', title: 'Recursion and Backtracking', description: 'Explore decisions, restore state and generate combinations.', order: 9 },
  { id: 'trees', title: 'Binary Trees', description: 'Recursive structure, traversal, path state and subtree reasoning.', order: 10 },
  { id: 'bst', title: 'Binary Search Trees', description: 'Use ordering invariants for search, validation and updates.', order: 11 },
  { id: 'heaps', title: 'Heaps and Priority Queues', description: 'Keep the next best candidate available efficiently.', order: 12 },
  { id: 'graphs', title: 'Graphs', description: 'Traversal, connectivity, shortest paths and dependency ordering.', order: 13 },
  { id: 'greedy', title: 'Greedy', description: 'Make locally justified choices while preserving a global invariant.', order: 14 },
  { id: 'dynamic-programming', title: 'Dynamic Programming', description: 'Reuse overlapping states instead of solving them repeatedly.', order: 15 },
  { id: 'tries', title: 'Tries', description: 'Represent shared prefixes for fast word and prefix operations.', order: 16 },
  { id: 'bit-manipulation', title: 'Bit Manipulation', description: 'Use binary properties for compact state and cancellation.', order: 17 },
  { id: 'intervals', title: 'Intervals', description: 'Sort and reason about overlapping ranges and boundaries.', order: 18 },
];

type ProblemSeed = [
  title: string,
  topic: string,
  difficulty: MasterDifficulty,
  slug: string,
  patterns: string,
  important?: boolean,
  platform?: MasterPlatform,
  sourceUrl?: string,
];

const PROBLEM_SEEDS: ProblemSeed[] = [
  ['Two Sum', 'arrays', 'easy', 'two-sum', 'array,hashing', true],
  ['Best Time to Buy and Sell Stock', 'arrays', 'easy', 'best-time-to-buy-and-sell-stock', 'array,running-answer', true],
  ['Move Zeroes', 'arrays', 'easy', 'move-zeroes', 'array,two-pointers,in-place', true],
  ['Merge Sorted Array', 'arrays', 'easy', 'merge-sorted-array', 'array,two-pointers,in-place', true],
  ['Find Pivot Index', 'arrays', 'easy', 'find-pivot-index', 'array,prefix-sum'],
  ['Majority Element', 'arrays', 'easy', 'majority-element', 'array,voting', true],
  ['Maximum Subarray', 'arrays', 'medium', 'maximum-subarray', 'array,kadane,dynamic-programming', true],
  ['Product of Array Except Self', 'arrays', 'medium', 'product-of-array-except-self', 'array,prefix-product', true],
  ['Maximum Product Subarray', 'arrays', 'medium', 'maximum-product-subarray', 'array,dynamic-programming', true],
  ['Rotate Array', 'arrays', 'medium', 'rotate-array', 'array,reversal,in-place'],
  ['Sort Colors', 'arrays', 'medium', 'sort-colors', 'array,two-pointers,in-place', true],
  ['First Missing Positive', 'arrays', 'hard', 'first-missing-positive', 'array,index-placement,in-place', true],

  ['Valid Anagram', 'strings', 'easy', 'valid-anagram', 'string,frequency-map', true],
  ['Valid Palindrome', 'strings', 'easy', 'valid-palindrome', 'string,two-pointers', true],
  ['Longest Common Prefix', 'strings', 'easy', 'longest-common-prefix', 'string,prefix'],
  ['Reverse Words in a String', 'strings', 'medium', 'reverse-words-in-a-string', 'string,two-pointers'],
  ['String to Integer (atoi)', 'strings', 'medium', 'string-to-integer-atoi', 'string,parsing', true],
  ['Longest Palindromic Substring', 'strings', 'medium', 'longest-palindromic-substring', 'string,expand-around-center', true],
  ['Palindromic Substrings', 'strings', 'medium', 'palindromic-substrings', 'string,expand-around-center'],
  ['Minimum Window Substring', 'strings', 'hard', 'minimum-window-substring', 'string,sliding-window,frequency-map', true],

  ['Contains Duplicate', 'hashing', 'easy', 'contains-duplicate', 'hash-set,array'],
  ['Happy Number', 'hashing', 'easy', 'happy-number', 'hash-set,cycle-detection'],
  ['First Unique Character in a String', 'hashing', 'easy', 'first-unique-character-in-a-string', 'frequency-map,string'],
  ['Isomorphic Strings', 'hashing', 'easy', 'isomorphic-strings', 'hash-map,string'],
  ['Word Pattern', 'hashing', 'easy', 'word-pattern', 'hash-map,string'],
  ['Group Anagrams', 'hashing', 'medium', 'group-anagrams', 'hash-map,string,sorting', true],
  ['Subarray Sum Equals K', 'hashing', 'medium', 'subarray-sum-equals-k', 'prefix-sum,hash-map', true],
  ['Longest Consecutive Sequence', 'hashing', 'medium', 'longest-consecutive-sequence', 'hash-set,array', true],

  ['Remove Duplicates from Sorted Array', 'two-pointers', 'easy', 'remove-duplicates-from-sorted-array', 'two-pointers,in-place', true],
  ['Squares of a Sorted Array', 'two-pointers', 'easy', 'squares-of-a-sorted-array', 'two-pointers,array'],
  ['Two Sum II: Input Array Is Sorted', 'two-pointers', 'medium', 'two-sum-ii-input-array-is-sorted', 'two-pointers,sorted-array', true],
  ['3Sum', 'two-pointers', 'medium', '3sum', 'two-pointers,sorting', true],
  ['4Sum', 'two-pointers', 'medium', '4sum', 'two-pointers,sorting'],
  ['Container With Most Water', 'two-pointers', 'medium', 'container-with-most-water', 'two-pointers,greedy', true],
  ['Partition List', 'two-pointers', 'medium', 'partition-list', 'linked-list,two-pointers'],
  ['Trapping Rain Water', 'two-pointers', 'hard', 'trapping-rain-water', 'two-pointers,prefix-maximum', true],

  ['Maximum Average Subarray I', 'sliding-window', 'easy', 'maximum-average-subarray-i', 'sliding-window,array'],
  ['Minimum Size Subarray Sum', 'sliding-window', 'medium', 'minimum-size-subarray-sum', 'sliding-window,array', true],
  ['Longest Substring Without Repeating Characters', 'sliding-window', 'medium', 'longest-substring-without-repeating-characters', 'sliding-window,hash-set', true],
  ['Longest Repeating Character Replacement', 'sliding-window', 'medium', 'longest-repeating-character-replacement', 'sliding-window,frequency-map', true],
  ['Permutation in String', 'sliding-window', 'medium', 'permutation-in-string', 'sliding-window,frequency-map'],
  ['Find All Anagrams in a String', 'sliding-window', 'medium', 'find-all-anagrams-in-a-string', 'sliding-window,frequency-map'],
  ['Fruit Into Baskets', 'sliding-window', 'medium', 'fruit-into-baskets', 'sliding-window,hash-map'],
  ['Sliding Window Maximum', 'sliding-window', 'hard', 'sliding-window-maximum', 'sliding-window,monotonic-deque', true],

  ['Binary Search', 'binary-search', 'easy', 'binary-search', 'binary-search,sorted-array', true],
  ['Search Insert Position', 'binary-search', 'easy', 'search-insert-position', 'binary-search,boundary'],
  ['Find First and Last Position of Element in Sorted Array', 'binary-search', 'medium', 'find-first-and-last-position-of-element-in-sorted-array', 'binary-search,boundary', true],
  ['Search a 2D Matrix', 'binary-search', 'medium', 'search-a-2d-matrix', 'binary-search,matrix'],
  ['Find Peak Element', 'binary-search', 'medium', 'find-peak-element', 'binary-search,monotonic'],
  ['Search in Rotated Sorted Array', 'binary-search', 'medium', 'search-in-rotated-sorted-array', 'binary-search,rotated-array', true],
  ['Find Minimum in Rotated Sorted Array', 'binary-search', 'medium', 'find-minimum-in-rotated-sorted-array', 'binary-search,rotated-array', true],
  ['Koko Eating Bananas', 'binary-search', 'medium', 'koko-eating-bananas', 'binary-search,answer-space', true],
  ['Capacity to Ship Packages Within D Days', 'binary-search', 'medium', 'capacity-to-ship-packages-within-d-days', 'binary-search,answer-space', true],
  ['Median of Two Sorted Arrays', 'binary-search', 'hard', 'median-of-two-sorted-arrays', 'binary-search,partition', true],

  ['Reverse Linked List', 'linked-lists', 'easy', 'reverse-linked-list', 'linked-list,pointers', true],
  ['Merge Two Sorted Lists', 'linked-lists', 'easy', 'merge-two-sorted-lists', 'linked-list,two-pointers', true],
  ['Linked List Cycle', 'linked-lists', 'easy', 'linked-list-cycle', 'linked-list,fast-slow-pointers', true],
  ['Intersection of Two Linked Lists', 'linked-lists', 'easy', 'intersection-of-two-linked-lists', 'linked-list,two-pointers'],
  ['Palindrome Linked List', 'linked-lists', 'easy', 'palindrome-linked-list', 'linked-list,fast-slow-pointers,reversal'],
  ['Linked List Cycle II', 'linked-lists', 'medium', 'linked-list-cycle-ii', 'linked-list,fast-slow-pointers', true],
  ['Remove Nth Node From End of List', 'linked-lists', 'medium', 'remove-nth-node-from-end-of-list', 'linked-list,two-pointers', true],
  ['Reorder List', 'linked-lists', 'medium', 'reorder-list', 'linked-list,fast-slow-pointers,reversal', true],
  ['Add Two Numbers', 'linked-lists', 'medium', 'add-two-numbers', 'linked-list,simulation', true],
  ['Copy List with Random Pointer', 'linked-lists', 'medium', 'copy-list-with-random-pointer', 'linked-list,hash-map', true],

  ['Valid Parentheses', 'stacks-queues', 'easy', 'valid-parentheses', 'stack,string', true],
  ['Implement Queue using Stacks', 'stacks-queues', 'easy', 'implement-queue-using-stacks', 'stack,queue'],
  ['Implement Stack using Queues', 'stacks-queues', 'easy', 'implement-stack-using-queues', 'stack,queue'],
  ['Min Stack', 'stacks-queues', 'medium', 'min-stack', 'stack,design', true],
  ['Evaluate Reverse Polish Notation', 'stacks-queues', 'medium', 'evaluate-reverse-polish-notation', 'stack,expression', true],
  ['Daily Temperatures', 'stacks-queues', 'medium', 'daily-temperatures', 'monotonic-stack,array', true],
  ['Next Greater Element I', 'stacks-queues', 'easy', 'next-greater-element-i', 'monotonic-stack,hash-map'],
  ['Decode String', 'stacks-queues', 'medium', 'decode-string', 'stack,string'],
  ['Asteroid Collision', 'stacks-queues', 'medium', 'asteroid-collision', 'stack,simulation'],
  ['Largest Rectangle in Histogram', 'stacks-queues', 'hard', 'largest-rectangle-in-histogram', 'monotonic-stack', true],

  ['Subsets', 'recursion-backtracking', 'medium', 'subsets', 'recursion,backtracking', true, 'GeeksforGeeks', 'https://www.geeksforgeeks.org/problems/subsets-1613027340/1'],
  ['Subsets II', 'recursion-backtracking', 'medium', 'subsets-ii', 'recursion,backtracking,sorting'],
  ['Permutations', 'recursion-backtracking', 'medium', 'permutations', 'recursion,backtracking', true],
  ['Permutations II', 'recursion-backtracking', 'medium', 'permutations-ii', 'recursion,backtracking,sorting'],
  ['Combination Sum', 'recursion-backtracking', 'medium', 'combination-sum', 'recursion,backtracking', true],
  ['Combination Sum II', 'recursion-backtracking', 'medium', 'combination-sum-ii', 'recursion,backtracking,sorting'],
  ['Generate Parentheses', 'recursion-backtracking', 'medium', 'generate-parentheses', 'recursion,backtracking', true],
  ['Word Search', 'recursion-backtracking', 'medium', 'word-search', 'backtracking,matrix', true],
  ['Palindrome Partitioning', 'recursion-backtracking', 'medium', 'palindrome-partitioning', 'backtracking,string'],
  ['N-Queens', 'recursion-backtracking', 'hard', 'n-queens', 'backtracking,constraints', true],

  ['Maximum Depth of Binary Tree', 'trees', 'easy', 'maximum-depth-of-binary-tree', 'tree,dfs,recursion', true],
  ['Invert Binary Tree', 'trees', 'easy', 'invert-binary-tree', 'tree,dfs,bfs', true],
  ['Same Tree', 'trees', 'easy', 'same-tree', 'tree,dfs'],
  ['Symmetric Tree', 'trees', 'easy', 'symmetric-tree', 'tree,dfs,bfs'],
  ['Diameter of Binary Tree', 'trees', 'easy', 'diameter-of-binary-tree', 'tree,dfs', true],
  ['Balanced Binary Tree', 'trees', 'easy', 'balanced-binary-tree', 'tree,dfs'],
  ['Binary Tree Level Order Traversal', 'trees', 'medium', 'binary-tree-level-order-traversal', 'tree,bfs,queue', true],
  ['Binary Tree Right Side View', 'trees', 'medium', 'binary-tree-right-side-view', 'tree,bfs,dfs'],
  ['Lowest Common Ancestor of a Binary Tree', 'trees', 'medium', 'lowest-common-ancestor-of-a-binary-tree', 'tree,dfs,recursion', true],
  ['Binary Tree Maximum Path Sum', 'trees', 'hard', 'binary-tree-maximum-path-sum', 'tree,dfs,dynamic-programming', true],

  ['Search in a Binary Search Tree', 'bst', 'easy', 'search-in-a-binary-search-tree', 'bst,search'],
  ['Insert into a Binary Search Tree', 'bst', 'medium', 'insert-into-a-binary-search-tree', 'bst,recursion'],
  ['Validate Binary Search Tree', 'bst', 'medium', 'validate-binary-search-tree', 'bst,dfs,bounds', true],
  ['Kth Smallest Element in a BST', 'bst', 'medium', 'kth-smallest-element-in-a-bst', 'bst,inorder', true],
  ['Lowest Common Ancestor of a Binary Search Tree', 'bst', 'medium', 'lowest-common-ancestor-of-a-binary-search-tree', 'bst,ordering', true],
  ['Two Sum IV: Input Is a BST', 'bst', 'easy', 'two-sum-iv-input-is-a-bst', 'bst,hash-set'],
  ['Delete Node in a BST', 'bst', 'medium', 'delete-node-in-a-bst', 'bst,recursion', true],
  ['Recover Binary Search Tree', 'bst', 'medium', 'recover-binary-search-tree', 'bst,inorder'],

  ['Last Stone Weight', 'heaps', 'easy', 'last-stone-weight', 'heap,simulation'],
  ['Kth Largest Element in an Array', 'heaps', 'medium', 'kth-largest-element-in-an-array', 'heap,quickselect', true],
  ['Kth Largest Element in a Stream', 'heaps', 'easy', 'kth-largest-element-in-a-stream', 'heap,design'],
  ['K Closest Points to Origin', 'heaps', 'medium', 'k-closest-points-to-origin', 'heap,geometry', true],
  ['Task Scheduler', 'heaps', 'medium', 'task-scheduler', 'heap,greedy', true],
  ['Find Median from Data Stream', 'heaps', 'hard', 'find-median-from-data-stream', 'two-heaps,design', true],
  ['IPO', 'heaps', 'hard', 'ipo', 'heap,greedy,sorting'],
  ['Find K Pairs with Smallest Sums', 'heaps', 'medium', 'find-k-pairs-with-smallest-sums', 'heap,two-arrays'],

  ['Number of Islands', 'graphs', 'medium', 'number-of-islands', 'graph,dfs,bfs,matrix', true],
  ['Clone Graph', 'graphs', 'medium', 'clone-graph', 'graph,dfs,bfs,hash-map', true],
  ['Course Schedule', 'graphs', 'medium', 'course-schedule', 'graph,topological-sort', true],
  ['Course Schedule II', 'graphs', 'medium', 'course-schedule-ii', 'graph,topological-sort'],
  ['Rotting Oranges', 'graphs', 'medium', 'rotting-oranges', 'graph,multi-source-bfs', true],
  ['Pacific Atlantic Water Flow', 'graphs', 'medium', 'pacific-atlantic-water-flow', 'graph,dfs,bfs,matrix'],
  ['Surrounded Regions', 'graphs', 'medium', 'surrounded-regions', 'graph,dfs,bfs,matrix'],
  ['Redundant Connection', 'graphs', 'medium', 'redundant-connection', 'graph,union-find', true],
  ['Network Delay Time', 'graphs', 'medium', 'network-delay-time', 'graph,dijkstra', true],
  ['Cheapest Flights Within K Stops', 'graphs', 'medium', 'cheapest-flights-within-k-stops', 'graph,shortest-path'],
  ['Min Cost to Connect All Points', 'graphs', 'medium', 'min-cost-to-connect-all-points', 'graph,minimum-spanning-tree'],
  ['Word Ladder', 'graphs', 'hard', 'word-ladder', 'graph,bfs,string', true],

  ['Jump Game', 'greedy', 'medium', 'jump-game', 'greedy,array', true],
  ['Jump Game II', 'greedy', 'medium', 'jump-game-ii', 'greedy,array', true],
  ['Gas Station', 'greedy', 'medium', 'gas-station', 'greedy,array', true],
  ['Hand of Straights', 'greedy', 'medium', 'hand-of-straights', 'greedy,sorting,hash-map'],
  ['Merge Triplets to Form Target Triplet', 'greedy', 'medium', 'merge-triplets-to-form-target-triplet', 'greedy,array'],
  ['Partition Labels', 'greedy', 'medium', 'partition-labels', 'greedy,string', true],
  ['Valid Parenthesis String', 'greedy', 'medium', 'valid-parenthesis-string', 'greedy,string'],
  ['Candy', 'greedy', 'hard', 'candy', 'greedy,two-pass', true],

  ['Climbing Stairs', 'dynamic-programming', 'easy', 'climbing-stairs', 'dynamic-programming,fibonacci', true],
  ['Min Cost Climbing Stairs', 'dynamic-programming', 'easy', 'min-cost-climbing-stairs', 'dynamic-programming'],
  ['House Robber', 'dynamic-programming', 'medium', 'house-robber', 'dynamic-programming,state-machine', true],
  ['House Robber II', 'dynamic-programming', 'medium', 'house-robber-ii', 'dynamic-programming,circular-array'],
  ['Coin Change', 'dynamic-programming', 'medium', 'coin-change', 'dynamic-programming,unbounded-knapsack', true],
  ['Combination Sum IV', 'dynamic-programming', 'medium', 'combination-sum-iv', 'dynamic-programming,counting'],
  ['Longest Increasing Subsequence', 'dynamic-programming', 'medium', 'longest-increasing-subsequence', 'dynamic-programming,binary-search', true],
  ['Longest Common Subsequence', 'dynamic-programming', 'medium', 'longest-common-subsequence', 'dynamic-programming,string', true],
  ['Word Break', 'dynamic-programming', 'medium', 'word-break', 'dynamic-programming,string,hash-set', true],
  ['Decode Ways', 'dynamic-programming', 'medium', 'decode-ways', 'dynamic-programming,string'],
  ['Unique Paths', 'dynamic-programming', 'medium', 'unique-paths', 'dynamic-programming,grid'],
  ['Partition Equal Subset Sum', 'dynamic-programming', 'medium', 'partition-equal-subset-sum', 'dynamic-programming,knapsack', true],
  ['Target Sum', 'dynamic-programming', 'medium', 'target-sum', 'dynamic-programming,knapsack'],
  ['Edit Distance', 'dynamic-programming', 'medium', 'edit-distance', 'dynamic-programming,string', true],
  ['Distinct Subsequences', 'dynamic-programming', 'hard', 'distinct-subsequences', 'dynamic-programming,string'],

  ['Implement Trie (Prefix Tree)', 'tries', 'medium', 'implement-trie-prefix-tree', 'trie,design', true],
  ['Design Add and Search Words Data Structure', 'tries', 'medium', 'design-add-and-search-words-data-structure', 'trie,dfs,design', true],
  ['Replace Words', 'tries', 'medium', 'replace-words', 'trie,string'],
  ['Word Search II', 'tries', 'hard', 'word-search-ii', 'trie,backtracking,matrix', true],

  ['Single Number', 'bit-manipulation', 'easy', 'single-number', 'bit-manipulation,xor', true],
  ['Number of 1 Bits', 'bit-manipulation', 'easy', 'number-of-1-bits', 'bit-manipulation'],
  ['Counting Bits', 'bit-manipulation', 'easy', 'counting-bits', 'bit-manipulation,dynamic-programming', true],
  ['Reverse Bits', 'bit-manipulation', 'easy', 'reverse-bits', 'bit-manipulation'],
  ['Missing Number', 'bit-manipulation', 'easy', 'missing-number', 'bit-manipulation,xor', true],
  ['Sum of Two Integers', 'bit-manipulation', 'medium', 'sum-of-two-integers', 'bit-manipulation'],
  ['Bitwise AND of Numbers Range', 'bit-manipulation', 'medium', 'bitwise-and-of-numbers-range', 'bit-manipulation'],
  ['Single Number II', 'bit-manipulation', 'medium', 'single-number-ii', 'bit-manipulation,counting'],

  ['Summary Ranges', 'intervals', 'easy', 'summary-ranges', 'intervals,array'],
  ['Merge Intervals', 'intervals', 'medium', 'merge-intervals', 'intervals,sorting', true],
  ['Insert Interval', 'intervals', 'medium', 'insert-interval', 'intervals,sorting', true],
  ['Non-overlapping Intervals', 'intervals', 'medium', 'non-overlapping-intervals', 'intervals,greedy', true],
  ['Minimum Number of Arrows to Burst Balloons', 'intervals', 'medium', 'minimum-number-of-arrows-to-burst-balloons', 'intervals,greedy'],
  ['Interval List Intersections', 'intervals', 'medium', 'interval-list-intersections', 'intervals,two-pointers', true],
  ['Remove Covered Intervals', 'intervals', 'medium', 'remove-covered-intervals', 'intervals,sorting'],
];

export const MASTER_PROBLEMS: MasterProblem[] = PROBLEM_SEEDS.map(
  ([title, topic, difficulty, slug, patterns, important = false, platform = 'LeetCode', sourceUrl]) => ({
    id: slug,
    title,
    topic,
    difficulty,
    patterns: patterns.split(','),
    platform,
    url: sourceUrl ?? `https://leetcode.com/problems/${slug}/`,
    important,
  }),
);
