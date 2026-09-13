# The System Design Atlas: complete website audit

Audit date: 2026-09-09  
Audit type: Impeccable technical quality audit  
Scope: the complete Astro website, including 172 generated HTML pages, 30 published articles, 25 page modules, 44 reusable Astro components, the homepage, topic and subsection pages, DSA tools, simulators, project pages, article layouts, light and dark themes.

No website code was changed during this audit.

## Audit Health Score

| # | Dimension | Score | Key finding |
|---|---|---:|---|
| 1 | Accessibility | 2/4 | Strong semantic structure, but very small rendered text and two light-theme colour tokens reduce readability. |
| 2 | Performance | 2/4 | The static build is lean overall, but the DSA Master Sheet creates a 1.5 MB document with almost 16,000 elements. |
| 3 | Responsive Design | 3/4 | No page-level horizontal overflow was found, but small clipping and undersized controls remain. |
| 4 | Theming | 2/4 | Dark mode contrast is strong; light mode has contrast failures and the old blue token system still ships underneath the Field Manual theme. |
| 5 | Implementation Integrity | 2/4 | The product-specific system is clear, but typography, radius and colour values have drifted across components. |
| **Total** |  | **11/20** | **Acceptable: significant accessibility and consolidation work is needed.** |

## Implementation Integrity Verdict

**Pass, with material drift.** The site expresses a coherent, product-specific learning system. The Field Manual visual language, subject banners, Java-first practice, local learning progress, simulations and connected URL-shortener project clearly belong to The System Design Atlas.

The implementation is no longer interchangeable with a generic blog, but it is carrying two visual systems at once. `src/styles/global.css` still begins with the previous navy, indigo, Space Grotesk and Inter tokens, while `src/styles/field-manual.css` replaces them with the current warm paper and charcoal system. The Impeccable detector also found widespread advisory-level typography and radius drift. A source scan found 453 sub-14-pixel font declarations or shorthand values across 39 files, plus 217 hard-coded colour literals and 285 border-radius declarations. These counts include media-query variants and legitimate diagrams, so they are evidence of systemic inconsistency rather than 955 separate user-facing defects.

## Executive Summary

- Audit Health Score: **11/20 (Acceptable)**
- Verified issues: **0 P0, 3 P1, 5 P2, 2 P3**
- The production build and every existing repository validation pass.
- All 172 HTML pages have one main landmark, one H1, a skip link, document language, labelled form fields, alternative image text and unique IDs.
- No browser console errors or warnings were observed while visiting the representative page types.
- No page-level horizontal overflow was found at 390, 768 or 1440 pixels.
- The most important work is typography, light-theme contrast and DSA Master Sheet rendering.

### Highest-priority findings

1. Raise the minimum readable text size in navigation, metadata, cards, simulators and learning tools.
2. Correct the light-theme faint and orange text contrast.
3. Render the DSA Master Sheet progressively rather than placing all 954 problems in the initial document.
4. Standardize control heights and touch targets.
5. Consolidate the old and new CSS systems before additional visual features are added.

## Audit Method

The audit used four complementary checks so findings were not based on screenshots alone.

1. Ran the Impeccable detector once across `src/`.
2. Ran the complete production validation pipeline, including content, Java solution, SEO, banner, internal-link and accessibility checks.
3. Inspected computed browser styles and layout at 1440 × 900, 768 × 1024 and 390 × 844.
4. Reviewed representative routes for every major template and interaction type.

Runtime coverage included 22 representative routes on desktop, 12 on mobile and 7 on tablet. These covered the homepage, About, topic directory, topic landing pages, a subsection with a simulator, DSA Master Sheet, company practice, pattern pages, DSA and universal revision, dashboard, study planner, content freshness, decision library, connected project, system-design lab and three article types.

The static checks covered every generated route, not only the runtime sample.

## Detailed Findings by Severity

### [P1] Light-theme supporting text does not consistently meet WCAG AA contrast

**Location:** `src/styles/field-manual.css:40-59`, reused throughout the header, breadcrumbs, cards, article metadata, learning tools and footer.  
**Category:** Accessibility / Theming  
**Impact:** Readers using light mode may struggle to distinguish breadcrumbs, secondary links, metadata and orange section labels, especially when text is already small.  
**WCAG/Standard:** WCAG 2.2, 1.4.3 Contrast (Minimum).  
**Evidence:**

