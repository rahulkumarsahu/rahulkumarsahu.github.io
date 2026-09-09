# The System Design Atlas Redesign Plan

Status: planning only  
Scope: complete visual and interaction redesign of the existing Astro website  
Code changes in this phase: none  
Approval required before implementation: yes

## 1. Redesign objective

The redesign will make The System Design Atlas feel like a learning product authored by an experienced backend engineer, not a generic AI or SaaS website.

The current website already has valuable content, routes, learning tools, simulators, progress tracking and custom artwork. The redesign will preserve those strengths while replacing the visual language built around them.

The central product idea is:

> Follow an engineering idea from intuition, to code, to the tradeoffs it creates in a real system.

A first-time visitor should understand the site within five seconds. A returning learner should be able to continue immediately. An article reader should be able to focus. A learner using the master sheet or a simulator should feel that they are operating a serious tool.

## 2. What is protected

The following are protected and will not be removed, renamed or casually replaced:

1. The System Design Atlas name.
2. Rahul Kumar's identity, approved portraits and author information.
3. The homepage hero illustration.
4. Topic, subtopic and article-specific banners.
5. Images and diagrams already used inside articles.
6. Existing article bodies and published URLs.
7. DSA practice workspaces, hidden solutions, hints and JDoodle integration.
8. Learning progress, bookmarks, saved code and study-plan data stored in the browser.
9. The DSA master sheet, revision centre, company practice page, pattern library and simulators.
10. The connected URL shortener project and system design lab.
11. Existing SEO metadata, feeds, sitemap and content validation.
12. Light and dark theme support.

Artwork may be given a better crop, frame, caption or surrounding composition. The source artwork itself will remain intact unless Rahul later approves a replacement.

## 3. Evidence from the current website

The repository currently contains 30 Markdown articles, 23 page routes, more than 40 reusable interface components, a large learning data layer and 954 DSA practice problems.

The current implementation has several strengths:

1. The topic and article artwork gives the site recognizable subject matter.
2. The homepage explains Rahul's role and provides a primary path-selection action.
3. Learning state and practice tools make the product more useful than a normal blog.
4. Article routes already contain breadcrumbs, trust information, reading progress and contextual navigation.
5. Accessibility support is present through semantic landmarks, focus styles, labels and reduced-motion behavior.

The main design problems to solve are:

1. The dark navy background, indigo accent, glow, glass surfaces and grid field resemble many AI-generated product sites.
2. Persuasive pages, reading pages and interactive tools share almost the same visual density.
3. Cards, pills, uppercase metadata and bordered containers are repeated too often.
4. The global stylesheet has grown to more than 5,000 lines, making visual consistency harder to maintain.
5. Inter and Space Grotesk are familiar AI-era defaults and do not give the Atlas a distinctive editorial voice.
6. The full-page decorative grid is applied outside places where a grid has real meaning.
7. Several accent-border callouts and rounded cards match common generated-interface patterns.
8. A few width, padding and maximum-height transitions can create unnecessary layout work.
9. Long pages need stronger pacing between dense learning sections and quiet reading sections.
10. On mobile, the hierarchy is usable but the first screen is visually heavy and many secondary controls compete for attention.

## 4. Recommended visual direction

### Working title: The Engineering Field Manual

The new visual world will take inspiration from well-used engineering manuals, annotated technical journals, lab notebooks, printed reference books and operations runbooks.

This is not a notebook imitation with fake handwriting. It is a precise editorial system with human warmth.

The interface should feel:

1. Authored, practical and trustworthy.
2. Calm enough for long reading.
3. Structured enough for technical work.
4. Warm rather than futuristic.
5. Distinct without becoming decorative.

### Visual language

1. Warm paper backgrounds in light mode instead of cool gray or blue.
2. Warm charcoal backgrounds in dark mode instead of navy.
3. Graphite rules and editorial spacing instead of glass cards.
4. Burnt orange for the primary action and active learning state.
5. Oxidized green for progress, verified material and successful states.
6. Ochre for attention, revision and important notes.
7. Blue retained only where it already exists inside protected artwork or has a clear semantic purpose.
8. Mostly square or gently softened corners rather than large rounded containers everywhere.
9. Fine rules, section indexes, marginal notes and captions used as information, not decoration.
10. A subtle paper texture or registration-mark asset may appear in selected large surfaces. Repeating CSS grid backgrounds will be removed from general page chrome.

