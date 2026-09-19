"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";
import { WhatsAppIcon } from "@/components/icons";
import { company, whatsappLink } from "@/lib/site";

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Empresa", href: "#empresa" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <Link href="#inicio" aria-label="Chunitur — Inicio">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contacto"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-accent-deep lg:inline-flex"
          >
            Solicitar presupuesto
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Menú móvil">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-ink transition-colors hover:bg-sand"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-ink/10 pt-4">
              <Link
                href="#contacto"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-bold text-white transition-colors hover:bg-accent-deep"
              >
                Solicitar presupuesto
              </Link>
              <a
                href={whatsappLink(`Hola ${company.name}, quería solicitar un presupuesto.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-5 text-sm font-bold text-ink"
              >
                <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                Consultar por WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}