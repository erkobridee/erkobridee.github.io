// https://docs.astro.build/en/reference/configuration-reference/
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
// https://github.com/ACP-CODE/astro-favicons
import favicons from 'astro-favicons';
// https://github.com/natemoo-re/astro-icon
import icon from 'astro-icon';

// https://tailwindcss.com/docs/installation/framework-guides/astro
import tailwindcss from '@tailwindcss/vite';

const integrations = [
  mdx(),
  icon({
    iconDir: 'src/assets/icons'
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

/** @type {import('astro').AstroUserConfig} */
const config = {
  integrations,
  vite: {
    plugins: [tailwindcss()]
  }
};

// https://astro.build/config
export default defineConfig(config);
