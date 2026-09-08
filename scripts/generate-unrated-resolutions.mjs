import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';

const [, , referencePath, catalogPath, outputPath] = process.argv;
assert.ok(referencePath && catalogPath && outputPath, 'Usage: node scripts/generate-unrated-resolutions.mjs <reference.md> <leetcode-catalog.json> <output.ts>');

const reference = readFileSync(referencePath, 'utf8');
const catalogue = JSON.parse(readFileSync(catalogPath, 'utf8')).stat_status_pairs;
const catalogueBySlug = new Map(catalogue.map((entry) => [entry.stat.question__title_slug, entry]));

const SLUG_CORRECTIONS = {
  'minimize-maximum-value-in-grid': 'minimize-maximum-value-in-a-grid',
  'count-substrings-without-repeating-characters': 'count-substrings-without-repeating-character',
  'check-if-a-number-is-a-majority-element-in-a-sorted-array': 'check-if-a-number-is-majority-element-in-a-sorted-array',
  'number-of-equal-numbers-block': 'number-of-equal-numbers-blocks',
  'maximal-range-that-each-element-is-maximal-in-it': 'maximal-range-that-each-element-is-maximum-in-it',
  'convert-objects-to-json-string': 'convert-object-to-json-string',
  'make-objects-immutable': 'make-object-immutable',
  'find-the-kth-lucky-number': 'find-the-k-th-lucky-number',
};

const REMOVED_UNVERIFIED_SLUGS = new Set(['minimum-initial-red-triangles']);
const difficultyNames = ['', 'easy', 'medium', 'hard'];
const sourceRows = [];

for (const line of reference.split(/\r?\n/)) {
  const match = line.match(/^\| \d+ \| \*\*(.+?)\*\* \| `(.+?)` \| .*? \| \[Likely URL ↗\]\(https:\/\/leetcode\.com\/problems\/([^/)]+)\/\) \|$/);
  if (match) sourceRows.push({ title: match[1], proposedSlug: match[3] });
}

assert.equal(sourceRows.length, 407, 'Expected all 407 unrated reference rows.');

const removedTitles = [];
const resolutions = [];
for (const sourceRow of sourceRows) {
  if (REMOVED_UNVERIFIED_SLUGS.has(sourceRow.proposedSlug)) {
    removedTitles.push(sourceRow.title);
    continue;
  }

  const slug = SLUG_CORRECTIONS[sourceRow.proposedSlug] ?? sourceRow.proposedSlug;
  const catalogueEntry = catalogueBySlug.get(slug);
  assert.ok(catalogueEntry, `No verified LeetCode entry for ${sourceRow.title} (${slug}).`);
  const difficulty = difficultyNames[catalogueEntry.difficulty.level];
  assert.ok(difficulty, `Unknown LeetCode difficulty for ${sourceRow.title}.`);

  resolutions.push({
    sourceTitle: sourceRow.title,
    title: catalogueEntry.stat.question__title,
    difficulty,
    url: `https://leetcode.com/problems/${catalogueEntry.stat.question__title_slug}/`,
  });
}

const generated = `// Generated from LeetCode's public problem catalogue on 2026-09-08.\n` +
  `// Regenerate with scripts/generate-unrated-resolutions.mjs when the catalogue changes.\n\n` +
  `export const UNRATED_RESOLUTIONS = ${JSON.stringify(resolutions, null, 2)} as const;\n\n` +
  `export const REMOVED_UNVERIFIED_TITLES = ${JSON.stringify(removedTitles, null, 2)} as const;\n`;

writeFileSync(outputPath, generated);
console.log(`Resolved ${resolutions.length} questions; removed ${removedTitles.length} unverified entry.`);