### Proposed palette

These values are a starting system and will be validated for contrast before implementation.

#### Light theme

| Role | Proposed value | Purpose |
|---|---|---|
| Page paper | `#F3EFE4` | Warm primary background |
| Raised paper | `#FFFDF7` | Reading and tool surfaces |
| Soft paper | `#E8E1D2` | Secondary sections |
| Primary ink | `#211F1A` | Headings and body text |
| Secondary ink | `#625D52` | Supporting text |
| Rule | `#C9C0AE` | Borders and separators |
| Burnt orange | `#C8542F` | Primary actions and current state |
| Oxidized green | `#416C5A` | Progress and verified state |
| Ochre | `#B8872C` | Notes and attention |
| Link ink | `#345A70` | Accessible contextual links |

#### Dark theme

| Role | Proposed value | Purpose |
|---|---|---|
| Page charcoal | `#191814` | Warm dark background |
| Raised charcoal | `#24211B` | Reading and tool surfaces |
| Soft charcoal | `#2E2A22` | Secondary sections |
| Primary paper | `#F2ECDE` | Main text |
| Secondary paper | `#C8BEAB` | Supporting text |
| Rule | `#474137` | Borders and separators |
| Burnt orange | `#EF7650` | Primary actions and current state |
| Oxidized green | `#79A88E` | Progress and verified state |
| Ochre | `#D5A94D` | Notes and attention |
| Link ink | `#8CB9CC` | Accessible contextual links |

Pure black and pure white will be reserved for high-contrast needs. Text will never be placed over visible texture that reduces readability.

### Typography direction

The current Inter and Space Grotesk pairing will be replaced after real font-loading and readability tests.

Recommended starting family roles:

1. `Newsreader` for selected editorial headlines and article titles.
2. `IBM Plex Sans` for navigation, interface text and supporting copy.
3. `IBM Plex Mono` for code metadata, trace values and compact technical labels.

The final font files should be self-hosted in WOFF2 format when licensing permits. Only the weights used by the interface will be loaded.

Typography rules:

1. Article prose will remain between 45 and 75 characters per line.
2. Main body text will not fall below 16 pixels.
3. Dark-theme prose will receive slightly more line height and weight where needed.
4. Uppercase and wide tracking will be limited to very short technical labels.
5. Sentence case will become the default for navigation, section labels and buttons.
6. Headings will use fewer sizes with a clear role-based scale.
7. Long article titles, browser zoom and text scaling to 200 percent will be tested.

## 5. Surface modes

The same brand will behave differently according to the reader's task.

| Surface | Mode | Primary job | Design behavior |
|---|---|---|---|
| Homepage | Persuade | Help a new visitor choose a learning goal | Strong first viewport, limited choices, authored proof |
| Topic and subsection pages | Read and navigate | Show where to begin and what is available | Editorial index, progressive disclosure, published first |
| Article pages | Read | Help the learner understand and retain a concept | Quiet page, strong measure, clear sequence, useful marginalia |
| Practice articles | Read and operate | Attempt code before revealing the answer | Large editor, explicit state, hidden solution, progressive hints |
| DSA master sheet | Operate | Find, filter and track questions | Compact tool layout, sticky controls, efficient scanning |
| Simulators and labs | Operate | Predict and inspect state changes | Instrument-like controls, state clarity, restrained motion |
| About page | Experience and trust | Understand who Rahul is and why he writes | Portrait-led editorial page, personal voice, fewer panels |

## 6. Information architecture

The route structure will remain stable. The redesign will clarify hierarchy instead of adding more top-level destinations.

### Global header

1. Keep the brand, global search, theme switch and responsive navigation.
2. Reduce the header's visual weight and height.
3. Replace ambiguous icon-first presentation with clear text or persistent accessible labels where space allows.
4. Keep no more than four primary navigation choices visible at once.
5. Group secondary destinations under one Learn or Explore control.
6. Show the current section clearly without turning every item into a pill.
7. Keep keyboard search and menu behavior.

