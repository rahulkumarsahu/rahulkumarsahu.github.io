# The System Design Atlas Authoring Guide

This file is the source of truth for creating and updating content on The System Design Atlas. Use it for every future article, whether the work is done manually or with an AI coding assistant.

The goal is not to make every page identical. The goal is to give every learner a dependable reading experience while allowing the explanation, examples, diagrams, and simulator to fit the subject.

## 1. Non-negotiable rules

1. Preserve existing article text, routes, banners, and learning progress unless the task explicitly asks for a change.
2. Never publish invented facts, URLs, constraints, version numbers, complexity claims, or benchmark results.
3. Verify official documentation and problem links before adding them.
4. Compile and test Java solutions against examples and edge cases.
5. Keep published content above planned content. Planned lessons must look quieter and must not link to routes that do not exist.
6. Keep the complete solution hidden when a DSA problem page first opens.
7. Send practice code to JDoodle only after the reader intentionally presses Run.
8. Use browser storage only for learning progress, bookmarks, code drafts, checks, and project progress. The page must still work when storage is blocked.
9. Do not add a standalone global search page or a standalone DSA roadmap page. Search belongs inside topic and subsection pages.
10. Do not add accounts, authentication, leaderboards, XP, certificates, AI tutors, tracking, a backend, or cloud persistence without a separate product decision.
11. Do not commit or push content until the article and its preview have been reviewed.

## 2. Writing voice

Write like an experienced engineer helping a beginner understand the reasoning.

Use short paragraphs, concrete examples, and natural transitions. Explain why a choice is made, not only what the code does. Define unfamiliar terms when they first appear. Prefer a small accurate example over a long abstract explanation.

Avoid generic phrases such as “let us delve into,” “in today’s world,” “unlock the power,” “game-changing,” and “robust solution.” Do not use em dashes. Avoid excessive bold text, repetitive conclusions, and decorative bullet lists.

Emojis may be used in major DSA headings when they help scanning, but they should not appear in every paragraph. The finished writing should sound natural when read aloud.

## 3. Choose the correct article type

| Article type | Use it for | Required experience |
|---|---|---|
| `concept` | Foundations, mental models, language features, platform behavior | Explanation, focused example, tradeoffs, mistakes, checklist |
| `problem` | A specific DSA exercise | Practice workspace, hints, hidden solution, tests, dry run, complexity, related practice |
| `pattern` | A reusable problem-solving technique | Recognition signals, invariant, Java template, limitations, ordered examples |
| `case-study` | End-to-end system or design analysis | Requirements through production checklist using the standard case-study sequence |

Do not turn a concept article into a problem workspace merely because it contains code. Do not add animation when a short table or diagram explains the state more clearly.

## 4. File and URL conventions

Create articles in:

```text
src/content/posts/YYYY-MM-DD-readable-slug.md
```

The public article URL is:

```text
/posts/readable-slug/
```

Use lowercase slugs separated by hyphens. Do not change a published slug because doing so breaks existing links and saved learning state.

Use `content-templates/dsa-problem.md` as the starting point for DSA problems and `content-templates/concept-article.md` for concepts. This guide takes precedence when an older template is missing a newer requirement.

## 5. Frontmatter standard

Use only values accepted by `src/content.config.ts`.

```yaml
---
title: "Move Zeroes in Java: Stable In-Place Compaction"
date: 2026-09-06 09:00:00 +0530
updated: 2026-09-06 09:00:00 +0530
lastReviewed: 2026-09-06 09:00:00 +0530
description: "Learn how read and write pointers move zeroes to the end of an array while preserving the order of nonzero values."
categories: [Data Structures and Algorithms]
tags: [dsa, java, arrays, two-pointers]
topic: dsa
series: arrays
learningSection: arrays
difficulty: easy
contentType: problem
patterns: [two-pointers, in-place-compaction]
order: 7
javaVersion: "Java 21"
technologyVersions: ["Java 21"]
officialReferences:
  - title: "Official problem page"
    url: "https://verified.example/problem"
sourceCodeUrl: "https://verified.example/source"
knownLimitations:
  - "The implementation assumes the input array is mutable."
corrections: []
image: "/images/articles/move-zeroes-to-end.svg"
math: false
mermaid: false
draft: true
---
```