- `--text-faint: #81796b` on `--bg: #f3efe4` is approximately **3.74:1**.
- `--indigo` and `--orange: #c8542f` on `--bg: #f3efe4` are approximately **3.84:1**.
- Both are below 4.5:1 for normal text.
- Browser verification found these colours on breadcrumbs, footer navigation, section labels and metadata on the About page.
- The equivalent dark-theme pairs range from 6.24:1 to 15.08:1 and are not the problem.

**Recommendation:** Create separate light-theme tokens for normal-size action text and faint text. Keep the current colours for large display accents only if their size and weight qualify for the large-text threshold. Verify foreground against every paper and raised-paper surface.  
**Suggested command:** `$impeccable colorize the complete light theme`

### [P1] The rendered type scale is too small across learning and navigation surfaces

**Location:** Systemic. Representative examples include:

- `src/styles/field-manual.css:163-212`, homepage technical labels at 8 to 10.9 px.
- `src/styles/field-manual.css:329`, breadcrumbs at 11.52 px.
- `src/styles/topic-banners.css:44-121`, banner descriptions at 13 px and metadata at 8 to 9 px.
- `src/components/ArticleLearningControls.astro:124-170`, article facts at 8.48 to 11.52 px.
- `src/components/SimulatorShell.astro:53-73`, labels and state descriptions at 8.96 to 13.12 px.
- `src/components/RecursionCallStack.astro:302-324` and `:454-472`, call-stack state labels as small as 8.32 px.
- `src/components/SubsetBacktracking.astro:396-459` and `:580-703`, code and stack text as small as 7.68 px.
- `src/components/UrlShortenerDesignLab.astro:424-524`, decision and architecture text as small as 6.88 px.

**Category:** Accessibility / Responsive Design / Implementation Integrity  
**Impact:** Essential learning state, code traces, architecture choices and navigation metadata require zooming even on desktop. On mobile, the smallest text becomes impractical to read. The problem is most serious where tiny text carries algorithm state rather than decorative information.  
**WCAG/Standard:** Risks WCAG 2.2, 1.4.4 Resize Text and 1.4.12 Text Spacing; also conflicts with the site's stated beginner-friendly learning goal. WCAG does not prescribe a universal minimum pixel size, so this finding is based on actual readability and product requirements rather than a fabricated size rule.  
**Evidence:**

- Source extraction found 453 font declarations below 14 px across 39 files.
- On the desktop homepage, 71 visible text fragments render below 12 px and another 88 between 12 and 13.99 px.
- The DSA landing page contains 202 visible fragments below 12 px.
- The URL-shortener lab contains 121 visible fragments below 12 px.
- The recursion article contains 107 below 12 px and 432 between 12 and 13.99 px.
- The issue remains at the 390 px mobile viewport rather than being corrected by responsive rules.

**Recommendation:** Define a documented semantic type ramp with a practical 12 px floor for truly secondary technical notation and a 14 to 16 px floor for readable metadata, controls and explanations. Algorithm state, instructions and decision text should generally be 14 px or larger. Replace scattered literal sizes with semantic tokens, then verify at 200% zoom.  
**Suggested command:** `$impeccable typeset the complete website`

### [P1] The DSA Master Sheet eagerly renders all 954 questions

**Location:** `src/components/DsaMasterSheet.astro`, especially the complete problem-list rendering and per-row controls; compact styles at `:300-424`.  
**Category:** Performance / Accessibility / Implementation Integrity  
**Impact:** The browser, accessibility tree and screen reader must process every problem and nearly two controls per row before the reader chooses a topic. This increases parse time, memory use, search/filter work and navigation noise. It will worsen as the sheet grows.  
**WCAG/Standard:** Supports WCAG 2.2 operability and understandable navigation; primarily a performance and assistive-technology scalability issue.  
**Evidence:**

- Generated HTML: **1,501,012 bytes**.
- Runtime document: **15,892 elements**, **1,920 buttons**, **997 links** and about **1.74 million serialized characters** in development.
- The page contributes 7,884 visible fragments below 12 px and 1,960 controls below the site's 44 px target at desktop size.
- The rest of the largest non-master pages are approximately 85 to 241 KB, making this page a clear outlier.

**Recommendation:** Keep topic and difficulty counts in the initial HTML, but mount or reveal problem rows only when a section is opened. Consider paginated or windowed rendering for large expanded groups. Preserve server-rendered links for the currently opened group and provide an accessible result count after filtering.  
**Suggested command:** `$impeccable optimize the DSA Master Sheet`

