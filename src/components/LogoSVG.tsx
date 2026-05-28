type LogoSVGProps = {
  className?: string
}

export const LogoSVG = ({ className }: LogoSVGProps) => (
  <svg
    viewBox="0 0 320 155"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Miss Prestige Beauty Salon"
    role="img"
  >
    {/* ── Crown ── */}
    <g fill="#C9A84C">
      {/* Crown body — 3 prong polygon */}
      <polygon points="160,18 148,38 136,28 140,50 180,50 184,28 172,38" />
      {/* Crown base bar */}
      <rect x="136" y="48" width="48" height="5" rx="2.5" />
      {/* Orb at top-center tip */}
      <circle cx="160" cy="16" r="4" />
      {/* Orb at left-outer tip */}
      <circle cx="135" cy="27" r="3.5" />
      {/* Orb at right-outer tip */}
      <circle cx="185" cy="27" r="3.5" />
      {/* Small orb at left inner slope */}
      <circle cx="148" cy="37" r="2" />
      {/* Small orb at right inner slope */}
      <circle cx="172" cy="37" r="2" />
    </g>

    {/* ── Left swash — curl on far-left, then sweeping line to 'm' ── */}
    {/* Curl */}
    <path
      d="M48,68 C43,62 37,67 42,74 C45,79 52,75 48,70"
      stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"
    />
    {/* Sweep line */}
    <path
      d="M48,70 C68,64 92,67 116,72"
      stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"
    />

    {/* ── 'mp' script — Pinyon Script, centered ── */}
    <text
      x="160"
      y="92"
      fontFamily="'Pinyon Script', 'Palatino Linotype', Palatino, 'Book Antiqua', serif"
      fontSize="58"
      fill="#C9A84C"
      textAnchor="middle"
      dominantBaseline="auto"
    >
      mp
    </text>

    {/* ── Right swash — sweep line from 'p', then curl on far-right ── */}
    {/* Sweep line */}
    <path
      d="M204,72 C228,67 252,64 272,70"
      stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"
    />
    {/* Curl */}
    <path
      d="M272,70 C278,66 283,71 279,77 C277,80 270,77 272,72"
      stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"
    />

    {/* ── Vertical descender flourish below 'p' ── */}
    <path
      d="M190,88 L190,104"
      stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"
    />

    {/* ── MISS PRESTIGE wordmark ── */}
    <text
      x="160"
      y="121"
      textAnchor="middle"
      fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
      fontSize="13"
      fontWeight="400"
      fill="#8A8A8A"
      letterSpacing="7"
    >
      MISS PRESTIGE
    </text>

    {/* Thin gold rule between wordmarks */}
    <line
      x1="82" y1="127" x2="238" y2="127"
      stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4"
    />

    {/* ── BEAUTY SALON tagline ── */}
    <text
      x="160"
      y="142"
      textAnchor="middle"
      fontFamily="Raleway, 'Helvetica Neue', Arial, sans-serif"
      fontSize="7.5"
      fontWeight="500"
      fill="#C9A84C"
      letterSpacing="5"
    >
      BEAUTY SALON
    </text>
  </svg>
)

export default LogoSVG
