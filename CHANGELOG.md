# Changelog

Notable changes to Robot to Red Light. The guide is shipped and live at
[drive.singolab.com](https://drive.singolab.com), deployed as a static build on
Cloudflare Pages.

## [1.0.0] — 2026-08-31

First public release.

**Content**
- 38 rule bridges across 8 topics: every rule shown twice (South Africa vs New
  York) and tagged Same / Mirrored / Rewired / New
- 90 practice questions, including 32 road-sign questions
- Full mock test marked the way the DMV marks it: 20 questions, 14 to pass,
  with at least 2 of 4 sign questions right — plus shorter per-topic drills
- Visual guide: 47 US road signs with 21 South African pairings, traffic
  lights, road markings, and turn diagrams
- Danger zone: the 7 rules where the old habit is dangerous, on their own page
- The route: the 4 steps from permit to licence

**App**
- Dashboard with per-topic readiness and a target date you set
- Progress saved in the browser (`localStorage`): no account, no sign-in,
  nothing sent anywhere
- Every sign and diagram hand-written as SVG in code — no image files, sharp
  at any size, reviewable in a pull request

**Content accuracy**
- One review pass found and fixed two mistakes: a drink-driving line that
  contradicted the rule printed directly above it, and an mph→km/h mental
  conversion trick that gave the wrong answer.
- Not checked cover-to-cover against the official NY State Driver's Manual.
  Use it to study, not to settle arguments. If you spot a mistake, please open
  an issue.
