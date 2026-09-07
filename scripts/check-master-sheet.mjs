import assert from 'node:assert/strict';
import { MASTER_PROBLEMS, MASTER_TOPICS } from '../src/data/dsaMasterSheet.ts';
import { COMPANY_TRACKS } from '../src/data/dsaCompanyTracks.ts';

const topicIds = new Set(MASTER_TOPICS.map((topic) => topic.id));
const problemIds = new Set();
const titles = new Set();
const allowedHosts = {
  LeetCode: 'leetcode.com',
  GeeksforGeeks: 'www.geeksforgeeks.org',
  HackerRank: 'www.hackerrank.com',
};

assert.equal(MASTER_TOPICS.length, 18, 'The master sheet should contain 18 learning topics.');
assert.ok(MASTER_PROBLEMS.length >= 150, 'The master sheet should contain a substantial Phase 1 problem set.');

for (const problem of MASTER_PROBLEMS) {
  assert.ok(!problemIds.has(problem.id), `Duplicate problem id: ${problem.id}`);
  assert.ok(!titles.has(problem.title.toLowerCase()), `Duplicate problem title: ${problem.title}`);
  assert.ok(topicIds.has(problem.topic), `Unknown topic on ${problem.title}: ${problem.topic}`);
  assert.ok(['easy', 'medium', 'hard'].includes(problem.difficulty), `Invalid difficulty on ${problem.title}`);
  assert.ok(problem.patterns.length > 0, `Missing pattern metadata on ${problem.title}`);
  assert.ok(problem.platform in allowedHosts, `Unexpected platform on ${problem.title}`);
  const sourceUrl = new URL(problem.url);
  assert.equal(sourceUrl.protocol, 'https:', `Insecure source URL on ${problem.title}`);
  assert.equal(sourceUrl.hostname, allowedHosts[problem.platform], `Unexpected source host on ${problem.title}`);
  if (problem.platform === 'LeetCode') {
    assert.equal(problem.url, `https://leetcode.com/problems/${problem.id}/`, `Unexpected official URL on ${problem.title}`);
  }
  problemIds.add(problem.id);
  titles.add(problem.title.toLowerCase());
}

for (const topic of MASTER_TOPICS) {
  assert.ok(MASTER_PROBLEMS.some((problem) => problem.topic === topic.id), `Topic has no problems: ${topic.title}`);
}

assert.equal(COMPANY_TRACKS.length, 3, 'The initial company directory should contain Google, Meta and Uber.');
for (const company of COMPANY_TRACKS) {
  assert.equal(company.problems.length, MASTER_TOPICS.length, `${company.name} should contain one starter for every topic.`);
  assert.equal(new Set(company.problems.map((problem) => problem.topic)).size, MASTER_TOPICS.length, `${company.name} contains a duplicate or missing topic.`);
  assert.equal(new URL(company.sourceUrl).hostname, 'leetcode.com', `Unexpected community source on ${company.name}.`);
}

const difficultyCounts = Object.fromEntries(
  ['easy', 'medium', 'hard'].map((difficulty) => [difficulty, MASTER_PROBLEMS.filter((problem) => problem.difficulty === difficulty).length]),
);

console.log(`Master sheet: ${MASTER_PROBLEMS.length} unique problems across ${MASTER_TOPICS.length} topics.`);
console.log(`Difficulty split: ${difficultyCounts.easy} easy, ${difficultyCounts.medium} medium, ${difficultyCounts.hard} hard.`);
console.log(`Company practice: ${COMPANY_TRACKS.length} tracks with one starter across all ${MASTER_TOPICS.length} topics.`);
