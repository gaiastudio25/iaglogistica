import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroVisual from "@/components/hero-visual";

const services = [
  "Mercado Libre Flex",
  "Mercado Envíos",
  "Repartos y Distribución",
  "Fletes y Encomiendas",
  "Cadetería",
  "Mudanzas",
  "Depósito",
  "Fulfillment",
];

export default function Hero() {
  return (
    <section id="inicio" className="scroll-mt-16 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-paper/70 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Transporte y logística en Uruguay
            </p>
            <h1 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl sm:mt-6 lg:text-5xl xl:text-[3.4rem]">
              Tu logística, en{" "}
              <span className="text-orange">buenas manos.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg sm:mt-5">
              Transporte, distribución y entregas para empresas, comercios y
              e-commerce en Uruguay.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:mt-8">
              <Link
                href="#contacto"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-bold text-white transition-all hover:bg-accent-deep sm:h-12 sm:px-6 sm:text-[15px]"
              >
                Solicitar presupuesto
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#servicios"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 px-5 text-sm font-bold text-paper transition-colors hover:border-white/50 hover:bg-white/5 sm:h-12 sm:px-6 sm:text-[15px]"
              >
                Conocer nuestros servicios
              </Link>
            </div>
            <p className="mt-5 text-xs text-paper/50 sm:text-sm sm:mt-6">
              Presupuestos sin compromiso, respondidos directo por WhatsApp.
            </p>
          </div>

          <HeroVisual />
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 sm:mt-12 sm:pt-6 lg:mt-16">
          <ul className="flex flex-wrap justify-center gap-x-2 gap-y-1.5 text-center lg:justify-between sm:gap-x-2.5 sm:gap-y-2">
            {services.map((s, i) => (
              <li
                key={s}
                className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-paper/45 sm:gap-2.5 sm:text-[11px]"
              >
                {s}
                {i < services.length - 1 && (
                  <span className="text-orange/70">·</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}