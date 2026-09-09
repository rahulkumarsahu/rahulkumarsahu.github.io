# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary readers are beginners, junior engineers and working developers who want a clear route through DSA, Java backend engineering and system design. They may be learning a topic for the first time, preparing for interviews or revisiting a concept they use at work.

The site should help a first-time visitor choose a goal quickly and help a returning reader continue from where they stopped.

## Product Purpose

The System Design Atlas is Rahul Kumar's engineering learning blog. It connects algorithms, Java, Spring Boot, microservices, low-level design, system design, cloud-native engineering, AI engineering and practical engineering notes.

Success means a reader can understand the idea, see it execute, practise it and connect it to a larger engineering decision without searching across unrelated resources.

## Positioning

The Atlas connects small programming ideas to production systems. Its learning experience combines beginner-friendly explanations, Java-first implementations, visual dry runs, interactive simulators, progressive hints, local learning progress and one connected backend project.

Rahul's reasoning and experience should be present where he has supplied it. Personal stories, benchmarks and claims must never be invented.

## Operating Context

Readers use topic and subsection pages to choose a route, Markdown articles to learn, practice workspaces to attempt DSA problems, simulators to inspect state changes, revision cards to review patterns, and the production URL shortener project to connect concepts across the stack.

The main content is read on desktop and mobile. Practice code is sent to JDoodle only after the reader intentionally runs it. Bookmarks, progress, saved code and learning state remain in browser storage.

## Capabilities and Constraints

- The site is an Astro static website backed by content collections and Markdown articles.
- Preserve existing public routes, internal links, article bodies and published URLs.
- Preserve the homepage illustration, Rahul's portraits, topic banners, subtopic banners, article-specific banners and images inside articles.
- Published content appears before planned content. Planned lessons remain visually quieter and never link to unpublished routes.
- DSA problem solutions remain hidden when an article first opens.
- Search is available contextually and through the global overlay. Do not restore a standalone search page.
- Do not restore a standalone DSA roadmap page.
- Learning data remains local to the browser and the site must work when storage is unavailable.
- Do not add authentication, accounts, leaderboards, XP, certificates, a backend, cloud persistence or tracking without a separate product decision.
- Do not commit or push changes until Rahul explicitly approves the preview.

## Brand Commitments

The product name is **The System Design Atlas** and the author is **Rahul Kumar**.

The voice should sound like an experienced engineer patiently explaining a subject to a beginner. Use simple language, natural transitions and specific reasoning. Avoid generic marketing language, repetitive summaries, excessive bold text, em dashes and fabricated personal experience.

The incumbent visual identity and its custom artwork are protected. Refinements should preserve that identity unless Rahul explicitly requests a redesign.

## Evidence on Hand

- Existing published articles are stored in `src/content/posts/`.
- The article-authoring contract is stored in `ARTICLE_AUTHORING_GUIDE.md`.
- Reusable content templates are stored in `content-templates/`.
- The topic and article banner systems are implemented in the existing Astro components and banner data.
- Existing practice workspaces, progressive hints, knowledge checks, simulators, revision pages, learning dashboard, DSA master sheet and URL shortener project are working product evidence.
- Rahul's approved portraits and illustrations are stored with the current site assets.
- No testimonial, reader count, performance benchmark or personal anecdote should be assumed when it is not present in the repository or supplied by Rahul.

## Product Principles

1. Start with intuition, then show code and tradeoffs.
2. Make execution visible when a dry run or simulator improves understanding.
3. Keep navigation clear, with published material before future plans.
4. Connect individual concepts to realistic backend and production decisions.
5. Prefer trustworthy, tested and accessible learning experiences over decorative features.

## Accessibility & Inclusion

The site must support keyboard navigation, visible focus states, screen-reader labels, reduced-motion preferences and readable contrast. Important controls should remain usable without relying on colour alone.

Layouts should be verified at 390 px mobile, 768 px tablet and 1440 px desktop widths. Pages must avoid horizontal overflow, and code editors, tables, search, filters and simulators must remain usable on small screens.
