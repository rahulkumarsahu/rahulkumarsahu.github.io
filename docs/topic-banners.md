# Topic banners

## Design and implementation

The banners follow the supplied workshop-thumbnail reference: ink-blue chalkboard backgrounds, subject-specific diagrams, restrained color accents, and clear white titles. Main-topic covers feature a fresh illustration of Rahul in a teal overshirt with a relaxed, folded-arm pose. Subtopic covers focus on the diagrams and remain unchanged.

All 16 background plates were generated using the built-in image-generation tool, not a CLI. The original PNG outputs are 1672 × 941 pixels. The component generates responsive WebP variants through Astro. Titles and bylines are real HTML, not baked into images.

The illustrations identify topic families; they are decorative cover art, not authoritative algorithm dry runs. Related subsections share a family illustration and have individual titles.

### Workspace assets

The files live under `src/assets/banners/`:

* `dsa.png`
* `java.png`
* `lld.png`
* `linear-structures.png`
* `search.png`
* `system-design.png`
* `cloud-native.png`
* `ai.png`
* `engineering-notes.png`
* `databases.png`
* `caching.png`
* `recursion.png`
* `trees.png`
* `graphs.png`
* `dynamic-programming.png`
* `concurrency.png`

`rahul-educator-v2.png` is the current portrait, generated using Rahul's supplied photograph and illustrated profile as facial references. Its original pixels are preserved. A matching 1122 × 1402 grayscale matte, `rahul-educator-mask.png`, removes the background at display time using CSS luminance masking. See [the portrait generation record](./banner-portrait-v2.md) for the prompts and references.

Main-topic covers reserve the upper-left for uncropped diagrams, the lower-left for the title, and the lower-right for a smaller portrait. Track labels sit above the titles rather than covering diagram nodes. Subtopic covers are unchanged.

`rahul.png` is the previous portrait, an unchanged copy of `public/images/rahul-system-cartographer.png`, retained as a fallback. The homepage's original hero illustration, About photo, and favicon are unchanged.

### Where they appear

* Homepage learning-track cards and the main topics directory.
* Hero banners for all seven major topics.
* DSA topic cards, the DSA directory, and each DSA subsection.
* Cards and hero banners for every other learning subsection.

`src/data/banners.ts` assigns illustrations to topics and subsection families. Add a subsection override to `sectionArt` when a more specific illustration is available. Unlisted subsections inherit their topic illustration.

`TopicBanner.astro` handles art, portrait, title, and responsive sizing. `TopicCard.astro` adds the clickable destination, description, keywords, and article counts. Card search indexes every keyword, including keywords not displayed as chips.

No content, URLs, publishing state, or deployment configuration is changed by these banners.

## Generation prompts

These are the prompt sets used for the saved assets. Shared instructions are separated from per-image subject instructions to avoid repetition.

### Foundation set

For each image, the prompt consists of the common prefix, its subject instructions, and the common constraints, in that order.

#### Common prefix

```text
Use case: stylized-concept
Asset type: blog teaching-workshop topic banner background plate; the website will overlay real text and a separate portrait.
Primary request: A premium hand-drawn technical chalkboard / blueprint cover, detailed purposeful technical illustration rather than a screen mockup.
Scene/backdrop: rich medium-deep ink blue foundation, luminous fine chalk lines, subtle paper grain and restrained colored washes. Composed, polished, not cluttered.
Composition/framing: full-bleed 16:9 landscape, 1536x864. Most semantic diagrams cluster across upper-left and upper-center. Leave the lower-left 60% quieter, with generous low-contrast negative space for a bold white heading; leave the rightmost 30% darker and quieter for a portrait overlay. The negative space should feel integrated into the textured blue chalkboard, not separated by boxes.
```

#### Common constraints

```text
Constraints: NO PEOPLE, NO TEXT, NO LETTERS, NO NUMERALS, NO LOGOS, NO TITLE, NO CODE, NO WATERMARK. No generic space art, no stock coding screens, no pitch-black field, no huge neon blooms. No frames, borders or rounded corners. Keep the diagrams purposeful, readable in silhouette and entirely text-free.
```

#### dsa.png

```text
Subject: Clearly recognizable data structures, with a tidy row of square array cells near upper-left, a branching binary tree across upper-center and a few connected directed-graph nodes. Empty cells and empty circles, no labels. The tree has one root branching into two children and further balanced leaf branches. Subtle directional arrowheads on the graph.
Color palette: cyan and indigo luminous chalk on ink blue, restrained pale lime accents. A few blue and green glowing node diagrams evoke a thoughtful algorithm workshop.
```

