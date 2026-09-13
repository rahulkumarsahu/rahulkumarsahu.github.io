import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const vercelProductionHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
const site =
  process.env.PUBLIC_SITE_URL ??
  (vercelProductionHost
    ? `https://${vercelProductionHost}`
    : 'https://rahulkumarsahu.github.io');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({
    filter: (page) => new URL(page).pathname !== '/learning/',
  })],
});
