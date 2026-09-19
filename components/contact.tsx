import ContactForm from "@/components/contact-form";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import {
  company,
  whatsappLink,
  defaultWhatsappMessage,
} from "@/lib/site";

export default function Contact() {
  const items = [
    
    {
      icon: MapPin,
      label: "Ubicación",
      value: company.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(company.location)}`,
      external: true,
    },
    ...(company.phoneDisplay && company.phoneHref
      ? [
          {
            icon: Phone,
            label: "Teléfono",
            value: company.phoneDisplay,
            href: company.phoneHref,
            external: false,
          },
        ]
      : []),
    ...(company.email
      ? [
          {
            icon: Mail,
            label: "Email",
            value: company.email,
            href: `mailto:${company.email}`,
            external: false,
          },
        ]
      : []),
    ...(company.instagramUrl
      ? [
          {
            icon: InstagramIcon,
            label: "Instagram",
            value: `@${company.instagramHandle}`,
            href: company.instagramUrl,
            external: true,
          },
        ]
      : []),
    ...(company.hours
      ? [
          {
            icon: Clock,
            label: "Horarios",
            value: company.hours,
            href: "",
            external: false,
          },
        ]
      : []),
  ];

  return (
    <section
      id="contacto"
      className="scroll-mt-16 overflow-x-hidden bg-sand/50 py-12 sm:py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full min-w-0 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Contact info */}
          <div className="w-full min-w-0 max-w-full">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
              Contacto
            </p>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Contanos qué necesitás y te asesoramos.
            </h2>

            <p className="mt-3 text-base leading-relaxed text-ink/60 sm:mt-4 sm:text-lg">
              Escribinos por WhatsApp o enviá tu consulta y te respondemos con
              un presupuesto.
            </p>

            <ul className="mt-6 w-full min-w-0 space-y-2 sm:mt-8 sm:space-y-3">
              {items.map((item) => (
                <li
                  key={item.label}
                  className="w-full min-w-0 max-w-full"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group flex w-full min-w-0 max-w-full items-center gap-3 rounded-xl border border-ink/10 bg-white p-3 transition-colors hover:border-accent/30 sm:gap-4 sm:rounded-2xl sm:p-4"
                    >
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-accent-soft text-accent sm:h-11 sm:w-11 sm:rounded-xl">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-bold uppercase tracking-wide text-ink/45 sm:text-xs">
                          {item.label}
                        </span>

                        <span className="block max-w-full break-words text-sm font-bold text-ink [overflow-wrap:anywhere] sm:text-[15px]">
                          {item.value}
                        </span>
                      </span>

                      {item.external && (
                        <ArrowUpRight className="ml-auto h-3.5 w-3.5 flex-none text-ink/30 transition-all group-hover:text-accent sm:h-4 sm:w-4" />
                      )}
                    </a>
                  ) : (
                    <div className="flex w-full min-w-0 max-w-full items-center gap-3 rounded-xl border border-ink/10 bg-white p-3 sm:gap-4 sm:rounded-2xl sm:p-4">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-accent-soft text-accent sm:h-11 sm:w-11 sm:rounded-xl">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-bold uppercase tracking-wide text-ink/45 sm:text-xs">
                          {item.label}
                        </span>

                        <span className="block max-w-full break-words text-sm font-bold text-ink [overflow-wrap:anywhere] sm:text-[15px]">
                          {item.value}
                        </span>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-ink/10 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-6 md:p-8">
            <h3 className="text-lg font-extrabold tracking-tight text-ink sm:text-xl">
              Solicitar presupuesto
            </h3>

            <p className="mt-1 text-xs text-ink/55 sm:mt-1.5 sm:text-sm">
              Completá el formulario y tu consulta nos llega por WhatsApp.
            </p>

            <div className="mt-4 w-full min-w-0 max-w-full sm:mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}