#### java.png

```text
Subject: An elegant modular software-architecture composition: class boxes divided into compartments, modular connected service blocks, layered application components and a few schematic gears of application layers. A subtle small hand-drawn coffee cup silhouette near upper-left, not a brand logo. Empty boxes without labels.
Color palette: warm amber and copper chalk highlights with restrained teal washes, over a rich ink-blue foundation.
```

#### lld.png

```text
Subject: Elegant UML-like software design class boxes, each with two or three empty compartments. A carefully composed hierarchy of boxes linked by composition diamonds, hollow inheritance arrowheads, and restrained interface relationship connectors. Clear technical logic, varying box sizes but consistent line weight; no textual labels in any compartment.
Color palette: turquoise and sea green luminous chalk and restrained washes over rich ink blue; a little pale cyan highlighting.
```

#### linear-structures.png

```text
Subject: A clearly recognizable linear-data-structures teaching diagram composition: a neat sequential row of empty square array cells across the upper-left, one vertical call-stack-like stack of empty rectangular cells near upper-center, and a simple linked chain of circular or square nodes joined by clean directional arrows. Small indexing ticks below the array, but absolutely no numerals or labels. Maintain clear spacing and a deliberate diagram hierarchy.
Color palette: cobalt and cyan luminous chalk on rich ink blue with restrained pale lime accents and faint washes.
```

#### search.png

```text
Subject: A purposeful binary-search and structured-lookup illustration: ordered empty array cells running across the upper-left/center with one centered cell highlighted in soft gold. Nested boundary brackets and clean inward-pointing guide arrows indicate the interval narrowing toward that middle cell. A small branching search tree sits nearby in the upper-center, with one thin highlighted path to a leaf. Absolutely no text or numbers in cells or nodes.
Color palette: teal and emerald luminous chalk with restrained soft gold highlights on a rich medium-deep ink-blue foundation, subtle blue-green washes.
```

### Platform set

For each image, append its subject instructions to this shared prefix.

```text
Use case: stylized-concept.
Asset type: full-bleed 16:9 landscape technical blog banner background plate, 1536x864 composition.
Style/medium: premium hand-drawn technical chalkboard and blueprint illustration, a thoughtful teaching-workshop cover with precise yet human-made chalk lines, luminous but restrained blue-green glow, subtle paper grain and softly tinted wash accents on a medium-deep ink-blue foundation.
Composition/framing: meaningful diagrams must occupy only the upper-left and upper-center band, within the left 68% of the canvas and upper 52% of canvas height. Leave the lower-left 60% very quiet and dark for a large white heading to be added later; leave the rightmost 30% dark and almost empty for a cutout portrait to be added later. Background fills every edge, no frame, no rounded corners. Keep the diagrams readable and well-spaced, substantial enough to convey the topic, with modest breathing room.
Text: absolutely no text, letters, numbers, labels, faux handwriting, or code anywhere.
Constraints: no people, no faces, no portraits, no logos, no title, no watermark. Avoid pitch-black, exaggerated neon, generic space art, and decorative clutter. This is only a background plate, not a finished thumbnail.
```

#### system-design.png

```text
Primary request: a hand-drawn distributed architecture network, with a gateway box branching in an orderly way to several server racks, then database cylinders; include clear replication links between databases. Crisp structural nodes and routes rather than random circuitry. Color palette: violet and indigo washes, aqua and pale chalk-blue lines.
```

#### cloud-native.png

```text
Primary request: small shipping-container modules organized into a connected orchestration cluster under a simple cloud outline, with clear deployment paths joining grouped containers. Use physical container-like boxes with subtle ribbed sides, diagrammatic chalk construction, and orderly cluster boundaries. Color palette: jade and teal washes, sky-blue and pale mint chalk lines. No brand logos or symbols.
```

#### ai.png

```text
Primary request: a structured retrieval pipeline, with a few blank document pages connected by arrows to a precise vector lattice, then a small neural node network. Make this a human-made technical workshop sketch with meaningful staged structure, not a sci-fi scene. Documents have no writing, only subtle abstract geometric content blocks without glyphs. Color palette: plum and rose washes, cyan and pale blue chalk lines. No robot or humanoid.
```

#### engineering-notes.png

```text
Primary request: an open engineering notebook drawn in chalk, with a pipeline trace across its open pages, complemented by a small wrench outline and an empty terminal-window outline. Suggest thoughtful experiments and debugging through diagrammatic connected blocks and trace routes, with no written notes or fake code. Color palette: burnt orange and copper washes, blue and pale warm chalk lines.
```

