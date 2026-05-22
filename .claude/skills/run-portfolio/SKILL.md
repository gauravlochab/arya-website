---
name: run-portfolio
description: How to build, run, and verify the gaurav.gg portfolio. Use when launching the dev server, building the site, or verifying a change against the running app.
---

# Run the portfolio

Next.js 14 App Router project. Requires Node and npm. No environment variables for local dev.

## Install

```bash
npm install
```

## Dev server

```bash
npm run dev
```

Serves on http://localhost:3000 with hot reload.

## Verify a change

1. Run `npm run dev` and open http://localhost:3000.
2. For a production-accurate check: `npm run build`, then `npm run start` (also serves on :3000).
3. Type-check with `npm run typecheck`.

A change is verified when the affected section renders correctly at http://localhost:3000 and `npm run build` exits 0.

## Notes

- Editable copy lives in `content/` — after a copy change, confirm it renders on the page.
- `npm run build` performs type-checking as part of the build.
