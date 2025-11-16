// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// Import the necessary utilities for i18n configuration
import { defaultLang, languages } from './src/i18n/utils.ts'; 
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  // 1. Integrations: Add Tailwind
  integrations: [tailwind({
    config: {
      // Prevents Tailwind from applying default base styles if they conflict
      applyBaseStyles: false, 
    }
  })],
  
  // 2. Deployment Adapter: Configure for Netlify
  output: 'server',
  adapter: netlify(),
  
  // 3. Internationalization (i18n) setup
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages),
    routing: {
      // Ensures URLs look like /en/page, /de/page, /hu/page
      prefixDefaultLocale: false 
    }
  },
});