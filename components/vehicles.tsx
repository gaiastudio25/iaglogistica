"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/vehiculos/20250829_225400.jpg", alt: "Vehículo Chunitur" },
  { src: "/vehiculos/20250924_154355.jpg", alt: "Vehículo Chunitur" },
  { src: "/vehiculos/20250926_011159.jpg", alt: "Vehículo Chunitur" },
  { src: "/vehiculos/20250929_195256.jpg", alt: "Vehículo Chunitur" },
  { src: "/vehiculos/20251122_175656.jpg", alt: "Vehículo Chunitur" },
  { src: "/vehiculos/20260107_195450.jpg", alt: "Vehículo Chunitur" },
  { src: "/vehiculos/20260113_204358.jpg", alt: "Vehículo Chunitur" },
  { src: "/vehiculos/20260113_204403.jpg", alt: "Vehículo Chunitur" },
  { src: "/vehiculos/20260608_193112.jpg", alt: "Vehículo Chunitur" },
  { src: "/vehiculos/20260616_212940.jpg", alt: "Vehículo Chunitur" },
  { src: "/vehiculos/20260720_210642.jpg", alt: "Vehículo Chunitur" },
  { src: "/vehiculos/20260820_182756.jpg", alt: "Vehículo Chunitur" },
];

export default function Vehicles() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  function open(i: number) { setLightbox(i); }
  function close() { setLightbox(null); }
  function prev() { if (lightbox !== null) setLightbox((lightbox - 1 + images.length) % images.length); }
  function next() { if (lightbox !== null) setLightbox((lightbox + 1) % images.length); }

  return (
    <section id="vehiculos" className="scroll-mt-16 bg-sand/50 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange">
            Nuestros vehículos
          </p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Contamos con la flota para lo que necesites.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/60 sm:text-lg sm:mt-4">
            Vehículos preparados para repartos, fletes, mudanzas y distribución.
          </p>
        </div>

        {/* Mobile: carousel horizontal */}
        <div
          ref={scrollRef}
          className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 scrollbar-none md:mt-12 md:hidden"
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => open(i)}
              className="group relative h-48 w-[70%] flex-none snap-start overflow-hidden rounded-xl bg-sand focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="70vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => open(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-sand focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-16"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            className="relative h-full max-h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}