import type { ReactElement, ReactNode } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { FB, FD, INK, LANE_W, LANE_Y, ROAD } from './tokens';
import { Sg, CarT, Chip, Head, Ln, Txt, Walker, BikeGlyph } from './primitives';
import { SIGNS } from './signs';

// Top-down road scenes drawn in one consistent visual language: ZA above,
// NY below, amber car is always you. `DIAGRAMS` is the lookup bridge cards
// render from.

export const YellowLineD = () => (
  <Sg vb="0 0 340 216" label="Yellow line meaning, South Africa versus New York">
    <Chip x={8} y={2} t="SOUTH AFRICA · KEEP LEFT" bg="#047857" />
    <rect x="0" y="26" width="340" height="60" fill={ROAD} />
    <rect x="0" y="28.5" width="340" height="3.5" fill={LANE_Y} />
    <rect x="0" y="80" width="340" height="3.5" fill={LANE_Y} />
    <line x1="0" y1="56" x2="340" y2="56" stroke={LANE_W} strokeWidth="3" strokeDasharray="16 12" />
    <CarT x={92} y={42} r={90} fill="#10B981" />
    <line x1="112" y1="42" x2="148" y2="42" stroke="#E4E4E7" strokeWidth="2.5" />
    <Head x={156} y={42} d="right" />
    <CarT x={248} y={70} r={-90} fill="#A7F3D0" />
    <line x1="228" y1="70" x2="192" y2="70" stroke="#E4E4E7" strokeWidth="2.5" />
    <Head x={184} y={70} d="left" />
    <text x="334" y="102" textAnchor="end" fontSize="11" fontWeight="800" fill="#A16207" fontFamily={FB}>yellow lives at the EDGES</text>
    <Chip x={8} y={112} t="NEW YORK · KEEP RIGHT" bg="#F59E0B" fg={INK} />
    <rect x="0" y="136" width="340" height="60" fill={ROAD} />
    <rect x="0" y="138.5" width="340" height="3.5" fill={LANE_W} />
    <rect x="0" y="190" width="340" height="3.5" fill={LANE_W} />
    <rect x="0" y="162" width="340" height="3" fill={LANE_Y} />
    <rect x="0" y="168" width="340" height="3" fill={LANE_Y} />
    <CarT x={248} y={152} r={-90} />
    <line x1="228" y1="152" x2="192" y2="152" stroke="#E4E4E7" strokeWidth="2.5" />
    <Head x={184} y={152} d="left" />
    <CarT x={92} y={181} r={90} fill="#F59E0B" />
    <line x1="112" y1="181" x2="148" y2="181" stroke="#E4E4E7" strokeWidth="2.5" />
    <Head x={156} y={181} d="right" />
    <text x="6" y="212" fontSize="11" fontWeight="800" fill="#B45309" fontFamily={FB}>yellow lives in the MIDDLE — the far side is oncoming traffic</text>
  </Sg>
);

export const LookLeftD = () => (
  <Sg vb="0 0 340 126" label="Check left, right, then left again">
    <rect x="0" y="14" width="340" height="48" fill={ROAD} />
    <line x1="0" y1="38" x2="340" y2="38" stroke={LANE_Y} strokeWidth="3" />
    <CarT x={56} y={26} r={90} />
    <line x1="76" y1="26" x2="104" y2="26" stroke="#E4E4E7" strokeWidth="2.5" />
    <Head x={112} y={26} d="right" />
    <CarT x={170} y={102} r={0} fill="#F59E0B" />
    <path d="M158 90 Q118 76 92 58" fill="none" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
    <Head x={86} y={54} d="left" fill="#DC2626" />
    <circle cx="74" cy="78" r="10" fill="#DC2626" />
    <text x="74" y="82" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff" fontFamily={FB}>1</text>
    <path d="M182 90 Q222 76 248 58" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    <Head x={254} y={54} d="right" fill={INK} />
    <circle cx="266" cy="78" r="10" fill={INK} />
    <text x="266" y="82" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff" fontFamily={FB}>2</text>
    <text x="170" y="122" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3F3F46" fontFamily={FB}>The near lane now comes from the LEFT: left · right · left again.</text>
  </Sg>
);

export const LeftTurnD = () => (
  <Sg vb="0 0 340 202" label="Left turn yields to oncoming traffic">
    <rect x="138" y="0" width="64" height="202" fill={ROAD} />
    <rect x="0" y="68" width="340" height="64" fill={ROAD} />
    <rect x="167" y="0" width="3" height="60" fill={LANE_Y} />
    <rect x="172" y="0" width="3" height="60" fill={LANE_Y} />
    <rect x="167" y="140" width="3" height="62" fill={LANE_Y} />
    <rect x="172" y="140" width="3" height="62" fill={LANE_Y} />
    <rect x="0" y="97" width="130" height="3" fill={LANE_Y} />
    <rect x="0" y="102" width="130" height="3" fill={LANE_Y} />
    <rect x="210" y="97" width="130" height="3" fill={LANE_Y} />
    <rect x="210" y="102" width="130" height="3" fill={LANE_Y} />
    <CarT x={187} y={176} r={0} fill="#F59E0B" />
    <path d="M187 154 Q187 116 128 116" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="10 8" />
    <Head x={118} y={116} d="left" fill="#F59E0B" />
    <CarT x={153} y={26} r={180} />
    <line x1="153" y1="46" x2="153" y2="78" stroke="#E4E4E7" strokeWidth="2.5" />
    <Head x={153} y={86} d="down" />
    <Chip x={206} y={112} t="YIELD to oncoming" bg="#DC2626" />
    <text x="170" y="198" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3F3F46" fontFamily={FB}>Mirror of home: the LEFT turn now crosses traffic.</text>
  </Sg>
);

