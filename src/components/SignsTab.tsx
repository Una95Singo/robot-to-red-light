import { useState } from 'react';
import { SectionLabel, TransRow, Tiles, VisCard } from './ui';
import { T_SHAPES, T_COLOURS, T_WARN, T_LAW, T_PARK, T_GUIDE, T_SIGNALS, TR_WARN, TR_CMD, TR_GUIDE } from './tiles';
import {
  MkYellowP, MkBrokenP, MkSolidP, MkYourSideP, MkEdgesP, MkStopLinesP, MkCrosswalkP,
  MkTurnLaneS, MkBikeS, MkBusS, MkHovS, MkRRS, MkKerbP,
  RightTurnD, LeftTurnD, LeftTwoWayD, LeftOneWayD, RedTurnsD, FourWayD, RoundaboutD,
  UncontrolledD, Signal100D, UturnD, ThreePointD, BikeTurnD,
} from '../graphics/diagrams';

// Everything on the test that is really a picture: signs, signals, road paint
// and turn geometry, each next to the South African version of itself.

export default function SignsTab() {
  const [sec, setSec] = useState<string>("signs");
  const PILLS: [string, string][] = [["signs", "Signs"], ["signals", "Signals"], ["marks", "Markings"], ["turns", "Turn rules"]];
  return (
    <div>
      <div className="bg-zinc-900 text-white p-5 mb-3">
        <h2 className="font-display text-3xl mb-1">Visual guide</h2>
        <p className="text-sm text-zinc-300 leading-relaxed">
          Everything on the test that is really a <span className="text-amber-400 font-bold">picture</span>: signs, signals, paint on the road, and turn geometry —
          each one next to what your hands already know from home.
        </p>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-3 mb-1">
        {PILLS.map(([id, label]) => (
          <button key={id} onClick={() => setSec(id)}
            className={`px-3 py-1.5 text-xs font-bold whitespace-nowrap border transition-colors ${
              sec === id ? "bg-zinc-900 border-zinc-900 text-white" : "bg-white border-zinc-300 text-zinc-600 hover:border-zinc-900"}`}>
            {label}
          </button>
        ))}
      </div>

      {sec === "signs" && (
        <div>
          <p className="text-sm text-zinc-500 mb-2">
            SA signs speak Vienna Convention: red triangles warn, red circles command. The US speaks in <span className="font-bold">shape and colour</span> —
            often the silhouette alone is the answer. With <span className="font-bold">2 of 4 sign questions</span> required to pass, this page pays rent.
          </p>
          <SectionLabel>Six shapes that are the answer</SectionLabel><Tiles items={T_SHAPES} />
          <SectionLabel>The colour code</SectionLabel><Tiles items={T_COLOURS} cols="grid-cols-3 sm:grid-cols-7" />
          <SectionLabel>Warnings — yellow diamonds</SectionLabel><Tiles items={T_WARN} />
          <SectionLabel>The law, spelled out</SectionLabel><Tiles items={T_LAW} />
          <SectionLabel>NYC's parking ladder</SectionLabel>
          <Tiles items={T_PARK} cols="grid-cols-3" />
          <p className="text-xs text-zinc-600 mt-2">Each rung forbids more than the last. SA's kerb lines never made you learn a ladder — NYC's poles will.</p>
          <SectionLabel>Guidance</SectionLabel><Tiles items={T_GUIDE} cols="grid-cols-2 sm:grid-cols-4" />
          <SectionLabel>Translation gallery · warnings</SectionLabel>
          {TR_WARN.map(([za, us, cap, wide]) => <TransRow key={za} za={za} us={us} cap={cap} wide={wide} />)}
          <SectionLabel>Translation gallery · commands</SectionLabel>
          {TR_CMD.map(([za, us, cap, wide]) => <TransRow key={za} za={za} us={us} cap={cap} wide={wide} />)}
          <SectionLabel>Translation gallery · directions</SectionLabel>
          {TR_GUIDE.map(([za, us, cap, wide, zaWide]) => <TransRow key={za} za={za} us={us} cap={cap} wide={wide} zaWide={zaWide} />)}
        </div>
      )}

      {sec === "signals" && (
        <div>
          <p className="text-sm text-zinc-500 mb-2">Robots, translated. The colours mean what they meant at home — the arrows and the flashing modes are where NY adds vocabulary.</p>
          <SectionLabel>Read the head</SectionLabel><Tiles items={T_SIGNALS} cols="grid-cols-2 sm:grid-cols-4" />
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            <div className="bg-emerald-50 border border-emerald-100 p-3">
              <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide mb-1">Same as home</p>
              <p className="text-sm text-zinc-700 leading-relaxed">Dead signal = treat it as an all-way stop. Flashing red = stop sign. Flashing yellow = caution. Steady yellow = stop if you safely can; don't gun it.</p>
            </div>
            <div className="bg-zinc-900 p-3">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wide mb-1">New here</p>
              <p className="text-sm text-zinc-100 leading-relaxed">A steady red in NYC forbids the right turn entirely. A green ball with a LEFT TURN YIELD sign means unprotected — oncoming traffic wins. Lane-control X's flip lanes on the bridges and tunnels into Manhattan.</p>
            </div>
          </div>
        </div>
      )}

      {sec === "marks" && (
        <div>
          <p className="text-sm text-zinc-500 mb-4">Paint is where your instincts are most wrong: the colour that meant "edge" your whole driving life now means "oncoming". Every pair below is drawn in the same language — ZA green on top, NY amber below.</p>
          <VisCard t="Yellow means oncoming" v="different" take="The single most dangerous transfer on the test. In NY the yellow line is the spine of the road, and the far side of it belongs to cars coming at you."><MkYellowP /></VisCard>
          <VisCard t="Broken centre line" v="same" take="Passing is allowed when the way is clear — exactly your overtaking rule. Only the colour changed."><MkBrokenP /></VisCard>
          <VisCard t="Solid centre line" v="same" take="Solid means don't cross. NY doubles it — two solid yellows — to say neither direction may pass."><MkSolidP /></VisCard>
          <VisCard t="The line on your side governs" v="same" take="Solid on your side: you stay put. Broken on your side: you may pass. Identical logic to home, now painted yellow."><MkYourSideP /></VisCard>
          <VisCard t="Edge lines on divided roads" v="different" take="On a one-way roadway NY paints the LEFT edge yellow and the RIGHT edge white. If yellow is on your left and white on your right, you're on the correct side of a divided road."><MkEdgesP /></VisCard>
          <VisCard t="Stop and yield lines" v="different" take="The stop line is the same solid bar. NY's yield line is a row of white triangles — shark teeth — that point at you. Stop before the bar, slow before the teeth."><MkStopLinesP /></VisCard>
          <VisCard t="Crosswalks" v="same" take="Zebra or two white lines, the rule is the rule: stop before it, and a turning car yields to pedestrians even on a green light."><MkCrosswalkP /></VisCard>
          <VisCard t="Two-way left turn lane" v="new" take="The centre lane on many NY roads is a shared left-turn pocket for BOTH directions. Enter it only to turn left — never to pass or to get ahead."><MkTurnLaneS /></VisCard>
          <VisCard t="Bike lanes" v="new" take="NYC has hundreds of miles of them. Never drive or park in one; when you must cross it to turn or park, do it where the line is dashed, after yielding to cyclists."><MkBikeS /></VisCard>
          <VisCard t="Bus lanes" v="new" take="Red paint is camera-enforced. Regular cars stay out during posted hours except to make the next right turn or reach a driveway — and then get out."><MkBusS /></VisCard>
          <VisCard t="Diamond lanes" v="new" take="A painted diamond marks a restricted lane — usually HOV (2+ or 3+ people) or buses. The sign tells you who qualifies and when."><MkHovS /></VisCard>
          <VisCard t="Railroad markings" v="new" take="A giant painted X and RR warn you; the stop line sits back from the rails on purpose. If a train is coming, stop 15–50 ft from the nearest rail and never stop ON the tracks."><MkRRS /></VisCard>
          <VisCard t="Kerbs and parking" v="different" take="At home the painted kerb line told you whether you could stop. NYC's kerbs are mostly unpainted — the rules hang on the pole, stacked, with hours and arrows. Read every sign on the pole before you leave the car."><MkKerbP /></VisCard>
        </div>
      )}

      {sec === "turns" && (
        <div>
          <p className="text-sm text-zinc-500 mb-4">Turn geometry is where mirrored habits bite: which lane you leave from, which lane you land in, and who you owe a yield. Amber car is you.</p>
          <VisCard t="Right turn: hug the kerb" v="mirrored" take="From the right lane, close to the kerb, into the nearest lane — the mirror of your curb-hugging SA left turn. Don't swing wide into the far lane."><RightTurnD /></VisCard>
          <VisCard t="Left turn vs oncoming" v="mirrored" take="The turn that crosses traffic now goes LEFT. Yield to oncoming vehicles before you commit — the mirror of your SA right turn."><LeftTurnD /></VisCard>
          <VisCard t="Left turn geometry" v="mirrored" take="Leave from the lane nearest the centre line and land in the lane nearest the centre line on the new road. Square the turn — cutting the corner drives you through oncoming lanes."><LeftTwoWayD /></VisCard>
          <VisCard t="Left onto a one-way" v="new" take="Turning left onto a one-way street, land in its LEFT lane — the near one. From one-way to one-way: left lane to left lane. Find the arrow first."><LeftOneWayD /></VisCard>
          <VisCard t="Turns on red" v="new" take="Three rules the test loves: no right on red inside NYC unless a sign allows; statewide right on red after a full stop unless a sign forbids; and statewide left on red from a one-way onto a one-way — never in NYC."><RedTurnsD /></VisCard>
          <VisCard t="Four-way stop" v="same" take="First to arrive goes first; arrive together and the car on the right rolls first. Load-shedding trained you for this."><FourWayD /></VisCard>
          <VisCard t="Roundabouts" v="mirrored" take="Yield to traffic already in the circle — same courtesy as home — but circulate counter-clockwise, and the traffic you're yielding to arrives from your LEFT."><RoundaboutD /></VisCard>
          <VisCard t="T-junctions and uncontrolled corners" v="same" take="At a T, the through road has the right of way. At an uncontrolled crossroads, yield to the vehicle on your right. Leaving a driveway or private road, you yield to everyone."><UncontrolledD /></VisCard>
          <VisCard t="Signal 100 feet before" v="different" take="SA says signal in good time. NY writes down a number: at least 100 ft (30 m) before the turn — roughly seven car lengths in town."><Signal100D /></VisCard>
          <VisCard t="U-turns" v="different" take="Only from the lane nearest the centre, only where you can be seen 500 ft in both directions — never over a hill or on a curve, never on an expressway, and not in NYC business districts."><UturnD /></VisCard>
          <VisCard t="Three-point turn" v="same" take="The K-turn is a road-test staple: signal, hard left to the far kerb, reverse with the wheel right, drive away. Same choreography as home, mirrored."><ThreePointD /></VisCard>
          <VisCard t="Turning across a bike lane" v="new" take="The right hook is NYC's signature crash. Signal early, check the right mirror and blind spot, merge across only where the line is dashed, and yield to any cyclist coming through."><BikeTurnD /></VisCard>
        </div>
      )}

      <div className="bg-stone-50 border border-stone-200 p-3 mt-4">
        <p className="text-xs text-zinc-600 leading-relaxed">
          Drill these until the pictures answer before you read the words — then hit the <span className="font-semibold">Practice test</span> tab, where the questions now show signs, signals and road paint.
        </p>
      </div>
    </div>
  );
}
