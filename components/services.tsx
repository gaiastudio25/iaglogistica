"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const serviceGroups = [
  {
    number: "01",
    title: "E-commerce y Mercado Libre",
    intro: "Operación logística para ventas online.",
    services: [
      {
        title: "Logística para Mercado Libre",
        description:
          "Flex, Mercado Envíos y distribución para vendedores de Mercado Libre.",
      },
    ],
  },
  {
    number: "02",
    title: "Repartos y Distribución",
    intro: "Entregas para empresas, comercios y operaciones recurrentes.",
    services: [
      {
        title: "Repartos y Distribución",
        description:
          "Entregas puntuales o recorridos recurrentes según tu operación.",
      },
      {
        title: "Cadetería y Comisiones",
        description:
          "Retiros, entregas, trámites y gestiones rápidas.",
      },
    ],
  },
  {
    number: "03",
    title: "Transporte y Encomiendas",
    intro: "Soluciones para mercadería, paquetes y envíos a todo el país.",
    services: [
      {
        title: "Fletes y Encomiendas",
        description:
          "Traslado de paquetes, mercadería y cargas según cada necesidad.",
      },
      {
        title: "Vehículos con Chofer",
        description:
          "Unidades con chofer para servicios puntuales o recurrentes.",
      },
      {
        title: "Encomiendas a Florida",
        description:
          "Envíos de encomiendas con destino a Florida y zonas aledañas.",
      },
      {
        title: "Encomiendas a Rocha",
        description:
          "Envíos de encomiendas con destino a Rocha y zonas aledañas.",
      },
    ],
  },
  {
    number: "04",
    title: "Mudanzas",
    intro: "Traslado de pertenencias o mercadería.",
    services: [
      {
        title: "Mudanzas",
        description:
          "Traslados coordinados para hogares, oficinas y empresas.",
      },
    ],
  },
];

export default function Services() {
  const [open, setOpen] = useState<string | null>(null);

  function toggle(number: string) {
    setOpen((prev) => (prev === number ? null : number));
  }

  return (
    <section
      id="servicios"
      className="scroll-mt-16 bg-sand/50 py-12 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
              Nuestros servicios
            </p>

            <h2 className="mt-3 max-w-md text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Una solución para cada movimiento.
            </h2>

            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/60">
              Desde una entrega puntual hasta la operación logística completa
              de tu negocio.
            </p>

            <div className="mt-6 flex gap-1.5" aria-hidden="true">
              <span className="h-1 w-8 -skew-x-[25deg] bg-ink" />
              <span className="h-1 w-8 -skew-x-[25deg] bg-accent" />
              <span className="h-1 w-8 -skew-x-[25deg] bg-orange" />
            </div>
          </div>

          {/* Service index */}
          <div className="border-b border-ink/15">
            {serviceGroups.map((group) => {
              const isOpen = open === group.number;
              return (
                <div key={group.number} className="border-t border-ink/15">
                  <button
                    type="button"
                    onClick={() => toggle(group.number)}
                    className="flex w-full cursor-pointer items-center gap-4 py-5 sm:gap-6 sm:py-6"
                  >
                    <span className="text-xs font-bold tabular-nums text-orange sm:text-sm">
                      {group.number}
                    </span>

                    <div className="min-w-0 flex-1 text-left">
                      <h3 className="text-lg font-extrabold tracking-tight text-ink sm:text-xl">
                        {group.title}
                      </h3>

                      <p className="mt-1 hidden text-sm text-ink/50 sm:block">
                        {group.intro}
                      </p>
                    </div>

                    <ChevronDown
                      className={`h-5 w-5 flex-none text-ink/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`grid gap-5 overflow-hidden transition-all duration-300 sm:grid-cols-2 sm:gap-8 ${isOpen ? "max-h-96 pb-6 pl-8 sm:pb-8 sm:pl-12" : "max-h-0"}`}
                  >
                    {group.services.map((service) => (
                      <div key={service.title}>
                        <h4 className="text-sm font-bold text-ink sm:text-[15px]">
                          {service.title}
                        </h4>

                        <p className="mt-1.5 text-sm leading-relaxed text-ink/55">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-5 text-sm font-medium text-ink/50 lg:mt-12">
          Montevideo · Canelones · Interior del país
        </div>
      </div>
    </section>
  );
}