### Global search

1. Keep the command-style search overlay and keyboard shortcut.
2. Reframe it as a reference index, not a futuristic command palette.
3. Separate results into Articles, Topics, DSA Problems, Projects and Tools.
4. Improve zero-result, keyboard, loading and storage-unavailable states.
5. Make result count and selected result clear to screen readers.

### Footer

1. Reduce the current link wall.
2. Keep one compact Atlas navigation group, one Rahul group and contact links.
3. Preserve the Scalable Stack, Medium, portfolio, GitHub, LinkedIn, email and Topmate destinations.
4. Use normal sentence case and clearer spacing.
5. Keep RSS and content freshness discoverable without making them primary.

## 7. Homepage plan

The homepage will become shorter and more editorial while retaining the hero illustration and topic banners.

### First viewport

1. Keep one headline, one concise introduction and one primary action: `Choose your path`.
2. Place Rahul's existing system-cartographer illustration as a decisive visual plate, not inside a generic dashboard card.
3. Use a small authored caption explaining Rahul's role and the Atlas method.
4. Remove the full-page blue grid and indigo glow.
5. Introduce one recognizable Field Manual detail, such as a route annotation that connects `idea`, `code` and `tradeoffs`.
6. Keep the entire primary action visible on a 390-pixel screen.

### Learning goals

1. Keep the four existing goals.
2. Replace four equally heavy cards with a compact editorial path index.
3. Show title, who it is for, available lessons and recommended first lesson at a glance.
4. Move duration, prerequisites, planned lessons and full order into one expandable details area per path.
5. Use one visual recommendation, not four competing calls to action.
6. Preserve contextual progress when the learner has started a path.

### Returning learner dashboard

1. Continue to hide it for a visitor with no learning activity.
2. When visible, place `Continue learning` near the top as a compact personal strip.
3. Show only the current path, next lesson and a small progress statement.
4. Move drafts, bookmarks, revision and reset tools to the dedicated learning page.

### Topic gallery

1. Preserve all major topic banners and links.
2. Use one featured topic at larger scale and a simpler editorial list or asymmetric gallery for the remaining topics.
3. Keep article availability and progress, but reduce badge clutter.
4. Let the artwork lead. Text should not repeat information already visible in the banner.
5. Ensure every topic remains easy to reach on mobile.

### Recent writing

1. Show one featured recent article with its banner.
2. Show the next two articles as compact editorial rows.
3. Keep date, reading time and topic without excessive metadata styling.
4. Use Rahul's personal note when one exists as the human reason to open the article.

### Connected project

1. Keep the URL shortener as the homepage's closing feature.
2. Present it as the proof that the Atlas connects concepts across the stack.
3. Show published milestones before planned work.
4. End with one clear action to open the project.

## 8. Topic and subsection page plan

This applies to DSA, Java and Spring Boot, LLD, System Design, Cloud Native, AI Engineering and Engineering Notes.

1. Preserve every topic and subtopic banner.
2. Reduce the empty vertical space above and below banners.
3. Place the topic promise, available count and recommended starting point near the banner.
4. Keep the shared learning structure: Foundations, Core Concepts, Practice, Production and Deep Dives.
5. Show stages as a clean contents index, not a row of nested cards.
6. Keep published content visually dominant.
7. Collapse planned content into a single quiet disclosure per stage.
8. Keep search and reliable metadata filters close to the article list.
9. Show progress as text plus a simple meter, not several small pills.
10. Use topic color as a restrained identifier. Topic color will not repaint the whole page.
11. Preserve breadcrumbs and clarify the current route.
12. Place contextual tools such as DSA Patterns, Revision and Master Sheet after the starting lesson, not before it.

### DSA landing page

1. Keep the Start Here path and published-first ordering.
2. Make `Start with Array Fundamentals` the dominant first action.
3. Present subtopics as a structured syllabus with available lesson and problem counts.
4. Keep Binary Search, Recursion and every existing DSA topic reachable.
5. Separate `Learn concepts`, `Solve problems` and `Review patterns` so beginners understand the difference.
6. Keep the standalone DSA roadmap removed.

