import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import type { MasterDifficulty, MasterPlatform } from './dsaMasterSheet.ts';
import { normalizeProblemTitle } from './dsaImportedProblems.ts';

export interface CurriculumProblem {
  title: string;
  aliases: string[];
  topic: string;
  difficulty: Exclude<MasterDifficulty, 'unrated'>;
  patterns: string[];
  platform: MasterPlatform;
  url: string;
  important: boolean;
}

interface CurriculumRow extends Omit<CurriculumProblem, 'aliases' | 'patterns' | 'platform'> {
  pattern: string;
  sourceTopic: string;
}

const TOPIC_MAP: Record<string, string> = {
  Array: 'arrays',
  Strings: 'strings',
  'Linked List': 'linked-lists',
  '2D Array': 'arrays',
  Searching: 'binary-search',
  Sorting: 'arrays',
  Recursion: 'recursion-backtracking',
  Stack: 'stacks-queues',
  Queue: 'stacks-queues',
  Heap: 'heaps',
  Hashing: 'hashing',
  'Binary Tree': 'trees',
  'Binary Search Tree': 'bst',
  'Advanced Trees': 'tries',
  Graph: 'graphs',
  'DP (Dynamic Programming)': 'dynamic-programming',
  'Greedy Algorithms': 'greedy',
  Backtracking: 'recursion-backtracking',
};

const TITLE_OVERRIDES: Record<string, string> = {
  'leetcode.com/problems/rotate-array': 'Rotate Array',
  'leetcode.com/problems/best-time-to-buy-and-sell-stock': 'Best Time to Buy and Sell Stock',
  'leetcode.com/problems/kth-missing-positive-number': 'Kth Missing Positive Number',
  'leetcode.com/problems/two-sum-ii-input-array-is-sorted': 'Two Sum II: Input Array Is Sorted',
  'leetcode.com/problems/online-stock-span': 'Online Stock Span',
  'leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets': 'Minimum Number of Days to Make m Bouquets',
  'leetcode.com/problems/sort-colors': 'Sort Colors',
  'leetcode.com/problems/longest-increasing-subsequence': 'Longest Increasing Subsequence',
  'leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array': 'Find First and Last Position of Element in Sorted Array',
  'leetcode.com/problems/find-peak-element': 'Find Peak Element',
  'leetcode.com/problems/binary-subarrays-with-sum': 'Binary Subarrays With Sum',
  'leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons': 'Minimum Number of Arrows to Burst Balloons',
  'leetcode.com/problems/find-k-th-smallest-pair-distance': 'Find K-th Smallest Pair Distance',
  'leetcode.com/problems/shortest-subarray-with-sum-at-least-k': 'Shortest Subarray with Sum at Least K',
  'leetcode.com/problems/stream-of-characters': 'Stream of Characters',
  'leetcode.com/problems/insertion-sort-list': 'Insertion Sort List',
  'leetcode.com/problems/flood-fill': 'Flood Fill',
  'leetcode.com/problems/walls-and-gates': 'Walls and Gates',
  'leetcode.com/problems/peak-index-in-a-mountain-array': 'Peak Index in a Mountain Array',
  'leetcode.com/problems/find-k-closest-elements': 'Find K Closest Elements',
  'leetcode.com/problems/sort-an-array': 'Sort an Array',
  'leetcode.com/problems/path-sum-ii': 'Path Sum II',
  'leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal': 'Construct Binary Tree from Preorder and Inorder Traversal',
  'leetcode.com/problems/word-break-ii': 'Word Break II',
  'leetcode.com/problems/132-pattern': '132 Pattern',
  'leetcode.com/problems/rearrange-string-k-distance-apart': 'Rearrange String k Distance Apart',
  'leetcode.com/problems/recover-binary-search-tree': 'Recover Binary Search Tree',
  'leetcode.com/problems/coin-change': 'Coin Change',
  'leetcode.com/problems/maximum-profit-in-job-scheduling': 'Maximum Profit in Job Scheduling',
  'leetcode.com/problems/diagonal-traverse': 'Diagonal Traverse',
  'leetcode.com/problems/relative-sort-array': 'Relative Sort Array',
  'leetcode.com/problems/redundant-connection-ii': 'Redundant Connection II',
  'leetcode.com/problems/delete-node-in-a-bst': 'Delete Node in a BST',
  'leetcode.com/problems/accounts-merge': 'Accounts Merge',
};

