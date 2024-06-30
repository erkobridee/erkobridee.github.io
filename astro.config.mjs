import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://github.com/ACP-CODE/astro-favicons
import favicons from 'astro-favicons';

// https://github.com/natemoo-re/astro-icon
import icon from "astro-icon";

import { defineConfig } from 'astro/config';

let integrations = [
  mdx(),
  tailwind({
    // Example: Allow writing nested CSS declarations
    // alongside Tailwind's syntax
    nesting: true
  }),
  icon({
    iconDir: "src/assets/icons",
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