## 9. Article page plan

Article pages will become the quietest surface in the product.

### Article opening

1. Preserve the article-specific banner.
2. Keep breadcrumbs, title, description, author, date and reading time.
3. Replace several pill badges with one compact metadata line.
4. Keep difficulty prominent only on DSA problems.
5. Place trust information behind a concise `Reviewed and tested` disclosure.
6. Keep bookmark, progress and report controls discoverable without competing with the title.

### Reading body

1. Use a centered reading column with a 62 to 72 character measure.
2. Increase paragraph and heading rhythm instead of wrapping every section in a panel.
3. Use marginal notes on wide screens for prerequisites, engineering connections and personal notes.
4. Move marginal notes inline at the correct reading point on mobile.
5. Use full-width breakout zones only for code, tables, diagrams and simulators.
6. Keep code blocks high contrast with filenames, copy state and horizontal scrolling inside the block only.
7. Give tables their own scroll container on narrow screens.
8. Keep the table of contents sticky on wide screens and collapsible on small screens.
9. Retain reading progress but make it quieter and accessible to reduced-motion users.
10. Avoid repeating the same `field note` language at the beginning, divider and end of every article.

### Learning controls

1. Keep article progress and bookmark behavior.
2. Combine repeated controls into one compact learning toolbar.
3. Keep prerequisites, previous, next and practice-next navigation.
4. Make the next lesson the visually strongest footer action.
5. Keep feedback and report-a-mistake controls distinct from learning navigation.

### DSA problem articles

1. Preserve the order: problem, examples, build it yourself, editor, run, hints, hidden solution, dry run, complexity and related practice.
2. Keep the complete solution closed on first load.
3. Give the Java editor a larger desktop workspace.
4. Stack instructions, editor, output and hints vertically on mobile without page-level horizontal scroll.
5. Use progressive hints with clear reveal state.
6. Make execution state, error state and saved-code state understandable without color.
7. Present brute force and optimal comparisons as evidence, not decorative cards.

## 10. DSA master sheet plan

The master sheet will use the same brand but a denser tool grammar.

1. Shorten the introductory header so the question list appears sooner.
2. Keep overall progress, total questions and difficulty counts in one compact summary row.
3. Make search the primary control.
4. Group secondary filters into a single responsive filter bar.
5. Keep a visible reset action only when filters are active.
6. Move `Clear progress` into a safe settings menu with confirmation.
7. Keep topic, Easy, Medium and Hard sections independently collapsible.
8. Add sticky section context while scanning long lists.
9. Use table-like editorial rows on desktop instead of nested cards.
10. Use compact problem rows on mobile with difficulty, source and state arranged consistently.
11. Keep Open, Important, Revision, Solved and Notes controls keyboard accessible.
12. Show useful empty states when filters return no questions.
13. Preserve all 954 problem records and existing external links.
14. Maintain local progress without requiring an account.

## 11. Simulator and lab plan

Simulators will resemble clear technical instruments rather than dashboard widgets.

1. Keep Previous, Next, Play, Pause, Reset, speed, scrubber and custom input behavior.
2. Use one shared simulator control pattern across Move Zeroes, LRU, trees, graphs and load balancing.
3. Keep current code and current state side by side on wide screens.
4. Stack code, state and explanation in the correct reading order on mobile.
5. Use text labels, shape and position in addition to color for active, waiting, visited, copied, skipped and failed states.
6. Make the prediction pause the focal learning moment.
7. Use a single restrained motion language based on state transitions, not decorative floating effects.
8. Replace width-based animation with transform-based progress where appropriate.
9. Keep custom input validation next to the field and preserve valid state after errors.
10. Preserve shareable URL input and browser-storage fallbacks.
11. Keep animation useful with reduced motion by updating state immediately and retaining the explanation.

### URL Shortener System Design Lab

1. Keep all 12 design stages and five failure scenarios.
2. Present the stage list as a workshop index with clear completed, current and upcoming states.
3. Show the architecture as the central artifact on desktop.
4. Keep the current decision's benefit, cost and system effect adjacent to the architecture.
5. On mobile, move from architecture to decision to explanation in one vertical flow.
6. Make architecture changes follow actual reader choices rather than stage count alone.
7. Use the Field Manual palette for chrome while diagrams retain semantic system colors.

