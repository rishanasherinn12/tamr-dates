import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/cart-store";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Tamr, I'd like to know more about your dates.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-warm hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
