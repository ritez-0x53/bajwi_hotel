import { MessageCircle } from "lucide-react";
import { whatsappQuickUrl } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappQuickUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] h-14 w-14 rounded-full grid place-items-center shadow-glow hover-lift pulse-gold"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  );
}