## 12. About page plan

1. Preserve the current generated Rahul portrait and keep it exclusive to the About page.
2. Lead with the portrait and a concise personal statement.
3. Replace the generic large headline with a more direct statement about Rahul's work and why he writes.
4. Organize experience as a short narrative, not a collection of résumé cards.
5. Keep JPMorgan Chase and Oracle details factual and unchanged unless Rahul edits them.
6. Place GitHub, LinkedIn, portfolio, Medium, The Scalable Stack, Topmate and email in one clear contact section.
7. Add personal article notes only where Rahul has supplied real details.

## 13. Reusable component redesign

The visual system will be implemented through reusable foundations rather than page-specific patches.

### Foundations

1. Semantic color tokens for paper, ink, rule, action, progress, warning, error, code and diagrams.
2. Role-based typography tokens for display, heading, body, UI, metadata, code and numeric data.
3. A compact spacing scale with page, section, component and inline rhythm.
4. Corner tokens limited to three roles: control, panel and artwork.
5. Border and rule tokens with no decorative side stripes.
6. Motion tokens for duration, easing and reduced-motion alternatives.
7. Content-width tokens for reading, tool and gallery surfaces.

### Shared patterns

1. `EditorialSection` for headings, supporting copy and optional action.
2. `IndexRow` for topics, paths, lessons and recent writing.
3. `MetadataLine` for date, time, difficulty, version and review status.
4. `ActionLink` and `PrimaryAction` with consistent states.
5. `TechnicalNote` with variants for intuition, warning, engineering connection and personal note.
6. `ProgressMeter` with text, accessible value and reduced-motion behavior.
7. `FilterBar` shared by topic indexes, revision and the master sheet.
8. `ToolPanel` for simulators, editors and system design decisions.
9. `ArtworkPlate` for protected hero, topic and article banners.
10. `EmptyState`, `ErrorState` and `UnavailableState` with actionable recovery copy.

### CSS architecture

The 5,300-line global stylesheet will be split without changing behavior all at once.

Proposed layers:

1. `tokens.css`
2. `reset.css`
3. `typography.css`
4. `layout.css`
5. `components.css`
6. `articles.css`
7. `tools.css`
8. `utilities.css`
9. route-local component styles where a pattern is genuinely unique

Existing classes will be migrated in controlled groups. Dead styles will be removed only after route and component usage checks.

## 14. Copy and tone plan

1. Keep Rahul's first-person voice on the homepage and About page.
2. Replace generic marketing claims with specific descriptions of what the learner can do.
3. Use `I` only for verified personal statements.
4. Use `you` when guiding the learner through a task.
5. Avoid em dashes, generic AI phrases and decorative technical jargon.
6. Reduce uppercase labels and numbered headings.
7. Use the same term for the same object across the site.
8. Prefer actions such as `Start Array Fundamentals`, `Continue Move Zeroes` and `Open the simulator` over vague labels such as `Explore`.
9. Keep error messages friendly, specific and recoverable.
10. Write meaningful image alt text and empty alt text for purely decorative material.

## 15. Background and image treatment

1. Remove the universal two-axis grid background.
2. Use a calm paper or charcoal field as the default page background.
3. Introduce a subtle authored paper grain asset only if it remains invisible behind normal reading text.
4. Use registration marks, route lines or contour notation only in the homepage hero, project architecture and other places where they explain structure.
5. Preserve every current banner as an image plate with a stable aspect ratio.
6. Add captions or topic identifiers outside the image instead of painting more text over the image.
7. Prevent layout shift by reserving image dimensions.
8. Keep responsive image generation, lazy loading and useful alt text.
9. Do not add stock laptop scenes, abstract AI brains, robots, glowing cubes or decorative code screenshots.

## 16. Motion and interaction plan

Motion will explain causality and navigation. It will not exist merely to make the redesign look animated.

