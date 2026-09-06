import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
assert(existsSync(output), 'Build the site before checking internal links.');

const pages = readdirSync(output, { recursive: true }).filter((name) => name.endsWith('.html'));
let checked = 0;

function targetFor(url) {
  const pathname = decodeURIComponent(new URL(url, 'https://rahulkumarsahu.github.io').pathname);
  const direct = path.join(output, pathname);
  if (path.extname(pathname)) return direct;
  return path.join(direct, 'index.html');
}

for (const page of pages) {
  const html = readFileSync(path.join(output, page), 'utf8');
  for (const match of html.matchAll(/\b(?:href|src)="(\/[^"]*)"/g)) {
    const url = match[1];
    if (url.startsWith('//')) continue;
    const clean = url.split('#')[0].split('?')[0];
    if (!clean) continue;
    assert(existsSync(targetFor(clean)), `${page}: broken internal resource ${url}`);
    checked++;
  }
}

console.log(`Verified ${checked} internal links and resources across ${pages.length} generated pages.`);
