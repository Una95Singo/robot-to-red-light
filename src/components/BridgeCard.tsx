import { ArrowLeftRight, ClipboardCheck } from 'lucide-react';
import { VERDICTS, type Bridge } from '../data/bridges';
import { DIAGRAMS } from '../graphics/diagrams';
import { VerdictBadge } from './ui';

// One rule bridge: what you already know on the left, the New York rule on the
// right, the diagram that settles it, and the hook that makes it stick.

export default function BridgeCard({ b, mastered, onToggle }: {
  b: Bridge; mastered: boolean; onToggle: (id: string) => void;
}) {
  const m = VERDICTS[b.v];
  return (
    <div className={`bg-white border-l-4 ${m.ring} shadow-sm mb-4`}>
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-1">{b.cat}</div>
            <h3 className="font-display text-2xl leading-none text-zinc-900">{b.title}</h3>
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0">
            <VerdictBadge v={b.v} />
            <span className="text-xs text-zinc-400">{m.sub}</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="bg-emerald-50 border border-emerald-100 p-3">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-emerald-700 text-white text-xs font-black px-1.5 py-0.5">ZA</span>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">What you know</span>
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed">{b.za}</p>
          </div>
          <div className="bg-zinc-900 p-3">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-amber-400 text-zinc-900 text-xs font-black px-1.5 py-0.5">NY</span>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">The rule here</span>
            </div>
            <p className="text-sm text-zinc-100 leading-relaxed">{b.ny}</p>
          </div>
        </div>

        {b.diagram && DIAGRAMS[b.diagram] ? (
          <figure className="mt-3 border border-zinc-200 bg-white p-3">{DIAGRAMS[b.diagram]}</figure>
        ) : null}

        <div className="mt-3 flex items-start gap-2 bg-stone-50 border border-stone-200 p-3">
          <ArrowLeftRight size={16} className="text-amber-500 mt-0.5 shrink-0" />
          <p className="text-sm text-zinc-800 leading-relaxed"><span className="font-bold">Intuition hook: </span>{b.hook}</p>
        </div>

        {b.tip && (
          <p className="mt-2 text-xs text-red-700 font-medium flex items-start gap-1.5">
            <ClipboardCheck size={14} className="mt-0.5 shrink-0" /> {b.tip}
          </p>
        )}

        <div className="mt-3 flex justify-end">
          <button
            onClick={() => onToggle(b.id)}
            className={`text-sm font-semibold px-3 py-1.5 border transition-colors ${
              mastered
                ? "bg-emerald-700 border-emerald-700 text-white"
                : "bg-white border-zinc-300 text-zinc-600 hover:border-emerald-700 hover:text-emerald-700"
            }`}
          >
            {mastered ? "\u2713 Got it" : "Mark as got it"}
          </button>
        </div>
      </div>
    </div>
  );
}