export const FourWayD = () => (
  <Sg vb="0 0 340 202" label="Four-way stop, tie goes to the right">
    <rect x="138" y="0" width="64" height="202" fill={ROAD} />
    <rect x="0" y="68" width="340" height="64" fill={ROAD} />
    <rect x="172" y="134" width="28" height="6" fill={LANE_W} />
    <rect x="140" y="60" width="28" height="6" fill={LANE_W} />
    <rect x="204" y="72" width="6" height="28" fill={LANE_W} />
    <rect x="130" y="102" width="6" height="28" fill={LANE_W} />
    {[[126, 54], [214, 54], [126, 146], [214, 146]].map(([cx, cy], k) => (
      <polygon key={k} points={`${cx - 4},${cy - 9} ${cx + 4},${cy - 9} ${cx + 9},${cy - 4} ${cx + 9},${cy + 4} ${cx + 4},${cy + 9} ${cx - 4},${cy + 9} ${cx - 9},${cy + 4} ${cx - 9},${cy - 4}`} fill="#DC2626" stroke="#fff" strokeWidth="2" />
    ))}
    <CarT x={187} y={172} r={0} fill="#F59E0B" />
    <CarT x={296} y={86} r={-90} />
    <path d="M272 86 H226" stroke="#E4E4E7" strokeWidth="3" strokeDasharray="8 7" />
    <Head x={218} y={86} d="left" />
    <circle cx="296" cy="58" r="11" fill={INK} />
    <text x="296" y="62.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff" fontFamily={FB}>1</text>
    <circle cx="216" cy="172" r="11" fill="#A1A1AA" />
    <text x="216" y="176.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff" fontFamily={FB}>2</text>
    <text x="170" y="198" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3F3F46" fontFamily={FB}>Arrive together? The car on the RIGHT rolls first.</text>
  </Sg>
);

export const RoundaboutD = () => (
  <Sg vb="0 0 340 178" label="Roundabout direction, South Africa clockwise versus New York counter-clockwise">
    <Chip x={34} y={2} t="ZA · CLOCKWISE" bg="#047857" />
    <Chip x={192} y={2} t="NY · COUNTER-CLOCKWISE" bg="#F59E0B" fg={INK} />
    <circle cx="90" cy="96" r="48" fill="none" stroke={ROAD} strokeWidth="28" />
    <circle cx="90" cy="96" r="20" fill="#D6D3D1" stroke={INK} strokeWidth="1.5" />
    <Head x={104} y={48} d="right" fill="#10B981" />
    <Head x={138} y={110} d="down" fill="#10B981" />
    <Head x={76} y={144} d="left" fill="#10B981" />
    <circle cx="250" cy="96" r="48" fill="none" stroke={ROAD} strokeWidth="28" />
    <circle cx="250" cy="96" r="20" fill="#D6D3D1" stroke={INK} strokeWidth="1.5" />
    <Head x={236} y={48} d="left" fill="#FBBF24" />
    <Head x={202} y={110} d="down" fill="#FBBF24" />
    <Head x={264} y={144} d="right" fill="#FBBF24" />
    <text x="170" y="174" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3F3F46" fontFamily={FB}>Both circles own the right of way — but the NY one spins the other way.</text>
  </Sg>
);

export function ParkPanel({ ft, both, cap, children }: {
  ft: number; both?: boolean; cap: string; children: ReactNode;
}) {
  const zw = Math.min(ft * 2, 72);
  return (
    <div>
      <Sg vb="0 0 160 96" label={cap}>
        <rect x="0" y="0" width="160" height="24" fill="#E7E5E4" />
        <rect x="0" y="24" width="160" height="4" fill={INK} />
        <rect x="0" y="28" width="160" height="68" fill={ROAD} />
        <rect x={both ? 80 - zw : 80 - zw} y="30" width={both ? zw * 2 : zw} height="24" fill="#DC2626" opacity="0.3" />
        <rect x={both ? 80 - zw : 80 - zw} y="30" width={both ? zw * 2 : zw} height="24" fill="none" stroke="#DC2626" strokeWidth="2" strokeDasharray="6 4" />
        <text x="80" y="76" textAnchor="middle" fontSize="17" fontWeight="800" fill="#FCA5A5" fontFamily={FD}>{ft} FT</text>
        <rect x="126" y="32" width="30" height="18" rx="5" fill="#71717A" stroke={INK} strokeWidth="1.5" />
        <text x="141" y="62" textAnchor="middle" fontSize="9" fontWeight="800" fill="#86EFAC" fontFamily={FB}>OK</text>
        {children}
      </Sg>
      <p className="text-[11px] text-zinc-600 font-medium mt-1 leading-tight">{cap}</p>
    </div>
  );
}

export const ParkZonesD = () => (
  <div>
    <p className="text-xs text-zinc-600 mb-2">One car ≈ <span className="font-bold">15 ft</span> — so the hydrant rule is a full car-length of daylight. Zones drawn to scale:</p>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      <ParkPanel ft={15} both cap="Fire hydrant — 15 ft either side">
        <rect x="76" y="6" width="8" height="13" rx="2" fill="#DC2626" />
        <circle cx="80" cy="6" r="4" fill="#DC2626" />
      </ParkPanel>
      <ParkPanel ft={20} cap="Crosswalk — 20 ft">
        {[0, 1, 2, 3].map((k) => (
          <rect key={k} x={82 + k * 9} y="30" width="5" height="64" fill={LANE_W} opacity="0.9" />
        ))}
      </ParkPanel>
      <ParkPanel ft={30} cap="Stop sign — 30 ft">
        <line x1="80" y1="10" x2="80" y2="24" stroke={INK} strokeWidth="2.5" />
        <polygon points="76,2 84,2 88,6 88,12 84,16 76,16 72,12 72,6" fill="#DC2626" stroke="#fff" strokeWidth="1.5" />
      </ParkPanel>
      <ParkPanel ft={50} cap="Railroad — 50 ft">
        <path d="M74 4 L88 18 M88 4 L74 18" stroke={INK} strokeWidth="4" strokeLinecap="round" />
        <rect x="86" y="30" width="4" height="64" fill={INK} opacity="0.65" />
        <rect x="98" y="30" width="4" height="64" fill={INK} opacity="0.65" />
      </ParkPanel>
    </div>
  </div>
);

export function HillPanel({ slope, wheelRot, curb, cap }: {
  slope: string; wheelRot: number; curb?: boolean; cap: string;
}) {
  return (
    <div>
      <Sg vb="0 0 120 118" label={cap}>
        <rect x="0" y="0" width={curb ? 96 : 120} height="118" fill={ROAD} />
        {curb ? (
          <rect x="96" y="0" width="24" height="118" fill="#A8A29E" />
        ) : (
          <line x1="106" y1="0" x2="106" y2="118" stroke={LANE_W} strokeWidth="3" strokeDasharray="10 8" />
        )}
        <Chip x={5} y={5} t={slope} bg="#52525B" />
        <rect x="56" y="36" width="28" height="64" rx="8" fill="#E4E4E7" stroke={INK} strokeWidth="2" />
        <rect x="62" y="46" width="16" height="12" rx="2" fill={INK} opacity="0.5" />
        <g transform={`translate(56 42) rotate(${wheelRot})`}>
          <rect x="-3" y="-7" width="6" height="14" rx="2" fill={INK} />
        </g>
        <g transform={`translate(84 42) rotate(${wheelRot})`}>
          <rect x="-3" y="-7" width="6" height="14" rx="2" fill={INK} />
        </g>
        <rect x="53" y="88" width="6" height="13" rx="2" fill={INK} />
        <rect x="81" y="88" width="6" height="13" rx="2" fill={INK} />
      </Sg>
      <p className="text-[11px] text-zinc-600 font-medium mt-1 leading-tight">{cap}</p>
    </div>
  );
}

