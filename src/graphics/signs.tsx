import type { ReactElement } from 'react';
import { FD, FB, INK, LANE_W, LANE_Y } from './tokens';
import { Sg, Dmd, WhiteSq, SaTri, SaCircle, NYCSign, Mini, CarT, Head, Ln, Txt, Walker, DeerGlyph, Skid, BikeGlyph, SigHead } from './primitives';

// The sign library: US signs drawn to the MUTCD spec, their South African
// cousins, traffic signals, and road-marking thumbnails. `SIGNS` is the
// lookup every tile, translation row and quiz question renders from.

export const SignStop = () => (
  <Sg label="Stop sign">
    <polygon points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30" fill="#DC2626" stroke="#fff" strokeWidth="6" />
    <text x="50" y="60" textAnchor="middle" fontSize="27" fontWeight="800" fill="#fff" fontFamily={FD}>STOP</text>
  </Sg>
);

export const SignYield = () => (
  <Sg label="Yield sign">
    <polygon points="50,92 8,16 92,16" fill="#fff" stroke="#DC2626" strokeWidth="10" strokeLinejoin="round" />
    <text x="50" y="44" textAnchor="middle" fontSize="17" fontWeight="800" fill="#DC2626" fontFamily={FD}>YIELD</text>
  </Sg>
);

export const SignPennant = () => (
  <Sg vb="0 0 150 76" label="No passing zone pennant">
    <polygon points="4,6 146,38 4,70" fill="#FBBF24" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <text x="42" y="35" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK} fontFamily={FD}>NO PASSING</text>
    <text x="34" y="53" textAnchor="middle" fontSize="13" fontWeight="800" fill={INK} fontFamily={FD}>ZONE</text>
  </Sg>
);

export const SignRR = () => (
  <Sg label="Railroad crossing ahead">
    <circle cx="50" cy="50" r="45" fill="#FBBF24" stroke={INK} strokeWidth="4" />
    <path d="M27 27 L73 73 M73 27 L27 73" stroke={INK} strokeWidth="8" strokeLinecap="round" />
    <text x="22" y="58" textAnchor="middle" fontSize="21" fontWeight="800" fill={INK} fontFamily={FD}>R</text>
    <text x="78" y="58" textAnchor="middle" fontSize="21" fontWeight="800" fill={INK} fontFamily={FD}>R</text>
  </Sg>
);

export const SignSchool = () => (
  <Sg label="School zone">
    <polygon points="50,4 96,38 80,96 20,96 4,38" fill="#A3E635" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
    <circle cx="42" cy="34" r="6" fill={INK} />
    <path d="M42 41 V62 M42 62 L34 82 M42 62 L50 82 M42 47 L54 42" stroke={INK} strokeWidth="5" strokeLinecap="round" fill="none" />
    <circle cx="61" cy="43" r="5" fill={INK} />
    <path d="M61 49 V65 M61 65 L55 80 M61 65 L67 80" stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none" />
  </Sg>
);

export const WarnCross = () => (
  <Dmd label="Crossroad ahead">
    <path d="M50 28 V72 M28 50 H72" stroke={INK} strokeWidth="9" strokeLinecap="round" />
  </Dmd>
);

export const WarnCurve = () => (
  <Dmd label="Curve ahead">
    <path d="M40 74 Q40 42 62 37" fill="none" stroke={INK} strokeWidth="8" strokeLinecap="round" />
    <polygon points="58,27 76,35 60,46" fill={INK} />
  </Dmd>
);

export const WarnMerge = () => (
  <Dmd label="Merging traffic">
    <path d="M46 76 V38" stroke={INK} strokeWidth="8" strokeLinecap="round" />
    <polygon points="38,40 46,22 54,40" fill={INK} />
    <path d="M63 76 C63 60 55 52 49 47" fill="none" stroke={INK} strokeWidth="8" strokeLinecap="round" />
  </Dmd>
);

export const WarnSignal = () => (
  <Dmd label="Traffic signal ahead">
    <rect x="40" y="27" width="20" height="46" rx="5" fill={INK} />
    <circle cx="50" cy="37" r="5" fill="#DC2626" />
    <circle cx="50" cy="50" r="5" fill="#FDE047" />
    <circle cx="50" cy="63" r="5" fill="#22C55E" />
  </Dmd>
);

