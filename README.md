# gaurav.gg

Personal portfolio of **Gaurav Lochab** — AI Engineer specializing in production LLM systems, retrieval, and agent infrastructure.

🔗 **Live:** https://gaurav.gg

## Tech stack

- **Next.js 14** (App Router) · **React 18** · **TypeScript**
- **Tailwind CSS 3**
- Deployed on **Vercel**

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint with Next.js ESLint |
| `npm run typecheck` | Type-check without emitting (`tsc --noEmit`) |
| `npm run format` | Format the codebase with Prettier |

## Project structure

```
app/            App Router — layout, page, API routes
  components/   UI components
  api/          Route handlers
content/        Editable site copy as typed data
public/         Static assets
```

## Editing content

All site copy — hero text, experience, capabilities, testimonials — lives in `content/` as typed data. Edit the relevant file there; the change flows through `siteData` (`content/index.ts`) into the page. You should not need to touch components for copy changes.

## Deployment

`main` is the production branch and auto-deploys to Vercel. Feature work happens on branches (e.g. `revamp-portfolio`), each of which gets its own Vercel preview URL.
