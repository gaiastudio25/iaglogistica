import Link from "next/link";
import Logo from "@/components/logo";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import { MapPin, Phone, Mail } from "lucide-react";
import { company, whatsappLink, defaultWhatsappMessage } from "@/lib/site";

const services = [
  "Logística para Mercado Libre",
  "Repartos y Distribución",
  "Fletes y Encomiendas",
  "Cadetería y Comisiones",
  "Mudanzas",
  "Depósito y Almacenamiento",
  "Fulfillment para E-commerce",
  "Vehículos con Chofer",
];

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Empresa", href: "#empresa" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo inverse />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/55">
              Transporte, distribución y entregas para empresas, comercios y
              e-commerce en Uruguay.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Chunitur"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper/70 transition-colors hover:border-accent hover:text-accent"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
              {company.instagramUrl && (
                <a
                  href={company.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Chunitur"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper/70 transition-colors hover:border-accent hover:text-accent"
                >
                  <InstagramIcon className="h-4.5 w-4.5" />
                </a>
              )}
            </div>
          </div>

          

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/40">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink(defaultWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 font-semibold text-paper/70 transition-colors hover:text-accent"
                >
                  <WhatsAppIcon className="mt-0.5 h-4 w-4 flex-none text-whatsapp" />
                  {company.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-paper/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-paper/40" />
                {company.location}
              </li>
              {company.phoneDisplay && company.phoneHref && (
                <li>
                  <a
                    href={company.phoneHref}
                    className="flex items-start gap-2.5 font-semibold text-paper/70 transition-colors hover:text-accent"
                  >
                    <Phone className="mt-0.5 h-4 w-4 flex-none text-paper/40" />
                    {company.phoneDisplay}
                  </a>
                </li>
              )}
              {company.email && (
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-start gap-2.5 font-semibold text-paper/70 transition-colors hover:text-accent"
                  >
                    <Mail className="mt-0.5 h-4 w-4 flex-none text-paper/40" />
                    {company.email}
                  </a>
                </li>
              )}
            </ul>
            
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-paper/40 sm:flex-row">
          <p>
            © {year} {company.name}. Villa Olmos, Canelones, Uruguay.
          </p>
          <p className="font-semibold uppercase tracking-[0.14em]">
            Transporte y logística en Uruguay
          </p>
        </div>
      </div>
    </footer>
  );
}