export const WarnDivided = () => (
  <Dmd label="Divided highway begins">
    <ellipse cx="50" cy="48" rx="6" ry="15" fill={INK} />
    <path d="M42 76 C36 62 36 48 38 34" fill="none" stroke={INK} strokeWidth="7" strokeLinecap="round" />
    <polygon points="31,37 38,22 45,36" fill={INK} />
    <path d="M58 76 C64 62 64 48 62 34" fill="none" stroke={INK} strokeWidth="7" strokeLinecap="round" />
    <polygon points="55,36 62,22 69,37" fill={INK} />
  </Dmd>
);

export const WarnRoundabout = () => (
  <Dmd label="Roundabout ahead, counter-clockwise">
    <circle cx="50" cy="52" r="17" fill="none" stroke={INK} strokeWidth="6" strokeDasharray="14 9" />
    <polygon points="56,29 40,35 56,41" fill={INK} />
    <polygon points="27,46 33,62 39,46" fill={INK} />
    <polygon points="61,63 77,69 63,77" fill={INK} />
  </Dmd>
);

export const WarnLaneEnds = () => (
  <Dmd label="Lane ends, merge left">
    <path d="M40 76 V26" stroke={INK} strokeWidth="7" strokeLinecap="round" />
    <path d="M63 76 V54 C63 42 54 37 47 32" fill="none" stroke={INK} strokeWidth="7" strokeLinecap="round" />
  </Dmd>
);

export const SignSpeed = ({ n }: { n: string }) => (
  <Sg vb="0 0 80 100" label={`Speed limit ${n}`}>
    <rect x="4" y="4" width="72" height="92" rx="7" fill="#fff" stroke={INK} strokeWidth="4" />
    <text x="40" y="29" textAnchor="middle" fontSize="14" fontWeight="700" fill={INK} fontFamily={FD}>SPEED</text>
    <text x="40" y="46" textAnchor="middle" fontSize="14" fontWeight="700" fill={INK} fontFamily={FD}>LIMIT</text>
    <text x="40" y="86" textAnchor="middle" fontSize="37" fontWeight="800" fill={INK} fontFamily={FD}>{n}</text>
  </Sg>
);

export const SignNoTurnRed = () => (
  <Sg label="No turn on red">
    <rect x="4" y="4" width="92" height="92" rx="7" fill="#fff" stroke={INK} strokeWidth="4" />
    <text x="50" y="33" textAnchor="middle" fontSize="19" fontWeight="800" fill={INK} fontFamily={FD}>NO</text>
    <text x="50" y="58" textAnchor="middle" fontSize="19" fontWeight="800" fill={INK} fontFamily={FD}>TURN</text>
    <text x="50" y="83" textAnchor="middle" fontSize="19" fontWeight="800" fill={INK} fontFamily={FD}>ON RED</text>
  </Sg>
);

export const SignOneWay = () => (
  <Sg vb="0 0 160 60" label="One way">
    <rect x="2" y="2" width="156" height="56" rx="5" fill={INK} />
    <rect x="14" y="22" width="88" height="16" fill="#fff" />
    <polygon points="102,10 150,30 102,50" fill="#fff" />
    <text x="58" y="35" textAnchor="middle" fontSize="14" fontWeight="800" fill={INK} fontFamily={FD}>ONE WAY</text>
  </Sg>
);

export const SignDoNotEnter = () => (
  <Sg label="Do not enter">
    <rect x="2" y="2" width="96" height="96" rx="7" fill="#fff" stroke={INK} strokeWidth="3" />
    <circle cx="50" cy="50" r="42" fill="#DC2626" />
    <text x="50" y="33" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily={FD}>DO NOT</text>
    <rect x="18" y="43" width="64" height="13" rx="2" fill="#fff" />
    <text x="50" y="78" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" fontFamily={FD}>ENTER</text>
  </Sg>
);

export const SignWrongWay = () => (
  <Sg vb="0 0 150 70" label="Wrong way">
    <rect x="2" y="2" width="146" height="66" rx="6" fill="#DC2626" stroke="#fff" strokeWidth="4" />
    <text x="75" y="32" textAnchor="middle" fontSize="23" fontWeight="800" fill="#fff" fontFamily={FD}>WRONG</text>
    <text x="75" y="59" textAnchor="middle" fontSize="23" fontWeight="800" fill="#fff" fontFamily={FD}>WAY</text>
  </Sg>
);

export const SignNoU = () => (
  <Sg label="No U-turn">
    <rect x="4" y="4" width="92" height="92" rx="7" fill="#fff" stroke={INK} strokeWidth="4" />
    <path d="M66 72 V46 a16 16 0 0 0 -32 0 V62" fill="none" stroke={INK} strokeWidth="8" />
    <polygon points="25,60 34,77 43,60" fill={INK} />
    <circle cx="50" cy="50" r="38" fill="none" stroke="#DC2626" strokeWidth="7" />
    <path d="M24 23 L77 76" stroke="#DC2626" strokeWidth="7" strokeLinecap="round" />
  </Sg>
);