1. Use one homepage signature motion: the route from idea to code to tradeoffs draws once as the hero enters.
2. Use short opacity and transform transitions for disclosure and state changes.
3. Keep all core content visible without waiting for JavaScript animation.
4. Remove layout-property animation for width, padding and maximum height when a transform or grid transition is suitable.
5. Do not animate large blurred backgrounds.
6. Avoid parallax, cursor followers, continuous floating objects and staggered card entrances.
7. Pause automated simulator playback when the page is hidden.
8. Respect `prefers-reduced-motion` while preserving state and feedback.

## 17. Responsive plan

The redesign will be designed for each context rather than scaled down from desktop.

### Mobile, 320 to 767 pixels

1. One-column reading and navigation flow.
2. Minimum 44 by 44 pixel touch targets.
3. One primary action per section.
4. Secondary filters and metadata disclosed when needed.
5. Code, tables and diagrams scroll within their own container.
6. No page-level horizontal overflow.
7. Tool controls remain reachable without depending on hover.
8. Safe-area padding for notches and browser controls.

### Tablet, 768 to 1023 pixels

1. Two-column layouts only where both columns remain readable.
2. Touch-sized controls with denser information than mobile.
3. Article navigation and notes may use a narrow secondary column.
4. Simulators adapt by content, not by a generic breakpoint alone.

### Desktop, 1024 pixels and wider

1. Reading width remains constrained.
2. Extra width is used for table of contents, marginal notes, code and diagrams.
3. Tool pages use simultaneous code and state panels.
4. Very wide monitors do not stretch paragraphs or card grids indefinitely.

### Required verification widths

1. 320 pixels
2. 390 pixels
3. 768 pixels
4. 1024 pixels
5. 1440 pixels
6. 200 percent browser zoom

## 18. Accessibility plan

The redesign targets WCAG 2.2 AA and retains the current accessible foundations.

1. Preserve the skip link and semantic landmarks.
2. Keep one clear page heading and logical heading order.
3. Ensure all controls have visible labels or equivalent accessible names.
4. Keep visible focus states in both themes.
5. Maintain a logical keyboard order in menus, search, filters, editors and simulators.
6. Prevent focus traps in overlays and mobile navigation.
7. Ensure text contrast is at least 4.5 to 1 and large text is at least 3 to 1.
8. Ensure focus indicators and meaningful non-text boundaries meet contrast requirements.
9. Never use color as the only signal for difficulty, progress, validation or simulator state.
10. Announce dynamic results, save state, execution state and errors where appropriate.
11. Preserve content and task completion when browser storage is blocked.
12. Respect reduced motion, high contrast, forced colors and text scaling.
13. Test with keyboard-only navigation and at least one screen-reader path.
14. Keep target size at 44 pixels where practical and at least WCAG minimum everywhere.

## 19. Performance plan

1. Remove the Google Fonts stylesheet request and self-host only approved fonts and weights.
2. Preload only the most important font used above the fold.
3. Keep Astro's static-first architecture and avoid unnecessary client JavaScript.
4. Split shared and route-specific CSS so article readers do not pay for every tool style.
5. Audit unused selectors during the global stylesheet migration.
6. Use responsive image formats and dimensions for hero, topic and article artwork.
7. Lazy load below-the-fold images and simulators where appropriate.
8. Avoid large blur filters and costly layout animation.
9. Keep practice code transmission user initiated.
10. Measure Core Web Vitals on the homepage, one topic page, one article and the master sheet.

Performance targets for the production build:

1. No avoidable layout shift from images or fonts.
2. No console errors on representative routes.
3. No page-level horizontal overflow.
4. A responsive first viewport on a typical mobile connection.
5. Interactive tools remain responsive with their largest supported input.

## 20. SEO and trust preservation

1. Preserve canonical URLs, metadata, JSON-LD, sitemap, RSS and social images.
2. Do not hide indexable article text behind client-only rendering.
3. Preserve one descriptive page title and one H1 per route.
4. Keep article banners usable as social previews where configured.
5. Preserve last-reviewed dates, tested versions, official references and correction history.
6. Keep report-a-mistake links and clarity feedback.
7. Keep planned content unlinked so search engines and readers are not sent to empty pages.
8. Validate internal links after every implementation phase.

## 21. Implementation phases

No phase begins until its previous review gate is approved.

