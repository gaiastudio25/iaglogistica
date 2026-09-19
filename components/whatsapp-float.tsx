import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink, defaultWhatsappMessage } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14 md:hidden"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}