import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

const benefits = [
  "Entregas y Repartos",
  "Distribución de mercadería",
  "Soluciones adaptadas a cada operación",
];

export default function ForBusiness() {
  return (
    <section id="empresa" className="scroll-mt-16 bg-sand/50 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
              Para empresas y e-commerce
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Una solución logística para tu negocio
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/60 sm:text-lg sm:mt-4">
              Nos encargamos del transporte y la distribución para que vos
              puedas enfocarte en hacer crecer tu negocio.
            </p>
            <ul className="mt-5 space-y-3 sm:mt-7 sm:space-y-3.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5 sm:gap-3">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent text-white sm:h-6 sm:w-6">
                    <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-semibold text-ink sm:text-[15px]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 sm:mt-9">
              <a
                href={whatsappLink(
                  "Hola Chunitur, quería consultar por un servicio de transporte y distribución para mi negocio."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange px-6 text-[15px] font-bold text-white transition-colors hover:bg-orange/90"
              >
                <WhatsAppIcon className="h-4 w-4 text-white" />
                Quiero consultar por mi negocio
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-gradient-to-br from-ink-2 via-ink to-ink shadow-xl shadow-ink/10 sm:rounded-3xl">
            <svg
              viewBox="0 0 480 420"
              className="h-auto w-full"
              role="img"
              aria-label="Red de distribución entre un origen, un centro de distribución y destinos"
            >
              <defs>
                <pattern
                  id="biz-dots"
                  width="26"
                  height="26"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1.6" fill="#f7f5f0" opacity="0.06" />
                </pattern>
              </defs>
              <rect width="480" height="420" fill="url(#biz-dots)" />
              <circle cx="60" cy="370" r="100" fill="#e8590c" opacity="0.12" />

              <path
                d="M84 96 C 150 120, 210 130, 230 190 C 246 240, 250 280, 300 312 C 336 336, 366 332, 396 322"
                fill="none"
                stroke="#e8590c"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="0.5 14"
              />

              <g>
                <rect x="60" y="62" width="52" height="52" rx="10" fill="#f7f5f0" opacity="0.92" />
                <path
                  d="M74 100 v-14 l12-8 12 8 v14 M80 100 v-8 h12 v8"
                  fill="none"
                  stroke="#141a18"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              <g>
                <circle cx="240" cy="196" r="30" fill="#f7f5f0" opacity="0.08" />
                <circle cx="240" cy="196" r="20" fill="#e8590c" />
                <circle cx="240" cy="196" r="7" fill="#f7f5f0" />
              </g>

              <g>
                <circle cx="402" cy="318" r="13" fill="#e8590c" />
                <circle cx="402" cy="318" r="5" fill="#f7f5f0" />
              </g>

              <rect x="150" y="140" width="9" height="9" rx="2.5" fill="#f7f5f0" opacity="0.35" />
              <rect x="300" y="248" width="9" height="9" rx="2.5" fill="#f7f5f0" opacity="0.35" />

              <text
                x="86"
                y="40"
                fill="#f7f5f0"
                fontSize="13"
                fontWeight="700"
                fontFamily="Manrope, sans-serif"
                opacity="0.75"
              >
                ORIGEN
              </text>
              <text
                x="214"
                y="266"
                fill="#e8590c"
                fontSize="13"
                fontWeight="800"
                fontFamily="Manrope, sans-serif"
              >
                Red de distribución
              </text>
              <text
                x="402"
                y="362"
                fill="#f7f5f0"
                fontSize="13"
                fontWeight="700"
                fontFamily="Manrope, sans-serif"
                opacity="0.75"
                textAnchor="middle"
              >
                DESTINOS
              </text>
            </svg>

            <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 shadow-lg sm:left-5 sm:top-5 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2">
              <span className="text-[11px] font-bold text-ink sm:text-xs">
                Distribución programada
              </span>
            </div>
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 shadow-lg sm:bottom-5 sm:right-5 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2">
              <span className="text-[11px] font-bold text-ink sm:text-xs">
                Coordinación por operación
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}