export const HillParkD = () => (
  <div className="grid grid-cols-3 gap-2">
    <HillPanel slope="DOWNHILL" wheelRot={38} curb cap="Downhill: wheels TO the curb" />
    <HillPanel slope="UPHILL" wheelRot={-38} curb cap="Uphill: wheels AWAY — roll back to kiss the curb" />
    <HillPanel slope="NO CURB" wheelRot={38} cap="No curb: wheels to the EDGE, either slope" />
  </div>
);

export const SchoolBusD = () => (
  <Sg vb="0 0 340 212" label="School bus stopped on a divided highway, all traffic stops in New York">
    <rect x="0" y="24" width="340" height="56" fill={ROAD} />
    <rect x="0" y="80" width="340" height="26" fill="#D6D3D1" />
    <Chip x={136} y={84} t="MEDIAN" bg="#78716C" />
    <rect x="0" y="106" width="340" height="56" fill={ROAD} />
    <rect x="150" y="38" width="92" height="28" rx="6" fill="#F59E0B" stroke={INK} strokeWidth="2" />
    {[0, 1, 2].map((k) => (
      <rect key={k} x={162 + k * 22} y="44" width="13" height="9" rx="2" fill={INK} opacity="0.55" />
    ))}
    <circle cx="238" cy="40" r="4" fill="#DC2626" className="pulse" />
    <circle cx="238" cy="64" r="4" fill="#DC2626" className="pulse" />
    <text x="196" y="61" textAnchor="middle" fontSize="9" fontWeight="800" fill={INK} fontFamily={FB}>SCHOOL BUS</text>
    <CarT x={300} y={52} r={-90} />
    <Chip x={276} y={2} t="STOP" bg="#DC2626" />
    <CarT x={60} y={122} r={90} />
    <Chip x={38} y={188} t="STOP" bg="#DC2626" />
    <CarT x={120} y={148} r={90} />
    <Chip x={98} y={188} t="STOP" bg="#DC2626" />
    <text x="170" y="180" textAnchor="middle" fontSize="11" fontWeight="800" fill="#B91C1C" fontFamily={FB}>Red flashers out? In NY, BOTH directions stop — median or not.</text>
  </Sg>
);

export function ArmPanel({ path, cap }: { path: string; cap: string }) {
  return (
    <div>
      <Sg vb="0 0 110 108" label={cap}>
        <rect x="30" y="52" width="72" height="30" rx="8" fill="#E4E4E7" stroke={INK} strokeWidth="2" />
        <rect x="38" y="38" width="26" height="20" rx="3" fill="#F5F5F4" stroke={INK} strokeWidth="1.5" />
        <circle cx="52" cy="46" r="6.5" fill={INK} />
        <circle cx="48" cy="86" r="9" fill={INK} />
        <circle cx="90" cy="86" r="9" fill={INK} />
        <path d={path} stroke={INK} strokeWidth="5.5" strokeLinecap="round" fill="none" />
      </Sg>
      <p className="text-[11px] text-zinc-600 font-medium mt-1 leading-tight text-center">{cap}</p>
    </div>
  );
}

export const HandSignalsD = () => (
  <div>
    <div className="grid grid-cols-3 gap-2">
      <ArmPanel path="M44 50 L10 50" cap="Straight out = LEFT turn" />
      <ArmPanel path="M44 50 L26 24" cap="Up = RIGHT turn" />
      <ArmPanel path="M44 50 L26 76" cap="Down = SLOW / STOP" />
    </div>
    <p className="text-xs text-zinc-600 mt-2">K53 grammar intact — the arm just moved to the <span className="font-bold">left</span> window.</p>
  </div>
);

export const DIAGRAMS: Record<string, ReactElement> = {
  yellowline: <YellowLineD />,
  lookleft: <LookLeftD />,
  leftturn: <LeftTurnD />,
  fourway: <FourWayD />,
  roundabout: <RoundaboutD />,
  parkzones: <ParkZonesD />,
  hillpark: <HillParkD />,
  schoolbus: <SchoolBusD />,
  handsignals: <HandSignalsD />,
  shapeshift: (
    <div className="flex items-center justify-center gap-4 py-1">
      <div className="w-16">{SIGNS.saCurve}</div>
      <ArrowLeftRight size={18} className="text-amber-500" />
      <div className="w-16">{SIGNS.curve}</div>
    </div>
  ),
  noturnred: (
    <div className="flex justify-center py-1">
      <div className="w-20">{SIGNS.noturnred}</div>
    </div>
  ),
};

export function Panel({ y, chip, bg, fg, cap, capColor, h = 60, children }: {
  y: number; chip: string; bg: string; fg?: string; cap: string; capColor: string;
  h?: number; children: ReactNode;
}) {
  return (
    <g transform={`translate(0 ${y})`}>
      <Chip x={8} y={0} t={chip} bg={bg} fg={fg} />
      <g transform="translate(0 24)"><rect x="0" y="0" width="340" height={h} fill={ROAD} />{children}</g>
      <Txt x={6} y={24 + h + 15} s={11} c={capColor} f={FB} a="start">{cap}</Txt>
    </g>
  );
}

export const ZA_P = { chip: "SOUTH AFRICA · KEEP LEFT", bg: "#047857", fg: "#fff", capColor: "#047857" };

export const NY_P = { chip: "NEW YORK · KEEP RIGHT", bg: "#F59E0B", fg: INK, capColor: "#B45309" };

export function Pair({ label, zaCap, nyCap, za, ny }: {
  label: string; zaCap: string; nyCap: string; za: ReactNode; ny: ReactNode;
}) {
  return (
    <Sg vb="0 0 340 216" label={label}>
      <Panel y={0} {...ZA_P} cap={zaCap}>{za}</Panel>
      <Panel y={110} {...NY_P} cap={nyCap}>{ny}</Panel>
    </Sg>
  );
}

