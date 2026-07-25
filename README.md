# mandarkharat.dev

Personal portfolio site of **Mandar Kharat** — senior fullstack engineer (Angular & .NET) building production-grade AI systems.

Built with **Angular 21** (standalone components + signals, SCSS). Single-source-of-truth content model, dark/light theming, and a case study for [DocsRAG](https://github.com/Mandark31/DocsRAG) — a production-minded RAG service.

## Stack

- **Angular 21** — standalone components, signals, lazy-loaded routes
- **SCSS** — CSS-variable design tokens, dark-first with a persisted light/dark toggle
- No runtime dependencies beyond Angular; fonts are a system stack

## Structure

```
src/
├── styles.scss                     # design tokens (light/dark), base styles
├── index.html                      # SEO meta (title, description, OG, canonical)
└── app/
    ├── core/
    │   ├── content.ts              # single source of truth for all copy/data
    │   └── theme.ts                # theme service (data-theme + localStorage)
    ├── layout/                     # nav (with theme toggle), footer
    ├── components/
    │   └── demo-placeholder/       # canned DocsRAG /ask demo (SSE wiring TODO)
    └── pages/
        ├── home/                   # hero, proof, featured, work, experience, about, contact
        └── docsrag/                # DocsRAG case study
```

## Develop

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build → dist/portfolio
```

Edit content in [`src/app/core/content.ts`](src/app/core/content.ts) — not in templates.

## License

MIT
