# Robot to Red Light

**Experience is an asset everywhere except the places where it quietly lies to
you.**

A driver trained in South Africa arriving in New York doesn't have a knowledge
problem, they have an interference problem. The reflex to check right first,
when the near lane now comes from the left. The yellow line that meant *edge of
the road* for a decade and here means *oncoming traffic*. The turn that crosses
traffic swapping sides. None of that is in the manual, because the manual is
written for people who have never driven.

So this guide starts from the other end. Every rule arrives as a bridge from a
habit you already own, and says plainly whether that habit survives the
crossing.

**→ [drive.singolab.com](https://drive.singolab.com)**

![A rule bridge: what you know in South Africa on the left, the New York rule on
the right, and a diagram showing yellow paint moving from the edges of the road
to the middle](docs/rule-bridge.png)

## The four verdicts

Every rule carries one, because "what changed?" is the only question an
experienced driver actually needs answered.

| Verdict | Meaning |
| --- | --- |
| **SAME RULE** | Trust your instinct — it transfers unchanged |
| **MIRRORED** | Same logic, flipped left ↔ right |
| **REWIRED** | Your trained reflex gives the *wrong* answer here |
| **NO SA VERSION** | Nothing to transfer — learn it fresh |

Across the 38 cards that comes out at 10 **same**, 8 **mirrored**, 12
**rewired**, and 8 with **no SA version**. A separate flag marks the seven
cards — spread across all four verdicts — where a trained reflex is most likely
to produce the wrong answer under pressure. Those get their own **Danger zone**
tab, and they're the reason the project exists.

## What's in it

- **Dashboard** — readiness per category, and a target test date you set
- **Rule bridges** — 38 cards across 8 categories, each with a diagram and an
  intuition hook
- **Visual guide** — 47 US signs drawn to the MUTCD spec, with 21 South African
  counterparts paired against them in a translation gallery, plus traffic
  signals, road paint, and turn geometry
- **Danger zone** — only the bridges where experience actively misleads
- **Practice test** — mocks scored exactly like the DMV's (20 questions, 14 to
  pass, *and* at least 2 of the 4 road-sign questions — both bars or no permit),
  plus short drills by category, from a bank of 90
- **The route** — the four steps from permit to licence

![The visual guide's sign gallery: six shapes that are the answer, the colour
code, and the yellow warning diamonds](docs/visual-guide.png)

Every figure is hand-drawn SVG — 88 signs, signal heads and road-marking
thumbnails, plus 33 top-down road scenes, and not one image file in the bundle.
Progress lives in `localStorage`: no account, no server, nothing leaves the
browser.

![A mock test question showing a road-marking diagram, the correct answer
highlighted, and the explanation framed as a bridge](docs/practice-test.png)

> **This is not the DMV.** It teaches the New York State Driver's Manual as
> tested, but rules, fees and cutoffs drift. Confirm anything that matters at
> [dmv.ny.gov](https://dmv.ny.gov) before you book.

## Running it

```
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + static build into dist/
npm run typecheck
```

Node is via Homebrew; if `node`/`npm` aren't found, prefix with
`export PATH="/opt/homebrew/bin:$PATH"`.

## Structure

React 19 + TypeScript + Vite + Tailwind. One client-side page, no router, no
backend.

```
src/
  App.tsx              tabs, dashboard, readiness maths, progress plumbing
  data/
    bridges.ts         VERDICTS, CATS, and the 38 bridge cards
    questions.ts       the question bank (c = choices, a = correct index)
  graphics/
    tokens.ts          type families and the road palette
    primitives.tsx     shared SVG frames, road furniture, and glyphs
    signs.tsx          the sign library -> SIGNS lookup
    diagrams.tsx       top-down road scenes -> DIAGRAMS lookup
  components/
    ui.tsx             badges, bars, tiles, card frames
    tiles.ts           the visual guide's gallery contents, as data
    SignsTab.tsx       the visual guide
    BridgeCard.tsx     one rule bridge
    Quiz.tsx           mock tests and drills
  lib/
    storage.ts         localStorage progress, versioned by key
    utils.ts           shuffle, the dashed centre-line background
```

Two conventions worth knowing before editing:

- **`SIGNS` and `DIAGRAMS` are lookups keyed by string.** A bridge card names a
  diagram (`diagram: "yellowline"`), a question names a sign (`svg: "noleft"`).
  Both are `Record<string, ReactElement>`, so a typo is a missing picture rather
  than a type error — load the page and check.
- **Drawings are data, not layout.** Anything that reads as content — which
  signs appear in which gallery, which caption belongs to which — lives in
  `data/` or `components/tiles.ts`. The graphics modules only draw.

## Deploying

Cloudflare Pages, as its own project:

- Build command: `npm run build`
- Build output directory: `dist`
- No environment variables, no server runtime

Then point `drive.singolab.com` at it under **Custom domains**. The apex
`singolab.com` is a separate Pages project ([singolab-com][site]) that links
here from its Projects section; the two deploy independently.

[site]: https://github.com/Una95Singo/singolab-com

## Licence

MIT — see [LICENSE](LICENSE). Fork it, translate the bridges for whatever
country you learned to drive in, ship it.