export function Solo({ label, cap, note = "ZA · NO EQUIVALENT — LEARN IT FRESH", children }: {
  label: string; cap: string; note?: string; children: ReactNode;
}) {
  return (
    <Sg vb="0 0 340 128" label={label}>
      <Panel y={0} {...NY_P} cap={cap}>{children}</Panel>
      <Chip x={8} y={108} t={note} bg="#047857" />
    </Sg>
  );
}

export const Ax = ({ x, y, r, fill }: { x: number; y: number; r: number; fill?: string }) => (
  <g>
    <CarT x={x} y={y} r={r} fill={fill} />
    {r === 90 && <><line x1={x + 20} y1={y} x2={x + 44} y2={y} stroke="#E4E4E7" strokeWidth="2.5" /><Head x={x + 52} y={y} d="right" /></>}
    {r === -90 && <><line x1={x - 20} y1={y} x2={x - 44} y2={y} stroke="#E4E4E7" strokeWidth="2.5" /><Head x={x - 52} y={y} d="left" /></>}
  </g>
);

export const zaEdges = <><Ln y={2.5} c={LANE_Y} w={3.5} /><Ln y={57.5} c={LANE_Y} w={3.5} /></>;

export const nyEdges = <><Ln y={2.5} c={LANE_W} w={3.5} /><Ln y={57.5} c={LANE_W} w={3.5} /></>;

export const Ped = ({ x, y, fill = "#fff" }: { x: number; y: number; fill?: string }) => <Walker x={x} y={y} s={0.36} fill={fill} />;

export const MkYellowP = () => (
  <Pair label="Yellow line meaning" zaCap="yellow lives at the EDGES of the road" nyCap="yellow lives in the MIDDLE — the far side is oncoming traffic"
    za={<>{zaEdges}<Ln y={30} c={LANE_W} d="16 12" /><Ax x={92} y={15} r={90} fill="#10B981" /><Ax x={248} y={45} r={-90} fill="#A7F3D0" /></>}
    ny={<>{nyEdges}<Ln y={27.5} c={LANE_Y} /><Ln y={32.5} c={LANE_Y} /><Ax x={248} y={15} r={-90} /><Ax x={92} y={45} r={90} fill="#F59E0B" /></>} />
);

export const swing = "C140 15 140 45 168 45 L216 45 C244 45 244 15 270 15";

export const MkBrokenP = () => (
  <Pair label="Broken centre line: passing allowed" zaCap="broken WHITE centre: overtake when clear" nyCap="broken YELLOW centre: pass when clear — same rule, new colour"
    za={<>{zaEdges}<Ln y={30} c={LANE_W} d="16 12" /><CarT x={92} y={15} r={90} fill="#10B981" /><CarT x={190} y={15} r={90} fill="#A7F3D0" />
      <path d={`M112 15 ${swing}`} fill="none" stroke="#E4E4E7" strokeWidth="2.5" strokeDasharray="6 4" /><Head x={282} y={15} d="right" /></>}
    ny={<>{nyEdges}<Ln y={30} c={LANE_Y} d="16 12" /><CarT x={92} y={45} r={90} fill="#F59E0B" /><CarT x={190} y={45} r={90} fill="#FDE68A" />
      <path d="M112 45 C140 45 140 15 168 15 L216 15 C244 15 244 45 270 45" fill="none" stroke="#E4E4E7" strokeWidth="2.5" strokeDasharray="6 4" /><Head x={282} y={45} d="right" /></>} />
);

export const MkSolidP = () => (
  <Pair label="Solid centre: no passing" zaCap="solid WHITE centre: no overtaking" nyCap="DOUBLE solid yellow: no passing, either direction"
    za={<>{zaEdges}<Ln y={30} c={LANE_W} /><Ax x={92} y={15} r={90} fill="#10B981" /><Ax x={248} y={45} r={-90} fill="#A7F3D0" /></>}
    ny={<>{nyEdges}<Ln y={27.5} c={LANE_Y} /><Ln y={32.5} c={LANE_Y} /><Ax x={248} y={15} r={-90} /><Ax x={92} y={45} r={90} fill="#F59E0B" /></>} />
);

export const MkYourSideP = () => (
  <Pair label="Solid line on your side" zaCap="solid on YOUR side = stay put; broken on theirs = they may pass" nyCap="same logic in yellow: the line nearest you is the one that governs"
    za={<>{zaEdges}<Ln y={27.5} c={LANE_W} /><Ln y={32.5} c={LANE_W} d="16 12" /><Ax x={80} y={15} r={90} fill="#10B981" /><Ax x={260} y={45} r={-90} fill="#A7F3D0" />
      <Chip x={160} y={6} t="NO PASSING" bg="#DC2626" /><Chip x={160} y={36} t="MAY PASS" bg="#047857" /></>}
    ny={<>{nyEdges}<Ln y={27.5} c={LANE_Y} d="16 12" /><Ln y={32.5} c={LANE_Y} /><Ax x={260} y={15} r={-90} /><Ax x={80} y={45} r={90} fill="#F59E0B" />
      <Chip x={160} y={6} t="MAY PASS" bg="#047857" /><Chip x={160} y={36} t="NO PASSING" bg="#DC2626" /></>} />
);

export const MkEdgesP = () => (
  <Pair label="Lane and edge lines on a divided road" zaCap="yellow = the shoulder on your left; broken white between lanes" nyCap="one-way roadway: YELLOW on your left (median side), WHITE on your right"
    za={<><Ln y={2.5} c={LANE_Y} w={3.5} /><rect x="0" y="54" width="340" height="6" fill="#D6D3D1" /><Ln y={27} c={LANE_W} d="16 12" /><Ax x={92} y={13} r={90} fill="#10B981" /><Ax x={210} y={41} r={90} fill="#A7F3D0" />
      <Txt x={334} y={59} s={7} c={INK} f={FB} a="end">MEDIAN</Txt></>}
    ny={<><Ln y={2.5} c={LANE_Y} w={3.5} /><Ln y={57.5} c={LANE_W} w={3.5} /><Ln y={30} c={LANE_W} d="16 12" /><Ax x={92} y={15} r={90} /><Ax x={210} y={45} r={90} fill="#F59E0B" />
      <Txt x={334} y={9} s={7} c="#FDE68A" f={FB} a="end">MEDIAN THIS SIDE</Txt></>} />
);

