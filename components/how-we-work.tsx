import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Nos contactás",
    text: "Contanos qué necesitás transportar o distribuir.",
  },
  {
    title: "Coordinamos",
    text: "Analizamos el servicio y coordinamos los detalles.",
  },
  {
    title: "Realizamos el traslado",
    text: "Nos encargamos del transporte y la entrega.",
  },
  {
    title: "Tu mercadería llega a destino",
    text: "Simple, claro y sin vueltas.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-sand/50 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
            Cómo trabajamos
          </p>

          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            De tu consulta a tu mercadería en destino.
          </h2>
        </div>

        <ol className="mt-8 divide-y divide-ink/10 md:mt-12 md:grid md:grid-cols-4 md:gap-6 md:divide-none">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex gap-3 py-3 first:pt-0 last:pb-0 md:block md:py-0"
            >
              {/* Puntos entre un paso y el siguiente — solo desktop */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-12 right-[-1.5rem] top-6 hidden -translate-y-1/2 items-center justify-center gap-2 md:flex"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange/35" />
                  <span className="h-1.5 w-1.5 rounded-full bg-orange/50" />
                  <span className="h-1.5 w-1.5 rounded-full bg-orange/70" />
                  <span className="h-1.5 w-1.5 rounded-full bg-orange/50" />
                  <span className="h-1.5 w-1.5 rounded-full bg-orange/35" />
                </div>
              )}

              <span className="relative z-10 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-ink text-xs font-extrabold text-paper md:mb-4 md:h-12 md:w-12 md:text-lg">
                {i + 1}
              </span>

              <div className="min-w-0">
                <h3 className="text-sm font-extrabold tracking-tight text-ink sm:text-base md:text-lg">
                  {step.title}
                </h3>

                <p className="mt-0.5 text-xs leading-relaxed text-ink/60 sm:text-sm md:mt-2">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}