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
      {
        title: "Fulfillment para E-commerce",
        description:
          "Recepción, almacenamiento, preparación y despacho de pedidos.",
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
    title: "Transporte y Cargas",
    intro: "Soluciones para mercadería, paquetes y cargas de distinto tamaño.",
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
    ],
  },
  {
    number: "04",
    title: "Mudanzas y Almacenamiento",
    intro: "Traslado y guarda de pertenencias o mercadería.",
    services: [
      {
        title: "Mudanzas",
        description:
          "Traslados coordinados para hogares, oficinas y empresas.",
      },
      {
        title: "Depósito y Almacenamiento",
        description:
          "Espacio seguro para mercadería, productos, muebles y pertenencias.",
      },
    ],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-16 bg-paper py-12 sm:py-16 lg:py-24"
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
            {serviceGroups.map((group) => (
              <details
                key={group.number}
                className="group border-t border-ink/15"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 py-5 sm:gap-6 sm:py-6 [&::-webkit-details-marker]:hidden">
                  <span className="text-xs font-bold tabular-nums text-orange sm:text-sm">
                    {group.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-extrabold tracking-tight text-ink sm:text-xl">
                      {group.title}
                    </h3>

                    <p className="mt-1 hidden text-sm text-ink/50 sm:block">
                      {group.intro}
                    </p>
                  </div>

                  <ChevronDown className="h-5 w-5 flex-none text-ink/40 transition-transform duration-300 group-open:rotate-180" />
                </summary>

                <div className="grid gap-5 pb-6 pl-8 sm:grid-cols-2 sm:gap-8 sm:pb-8 sm:pl-12">
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
              </details>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-5 text-sm font-medium text-ink/50 lg:mt-12">
          Montevideo · Canelones · Interior del país
        </div>
      </div>
    </section>
  );
}