export const MkStopLinesP = () => (
  <Pair label="Stop and yield lines" zaCap="solid stop line; a broken line marks yield" nyCap="solid stop line; YIELD = a row of white shark teeth pointing at you"
    za={<>{zaEdges}<Ln y={30} c={LANE_W} d="16 12" /><Ax x={80} y={15} r={90} fill="#10B981" /><rect x="196" y="0" width="5" height="30" fill={LANE_W} />
      <line x1="272" y1="0" x2="272" y2="30" stroke={LANE_W} strokeWidth="4" strokeDasharray="5 4" />
      <Txt x={198} y={50} s={9} c="#E4E4E7" f={FB} a="middle">STOP LINE</Txt><Txt x={272} y={50} s={9} c="#E4E4E7" f={FB} a="middle">YIELD LINE</Txt></>}
    ny={<>{nyEdges}<Ln y={27.5} c={LANE_Y} /><Ln y={32.5} c={LANE_Y} /><Ax x={80} y={45} r={90} fill="#F59E0B" /><rect x="196" y="30" width="5" height="30" fill={LANE_W} />
      {[32, 38, 44, 50].map((y) => <polygon key={y} points={`272,${y} 263,${y + 3} 272,${y + 6}`} fill={LANE_W} />)}
      <Txt x={198} y={19} s={9} c="#E4E4E7" f={FB} a="middle">STOP LINE</Txt><Txt x={272} y={19} s={9} c="#E4E4E7" f={FB} a="middle">YIELD LINE</Txt></>} />
);

export const MkCrosswalkP = () => (
  <Pair label="Pedestrian crossings" zaCap="zebra: pedestrians own it the moment they step on" nyCap="crosswalk: stop BEFORE the line — turning cars yield to people even on green"
    za={<>{zaEdges}<Ln y={30} c={LANE_W} d="16 12" x2={190} /><Ln y={30} c={LANE_W} d="16 12" x1={246} />
      {[3, 14, 25, 36, 47].map((y) => <rect key={y} x="196" y={y} width="44" height="7" fill={LANE_W} />)}
      <Ax x={80} y={15} r={90} fill="#10B981" /><Ped x={218} y={6} fill={INK} /></>}
    ny={<>{nyEdges}<Ln y={27.5} c={LANE_Y} x2={190} /><Ln y={32.5} c={LANE_Y} x2={190} /><Ln y={27.5} c={LANE_Y} x1={246} /><Ln y={32.5} c={LANE_Y} x1={246} />
      <rect x="194" y="0" width="4" height="60" fill={LANE_W} /><rect x="238" y="0" width="4" height="60" fill={LANE_W} />
      {[6, 18, 30, 42].map((y) => <rect key={y} x="200" y={y} width="36" height="6" fill={LANE_W} opacity="0.4" />)}
      <rect x="184" y="30" width="5" height="30" fill={LANE_W} /><Ax x={80} y={45} r={90} fill="#F59E0B" /><Ped x={218} y={6} /></>} />
);

export const MkTurnLaneS = () => (
  <Solo label="Two-way left turn lane" cap="centre lane is for LEFT turns only — from either direction, never for passing">
    <Ln y={18.5} c={LANE_Y} /><Ln y={22.5} c={LANE_Y} d="14 10" /><Ln y={37.5} c={LANE_Y} d="14 10" /><Ln y={41.5} c={LANE_Y} />
    <path d="M124 37 Q124 27 112 27" fill="none" stroke={LANE_W} strokeWidth="3" /><Head x={104} y={27} d="left" />
    <path d="M216 23 Q216 33 228 33" fill="none" stroke={LANE_W} strokeWidth="3" /><Head x={236} y={33} d="right" />
    <CarT x={50} y={9} r={-90} /><CarT x={290} y={51} r={90} fill="#F59E0B" />
  </Solo>
);

export const MkBikeS = () => (
  <Solo label="Bike lane" cap="never drive or park in it; cross only where the line is DASHED, after yielding to bikes">
    <Ln y={20.5} c={LANE_Y} /><Ln y={23.5} c={LANE_Y} />
    <rect x="0" y="46" width="340" height="14" fill="#15803D" />
    <Ln y={45} c={LANE_W} w={2.5} x2={230} /><Ln y={45} c={LANE_W} w={2.5} d="8 6" x1={230} />
    <BikeGlyph x={40} y={53} s={0.7} /><BikeGlyph x={200} y={53} s={0.7} />
    <line x1="212" y1="53" x2="234" y2="53" stroke="#fff" strokeWidth="2" /><Head x={244} y={53} d="right" fill="#fff" />
    <CarT x={140} y={33} r={90} fill="#F59E0B" />
    <path d="M160 33 Q262 33 268 62" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="8 6" /><Head x={268} y={72} d="down" fill="#F59E0B" />
    <Chip x={226} y={2} t="YIELD to bikes" bg="#DC2626" />
  </Solo>
);

export const MkBusS = () => (
  <Solo label="Bus lane" cap="red lane = BUS ONLY in posted hours — cameras ticket you; enter only for the next right turn" note="ZA · NO EQUIVALENT — NYC LIFE, NOT THE TEST">
    <Ln y={30} c={LANE_W} d="14 10" />
    <rect x="0" y="31" width="340" height="29" fill="#991B1B" opacity="0.85" />
    <Txt x={120} y={50} s={13} c="#fff" letterSpacing="2">BUS ONLY</Txt>
    <rect x="236" y="36" width="88" height="20" rx="5" fill="#DBEAFE" stroke={INK} strokeWidth="1.5" /><rect x="236" y="42" width="88" height="4" fill="#1D4ED8" />
    <Ax x={70} y={15} r={90} fill="#F59E0B" />
  </Solo>
);

export const MkHovS = () => (
  <Solo label="Diamond lane" cap="painted diamond = restricted lane (HOV / bus) — the sign says who and when">
    <Ln y={30} c={LANE_W} d="14 10" />
    {[60, 170, 280].map((x) => <polygon key={x} points={`${x - 14},15 ${x},8 ${x + 14},15 ${x},22`} fill={LANE_W} />)}
    <Ax x={110} y={45} r={90} fill="#F59E0B" /><CarT x={230} y={45} r={90} />
  </Solo>
);

export const MkRRS = () => (
  <Solo label="Railroad crossing markings" cap="painted X + RR and a set-back stop line: train coming? stop 15–50 ft from the rails" note="ZA · RARE AT HOME — LEARN IT FRESH">
    <Ln y={27.5} c={LANE_Y} /><Ln y={32.5} c={LANE_Y} />
    <path d="M150 34 L200 58 M200 34 L150 58" stroke={LANE_W} strokeWidth="6" />
    <Txt x={136} y={50} s={12} c={LANE_W}>R</Txt><Txt x={214} y={50} s={12} c={LANE_W}>R</Txt>
    <rect x="228" y="30" width="5" height="30" fill={LANE_W} />
    {[6, 20, 34, 48].map((y) => <rect key={y} x="256" y={y} width="30" height="4" fill="#57534E" />)}
    <rect x="262" y="0" width="4" height="60" fill={INK} opacity="0.75" /><rect x="276" y="0" width="4" height="60" fill={INK} opacity="0.75" />
    <Ax x={60} y={45} r={90} fill="#F59E0B" />
  </Solo>
);

