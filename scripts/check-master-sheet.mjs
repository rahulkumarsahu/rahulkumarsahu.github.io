import assert from 'node:assert/strict';
import { MASTER_PROBLEMS, MASTER_TOPICS } from '../src/data/dsaMasterSheet.ts';
import { COMPANY_TRACKS } from '../src/data/dsaCompanyTracks.ts';
import { CURRICULUM_PROBLEMS, CURRICULUM_SOURCE_ROW_COUNT, problemUrlKey } from '../src/data/dsaCurriculum.ts';
import { REMOVED_UNVERIFIED_TITLES, UNRATED_RESOLUTIONS } from '../src/data/dsaUnratedResolutions.ts';

const topicIds = new Set(MASTER_TOPICS.map((topic) => topic.id));
const problemIds = new Set();
const titles = new Set();
const directUrls = new Set();
const allowedHosts = {
  LeetCode: 'leetcode.com',
  GeeksforGeeks: 'www.geeksforgeeks.org',
  HackerRank: 'www.hackerrank.com',
};

assert.equal(MASTER_TOPICS.length, 18, 'The master sheet should contain 18 learning topics.');
assert.equal(CURRICULUM_SOURCE_ROW_COUNT, 726, 'The curriculum import should contain all 726 source rows.');
assert.equal(CURRICULUM_PROBLEMS.length, 527, 'The curriculum should contain 527 unique problems after duplicate resources are merged.');
assert.equal(UNRATED_RESOLUTIONS.length, 406, 'All verifiable unrated questions should have a direct source and difficulty.');
assert.deepEqual([...REMOVED_UNVERIFIED_TITLES], ['Minimum Initial Red Triangles'], 'Only the invalid unrated entry should be removed.');
assert.equal(MASTER_PROBLEMS.length, 954, 'The resolved master sheet should contain exactly 954 unique problems.');

for (const problem of MASTER_PROBLEMS) {
  assert.ok(!problemIds.has(problem.id), `Duplicate problem id: ${problem.id}`);
  assert.ok(!titles.has(problem.title.toLowerCase()), `Duplicate problem title: ${problem.title}`);
  assert.ok(topicIds.has(problem.topic), `Unknown topic on ${problem.title}: ${problem.topic}`);
  assert.ok(['easy', 'medium', 'hard', 'unrated'].includes(problem.difficulty), `Invalid difficulty on ${problem.title}`);
  assert.ok(problem.patterns.length > 0, `Missing pattern metadata on ${problem.title}`);
  assert.ok(problem.platform in allowedHosts, `Unexpected platform on ${problem.title}`);
  const sourceUrl = new URL(problem.url);
  assert.equal(sourceUrl.protocol, 'https:', `Insecure source URL on ${problem.title}`);
  assert.equal(sourceUrl.hostname, allowedHosts[problem.platform], `Unexpected source host on ${problem.title}`);
  assert.ok(['direct', 'search'].includes(problem.linkType), `Invalid link type on ${problem.title}`);
  if (problem.platform === 'LeetCode' && problem.linkType === 'direct') {
    assert.ok(sourceUrl.pathname.startsWith('/problems/'), `Unexpected official URL on ${problem.title}`);
  }
  if (problem.linkType === 'direct') {
    const directUrlKey = problemUrlKey(problem.url);
    assert.ok(!directUrls.has(directUrlKey), `Duplicate direct problem resource: ${problem.url}`);
    directUrls.add(directUrlKey);
  }
  if (problem.linkType === 'search') {
    assert.equal(problem.platform, 'LeetCode', `Search fallback must use LeetCode on ${problem.title}`);
    assert.equal(sourceUrl.pathname, '/problemset/', `Unexpected search path on ${problem.title}`);
    assert.equal(sourceUrl.searchParams.get('search'), problem.title, `Search title mismatch on ${problem.title}`);
    assert.equal(problem.difficulty, 'unrated', `Unverified imported difficulty should remain unrated on ${problem.title}`);
  }
  problemIds.add(problem.id);
  titles.add(problem.title.toLowerCase());
}

for (const curriculumProblem of CURRICULUM_PROBLEMS) {
  const matchingProblem = MASTER_PROBLEMS.find(
    (problem) => problem.linkType === 'direct' && problemUrlKey(problem.url) === problemUrlKey(curriculumProblem.url),
  );
  assert.ok(matchingProblem, `Curriculum problem missing from master sheet: ${curriculumProblem.title}`);
  assert.equal(matchingProblem.difficulty, curriculumProblem.difficulty, `Curriculum difficulty mismatch on ${curriculumProblem.title}`);
}

for (const resolution of UNRATED_RESOLUTIONS) {
  const matchingProblem = MASTER_PROBLEMS.find(
    (problem) => problem.linkType === 'direct' && problemUrlKey(problem.url) === problemUrlKey(resolution.url),
  );
  assert.ok(matchingProblem, `Resolved problem missing from master sheet: ${resolution.title}`);
  assert.equal(matchingProblem.difficulty, resolution.difficulty, `Resolved difficulty mismatch on ${resolution.title}`);
}

assert.equal(MASTER_PROBLEMS.filter((problem) => problem.difficulty === 'unrated').length, 0, 'No problem should remain unrated.');
assert.equal(MASTER_PROBLEMS.filter((problem) => problem.linkType === 'search').length, 0, 'Every problem should have a direct practice link.');

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
  ['easy', 'medium', 'hard', 'unrated'].map((difficulty) => [difficulty, MASTER_PROBLEMS.filter((problem) => problem.difficulty === difficulty).length]),
);

console.log(`Master sheet: ${MASTER_PROBLEMS.length} unique problems across ${MASTER_TOPICS.length} topics.`);
console.log(`Difficulty split: ${difficultyCounts.easy} easy, ${difficultyCounts.medium} medium, ${difficultyCounts.hard} hard, ${difficultyCounts.unrated} unrated.`);
console.log(`Curriculum merge: ${CURRICULUM_SOURCE_ROW_COUNT} rows resolved to ${CURRICULUM_PROBLEMS.length} unique resources.`);
console.log(`Unrated cleanup: ${UNRATED_RESOLUTIONS.length} verified; ${REMOVED_UNVERIFIED_TITLES.length} invalid entry removed.`);
console.log(`Company practice: ${COMPANY_TRACKS.length} tracks with one starter across all ${MASTER_TOPICS.length} topics.`);