export const SignWork = () => (
  <Dmd label="Road work ahead" fill="#F97316">
    <text x="50" y="41" textAnchor="middle" fontSize="14" fontWeight="800" fill={INK} fontFamily={FD}>ROAD</text>
    <text x="50" y="57" textAnchor="middle" fontSize="14" fontWeight="800" fill={INK} fontFamily={FD}>WORK</text>
    <text x="50" y="72" textAnchor="middle" fontSize="12" fontWeight="800" fill={INK} fontFamily={FD}>AHEAD</text>
  </Dmd>
);

export const SignGuide = () => (
  <Sg vb="0 0 150 70" label="Green guide sign">
    <rect x="2" y="2" width="146" height="66" rx="7" fill="#15803D" stroke="#fff" strokeWidth="3" />
    <text x="14" y="30" fontSize="16" fontWeight="700" fill="#fff" fontFamily={FB}>Albany</text>
    <text x="136" y="30" textAnchor="end" fontSize="16" fontWeight="700" fill="#fff" fontFamily={FB}>90</text>
    <text x="14" y="56" fontSize="16" fontWeight="700" fill="#fff" fontFamily={FB}>New York</text>
    <text x="136" y="56" textAnchor="end" fontSize="16" fontWeight="700" fill="#fff" fontFamily={FB}>10</text>
  </Sg>
);

export const SignService = () => (
  <Sg label="Motorist services">
    <rect x="4" y="4" width="92" height="92" rx="8" fill="#1D4ED8" stroke="#fff" strokeWidth="3" />
    <text x="50" y="70" textAnchor="middle" fontSize="54" fontWeight="800" fill="#fff" fontFamily={FD}>H</text>
  </Sg>
);

export const SignRec = () => (
  <Sg vb="0 0 150 70" label="Recreation sign">
    <rect x="2" y="2" width="146" height="66" rx="7" fill="#7C4A12" stroke="#fff" strokeWidth="3" />
    <polygon points="30,46 12,46 21,18" fill="#fff" />
    <rect x="18.5" y="46" width="5" height="9" fill="#fff" />
    <text x="90" y="42" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff" fontFamily={FD}>STATE PARK</text>
  </Sg>
);

export const SaCurve = () => (
  <SaTri label="SA curve warning">
    <path d="M42 78 Q42 52 60 47" fill="none" stroke={INK} strokeWidth="7" strokeLinecap="round" />
    <polygon points="56,39 72,45 58,55" fill={INK} />
  </SaTri>
);

export const SaRoundabout = () => (
  <SaTri label="SA roundabout warning, clockwise">
    <circle cx="50" cy="60" r="14" fill="none" stroke={INK} strokeWidth="5" strokeDasharray="11 8" />
    <polygon points="44,41 60,47 44,53" fill={INK} />
    <polygon points="72,55 66,71 60,55" fill={INK} />
    <polygon points="56,68 40,74 54,80" fill={INK} />
  </SaTri>
);

export const SaYield = () => (
  <Sg label="SA yield sign">
    <polygon points="50,90 6,14 94,14" fill="#fff" stroke="#DC2626" strokeWidth="9" strokeLinejoin="round" />
  </Sg>
);

export const SaSpeed = () => (
  <Sg label="SA speed limit 100">
    <circle cx="50" cy="50" r="44" fill="#fff" stroke="#DC2626" strokeWidth="9" />
    <text x="50" y="62" textAnchor="middle" fontSize="31" fontWeight="800" fill={INK} fontFamily={FD}>100</text>
  </Sg>
);

export const SaNoEntry = () => (
  <Sg label="SA no entry">
    <circle cx="50" cy="50" r="44" fill="#DC2626" />
    <rect x="20" y="43" width="60" height="14" rx="2" fill="#fff" />
  </Sg>
);

export const SIGNS: Record<string, ReactElement> = {
  stop: <SignStop />, yield: <SignYield />, pennant: <SignPennant />, rr: <SignRR />, school: <SignSchool />,
  cross: <WarnCross />, curve: <WarnCurve />, merge: <WarnMerge />, signal: <WarnSignal />,
  divided: <WarnDivided />, roundy: <WarnRoundabout />, laneends: <WarnLaneEnds />,
  speed55: <SignSpeed n="55" />, speed25: <SignSpeed n="25" />, noturnred: <SignNoTurnRed />,
  oneway: <SignOneWay />, dne: <SignDoNotEnter />, wrongway: <SignWrongWay />, nou: <SignNoU />,
  work: <SignWork />, guide: <SignGuide />, service: <SignService />, rec: <SignRec />,
  saCurve: <SaCurve />, saSpeed: <SaSpeed />, saRoundabout: <SaRoundabout />, saYield: <SaYield />, saNoEntry: <SaNoEntry />,
};

