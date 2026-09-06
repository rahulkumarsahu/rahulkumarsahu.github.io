import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const postsDirectory = path.join(root, 'src/content/posts');
const files = readdirSync(postsDirectory).filter((name) => /\.mdx?$/.test(name));
const slugs = new Set();
const titles = new Set();
const availablePosts = new Set(files.map((name) => name.replace(/\.mdx?$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')));

function frontmatter(source, file) {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---/);
  assert(match, `${file}: frontmatter is missing`);
  return match[1];
}

function field(block, name) {
  return block.match(new RegExp(`^${name}:\\s*(.+)$`, 'm'))?.[1]?.trim();
}

for (const file of files) {
  const source = readFileSync(path.join(postsDirectory, file), 'utf8');
  const data = frontmatter(source, file);
  const slug = file.replace(/\.mdx?$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
  const title = field(data, 'title');
  const draft = field(data, 'draft');

  assert(title, `${file}: title is missing`);
  assert(field(data, 'date'), `${file}: publication date is missing`);
  assert(field(data, 'description'), `${file}: description is missing`);
  assert(field(data, 'topic'), `${file}: topic is missing`);
  assert(!slugs.has(slug), `${file}: duplicate article slug ${slug}`);
  assert(!titles.has(title), `${file}: duplicate article title ${title}`);
  slugs.add(slug);
  titles.add(title);

  if (draft !== 'true') {
    assert(field(data, 'lastReviewed'), `${file}: published article needs a lastReviewed date`);
    assert(field(data, 'contentType'), `${file}: published article needs a contentType`);
  }

  for (const match of source.matchAll(/\]\((\/posts\/([^/#?)]+)\/?)\)/g)) {
    assert(availablePosts.has(match[2]), `${file}: broken article link ${match[1]}`);
  }
}

const practiceSource = readFileSync(path.join(root, 'src/data/practiceProblems.ts'), 'utf8');
const practiceCount = [...practiceSource.matchAll(/^\s{2}'[^']+': \{$/gm)].length;
const testPackCount = [...practiceSource.matchAll(/^\s{4}testCases: \[$/gm)].length;
assert.equal(testPackCount, practiceCount, 'Every practice problem must provide a test pack.');

for (const component of ['TreeTraversalSimulator.astro', 'GraphTraversalSimulator.astro', 'LoadBalancingSimulator.astro']) {
  const source = readFileSync(path.join(root, 'src/components', component), 'utf8');
  assert(source.includes('activeLearning'), `${component}: advanced controls are missing`);
  assert(source.includes('connectActiveSimulatorControls'), `${component}: timeline controls are not connected`);
  assert(source.includes('connectSimulatorPrediction'), `${component}: prediction step is not connected`);
}

const designLab = readFileSync(path.join(root, 'src/components/UrlShortenerDesignLab.astro'), 'utf8');
assert(designLab.includes('const activeNodes'), 'URL shortener architecture must follow selected decisions.');
assert(!designLab.includes('architectureThresholds'), 'URL shortener architecture still follows completion count.');

console.log(`Verified metadata, unique slugs and article links for ${files.length} content files.`);
console.log(`Verified ${testPackCount} practice test packs and consistent active-learning simulator wiring.`);