### [P2] Many controls do not meet the site's 44 × 44 px interaction target

**Location:**

- `src/styles/field-manual.css:78`, header search is 38 px high.
- `src/styles/global.css:2386-2397`, Copy link is 34 px high.
- `src/styles/global.css:2567-2578`, Copy code is 27 px high.
- `src/components/DsaMasterSheet.astro:325-338`, solved controls are 29 × 29 px and revision/open controls are 32 px high.
- `src/components/UrlShortenerDesignLab.astro:477-524`, stage, scenario and reset controls are about 38 px high.
- Project progress selects render at approximately 35 px high.
- Learning estimate disclosure renders at approximately 27 px high.

**Category:** Accessibility / Responsive Design  
**Impact:** Small targets are harder to operate for touch users and people with limited dexterity. Dense tools such as the Master Sheet make accidental activation more likely.  
**WCAG/Standard:** WCAG 2.2 2.5.8 requires at least 24 × 24 CSS pixels or sufficient spacing. The site's own requirement is the stronger 44 × 44 target. Most measured controls pass 24 × 24 but fail the product standard; exceptions such as native range thumbs require direct device verification.  
**Recommendation:** Give every standalone button, select, summary and icon action a 44 px hit area. Visual glyphs may remain compact inside that area. Preserve density by reducing gaps rather than reducing the target itself.  
**Suggested command:** `$impeccable adapt controls for touch and keyboard input`

### [P2] A few layouts clip content instead of exposing overflow

**Location:** `src/styles/field-manual.css:63-64`, the body and site shell use `overflow-x: clip`; homepage title uses `white-space: nowrap` at `:168-169`; recursion layout at `src/components/RecursionCallStack.astro:325-335` and mobile container rules.  
**Category:** Responsive Design / Accessibility  
**Impact:** The page avoids a visible horizontal scrollbar, but small amounts of text or component content can be cut off. Hidden overflow is not equivalent to a responsive fit.  
**Evidence:**

- At 390 px, `#workshop-title` measured 350 px available and 359 px scroll width.
- At 390 px, the recursion article shell and content measured 358 px available and 364 px scroll width.
- At 768 px, a homepage heading region measured 130 px available and 143 px scroll width.
- No page-level horizontal scrollbar appeared because the shell clips overflow.

**Recommendation:** Allow the homepage title to scale or wrap at the smallest breakpoint. Identify the 6 px recursion overflow source and make local code/diagram regions scroll inside their own containers. Use clipping only for intentional artwork, not the entire page shell.  
**Suggested command:** `$impeccable adapt the homepage and article tools for narrow screens`

### [P2] Reduced-motion support removes all transitions rather than preserving useful state feedback

**Location:** `src/styles/global.css:3816-3824`, `src/styles/field-manual.css:441-443`, `src/components/SimulatorShell.astro:78`, `src/components/UrlShortenerDesignLab.astro:529`.  
**Category:** Accessibility / Implementation Integrity  
**Impact:** Motion-sensitive readers avoid animation, but instantaneous global cancellation also removes meaningful feedback such as progress changes and state transitions. It can make simulators harder to follow instead of providing a calmer equivalent.  
**WCAG/Standard:** WCAG 2.2, 2.3.3 Animation from Interactions, and the Impeccable reduced-motion quality rule.  
**Recommendation:** Disable decorative movement completely, replace autoplay with manual stepping and keep short non-spatial state changes where they help comprehension. Use component-level alternatives instead of a global `0.01ms !important` rule.  
**Suggested command:** `$impeccable animate reduced-motion alternatives`

### [P2] The old theme and the Field Manual theme both ship on every page

**Location:** `src/styles/global.css:1-48` and the later legacy homepage/theme rules; current replacements in `src/styles/field-manual.css:1-93`.  
**Category:** Theming / Performance / Implementation Integrity  
**Impact:** Future changes are difficult to reason about because the final result depends on override order. Old navy/indigo values, large rounded panels and animation rules can reappear when a selector is missed. Users download CSS for visual systems that are no longer active.  
**Evidence:**

- `global.css` is 101,133 bytes and 5,298 lines before bundling.
- The shared production CSS bundle is approximately 109 KB, and article CSS adds approximately 81 KB.
- The source contains 217 hard-coded colour literals and 285 radius declarations across styles and components.
- The Impeccable detector repeatedly identified font-size, colour and radius values outside `DESIGN.md`.

