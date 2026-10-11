// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Pages are prerendered; only Keystatic's admin (/keystatic) and its API run on demand.
export default defineConfig({
  site: 'https://www.briankphoto.com',
  integrations: [react(), keystatic(), sitemap()],
  adapter: vercel(),
  devToolbar: { enabled: false },
});
