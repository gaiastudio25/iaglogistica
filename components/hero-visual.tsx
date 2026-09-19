import { CircleCheck } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-3 via-ink-2 to-ink shadow-2xl shadow-black/40 sm:rounded-3xl">
      <svg
        viewBox="0 0 560 440"
        className="h-auto w-full"
        role="img"
        aria-label="Ilustración de un vehículo de reparto con paquetes recorriendo una ruta de distribución"
      >
        <defs>
          <pattern
            id="hero-dots"
            width="26"
            height="26"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.6" fill="#f7f5f0" opacity="0.06" />
          </pattern>
        </defs>

        <rect width="560" height="440" fill="url(#hero-dots)" />
        <circle cx="500" cy="52" r="110" fill="#e8590c" opacity="0.14" />
        <circle cx="500" cy="52" r="70" fill="#e8590c" opacity="0.12" />
        <circle cx="36" cy="70" r="80" fill="#f7f5f0" opacity="0.04" />

        <path
          d="M44 196 C 130 176, 150 92, 236 100 S 366 210, 486 58"
          fill="none"
          stroke="#e8590c"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="0.5 14"
          opacity="0.9"
        />

        <circle cx="236" cy="100" r="5" fill="#e8590c" opacity="0.55" />
        <circle cx="150" cy="140" r="4" fill="#f7f5f0" opacity="0.16" />
        <circle cx="360" cy="150" r="4" fill="#f7f5f0" opacity="0.16" />

        <g opacity="0.9">
          <circle cx="44" cy="196" r="11" fill="#e8590c" />
          <circle cx="44" cy="196" r="4.5" fill="#f7f5f0" />
        </g>
        <g opacity="0.9">
          <circle cx="486" cy="58" r="11" fill="#e8590c" />
          <circle cx="486" cy="58" r="4.5" fill="#f7f5f0" />
        </g>

        <ellipse cx="252" cy="382" rx="150" ry="14" fill="#000" opacity="0.4" />

        <path d="M320 230 h54 q16 0 18 14 l5 98 h-77 Z" fill="#f7f5f0" />
        <path
          d="M335 244 h28 q6 0 7 5 l1 11 h-36 Z"
          fill="#141a18"
        />

        <rect x="120" y="230" width="200" height="112" rx="10" fill="#f7f5f0" />
        <rect x="120" y="278" width="200" height="16" fill="#e8590c" />
        <text
          x="220"
          y="266"
          fill="#141a18"
          fontSize="15"
          fontWeight="800"
          letterSpacing="2.5"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
        >
          CHUNITUR
        </text>

        <circle cx="352" cy="344" r="23" fill="#0d1210" />
        <circle cx="352" cy="344" r="9" fill="#e8590c" />
        <circle cx="192" cy="344" r="23" fill="#0d1210" />
        <circle cx="192" cy="344" r="9" fill="#e8590c" />

        <rect x="430" y="238" width="56" height="46" rx="6" fill="#ece8df" />
        <rect x="456" y="238" width="12" height="46" fill="#e8590c" />
        <rect
          x="418"
          y="292"
          width="92"
          height="60"
          rx="8"
          fill="#f7f5f0"
        />
        <rect x="458" y="292" width="14" height="60" rx="4" fill="#e8590c" />
        <circle cx="438" cy="322" r="7" fill="#ece8df" />
      </svg>

      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 shadow-lg shadow-black/20 sm:left-5 sm:top-5 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2">
        <CircleCheck className="h-3.5 w-3.5 text-accent sm:h-4 sm:w-4" />
        <span className="text-[11px] font-bold text-ink sm:text-xs">
          Entrega confirmada
        </span>
      </div>

      <div className="absolute right-3 top-3 hidden items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 shadow-lg shadow-black/20 sm:right-5 sm:top-5 sm:flex sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2">
        <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-whatsapp sm:h-2 sm:w-2" />
        </span>
        <span className="text-[11px] font-bold text-ink sm:text-xs">
          Comunicación directa
        </span>
      </div>

      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-ink/80 px-2.5 py-1.5 backdrop-blur sm:bottom-5 sm:right-5 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2">
        <span className="text-[11px] font-bold text-paper sm:text-xs">
          Coordinación y seguimiento
        </span>
      </div>
    </div>
  );
}