**Recommendation:** Extract the accepted Field Manual tokens into one source of truth. Delete superseded navy-era rules only after verifying component coverage. Move exceptional article visuals into explicit component scopes and document the small set of intentional exceptions.  
**Suggested command:** `$impeccable extract the Field Manual design system`

### [P2] Homepage plate assets bypass Astro image optimization

**Location:** `public/assets/plates/`, referenced as public URLs from `src/styles/field-manual.css` and the homepage artwork.  
**Category:** Performance  
**Impact:** Large PNGs increase the first visit cost, especially on mobile networks. CSS background images do not receive Astro's responsive image generation automatically.  
**Evidence:**

- `paper-grain.png`: approximately 2.1 MB.
- `rahul-system-portrait.png`: approximately 3.1 MB.
- `recent-feature-image.png`: approximately 2.2 MB.
- Imported article and topic images are correctly converted to multiple WebP sizes during the build, demonstrating that the optimization path already works elsewhere.

**Recommendation:** Convert the plates to appropriately sized WebP or AVIF assets, keep the transparent format only where required and use responsive image markup for meaningful imagery. Generate the paper texture at a much smaller tile size. Preserve the artwork and crop.  
**Suggested command:** `$impeccable optimize the homepage artwork payload`

### [P3] Technical labels overuse uppercase, wide tracking and monospace

**Location:** Homepage annotations, topic cards, article facts, simulators, breadcrumbs and project labels. Representative declarations appear in `src/styles/field-manual.css:163-212`, `src/components/ArticleLearningControls.astro:124-164` and `src/components/UrlShortenerDesignLab.astro:424-524`.  
**Category:** Accessibility / Implementation Integrity  
**Impact:** The Field Manual character is distinctive, but dense uppercase labels at very small sizes slow scanning and make every piece of metadata compete for attention.  
**Recommendation:** Keep uppercase monospace for a small number of true instrument labels and folio marks. Use sentence case sans-serif text for instructions, state explanations and navigation metadata.  
**Suggested command:** `$impeccable clarify technical labels across the site`

### [P3] Radius and component-shape values are inconsistent with the documented system

**Location:** Throughout component-scoped CSS. Examples include rounded simulator panels, article learning cards and legacy topic banner rules. `src/styles/topic-banners.css:7-23` still declares 17 px cards, while the accepted Field Manual system specifies 2 px panels.  
**Category:** Theming / Implementation Integrity  
**Impact:** This does not block use, but it makes old dashboard styling reappear beside the new editorial style and complicates maintenance.  
**Recommendation:** Define named shape tokens for editorial panels, instrument panels, pills and circles. Replace accidental values while preserving genuinely functional circles and status pills.  
**Suggested command:** `$impeccable polish component shapes`

## Patterns and Systemic Issues

### 1. Micro-typography is doing too much work

Small monospace labels are used for navigation, metadata, explanation, code state and decoration. They need to be separated into semantic roles. Raising only the homepage labels would leave the same problem in articles, simulators and the design lab.

### 2. Dense components reduce size instead of changing layout

The Master Sheet and system-design lab fit more content by shrinking text and controls. On narrow screens, the better response is progressive disclosure, stacked detail, local scrolling and fewer simultaneous columns.

### 3. The visual migration relies on overrides

The new Field Manual style is applied after the old system rather than replacing it at the token and component level. This creates recurring detector advisories and a larger CSS payload.

### 4. Accessibility checks are strong structurally but not visually

The current automated script catches landmarks, names, labels, alternative text and duplicate IDs across all pages. It does not calculate colour contrast, computed font size, target size, zoom behavior or real browser clipping. Those checks should be added to the quality pipeline.

### 5. The densest tools need scale-specific acceptance criteria

Articles, topic pages and learning paths can share a general readability baseline. The Master Sheet, simulators and system-design lab need an additional tool-specific standard covering maximum initial DOM size, minimum state-text size, minimum target size and keyboard traversal length.

## Positive Findings

