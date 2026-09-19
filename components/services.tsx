import {
  ShoppingCart,
  Truck,
  Package,
  ClipboardList,
  Move,
  Warehouse,
  Box,
  Car,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  chips?: string[];
  color: "ink" | "accent" | "orange";
};

const services: Service[] = [
  {
    icon: ShoppingCart,
    title: "Logística para Mercado Libre",
    description:
      "Soluciones de distribución para vendedores de Mercado Libre, incluyendo Flex y Mercado Envíos.",
    chips: ["Mercado Libre Flex", "Mercado Envíos"],
    color: "orange",
  },
  {
    icon: Truck,
    title: "Repartos y Distribución",
    description:
      "Entregas puntuales o distribución recurrente para comercios y empresas.",
    color: "ink",
  },
  {
    icon: Package,
    title: "Fletes y Encomiendas",
    description:
      "Traslado de paquetes, mercadería y cargas según las necesidades de cada cliente.",
    color: "accent",
  },
  {
    icon: ClipboardList,
    title: "Cadetería y Comisiones",
    description:
      "Retiros, entregas, trámites y gestiones rápidas y confiables.",
    color: "ink",
  },
  {
    icon: Move,
    title: "Mudanzas",
    description:
      "Traslados para hogares y empresas, con atención segura y coordinada.",
    color: "orange",
  },
  {
    icon: Warehouse,
    title: "Depósito y Almacenamiento",
    description:
      "Espacio seguro para guardar mercadería, muebles y productos.",
    color: "accent",
  },
  {
    icon: Box,
    title: "Fulfillment para E-commerce",
    description:
      "Recepción, almacenamiento, preparación y despacho de pedidos para tiendas online.",
    color: "ink",
  },
  {
    icon: Car,
    title: "Vehículos con Chofer",
    description:
      "Alquiler de unidades con chofer para necesidades logísticas puntuales o recurrentes.",
    color: "accent",
  },
];

const colorMap = {
  ink: "bg-ink/8 text-ink",
  accent: "bg-accent-soft text-accent",
  orange: "bg-orange-soft text-orange",
};

export default function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-16 bg-paper py-12 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
            Nuestros servicios
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Soluciones logísticas para cada necesidad
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/60 sm:text-lg sm:mt-4">
            Desde una entrega puntual hasta la logística completa de tu
            e-commerce. Nos adaptamos a tu operación.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:mt-12">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-xl border border-ink/8 bg-white p-4 transition-colors hover:border-ink/15 hover:shadow-md hover:shadow-ink/5 sm:rounded-2xl sm:p-5"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${colorMap[service.color]}`}
              >
                <service.icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-4 text-[15px] font-extrabold leading-snug tracking-tight text-ink">
                {service.title}
              </h3>
              {service.chips && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {service.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-block rounded-full bg-ink/5 px-2.5 py-0.5 text-[11px] font-semibold text-ink/60"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-ink/55">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-ink/45">
          Entregas en Montevideo, Canelones y al interior del país.
        </p>
      </div>
    </section>
  );
}