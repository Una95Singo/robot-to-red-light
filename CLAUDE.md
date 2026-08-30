# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is

**Robot to Red Light** — a single-page study guide for the New York State
permit test, aimed at drivers trained on South African roads. Vite + React 19 +
TypeScript + Tailwind v3, built to static files in `dist/`. No router, no
server, no data fetching: it is one client-side app with `localStorage`.

It is a **companion project to [singolab.com](https://github.com/Una95Singo/singolab-com)**,
deployed as its own Cloudflare Pages project at `drive.singolab.com` and linked
from that site's Projects section. The two repos deploy independently.

`README.md` carries the structure map, the two editing conventions, and the
deploy settings — read it first.

## Commands

```
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc --noEmit && vite build -> dist/
npm run typecheck
```

Node is via Homebrew; if `node`/`npm` aren't found, prefix with
`export PATH="/opt/homebrew/bin:$PATH"`.

## Things that span files

- **`SIGNS` and `DIAGRAMS` are string-keyed lookups** (`Record<string,
  ReactElement>`), so a wrong key is a blank space at runtime, not a compile
  error. After adding a bridge with a `diagram` or a question with an `svg`,
  load the page and confirm the picture appears.
- **`Object.assign` extends both lookups** further down their own module. Keep
  additions in the same file so module evaluation order stays trivial:
  `diagrams.tsx` imports `SIGNS`, never the reverse.
- **Progress shape is versioned by the storage key** (`robot-to-redlight-v1` in
  `lib/storage.ts`). `loadProgress` spreads over `blank()`, so *adding* an
  optional field is safe; renaming or repurposing one needs a new key.
- **The question bank's field names are terse and easy to swap**: `c` is the
  choices array, `a` is the *index* of the correct choice, `x` is the
  explanation, `sign: true` opts a question into the mock test's separate
  road-sign bar.
- **Motion is gated behind `prefers-reduced-motion: reduce`** in `index.css`.
  Honor that for anything new.
- **Fonts are self-hosted** via `@fontsource` — no external font requests at
  runtime. Don't reintroduce a Google Fonts `@import`.

## Content accuracy

The guide teaches the NY State Driver's Manual as tested. Do not invent rules,
figures, or fees. If a rule can't be sourced, leave it out rather than
approximating — a wrong number here costs someone a test.

## This repo is public

Do not commit secrets or personal contact details. The guide is written in
second person for any South African driver making the crossing; keep new copy
in that register rather than making it about one person.
