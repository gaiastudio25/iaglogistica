"use client";

import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/site";

const serviceOptions = [
  "Logística para Mercado Libre",
  "Repartos y Distribución",
  "Fletes y Encomiendas",
  "Cadetería y Comisiones",
  "Mudanzas",
  "Depósito y Almacenamiento",
  "Fulfillment para E-commerce",
  "Vehículos con Chofer",
  "Otro / no sé todavía",
];

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const data = new FormData(event.currentTarget);

    const fields = {
      nombre: String(data.get("nombre") ?? "").trim(),
      empresa: String(data.get("empresa") ?? "").trim(),
      telefono: String(data.get("telefono") ?? "").trim(),
      servicio: String(data.get("servicio") ?? "").trim(),
      mensaje: String(data.get("mensaje") ?? "").trim(),
    };

    const mensaje = [
      "Hola Chunitur, solicito un presupuesto.",
      "",
      `Nombre: ${fields.nombre}`,
      `Empresa: ${fields.empresa || "—"}`,
      `Teléfono / WhatsApp: ${fields.telefono}`,
      `Servicio: ${fields.servicio}`,
      fields.mensaje ? `Mensaje: ${fields.mensaje}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setSending(true);

    window.open(
      whatsappLink(mensaje),
      "_blank",
      "noopener,noreferrer"
    );

    window.setTimeout(() => setSending(false), 1500);
  }

  const inputClasses =
    "block w-full min-w-0 max-w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 sm:rounded-xl sm:px-4 sm:py-3 sm:text-[15px]";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full min-w-0 max-w-full overflow-hidden space-y-3 sm:space-y-4"
    >
      <div className="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
        <div className="min-w-0">
          <label
            htmlFor="nombre"
            className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-ink/60 sm:mb-1.5 sm:text-xs"
          >
            Nombre *
          </label>

          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className={inputClasses}
          />
        </div>

        <div className="min-w-0">
          <label
            htmlFor="empresa"
            className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-ink/60 sm:mb-1.5 sm:text-xs"
          >
            Empresa
          </label>

          <input
            id="empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            placeholder="Tu empresa (opc.)"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="min-w-0">
        <label
          htmlFor="telefono"
          className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-ink/60 sm:mb-1.5 sm:text-xs"
        >
          Teléfono / WhatsApp *
        </label>

        <input
          id="telefono"
          name="telefono"
          type="tel"
          required
          autoComplete="tel"
          placeholder="Tu número de contacto"
          className={inputClasses}
        />
      </div>

      <div className="min-w-0 max-w-full">
        <label
          htmlFor="servicio"
          className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-ink/60 sm:mb-1.5 sm:text-xs"
        >
          Servicio que necesita *
        </label>

        <select
          id="servicio"
          name="servicio"
          required
          defaultValue={serviceOptions[0]}
          className={`${inputClasses} overflow-hidden text-ellipsis whitespace-nowrap`}
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="min-w-0">
        <label
          htmlFor="mensaje"
          className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-ink/60 sm:mb-1.5 sm:text-xs"
        >
          Mensaje
        </label>

        <textarea
          id="mensaje"
          name="mensaje"
          rows={3}
          placeholder="Cantidad, zonas, frecuencia…"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex h-10 w-full min-w-0 items-center justify-center rounded-full bg-accent px-5 text-sm font-bold text-white transition-colors hover:bg-accent-deep disabled:opacity-70 sm:h-12 sm:px-6 sm:text-[15px]"
      >
        {sending ? "Abriendo WhatsApp…" : "Solicitar presupuesto"}
      </button>

      <p className="text-center text-[10px] text-ink/45 sm:text-xs">
        Tu consulta se envía directo a nuestro WhatsApp.
      </p>
    </form>
  );
}