export const WarnStopAhead = () => (
  <Dmd label="Stop sign ahead">
    <polygon points="41,30 59,30 70,41 70,59 59,70 41,70 30,59 30,41" fill="#DC2626" stroke="#fff" strokeWidth="3" />
  </Dmd>
);

export const WarnYieldAhead = () => (
  <Dmd label="Yield sign ahead">
    <polygon points="50,72 30,34 70,34" fill="#fff" stroke="#DC2626" strokeWidth="6" strokeLinejoin="round" />
  </Dmd>
);

export const WarnPed = () => (
  <Dmd label="Pedestrian crossing" fill="#A3E635"><Walker x={48} y={30} s={0.9} /></Dmd>
);

export const WarnDeer = () => (
  <Dmd label="Deer crossing"><DeerGlyph x={11} y={11} s={0.78} /></Dmd>
);

export const WarnSlippery = () => (
  <Dmd label="Slippery when wet">
    <rect x="41" y="22" width="18" height="26" rx="5" fill={INK} transform="rotate(-18 50 35)" />
    <Skid x={44} y={78} /><Skid x={57} y={78} />
  </Dmd>
);

export const WarnHill = () => (
  <Dmd label="Steep hill">
    <polygon points="26,70 74,70 74,44" fill={INK} />
    <rect x="40" y="36" width="20" height="11" rx="2" fill={INK} transform="rotate(-28 50 41)" />
    <Txt x={38} y={66} s={11} c="#FBBF24">8%</Txt>
  </Dmd>
);

export const WarnTwoWay = () => (
  <Dmd label="Two-way traffic">
    <path d="M42 74 V36" stroke={INK} strokeWidth="7" strokeLinecap="round" />
    <polygon points="34,38 42,22 50,38" fill={INK} />
    <path d="M58 26 V64" stroke={INK} strokeWidth="7" strokeLinecap="round" />
    <polygon points="50,62 58,78 66,62" fill={INK} />
  </Dmd>
);

export const WarnWinding = () => (
  <Dmd label="Winding road">
    <path d="M40 76 C40 60 60 62 60 48 C60 36 42 38 44 26" fill="none" stroke={INK} strokeWidth="7" strokeLinecap="round" />
    <polygon points="37,30 46,17 53,30" fill={INK} />
  </Dmd>
);

export const WarnSideRoad = () => (
  <Dmd label="Side road from the right">
    <path d="M44 76 V26 M44 50 H70" stroke={INK} strokeWidth="8" strokeLinecap="round" />
  </Dmd>
);

export const WarnTee = () => (
  <Dmd label="T intersection ahead">
    <path d="M50 76 V42 M28 42 H72" stroke={INK} strokeWidth="8" strokeLinecap="round" />
  </Dmd>
);

export const WarnDeadEnd = () => (
  <Dmd label="Dead end">
    <Txt x={50} y={47} s={15}>DEAD</Txt><Txt x={50} y={64} s={15}>END</Txt>
  </Dmd>
);

export const WarnLowClear = () => (
  <Dmd label="Low clearance">
    <Txt x={50} y={41} s={11}>LOW</Txt><Txt x={50} y={54} s={11}>CLEARANCE</Txt><Txt x={50} y={69} s={12}>9'-6"</Txt>
  </Dmd>
);

export const WarnChevron = () => (
  <Sg label="Sharp curve chevron">
    <rect x="6" y="6" width="88" height="88" rx="6" fill="#FBBF24" stroke={INK} strokeWidth="4" />
    <polygon points="30,22 52,22 74,50 52,78 30,78 52,50" fill={INK} />
  </Sg>
);

export const SignCrossbuck = () => (
  <Sg label="Railroad crossing crossbuck">
    <g transform="rotate(-35 50 50)">
      <rect x="4" y="42" width="92" height="16" rx="2" fill="#fff" stroke={INK} strokeWidth="2" />
      <Txt x={50} y={54} s={10}>RAILROAD</Txt>
    </g>
    <g transform="rotate(35 50 50)">
      <rect x="4" y="42" width="92" height="16" rx="2" fill="#fff" stroke={INK} strokeWidth="2" />
      <Txt x={50} y={54} s={10}>CROSSING</Txt>
    </g>
  </Sg>
);

