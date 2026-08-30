import type { ReactNode } from 'react';
import { ArrowLeftRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { VERDICTS, type Verdict } from '../data/bridges';
import { SIGNS } from '../graphics/signs';
import type { Tile } from './tiles';

// The small repeated chrome: verdict badges, progress bars, sign tiles, and
// the card frame the visual guide is built out of.

export function VerdictBadge({ v }: { v: Verdict }) {
  const m = VERDICTS[v];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold tracking-wider ${m.badge}`}>
      {v === "mirrored" && <ArrowLeftRight size={12} />}
      {v === "different" && <AlertTriangle size={12} />}
      {v === "same" && <CheckCircle2 size={12} />}
      {m.label}
    </span>
  );
}

export function Bar({ pct, tone = "bg-amber-400" }: { pct: number; tone?: string }) {
  return (
    <div className="h-2 w-full bg-zinc-200 overflow-hidden">
      <div className={`h-full ${tone} transition-all duration-500`} style={{ width: `${Math.min(100, Math.max(0, pct))}%` }} />
    </div>
  );
}

export function SignTile({ s, cap, wide }: { s: string; cap: string; wide?: boolean }) {
  return (
    <div className="bg-white border border-zinc-200 p-2 flex flex-col items-center gap-1.5">
      <div className={`${wide ? "w-24" : "w-14"} h-14 flex items-center justify-center`}>
        <div className="w-full">{SIGNS[s]}</div>
      </div>
      <p className="text-[11px] leading-tight text-center text-zinc-600 font-medium">{cap}</p>
    </div>
  );
}

export function TransRow({ za, us, cap, wide, zaWide }: {
  za: string; us: string; cap: string; wide?: boolean; zaWide?: boolean;
}) {
  return (
    <div className="bg-white border border-zinc-200 p-3 flex items-center gap-3 mb-2">
      <div className={`${zaWide ? "w-20" : "w-14"} shrink-0`}>{SIGNS[za]}</div>
      <ArrowLeftRight size={16} className="text-amber-500 shrink-0" />
      <div className={`${wide ? "w-20" : "w-14"} shrink-0`}>{SIGNS[us]}</div>
      <p className="text-xs text-zinc-600 leading-snug">{cap}</p>
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2 mt-6">{children}</p>;
}

export function VisCard({ t, v, take, children }: {
  t: string; v: Verdict; take: string; children: ReactNode;
}) {
  return (
    <div className={`bg-white border-l-4 ${VERDICTS[v].ring} shadow-sm mb-4 p-4`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-display text-xl leading-none text-zinc-900">{t}</h3>
        <VerdictBadge v={v} />
      </div>
      <div className="border border-zinc-200 bg-white p-2">{children}</div>
      <p className="text-sm text-zinc-700 leading-relaxed mt-3">{take}</p>
    </div>
  );
}

export function Tiles({ items, cols = "grid-cols-3 sm:grid-cols-6" }: { items: Tile[]; cols?: string }) {
  return (
    <div className={`grid ${cols} gap-2`}>
      {items.map(([s, cap, wide]) => <SignTile key={s + cap} s={s} cap={cap} wide={wide} />)}
    </div>
  );
}
