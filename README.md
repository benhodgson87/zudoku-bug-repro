# Zudoku Bug Reproduction

This is a minimal, standalone reproduction of our Zudoku integration using generic, non-proprietary API specifications.

## Run locally

```bash
npm install --prefix docs
npm run docs:dev
```

Then open http://localhost:3000

## Build static site

```bash
npm install --prefix docs
npm run docs:build
```

The output will be in `dist`.

## Notes

- Specs are wired in via local file inputs in `zudoku.config.tsx`
- No proprietary content, assets, or secrets are included
