import { MASTER_PROBLEMS, MASTER_TOPICS, type MasterProblem } from './dsaMasterSheet.ts';

export interface CompanyTrack {
  id: 'google' | 'meta' | 'uber';
  name: string;
  mark: string;
  description: string;
  sourceLabel: string;
  sourceUrl: string;
  problemIds: string[];
}

const TRACK_SEEDS: CompanyTrack[] = [
  {
    id: 'google',
    name: 'Google',
    mark: 'G',
    description: 'A reasoning-heavy track spanning search, recursion, graphs and dynamic programming.',
    sourceLabel: 'Community topic report',
    sourceUrl: 'https://leetcode.com/discuss/post/7015792/2020-2025-company-wise-dsa-interview-top-redj/',
    problemIds: [
      'maximum-subarray',
      'minimum-window-substring',
      'longest-consecutive-sequence',
      'trapping-rain-water',
      'sliding-window-maximum',
      'median-of-two-sorted-arrays',
      'copy-list-with-random-pointer',
      'largest-rectangle-in-histogram',
      'n-queens',
      'binary-tree-maximum-path-sum',
      'validate-binary-search-tree',
      'find-median-from-data-stream',
      'word-ladder',
      'candy',
      'edit-distance',
      'word-search-ii',
      'sum-of-two-integers',
      'merge-intervals',
    ],
  },
  {
    id: 'meta',
    name: 'Meta (Facebook)',
    mark: 'M',
    description: 'A practical track focused on arrays, strings, pointer reasoning, trees and graph traversal.',
    sourceLabel: 'Community interview report',
    sourceUrl: 'https://leetcode.com/discuss/interview-question/1985371/facebookmeta-e4-swe-phone-screening-2-coding-questions',
    problemIds: [
      'merge-sorted-array',
      'valid-palindrome',
      'group-anagrams',
      '3sum',
      'longest-substring-without-repeating-characters',
      'find-first-and-last-position-of-element-in-sorted-array',
      'linked-list-cycle',
      'valid-parentheses',
      'subsets',
      'binary-tree-level-order-traversal',
      'kth-smallest-element-in-a-bst',
      'k-closest-points-to-origin',
      'clone-graph',
      'partition-labels',
      'decode-ways',
      'design-add-and-search-words-data-structure',
      'number-of-1-bits',
      'interval-list-intersections',
    ],
  },
  {
    id: 'uber',
    name: 'Uber',
    mark: 'U',
    description: 'A backend-flavoured track with intervals, heaps, graph connectivity and optimization problems.',
    sourceLabel: 'Community interview report',
    sourceUrl: 'https://leetcode.com/discuss/post/7300207/uber-software-engineer-ii-se-2-bangalore-wyl8/',
    problemIds: [
      'best-time-to-buy-and-sell-stock',
      'reverse-words-in-a-string',
      'subarray-sum-equals-k',
      'container-with-most-water',
      'minimum-size-subarray-sum',
      'koko-eating-bananas',
      'reorder-list',
      'daily-temperatures',
      'word-search',
      'binary-tree-right-side-view',
      'delete-node-in-a-bst',
      'task-scheduler',
      'cheapest-flights-within-k-stops',
      'gas-station',
      'coin-change',
      'implement-trie-prefix-tree',
      'missing-number',
      'non-overlapping-intervals',
    ],
  },
];

const problemById = new Map(MASTER_PROBLEMS.map((problem) => [problem.id, problem]));

export interface ResolvedCompanyTrack extends Omit<CompanyTrack, 'problemIds'> {
  problems: Array<MasterProblem & { topicTitle: string; topicOrder: number }>;
}

export const COMPANY_TRACKS: ResolvedCompanyTrack[] = TRACK_SEEDS.map(({ problemIds, ...track }) => ({
  ...track,
  problems: problemIds
    .map((id) => problemById.get(id))
    .filter((problem): problem is MasterProblem => Boolean(problem))
    .map((problem) => {
      const topic = MASTER_TOPICS.find((item) => item.id === problem.topic);
      return { ...problem, topicTitle: topic?.title ?? problem.topic, topicOrder: topic?.order ?? 999 };
    })
    .sort((left, right) => left.topicOrder - right.topicOrder),
}));
