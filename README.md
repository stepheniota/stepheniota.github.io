# stepheniota.github.io

Personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run it locally

Requires Node.js 22.23+ (`brew upgrade node`).

```sh
npm install      # once
npm run dev      # live-reloading preview at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Where things live

| To change…                         | Edit                                   |
| ---------------------------------- | -------------------------------------- |
| Bio text                           | `src/content/about.md` (Markdown)      |
| Name, tagline, email, social links | `src/data/site.ts`                     |
| Publications (add / edit / select) | `src/data/publications.ts`             |
| Resume / CV                        | replace `public/assets/pdf/resume.pdf` |
| Photo                              | replace `src/assets/me.jpg`            |
| Colors, font, page width           | `:root` block at top of `src/styles/global.css` |
| Header / footer / nav              | `src/layouts/Base.astro`               |
| Pages                              | `src/pages/*.astro` (file name = URL)  |

Anything in `public/` is served as-is at the same path.

## Deploying

Push to `main`. The GitHub Action in `.github/workflows/deploy.yml` builds the site and
publishes it. Pull requests run the build only (as a check), without deploying.

One-time setup: GitHub → Settings → Pages → Source = **GitHub Actions**.
