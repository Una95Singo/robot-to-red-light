import { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle, Award, BookOpen, Bus, CalendarDays, Car, ChevronRight,
  ClipboardCheck, Flag, Gauge, GraduationCap, Octagon,
  ArrowLeftRight,
} from 'lucide-react';
import { BRIDGES, CATS } from './data/bridges';
import { QUESTIONS } from './data/questions';
import { blank, loadProgress, saveProgress, type Progress } from './lib/storage';
import { dashedLine } from './lib/utils';
import { Bar } from './components/ui';
import BridgeCard from './components/BridgeCard';
import SignsTab from './components/SignsTab';
import Quiz, { type QuizResult } from './components/Quiz';

export default function App() {
  const [tab, setTab] = useState<string>("home");
  const [progress, setProgress] = useState<Progress>(blank);
  const [loaded, setLoaded] = useState(false);
  const [catFilter, setCatFilter] = useState<string>("All");

  useEffect(() => { setProgress(loadProgress()); setLoaded(true); }, []);

  const update = (fn: (p: Progress) => Progress) =>
    setProgress((prev) => { const next = fn(structuredClone(prev)); saveProgress(next); return next; });

  const toggleMastered = (id: string) =>
    update((p) => { if (p.mastered[id]) delete p.mastered[id]; else p.mastered[id] = true; return p; });

  const recordAttempt = ({ mode, score, total, signRight, signTotal, passed, answers }: QuizResult) =>
    update((p) => {
      p.attempts.push({ ts: Date.now(), mode, score, total, signRight, signTotal, passed });
      if (p.attempts.length > 40) p.attempts = p.attempts.slice(-40);
      answers.forEach((r) => {
        const c = p.cat[r.q.cat] || { r: 0, t: 0 };
        c.t += 1; if (r.right) c.r += 1; p.cat[r.q.cat] = c;
      });
      return p;
    });

  const masteredCount = Object.keys(progress.mastered).length;
  // The deadline is the visitor's to set — everything else works backwards from it.
  const target = progress.target;
  const targetDate = target ? new Date(`${target}T00:00:00`) : null;
  const daysToTarget = targetDate ? Math.max(0, Math.ceil((targetDate.getTime() - Date.now()) / 86400000)) : null;
  const setTarget = (v: string) => update((p) => { p.target = v || null; return p; });
  const lastMock = [...progress.attempts].reverse().find((a) => a.mode === "mock");

  const catStats = useMemo(() => CATS.map((c) => {
    const cards = BRIDGES.filter((b) => b.cat === c);
    const done = cards.filter((b) => progress.mastered[b.id]).length;
    const qz = progress.cat[c];
    const acc = qz && qz.t > 0 ? qz.r / qz.t : null;
    const hasQ = QUESTIONS.some((q) => q.cat === c);
    const mastery = done / Math.max(1, cards.length);
    const readiness = hasQ ? mastery * 0.5 + (acc === null ? 0 : acc * 0.5) : mastery;
    return { c, done, total: cards.length, acc, readiness };
  }), [progress]);

  const weakest = [...catStats].sort((a, b) => a.readiness - b.readiness)[0];
  const dangerCards = BRIDGES.filter((b) => b.danger);
  const visibleBridges = catFilter === "All" ? BRIDGES : BRIDGES.filter((b) => b.cat === catFilter);

  const TABS = [
    { id: "home", label: "Dashboard", icon: Gauge },
    { id: "bridges", label: "Rule bridges", icon: ArrowLeftRight },
    { id: "signs", label: "Visual guide", icon: Octagon },
    { id: "danger", label: "Danger zone", icon: AlertTriangle },
    { id: "quiz", label: "Practice test", icon: GraduationCap },
    { id: "road", label: "The route", icon: CalendarDays },
  ];

  return (
    <div className="min-h-screen bg-stone-100 text-zinc-900">
      {/* ASPHALT HEADER with the centre line */}
      <header className="bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto px-4 pt-6 pb-5">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-400 uppercase mb-2">
            <span className="bg-emerald-700 text-white px-1.5 py-0.5">ZA</span>
            <ArrowLeftRight size={12} className="text-amber-400" />
            <span className="bg-amber-400 text-zinc-900 px-1.5 py-0.5">NY</span>
            <span className="ml-1">left-hand habits · right-hand roads</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl leading-none">Robot to Red Light</h1>
          <p className="text-zinc-400 text-sm mt-1">NY permit prep for a driver trained on South African roads.</p>
        </div>
        <div className="h-3" style={dashedLine} aria-hidden="true" />
      </header>

      {/* TABS */}
      <nav className="bg-white border-b border-zinc-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-2 flex overflow-x-auto">
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex items-center gap-1.5 px-3 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                tab === t.id ? "border-amber-400 text-zinc-900" : "border-transparent text-zinc-500 hover:text-zinc-800"}`}>
              <t.icon size={15} /> {t.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {!loaded ? (
          <p className="text-sm text-zinc-500">Loading your progress…</p>
        ) : tab === "home" ? (
          <div>
            {/* countdown + format */}
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              <div className="bg-zinc-900 text-white p-4">
                <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-1">The goal</p>
                {daysToTarget === null ? (
                  <>
                    <p className="font-display text-3xl text-amber-400 leading-none">Set a date</p>
                    <p className="text-sm text-zinc-300 mt-1">Pick the day you want the licence in hand.</p>
                  </>
                ) : (
                  <>
                    <p className="font-display text-4xl text-amber-400 leading-none">
                      {daysToTarget > 0 ? `${daysToTarget} days` : "That day is here"}
                    </p>
                    <p className="text-sm text-zinc-300 mt-1">
                      {daysToTarget > 0
                        ? `until ${targetDate!.toLocaleDateString(undefined, { month: "long", day: "numeric" })} \u2014 licence in hand.`
                        : "Go book the road test."}
                    </p>
                  </>
                )}
                <label className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Target</span>
                  <input
                    type="date"
                    value={target ?? ""}
                    onChange={(e) => setTarget(e.target.value)}
                    className="bg-zinc-800 border border-zinc-700 text-zinc-100 text-xs px-2 py-1"
                  />
                </label>
              </div>
              <div className="bg-white border border-zinc-200 p-4">
                <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-1">The written test</p>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  <span className="font-bold">20 questions</span>, pass with <span className="font-bold">14</span>. Four are road signs and you need <span className="font-bold">at least 2 of those 4</span> — a separate bar. Mock tests here score exactly this way.
                </p>
              </div>
            </div>

            {/* readiness */}
            <div className="bg-white border border-zinc-200 p-4 mb-5">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Bridges internalised</p>
                <p className="text-sm font-bold">{masteredCount}/{BRIDGES.length}</p>
              </div>
              <Bar pct={(masteredCount / BRIDGES.length) * 100} />
              <div className="mt-4 space-y-3">
                {catStats.map((s) => (
                  <div key={s.c}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-zinc-700">{s.c}</span>
                      <span className="text-zinc-400">
                        cards {s.done}/{s.total}{s.acc !== null && ` \u00b7 quiz ${Math.round(s.acc * 100)}%`}
                      </span>
                    </div>
                    <Bar pct={s.readiness * 100} tone={s.readiness > 0.7 ? "bg-emerald-600" : s.readiness > 0.35 ? "bg-amber-400" : "bg-red-500"} />
                  </div>
                ))}
              </div>
            </div>

            {/* focus + last mock */}
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              <button onClick={() => { setCatFilter(weakest.c); setTab("bridges"); }}
                className="bg-amber-400 hover:bg-amber-300 text-left p-4 transition-colors">
                <p className="text-xs font-bold tracking-widest text-zinc-700 uppercase mb-1">Focus next</p>
                <p className="font-display text-2xl text-zinc-900 leading-none">{weakest.c}</p>
                <p className="text-xs text-zinc-700 mt-1 flex items-center gap-1">Study these bridges <ChevronRight size={12} /></p>
              </button>
              <div className="bg-white border border-zinc-200 p-4">
                <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-1">Last mock test</p>
                {lastMock ? (
                  <>
                    <p className={`font-display text-2xl leading-none ${lastMock.passed ? "text-emerald-700" : "text-red-600"}`}>
                      {lastMock.passed ? "PASS" : "NOT YET"} · {lastMock.score}/{lastMock.total}
                    </p>
                    <p className="text-xs text-zinc-500 mt-1">signs {lastMock.signRight}/{lastMock.signTotal} · {new Date(lastMock.ts).toLocaleDateString()}</p>
                  </>
                ) : (
                  <p className="text-sm text-zinc-600">No mocks yet. Take one cold to find your baseline \u2014 your years of driving will carry more than you think.</p>
                )}
              </div>
            </div>

            <button onClick={() => setTab("quiz")}
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-display text-2xl py-4 flex items-center justify-center gap-2 transition-colors">
              <GraduationCap size={22} /> Take a practice test
            </button>
            <button onClick={() => setTab("signs")}
              className="w-full mt-3 bg-white border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white text-zinc-900 font-display text-xl py-3 flex items-center justify-center gap-2 transition-colors">
              <Octagon size={18} /> Visual guide — signs, road paint & turns
            </button>
          </div>
        ) : tab === "bridges" ? (
          <div>
            <div className="flex gap-2 overflow-x-auto pb-3 mb-2">
              {["All", ...CATS].map((c) => (
                <button key={c} onClick={() => setCatFilter(c)}
                  className={`px-3 py-1.5 text-xs font-bold whitespace-nowrap border transition-colors ${
                    catFilter === c ? "bg-zinc-900 border-zinc-900 text-white" : "bg-white border-zinc-300 text-zinc-600 hover:border-zinc-900"}`}>
                  {c}
                </button>
              ))}
            </div>
            <p className="text-sm text-zinc-500 mb-4">
              Each card maps an instinct you already own to the NY rule. Four verdicts:{" "}
              <span className="font-bold text-emerald-700">same</span> (keep it),{" "}
              <span className="font-bold text-blue-700">mirrored</span> (flip it),{" "}
              <span className="font-bold text-red-600">rewired</span> (override it),{" "}
              <span className="font-bold text-amber-500">new</span> (no SA version exists).
            </p>
            {visibleBridges.map((b) => (
              <BridgeCard key={b.id} b={b} mastered={!!progress.mastered[b.id]} onToggle={toggleMastered} />
            ))}
          </div>
        ) : tab === "signs" ? (
          <SignsTab />
        ) : tab === "danger" ? (
          <div>
            <div className="bg-red-600 text-white p-5 mb-5">
              <h2 className="font-display text-3xl mb-1 flex items-center gap-2"><AlertTriangle size={26} /> Danger zone</h2>
              <p className="text-sm text-red-100 leading-relaxed">
                Years behind the wheel are mostly an asset — except here. These are the habits where your trained reflex gives the <em>wrong</em> answer on the test or the road. Deliberate practice beats instinct on this page.
              </p>
            </div>
            {dangerCards.map((b) => (
              <BridgeCard key={b.id} b={b} mastered={!!progress.mastered[b.id]} onToggle={toggleMastered} />
            ))}
          </div>
        ) : tab === "quiz" ? (
          <Quiz onFinish={recordAttempt} />
        ) : (
          <div>
            <div className="bg-zinc-900 text-white p-5 mb-5">
              <h2 className="font-display text-3xl mb-1">The route to a licence</h2>
              <p className="text-sm text-zinc-300">
                A South African licence isn't exchangeable in New York, so it's the full route — but for an experienced adult driver nothing slows it down except the road-test queue.
              </p>
            </div>
            {[
              { icon: BookOpen, t: "Pass the written permit test", d: "20 questions, 14 to pass, at least 2 of 4 signs. Take it online through your dmv.ny.gov account or at a DMV office. Bring your 6 points of ID proofs and pass a simple vision screening (20/40). Study here until your mocks pass consistently." },
              { icon: ClipboardCheck, t: "Do the 5-hour pre-licensing course", d: "Mandatory before you can book a road test, no matter how long you've driven. Available online \u2014 knock it out the same week you pass the written. The certificate (MV-278) files electronically." },
              { icon: Car, t: "Practice on the permit", d: "Drive with a licensed driver age 21+ beside you. NYC quirks: a permit holder can't drive on streets inside NYC parks, on MTA (Triborough) bridges and tunnels, or on the Cross County, Hutchinson, Saw Mill and Taconic parkways in Westchester. Use the time to burn in the mirrored habits \u2014 especially looking left first and parallel parking on the right." },
              { icon: Award, t: "Book the road test EARLY", d: "This is the bottleneck: five-borough slots run out weeks ahead. Book the moment your 5-hour certificate lands \u2014 and check Long Island or Hudson Valley sites if NYC dates slip. Bring a registered, inspected car and a licensed accompanying driver. Examiners love parallel parking, the three-point turn, full head checks, and hard stops behind the line." },
            ].map((s, idx) => (
              <div key={idx} className="bg-white border-l-4 border-amber-400 shadow-sm p-4 mb-3 flex gap-3">
                <div className="bg-zinc-900 text-amber-400 w-10 h-10 flex items-center justify-center shrink-0">
                  <s.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-xl text-zinc-900 leading-none mb-1">{s.t}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
            <div className="bg-stone-50 border border-stone-200 p-4 mt-4 flex gap-2">
              <Bus size={18} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-600 leading-relaxed">
                Rules and fees drift \u2014 confirm details at <span className="font-semibold">dmv.ny.gov</span> before booking. This coach teaches the NY State Driver's Manual as tested; it isn't the DMV.
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="max-w-3xl mx-auto px-4 pb-8">
        <div className="h-1" style={dashedLine} aria-hidden="true" />
        <p className="text-xs text-zinc-400 mt-3 flex items-center gap-1">
          <Flag size={12} /> Progress saves automatically between sessions.
        </p>
      </footer>
    </div>
  );
}
