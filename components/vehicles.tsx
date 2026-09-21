import Image from "next/image";

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
        <div className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 scrollbar-none md:mt-12 md:hidden">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative h-48 w-[70%] flex-none snap-start overflow-hidden rounded-xl bg-sand"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="70vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sand"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}