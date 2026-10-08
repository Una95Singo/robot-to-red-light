# Robot to Red Light

*("Robot" is what South Africans call a traffic light.)*

I learned to drive in South Africa. I'm now going through the process of getting
a licence in New York. This is the study guide I made for myself while preparing
for the written permit test.

**→ [drive.singolab.com](https://drive.singolab.com)**

See [CHANGELOG.md](CHANGELOG.md) for what's in the shipped release.

## The idea

My problem isn't that I don't know how to drive. It's that a lot of what I do
automatically is wrong here, some of it is still right, and the official manual
doesn't tell me which is which. It's written for people who have never driven at
all.

So this guide shows every rule twice: how it works in South Africa, and how it
works in New York. Then it says which of four things is going on.

- **Same rule.** Nothing changed. Trust what you already do.
- **Mirrored.** Same idea, but left and right swap over.
- **Rewired.** What you'd do by instinct is wrong here.
- **No SA version.** Nothing to compare it to, so learn it from scratch.

Out of 38 rules, 10 are the same, 8 are mirrored, 12 are rewired, and 8 are new.
Seven of them are marked as dangerous, meaning the old habit is the kind that
gets you hurt rather than just marked wrong. Those get their own page.

![A rule card showing yellow road markings. On the left, what it means in South
Africa. On the right, what it means in New York. Below, a drawing of a road with
yellow lines at the edges, and the same road with yellow lines down the
middle.](docs/rule-bridge.png)

## Why it's mostly pictures

I remember a drawing of a yellow line running down the middle of a road far
better than I remember a sentence telling me that yellow means oncoming traffic.
So anything that could be a picture became one: every road sign, the paint on
the road, and small overhead views of intersections showing which car goes
first.

The sign section puts the American sign next to the South African one it
replaces, because in a lot of cases the meaning is identical and only the shape
changed. A red triangle becomes a yellow diamond. Knowing that saves you
learning it twice.

![The sign gallery, showing US road signs arranged by shape and by
colour](docs/visual-guide.png)

## What's in it

- **Dashboard** — how ready you are in each topic, and a target date you set
- **Rule bridges** — the 38 rule cards, grouped into 8 topics
- **Visual guide** — 47 US road signs, 21 South African ones paired against them,
  plus traffic lights, road markings, and how to make each kind of turn
- **Danger zone** — just the seven rules where the old habit is dangerous
- **Practice test** — 90 questions. A full mock is marked the way the DMV marks
  it: 20 questions, 14 to pass, and at least 2 of the 4 sign questions right.
  There are also shorter drills on one topic at a time.
- **The route** — the four steps from permit to licence

It runs entirely in your browser. Your progress is saved on your own device, so
there's no account and no sign-in, and nothing you do is sent anywhere.

![A practice question with a road-marking picture, the right answer highlighted
in green, and the explanation underneath](docs/practice-test.png)

## Where the content came from, and how much to trust it

**An AI wrote this guide.** I described what I wanted and Claude produced the
rules, the explanations, the practice questions and the drawings.

I have not read all of it closely myself. It has had one review pass, which
found two mistakes and fixed them: a line about drink-driving that contradicted
the rule printed directly above it, and a trick for converting mph to km/h in
your head that gave the wrong answer. The code was checked too, so that every
picture a rule or a question asks for actually exists.

None of it has been checked against the official manual. So there is a real
chance something in here is out of date or simply wrong.

Use it to study. Don't use it to settle an argument. The
[NY State Driver's Manual](https://dmv.ny.gov/new-york-state-drivers-manual-practice-tests)
is the thing that's actually correct, and it's free. If you spot a mistake here,
please open an issue.

## How it's built

**The stack.** React 19, TypeScript, Vite and Tailwind CSS. One page, no
backend, no database, no API calls. `npm run build` turns it into a folder of
plain files that any web host can serve; this one is served by Cloudflare Pages.

**The drawings.** There are no image files in this project. Every sign and
diagram is SVG written out by hand in the code. A stop sign is an eight-sided
`<polygon>` filled red with the word STOP drawn on top of it. A road is a grey
rectangle with thin coloured rectangles for the paint and rounded rectangles for
the cars. The US signs copy the shapes and colours from the federal
[MUTCD](https://mutcd.fhwa.dot.gov/), the standard every American road sign is
built to, but they're drawn by eye rather than traced from the official
artwork.

Doing it this way means the pictures are a few kilobytes instead of a few
hundred, stay sharp at any size, and can be corrected by editing code rather
than reopening a design file. It also means a sign is reviewable in a pull
request like anything else.

The drawing code is in three layers:

- `graphics/tokens.ts` — the shared colours and fonts (road grey, line yellow)
- `graphics/primitives.tsx` — the pieces used over and over: the SVG frame, the
  yellow warning diamond, a car seen from above, an arrow, a pedestrian
- `graphics/signs.tsx` and `graphics/diagrams.tsx` — the actual signs and road
  scenes, collected into two lists called `SIGNS` and `DIAGRAMS`

A rule card asks for a drawing by name (`diagram: "yellowline"`) and a question
asks for a sign by name (`svg: "noleft"`). Both lists are keyed by plain strings,
so a misspelt name shows up as a missing picture rather than an error. Check the
page after adding one.

**The writing is kept separate from the drawing.** All the words live in
`data/bridges.ts` and `data/questions.ts`, and which signs appear in which
gallery lives in `components/tiles.ts`. The graphics files only draw. This is so
the guide's content can be corrected without touching any drawing code.

**Progress** is kept in the browser's `localStorage` under one key. Adding a new
field to it is safe; renaming one needs a new key, or people lose their history.

### Layout

```
src/
  App.tsx              the tabs, the dashboard, and progress saving
  data/
    bridges.ts         the 38 rule cards
    questions.ts       the 90 practice questions
  graphics/
    tokens.ts          shared colours and fonts
    primitives.tsx     reusable drawing pieces
    signs.tsx          every road sign
    diagrams.tsx       every road scene
  components/
    ui.tsx             badges, progress bars, tiles
    tiles.ts           which signs appear in which gallery
    SignsTab.tsx       the visual guide
    BridgeCard.tsx     one rule card
    Quiz.tsx           the practice tests
  lib/
    storage.ts         reading and writing progress
    utils.ts           shuffling, and the dashed-line background
```

### Running it

```
npm install
npm run dev        # http://localhost:5173
npm run build      # checks the types, then builds into dist/
```

Node is installed via Homebrew here. If `node` or `npm` aren't found, run
`export PATH="/opt/homebrew/bin:$PATH"` first.

### Deploying

Cloudflare Pages, as its own project. Build command `npm run build`, output
directory `dist`, no environment variables. The domain `drive.singolab.com`
points at it. My personal site [singolab.com][site] is a separate project that
links here.

[site]: https://github.com/Una95Singo/singolab-com

## Licence

MIT, so you can do what you like with it. If you learned to drive somewhere else
and want to rewrite the South African half for your own country, that's the most
useful thing anyone could do with this.
