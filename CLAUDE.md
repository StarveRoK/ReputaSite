# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000 (Turbopack)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint check
```

No test framework is configured.

## Architecture

**ReputaSite** is a Next.js marketing landing page for REPUTA — an AI-powered reputation management service for Wildberries marketplace sellers.

### Stack

- **Next.js App Router** (v16) with TypeScript 5
- **Styling**: TailwindCSS 4 + Bootstrap 5 + per-component CSS files in `src/styles/`
- **Fonts**: Inter and Onest (Google, Cyrillic subset) via CSS variables `--font-inter` / `--font-onest`
- **SVG**: Files in `public/` are auto-converted to React components via `@svgr/webpack` — import `.svg` files directly as React components

### Page Composition

The site is a single page. `src/app/page.tsx` composes sections in order:

```
Header → HeroSection → Block2 → Block3 → Block4 → Block5 → Block6
```

Section components live in `src/components/sections/`, layout in `src/components/layout/`, shared icons/SVGs in `src/components/ui/`.

### Styling Convention

Each section has a corresponding CSS file in `src/styles/` (e.g., `hero.css`, `block_2.css`) imported directly in the component. Custom utility classes use the `cst-` prefix. Global CSS variables (colors, spacing) are defined in `src/app/globals.css`.

### API Layer

`src/lib/api.ts` exports `apiFetch<T>(endpoint, options?)` — a thin wrapper around `fetch` that prepends `NEXT_PUBLIC_API_URL` (default: `http://localhost:8000/`) and sets ISR revalidation to 60 seconds.

### Path Alias

`@/*` maps to `src/*`.