### Phase 0. Visual direction and baselines

1. Capture reference screenshots at 390, 768 and 1440 pixels.
2. Record current route, link, content, accessibility and banner validation results.
3. Generate three high-fidelity homepage direction comps based on the Engineering Field Manual world.
4. Include the protected hero illustration and real homepage copy in every comp.
5. Review light and dark direction together.
6. Lock one direction before changing production styles.

Approval gate: visual direction, font character, light palette, dark palette and artwork treatment.

### Phase 1. Design foundations

1. Introduce the new color, typography, spacing, rule, corner and motion tokens.
2. Self-host approved fonts.
3. Build the shared editorial, metadata, action, note, progress and artwork patterns.
4. Replace general blue grid and glow treatments.
5. Establish the new light and dark themes.
6. Begin splitting the global stylesheet into intentional layers.

Approval gate: a small component and typography specimen page in both themes.

### Phase 2. Global shell and homepage

1. Redesign the header, mobile navigation, search overlay and footer.
2. Implement the approved homepage first viewport.
3. Distill learning goals and returning-learner state.
4. Recompose the protected topic banner gallery.
5. Redesign recent writing and connected project sections.
6. Verify mobile, tablet and desktop before continuing.

Approval gate: complete homepage review.

### Phase 3. Topic and subsection system

1. Apply the new banner framing and topic introduction.
2. Build the shared learning-stage index.
3. Redesign article, planned-content, filter and progress presentation.
4. Complete DSA first, then Java, LLD, System Design, Cloud Native, AI and Notes.
5. Preserve all routes and published-first logic.

Approval gate: DSA landing page, Arrays subsection and one non-DSA topic page.

### Phase 4. Article reading system

1. Redesign the article header and metadata.
2. Set the new reading typography and rhythm.
3. Rework the table of contents, marginal notes, trust panel and learning navigation.
4. Standardize code, tables, callouts and image captions.
5. Verify a short article, a long article, a system design case study and the LLD roadmap.

Approval gate: representative article set in both themes and at all required widths.

### Phase 5. Practice and simulator tools

1. Redesign JDoodle practice, hints, hidden solution and knowledge checks.
2. Apply the shared simulator shell to Move Zeroes and LRU first.
3. Review prediction, playback, input, error and reduced-motion states.
4. Roll the approved pattern into tree, graph, recursion, subsets and load balancing.
5. Redesign the URL shortener lab around its architecture and decision flow.

Approval gate: Move Zeroes, LRU and URL shortener lab.

### Phase 6. DSA master sheet and dense utilities

1. Redesign the master sheet as a dedicated operating surface.
2. Adapt filters, question rows, collapsible difficulty groups and progress for mobile.
3. Apply the same dense-tool grammar to company practice, revision, study plan, learning dashboard, decision library and freshness pages.
4. Verify empty, filtered, saved, reset and storage-unavailable states.

Approval gate: master sheet at 390 and 1440 pixels plus one utility page.

### Phase 7. About page and editorial details

1. Redesign the About page around the protected portrait and Rahul's factual story.
2. Refine contact and external publication links.
3. Add consistent captions, personal-note treatment and human authorship details.
4. Remove remaining generic marketing copy and repeated field-note labels.

Approval gate: About page and footer.

### Phase 8. Hardening and release polish

1. Run the complete Astro production build and every repository validation.
2. Audit accessibility, performance, theming, responsive behavior and implementation integrity.
3. Inspect one batched desktop, tablet and mobile screenshot set.
4. Fix material defects in one batch.
5. Run one confirmation round.
6. Run the Impeccable detector on changed interface targets.
7. Document the final visual system in `DESIGN.md` from the implemented result.
8. Present the complete review before any commit or push.

Approval gate: final release preview.

## 22. Impeccable command sequence

The redesign should use the following Impeccable workflow. These are not seven unrelated redesigns. Each command has one responsibility in the same approved visual direction.

1. `$impeccable critique homepage`
   Evaluate specificity, hierarchy, cognitive load, emotional journey and first-time visitor clarity.
2. `$impeccable audit the entire blog`
   Measure accessibility, performance, theming, responsive behavior and implementation integrity.
