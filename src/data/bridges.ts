// The verdict system, the category list, and the bridge cards themselves:
// each card maps an instinct trained on South African roads onto the New York
// rule, and says whether that instinct survives the crossing.

export type Verdict = 'same' | 'mirrored' | 'different' | 'new';

export type Bridge = {
  id: string;
  cat: string;
  v: Verdict;
  title: string;
  za: string;
  ny: string;
  hook: string;
  danger?: boolean;
  diagram?: string;
  tip?: string;
};

export const VERDICTS: Record<Verdict, { label: string; sub: string; badge: string; ring: string }> = {
  same:     { label: "SAME RULE",     sub: "Trust your instinct",   badge: "bg-emerald-700 text-white",  ring: "border-emerald-700" },
  mirrored: { label: "MIRRORED",      sub: "Flip left \u2194 right", badge: "bg-blue-700 text-white",     ring: "border-blue-700" },
  different:{ label: "REWIRED",       sub: "Override the habit",    badge: "bg-red-600 text-white",      ring: "border-red-600" },
  new:      { label: "NO SA VERSION", sub: "Learn it fresh",        badge: "bg-amber-400 text-zinc-900", ring: "border-amber-400" },
};

export const CATS: string[] = [
  "Orientation",
  "Lines & lanes",
  "Intersections",
  "Speed & numbers",
  "Signs & signals",
  "Parking & the city",
  "Sober, belted, offline",
  "Only in America",
];

