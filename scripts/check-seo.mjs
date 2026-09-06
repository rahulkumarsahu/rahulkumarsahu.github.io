import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const siteOrigin = 'https://rahulkumarsahu.github.io';

function listFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? listFiles(absolute) : [absolute];
  });
}

function attribute(source, element, name, value, target) {
  const pattern = new RegExp(`<${element}[^>]*${name}=["']${value}["'][^>]*${target}=["']([^"']+)["'][^>]*>`, 'i');
  const reverse = new RegExp(`<${element}[^>]*${target}=["']([^"']+)["'][^>]*${name}=["']${value}["'][^>]*>`, 'i');
  return source.match(pattern)?.[1] ?? source.match(reverse)?.[1];
}

function pagePath(file) {
  const relative = path.relative(dist, file).split(path.sep).join('/');
  if (relative === 'index.html') return '/';
  return `/${relative.replace(/index\.html$/, '')}`;
}

assert(existsSync(dist), 'dist is missing; build the site before checking SEO.');

const sitemapFiles = listFiles(dist).filter((file) => /sitemap-\d+\.xml$/.test(file));
assert(sitemapFiles.length > 0, 'Generated sitemap is missing.');
const sitemap = sitemapFiles.map((file) => readFileSync(file, 'utf8')).join('\n');
const robots = readFileSync(path.join(dist, 'robots.txt'), 'utf8');
assert(robots.includes(`${siteOrigin}/sitemap-index.xml`), 'robots.txt does not advertise the canonical sitemap.');

const htmlFiles = listFiles(dist).filter((file) => file.endsWith('.html'));
const titles = new Map();
const canonicals = new Set();
let indexableCount = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const route = pagePath(file);
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const description = attribute(html, 'meta', 'name', 'description', 'content');
  const canonical = attribute(html, 'link', 'rel', 'canonical', 'href');
  const robotsValue = attribute(html, 'meta', 'name', 'robots', 'content');
  const noindex = robotsValue?.toLowerCase().includes('noindex') ?? false;
  const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;

  assert(title, `${route}: title is missing.`);
  assert(description && description.length >= 30, `${route}: meta description is missing or too vague.`);
  assert(canonical?.startsWith(`${siteOrigin}/`), `${route}: canonical URL is missing or has the wrong origin.`);
  assert(!canonicals.has(canonical), `${route}: duplicate canonical URL ${canonical}.`);
  assert(robotsValue, `${route}: robots directive is missing.`);
  assert.equal(h1Count, route === '/404.html' ? 1 : 1, `${route}: expected exactly one h1, found ${h1Count}.`);
  assert(attribute(html, 'meta', 'property', 'og:title', 'content'), `${route}: Open Graph title is missing.`);
  assert(attribute(html, 'meta', 'name', 'twitter:card', 'content'), `${route}: Twitter card metadata is missing.`);
  assert(html.includes('application/ld+json'), `${route}: structured data is missing.`);

  for (const script of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    assert.doesNotThrow(() => JSON.parse(script[1]), `${route}: structured data is not valid JSON.`);
  }

  if (route.startsWith('/posts/')) {
    assert(html.includes('"@type":"BlogPosting"'), `${route}: BlogPosting structured data is missing.`);
    assert(html.includes('property="article:published_time"'), `${route}: article publication metadata is missing.`);
  }

  if (route !== '/' && route !== '/404.html') {
    assert(html.includes('"@type":"BreadcrumbList"'), `${route}: breadcrumb structured data is missing.`);
  }

  if (!noindex && route !== '/404.html') {
    assert(sitemap.includes(`<loc>${canonical}</loc>`), `${route}: indexable canonical is absent from the sitemap.`);
    indexableCount += 1;
  } else {
    assert(!sitemap.includes(`<loc>${canonical}</loc>`), `${route}: noindex URL must not appear in the sitemap.`);
  }

  titles.set(title, [...(titles.get(title) ?? []), route]);
  canonicals.add(canonical);
}

for (const [title, routes] of titles) {
  assert.equal(routes.length, 1, `Duplicate page title "${title}" on ${routes.join(', ')}.`);
}

console.log(`Verified technical SEO for ${htmlFiles.length} HTML pages; ${indexableCount} canonical URLs are eligible for indexing.`);
