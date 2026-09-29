/* Hand-drawn explorer graphics used across the site. All decorative. */

type DoodleProps = { className?: string; color?: string };

/** Wobbly underline, drawn under a highlighted word. */
export const Squiggle: React.FC<DoodleProps> = ({ className = "", color = "#c4622d" }) => (
  <svg viewBox="0 0 300 24" preserveAspectRatio="none" className={className} aria-hidden="true">
    <path
      d="M4 16 C 40 4, 70 22, 110 12 S 180 4, 220 14 S 280 20, 296 8"
      fill="none"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

/** Map pin marker. */
export const Pin: React.FC<DoodleProps> = ({ className = "", color = "#c4622d" }) => (
  <svg viewBox="0 0 24 32" className={className} aria-hidden="true">
    <path
      d="M12 1.5C6.2 1.5 1.5 6.1 1.5 11.8c0 7.6 9.1 17.6 9.5 18a1.4 1.4 0 0 0 2 0c.4-.4 9.5-10.4 9.5-18C22.5 6.1 17.8 1.5 12 1.5z"
      fill={color}
      stroke="#2b2118"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="11.5" r="3.6" fill="#fffbf3" stroke="#2b2118" strokeWidth="1.2" />
  </svg>
);

/** Compass rose. */
export const Compass: React.FC<DoodleProps> = ({ className = "", color = "#2b2118" }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
    <circle cx="50" cy="50" r="44" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="2 5" />
    <circle cx="50" cy="50" r="34" fill="none" stroke={color} strokeWidth="1.2" />
    <path d="M50 8 L57 50 L50 92 L43 50 Z" fill="#c4622d" stroke={color} strokeWidth="1.2" />
    <path d="M8 50 L50 43 L92 50 L50 57 Z" fill="#d9a441" stroke={color} strokeWidth="1.2" />
    <path d="M50 8 L57 50 L50 50 Z" fill="#8c401b" />
    <circle cx="50" cy="50" r="4" fill="#fffbf3" stroke={color} strokeWidth="1.2" />
    <text x="50" y="6" textAnchor="middle" fontSize="9" fontWeight="700" style={{ fontFamily: "var(--font-display)" }} fill={color}>N</text>
  </svg>
);

/** Paper plane with a dashed flight trail. */
export const PaperPlane: React.FC<DoodleProps> = ({ className = "", color = "#fffbf3" }) => (
  <svg viewBox="0 0 220 90" className={className} aria-hidden="true">
    <path
      d="M4 82 C 40 80, 60 40, 100 52 S 150 70, 168 34"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeDasharray="6 7"
      strokeLinecap="round"
      opacity="0.7"
    />
    <g transform="translate(166 8) rotate(12)">
      <path d="M0 22 L46 0 L30 40 L22 26 Z" fill="#d9a441" stroke="#2b2118" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M22 26 L46 0 L14 20" fill="#fffbf3" stroke="#2b2118" strokeWidth="1.8" strokeLinejoin="round" />
    </g>
  </svg>
);

/** Little mountain range, for section corners. */
export const Mountains: React.FC<DoodleProps> = ({ className = "", color = "#4f6b3a" }) => (
  <svg viewBox="0 0 160 70" className={className} aria-hidden="true">
    <path d="M2 68 L48 14 L72 40 L96 8 L158 68 Z" fill={color} stroke="#2b2118" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M40 24 L48 14 L56 23 L50 21 L46 25 Z M88 18 L96 8 L104 18 L99 16 L94 20 Z" fill="#fffbf3" stroke="#2b2118" strokeWidth="1.2" strokeLinejoin="round" />
    <circle cx="136" cy="16" r="9" fill="#d9a441" stroke="#2b2118" strokeWidth="1.5" />
  </svg>
);

const STAMP_INKS = ["#c4622d", "#4f6b3a", "#5b8a8c", "#a8771a"];
const STAMP_TILTS = [-2.5, 1.8, -1.2, 2.6];

/** Passport-stamp tile for a headline number. */
export const Stamp: React.FC<{ value: string; label: string; index: number }> = ({ value, label, index }) => {
  const ink = STAMP_INKS[index % STAMP_INKS.length];
  return (
    <div
      className="rounded-xl px-4 py-3 bg-cream transition-transform duration-200 hover:rotate-0"
      style={{
        border: `2px solid ${ink}`,
        outline: `1px dashed ${ink}`,
        outlineOffset: "-7px",
        transform: `rotate(${STAMP_TILTS[index % STAMP_TILTS.length]}deg)`,
      }}
    >
      <span className="block text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: ink, fontVariantNumeric: "lining-nums" }}>
        {value}
      </span>
      <span className="block text-[11px] uppercase tracking-wider leading-snug mt-0.5 font-semibold" style={{ color: ink }}>
        {label}
      </span>
    </div>
  );
};