export const SignDoNotPass = () => (
  <WhiteSq label="Do not pass"><Txt x={50} y={33} s={19}>DO</Txt><Txt x={50} y={58} s={19}>NOT</Txt><Txt x={50} y={83} s={19}>PASS</Txt></WhiteSq>
);

export const SignKeepRight = () => (
  <WhiteSq label="Keep right">
    <ellipse cx="40" cy="54" rx="7" ry="20" fill={INK} />
    <path d="M52 80 C64 72 66 58 60 46" fill="none" stroke={INK} strokeWidth="7" strokeLinecap="round" />
    <polygon points="52,48 68,48 60,32" fill={INK} />
  </WhiteSq>
);

export const SignNoLeft = () => (
  <WhiteSq label="No left turn">
    <path d="M62 76 V44 a14 14 0 0 0 -14 -14 H36" fill="none" stroke={INK} strokeWidth="8" />
    <polygon points="38,20 22,30 38,40" fill={INK} />
    <circle cx="50" cy="50" r="38" fill="none" stroke="#DC2626" strokeWidth="7" />
    <path d="M24 23 L77 76" stroke="#DC2626" strokeWidth="7" strokeLinecap="round" />
  </WhiteSq>
);

export const SignNoParking = () => <NYCSign l1="PARKING" l2="ANYTIME" label="No parking anytime" />;

export const SignNoStanding = () => <NYCSign l1="STANDING" l2="ANYTIME" label="No standing anytime" />;

export const SignNoStopping = () => <NYCSign l1="STOPPING" l2="ANYTIME" label="No stopping anytime" />;

export const SignHOV = () => (
  <WhiteSq label="HOV lane">
    <polygon points="50,14 62,32 50,50 38,32" fill={INK} />
    <Txt x={50} y={72} s={16}>HOV 2+</Txt><Txt x={50} y={88} s={13}>ONLY</Txt>
  </WhiteSq>
);

export const SignStopHere = () => (
  <WhiteSq label="Stop here on red"><Txt x={50} y={33} s={19}>STOP</Txt><Txt x={50} y={58} s={15}>HERE ON</Txt><Txt x={50} y={83} s={19}>RED</Txt></WhiteSq>
);

export const SignYieldPeds = () => (
  <Sg vb="0 0 80 110" label="Yield to pedestrians in crosswalk">
    <rect x="3" y="3" width="74" height="104" rx="5" fill="#fff" stroke={INK} strokeWidth="3" />
    <Txt x={40} y={22} s={10}>STATE LAW</Txt>
    <polygon points="40,62 18,30 62,30" fill="#fff" stroke="#DC2626" strokeWidth="6" strokeLinejoin="round" />
    <Txt x={40} y={49} s={9} c="#DC2626">YIELD</Txt>
    <Walker x={40} y={70} s={0.55} />
    <Txt x={40} y={104} s={9}>TO PEDESTRIANS</Txt>
  </Sg>
);

export const SignLeftYield = () => (
  <WhiteSq label="Left turn yield on green">
    <Txt x={50} y={28} s={13}>LEFT TURN</Txt><Txt x={50} y={48} s={13}>YIELD</Txt><Txt x={50} y={68} s={13}>ON GREEN</Txt>
    <circle cx="50" cy="84" r="8" fill="#22C55E" stroke={INK} strokeWidth="2" />
  </WhiteSq>
);

export const SignLaneUse = () => (
  <WhiteSq label="Left turn only lane">
    <path d="M50 78 V44 a12 12 0 0 0 -12 -12 H30" fill="none" stroke={INK} strokeWidth="7" />
    <polygon points="32,22 18,32 32,42" fill={INK} />
    <Txt x={50} y={94} s={13}>ONLY</Txt>
  </WhiteSq>
);

export const SignInterstate = () => (
  <Sg label="Interstate shield">
    <path d="M14 22 Q50 12 86 22 V56 Q86 84 50 94 Q14 84 14 56 Z" fill="#1D4ED8" stroke="#fff" strokeWidth="3" />
    <path d="M14 22 Q50 12 86 22 V38 H14 Z" fill="#DC2626" />
    <Txt x={50} y={33} s={9} c="#fff">INTERSTATE</Txt><Txt x={50} y={80} s={30} c="#fff">95</Txt>
  </Sg>
);

export const SaPed = () => <SaTri label="SA pedestrian warning"><Walker x={50} y={40} s={0.85} /></SaTri>;