### Allowed metadata values

`topic` may be `dsa`, `java`, `lld`, `system-design`, `cloud-native`, `ai`, or `engineering-notes`.

`difficulty` may be `basics`, `easy`, `medium`, or `hard`.

`contentType` may be `concept`, `pattern`, `problem`, or `case-study`.

The currently supported DSA pattern slugs are:

```text
array-traversal
running-answer
two-pointers
in-place-compaction
reversal
hashing
prefix-sum
xor
recursion
backtracking
```

Add a new pattern to the content schema and pattern library before assigning it to an article. Assign patterns based on the implemented algorithm, not a word that happens to appear in the prose.

### Metadata rules

1. Write a specific SEO description that explains the learning outcome.
2. Use `updated` only when the published content materially changed.
3. Set `lastReviewed` when the technical content, examples, code, and references were checked.
4. Record a technology version only when the article depends on that version or was tested with it.
5. Use official primary documentation whenever possible.
6. Add `sourceCodeUrl` only when the destination exists and is publicly accessible.
7. State real limitations. Do not fill the field with generic warnings.
8. Add a correction record when a published technical error is fixed.
9. Keep new articles as `draft: true` until review is complete.
10. Set `mermaid: true` only when the article actually includes Mermaid.

## 6. Standard DSA problem article

A DSA problem article should teach the learner before revealing the answer. Use this reading order:

1. Problem statement
2. Examples and constraints
3. Build it yourself
4. Editable Java starter code
5. Run code with JDoodle
6. Practice test pack
7. Three progressive hints
8. Complete solution hidden by default
9. Explanation and visual dry run
10. Complexity analysis
11. Knowledge check
12. Related problems and next lesson

### Required article sections

Use headings appropriate to the problem, but cover all of the following:

```markdown
## 🎯 Problem statement

## 🧪 Examples and constraints

## 🧠 Understanding the problem

## 💡 Building the intuition

### The key observation

## 🐢 Brute-force approach

### Brute-force Java solution

## ⚡ Optimal approach

### Optimal Java solution

## 🔍 Visual dry run

## 📊 Complexity comparison

## ✅ Why the solution works

## ⚠️ Common mistakes

## 🧪 Edge cases and test cases

## 🧩 Pattern recognition

## 🔗 Related topics and problems

## 📝 Final takeaway
```

If no asymptotically faster approach exists, say so. For output-heavy problems such as Subsets, every correct algorithm must spend time producing the output. Compare overhead, ordering, memory, pruning, and extensibility instead of inventing a better complexity.

### Problem statement requirements

Explain the input, required result, constraints, duplicate behavior, negative-value behavior, empty input behavior, and any necessary assumptions. Paraphrase the source. Add a verified practice link when one exists. Do not invent an official link.

### Java solution requirements

1. Match the official platform signature when it is known.
2. Use descriptive names and stable Java syntax.
3. Keep the algorithm separate from demonstration code where practical.
4. Handle every valid edge case required by the problem.
5. Avoid clever shortcuts that hide the invariant.
6. Include recursive stack space, copied collections, maps, queues, and output storage in the space analysis.
7. Ensure every dry-run value exactly matches the code.

### Practice workspace integration

Adding Markdown alone does not create the practice experience. Add an entry using the article slug in `src/data/practiceProblems.ts`.

Every practice entry needs:

1. A concise learner-friendly instruction
2. Default input and expected result
3. At least three test cases
4. Input, return, mutation, or target rules
5. A compilable `Main` class with editable starter code
6. Three progressive hints
7. A verified official URL when available

The three hints should reveal information gradually:

1. Direction only
2. Important observation or invariant
3. Algorithm outline

Do not include the full code in a hint. The article body is automatically placed inside the closed solution section by `src/layouts/PostLayout.astro` when a practice entry exists.

### Test packs

Test more than the example. Include the smallest valid input, the main edge condition, and a representative normal case. Add duplicate, negative, overflow-sensitive, already-complete, or missing-answer cases only when the problem permits them.

For each maintained Java algorithm, add equivalent assertions to `tests/java/DsaSolutionRegression.java`. A code block is not considered tested merely because it was read during review.

