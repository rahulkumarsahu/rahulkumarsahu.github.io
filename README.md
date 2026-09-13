# The System Design Atlas

A Java-first engineering blog about DSA, low-level design, system design, cloud native systems, AI engineering, and practical lessons from real software work.

## Requirements

Use Node.js 24 LTS. The included `.nvmrc` selects the supported release line automatically when using NVM.

## Local development

```sh
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

## Production build

```sh
npm run build
npm run preview
```

The static site is generated in `dist/`. Pushing to `main` or `master` publishes it through the GitHub Pages workflow.

## Content

Existing articles live in `src/content/posts/`. Their date-prefixed filenames keep the original `/posts/<slug>/` URLs unchanged.

## GitHub activity

<div align="center">
  <a href="https://github.com/rahulkumarsahu" aria-label="View Rahul Kumar's GitHub profile">
    <img src="https://ghchart.rshah.org/58A6FF/rahulkumarsahu" width="95%" alt="Rahul Kumar's GitHub contribution graph" />
  </a>
</div>