export const SaSignal = () => (
  <SaTri label="SA traffic signal ahead">
    <rect x="42" y="40" width="16" height="40" rx="4" fill={INK} />
    <circle cx="50" cy="48" r="4" fill="#DC2626" /><circle cx="50" cy="60" r="4" fill="#FDE047" /><circle cx="50" cy="72" r="4" fill="#22C55E" />
  </SaTri>
);

export const SaAnimal = () => <SaTri label="SA animal crossing"><DeerGlyph x={16} y={32} s={0.6} /></SaTri>;

export const SaHill = () => (
  <SaTri label="SA steep descent"><polygon points="28,80 72,80 72,56" fill={INK} /><Txt x={44} y={76} s={10} c="#fff">10%</Txt></SaTri>
);

export const SaTwoWay = () => (
  <SaTri label="SA two-way traffic">
    <path d="M42 80 V50" stroke={INK} strokeWidth="6" strokeLinecap="round" /><polygon points="35,52 42,38 49,52" fill={INK} />
    <path d="M58 44 V74" stroke={INK} strokeWidth="6" strokeLinecap="round" /><polygon points="51,72 58,86 65,72" fill={INK} />
  </SaTri>
);

export const SaRail = () => (
  <SaTri label="SA railway crossing">
    <path d="M30 60 H70 M30 72 H70 M36 52 V80 M50 52 V80 M64 52 V80" stroke={INK} strokeWidth="4" strokeLinecap="round" />
  </SaTri>
);

export const SaChildren = () => <SaTri label="SA children crossing"><Walker x={42} y={44} s={0.7} /><Walker x={58} y={50} s={0.6} /></SaTri>;

export const SaSlippery = () => (
  <SaTri label="SA slippery road">
    <rect x="41" y="34" width="16" height="22" rx="4" fill={INK} transform="rotate(-18 49 45)" />
    <Skid x={45} y={82} h={8} /><Skid x={56} y={82} h={8} />
  </SaTri>
);

export const SaSideRoad = () => <SaTri label="SA side road"><path d="M46 82 V38 M46 60 H68" stroke={INK} strokeWidth="7" strokeLinecap="round" /></SaTri>;

export const SaNoOvertake = () => (
  <SaCircle label="SA no overtaking">
    <rect x="30" y="30" width="16" height="36" rx="5" fill="#DC2626" /><rect x="54" y="34" width="16" height="36" rx="5" fill={INK} />
  </SaCircle>
);

export const SaNoLeft = () => (
  <SaCircle label="SA no left turn">
    <path d="M62 74 V46 a12 12 0 0 0 -12 -12 H40" fill="none" stroke={INK} strokeWidth="7" />
    <polygon points="42,24 28,34 42,44" fill={INK} />
    <path d="M22 22 L78 78" stroke="#DC2626" strokeWidth="8" strokeLinecap="round" />
  </SaCircle>
);

export const SaNoParking = () => (
  <SaCircle label="SA no parking" fill="#1D4ED8"><path d="M20 22 L80 78" stroke="#DC2626" strokeWidth="9" strokeLinecap="round" /></SaCircle>
);

export const SaNoStopping = () => (
  <SaCircle label="SA no stopping" fill="#1D4ED8"><path d="M20 22 L80 78 M80 22 L20 78" stroke="#DC2626" strokeWidth="9" strokeLinecap="round" /></SaCircle>
);

export const SaKeepLeft = () => (
  <Sg label="SA keep left">
    <circle cx="50" cy="50" r="44" fill="#1D4ED8" stroke="#fff" strokeWidth="3" />
    <path d="M62 24 L36 66" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
    <polygon points="24,78 30,52 48,63" fill="#fff" />
  </Sg>
);

export const SaOneWay = () => (
  <Sg vb="0 0 150 70" label="SA one way">
    <rect x="2" y="2" width="146" height="66" rx="5" fill="#1D4ED8" stroke="#fff" strokeWidth="3" />
    <rect x="20" y="28" width="80" height="14" fill="#fff" /><polygon points="100,16 134,35 100,54" fill="#fff" />
  </Sg>
);

export const SaFreeway = () => (
  <Sg vb="0 0 150 70" label="SA freeway guide sign">
    <rect x="2" y="2" width="146" height="66" rx="5" fill="#1D4ED8" stroke="#fff" strokeWidth="3" />
    <rect x="12" y="14" width="28" height="18" rx="3" fill="#fff" /><Txt x={26} y={27} s={11} c="#1D4ED8">N1</Txt>
    <Txt x={48} y={28} s={14} w={700} c="#fff" f={FB} a="start">Cape Town</Txt><Txt x={136} y={28} s={14} w={700} c="#fff" f={FB} a="end">25</Txt>
    <Txt x={14} y={54} s={14} w={700} c="#fff" f={FB} a="start">Paarl</Txt><Txt x={136} y={54} s={14} w={700} c="#fff" f={FB} a="end">8</Txt>
  </Sg>
);

