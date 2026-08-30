import type { ReactNode, SVGProps } from 'react';
import { FD, FB, INK, ROAD, SIG_COL } from './tokens';

// Low-level SVG building blocks shared by the sign library and the road
// diagrams: frames (Sg, Dmd, WhiteSq, SaTri, SaCircle, NYCSign, Mini), road
// furniture (CarT, Chip, Head, Ln), and glyphs (Walker, DeerGlyph, ...).

/** Which way a chevron or a driver's gaze points. */
export type Dir = "left" | "right" | "up" | "down";

/** A figure dropped into a scene at a position and a scale. */
export type Glyph = { x: number; y: number; s?: number; fill?: string };

export function Sg({ vb = "0 0 100 100", label, children }: {
  vb?: string; label: string; children: ReactNode;
}) {
  return (
    <svg viewBox={vb} role="img" aria-label={label} className="block w-full h-auto">
      {children}
    </svg>
  );
}

export function Dmd({ label, fill = "#FBBF24", children }: {
  label: string; fill?: string; children: ReactNode;
}) {
  return (
    <Sg label={label}>
      <rect x="16" y="16" width="68" height="68" rx="8" transform="rotate(45 50 50)" fill={fill} stroke={INK} strokeWidth="4" />
      {children}
    </Sg>
  );
}

export const WhiteSq = ({ label, children }: { label: string; children: ReactNode }) => (
  <Sg label={label}><rect x="4" y="4" width="92" height="92" rx="7" fill="#fff" stroke={INK} strokeWidth="4" />{children}</Sg>
);

export const SaTri = ({ label, children }: { label: string; children: ReactNode }) => (
  <Sg label={label}>
    <polygon points="50,8 94,88 6,88" fill="#fff" stroke="#DC2626" strokeWidth="8" strokeLinejoin="round" />
    {children}
  </Sg>
);

export const SaCircle = ({ label, fill = "#fff", children }: {
  label: string; fill?: string; children: ReactNode;
}) => (
  <Sg label={label}><circle cx="50" cy="50" r="44" fill={fill} stroke="#DC2626" strokeWidth="9" />{children}</Sg>
);

export const NYCSign = ({ l1, l2, label }: { l1: string; l2: string; label: string }) => (
  <Sg vb="0 0 90 110" label={label}>
    <rect x="3" y="3" width="84" height="104" rx="4" fill="#fff" stroke={INK} strokeWidth="3" />
    <Txt x={45} y={38} s={21} c="#DC2626">NO</Txt>
    <Txt x={45} y={62} s={17} c="#DC2626">{l1}</Txt>
    <Txt x={45} y={84} s={12} c="#DC2626">{l2}</Txt>
    <path d="M14 96 H76" stroke="#DC2626" strokeWidth="3" />
    <polygon points="8,96 16,91 16,101" fill="#DC2626" /><polygon points="82,96 74,91 74,101" fill="#DC2626" />
  </Sg>
);

export const Mini = ({ label, children }: { label: string; children: ReactNode }) => (
  <Sg vb="0 0 120 60" label={label}><rect width="120" height="60" fill={ROAD} />{children}</Sg>
);

export function CarT({ x, y, r = 0, fill = "#E4E4E7" }: {
  x: number; y: number; r?: number; fill?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <rect x="-9" y="-16" width="18" height="32" rx="5" fill={fill} stroke={INK} strokeWidth="1.5" />
      <rect x="-6" y="-10" width="12" height="7" rx="2" fill={INK} opacity="0.5" />
    </g>
  );
}

export function Chip({ x, y, t, bg = INK, fg = "#fff" }: {
  x: number; y: number; t: string; bg?: string; fg?: string;
}) {
  const w = t.length * 6.3 + 14;
  return (
    <g>
      <rect x={x} y={y} width={w} height={18} rx={3} fill={bg} />
      <text x={x + w / 2} y={y + 13} textAnchor="middle" fontSize="10.5" fontWeight="800" fill={fg} fontFamily={FB} letterSpacing="0.4">{t}</text>
    </g>
  );
}

