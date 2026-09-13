import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const failures = [];
const globalCss = read('src/styles/global.css');
const fieldManualCss = read('src/styles/field-manual.css');
const masterHtmlPath = new URL('dist/dsa/master-sheet/index.html', root);
const masterHtml = readFileSync(masterHtmlPath, 'utf8');

const lightBlock = globalCss.match(/:root\[data-theme=['"]light['"]\]\s*\{([\s\S]*?)\n\}/)?.[1] || '';
const token = (name) => lightBlock.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`, 'i'))?.[1];
const channel = (value) => {
  const normalized = value / 255;
  return normalized <= .04045 ? normalized / 12.92 : ((normalized + .055) / 1.055) ** 2.4;
};
const luminance = (hex) => {
  const values = hex.slice(1).match(/.{2}/g).map((pair) => channel(Number.parseInt(pair, 16)));
  return .2126 * values[0] + .7152 * values[1] + .0722 * values[2];
};
const contrast = (foreground, background) => {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0] + .05) / (values[1] + .05);
};

const lightSurfaces = ['bg', 'surface', 'surface-strong'];
const lightTextTokens = ['text-faint', 'indigo', 'orange', 'amber', 'cyan', 'green'];
for (const foregroundName of lightTextTokens) {
  for (const backgroundName of lightSurfaces) {
    const foreground = token(foregroundName);
    const background = token(backgroundName);
    if (!foreground || !background) {
      failures.push(`Missing light-theme token --${foregroundName} or --${backgroundName}.`);
      continue;
    }
    const ratio = contrast(foreground, background);
    if (ratio < 4.5) failures.push(`--${foregroundName} on --${backgroundName} is ${ratio.toFixed(2)}:1; expected at least 4.5:1.`);
  }
}

for (const required of ['--type-technical:', '--type-metadata:', '--type-small:', '--control-min:', '--radius-control:', '--radius-panel:']) {
  if (!globalCss.includes(required)) failures.push(`Missing shared design token ${required.slice(0, -1)}.`);
}

if (/\.?0?1ms/.test(`${globalCss}\n${fieldManualCss}\n${read('src/components/UrlShortenerDesignLab.astro')}`)) {
  failures.push('A global 0.01ms reduced-motion override is still present.');
}
if (/(?:body|\.site-shell)[^{]*\{[^}]*overflow-x:\s*clip/s.test(`${globalCss}\n${fieldManualCss}`)) {
  failures.push('The body or site shell still clips horizontal overflow.');
}

const initialRows = (masterHtml.match(/class="master-problem"/g) || []).length;
const masterBytes = statSync(masterHtmlPath).size;
if (initialRows > 72) failures.push(`Master Sheet includes ${initialRows} initial problem rows; expected progressive rendering.`);
if (masterBytes > 500_000) failures.push(`Master Sheet HTML is ${masterBytes} bytes; expected no more than 500000 bytes.`);

const sourceFiles = [];
const collect = (directory) => {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) collect(path);
    else if (/\.(astro|css|ts|js|md|mdx)$/.test(entry)) sourceFiles.push(path);
  }
};
collect(new URL('src', root).pathname);
for (const path of sourceFiles) {
  const source = readFileSync(path, 'utf8');
  if (/assets\/plates\/(?:paper-grain|rahul-system-portrait|recent-feature-image)\.png/.test(source)) {
    failures.push(`${path.replace(new URL('.', root).pathname, '')} still references an unoptimized homepage PNG.`);
  }

  if (!/\.(?:astro|css)$/.test(path)) continue;
  const relativePath = path.replace(new URL('.', root).pathname, '');
  const declarations = source.match(/(?:font-size|font|letter-spacing|text-transform|text-shadow)\s*:[^;}]+/g) || [];
  for (const declaration of declarations) {
    const normalized = declaration.replace(/\s+/g, ' ').trim();
    const fontSize = normalized.match(/^font-size:\s*(\d*\.?\d+)(px|rem|em)\b/);
    if (fontSize) {
      const value = Number(fontSize[1]);
      const tooSmall = fontSize[2] === 'px' ? value < 13 : value < .8;
      if (tooSmall) failures.push(`${relativePath} uses undersized UI text: ${normalized}.`);
    }
    if (/^letter-spacing:\s*0?\.(?:0[5-9]|[1-9]\d*)em\b/.test(normalized)) {
      failures.push(`${relativePath} uses excessive letter spacing: ${normalized}.`);
    }
    if (/^text-transform:\s*uppercase\b/.test(normalized)) {
      failures.push(`${relativePath} forces interface copy to uppercase: ${normalized}.`);
    }
    if (normalized.startsWith('text-shadow:') && !/^text-shadow:\s+none\b/.test(normalized)) {
      failures.push(`${relativePath} uses a glowing or decorative text shadow: ${normalized}.`);
    }
  }
}

if (failures.length) {
  console.error('Design guardrails failed:\n' + failures.map((failure) => `- ${failure}`).join('\n'));
  process.exit(1);
}

console.log(`Design guardrails passed: accessible tokens, readable UI type, restrained tracking, sentence-case styling, no text glows, intentional reduced motion, no shell clipping, optimized plates, and ${masterBytes}-byte progressive Master Sheet HTML.`);