export const SIG_COL = { red: "#DC2626", yel: "#FACC15", grn: "#22C55E", off: "#3F3F46" };

export const SigFlashRed = () => <SigHead label="Flashing red signal" lights={["red", "off", "off"]} flash={0} />;

export const SigFlashYellow = () => <SigHead label="Flashing yellow signal" lights={["off", "yel", "off"]} flash={1} />;

export const SigGreenArrow = () => <SigHead label="Green arrow" lights={["off", "off", "grnArrow"]} />;

export const SigRedArrow = () => <SigHead label="Red arrow" lights={["redArrow", "off", "off"]} />;

export const SigFlashYArrow = () => <SigHead label="Flashing yellow arrow" lights={["off", "yelArrow", "off"]} flash={1} />;

export const LaneCtrl = () => (
  <Sg vb="0 0 180 60" label="Lane control signals">
    {[0, 1, 2].map((k) => <rect key={k} x={6 + k * 60} y="6" width="48" height="48" rx="5" fill={INK} />)}
    <path d="M18 18 L42 42 M42 18 L18 42" stroke="#DC2626" strokeWidth="6" strokeLinecap="round" />
    <path d="M78 18 L102 42 M102 18 L78 42" stroke="#FACC15" strokeWidth="6" strokeLinecap="round" />
    <path d="M150 15 V38" stroke="#22C55E" strokeWidth="6" strokeLinecap="round" /><polygon points="139,36 161,36 150,50" fill="#22C55E" />
  </Sg>
);

export const PedWalk = () => (
  <Sg label="Walk signal"><rect x="4" y="4" width="92" height="92" rx="6" fill={INK} /><Walker x={50} y={26} fill="#fff" /></Sg>
);

export const PedHand = () => (
  <Sg label="Don't walk signal">
    <rect x="4" y="4" width="92" height="92" rx="6" fill={INK} />
    <rect x="36" y="48" width="28" height="30" rx="7" fill="#F97316" />
    {[36, 43, 50, 57].map((x) => <rect key={x} x={x} y="24" width="6" height="28" rx="3" fill="#F97316" />)}
    <rect x="26" y="50" width="7" height="20" rx="3.5" fill="#F97316" transform="rotate(-25 29 60)" />
  </Sg>
);

export const MkBroken = () => (
  <Mini label="Broken yellow centre line"><Ln y={30} c={LANE_Y} d="10 8" x2={120} /><CarT x={30} y={45} r={90} fill="#F59E0B" /><CarT x={90} y={15} r={-90} /></Mini>
);

export const MkYourSide = () => (
  <Mini label="Solid yellow on your side"><Ln y={27.5} c={LANE_Y} d="10 8" x2={120} /><Ln y={32.5} c={LANE_Y} x2={120} /><CarT x={30} y={45} r={90} fill="#F59E0B" /><CarT x={90} y={15} r={-90} /></Mini>
);

export const MkDouble = () => (
  <Mini label="Double solid yellow"><Ln y={27.5} c={LANE_Y} x2={120} /><Ln y={32.5} c={LANE_Y} x2={120} /><CarT x={30} y={45} r={90} fill="#F59E0B" /><CarT x={90} y={15} r={-90} /></Mini>
);

export const MkWhiteSolid = () => (
  <Mini label="Solid white lane line"><Ln y={30} c={LANE_W} x2={120} /><CarT x={30} y={45} r={90} fill="#F59E0B" /><CarT x={90} y={15} r={90} /></Mini>
);

export const MkTurnLane = () => (
  <Mini label="Two-way left turn lane">
    <Ln y={18} c={LANE_Y} x2={120} /><Ln y={22.5} c={LANE_Y} d="8 6" x2={120} /><Ln y={37.5} c={LANE_Y} d="8 6" x2={120} /><Ln y={42} c={LANE_Y} x2={120} />
    <path d="M42 36 Q42 27 32 27" fill="none" stroke={LANE_W} strokeWidth="2.5" /><Head x={26} y={27} d="left" />
    <path d="M78 24 Q78 33 88 33" fill="none" stroke={LANE_W} strokeWidth="2.5" /><Head x={94} y={33} d="right" />
  </Mini>
);

