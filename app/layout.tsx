import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chunitur — Transporte y logística en Uruguay",
  description:
    "Empresa de transporte y logística en Uruguay. Cadeteria y comisiones, encomiendas, fletes y distribución de mercadería para empresas, comercios y e-commerce. Solicita tu presupuesto por WhatsApp.",
  keywords: [
    "transporte Uruguay",
    "empresa de logística Uruguay",
    "transporte de mercadería",
    "distribución de mercadería",
    "Cadeteria y comisiones",
    "fletes",
    "encomiendas",
    "Mercado Libre Flex",
    "Mercado Envíos",
    "logística para e-commerce",
  ],
  openGraph: {
    type: "website",
    locale: "es_UY",
    title: "Chunitur — Transporte y logística en Uruguay",
    description:
      "Transporte, distribución y entregas para empresas, comercios y e-commerce en Uruguay. Solicita tu presupuesto por WhatsApp.",
    siteName: company.name,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: company.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pinamar",
    addressRegion: "Canelones",
    addressCountry: "UY",
  },
  areaServed: "Uruguay",
  knowsAbout: [
    "Mercado Libre Flex",
    "Mercado Envíos",
    "Cadeteria y comisiones",
    "Encomiendas",
    "Fletes",
    "Distribución",
    "Transporte de mercadería",
    "Logística para e-commerce",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}