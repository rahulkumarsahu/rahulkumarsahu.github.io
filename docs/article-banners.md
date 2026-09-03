# Article banners

Every published article gets a cover automatically. `PostBanner.astro` is shared
by article headers, general article cards and DSA question cards. Most covers are
small educational diagrams built from the article's own example or central idea.

## Choosing artwork

`src/lib/postBanners.ts` contains the article-specific visual data. Sequence,
flow, comparison and branching diagrams are rendered as exact SVG by
`articleBannerSvg.ts`. Values in these diagrams should come from the article.
If a new article has no explicit visual yet, it receives a clearly labelled
four-step field-note diagram instead of borrowing an unrelated illustration.

The recursion introduction, Java OOP guide and LLD roadmap use educational images
already present in their articles. To reuse another article image, import it in
`postBanners.ts` and add it to `customCovers` with accurate alt text.

## Presentation

Images retain their complete proportions at every screen size. No cropping or
portrait is applied. Card artwork is decorative because each card has its own
accessible article link; header artwork has descriptive alt text.

Article diagrams are resolution-independent SVG. Reused raster illustrations
receive responsive WebP variants. Article sharing metadata uses the same cover,
except the recursion article's existing explicit image URL remains unchanged.

## Verification

After building the site, run `node scripts/check-article-banners.mjs` to check
coverage, generated image files, intrinsic image dimensions, responsive sizes,
sharing metadata and the preserved interactive components in the static output.