export const MkKerbP = () => (
  <Pair label="Kerb rules" zaCap="a painted kerb line speaks: yellow (or red) = no stopping" nyCap="the kerb is silent — the sign on the pole rules. Ladder: parking → standing → stopping"
    za={<><rect x="0" y="0" width="340" height="14" fill="#E7E5E4" /><Ln y={15.5} c={LANE_Y} w={3.5} /><Ln y={57.5} c={LANE_Y} w={3.5} /><Ln y={37} c={LANE_W} d="16 12" />
      <Ax x={140} y={48} r={-90} fill="#10B981" /><CarT x={230} y={26} r={90} fill="#A7F3D0" /><Chip x={254} y={20} t="NO STOPPING" bg="#DC2626" /></>}
    ny={<><rect x="0" y="46" width="340" height="14" fill="#E7E5E4" /><Ln y={2.5} c={LANE_W} w={3.5} /><Ln y={21.5} c={LANE_Y} /><Ln y={24.5} c={LANE_Y} />
      <Ax x={140} y={11} r={-90} /><CarT x={230} y={34} r={90} fill="#F59E0B" />
      <rect x="299" y="30" width="2" height="16" fill={INK} /><rect x="284" y="6" width="32" height="24" rx="2" fill="#fff" stroke="#DC2626" strokeWidth="1.5" />
      <Txt x={300} y={16} s={6.5} c="#DC2626">NO STANDING</Txt><Txt x={300} y={26} s={6.5} c="#DC2626">ANYTIME</Txt></>} />
);

export function Cross({
  vw = 64, hh = 64, vLines = "two", hLines = "two",
  vLanes = [], hLanes = [], h = 202, label = "Intersection", children,
}: {
  vw?: number; hh?: number;
  /** how the centre of each road is painted: double yellow, single dashed, or nothing */
  vLines?: "two" | "one" | "none"; hLines?: "two" | "one" | "none";
  /** extra dashed lane lines, given as coordinates */
  vLanes?: number[]; hLanes?: number[];
  h?: number; label?: string; children: ReactNode;
}) {
  const vx = 170 - vw / 2, hy = 100 - hh / 2, vy1 = hy + hh, hx1 = vx + vw;
  const dash = { stroke: LANE_W, strokeWidth: 3, strokeDasharray: "12 9" };
  return (
    <Sg vb={`0 0 340 ${h}`} label={label}>
      <rect x={vx} y="0" width={vw} height={h} fill={ROAD} />
      <rect x="0" y={hy} width="340" height={hh} fill={ROAD} />
      {vLines === "two" && (
        <>
          <rect x="167" y="0" width="3" height={hy - 8} fill={LANE_Y} /><rect x="172" y="0" width="3" height={hy - 8} fill={LANE_Y} />
          <rect x="167" y={vy1 + 8} width="3" height={h - vy1 - 8} fill={LANE_Y} /><rect x="172" y={vy1 + 8} width="3" height={h - vy1 - 8} fill={LANE_Y} />
        </>
      )}
      {vLines === "one" && (
        <><line x1="170" y1="0" x2="170" y2={hy - 8} {...dash} /><line x1="170" y1={vy1 + 8} x2="170" y2={h} {...dash} /></>
      )}
      {hLines === "two" && (
        <>
          <rect x="0" y="97" width={vx - 8} height="3" fill={LANE_Y} /><rect x="0" y="102" width={vx - 8} height="3" fill={LANE_Y} />
          <rect x={hx1 + 8} y="97" width={332 - hx1} height="3" fill={LANE_Y} /><rect x={hx1 + 8} y="102" width={332 - hx1} height="3" fill={LANE_Y} />
        </>
      )}
      {hLines === "one" && (
        <><line x1="0" y1="100" x2={vx - 8} y2="100" {...dash} /><line x1={hx1 + 8} y1="100" x2="340" y2="100" {...dash} /></>
      )}
      {vLanes.map((x) => <g key={x}><line x1={x} y1="0" x2={x} y2={hy - 8} {...dash} /><line x1={x} y1={vy1 + 8} x2={x} y2={h} {...dash} /></g>)}
      {hLanes.map((y) => <g key={y}><line x1="0" y1={y} x2={vx - 8} y2={y} {...dash} /><line x1={hx1 + 8} y1={y} x2="340" y2={y} {...dash} /></g>)}
      {children}
    </Sg>
  );
}

export const Dash = ({ d, c = "#F59E0B", w = 4, red }: {
  d: string; c?: string; w?: number; red?: boolean;
}) => (
  <path d={d} fill="none" stroke={red ? "#DC2626" : c} strokeWidth={red ? 3 : w} strokeDasharray={red ? "6 5" : "10 8"} />
);

export const RightTurnD = () => (
  <Cross hh={96} hLanes={[76, 124]} label="Right turn into the nearest lane">
    <CarT x={187} y={180} r={0} fill="#F59E0B" />
    <Dash d="M187 160 Q187 136 214 136" /><Head x={224} y={136} d="right" fill="#F59E0B" />
    <Dash d="M187 160 Q187 112 214 112" red /><Head x={224} y={112} d="right" fill="#DC2626" />
    <Chip x={232} y={146} t="YES: near lane" bg="#047857" /><Chip x={232} y={92} t="NO: far lane" bg="#DC2626" />
    <Ax x={70} y={64} r={-90} />
  </Cross>
);

export const LeftTwoWayD = () => (
  <Cross vw={96} hh={96} vLanes={[146, 194]} hLanes={[76, 124]} label="Left turn geometry">
    <CarT x={182} y={180} r={0} fill="#F59E0B" />
    <Dash d="M182 160 Q182 88 130 88" /><Head x={120} y={88} d="left" fill="#F59E0B" />
    <Dash d="M182 160 Q170 116 130 112" red /><Head x={120} y={112} d="left" fill="#DC2626" />
    <Chip x={6} y={60} t="YES: lane by the centre" bg="#047857" /><Chip x={6} y={128} t="NO: cutting the corner" bg="#DC2626" />
    <CarT x={134} y={22} r={180} /><line x1="134" y1="42" x2="134" y2="52" stroke="#E4E4E7" strokeWidth="2.5" /><Head x={134} y={60} d="down" />
    <Ax x={40} y={136} r={90} />
  </Cross>
);

