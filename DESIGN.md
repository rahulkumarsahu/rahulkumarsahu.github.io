---
name: The System Design Atlas
description: A warm engineering field manual for learning code, architecture, and production tradeoffs.
colors:
  action-orange: "#C8542F"
  progress-green: "#416C5A"
  note-ochre: "#9B7428"
  link-ink: "#345A70"
  paper: "#F3EFE4"
  raised-paper: "#FFFDF7"
  soft-paper: "#E8E1D2"
  ink: "#211F1A"
  muted-ink: "#625D52"
  paper-rule: "#C9C0AE"
  charcoal: "#191814"
  raised-charcoal: "#24211B"
  soft-charcoal: "#2E2A22"
  charcoal-copy: "#F2ECDE"
  muted-charcoal-copy: "#C8BEAB"
  charcoal-rule: "#474137"
typography:
  display:
    fontFamily: "Iowan Old Style, Palatino Linotype, Palatino, Georgia, serif"
    fontSize: "clamp(3rem, 6.2vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Avenir Next, Avenir, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  technical:
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  control: "2px"
  panel: "2px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.action-orange}"
    textColor: "{colors.raised-paper}"
    rounded: "{rounded.control}"
    padding: "10px 24px"
    height: "44px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal-copy}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
    height: "44px"
  tool-panel:
    backgroundColor: "{colors.raised-charcoal}"
    textColor: "{colors.charcoal-copy}"
    rounded: "{rounded.panel}"
    padding: "16px"
---

# Design System: The System Design Atlas

## Overview

**Creative North Star: "The Engineering Field Manual"**

The Atlas looks like an authored technical reference that has been used at a desk, not a generic software dashboard. Warm paper, charcoal, fine rules, real diagrams, protected subject-specific artwork, and editorial typography give the work a human and practical character.

Reading pages are deliberately quiet. Indexes are denser and more structured. Simulators and practice areas feel like instruments, but they use the same ink, paper, rules, and action language as the rest of the site.

**Key Characteristics:**

- Editorial hierarchy with a distinctive serif display voice.
- Warm paper in light mode and warm charcoal in dark mode.
- Burnt orange for deliberate actions, green for progress, and ochre for notes.
- Real subject artwork presented as image plates, never generic coding decoration.
- Flat surfaces separated by rules, with minimal rounding and almost no decorative shadow.

## Colors

The palette is warm, low-glare, and functional. Colour identifies actions and learning state without repainting whole pages.

### Primary

- **Action Orange:** Use for the single primary action in a section, the current learning step, and active tool controls.

### Secondary

- **Progress Green:** Use for completion, verified material, success, and learning progress.
- **Note Ochre:** Use for revision, cautions, and information that deserves a pause rather than an action.

### Tertiary

- **Link Ink:** Use for contextual text links on paper. In dark mode, use the accessible lightened link token already exposed by the theme.

### Neutral

- **Paper Family:** Page paper is the default light field, raised paper carries reading and tool surfaces, and soft paper separates secondary regions.
- **Charcoal Family:** Charcoal is the dark page field. Raised and soft charcoal distinguish controls and instruments without glow.
- **Ink and Rules:** Primary ink carries headings and prose. Muted ink carries supporting text. Fine rules create structure.

**The Rare Accent Rule.** Orange identifies the next meaningful action. If many orange elements compete in one viewport, reduce them until the next step is obvious.

**The Semantic Colour Rule.** Never rely on colour alone. Pair state colour with a label, position, icon shape, or explanatory text.

## Typography

**Display Font:** Iowan Old Style with Palatino and Georgia fallbacks  
**Body Font:** Avenir Next with Segoe UI and system fallbacks  
**Label/Mono Font:** SFMono Regular with Consolas and Liberation Mono fallbacks

**Character:** The serif is editorial and bookish without feeling ornamental. The sans is calm and readable. Monospace appears only for code, measurements, trace state, compact metadata, and numeric indexes.

### Hierarchy

- **Display** (700, fluid up to 5.75rem, 0.96): Homepage and article titles. Tracking never goes tighter than -0.04em.
- **Headline** (700, fluid from 2.2rem): Major page and section headings.
- **Title** (700, 1.25rem to 1.9rem): Article cards, index rows, and tool headings.
- **Body** (400, 1rem, 1.75): Reading prose and explanations, kept close to 65 to 72 characters per line.
- **Technical** (500, 0.72rem, modest tracking): Code labels, progress values, and trace state. Use sentence case unless the source is code.