const DIFFICULTY_OVERRIDES: Record<string, Exclude<MasterDifficulty, 'unrated'>> = {
  'leetcode.com/problems/rotate-array': 'medium',
  'leetcode.com/problems/two-sum-ii-input-array-is-sorted': 'medium',
  'leetcode.com/problems/maximum-subarray': 'medium',
  'leetcode.com/problems/edit-distance': 'medium',
  'leetcode.com/problems/peak-index-in-a-mountain-array': 'easy',
  'leetcode.com/problems/recover-binary-search-tree': 'medium',
  'leetcode.com/problems/maximum-profit-in-job-scheduling': 'hard',
};

export function canonicalProblemUrl(value: string): string {
  const url = new URL(value);
  if (url.hostname === 'practice.geeksforgeeks.org') url.hostname = 'www.geeksforgeeks.org';
  url.hash = '';
  url.search = '';
  url.pathname = url.pathname.replace(/\/description\/?$/, '/').replace(/\/{2,}/g, '/');
  if (!url.pathname.endsWith('/')) url.pathname += '/';
  return url.toString();
}

export function problemUrlKey(value: string): string {
  const url = new URL(canonicalProblemUrl(value));
  return `${url.hostname.replace(/^www\./, '')}${url.pathname.replace(/\/$/, '')}`;
}

function patternSlugs(value: string): string[] {
  return value
    .split(/\s*(?:&|\/|,)\s*/)
    .map((pattern) => normalizeProblemTitle(pattern).replaceAll(' ', '-'))
    .filter(Boolean);
}

function platformFor(url: string): MasterPlatform {
  return new URL(url).hostname.includes('geeksforgeeks.org') ? 'GeeksforGeeks' : 'LeetCode';
}

const source = readFileSync(resolve(process.cwd(), 'src/data/levelup-dsa-curriculum.md'), 'utf8');
const rows: CurriculumRow[] = [];
let sourceTopic = '';
let difficulty: Exclude<MasterDifficulty, 'unrated'> | '' = '';

for (const rawLine of source.split(/\r?\n/)) {
  const line = rawLine.trim();
  const topicMatch = line.match(/^## (.+)$/);
  if (topicMatch && topicMatch[1] in TOPIC_MAP) {
    sourceTopic = topicMatch[1];
    continue;
  }

  const difficultyMatch = line.match(/^### (Easy|Medium|Hard)/);
  if (difficultyMatch) {
    difficulty = difficultyMatch[1].toLowerCase() as Exclude<MasterDifficulty, 'unrated'>;
    continue;
  }

  if (!sourceTopic || !difficulty || !line.startsWith('| [ ] |')) continue;
  const rowMatch = line.match(/^\| \[ \] \| \*\*(.+?)\*\*<br>.*? \| (.+?) \| \[🔗 Practice\]\((https?:\/\/[^)]+)\) \| (.*?) \|$/);
  if (!rowMatch) throw new Error(`Could not parse curriculum row: ${line}`);

  rows.push({
    title: rowMatch[1].trim(),
    sourceTopic,
    topic: TOPIC_MAP[sourceTopic],
    difficulty,
    pattern: rowMatch[2].trim(),
    url: canonicalProblemUrl(rowMatch[3]),
    important: rowMatch[4].includes('⭐'),
  });
}

const rowsByUrl = new Map<string, CurriculumRow[]>();
for (const row of rows) {
  const key = problemUrlKey(row.url);
  const matches = rowsByUrl.get(key) ?? [];
  matches.push(row);
  rowsByUrl.set(key, matches);
}

const dedupedByUrl: CurriculumProblem[] = [...rowsByUrl.entries()].map(([urlKey, matches]) => {
  const first = matches[0];
  const aliases = [...new Set(matches.map((row) => row.title))];
  const title = TITLE_OVERRIDES[urlKey] ?? aliases.reduce((best, candidate) => candidate.length > best.length ? candidate : best);
  const availableDifficulties = [...new Set(matches.map((row) => row.difficulty))];
  const resolvedDifficulty = DIFFICULTY_OVERRIDES[urlKey] ?? availableDifficulties[0];

  return {
    title,
    aliases: [...new Set([...aliases, title])],
    topic: first.topic,
    difficulty: resolvedDifficulty,
    patterns: [...new Set(matches.flatMap((row) => patternSlugs(row.pattern)))],
    platform: platformFor(first.url),
    url: first.url,
    important: matches.some((row) => row.important),
  };
});

const seenTitles = new Set<string>();
export const CURRICULUM_PROBLEMS: CurriculumProblem[] = dedupedByUrl.filter((problem) => {
  const normalizedAliases = problem.aliases.map(normalizeProblemTitle);
  if (normalizedAliases.some((alias) => seenTitles.has(alias))) return false;
  normalizedAliases.forEach((alias) => seenTitles.add(alias));
  return true;
});

export const CURRICULUM_SOURCE_ROW_COUNT = rows.length;
