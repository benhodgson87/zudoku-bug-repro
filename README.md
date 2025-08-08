# Zudoku Reproduction (_repro)

This is a minimal, standalone reproduction of our Zudoku integration using generic, non-proprietary API specifications.

## Run locally

```bash
cd _repro
npm install --prefix docs
npm run docs:dev
```

Then open http://localhost:3000

## Build static site

```bash
cd _repro
npm install --prefix docs
npm run docs:build
```

The output will be in `_repro/docs/dist`.

## Structure

- `_repro/docs` — Zudoku app (dev & build)
- `_repro/specs` — dummy API specs: users, orders, products

## Notes
- Specs are wired in via local file inputs in `docs/zudoku.config.tsx`
- No proprietary content, assets, or secrets are included

