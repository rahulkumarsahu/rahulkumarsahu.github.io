# Article banners

Every published article gets a cover automatically. `PostBanner.astro` is shared
by article headers, general article cards and DSA question cards. Titles remain
real text outside the image, so artwork never obscures a title or vice versa.

## Choosing artwork

`src/lib/postBanners.ts` matches an article's `learningSection`, or its `series`
when no section is set, to the approved artwork in `src/data/banners.ts`.
It also looks up the parent learning group, so microservices and operations use
the same visual family as their section pages. If there is no section match,
the article's main topic supplies the fallback. No frontmatter changes are
needed for a new article to receive a banner.

The recursion introduction keeps its existing notebook call stack diagram.
To use another custom cover, import the asset in `postBanners.ts`, add its path
and alt text to `customCovers`, and set that path as the article's `image` value.
This keeps the cover, article cards and social preview consistent. Local assets
are imported as image metadata so their real dimensions are preserved.

## Presentation

Images retain their complete proportions at every screen size. No cropping,
portrait, shading or text overlay is applied. A small caption sits below the
article header image. Card artwork is decorative because each card has its own
accessible article link; header artwork has descriptive alt text.

Astro generates responsive WebP variants. Card images load lazily, while the
article's main cover loads immediately. Article sharing metadata uses the
cover, except an existing explicit `image` URL remains unchanged. Site-wide
social artwork, article content, URLs and interactive playgrounds are untouched.

## Verification

After building the site, run `node scripts/check-article-banners.mjs` to check
coverage, generated image files, intrinsic image dimensions, responsive sizes,
sharing metadata and the preserved interactive components in the static output.