export function Head({ x, y, d, fill = "#E4E4E7" }: {
  x: number; y: number; d: Dir; fill?: string;
}) {
  const p = d === "right" ? `${x - 12},${y - 6} ${x},${y} ${x - 12},${y + 6}`
    : d === "left" ? `${x + 12},${y - 6} ${x},${y} ${x + 12},${y + 6}`
    : d === "up" ? `${x - 6},${y + 12} ${x + 6},${y + 12} ${x},${y}`
    : `${x - 6},${y - 12} ${x + 6},${y - 12} ${x},${y}`;
  return <polygon points={p} fill={fill} />;
}

export const Ln = ({ y, c, d, w = 3, x1 = 0, x2 = 340 }: {
  y: number; c: string; d?: string; w?: number; x1?: number; x2?: number;
}) => <line x1={x1} y1={y} x2={x2} y2={y} stroke={c} strokeWidth={w} strokeDasharray={d} />;

export const Txt = ({ x, y, s, w = 800, c = INK, f = FD, a = "middle", children, ...rest }: {
  x: number; y: number; s: number; w?: number; c?: string; f?: string;
  a?: "start" | "middle" | "end"; children: ReactNode;
} & Omit<SVGProps<SVGTextElement>, "x" | "y" | "children">) => (
  <text x={x} y={y} textAnchor={a} fontSize={s} fontWeight={w} fill={c} fontFamily={f} {...rest}>{children}</text>
);

export const Walker = ({ x, y, s = 1, fill = INK }: Glyph) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} stroke={fill} fill="none" strokeLinecap="round">
    <circle cx="0" cy="0" r="6" fill={fill} stroke="none" />
    <path d="M0 7 V27 M0 27 L-8 47 M0 27 L8 47 M0 13 L12 8" strokeWidth="5" />
  </g>
);

export const DeerGlyph = ({ x = 0, y = 0, s = 1, fill = INK }: Partial<Glyph>) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} stroke={fill} fill="none" strokeLinecap="round">
    <ellipse cx="48" cy="54" rx="16" ry="8" fill={fill} stroke="none" />
    <path d="M60 50 L70 34 L80 36" strokeWidth="6" />
    <path d="M70 33 L66 21 M70 33 L75 21 M66 26 L61 25 M75 26 L80 25" strokeWidth="2.5" />
    <path d="M38 60 L32 76 M44 60 L42 76 M54 60 L58 76 M60 60 L68 74" strokeWidth="4" />
  </g>
);

export const Skid = ({ x, y, fill = INK, h = 12 }: {
  x: number; y: number; fill?: string; h?: number;
}) => (
  <path d={`M${x} ${y} q4 -${h / 2} 0 -${h} q-4 -${h / 2} 0 -${h} q4 -${h / 2} 0 -${h}`} fill="none" stroke={fill} strokeWidth="3" strokeLinecap="round" />
);

export const BikeGlyph = ({ x, y, s = 1, fill = "#fff" }: Glyph) => (
  <g transform={`translate(${x} ${y}) scale(${s})`} stroke={fill} fill="none" strokeWidth="2">
    <circle cx="-8" cy="3" r="5" /><circle cx="8" cy="3" r="5" />
    <path d="M-8 3 L-2 -6 L6 -6 L8 3 M-2 -6 L2 3 M-8 3 L2 3" />
  </g>
);

export const SigHead = ({ lights, flash = -1, label }: {
  lights: string[]; flash?: number; label: string;
}) => (
  <Sg label={label}>
    <rect x="31" y="3" width="38" height="94" rx="6" fill={INK} />
    {lights.map((l, k) => {
      const cy = 19 + k * 31;
      const arrow = l.endsWith("Arrow");
      const col = SIG_COL[arrow ? l.replace("Arrow", "") : l];
      return (
        <g key={k}>
          <circle cx="50" cy={cy} r="12" fill={arrow ? SIG_COL.off : col} />
          {arrow && <path d={`M57 ${cy} H43 M43 ${cy} L49 ${cy - 6} M43 ${cy} L49 ${cy + 6}`} stroke={col} strokeWidth="3.5" strokeLinecap="round" fill="none" />}
          {flash === k && <circle cx="50" cy={cy} r="15.5" fill="none" stroke={col} strokeWidth="1.8" strokeDasharray="4 3" />}
        </g>
      );
    })}
  </Sg>
);