The reader-facing test pack must state:

```text
Case name
Input
Expected output
What the case verifies
```

### Knowledge checks

Add two or three questions to `src/data/knowledgeChecks.ts`. Test the invariant, the next state, an edge case, a boundary, or the complexity. Do not test Java trivia.

Each option must provide an immediate explanation after the learner responds. The correct answer must not be visible beforehand. The component must continue working when browser storage is unavailable.

### Approach comparison

Add an entry to `src/data/approachComparisons.ts` only when comparing the approaches teaches a real tradeoff. Use a representative input and accurate operation counts. State whether input is modified and whether space includes returned output.

### Engineering connection

Add an entry to `src/data/engineeringConnections.ts` only when the pattern appears naturally in engineering work. Keep it short and specific. Examples include stable compaction in buffers, queues in asynchronous processing, hashing in caches, trees in indexes, and recursion in parsers or directory traversal.

### Learning links

Add prerequisites, next lessons, and practice recommendations through `src/data/articleLearningLinks.ts`. Link only to published internal routes. The section and pattern pages should show available articles before planned lessons.

## 7. Visual dry runs, simulators, and animations

A visualization must teach a changing state. Do not add animation as decoration.

### Choose the smallest useful visual

| Situation | Best choice |
|---|---|
| One or two state changes | Markdown table or annotated text |
| Fixed call or data relationship | Article diagram or Mermaid |
| Pointer movement, recursion, backtracking, traversal, cache state, or request assignment | Interactive simulator |
| An architecture assembled from learner decisions | Interactive design lab |

### When a DSA simulator is useful

A simulator is valuable when the learner needs to observe at least three meaningful transitions, such as:

1. Read and write pointers moving independently
2. Recursive calls entering and returning
3. Backtracking choosing, exploring, and undoing
4. A stack or queue changing during traversal
5. A dynamic-programming table reusing earlier states

### Required simulator experience

Build new simulators on the existing foundation instead of creating unrelated controls. Reuse:

```text
src/components/SimulatorShell.astro
src/components/ActiveSimulatorControls.astro
src/components/SimulatorPrediction.astro
src/lib/activeSimulator.ts
src/lib/simulatorPrediction.ts
```

Every full simulator must provide:

1. Previous and Next
2. Play and Pause
3. Reset
4. Jump to first and last step
5. Timeline scrubber
6. Playback speed
7. Keyboard shortcuts
8. Safe custom input
9. Shareable custom input through the URL
10. Current code line or rule
11. Current algorithm or system state
12. A human-readable explanation
13. Final output or distribution summary
14. Predict-the-next-state pauses with immediate feedback
15. Input validation with a useful message
16. Reduced-motion support

Do not rely on colour alone. Use labels, pointer names, icons, text, borders, or shapes to distinguish state. Every control needs an accessible name and visible keyboard focus. Announce meaningful feedback to screen readers.

### Responsive simulator requirements

Validate at 390 px, 768 px, and 1440 px.

1. The page must not scroll horizontally.
2. Code and state panels may sit side by side on desktop.
3. Panels must stack vertically on mobile.
4. Code blocks and tables must scroll inside their own containers.
5. Pointer labels and call-stack frames must not overlap values.
6. The code editor must remain tall enough to use comfortably.
7. Playback must become immediate when reduced motion is requested.

### Simulator content rules

1. Show only meaningful operations. Avoid frames that change nothing unless the explanation needs them.
2. Keep code highlighting synchronized with the displayed state.
3. Generate trace steps from one source of truth when possible.
4. Validate custom input before generating steps.
5. Limit input size so diagrams remain readable.
6. Encode only safe, compact values in the URL.
7. Never execute or transmit code automatically.
8. Give prediction choices that describe genuinely possible next states.

Existing reference implementations include `MoveZeroesTrace.astro`, `RecursionCallStack.astro`, `SubsetBacktracking.astro`, `TreeTraversalSimulator.astro`, `GraphTraversalSimulator.astro`, `CacheSimulator.astro`, and `LoadBalancingSimulator.astro`.

## 8. Concept articles

Use this structure for Java, Spring Boot, LLD, cloud-native, AI, and general engineering concepts:

