import tutorialkit from '@tutorialkit/astro';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tutorialkit(),
    // NOTE: sitemap-index.xml will be created as a static asset when building
    // it might not be available during dev
    // @see https://github.com/stackblitz/tutorialkit/pull/375
    sitemap()
  ],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: "https://astropatterns.dev"
});