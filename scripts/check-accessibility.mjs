import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url);

const collectHtml = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectHtml(path) : entry.name.endsWith('.html') ? [path] : [];
  }));
  return nested.flat();
};

const getAttribute = (tag, name) => {
  const match = tag.match(new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? null;
};

const readableText = (html) => html
  .replace(/<script\b[\s\S]*?<\/script>/gi, '')
  .replace(/<style\b[\s\S]*?<\/style>/gi, '')
  .replace(/<svg\b[\s\S]*?<\/svg>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&(?:nbsp|#160);/gi, ' ')
  .replace(/&[^;]+;/g, 'x')
  .replace(/\s+/g, ' ')
  .trim();

const failures = [];
const files = await collectHtml(root.pathname);

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const name = relative(root.pathname, file);
  const fail = (message) => failures.push(`${name}: ${message}`);

  if (!/<html\b[^>]*\blang=["'][^"']+["']/i.test(html)) fail('missing document language');
  if (!/<main\b[^>]*\bid=["']main-content["']/i.test(html)) fail('missing main content landmark');
  const mainCount = (html.match(/<main\b/gi) ?? []).length;
  if (mainCount !== 1) fail(`expected one main landmark, found ${mainCount}`);
  if (!/<a\b[^>]*\bhref=["']#main-content["'][^>]*>[^<]*Skip to content/i.test(html)) fail('missing skip link');

  const ids = [...html.matchAll(/\sid=["']([^"']+)["']/gi)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  if (duplicateIds.length) fail(`duplicate ids: ${duplicateIds.join(', ')}`);

  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (h1Count !== 1) fail(`expected one h1, found ${h1Count}`);

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\salt(?:\s*=|\s|\/?>)/i.test(match[0])) fail(`image without alt text: ${match[0].slice(0, 100)}`);
  }

  for (const match of html.matchAll(/<iframe\b[^>]*>/gi)) {
    if (!getAttribute(match[0], 'title')) fail('iframe without a title');
  }

  for (const match of html.matchAll(/<(button|a)\b([^>]*)>([\s\S]*?)<\/\1>/gi)) {
    const tag = match[0];
    const attributes = match[2];
    const text = readableText(match[3]);
    const labelled = getAttribute(tag, 'aria-label') || getAttribute(tag, 'aria-labelledby') || getAttribute(tag, 'title');
    if (!text && !labelled && !/aria-hidden=["']true["']/i.test(attributes)) fail(`${match[1].toLowerCase()} without an accessible name`);
  }

  for (const match of html.matchAll(/<(input|select|textarea)\b[^>]*>/gi)) {
    const tag = match[0];
    const type = getAttribute(tag, 'type');
    if (type === 'hidden') continue;
    const id = getAttribute(tag, 'id');
    const labelled = getAttribute(tag, 'aria-label') || getAttribute(tag, 'aria-labelledby') || getAttribute(tag, 'title');
    const explicitLabel = id && new RegExp(`<label\\b[^>]*\\bfor=["']${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'i').test(html);
    const before = html.slice(Math.max(0, match.index - 300), match.index);
    const wrappedLabel = before.lastIndexOf('<label') > before.lastIndexOf('</label>');
    if (!labelled && !explicitLabel && !wrappedLabel) fail(`${match[1].toLowerCase()} without a programmatic label`);
  }
}

if (failures.length) {
  console.error(`Accessibility validation found ${failures.length} issue(s):`);
  failures.slice(0, 100).forEach((failure) => console.error(`- ${failure}`));
  if (failures.length > 100) console.error(`- ${failures.length - 100} additional issue(s) omitted`);
  process.exit(1);
}

console.log(`Verified accessibility structure for ${files.length} HTML pages: landmarks, headings, labels, alternative text, skip links and unique IDs.`);
