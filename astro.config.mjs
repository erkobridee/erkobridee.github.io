// https://docs.astro.build/en/reference/configuration-reference/

import mdx from '@astrojs/mdx';

// https://tailwindcss.com/docs/installation/framework-guides/astro
import tailwindcss from '@tailwindcss/vite';

// https://github.com/ACP-CODE/astro-favicons
import favicons from 'astro-favicons';

// https://github.com/natemoo-re/astro-icon
import icon from 'astro-icon';

import { defineConfig } from 'astro/config';

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

/** @type {import('astro/config').config} */
const config = {
  integrations,
  vite: {
    plugins: [tailwindcss()]
  }
};

// https://astro.build/config
export default defineConfig(config);