#### databases.png

```text
Primary request: database cylinders connected to neat empty table grids and a branching index tree. Compose as a coherent data architecture sketch: two or three cylinders feed compact rectangular row-and-column table shapes, connected to an orderly balanced branching tree of small empty node squares. All cells and nodes blank. Color palette: violet and blue washes, pale blue chalk lines with restrained amber highlights on key connections.
```

#### caching.png

```text
Primary request: a small central fast cache cube between request routes and a database cylinder. Show two clear alternative arrow paths: a short efficient route through the cache cube, and a longer bypass route to the database cylinder. Use a few warm tiny latency sparks to suggest speed, and orderly arrow geometry so the concept reads instantly. All nodes are unlabeled. Color palette: cyan and blue washes, lime and pale blue chalk lines with tiny amber accents.
```

### Subtopic set

For each image, append its subject instructions to this shared prefix.

```text
Use case: stylized-concept.
Asset type: technical blog subsection banner background plate, 1536x864, 16:9 landscape.
Style/medium: premium hand-drawn teaching-workshop technical chalkboard and blueprint illustration; carefully composed luminous chalk lines, fine paper grain, restrained colored washes. Medium-deep ink-blue base, not pitch-black. Sophisticated tactile editorial finish.
Composition: full bleed, no frame or rounded corners. Topic diagrams clustered in upper-left and upper-center, approximately x=8–65% and y=8–46%. Keep the lower-left 60% quiet, uninterrupted, and low contrast for a real bold white heading to be overlaid later. Keep the rightmost 30% quiet and mostly empty for a real portrait to be overlaid later. Do NOT generate the heading or portrait.
Strict constraints: NO PEOPLE. NO TEXT, NO LETTERS, NO NUMERALS, no labels, no logos, no title, no watermark, no fake code. No exaggerated neon, no generic space art. Only meaningful topic diagrams on the textured surface.
```

#### recursion.png

```text
Primary request: teach recursion visually with distinct nested recursive call frames stacked vertically in the upper-left/center. Three descending tiers of chalk-outline rectangular frames, compact branching call connectors going deeper, and one graceful warm coral return arrow curving upward back out. Convey entering deeper calls and then returning, without any code or labels.
Color palette: indigo and cobalt, luminous cyan diagram outlines, restrained warm coral return accents, gentle blue-green glow.
```

#### trees.png

```text
Primary request: one clean branching binary tree in the upper-left/center. A small circular root, exactly two child nodes, exactly four leaf nodes, connected by elegant chalk strokes. Add a few subtle related traversal arcs, much dimmer than the tree. Orderly and immediately legible, no labels.
Color palette: forest teal and emerald washes over the ink-blue surface, pale turquoise chalk, restrained warm lime highlights. Gentle green-blue glow.
```

#### graphs.png

```text
Primary request: a directed graph with exactly eight circular chalk-outline nodes, arranged in an orderly compact composition in the upper-left/center. Clearly visible directional arrowheads on connections. Highlight one coherent path through four nodes in warm orange with gentle glow; other graph connections remain dim turquoise. An explanatory graph, not a chaotic network.
Color palette: deep blue and turquoise with restrained warm orange path accents, gentle blue-green glow.
```

#### dynamic-programming.png

```text
Primary request: a crisp chalk-outline dynamic programming table/grid in the upper-left/center. Completed cells glow in a stair-step sequence, visually showing reuse of earlier results to reach later cells. A small set of merging dependency branches feeds into shared grid states, conveying overlapping subproblems and shared computation. Carefully composed, no labels or numbers in any cell.
Color palette: emerald and teal washes over ink blue, pale yellow completed cells, restrained turquoise outlines and gentle green-blue glow.
```

#### concurrency.png

```text
Primary request: a clear technical explanatory diagram of concurrency in the upper-left/center. Exactly three parallel horizontal task lanes with small chalk-outline rectangular task blocks. The three lanes meet at one visible warm amber synchronization gate spanning all three lanes, then continue as converging connections into one compact shared-storage cylinder. Visually distinguish independent tasks, synchronization, then shared storage. Keep the entire diagram compact and above the quiet heading area, and end before the rightmost portrait area.
Color palette: cobalt and teal washes over ink blue, luminous pale cyan task outlines, warm amber gate and restrained amber shared-storage accents, gentle blue-green glow.
```