export const LeftOneWayD = () => (
  <Cross hLines="one" label="Left turn onto a one-way street">
    {[52, 312].map((x) => (
      <g key={x}>
        <line x1={x + 22} y1="84" x2={x} y2="84" stroke="#E4E4E7" strokeWidth="2.5" /><Head x={x - 8} y={84} d="left" />
        <line x1={x + 22} y1="116" x2={x} y2="116" stroke="#E4E4E7" strokeWidth="2.5" /><Head x={x - 8} y={116} d="left" />
      </g>
    ))}
    <CarT x={187} y={180} r={0} fill="#F59E0B" />
    <Dash d="M187 160 Q187 116 150 116" /><Head x={140} y={116} d="left" fill="#F59E0B" />
    <Dash d="M187 160 Q187 84 150 84" red /><Head x={140} y={84} d="left" fill="#DC2626" />
    <Chip x={6} y={136} t="YES: the LEFT lane" bg="#047857" /><Chip x={6} y={46} t="NO: the right lane" bg="#DC2626" />
    <Chip x={212} y={30} t="ONE WAY" bg="#fff" fg={INK} />
  </Cross>
);

export const MiniCross = ({ oneway, children }: { oneway?: boolean; children: ReactNode }) => (
  <Sg vb="0 0 120 130" label="Turn on red">
    <rect x="40" y="0" width="40" height="130" fill={ROAD} /><rect x="0" y="30" width="120" height="40" fill={ROAD} />
    {oneway ? (
      <><Head x={8} y={40} d="left" /><Head x={8} y={60} d="left" /><Head x={50} y={10} d="up" /><Head x={70} y={10} d="up" /></>
    ) : (
      <><rect x="59" y="0" width="1.5" height="22" fill={LANE_Y} /><rect x="59" y="78" width="1.5" height="52" fill={LANE_Y} />
        <rect x="0" y="49.5" width="32" height="1.5" fill={LANE_Y} /><rect x="88" y="49.5" width="32" height="1.5" fill={LANE_Y} /></>
    )}
    <rect x="6" y="4" width="14" height="32" rx="3" fill={INK} /><circle cx="13" cy="11" r="4" fill="#DC2626" /><circle cx="13" cy="20" r="4" fill="#3F3F46" /><circle cx="13" cy="29" r="4" fill="#3F3F46" />
    <CarT x={70} y={112} r={0} fill="#F59E0B" />
    {children}
  </Sg>
);

export const RedTurnsD = () => (
  <div className="grid grid-cols-3 gap-2">
    <div>
      <MiniCross>
        <Dash d="M70 96 Q70 50 92 50" red /><circle cx="100" cy="50" r="11" fill="none" stroke="#DC2626" strokeWidth="3" /><path d="M92 42 L108 58" stroke="#DC2626" strokeWidth="3" />
      </MiniCross>
      <p className="text-[11px] text-zinc-600 font-medium mt-1 leading-tight">NYC: red = NO right turn, unless a sign allows it</p>
    </div>
    <div>
      <MiniCross>
        <rect x="60" y="72" width="20" height="3" fill={LANE_W} /><Dash d="M70 96 Q70 50 96 50" w={3} /><Head x={106} y={50} d="right" fill="#F59E0B" />
      </MiniCross>
      <p className="text-[11px] text-zinc-600 font-medium mt-1 leading-tight">Rest of NY: full stop, yield to people and traffic, then right on red — unless a sign forbids</p>
    </div>
    <div>
      <MiniCross oneway>
        <rect x="60" y="72" width="20" height="3" fill={LANE_W} /><Dash d="M70 96 Q70 50 44 50" w={3} /><Head x={34} y={50} d="left" fill="#F59E0B" />
      </MiniCross>
      <p className="text-[11px] text-zinc-600 font-medium mt-1 leading-tight">Rest of NY: LEFT on red only from a one-way onto a one-way, after a full stop. Never inside NYC.</p>
    </div>
  </div>
);

export const Signal100D = () => (
  <Sg vb="0 0 340 128" label="Signal 100 feet before turning">
    <rect x="0" y="20" width="340" height="60" fill={ROAD} /><rect x="300" y="0" width="40" height="128" fill={ROAD} />
    <rect x="0" y="48.5" width="292" height="3" fill={LANE_Y} /><rect x="0" y="53.5" width="292" height="3" fill={LANE_Y} />
    <CarT x={30} y={66} r={90} fill="#F59E0B" /><circle cx="46" cy="73" r="3" fill="#F59E0B" className="pulse" />
    {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={54 + i * 38} y="57" width="32" height="18" rx="4" fill="none" stroke="#FDE68A" strokeWidth="1.5" strokeDasharray="4 3" />)}
    <Dash d="M292 66 Q318 66 320 90" w={3} /><Head x={320} y={100} d="down" fill="#F59E0B" />
    <line x1="48" y1="98" x2="298" y2="98" stroke={INK} strokeWidth="1.5" /><line x1="48" y1="92" x2="48" y2="104" stroke={INK} strokeWidth="1.5" /><line x1="298" y1="92" x2="298" y2="104" stroke={INK} strokeWidth="1.5" />
    <Txt x={173} y={118} s={11} c="#3F3F46" f={FB}>100 FT (30 m) ≈ 7 car lengths — signal BEFORE this point</Txt>
  </Sg>
);

export const UturnD = () => (
  <Sg vb="0 0 340 166" label="U-turn rules">
    <rect x="0" y="16" width="340" height="100" fill={ROAD} />
    <Ln y={41} c={LANE_W} d="14 10" /><Ln y={91} c={LANE_W} d="14 10" />
    <rect x="0" y="64.5" width="340" height="3" fill={LANE_Y} /><rect x="0" y="69.5" width="340" height="3" fill={LANE_Y} />
    <CarT x={110} y={79} r={90} fill="#F59E0B" />
    <Dash d="M132 79 C196 79 196 54 132 54" /><Head x={122} y={54} d="left" fill="#F59E0B" />
    <Chip x={8} y={20} t="from the lane nearest the centre" bg="#fff" fg={INK} />
    <line x1="10" y1="130" x2="330" y2="130" stroke={INK} strokeWidth="1.5" /><Head x={10} y={130} d="left" fill={INK} /><Head x={330} y={130} d="right" fill={INK} />
    <Txt x={170} y={147} s={11} c="#3F3F46" f={FB}>500 FT of clear sight in both directions — or don't</Txt>
    <Txt x={170} y={161} s={10.5} c="#B91C1C" f={FB}>never on expressways · never in NYC business districts</Txt>
  </Sg>
);