3. `$impeccable shape the replacement visual world`
   Generate and approve the new visual direction before production changes.
4. `$impeccable distill the learning-path section`
   Reduce repeated copy, actions, metadata and nested containers while keeping all four goals.
5. `$impeccable clarify the homepage copy`
   Keep factual meaning while making Rahul's purpose and the first action unmistakable.
6. `$impeccable typeset article pages`
   Establish the editorial hierarchy, reading measure, code typography and stress behavior.
7. `$impeccable adapt the DSA master sheet for mobile`
   Rethink filtering, scanning, expansion and progress for touch and narrow screens.
8. `$impeccable harden search, progress, practice and simulators`
   Cover errors, blocked storage, empty states, invalid input and recovery paths.
9. `$impeccable optimize the homepage and interactive tools`
   Reduce CSS and font cost, layout work, image weight and avoidable client execution.
10. `$impeccable polish the website before release`
    Run the final system, visual, responsive and interaction pass after all approved work is complete.

## 23. Validation matrix

Representative routes to review after implementation:

1. `/`
2. `/topics/`
3. `/topics/dsa/`
4. `/dsa/arrays/`
5. `/topics/java/`
6. `/topics/lld/`
7. `/topics/system-design/`
8. `/topics/cloud-native/`
9. `/posts/move-zeroes-to-end/`
10. `/posts/recursion-in-java-beginners-guide/`
11. `/posts/java-oop-for-low-level-design/`
12. `/posts/url-shortener-system-design/`
13. `/dsa/master-sheet/`
14. `/dsa/revision/`
15. `/dsa/companies/`
16. `/projects/production-url-shortener/`
17. `/projects/production-url-shortener/system-design-lab/`
18. `/learning/`
19. `/study-plan/`
20. `/about/`
21. `/404/`

For every representative route, verify:

1. Light and dark theme.
2. 390, 768 and 1440 pixel layout.
3. Keyboard navigation and visible focus.
4. Screen-reader labels and landmark structure.
5. 200 percent zoom.
6. Reduced motion.
7. Long content and empty states.
8. No page-level horizontal overflow.
9. Images have dimensions, correct crops and appropriate alt text.
10. Internal links and browser-storage fallbacks still work.

## 24. Success criteria

The redesign is complete only when:

1. The site no longer reads visually as a blue AI or SaaS template.
2. The homepage has one obvious action and communicates the product within five seconds.
3. Protected artwork is preserved and feels intentionally integrated.
4. Articles are calmer and easier to read than tool pages.
5. The DSA master sheet is faster to scan and use on mobile.
6. Simulators clearly show cause, state and result without relying on color.
7. Light and dark themes both feel authored, not like inverted versions of one palette.
8. Repeated cards, pills, uppercase labels and decorative grids have been substantially reduced.
9. The interface remains fully usable with keyboard, zoom, reduced motion and blocked browser storage.
10. Existing routes, articles, learning data, banners and SEO behavior remain intact.
11. Production build, content, Java, link, banner, SEO and accessibility checks pass.
12. Rahul approves the complete preview before any commit or push.

## 25. Non-goals

This redesign will not:

1. Rewrite existing article content as part of the theme migration.
2. Replace protected portraits, banners or article illustrations without approval.
3. Add accounts, authentication, cloud persistence, leaderboards, XP or certificates.
4. Add a custom code-execution backend.
5. Restore a standalone search page or standalone DSA roadmap page.
6. Add decorative animation, generic AI artwork or visual effects that do not teach or orient.
7. Change public URLs for visual convenience.
8. Commit or push work before Rahul reviews it.

## 26. Decisions to approve before implementation

1. Approve the Engineering Field Manual direction as the basis for the visual concept round.
2. Approve light mode as the primary marketing and reading presentation, while keeping a complete dark mode.
3. Approve the warm paper, graphite, burnt orange and oxidized green palette family.
4. Approve an editorial serif for selected headings, paired with a practical sans-serif and monospace family.
5. Confirm that protected artwork may be re-cropped and re-framed but not redrawn.
6. Choose whether the implementation should be comp-first or code-first after the visual direction round. Comp-first is recommended for a full visual replacement.

