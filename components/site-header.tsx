"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  const detectTheme = useCallback(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-theme]");
    const probeY = 80;
    let next: "dark" | "light" = "light";
    for (const sec of Array.from(sections)) {
      const r = sec.getBoundingClientRect();
      if (r.top <= probeY && r.bottom > probeY) {
        next = (sec.dataset.theme as "dark" | "light") ?? "light";
        break;
      }
    }
    setTheme(next);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      detectTheme();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", detectTheme, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", detectTheme);
    };
  }, [detectTheme]);

  const onDark = theme === "dark";
  const headerBg = onDark
    ? "bg-ink/30 backdrop-blur-md backdrop-saturate-150 border-cream/10"
    : "bg-cream/80 backdrop-blur-xl backdrop-saturate-180 border-ink/10 shadow-[0_2px_16px_rgba(26,26,26,0.06)]";

  const navLinkBase = "transition-colors duration-150 py-2 text-[13px] font-medium uppercase tracking-[0.02em]";
  const navLinkColor = onDark ? "text-cream/90 hover:text-cream" : "text-charcoal hover:text-ink";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${headerBg}`}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between h-[64px] md:h-[72px] gap-4">
        {/* Logo container — width morphs by state */}
        <Link href="#top" aria-label="RAH360 · Home" className="relative block flex-shrink-0 overflow-hidden transition-[width] duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
          style={{ height: scrolled ? 56 : 56, width: scrolled ? 56 : onDark ? 210 : 218 }}
        >
          {/* 4 SVG variants cross-fade */}
          <Image src="/assets/logo/logo-full-light.svg" alt="" aria-hidden="true" width={800} height={220} priority
            className={`absolute top-1/2 left-0 -translate-y-1/2 h-full w-auto transition-opacity duration-[350ms] ${onDark && !scrolled ? "opacity-100" : "opacity-0"}`} />
          <Image src="/assets/logo/logo-full-dark.svg" alt="" aria-hidden="true" width={700} height={180}
            className={`absolute top-1/2 left-0 -translate-y-1/2 h-full w-auto transition-opacity duration-[350ms] ${!onDark && !scrolled ? "opacity-100" : "opacity-0"}`} />
          <Image src="/assets/logo/logo-icon-light.svg" alt="" aria-hidden="true" width={120} height={120}
            className={`absolute top-1/2 left-0 -translate-y-1/2 h-full w-auto transition-opacity duration-[350ms] ${scrolled && onDark ? "opacity-100" : "opacity-0"}`} />
          <Image src="/assets/logo/logo-icon-dark.svg" alt="" aria-hidden="true" width={120} height={120}
            className={`absolute top-1/2 left-0 -translate-y-1/2 h-full w-auto transition-opacity duration-[350ms] ${scrolled && !onDark ? "opacity-100" : "opacity-0"}`} />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8 font-display">
          {[
            { href: "#services", label: "Services" },
            { href: "#gallery", label: "Gallery" },
            { href: "#process", label: "Process" },
            { href: "#about", label: "About" },
            { href: "#estimate-form", label: "Contact" },
          ].map((l) => (
            <a key={l.href} href={l.href} className={`${navLinkBase} ${navLinkColor}`}>{l.label}</a>
          ))}
        </nav>

        {/* Right cluster — phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+18329547349" aria-label="Call Joel at 832-954-7349"
            className="hidden xl:inline-flex items-center gap-2 font-display font-bold text-[15px] text-burnt hover:text-burnt-hover transition-colors whitespace-nowrap">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>(832) 954-7349</span>
          </a>
          <a href="#estimate-form"
            className="inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] bg-burnt text-white font-display font-bold text-base rounded-xl shadow-cta animate-cta-bounce hover:animate-none hover:bg-burnt-hover hover:scale-[1.04] hover:shadow-cta-hover transition-all motion-reduce:animate-none">
            Get a Free Estimate
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? <X className={onDark ? "text-cream w-6 h-6" : "text-ink w-6 h-6"} />
                    : <Menu className={onDark ? "text-cream w-6 h-6" : "text-ink w-6 h-6"} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="md:hidden bg-cream border-t border-gray-200" aria-label="Mobile primary">
          {[
            { href: "#services", label: "Services" },
            { href: "#gallery", label: "Gallery" },
            { href: "#process", label: "Process" },
            { href: "#about", label: "About" },
            { href: "#estimate-form", label: "Contact" },
          ].map((l) => (
            <a key={l.href} href={l.href} className="block px-4 py-4 text-lg font-display text-ink border-b border-gray-200"
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
