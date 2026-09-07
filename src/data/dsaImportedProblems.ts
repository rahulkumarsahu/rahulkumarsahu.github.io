import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface ImportedProblemNote {
  title: string;
  sourceCategory: string;
  topic: string;
  pattern: string;
}

const CATEGORY_MAP: Record<string, { topic: string; pattern: string }> = {
  'Recursion & Backtracking': { topic: 'recursion-backtracking', pattern: 'recursion-backtracking' },
  'Binary Tree / BST / N-ary Tree': { topic: 'trees', pattern: 'tree-traversal' },
  'Graph (BFS/DFS/Union-Find/Shortest Path)': { topic: 'graphs', pattern: 'graph-algorithms' },
  'Linked List': { topic: 'linked-lists', pattern: 'linked-list' },
  'Dynamic Programming': { topic: 'dynamic-programming', pattern: 'dynamic-programming' },
  'Arrays & Two Pointers': { topic: 'arrays', pattern: 'arrays-two-pointers' },
  'Sliding Window': { topic: 'sliding-window', pattern: 'sliding-window' },
  'Binary Search': { topic: 'binary-search', pattern: 'binary-search' },
  'Stack / Monotonic Stack': { topic: 'stacks-queues', pattern: 'monotonic-stack' },
  'Heap / Greedy': { topic: 'heaps', pattern: 'heap-greedy' },
  'String Manipulation': { topic: 'strings', pattern: 'string-manipulation' },
  'Bit Manipulation': { topic: 'bit-manipulation', pattern: 'bit-manipulation' },
  'Matrix / Grid': { topic: 'arrays', pattern: 'matrix-grid' },
  'Design (Data Structures)': { topic: 'stacks-queues', pattern: 'data-structure-design' },
  'Math / Combinatorics / Number Theory': { topic: 'bit-manipulation', pattern: 'math-number-theory' },
  Trie: { topic: 'tries', pattern: 'trie' },
  'Prefix Sum / Sweep Line / Intervals': { topic: 'intervals', pattern: 'prefix-sum-sweep-line' },
  Simulation: { topic: 'arrays', pattern: 'simulation' },
};

export function normalizeProblemTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function problemTitleToId(title: string): string {
  return normalizeProblemTitle(title).replaceAll(' ', '-');
}

const notesText = readFileSync(resolve(process.cwd(), 'src/data/dsa-problem-import.md'), 'utf8');
const seenTitles = new Set<string>();
let currentCategory = '';

export const IMPORTED_PROBLEM_NOTES: ImportedProblemNote[] = [];

for (const rawLine of notesText.split(/\r?\n/)) {
  const line = rawLine.trim();
  if (line.startsWith('## ')) {
    currentCategory = line.slice(3).trim();
    continue;
  }
  if (!line || line.startsWith('#')) continue;

  const category = CATEGORY_MAP[currentCategory];
  if (!category) throw new Error(`Unknown imported DSA category: ${currentCategory || '(missing)'}`);
  const normalizedTitle = normalizeProblemTitle(line);
  if (!normalizedTitle || seenTitles.has(normalizedTitle)) continue;
  seenTitles.add(normalizedTitle);
  IMPORTED_PROBLEM_NOTES.push({ title: line, sourceCategory: currentCategory, ...category });
}
