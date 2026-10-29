# CLAUDE.md

Project context for Claude Code sessions working on this repo (any device). Keep it current.

## What this is

Personal portfolio for **Mandar Kharat** — a senior fullstack engineer (Angular + .NET/C#) pivoting toward AI engineering. **Positioning is a deliberate "bridge":** one site that serves both fullstack *and* AI-engineering job searches, framing them as reinforcing (production rigor applied to AI). Don't split the message into two audiences. The centerpiece is **DocsRAG** (a production-minded RAG service — separate repo: `Mandark31/DocsRAG`), shown as a case study + an interactive demo.

Live at **https://mandarkharat.dev** (`www.` 301-redirects to the apex).

## Stack & conventions

- **Angular 21**, standalone components + signals, SCSS. Note the v21 file naming: `app.ts`, not `app.component.ts`.
- **Single source of truth for all copy/data is [`src/app/core/content.ts`](src/app/core/content.ts)** — edit content there, not in templates.
- **Visual direction: "design doc".** The site reads like an engineering design doc: paper/ink palette with one ink-blue accent, serif headings, numbered `§` sections in a three-column grid (number | body | margin note), ruled tables instead of cards. Chosen deliberately to avoid the generic AI-site look — no gradients, glows, glass blur, pill chips or stat tiles.
- Design tokens + light/dark theming live in [`src/styles.scss`](src/styles.scss) (CSS variables; light-first, follows system preference, persisted toggle via `src/app/core/theme.ts`). Shared doc building blocks are there too: `.doc-sec`, `.aside`, `.ruled` (`.ruled--stack` turns rows into blocks on phones), `.link`, `.label`.
- Fonts are **self-hosted** via Fontsource (`@fontsource-variable/newsreader` for headings, `@fontsource-variable/ibm-plex-sans` for body, `@fontsource/ibm-plex-mono` for labels/data), wired through `angular.json` styles — no Google Fonts CDN.
- Structure: shell `app.ts` (nav + router-outlet + footer); `layout/` (nav, footer); `pages/home` (all landing sections in one component) and `pages/docsrag` (case study); `components/demo-placeholder` (the DocsRAG demo).

## Run & build

```bash
npm install
npm start          # dev server; port 4200 (autoPort picks another if taken)
npm run build      # production build → dist/portfolio/browser
```

## Deploy (automatic)

- Host: **Azure Static Web Apps** (Free plan). **Push to `main` → GitHub Actions builds and deploys** (`.github/workflows/azure-static-web-apps.yml`). PRs get preview environments. No manual deploy step.
- SPA routing + headers: `public/staticwebapp.config.json` (navigation fallback to `/index.html` so deep links like `/docsrag` work).
- Custom domain `mandarkharat.dev` is on **Cloudflare DNS** (apex CNAME = DNS-only/grey so Azure serves SSL; `www` = proxied/orange for the redirect rule). Don't proxy the apex.

## What's left / notes

- **Biggest remaining item: wire the live DocsRAG demo.** `components/demo-placeholder` is currently a *canned* streaming mock (preset Q&A, fake token stream). Once DocsRAG is deployed publicly, replace its `run()` with a real fetch to the DocsRAG `POST /ask` SSE endpoint (needs CORS on that API). There's a TODO marker in the component.
- DocsRAG case-study data (pipeline, decisions, roadmap) lives in `content.ts` too; decisions flagged `highlight` also appear as the excerpt on the home page.
- The **OG share image** (`public/og-image.png`) is generated from `public/og-image.svg`; to regenerate: `npm i --no-save sharp` then `sharp('public/og-image.svg',{density:200}).resize(1200,630,{fit:'fill'}).png().toFile('public/og-image.png')`.
- **Do not add a résumé-PDF download** — deliberately omitted (the PDF has a personal phone number and this repo is public).
- Favicon is a branded "MK" monogram (`public/favicon.svg` + PNG fallbacks); Angular's default `favicon.ico` was removed.
