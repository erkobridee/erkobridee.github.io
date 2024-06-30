import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import favicons from 'astro-favicons';

import { defineConfig } from 'astro/config';

let integrations = [
  mdx(),
  tailwind({
    // Example: Allow writing nested CSS declarations
    // alongside Tailwind's syntax
    nesting: true
  })
];

// https://docs.astro.build/en/guides/environment-variables/#default-environment-variables
if (import.meta.env.PROD) {
  integrations.push(
    favicons({
      masterPicture: './src/assets/images/erko_avatar_512.png',
      emitAssets: true,
      faviconsDarkMode: false
    })
  );
}

// https://astro.build/config
export default defineConfig({
  integrations
});
