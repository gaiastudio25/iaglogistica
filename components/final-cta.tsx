import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="bg-sand/50 pb-12 sm:pb-16 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-accent px-5 py-10 text-center text-white sm:rounded-3xl sm:px-6 sm:py-14 md:px-12 md:py-20">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="cta-stripes"
                width="46"
                height="46"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(35)"
              >
                <rect width="16" height="46" fill="#fff" opacity="0.06" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-stripes)" />
          </svg>
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">
              ¿Necesitás una solución de transporte?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-white/85">
              Contanos qué necesitás y te asesoramos.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#contacto"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-7 text-[15px] font-bold text-paper transition-colors hover:bg-ink-2 sm:w-auto"
              >
                Solicitar presupuesto
                <ArrowRight className="h-4 w-4" />
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}