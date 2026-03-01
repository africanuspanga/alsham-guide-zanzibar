const NAVY = "#0f2744";
const NAVY_MID = "#1a3d6e"; // slightly lighter for seafloor plants visible on dark bg

export default function OceanDivider() {
  return (
    <div className="w-full overflow-hidden" style={{ background: "white" }}>
      <svg
        viewBox="0 0 1440 310"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        style={{ height: "clamp(190px, 24vw, 330px)" }}
        aria-hidden="true"
      >
        {/* White sky background */}
        <rect width="1440" height="310" fill="white" />

        {/* ══════════════════════════════════════
            MARINE LIFE — floating above water line
            ══════════════════════════════════════ */}

        {/* Large tropical fish — far left */}
        <g transform="translate(108,70)" fill={NAVY}>
          <path d="M0,0 C0,-14 34,-17 50,-7 C62,-3 62,3 50,7 C34,17 0,14 0,0 Z" />
          <path d="M50,-7 L66,-20 L66,20 L50,7 Z" />
          <path d="M28,-15 Q32,0 28,15" stroke="white" strokeWidth="2.5" fill="none" opacity="0.25" />
        </g>

        {/* School of fish — upper left-center */}
        <g transform="translate(278,36)" fill={NAVY} opacity="0.72">
          {([[-24,2],[-12,-7],[0,-2],[14,-9],[26,-1],[36,6],[22,11],[8,12],[-6,8]] as [number,number][]).map(([x,y],i) => (
            <ellipse key={i} cx={x} cy={y} rx="7" ry="3.8" />
          ))}
        </g>

        {/* Dolphin — leaping center-left */}
        <g transform="translate(438,52)" fill={NAVY}>
          {/* body */}
          <path d="M-52,10 C-40,-22 -4,-24 24,-8 C38,-3 44,6 38,14 C28,11 24,20 40,26 C28,22 -40,26 -52,10 Z" />
          {/* dorsal fin */}
          <path d="M6,-24 L14,-50 L28,-18 Z" />
          {/* snout */}
          <path d="M24,-8 L52,-11 L52,-2 L30,4 Z" />
        </g>

        {/* Medium fish — center */}
        <g transform="translate(598,68)" fill={NAVY}>
          <path d="M0,0 C0,-11 26,-13 38,-5.5 C48,-2 48,2 38,5.5 C26,13 0,11 0,0 Z" />
          <path d="M38,-5.5 L50,-15 L50,15 L38,5.5 Z" />
        </g>

        {/* Small fish cluster — upper center */}
        <g transform="translate(730,28)" fill={NAVY} opacity="0.68">
          {([[-26,4],[-14,-3],[0,0],[13,-7],[26,1],[40,-4],[52,3]] as [number,number][]).map(([x,y],i) => (
            <ellipse key={i} cx={x} cy={y} rx="6" ry="3.2" />
          ))}
        </g>

        {/* Squid / cuttlefish — right of center */}
        <g transform="translate(855,64)" fill={NAVY}>
          {/* mantle */}
          <path d="M-10,-40 C-18,-40 -22,-28 -22,-10 C-22,8 -14,16 0,16 C14,16 22,8 22,-10 C22,-28 18,-40 10,-40 C6,-36 -6,-36 -10,-40 Z" />
          {/* fins */}
          <path d="M-22,-14 L-36,-8 L-28,4 Z" />
          <path d="M22,-14 L36,-8 L28,4 Z" />
          {/* tentacles */}
          {([-12,-7,-2,3,8,14] as number[]).map((x, i) => (
            <path
              key={i}
              d={`M${x},16 Q${x - 4 + i * 2},28 ${x},42`}
              stroke={NAVY}
              strokeWidth="2.5"
              fill="none"
            />
          ))}
          {/* eyes */}
          <circle cx="-8" cy="-10" r="3" fill="white" />
          <circle cx="8" cy="-10" r="3" fill="white" />
        </g>

        {/* Sea turtle — right center */}
        <g transform="translate(968,72)" fill={NAVY}>
          {/* shell */}
          <ellipse cx="0" cy="0" rx="30" ry="20" />
          {/* head */}
          <ellipse cx="31" cy="-2" rx="11" ry="8" />
          {/* eye */}
          <circle cx="37" cy="-5" r="2.2" fill="white" />
          {/* front left flipper */}
          <path d="M10,-20 L-2,-44 L-16,-30 L10,-18 Z" />
          {/* front right flipper */}
          <path d="M10,20 L-2,44 L-16,30 L10,18 Z" />
          {/* rear left flipper */}
          <path d="M-18,-14 L-38,-28 L-30,-10 Z" />
          {/* rear right flipper */}
          <path d="M-18,14 L-38,28 L-30,10 Z" />
          {/* shell pattern */}
          <path
            d="M0,-13 L0,13 M-11,-8 L11,8 M11,-8 L-11,8"
            stroke="white"
            strokeWidth="1.8"
            fill="none"
            opacity="0.22"
          />
        </g>

        {/* Small fish — right */}
        <g transform="translate(1105,58)" fill={NAVY}>
          <path d="M0,0 C0,-9 20,-11 28,-4.5 C36,-1.5 36,1.5 28,4.5 C20,11 0,9 0,0 Z" />
          <path d="M28,-4.5 L37,-12 L37,12 L28,4.5 Z" />
        </g>

        {/* Jellyfish — right side */}
        <g transform="translate(1264,46)">
          {/* bell */}
          <path d="M-24,0 C-24,-30 -13,-36 0,-36 C13,-36 24,-30 24,0 C13,-7 -13,-7 -24,0 Z" fill={NAVY} />
          {/* inner shimmer */}
          <path d="M-17,-3 C-10,-13 10,-13 17,-3" stroke="white" strokeWidth="1.8" fill="none" opacity="0.28" />
          {/* tentacles */}
          <path d="M-15,0 Q-20,16 -14,32 Q-8,44 -14,56" stroke={NAVY} strokeWidth="3" fill="none" />
          <path d="M-6,0 Q-4,18 -6,32 Q-8,46 -4,58" stroke={NAVY} strokeWidth="3" fill="none" />
          <path d="M4,0 Q6,16 4,30 Q2,44 6,56" stroke={NAVY} strokeWidth="3" fill="none" />
          <path d="M15,0 Q20,16 14,32 Q8,44 14,56" stroke={NAVY} strokeWidth="3" fill="none" />
          <path d="M-10,0 Q-14,10 -10,22" stroke={NAVY} strokeWidth="1.8" fill="none" opacity="0.55" />
          <path d="M10,0 Q14,10 10,22" stroke={NAVY} strokeWidth="1.8" fill="none" opacity="0.55" />
        </g>

        {/* Large fish — far right */}
        <g transform="translate(1374,65)" fill={NAVY}>
          <path d="M0,0 C0,-12 28,-15 42,-6 C54,-2 54,2 42,6 C28,15 0,12 0,0 Z" />
          <path d="M42,-6 L56,-17 L56,17 L42,6 Z" />
        </g>

        {/* ══════════════════════════════════════
            OCEAN FLOOR WAVE — dark navy fill
            ══════════════════════════════════════ */}
        <path
          d="M0,205
             C60,178 130,215 230,196
             C330,177 420,212 540,194
             C660,176 750,212 880,194
             C1010,176 1090,214 1210,196
             C1310,180 1390,208 1440,200
             L1440,310 L0,310 Z"
          fill={NAVY}
        />

        {/* Soft water-surface shimmer */}
        <path
          d="M0,208 Q180,196 360,208 Q540,220 720,208 Q900,196 1080,208 Q1260,220 1440,208"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          opacity="0.12"
        />

        {/* ══════════════════════════════════════
            SEAFLOOR PLANTS — seaweed & coral
            ══════════════════════════════════════ */}

        {/* Seaweed 1 — far left */}
        <g transform="translate(50,204)">
          <path d="M0,0 C-9,-17 9,-34 0,-56 C-9,-74 9,-92 0,-112" stroke={NAVY_MID} strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M11,0 C16,-14 5,-28 13,-46 C20,-60 8,-74 14,-90" stroke={NAVY_MID} strokeWidth="5.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Coral 1 — bubble-tip */}
        <g transform="translate(145,198)">
          <path d="M0,0 L0,-32 M0,-32 L-14,-56 M0,-32 L-2,-58 M0,-32 L14,-54" stroke={NAVY_MID} strokeWidth="6" strokeLinecap="round" fill="none" />
          <circle cx="-14" cy="-58" r="6.5" fill={NAVY_MID} />
          <circle cx="-2" cy="-61" r="6" fill={NAVY_MID} />
          <circle cx="14" cy="-57" r="6.5" fill={NAVY_MID} />
        </g>

        {/* Seaweed 2 */}
        <g transform="translate(225,196)">
          <path d="M0,0 C8,-16 -8,-32 4,-54 C14,-72 -2,-88 6,-106" stroke={NAVY_MID} strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M-9,0 C-16,-12 2,-26 -7,-44" stroke={NAVY_MID} strokeWidth="5" fill="none" strokeLinecap="round" />
        </g>

        {/* Branching coral 2 */}
        <g transform="translate(335,193)">
          <path d="M0,0 L2,-30 M2,-30 L-12,-54 M2,-30 L4,-56 M2,-30 L18,-48" stroke={NAVY_MID} strokeWidth="5.5" strokeLinecap="round" fill="none" />
          <path d="M-12,-54 L-20,-70 M-12,-54 L-4,-70 M18,-48 L12,-66 M18,-48 L26,-64" stroke={NAVY_MID} strokeWidth="4" strokeLinecap="round" fill="none" />
        </g>

        {/* Seaweed 3 — tall */}
        <g transform="translate(455,196)">
          <path d="M0,0 C-8,-18 8,-36 -2,-58 C-12,-78 6,-96 -2,-116" stroke={NAVY_MID} strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M12,0 C16,-13 5,-26 12,-44 C18,-58 6,-70 12,-84" stroke={NAVY_MID} strokeWidth="5.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Fan coral 3 */}
        <g transform="translate(578,196)">
          <path d="M0,0 C-2,-10 -7,-22 -12,-34 C-16,-44 -14,-54 -18,-62" stroke={NAVY_MID} strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M0,0 C-2,-10 -2,-22 0,-36 C2,-48 0,-56 2,-64" stroke={NAVY_MID} strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M0,0 C-2,-10 4,-20 10,-32 C14,-44 12,-54 16,-62" stroke={NAVY_MID} strokeWidth="5" strokeLinecap="round" fill="none" />
        </g>

        {/* Seaweed 4 */}
        <g transform="translate(700,196)">
          <path d="M0,0 C9,-17 -9,-34 3,-56 C14,-74 -4,-90 6,-108" stroke={NAVY_MID} strokeWidth="7" fill="none" strokeLinecap="round" />
        </g>

        {/* Big kelp — center-right */}
        <g transform="translate(826,197)">
          <path d="M0,0 C-9,-18 9,-37 -2,-60 C-12,-80 6,-98 -2,-118" stroke={NAVY_MID} strokeWidth="9" fill="none" strokeLinecap="round" />
          <path d="M12,0 C16,-15 4,-30 11,-50 C17,-64 5,-78 12,-94" stroke={NAVY_MID} strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>

        {/* Bubble-tip coral 4 */}
        <g transform="translate(942,196)">
          <path d="M0,0 L-2,-34 M-2,-34 L-16,-58 M-2,-34 L0,-60 M-2,-34 L14,-52" stroke={NAVY_MID} strokeWidth="5.5" strokeLinecap="round" fill="none" />
          <circle cx="-16" cy="-62" r="6" fill={NAVY_MID} />
          <circle cx="0" cy="-63" r="6.5" fill={NAVY_MID} />
          <circle cx="14" cy="-55" r="5.5" fill={NAVY_MID} />
        </g>

        {/* Seaweed 5 */}
        <g transform="translate(1054,196)">
          <path d="M0,0 C7,-16 -7,-32 3,-52 C11,-68 -5,-84 4,-100" stroke={NAVY_MID} strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M-9,0 C-14,-13 2,-26 -7,-42" stroke={NAVY_MID} strokeWidth="5" fill="none" strokeLinecap="round" />
        </g>

        {/* Branching coral 5 — tall */}
        <g transform="translate(1172,195)">
          <path d="M0,0 L0,-28 M0,-28 L-10,-50 M0,-28 L2,-54 M0,-28 L12,-48" stroke={NAVY_MID} strokeWidth="5.5" strokeLinecap="round" fill="none" />
          <path d="M-10,-50 L-16,-66 M-10,-50 L-2,-68 M12,-48 L8,-66 M12,-48 L20,-64" stroke={NAVY_MID} strokeWidth="4" strokeLinecap="round" fill="none" />
        </g>

        {/* Seaweed 6 */}
        <g transform="translate(1296,196)">
          <path d="M0,0 C-8,-17 8,-34 -2,-56 C-10,-74 7,-90 -2,-108" stroke={NAVY_MID} strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M11,0 C15,-13 4,-26 11,-42 C16,-56 5,-68 12,-82" stroke={NAVY_MID} strokeWidth="5.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Seaweed 7 — far right */}
        <g transform="translate(1402,200)">
          <path d="M0,0 C-7,-15 8,-30 0,-50 C-8,-66 6,-80 0,-96" stroke={NAVY_MID} strokeWidth="7" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
