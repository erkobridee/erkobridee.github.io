import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

const config = {
  integrations: [
    mdx(),
    tailwind({
      // Example: Allow writing nested CSS declarations
      // alongside Tailwind's syntax
      nesting: true
    })
  ]
};

// https://astro.build/config
export default defineConfig(config);