export const MkShark = () => (
  <Mini label="Yield line shark teeth"><Ln y={30} c={LANE_Y} x2={120} /><CarT x={25} y={45} r={90} fill="#F59E0B" />
    {[32, 38, 44, 50].map((y) => <polygon key={y} points={`84,${y} 75,${y + 3} 84,${y + 6}`} fill={LANE_W} />)}
  </Mini>
);

export const MkBike = () => (
  <Mini label="Bike lane"><rect y="44" width="120" height="16" fill="#15803D" /><Ln y={43} c={LANE_W} w={2.5} x2={120} /><BikeGlyph x={60} y={52} s={0.7} /><CarT x={30} y={22} r={90} fill="#F59E0B" /></Mini>
);

export const MkLeftYellow = () => (
  <Mini label="Yellow left edge on a one-way road"><Ln y={2.5} c={LANE_Y} x2={120} /><Ln y={57.5} c={LANE_W} x2={120} /><Ln y={30} c={LANE_W} d="10 8" x2={120} /><CarT x={30} y={15} r={90} /><CarT x={80} y={45} r={90} fill="#F59E0B" /></Mini>
);

export const MkDiamond = () => (
  <Mini label="Diamond lane"><Ln y={30} c={LANE_W} d="10 8" x2={120} />
    {[25, 60, 95].map((x) => <polygon key={x} points={`${x - 9},15 ${x},10 ${x + 9},15 ${x},20`} fill={LANE_W} />)}
    <CarT x={40} y={45} r={90} fill="#F59E0B" />
  </Mini>
);

export const MkRR = () => (
  <Mini label="Railroad crossing pavement marking"><Ln y={30} c={LANE_Y} x2={120} />
    <path d="M52 34 L76 56 M76 34 L52 56" stroke={LANE_W} strokeWidth="4" />
    <Txt x={44} y={50} s={9} c={LANE_W}>R</Txt><Txt x={84} y={50} s={9} c={LANE_W}>R</Txt>
    <rect x="90" y="30" width="3" height="30" fill={LANE_W} /><rect x="100" y="0" width="3" height="60" fill={INK} /><rect x="110" y="0" width="3" height="60" fill={INK} />
  </Mini>
);

Object.assign(SIGNS, {
  stopahead: <WarnStopAhead />, yieldahead: <WarnYieldAhead />, ped: <WarnPed />, deer: <WarnDeer />, slippery: <WarnSlippery />,
  hill: <WarnHill />, twoway: <WarnTwoWay />, winding: <WarnWinding />, sideroad: <WarnSideRoad />, tee: <WarnTee />,
  deadend: <WarnDeadEnd />, lowclear: <WarnLowClear />, chevron: <WarnChevron />, crossbuck: <SignCrossbuck />,
  donotpass: <SignDoNotPass />, keepright: <SignKeepRight />, noleft: <SignNoLeft />, noparking: <SignNoParking />,
  nostanding: <SignNoStanding />, nostopping: <SignNoStopping />, hov: <SignHOV />, stophere: <SignStopHere />,
  yieldpeds: <SignYieldPeds />, leftyield: <SignLeftYield />, laneuse: <SignLaneUse />, interstate: <SignInterstate />,
  saPed: <SaPed />, saSignal: <SaSignal />, saAnimal: <SaAnimal />, saHill: <SaHill />, saTwoWay: <SaTwoWay />, saRail: <SaRail />,
  saChildren: <SaChildren />, saSlippery: <SaSlippery />, saSideRoad: <SaSideRoad />, saNoOvertake: <SaNoOvertake />,
  saNoLeft: <SaNoLeft />, saNoParking: <SaNoParking />, saNoStopping: <SaNoStopping />, saKeepLeft: <SaKeepLeft />,
  saOneWay: <SaOneWay />, saFreeway: <SaFreeway />,
  sigFlashRed: <SigFlashRed />, sigFlashYellow: <SigFlashYellow />, sigGreenArrow: <SigGreenArrow />, sigRedArrow: <SigRedArrow />,
  sigFlashYArrow: <SigFlashYArrow />, laneCtrl: <LaneCtrl />, pedWalk: <PedWalk />, pedHand: <PedHand />,
  mkBroken: <MkBroken />, mkYourSide: <MkYourSide />, mkDouble: <MkDouble />, mkWhiteSolid: <MkWhiteSolid />, mkTurnLane: <MkTurnLane />,
  mkShark: <MkShark />, mkBike: <MkBike />, mkLeftYellow: <MkLeftYellow />, mkDiamond: <MkDiamond />, mkRR: <MkRR />,
});
