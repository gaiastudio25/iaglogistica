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
    <section className="bg-paper py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
              Cómo trabajamos
            </p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              De tu consulta a tu mercadería en destino.
            </h2>
          </div>
          
        </div>

        <div className="relative mt-8 md:mt-12">
          <svg
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-6 hidden text-orange md:block"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="1.5"
              x2="100%"
              y2="1.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="1 8"
              strokeLinecap="round"
            />
          </svg>

          <ol className="divide-y divide-ink/10 md:divide-none md:grid md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative flex gap-3 py-3 first:pt-0 last:pb-0 md:block md:gap-0 md:py-0"
              >
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-ink text-xs font-extrabold text-paper md:mb-4 md:h-12 md:w-12 md:text-lg">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold tracking-tight text-ink sm:text-base md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-ink/60 sm:text-sm md:mt-2 md:text-sm">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}