1. Why the concept matters
2. Mental model
3. Small focused example
4. How it works
5. When to use it
6. Tradeoffs and limitations
7. Common mistakes
8. Practical checklist
9. Where it appears in real systems when useful
10. Continue learning

Use code only when it makes the mechanism clearer. Keep examples small enough to understand without unrelated project setup. For version-sensitive frameworks, record the version tested and link to the matching official documentation.

## 9. Low-Level Design articles

Explain responsibilities before presenting classes. A useful order is:

1. Scope and requirements
2. Actors and use cases
3. Domain concepts
4. Responsibilities
5. Relationships and invariants
6. Interfaces and extension points
7. Java implementation
8. Example flow
9. Alternatives and tradeoffs
10. Tests and failure cases

Diagrams should clarify ownership, composition, inheritance, collaboration, or event flow. Do not create a large class diagram before explaining the domain decisions it represents.

## 10. System-design case studies

Set `topic: system-design` and `contentType: case-study` to receive the reusable case-study outline.

Use these headings in this order:

1. Requirements
2. Scale assumptions
3. Estimation
4. API contracts
5. Data model
6. Simple design
7. Bottlenecks
8. Improved architecture
9. Failure scenarios
10. Tradeoff matrix
11. Interview discussion
12. Production checklist

Start with the smallest architecture that satisfies the stated requirements. Every additional component must answer three questions:

1. What benefit does it provide?
2. What cost or failure mode does it introduce?
3. Which requirement, scale estimate, or operating signal justifies it?

For decision-sensitive labs, architecture must follow the reader’s actual decisions. Do not activate components merely because a certain number of stages was completed.

## 11. Article banners and educational images

Every banner must reflect the actual article subject or a visualization already used in the article. Never apply one generic coding banner to unrelated pages.

For a normal generated article banner, add an article-specific visual definition to `src/lib/postBanners.ts`. The diagram should show the key state, transformation, or architecture from the article.

Use a custom image only when it teaches the subject better. Register custom covers in the same file and write meaningful alt text. Preserve existing homepage, topic, subtopic, and article assets.

Follow the detailed visual system in:

```text
docs/article-banners.md
docs/topic-banners.md
```

Banner requirements:

1. Subject-specific educational diagram
2. Readable composition at desktop and mobile sizes
3. No fake code or unreadable generated text
4. No decorative robots, laptops, or generic AI scenes
5. Strong contrast in light and dark themes
6. Useful alt text describing what the diagram teaches
7. No replacement of an existing banner without explicit approval

## 12. Technical trust record

Every published technical article should let readers see how recently it was checked and what it applies to. The reusable trust panel reads its data from frontmatter and `src/data/articleTrust.ts`.

Record:

1. Last reviewed date
2. Java or technology version reviewed
3. Official references
4. Source-code link when available
5. Known limitations
6. Correction history
7. A safe report-a-mistake link

The article feedback control stores lightweight clarity ratings locally. The email action is what allows a reader to send details to Rahul. Never claim that a local-only rating has reached the author.

## 13. Search, filters, progress, and storage

New content must fit the existing navigation instead of adding another main-header destination.

1. Add the article to the correct section in `src/data/learningPaths.ts`.
2. Keep search contextual to topic and subsection pages.
3. Add filters only when the metadata is reliable.
4. Ensure difficulty, content type, completion, and pattern filters work together.
5. Provide one obvious reset action for filters.
6. Keep published articles above planned lessons.
7. Link a first-time reader to the correct first lesson without forcing exploration through several pages.

Use the existing versioned storage helpers in `src/lib/learningStorage.ts`. Current namespaces include progress, bookmarks, code drafts, knowledge checks, project progress, and learning-path state. Wrap every storage operation so blocked storage never prevents reading the article.

Do not rename an article slug after learners may have saved progress or starter code under that slug.

## 14. Accessibility checklist

Before review, confirm:

1. The heading hierarchy is logical.
2. All interactive controls work with a keyboard.
3. Focus indicators are visible.
4. Inputs and buttons have accessible names.
5. Status and error messages are announced appropriately.
6. Meaning is not communicated by colour alone.
7. Images have useful alt text, or empty alt text when purely decorative.
8. Tables have headers and can scroll within their container.
9. Expandable solutions and hints use semantic controls.
10. Motion respects `prefers-reduced-motion`.
11. The page has no horizontal overflow at 390 px.
12. The light and dark themes remain readable.

