# The System Design Atlas

A Java-first engineering blog about DSA, low-level design, system design, Docker, and Kubernetes.

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
