# gaurav-site

Personal portfolio for Gaurav Lochab — AI Engineer. Deployed at https://gaurav.gg

## Stack

- Next.js 14 (App Router) · React 18 · TypeScript (strict)
- Tailwind CSS 3 — design tokens and custom classes in `app/globals.css`
- Hosted on Vercel; the `main` branch is production

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server — http://localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Next.js ESLint |
| `npm run typecheck` | Type-check only (`tsc --noEmit`) |
| `npm run format` | Format with Prettier |

## Structure

- `app/` — App Router layout, `page.tsx`, and `app/components/` (all UI components)
- `app/api/` — route handlers (e.g. GitHub contributions)
- `content/` — all editable site copy as typed data
  - `types.ts` interfaces · `site.ts` profile + links · `experience.ts` · `capabilities.ts` · `testimonials.ts` · `index.ts` assembles and exports `siteData`
- `public/` — static assets

## Conventions

- Site copy lives in `content/` and is consumed via `siteData` from `content/index.ts`. Edit copy there — do not hardcode strings in components.
- 2-space indent, double quotes, semicolons (see `.prettierrc`).
- Verify changes with `npm run build` and `npm run typecheck` before committing.

## Branches

- `main` — production, auto-deploys to gaurav.gg
- `revamp-portfolio` — in-progress redesign; gets its own Vercel preview URL
