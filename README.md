<p align="center">
  <img alt="Me" src="public/images/erko_avatar_512.png" width="80" />
</p>
<h1 align="center">
  Personal web site
</h1>

# Powered by

[Astro Build](https://astro.build/) using [TypeScript](https://www.typescriptlang.org/) plus [TailwindCSS](https://tailwindcss.com/)

- Project template: [[GitHub] erkobridee/astro-ts-tw-hello](https://github.com/erkobridee/astro-ts-tw-hello)

## Local Development

- [VS Code](https://code.visualstudio.com/) + [Development Containers](https://containers.dev/) ( [Customizations](https://containers.dev/supporting#visual-studio-code) | [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) )

  - [[GitHub] erkobridee/devcontainer-hello](https://github.com/erkobridee/devcontainer-hello) - Learning about Development Containers

## import path alias

It's commonly used the pattern `@* -> src/*`, but this approach annoys me due to the current npm package namespaces ( [scopes | npm docs](https://docs.npmjs.com/about-scopes) ) which normally starts with `@{user_name/org_name}`.

So to avoid that I tested the pattern `~/* -> src/*`, inspired on Unix OS, but those 2 caracteres for a lazy person like me it's too much.

So later on, I saw some cases where it's been using the pattern `#* -> src/*` ( [tsconfig.json](/tsconfig.json) ) which avoid the issue from `@`.

## Astro

- [Astro Docs](https://docs.astro.build/en/getting-started/)

  - [Install and set up Astro](https://docs.astro.build/en/install-and-setup/)

  - [Project Structure | Astro Docs](https://docs.astro.build/en/basics/project-structure/)

  - [Import Aliases | Astro Docs](https://docs.astro.build/en/guides/aliases/)

  - [Markdown & MDX | Astro Docs](https://docs.astro.build/en/guides/markdown-content/)

    - [Configuring Markdown and MDX](https://docs.astro.build/en/guides/markdown-content/#configuring-markdown-and-mdx)

  - [Deploy your Astro Site to GitHub Pages | Astro Docs](https://docs.astro.build/en/guides/deploy/github/)

    - [[GitHub] withastro/github-pages](https://github.com/withastro/github-pages) - Automatically deploy an Astro site to GitHub Pages

    - [Create gh-pages branch in existing repo | jf](https://jiafulow.github.io/blog/2020/07/09/create-gh-pages-branch-in-existing-repo/)

  - [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

### Editor Setup

- [Editor Setup | Astro Docs](https://docs.astro.build/en/editor-setup/)

  - [ESLint](https://docs.astro.build/en/editor-setup/#eslint)

    - [[GitHub] ota-meshi/eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro)

  - [Prettier](https://docs.astro.build/en/editor-setup/#prettier)

    - [[GitHub] withastro/prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)

- [Get VSCode, eslint & prettier working with Astro | Geek's blog](https://patheticgeek.dev/blog/astro-prettier-eslint-vscode) (2023/02/11)

- [Effortless Code Styling: Configuring Astro with Prettier, ESLint, and Tailwind CSS | Raj Vadeghar](https://r44j.dev/blog/beginner-s-guide-to-setting-up-astro-astro-prettier-eslint-tailwind-css/) (2024/03/03)
