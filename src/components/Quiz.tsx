import { useState } from 'react';
import { CheckCircle2, ChevronRight, GraduationCap, RotateCcw, XCircle } from 'lucide-react';
import { CATS } from '../data/bridges';
import { QUESTIONS, type Question } from '../data/questions';
import { SIGNS } from '../graphics/signs';
import { shuffle } from '../lib/utils';
import { Bar } from './ui';

export type Answer = { q: Question; picked: number; right: boolean };

export type QuizResult = {
  mode: string;
  score: number;
  total: number;
  signRight: number;
  signTotal: number;
  passed: boolean;
  answers: Answer[];
};

// Two modes: a full mock scored exactly like the DMV's (14/20 overall AND 2/4
// signs, both bars or no permit), and eight-question drills by category.

export default function Quiz({ onFinish }: { onFinish: (r: QuizResult) => void }) {
  const [phase, setPhase] = useState<"pick" | "run" | "done">("pick");
  const [mode, setMode] = useState<string | null>(null);
  const [qs, setQs] = useState<Question[]>([]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const start = (m: "mock" | "drill", cat?: string) => {
    let list: Question[];
    if (m === "mock") {
      const signs = shuffle(QUESTIONS.filter((q) => q.sign)).slice(0, 4);
      const rules = shuffle(QUESTIONS.filter((q) => !q.sign)).slice(0, 16);
      list = shuffle([...signs, ...rules]);
    } else {
      const pool = cat === "all" ? QUESTIONS : QUESTIONS.filter((q) => q.cat === cat);
      list = shuffle(pool).slice(0, 8);
    }
    setMode(m === "mock" ? "mock" : cat ?? "all");
    setQs(list); setI(0); setPicked(null); setAnswers([]); setPhase("run");
  };

  const choose = (idx: number) => { if (picked === null) setPicked(idx); };

  const next = () => {
    const q = qs[i];
    const rec: Answer[] = [...answers, { q, picked: picked as number, right: picked === q.a }];
    setAnswers(rec);
    if (i + 1 < qs.length) { setI(i + 1); setPicked(null); }
    else {
      const score = rec.filter((r) => r.right).length;
      const signRight = rec.filter((r) => r.q.sign && r.right).length;
      const signTotal = rec.filter((r) => r.q.sign).length;
      const isMock = mode === "mock";
      const passed = isMock ? score >= 14 && signRight >= 2 : score / rec.length >= 0.7;
      onFinish({ mode: isMock ? "mock" : `drill:${mode}`, score, total: rec.length, signRight, signTotal, passed, answers: rec });
      setPhase("done");
    }
  };

  if (phase === "pick") {
    return (
      <div>
        <div className="bg-zinc-900 text-white p-5 mb-5">
          <h2 className="font-display text-3xl mb-1">Practice</h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            The real DMV test: <span className="text-amber-400 font-bold">20 questions</span>, pass with{" "}
            <span className="text-amber-400 font-bold">14 correct</span> — and at least{" "}
            <span className="text-amber-400 font-bold">2 of the 4 road-sign questions</span> right. Both bars, or no permit.
          </p>
        </div>
        <button onClick={() => start("mock")}
          className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-900 font-display text-2xl py-4 mb-3 flex items-center justify-center gap-2 transition-colors">
          <GraduationCap size={24} /> Full mock test · real DMV rules
        </button>
        <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-2 mt-5">Quick drills by weak spot (8 questions)</p>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => start("drill", "all")}
            className="bg-white border border-zinc-300 hover:border-zinc-900 text-sm font-semibold py-3 px-2 text-zinc-800 transition-colors">Everything, shuffled</button>
          {CATS.filter((c) => QUESTIONS.some((q) => q.cat === c)).map((c) => (
            <button key={c} onClick={() => start("drill", c)}
              className="bg-white border border-zinc-300 hover:border-zinc-900 text-sm font-semibold py-3 px-2 text-zinc-800 transition-colors">{c}</button>
          ))}
        </div>
      </div>
    );
  }

  if (phase === "run") {
    const q = qs[i];
    return (
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
            Question {i + 1} of {qs.length} {q.sign && <span className="text-amber-600">· road sign</span>}
          </span>
          <span className="text-xs text-zinc-400">{q.cat}</span>
        </div>
        <Bar pct={((i + (picked !== null ? 1 : 0)) / qs.length) * 100} tone="bg-zinc-900" />
        <div className="bg-white shadow-sm p-5 mt-4">
          {q.svg && SIGNS[q.svg] ? (
            <div className="flex justify-center mb-4">
              <div className="w-28 sm:w-32">{SIGNS[q.svg]}</div>
            </div>
          ) : null}
          <p className="font-semibold text-lg text-zinc-900 leading-snug mb-4">{q.q}</p>
          <div className="space-y-2">
            {q.c.map((c, idx) => {
              let cls = "bg-stone-50 border-zinc-200 hover:border-zinc-500 text-zinc-800";
              if (picked !== null) {
                if (idx === q.a) cls = "bg-emerald-50 border-emerald-600 text-emerald-900";
                else if (idx === picked) cls = "bg-red-50 border-red-500 text-red-900";
                else cls = "bg-stone-50 border-zinc-200 text-zinc-400";
              }
              return (
                <button key={idx} onClick={() => choose(idx)} disabled={picked !== null}
                  className={`w-full text-left border p-3 text-sm leading-snug transition-colors flex items-start gap-2 ${cls}`}>
                  {picked !== null && idx === q.a && <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-600" />}
                  {picked !== null && idx === picked && idx !== q.a && <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" />}
                  <span>{c}</span>
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <div className="mt-4 bg-zinc-900 p-4">
              <p className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-1">
                {picked === q.a ? "Correct \u2014 the bridge:" : "Not quite \u2014 the bridge:"}
              </p>
              <p className="text-sm text-zinc-100 leading-relaxed">{q.x}</p>
              <button onClick={next} className="mt-3 bg-amber-400 hover:bg-amber-300 text-zinc-900 font-bold text-sm px-4 py-2 flex items-center gap-1 transition-colors">
                {i + 1 < qs.length ? "Next" : "See result"} <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // done
  const score = answers.filter((r) => r.right).length;
  const signRight = answers.filter((r) => r.q.sign && r.right).length;
  const signTotal = answers.filter((r) => r.q.sign).length;
  const isMock = mode === "mock";
  const passed = isMock ? score >= 14 && signRight >= 2 : score / answers.length >= 0.7;
  const misses = answers.filter((r) => !r.right);

  return (
    <div>
      <div className={`p-6 mb-4 text-center ${passed ? "bg-emerald-700" : "bg-red-600"} text-white`}>
        <p className="font-display text-4xl mb-1">{passed ? "PASS" : "NOT YET"}</p>
        <p className="text-sm opacity-90">
          {score}/{answers.length} correct{isMock && ` \u00b7 signs ${signRight}/${signTotal}`}
        </p>
        {isMock && (
          <p className="text-xs mt-2 opacity-80">
            DMV bar: 14/20 overall AND 2/4 signs. {passed ? "You cleared both." : score >= 14 ? "Overall fine \u2014 the sign section sank you." : "Keep drilling and retake."}
          </p>
        )}
      </div>
      {misses.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2">Review your misses</p>
          {misses.map((r, idx) => (
            <div key={idx} className="bg-white border-l-4 border-red-500 shadow-sm p-4 mb-2">
              {r.q.svg && SIGNS[r.q.svg] ? <div className="w-12 float-right ml-2 mb-1">{SIGNS[r.q.svg]}</div> : null}
              <p className="text-sm font-semibold text-zinc-900 mb-1">{r.q.q}</p>
              <p className="text-xs text-red-700 mb-1">You chose: {r.q.c[r.picked]}</p>
              <p className="text-xs text-emerald-700 mb-2">Answer: {r.q.c[r.q.a]}</p>
              <p className="text-xs text-zinc-600 leading-relaxed">{r.q.x}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setPhase("pick")}
        className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3 flex items-center justify-center gap-2 transition-colors">
        <RotateCcw size={16} /> Another round
      </button>
    </div>
  );
}