export const BRIDGES: Bridge[] = [
  // ORIENTATION
  { id: "side", cat: "Orientation", v: "mirrored", danger: true, title: "Which side of the road",
    za: "Drive on the left, steer from the right seat. Years of muscle memory.",
    ny: "Drive on the right, steer from the left seat.",
    hook: "One thing never changes: the driver sits beside the centre line. If the middle of the road is at your shoulder, you're in the correct lane." },
  { id: "lookleft", cat: "Orientation", v: "mirrored", danger: true, diagram: "lookleft", title: "Where danger comes from",
    za: "Pulling out or crossing, the nearest traffic arrives from your RIGHT.",
    ny: "The nearest lane comes from your LEFT. Check left, then right, then left again before you roll.",
    hook: "Your head-check habit is pointed the wrong way. Rebuild it deliberately: near side first \u2014 and the near side is now the left." },
  { id: "overtake", cat: "Orientation", v: "mirrored", diagram: "broken", title: "Overtaking side",
    za: "Pass on the right; keep left except to overtake.",
    ny: "Pass on the LEFT; slower traffic keeps right.",
    hook: "In both countries you overtake on the centre-line side. The invariant survives \u2014 only the geography flipped." },
  { id: "dictionary", cat: "Orientation", v: "different", title: "The dictionary",
    za: "Robots, circles, indicators, boot, bonnet, bakkie, petrol, hooter, pavement.",
    ny: "Traffic signals, roundabouts, turn signals, trunk, hood, pickup, gas, horn, sidewalk. Careful: 'pavement' here means the road surface itself.",
    hook: "The manual says 'signal' where you'd say 'indicate'. And never tell an examiner you'll pull onto the pavement." },

  // LINES & LANES
  { id: "yellow", cat: "Lines & lanes", v: "different", danger: true, diagram: "yellowline", title: "Yellow lines",
    za: "Yellow paints the road EDGE. Drifting onto the yellow line so someone can pass is good manners on the N1.",
    ny: "Yellow separates traffic moving in OPPOSITE directions. Cross a yellow line and you may be facing oncoming cars.",
    hook: "Flip the map: in NY, yellow lives in the MIDDLE of the road and white lives at the edges. Yellow means someone may be coming straight at you.",
    tip: "The single most dangerous habit transfer on this list \u2014 and a test favourite. Your SA instinct gives the wrong answer." },
  { id: "white", cat: "Lines & lanes", v: "different", diagram: "lanelines", title: "White lines",
    za: "White does everything: it splits oncoming traffic and same-direction lanes alike.",
    ny: "White only separates lanes moving in the SAME direction, and marks the right edge of the road.",
    hook: "New colour code: white = friends going your way, yellow = strangers coming at you." },
  { id: "brokensolid", cat: "Lines & lanes", v: "same", diagram: "yourside", title: "Broken vs solid",
    za: "Broken line: cross when safe. Solid line: stay in your lane.",
    ny: "Exactly the same logic. Broken is crossable, solid is not; with a paired line, obey the one on your side.",
    hook: "The dashes still mean what they've always meant. Only the colours moved house." },
  { id: "turnlane", cat: "Lines & lanes", v: "new", diagram: "turnlane", title: "The shared turning lane",
    za: "No equivalent exists.",
    ny: "A centre lane bordered by solid-and-broken yellow on both sides is a two-way LEFT-turn lane. Enter it only to begin a left turn \u2014 never to travel or pass.",
    hook: "Think of it as a waiting room in the middle of the road, shared by both directions." },

  // INTERSECTIONS
  { id: "fourway", cat: "Intersections", v: "same", diagram: "fourway", title: "Four-way stops",
    za: "First to stop, first to go \u2014 the national sport.",
    ny: "Identical: first to arrive goes first. Arrive together, and you yield to the vehicle on your RIGHT.",
    hook: "Every dead robot you've ever negotiated during load-shedding was NY permit-test practice." },
  { id: "darkrobot", cat: "Intersections", v: "same", title: "Dead traffic lights",
    za: "Robot out? Treat it as a four-way stop.",
    ny: "Same rule: a dark or broken signal is treated as a stop sign in every direction.",
    hook: "Eskom accidentally trained you for the New York driver's manual." },
  { id: "turnacross", cat: "Intersections", v: "mirrored", diagram: "leftturn", title: "Turning across traffic",
    za: "Your RIGHT turn crosses oncoming traffic, so right-turners give way.",
    ny: "Your LEFT turn crosses oncoming traffic. Left-turners must yield to oncoming vehicles.",
    hook: "Same rule, reflected: the turn toward the FAR side of the road always gives way." },
  { id: "nearestlane", cat: "Intersections", v: "mirrored", diagram: "rightturn", title: "Finish in the nearest lane",
    za: "A left turn ends in the left-most lane.",
    ny: "A right turn ends in the right-most lane; a left turn ends just right of the centre line.",
    hook: "Hug the kerb you started from. The kerb just switched sides." },
  { id: "roundabout", cat: "Intersections", v: "mirrored", danger: true, diagram: "roundabout", title: "Roundabouts",
    za: "Clockwise. Yield to circulating traffic, which arrives from your right. Mini-circles: first come, first served.",
    ny: "COUNTER-clockwise. Slow on approach and yield to traffic already in the circle \u2014 it now arrives from your LEFT.",
    hook: "Same courtesy, opposite rotation. Whoever is already in the circle owns it, in both hemispheres." },
  { id: "redturn", cat: "Intersections", v: "new", danger: true, diagram: "noturnred", title: "Turning on red",
    za: "Never. Red means red, full stop.",
    ny: "In NYC: also never, unless a sign says you may \u2014 your home instinct is correct here. Outside NYC, a RIGHT on red is allowed after a complete stop unless a sign prohibits it.",
    hook: "Your instinct protects you in the five boroughs. The written test, though, asks about the statewide rule too \u2014 know both halves.",
    tip: "Classic question pair: statewide = allowed after a full stop; NYC = prohibited unless signed." },
  { id: "uncontrolled", cat: "Intersections", v: "same", diagram: "uncontrolled", title: "Uncontrolled intersections",
    za: "No signs, no robot? Yield to the vehicle on your right.",
    ny: "Same: yield to the driver on your right, and always to anyone already in the intersection.",
    hook: "One of the few right-hand reflexes you get to keep." },
  { id: "sirens", cat: "Intersections", v: "mirrored", danger: true, title: "Sirens & the Move Over Law",
    za: "Emergency vehicle behind you? Pull to the LEFT and stop.",
    ny: "Pull to the RIGHT edge and stop. And NY's Move Over Law: passing ANY stopped vehicle showing flashing or hazard lights, slow down and move over a lane if you safely can.",
    hook: "Blue lights, same respect, opposite kerb. The Move Over half has no SA equivalent \u2014 learn it fresh." },

  // SPEED & NUMBERS
  { id: "units", cat: "Speed & numbers", v: "different", title: "The units",
    za: "km/h. 60 in town, 100 rural, 120 on the freeway.",
    ny: "mph. Feel it by multiplying by 1.6: 25 mph \u2248 40 km/h, 55 mph \u2248 88, 65 mph \u2248 105.",
    hook: "Quick trick: mph plus half again \u2248 km/h. 30 mph \u2192 about 48." },
  { id: "nycspeed", cat: "Speed & numbers", v: "different", diagram: "speed25show", title: "NYC's default limit",
    za: "Urban default 60 km/h \u2014 about 37 mph.",
    ny: "NYC's default is 25 mph (\u224840 km/h) unless posted, and many streets are now signed 20 under Sammy's Law. School zones slower still.",
    hook: "NYC's legal street pace is slower than a quiet Joburg suburb \u2014 and school-zone cameras run 24/7, ticketing from 11 mph over." },
  { id: "statespeed", cat: "Speed & numbers", v: "different", diagram: "speed55show", title: "NY State defaults",
    za: "Freeway 120 km/h \u2014 about 75 mph.",
    ny: "55 mph unless posted; some rural interstates run 65. That's roughly 88\u2013105 km/h.",
    hook: "Everything here is slower than home. Recalibrate what 'normal' feels like before the road test." },
  { id: "following", cat: "Speed & numbers", v: "same", title: "Following distance",
    za: "K53's two-second rule.",
    ny: "Same idea: at least 2 seconds behind in ideal conditions, stretching to 3\u20134 in rain, snow, or heavy traffic.",
    hook: "Count it off a lamppost exactly the way your K53 instructor made you." },

  // SIGNS & SIGNALS
  { id: "warningshape", cat: "Signs & signals", v: "different", diagram: "shapeshift", title: "Warning signs changed shape",
    za: "Warnings are triangles with red borders.",
    ny: "Warnings are YELLOW DIAMONDS with black symbols.",
    hook: "Rewire the silhouette: diamond = danger ahead.",
    tip: "4 of your 20 test questions are sign questions, and you must get at least 2 right \u2014 signs are worth over-studying." },
  { id: "stopyield", cat: "Signs & signals", v: "same", diagram: "stopyieldsigns", title: "Stop & yield",
    za: "Red octagon to stop; point-down triangle to yield.",
    ny: "Identical shapes, identical meanings.",
    hook: "Two free marks waiting for you in the sign section." },
  { id: "signcolours", cat: "Signs & signals", v: "different", title: "The colour code",
    za: "Blue circles command, red rings prohibit.",
    ny: "US palette: yellow = warning, orange = roadwork, red = stop or prohibition, green = directions, blue = motorist services, brown = parks, white rectangles = the actual law.",
    hook: "Memorise the palette like a paint chart \u2014 colour alone answers half the sign questions." },
  { id: "newshapes", cat: "Signs & signals", v: "new", diagram: "newshapes", title: "Shapes that don't exist at home",
    za: "\u2014",
    ny: "A sideways pennant = NO PASSING ZONE. A round yellow sign = railroad crossing ahead. A pentagon = school zone or crossing.",
    hook: "Three silhouettes to file from scratch: pennant, circle, pentagon." },
  { id: "flashing", cat: "Signs & signals", v: "new", diagram: "flashing", title: "Flashing lights",
    za: "Rare on SA roads.",
    ny: "Flashing RED = treat it as a stop sign. Flashing YELLOW = slow down and proceed with caution.",
    hook: "Flashing red is a robot doing a stop sign impression." },

  // PARKING & THE CITY
  { id: "parknumbers", cat: "Parking & the city", v: "different", diagram: "parkzones", title: "The magic parking numbers",
    za: "Similar keep-clear ideas, different figures.",
    ny: "Memorise the feet: 15 from a fire hydrant, 20 from a crosswalk at an intersection, 30 from a stop sign or signal, 50 from a railroad crossing.",
    hook: "15 \u2013 20 \u2013 30 \u2013 50. Hydrant, crosswalk, stop sign, railroad. Say it like a phone number.",
    tip: "These exact numbers are permit-test favourites." },
  { id: "hills", cat: "Parking & the city", v: "same", diagram: "hillpark", title: "Parking on hills",
    za: "K53 taught you to kerb your wheels.",
    ny: "Same logic: downhill \u2192 wheels toward the curb. Uphill with a curb \u2192 wheels away from it. No curb \u2192 toward the road edge. Parking brake always.",
    hook: "Picture the car rolling: you want it to bump the kerb, not the traffic." },
  { id: "pedestrians", cat: "Parking & the city", v: "same", diagram: "crosswalk", title: "Pedestrians",
    za: "Zebra crossings exist\u2026 in theory.",
    ny: "The rule you learned is the rule here \u2014 New York just means it. Yield to pedestrians in crosswalks, marked or unmarked, every time.",
    hook: "Same law, ten times the enforcement, a hundred times the pedestrians." },
  { id: "nycfolk", cat: "Parking & the city", v: "new", diagram: "bikebus", title: "NYC folklore (life, not the test)",
    za: "\u2014",
    ny: "Alternate-side parking rules the week. Double parking is illegal even though the whole city does it. Bus lanes and school zones have cameras.",
    hook: "Not really on the permit test \u2014 very much on the living-here test." },

  // SOBER, BELTED, OFFLINE
  { id: "bac", cat: "Sober, belted, offline", v: "different", title: "Drink-driving lines",
    za: "Legal limit: 0.05 g per 100 ml.",
    ny: "0.08 BAC = DWI. But 0.05\u20130.07 already counts as DWAI, a lesser offence. Under 21, Zero Tolerance starts at 0.02.",
    hook: "Your SA limit sits exactly where NY's 'impaired' charge begins. Keep the home standard and you're safe on both tests." },
  { id: "phones", cat: "Sober, belted, offline", v: "same", title: "Phones",
    za: "Handheld use banned; enforcement patchy.",
    ny: "Same ban, real teeth: handheld use or texting costs 5 points plus a fine, and NY enforces it hard.",
    hook: "Same rule you know \u2014 priced like a serious offence." },
  { id: "points", cat: "Sober, belted, offline", v: "new", title: "Points on your licence",
    za: "AARTO demerits: legislated, forever 'launching soon'.",
    ny: "Live and running: 11 points inside 18 months = suspension. Speeding alone is worth 3\u201311 points depending on how far over.",
    hook: "The demerit system SA keeps promising has been operating here for decades." },
  { id: "belts", cat: "Sober, belted, offline", v: "same", title: "Seatbelts",
    za: "Belt up, front and back.",
    ny: "Same, zero exceptions: every seat, every age. The driver answers for any passenger under 16.",
    hook: "Nothing to relearn \u2014 just no taxi-style exceptions." },

  // ONLY IN AMERICA
  { id: "schoolbus", cat: "Only in America", v: "new", danger: true, diagram: "schoolbus", title: "School buses",
    za: "No equivalent law exists.",
    ny: "A stopped school bus with flashing red lights means EVERYONE stops, both directions \u2014 in New York even on a divided highway. Stay stopped until the lights stop. First offence: $250\u2013$400 and 5 points.",
    hook: "The most-tested rule with zero SA analogue. When the yellow bus blinks red, the whole road freezes.",
    tip: "NY is stricter than most states here \u2014 divided highway does NOT excuse you. Expect this on the test." },
  { id: "railroad", cat: "Only in America", v: "different", diagram: "rrmarks", title: "Railroad crossings",
    za: "Level crossings exist, but the rules are looser.",
    ny: "When lights flash or gates drop, stop 15\u201350 ft back. Never stop, change gear, or let yourself get boxed in ON the tracks.",
    hook: "Treat the rails like a robot that's always about to turn red." },
  { id: "winter", cat: "Only in America", v: "new", title: "Winter",
    za: "Joburg hail, at worst.",
    ny: "Snow, black ice, skids. The skid answer: ease off both pedals and steer where you WANT the car to go. Bridges and overpasses freeze first.",
    hook: "A genre of driving you've never done. The test asks about it; February will too." },
  { id: "wipers", cat: "Only in America", v: "different", title: "Wipers on, lights on",
    za: "Headlights at night, obviously.",
    ny: "NY law: headlights on whenever your wipers run for weather \u2014 plus sunset to sunrise and any time you can't see 1,000 ft.",
    hook: "If the wipers are working, the lights are working. Chant it." },
  { id: "handsignals", cat: "Only in America", v: "mirrored", diagram: "handsignals", title: "Hand signals",
    za: "K53 drilled right-arm signals.",
    ny: "Same signals, LEFT arm out the window: straight out = left turn, bent up = right turn, pointed down = slow or stop.",
    hook: "Your K53 arm, mirrored. Out-up-down still means left-right-stop.",
    tip: "A near-guaranteed test question." },
];