export function KPanel({ n, cap, children }: {
  /** the step number shown in the corner badge */
  n: string; cap: string; children: ReactNode;
}) {
  return (
    <div>
      <Sg vb="0 0 120 92" label={cap}>
        <rect x="0" y="0" width="120" height="92" fill="#E7E5E4" /><rect x="0" y="14" width="120" height="64" fill={ROAD} />
        <line x1="0" y1="46" x2="120" y2="46" stroke={LANE_Y} strokeWidth="2" strokeDasharray="8 6" />
        <circle cx="12" cy="12" r="9" fill={INK} /><Txt x={12} y={16} s={11} c="#fff" f={FB}>{n}</Txt>
        {children}
      </Sg>
      <p className="text-[11px] text-zinc-600 font-medium mt-1 leading-tight">{cap}</p>
    </div>
  );
}

export const ThreePointD = () => (
  <div className="grid grid-cols-3 gap-2">
    <KPanel n="1" cap="Signal left; turn hard left to the far kerb">
      <CarT x={36} y={64} r={90} fill="#F59E0B" /><Dash d="M54 64 Q96 64 100 24" w={3} /><Head x={100} y={16} d="up" fill="#F59E0B" />
    </KPanel>
    <KPanel n="2" cap="Reverse, wheel right, back toward the near kerb">
      <CarT x={92} y={30} r={-30} fill="#F59E0B" /><Dash d="M82 44 Q40 60 26 72" w={3} /><Head x={20} y={76} d="left" fill="#F59E0B" />
    </KPanel>
    <KPanel n="3" cap="Drive away the other way — three moves, same as home">
      <CarT x={72} y={28} r={-90} fill="#F59E0B" /><line x1="52" y1="28" x2="26" y2="28" stroke="#F59E0B" strokeWidth="3" /><Head x={18} y={28} d="left" fill="#F59E0B" />
    </KPanel>
  </div>
);

export const BikeTurnD = () => (
  <Sg vb="0 0 340 168" label="Right turn across a bike lane">
    <rect x="0" y="16" width="340" height="56" fill={ROAD} />
    <rect x="0" y="74" width="340" height="16" fill="#15803D" />
    <rect x="230" y="90" width="44" height="78" fill={ROAD} /><rect x="230" y="74" width="44" height="16" fill={ROAD} opacity="0.5" />
    <rect x="0" y="42.5" width="340" height="3" fill={LANE_Y} /><rect x="0" y="47.5" width="340" height="3" fill={LANE_Y} />
    <Ln y={73} c={LANE_W} w={2.5} x2={200} /><Ln y={73} c={LANE_W} w={2.5} d="8 6" x1={200} />
    <CarT x={120} y={60} r={90} fill="#F59E0B" />
    <Dash d="M140 60 Q246 60 252 100" /><Head x={252} y={110} d="down" fill="#F59E0B" />
    <BikeGlyph x={150} y={82} s={0.8} /><line x1="164" y1="82" x2="196" y2="82" stroke="#fff" strokeWidth="2" /><Head x={206} y={82} d="right" fill="#fff" />
    <Chip x={258} y={24} t="YIELD to the bike" bg="#DC2626" />
    <Txt x={170} y={160} s={11} c="#3F3F46" f={FB}>Signal early · mirror-check RIGHT · cross only where dashed</Txt>
  </Sg>
);

export const UncontrolledD = () => (
  <Sg vb="0 0 340 176" label="T-intersection right of way">
    <rect x="0" y="30" width="340" height="64" fill={ROAD} /><rect x="138" y="94" width="64" height="82" fill={ROAD} />
    <rect x="0" y="59.5" width="340" height="3" fill={LANE_Y} /><rect x="0" y="64.5" width="340" height="3" fill={LANE_Y} />
    <rect x="167" y="102" width="3" height="74" fill={LANE_Y} /><rect x="172" y="102" width="3" height="74" fill={LANE_Y} />
    <Ax x={70} y={78} r={90} /><Ax x={270} y={46} r={-90} />
    <CarT x={187} y={150} r={0} fill="#F59E0B" />
    <Chip x={6} y={120} t="THROUGH ROAD WINS" bg="#047857" /><Chip x={210} y={120} t="YIELD" bg="#DC2626" />
  </Sg>
);

Object.assign(DIAGRAMS, {
  yellowline: <MkYellowP />,
  lanelines: <MkEdgesP />, yourside: <MkYourSideP />, broken: <MkBrokenP />, solidlines: <MkSolidP />, stoplines: <MkStopLinesP />,
  crosswalk: <MkCrosswalkP />, turnlane: <MkTurnLaneS />, bike: <MkBikeS />, bus: <MkBusS />, hov: <MkHovS />, rrmarks: <MkRRS />, kerb: <MkKerbP />,
  rightturn: <RightTurnD />, lefttwoway: <LeftTwoWayD />, leftoneway: <LeftOneWayD />, redturns: <RedTurnsD />, signal100: <Signal100D />,
  uturn: <UturnD />, threepoint: <ThreePointD />, biketurn: <BikeTurnD />, uncontrolled: <UncontrolledD />,
  bikebus: <div className="space-y-3"><MkBikeS /><MkBusS /></div>,
  flashing: (
    <div className="flex justify-center gap-8 py-1">
      <div className="w-16 text-center"><div>{SIGNS.sigFlashRed}</div><p className="text-[11px] text-zinc-600 font-medium mt-1">= stop sign</p></div>
      <div className="w-16 text-center"><div>{SIGNS.sigFlashYellow}</div><p className="text-[11px] text-zinc-600 font-medium mt-1">= slow, go with care</p></div>
    </div>
  ),
  newshapes: (
    <div className="flex justify-center items-center gap-5 py-1">
      <div className="w-24">{SIGNS.pennant}</div><div className="w-14">{SIGNS.rr}</div><div className="w-14">{SIGNS.school}</div>
    </div>
  ),
  stopyieldsigns: (
    <div className="flex justify-center items-center gap-6 py-1"><div className="w-16">{SIGNS.stop}</div><div className="w-16">{SIGNS.yield}</div></div>
  ),
  speed25show: <div className="flex justify-center py-1"><div className="w-16">{SIGNS.speed25}</div></div>,
  speed55show: <div className="flex justify-center py-1"><div className="w-16">{SIGNS.speed55}</div></div>,
});