**The Editorial First Rule.** Serif establishes hierarchy. Sans explains. Monospace reports data. Do not interchange these roles to manufacture variety.

## Layout

The primary content container is capped at 1240 pixels and uses fluid side margins. Article bodies remain narrower, with a sticky table of contents on wide screens. Code, tables, diagrams, and simulators may break wider than prose when doing so materially improves understanding.

Homepage composition uses a four-part workshop index, a central statement, Rahul's protected system-building portrait, and an architecture margin note. Topic pages use banners as artwork plates followed by compact editorial indexes. Dense tools use table-like rows and sticky filters.

At 850 pixels, multi-column editorial compositions collapse. At 760 pixels, tool layouts stack. At 520 pixels, titles, actions, and metadata tighten further. Mobile layouts must have no page-level horizontal scroll, minimum 44-pixel primary targets, and locally scrollable code or tables.

## Elevation & Depth

The system is flat by default. Depth comes from paper and charcoal tonal changes, one-pixel rules, image plates, and content overlap in the authored homepage composition. Wide ambient shadows are reserved for overlays that must sit above the document, such as search.

**The Rule Before Shadow Rule.** Use a rule or tonal shift to separate ordinary content. Do not combine a border and a broad shadow on the same panel.

## Shapes

Controls, panels, article images, and tool surfaces use a two-pixel corner. Circular shapes are reserved for meaningful progress or radio state. Protected banners keep their own image geometry while their outer frame follows the square Field Manual language.

Pills are limited to compact status values such as difficulty. Cards do not define the page structure. Editorial rows, open space, and fine rules do.

## Components

### Buttons

- **Shape:** Nearly square corners and at least a 44-pixel interaction height.
- **Primary:** Action orange with high-contrast paper text. One primary action per section.
- **Hover / Focus:** Hover may invert to an outlined action. Keyboard focus uses a visible three-pixel ring with offset.
- **Secondary:** Transparent or tonal background with a one-pixel rule and explicit action text.

### Chips

- **Style:** Small status labels with restrained borders. They never replace readable metadata.
- **State:** Difficulty, completion, and filters always include text, not colour alone.

### Cards / Containers

- **Corner Style:** Two-pixel corners.
- **Background:** Raised paper or raised charcoal according to theme.
- **Shadow Strategy:** Flat by default.
- **Border:** One-pixel semantic rule.
- **Internal Padding:** Usually 16 to 24 pixels, reduced in dense question rows.

### Inputs / Fields

- **Style:** Tonal surface, one-pixel rule, square corners, readable labels, and 44-pixel minimum height.
- **Focus:** Strong visible outline without a decorative glow.
- **Error / Disabled:** State is named in nearby text. Disabled controls retain readable contrast.

### Navigation

The header is short and editorial. Keep no more than four direct destinations visible. Secondary destinations belong in Explore. On mobile, navigation becomes one clear vertical index with large targets.

### Artwork Plates

Homepage, topic, subtopic, and article banners are protected subject-specific assets. Preserve their intrinsic dimensions and meaning. Improve only their crop, frame, caption, responsive source, or surrounding layout unless Rahul explicitly approves replacement.

### Learning Instruments

Practice workspaces, simulators, the master sheet, and the design lab use dense, square, high-contrast controls. Code and current state sit side by side when space permits and stack in reading order on mobile. Motion explains a state change and respects reduced-motion settings.

## Do's and Don'ts

### Do:

- **Do** make published content and the next useful action obvious before planned material.
- **Do** preserve every subject-specific banner and diagram.
- **Do** use sentence case for navigation, controls, and normal labels.
- **Do** use fine rules and whitespace to organize content before adding a container.
- **Do** keep complete DSA solutions closed when a practice article first loads.
- **Do** validate both themes, keyboard focus, reduced motion, blocked storage, and narrow screens.

### Don't:

- **Don't** return to navy page fields, indigo glows, glass panels, or full-page decorative grids.
- **Don't** build pages from repeated same-size cards, nested cards, or a wall of pills.
- **Don't** add generic coding art, AI brains, robots, laptops, or unrelated banners.
- **Don't** repeat generic eyebrows above headings. The approved homepage workshop descriptor is the only authored exception.
- **Don't** use monospace merely to make ordinary copy look technical.
- **Don't** animate for decoration or hide core content behind an entrance animation.
