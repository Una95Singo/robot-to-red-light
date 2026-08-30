// The contents of the visual guide's galleries, kept as data so the tab is
// layout and the sign library is drawing.

/** [SIGNS key, caption, render wide?] */
export type Tile = [string, string, boolean?];

/** [SA SIGNS key, US SIGNS key, caption, US wide?, SA wide?] */
export type Trans = [string, string, string, boolean?, boolean?];

export const T_SHAPES: Tile[] = [["stop", "Octagon = stop. Only ever stop."], ["yield", "Triangle = yield"], ["pennant", "Pennant = no passing zone", true], ["rr", "Round = railroad ahead"], ["school", "Pentagon = school"], ["cross", "Any diamond = warning"]];

export const T_COLOURS: Tile[] = [["dne", "Red = stop / prohibited"], ["cross", "Yellow = warning"], ["work", "Orange = work zone"], ["speed55", "White = the law"], ["guide", "Green = directions", true], ["service", "Blue = services"], ["rec", "Brown = recreation", true]];

export const T_WARN: Tile[] = [
  ["curve", "Curve"], ["winding", "Winding road"], ["chevron", "Sharp change of direction"], ["cross", "Crossroad"], ["sideroad", "Side road"], ["tee", "T ahead — road ends"],
  ["merge", "Traffic merges"], ["laneends", "Lane ends, merge left"], ["signal", "Signal ahead"], ["stopahead", "Stop sign ahead"], ["yieldahead", "Yield ahead"], ["divided", "Divided highway begins"],
  ["twoway", "Two-way traffic"], ["roundy", "Roundabout — note the spin"], ["ped", "Pedestrian crossing"], ["deer", "Deer crossing"], ["slippery", "Slippery when wet"], ["hill", "Steep hill"],
  ["lowclear", "Low bridge — NYC parkways"], ["deadend", "Dead end"], ["rr", "Railroad ahead"], ["crossbuck", "Crossbuck = the rails are here"],
];

export const T_LAW: Tile[] = [
  ["speed25", "NYC default: 25"], ["noturnred", "Red stays red for turns"], ["stophere", "Stop at this line on red"], ["oneway", "One way — find the arrow", true], ["dne", "Do not enter"], ["wrongway", "Wrong way — you ARE the hazard", true],
  ["nou", "No U-turn"], ["noleft", "No left turn"], ["donotpass", "Do not pass"], ["keepright", "Keep right of the island"], ["laneuse", "Lane arrows: left turn ONLY"], ["leftyield", "Left on green ball: yield first"],
  ["yieldpeds", "State law: yield in crosswalks"], ["hov", "HOV: 2+ people or stay out"],
];

export const T_PARK: Tile[] = [["noparking", "NO PARKING: drop people or goods, then go"], ["nostanding", "NO STANDING: people only, quickly"], ["nostopping", "NO STOPPING: nothing, ever"]];

export const T_GUIDE: Tile[] = [["guide", "Green: destinations & exits", true], ["interstate", "Interstate shield"], ["service", "Blue: gas, food, hospital"], ["rec", "Brown: parks & recreation", true]];

export const T_SIGNALS: Tile[] = [
  ["sigFlashRed", "Flashing red = stop sign: stop, then go"], ["sigFlashYellow", "Flashing yellow = slow, proceed with care"], ["sigGreenArrow", "Green arrow = protected turn — still yield to people crossing"],
  ["sigRedArrow", "Red arrow = no turn that way until it changes"], ["sigFlashYArrow", "Flashing yellow arrow = turn only after yielding to oncoming"], ["laneCtrl", "Red X = not your lane · yellow X = get out · green = go", true],
  ["pedWalk", "WALK: people have priority"], ["pedHand", "HAND: don't start — flashing = finish crossing"],
];

export const TR_WARN: Trans[] = [
  ["saCurve", "curve", "Warnings: the red triangle retires; the yellow diamond clocks in. Same job, new uniform."],
  ["saPed", "ped", "Pedestrians: people-warnings went yellow-green. The triangle's walker just moved into a diamond."],
  ["saSignal", "signal", "Signal ahead: identical intent, new shape."],
  ["saAnimal", "deer", "Animals: your kudu is now a white-tailed deer. Upstate at dusk, take it seriously."],
  ["saHill", "hill", "Steep hill: the black slope is the same idea; a truck on it is the US flavour."],
  ["saTwoWay", "twoway", "Two-way traffic: same arrows — often marks where a one-way ends."],
  ["saRail", "rr", "Railway: the fence triangle becomes a round yellow RR. Round only ever means rails."],
  ["saChildren", "school", "Children: the school pentagon replaces the triangle — and it's five-sided, unique to schools."],
  ["saSlippery", "slippery", "Slippery: same skidding car, different frame."],
  ["saSideRoad", "sideroad", "Side road: same T, tells you where traffic will join."],
  ["saRoundabout", "roundy", "Roundabouts: same idea, arrows literally reversed. Let the sign reset your spin."],
];

export const TR_CMD: Trans[] = [
  ["stop", "stop", "Stop: untouched across the Atlantic. A free mark."],
  ["saYield", "yield", "Yield: your old friend, now wearing its name."],
  ["saSpeed", "speed55", "Speed: the circle becomes plain white law — in MILES. 55 mph ≈ 88 km/h; NYC streets default to 25.", true],
  ["saNoEntry", "dne", "No entry: near-identical. Usually guards the wrong end of a one-way street."],
  ["saNoOvertake", "donotpass", "No overtaking: SA said it with two cars in a red circle. NY just writes it down."],
  ["saNoLeft", "noleft", "No left turn: same crossed arrow, moved from a red circle onto a white square."],
  ["saNoParking", "noparking", "No parking: the blue disc becomes NYC's red-on-white sign — and now it comes with hours and arrows."],
  ["saNoStopping", "nostopping", "No stopping: the red X disc becomes text. NY adds a middle rung: NO STANDING."],
  ["saKeepLeft", "keepright", "Keep left → keep right. Same bump in the road, opposite side."],
  ["saOneWay", "oneway", "One way: blue square becomes a black arrow. Find it before every turn in Manhattan.", true],
];

export const TR_GUIDE: Trans[] = [["saFreeway", "guide", "Guide signs: SA freeway blue becomes US green. Blue here means services, never directions.", true, true]];
