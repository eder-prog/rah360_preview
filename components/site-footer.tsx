import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer data-theme="dark" className="relative bg-ink text-cream/85 pt-20 pb-8 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 18% 80%, rgba(216,94,31,0.18) 0%, transparent 50%), radial-gradient(circle at 88% 20%, rgba(181,130,74,0.16) 0%, transparent 45%)",
        }}
      />
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-12">
        <div>
          <Link href="#top" aria-label="RAH360 · Home" className="inline-block mb-4">
            <Image src="/assets/logo/logo-full-light.svg" alt="RAH360 · Custom remodels · Lexington, SC" width={800} height={220}
              className="h-12 w-auto" />
          </Link>
          <p className="text-cream/70 text-sm max-w-[30ch] mt-2 mb-5">RAH360. Owner-led custom remodels. SC Midlands.</p>
          <div className="flex gap-3">
            <a href="https://facebook.com/rah360kitchensandbaths" rel="noopener" aria-label="Follow RAH360 on Facebook"
              className="inline-flex items-center justify-center w-10 h-10 border border-oak rounded-full text-cream hover:bg-oak hover:text-ink transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-mono font-semibold text-[11px] uppercase tracking-[0.12em] text-oak mb-2">Services</h4>
          <ul className="grid gap-2">
            {[
              { href: "#services", label: "Kitchen Remodels" },
              { href: "#services", label: "Bathroom Remodels" },
              { href: "#services", label: "Patio Covers" },
              { href: "#services", label: "Whole-Home Remodel" },
            ].map((l) => (
              <li key={l.label}><a href={l.href} className="text-cream/85 text-sm hover:text-cream">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono font-semibold text-[11px] uppercase tracking-[0.12em] text-oak mb-2">Service Area</h4>
          <p className="text-cream/85 text-sm leading-normal m-0">South Carolina Midlands</p>
          <p className="text-cream/85 text-sm leading-normal m-0">Lexington · Richland · Aiken · Saluda</p>
        </div>

        <div>
          <h4 className="font-mono font-semibold text-[11px] uppercase tracking-[0.12em] text-oak mb-2">Contact</h4>
          <ul className="grid gap-2 text-sm">
            <li>
              <a href="tel:+18329547349" className="text-cream/85 hover:text-cream inline-flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-oak flex-shrink-0" />(832) 954-7349
              </a>
            </li>
            <li>
              <a href="mailto:rah360construction@gmail.com" className="text-cream/85 hover:text-cream inline-flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-oak flex-shrink-0" />rah360construction@gmail.com
              </a>
            </li>
            <li className="mt-3">
              <a href="#estimate-form"
                className="inline-flex items-center justify-center px-5 py-2 min-h-[40px] bg-burnt text-white font-display font-bold text-sm rounded-xl shadow-cta hover:bg-burnt-hover transition-colors">
                Start your project
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 md:px-8 pt-6 border-t border-cream/10 flex flex-col md:flex-row md:justify-between md:items-center gap-3 text-xs text-cream/55">
        <p>© 2026 RAH360. All rights reserved.</p>
        <p>
          <a href="/privacy" className="text-cream/70 hover:text-cream mr-4">Privacy</a>
          <a href="/terms" className="text-cream/70 hover:text-cream">Terms</a>
        </p>
      </div>
    </footer>
  );
}
