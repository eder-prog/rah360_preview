import { Phone } from "lucide-react";

export function MobileStickyCTA() {
  return (
    <a
      href="tel:+18329547349"
      aria-label="Call Joel at 832-954-7349"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-burnt text-white inline-flex items-center justify-center gap-2 h-14 font-display font-semibold text-base shadow-[0_-4px_12px_rgba(26,26,26,0.16)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Phone className="w-4 h-4" />
      <span>Call Joel · (832) 954-7349</span>
    </a>
  );
}