- All 172 generated pages passed the existing semantic accessibility validation.
- All 10,522 internal links and resources resolved successfully.
- SEO validation passed for all 172 pages; 170 canonical routes are indexable.
- All 30 article covers, 140 article cards and 39 responsive banner assets passed validation.
- The Java regression suite verified 35 solution cases across 10 DSA problems.
- There is exactly one H1 and one main landmark on every generated HTML page.
- Images have alternative text and iframes have titles.
- Form controls have programmatic labels.
- The site has a working skip link and visible focus outlines.
- Light and dark themes both render, and dark-theme contrast tokens are strong.
- The browser showed no page-level horizontal overflow at the three audited widths.
- The browser console contained no warnings or errors during representative navigation.
- Horizontal rails expose accessible names and explicit previous/next controls.
- Simulators use text labels alongside colour and expose human-readable state.
- Existing public routes, banners and article bodies remained intact during the audit.
- The Astro build is fast and uses very few dependencies.

## Detector False Positives and Qualified Findings

- Hidden 1 × 1 radio inputs in the URL-shortener lab are intentionally paired with full clickable labels and visible focus treatment. Their raw dimensions should not be reported as missing touch targets.
- The 1 px live announcement in the lab is intentionally visually hidden for assistive technology.
- Horizontal overflow inside the Recently Published and Engineering Topics rails is intentional and has named scroll controls. It is not page-level overflow.
- Native range inputs have a visually short track, so their effective thumb target should be verified on real touch devices before treating every 16 px measurement as a WCAG failure.
- Some very small text inside decorative diagrams is secondary. The same size is not acceptable when it carries instructions, algorithm state or architecture decisions.
- Impeccable's off-ramp font and radius findings are advisory until verified. This report escalates only the values confirmed in visible, meaningful UI.

## Recommended Actions

1. **[P1] `$impeccable typeset the complete website`**: establish and apply a readable semantic type scale, prioritizing simulators, learning controls, topic pages and breadcrumbs.
2. **[P1] `$impeccable colorize the complete light theme`**: replace the failing faint and action-text values and verify every paper surface.
3. **[P1] `$impeccable optimize the DSA Master Sheet`**: progressively render expanded problem groups and reduce the initial DOM and control count.
4. **[P2] `$impeccable adapt controls for touch and keyboard input`**: bring standalone controls to the 44 px product target.
5. **[P2] `$impeccable adapt the homepage and article tools for narrow screens`**: remove the verified clipping at 390 and 768 px.
6. **[P2] `$impeccable animate reduced-motion alternatives`**: replace global transition cancellation with intentional component behavior.
7. **[P2] `$impeccable extract the Field Manual design system`**: consolidate tokens and remove superseded navy-era rules.
8. **[P2] `$impeccable optimize the homepage artwork payload`**: preserve the current artwork while serving smaller responsive assets.
9. **[P3] `$impeccable clarify technical labels across the site`**: reduce unnecessary uppercase monospace text.
10. **[P3] `$impeccable polish component shapes`**: align panels and controls with the documented shape system.
11. **[Final] `$impeccable polish the complete website`**: run one bounded desktop, tablet and mobile verification pass after the prioritized fixes.

You can ask me to run these one at a time, all at once, or in any order you prefer.

Re-run `$impeccable audit` after fixes to see your score improve.

## Validation Record

| Check | Result |
|---|---|
| Astro production build | Passed, 172 pages |
| Content metadata and unique slugs | Passed, 30 files |
| Practice packs and active-learning wiring | Passed, 10 packs |
| DSA Master Sheet data | Passed, 954 unique problems, 0 unrated |
| Java solution regression | Passed, 35 cases |
| SEO | Passed, 172 pages |
| Article banners | Passed |
| Internal links and resources | Passed, 10,522 checked |
| Structural accessibility | Passed, 172 pages |
| Browser console | No warnings or errors in sampled routes |
| 390 px page overflow | None found; two local clipping defects documented |
| 768 px page overflow | None found; one local clipping defect documented |
| 1440 px page overflow | None found |
| Dark-theme token contrast | Passed for primary, soft, faint and action pairs |
| Light-theme token contrast | Failed for faint and normal-size orange action text |

## Next Audit Gate

After the P1 and P2 work, the next audit should add automated computed-style checks to the repository for:

1. Colour contrast in both themes.
2. Minimum readable size for essential text.
3. Standalone control target size.
4. Page-level and component-level overflow at 390, 768 and 1440 px.
5. Maximum initial DOM size for the DSA Master Sheet.
6. Reduced-motion behavior that preserves simulator state feedback.
7. A 200% browser zoom pass for the homepage, topic page, article, Master Sheet and system-design lab.
