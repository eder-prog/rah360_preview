import { Phone } from "lucide-react";

export function MidCTA() {
  return (
    <section id="cta-mid" aria-labelledby="cta-mid-h2" className="bg-stone py-16 md:py-24 text-center">
      <div className="max-w-[720px] mx-auto px-4 md:px-8 reveal">
        <span className="section-tag inline-flex">06 Ready when you are</span>
        <h2 id="cta-mid-h2" className="section-h mx-auto">
          Free, <span className="it">in-person</span> estimate. No pressure.
        </h2>
        <p className="section-sub mx-auto">
          We'll be in your home within the week. Joel walks your space, listens, and gives you a real estimate, not a template price.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <a href="#estimate-form"
            className="inline-flex items-center justify-center px-12 py-4 min-h-[56px] bg-burnt text-white font-display font-bold text-lg rounded-xl shadow-warm hover:bg-burnt-hover hover:-translate-y-0.5 hover:scale-[1.02] transition-all">
            Get a Free Estimate
          </a>
          <a href="tel:+18329547349"
            className="inline-flex items-center gap-2 text-ink font-body font-medium text-base">
            <Phone className="w-4 h-4 text-oak" />
            <span className="underline decoration-oak decoration-2 underline-offset-4">Or call Joel · (832) 954-7349</span>
          </a>
        </div>
      </div>
    </section>
  );
}