## 15. Verification before publication

Run the complete validation from the repository root:

```bash
npm run validate
```

This runs the content checks, Java regression suite, Astro production build, banner validation, and internal-link validation.

For a new or changed article, also verify manually:

1. Examples and dry-run values match the implementation.
2. Every Java method compiles and passes edge cases.
3. Complexity includes auxiliary and output space where relevant.
4. The solution is closed on initial page load.
5. Hints do not expose the solution.
6. Practice code can be saved, restored, and cleared.
7. JDoodle runs only after an intentional action.
8. Knowledge checks hide answers until response.
9. Custom simulator input handles valid, invalid, empty, and excessive values.
10. Simulator state matches the highlighted code line.
11. Internal and external links resolve to the intended destination.
12. The banner describes this article rather than a generic topic.
13. Desktop, tablet, and mobile layouts are visually sound.
14. The browser console has no runtime errors.

Do not describe documentation-only inspection as tested code. In the review summary, state which solutions were compiled, how many tests ran, and which interactive states were manually checked.

## 16. Publishing workflow

Use this sequence for every article:

1. Choose the topic, section, article type, difficulty, and patterns.
2. Verify the official problem or documentation source.
3. Draft the article using the correct structure.
4. Compile and test every code solution.
5. Add the article to the appropriate learning path.
6. Add practice data when it is a DSA problem.
7. Add hints, tests, knowledge checks, comparisons, and learning links.
8. Decide whether a table, diagram, or simulator is the smallest useful visualization.
9. Create an article-specific banner.
10. Add trust metadata and known limitations.
11. Run the full validation.
12. Review the actual page at mobile, tablet, and desktop widths.
13. Show the preview and a concise change summary.
14. Commit and push only after explicit approval.

## 17. Copyable request for a future article

Use the following request when asking an AI coding assistant to add an article:

```text
Create a new publish-ready article for The System Design Atlas in the current Astro repository.

Read ARTICLE_AUTHORING_GUIDE.md completely before making changes and follow it as the source of truth.

Article details:
Topic: [DSA, Java, Spring Boot, LLD, System Design, Cloud Native, AI, or Engineering Notes]
Article type: [concept, problem, pattern, or case-study]
Title: [title]
Problem or documentation URL: [verified URL or NA]
Difficulty: [basics, easy, medium, or hard]
Learning section: [section slug]
Preferred language and version: [for example Java 21]
Publication date: [date]
Related published articles: [verified internal URLs or NA]

Preserve all existing articles, routes, banners, components, and uncommitted work.

For a DSA problem, add the full practice experience: editable Java starter code, JDoodle run action, at least three test cases, three progressive hints, a solution closed by default, a verified dry run, correct complexity analysis, a short knowledge check, pattern metadata, related practice, and Java regression assertions.

Add an interactive simulator only if changing algorithm state is materially easier to understand through interaction. If needed, reuse the existing simulator foundation and include Previous, Next, Play, Pause, Reset, first and last step, scrubber, speed, keyboard shortcuts, custom input, URL sharing, current code line, current state, explanation, output, prediction pauses, validation, accessibility, responsive behavior, and reduced-motion support.

For a system-design case study, use the standard twelve-part sequence and explain the benefit, cost, and architectural effect of every major decision.

Create or register an article-specific educational banner. Do not replace any existing banner and do not use a generic coding image.

Add last-reviewed information, tested versions, official references, known limitations, and correction history. Use natural human writing, no em dashes, no generic AI phrases, and no invented links or claims.

Run npm run validate and manually inspect the new page at 390 px, 768 px, and 1440 px. Report exactly what was tested. Do not commit or push until I approve the preview.
```

## 18. Definition of done

An article is ready for review when a beginner can understand the problem or concept, attempt it before seeing the answer, verify their understanding, inspect a correct dry run, and know what to study next.

An article is ready to publish only when its code, links, metadata, banner, responsive layout, accessibility, and production build have all been checked.
