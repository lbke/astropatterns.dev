import tutorialkit from '@tutorialkit/astro';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [tutorialkit()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: "https://astropatterns.dev"
});
