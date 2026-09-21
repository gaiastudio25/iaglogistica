export const company = {
  name: "Chunitur",
  tagline: "Transporte y logística en Uruguay",
  description:
    "Transporte, distribución y entregas para empresas, comercios y e-commerce en Uruguay.",
  location: "Pinamar",
  whatsappNumber: "59892092886",
  whatsappDisplay: "092 092 886",
  phoneDisplay: "092 092 886",
  phoneHref: "tel:+59892092886",
  email: "chunitur@gmail.com",
  instagramUrl: "",
  instagramHandle: "",
  hours: "",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export const defaultWhatsappMessage = `Hola ${company.name}, quería solicitar un presupuesto para un servicio de transporte y logística.`;