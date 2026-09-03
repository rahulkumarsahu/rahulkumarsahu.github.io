import type { ArticleVisual } from './postBanners';

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&apos;');

const colors = {
  background: '#10243a', panel: '#16314d', line: '#7dd3fc', accent: '#d5ed9b',
  warm: '#ffbd67', text: '#f4f7f8', soft: '#b7c9d7', grid: '#27445e',
};

function sequence(items: string[]) {
  const width = Math.min(220, 1180 / Math.max(items.length, 1));
  const start = 800 - (width * items.length) / 2;
  return items.map((item, index) => {
    const x = start + index * width;
    const arrow = index < items.length - 1 ? `<path d="M${x + width - 25} 485H${x + width + 5}" class="arrow"/>` : '';
    return `<g><rect x="${x + 8}" y="400" width="${width - 16}" height="170" rx="18" class="node"/><text x="${x + width / 2}" y="501" class="nodeText">${escapeXml(item)}</text>${arrow}</g>`;
  }).join('');
}

function flow(items: string[]) {
  const width = 300;
  const gap = 52;
  const start = 800 - ((width * items.length + gap * (items.length - 1)) / 2);
  return items.map((item, index) => {
    const x = start + index * (width + gap);
    const arrow = index < items.length - 1 ? `<path d="M${x + width} 485H${x + width + gap - 12}" class="arrow"/>` : '';
    return `<g><rect x="${x}" y="405" width="${width}" height="160" rx="22" class="node"/><circle cx="${x + 34}" cy="435" r="6" class="dot"/><text x="${x + width / 2}" y="500" class="nodeText">${escapeXml(item)}</text>${arrow}</g>`;
  }).join('');
}

function compare(items: string[]) {
  return `<g><rect x="120" y="390" width="560" height="190" rx="24" class="node"/><text x="400" y="460" class="meta">BEFORE</text><text x="400" y="525" class="compareText">${escapeXml(items[0] ?? 'Before')}</text><path d="M720 485H870" class="arrow strong"/><rect x="920" y="390" width="560" height="190" rx="24" class="node resultNode"/><text x="1200" y="460" class="meta">AFTER</text><text x="1200" y="525" class="compareText">${escapeXml(items[1] ?? 'After')}</text></g>`;
}

function branch(items: string[]) {
  const positions = [430, 800, 1170];
  return `<g><rect x="625" y="350" width="350" height="130" rx="22" class="node resultNode"/><text x="800" y="430" class="nodeText">${escapeXml(items[0] ?? 'Start')}</text>${items.slice(1, 4).map((item, index) => `<path d="M800 480V535H${positions[index]}V590" class="branch"/><rect x="${positions[index] - 145}" y="590" width="290" height="125" rx="20" class="node"/><text x="${positions[index]}" y="665" class="nodeText">${escapeXml(item)}</text>`).join('')}</g>`;
}

export function renderArticleBannerSvg(title: string, label: string, visual: ArticleVisual) {
  const diagram = visual.mode === 'sequence' ? sequence(visual.items)
    : visual.mode === 'compare' ? compare(visual.items)
    : visual.mode === 'branch' ? branch(visual.items)
    : flow(visual.items);
  const headingSize = Math.max(38, Math.min(56, Math.floor(1420 / (visual.title.length * 0.56))));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-labelledby="title description">
  <title id="title">${escapeXml(title)}</title><desc id="description">${escapeXml(visual.title)}. ${escapeXml(visual.result)}</desc>
  <defs><pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse"><path d="M42 0H0V42" fill="none" stroke="${colors.grid}" stroke-width="1" opacity=".42"/></pattern><marker id="arrowhead" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0L8 3L0 6Z" fill="${colors.warm}"/></marker></defs>
  <rect width="1600" height="900" fill="${colors.background}"/><rect width="1600" height="900" fill="url(#grid)"/><circle cx="1450" cy="80" r="250" fill="none" stroke="${colors.grid}" stroke-width="2" opacity=".55"/><circle cx="1450" cy="80" r="160" fill="none" stroke="${colors.grid}" stroke-width="2" opacity=".45"/>
  <text x="92" y="88" class="eyebrow">ARTICLE VISUAL  /  ${escapeXml(label.toUpperCase())}</text><text x="92" y="178" class="heading" style="font-size:${headingSize}px">${escapeXml(visual.title)}</text><path d="M92 224H410" stroke="${colors.accent}" stroke-width="5"/>
  ${diagram}
  <rect x="92" y="790" width="1416" height="2" fill="${colors.grid}"/><text x="92" y="842" class="result">${escapeXml(visual.result)}</text><text x="1508" y="842" class="brand" text-anchor="end">THE SYSTEM DESIGN ATLAS</text>
  <style>.eyebrow,.meta,.brand{font:600 20px ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:3px;fill:${colors.soft}}.heading{font:600 56px system-ui,sans-serif;letter-spacing:-1.5px;fill:${colors.text}}.node{fill:${colors.panel};stroke:${colors.line};stroke-width:2}.resultNode{stroke:${colors.accent}}.nodeText,.compareText{font:600 30px ui-monospace,SFMono-Regular,Menlo,monospace;fill:${colors.text};text-anchor:middle}.compareText{font-size:27px}.arrow,.branch{fill:none;stroke:${colors.warm};stroke-width:5;marker-end:url(#arrowhead)}.strong{stroke-width:7}.dot{fill:${colors.accent}}.result{font:500 25px system-ui,sans-serif;fill:${colors.accent}}.brand{fill:${colors.line}}</style></svg>`;
}
