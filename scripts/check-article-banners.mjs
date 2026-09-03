import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
assert(existsSync(output), 'Build the site before checking article banners.');
const pages = readdirSync(output, { recursive: true })
  .filter((name) => name.endsWith('.html'));
const postPages = pages.filter((name) => name.startsWith(`posts${path.sep}`));
const assets = new Set();
const coverForArticle = new Map();
let cardCount = 0;

const decode = (value) => value.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (_, entity) => {
  const named = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' };
  if (entity.startsWith('#')) {
    return String.fromCodePoint(entity[1].toLowerCase() === 'x'
      ? Number.parseInt(entity.slice(2), 16)
      : Number.parseInt(entity.slice(1), 10));
  }
  return named[entity];
});
const attributes = (tag) => Object.fromEntries(
  [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1], decode(match[2])]),
);
const localFile = (url) => path.join(output, decodeURIComponent(new URL(url, 'https://rahulkumarsahu.github.io').pathname));
const readPage = (name) => readFileSync(path.join(output, name), 'utf8');
const meta = (html, name) => {
  for (const match of html.matchAll(/<meta\b[^>]*>/g)) {
    const attrs = attributes(match[0]);
    if (attrs.property === name || attrs.name === name) return attrs.content;
  }
};

async function checkBanner(tag, variant, page) {
  const img = attributes(tag);
  // Astro serializes an empty alt attribute as `alt` without quotes.
  if (!('alt' in img) && /\salt(?=\s|\/?>)/.test(tag)) img.alt = '';
  assert(img.src && img.srcset && img.sizes, `${page}: responsive banner missing`);
  assert.equal(img.loading, variant === 'hero' ? 'eager' : 'lazy');
  assert(variant === 'hero' ? Boolean(img.alt) : img.alt === '', `${page}: inappropriate alt text`);
  const file = localFile(img.src);
  assert(existsSync(file), `${page}: missing ${img.src}`);
  const dimensions = await sharp(file).metadata();
  assert.equal(dimensions.width, Number(img.width), `${page}: incorrect banner width`);
  assert.equal(dimensions.height, Number(img.height), `${page}: incorrect banner height`);
  assets.add(file);
  for (const candidate of img.srcset.split(',')) {
    const [src, width] = candidate.trim().split(/\s+/);
    const candidateFile = localFile(src);
    assert(existsSync(candidateFile), `${page}: missing responsive variant ${src}`);
    assert.match(width, /^\d+w$/);
    assets.add(candidateFile);
  }
  return img;
}

assert(postPages.length > 0, 'No article pages found.');
for (const page of postPages) {
  const html = readPage(page);
  const heroes = [...html.matchAll(/<div\b[^>]*data-post-banner="hero"[^>]*>\s*(<img\b[^>]*>)/g)];
  assert.equal(heroes.length, 1, `${page}: expected one article cover`);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${page}: article heading duplicated`);
  const cover = await checkBanner(heroes[0][1], 'hero', page);
  const articlePath = `/${page.replace(/index\.html$/, '').replaceAll(path.sep, '/')}`;
  coverForArticle.set(articlePath, cover);
  assert.equal(meta(html, 'og:title'), decode(html.match(/<title>([\s\S]*?)<\/title>/)[1]));
  assert.equal(meta(html, 'og:description'), meta(html, 'description'));
  assert.equal(meta(html, 'twitter:description'), meta(html, 'description'));
  assert.equal(meta(html, 'twitter:title'), meta(html, 'og:title'));
  const social = meta(html, 'og:image');
  assert(social?.startsWith('https://rahulkumarsahu.github.io/'), `${page}: untrusted social origin`);
  assert(!social.endsWith('/og.png'), `${page}: generic social cover`);
  assert(existsSync(localFile(social)), `${page}: missing sharing image`);
  assert.equal(meta(html, 'twitter:image'), social);
  assert.equal(meta(html, 'og:image:alt'), cover.alt);
  assert.equal(meta(html, 'twitter:image:alt'), cover.alt);
  const json = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(json.image, social, `${page}: inconsistent article structured data`);
  // The existing notebook image keeps its public URL; other covers share the
  // exact generated image used on their article page.
  if (!social.endsWith('/images/dsa/recursion-call-stack.webp')) {
    assert.equal(new URL(social).pathname, cover.src);
  }
}

for (const page of pages) {
  const html = readPage(page);
  const cards = [...html.matchAll(/<article class="(?:post-card(?: [^"]*)?|dsa-article-card)"[^>]*>([\s\S]*?)<\/article>/g)];
  for (const [, card] of cards) {
    const banner = card.match(/<div\b[^>]*data-post-banner="card"[^>]*>\s*(<img\b[^>]*>)/);
    assert(banner, `${page}: article card has no banner`);
    const img = await checkBanner(banner[1], 'card', page);
    const articlePath = card.match(/href="(\/posts\/[^"?#]+)"/)?.[1];
    const cover = coverForArticle.get(articlePath);
    assert(cover, `${page}: card links to a missing article`);
    assert.equal(img.src.split('_').slice(0, -1).join('_'), cover.src.split('_').slice(0, -1).join('_'), `${page}: card artwork differs from its article`);
    cardCount++;
  }
}

const recursion = readPage('posts/recursion-in-java-beginners-guide/index.html');
assert(recursion.includes('data-recursion-stack'), 'Recursion stack missing');
const subsets = readPage('posts/subsets-in-java/index.html');
assert(subsets.includes('data-subset-lab'), 'Subset animation missing');
assert(subsets.includes('jdoodle-practice'), 'JDoodle practice section missing');
const solution = subsets.match(/<details\b[^>]*data-practice-solution[^>]*>/)?.[0];
assert(solution && !/\sopen(?:\s|=|>)/.test(solution), 'Solution must remain collapsed');
assert(meta(readPage('index.html'), 'og:image').endsWith('/og.png'), 'Site-wide sharing image changed');
console.log(`Verified ${postPages.length} article covers, ${cardCount} article cards and ${assets.size} responsive assets.`);
console.log('Sharing metadata, intrinsic image dimensions and interactive component markup passed.');
