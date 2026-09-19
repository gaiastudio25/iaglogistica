import { Headset, Store, Truck, ShoppingBag, Route } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

const reasons = [
  {
    icon: Headset,
    title: "Atención personalizada",
    text: "Te respondemos y coordinamos cada consulta.",
  },
  {
    icon: Store,
    title: "Soluciones para empresas y comercios",
    text: "Servicios que se adaptan a cada operación.",
  },
  {
    icon: Truck,
    title: "Servicios de transporte y distribución",
    text: "Repartos, encomiendas, fletes y distribución.",
  },
  {
    icon: ShoppingBag,
    title: "Experiencia en entregas para e-commerce",
    text: "Pedidos de Mercado Libre y ventas online.",
  },
  {
    icon: Route,
    title: "Coordinación y seguimiento de cada servicio",
    text: "Tu mercadería coordinada hasta que llega a destino.",
  },
];

export default function WhyChunitur() {
  return (
    <section className="bg-ink py-12 text-paper sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
            Por qué Chunitur
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Logística pensada para que las cosas lleguen.
          </h2>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:mt-12">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-accent/40 hover:bg-white/[0.07] sm:rounded-2xl sm:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <reason.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-extrabold tracking-tight">
                {reason.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-paper/60">
                {reason.text}
              </p>
            </article>
          ))}

          <div className="flex flex-col justify-between rounded-xl bg-accent p-4 text-white sm:rounded-2xl sm:p-6">
            <p className="text-lg font-extrabold leading-snug tracking-tight">
              ¿Necesitás un servicio puntual o recurrente?
            </p>
            <a
              href={whatsappLink(
                "Hola Chunitur, quería consultar por un servicio de transporte y logística."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}