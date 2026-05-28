const services = [
  {
    title: "Kitchen Remodels",
    body: "Raised-panel cabinetry. Hand-painted finishes. Quartz tops. Custom millwork built in-house, not assembled big-box stock.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 text-oak group-hover:scale-110 group-hover:-rotate-3 transition-transform">
        <rect x="3" y="6" width="26" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <line x1="3" y1="14" x2="29" y2="14" stroke="currentColor" strokeWidth="1.4" />
        <line x1="11" y1="6" x2="11" y2="26" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="7" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Bathroom Remodels",
    body: "Tile from subway to herringbone. Soft-close vanities. Small spaces welcomed.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 text-oak group-hover:scale-110 group-hover:-rotate-3 transition-transform">
        <rect x="6" y="4" width="20" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="11" r="1.6" fill="currentColor" />
        <line x1="11" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.4" />
        <line x1="11" y1="22" x2="21" y2="22" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Patio Covers",
    body: "Built to the property line. Hand-finished posts. Engineered for SC weather.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 text-oak group-hover:scale-110 group-hover:-rotate-3 transition-transform">
        <polyline points="3,14 16,5 29,14" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <line x1="6" y1="14" x2="6" y2="27" stroke="currentColor" strokeWidth="1.6" />
        <line x1="26" y1="14" x2="26" y2="27" stroke="currentColor" strokeWidth="1.6" />
        <line x1="3" y1="27" x2="29" y2="27" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Whole-Home Remodel",
    body: "Interior or exterior. Kitchen, baths, flooring, paint, exterior. Phased to your timeline. Same crew throughout.",
    icon: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 text-oak group-hover:scale-110 group-hover:-rotate-3 transition-transform">
        <polygon points="16,4 28,12 28,28 4,28 4,12" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <rect x="12" y="18" width="8" height="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <line x1="4" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="1.4" />
        <line x1="22" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-h2" className="bg-cream py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="reveal">
          <span className="section-tag">01 Services</span>
          <h2 id="services-h2" className="section-h">
            From cabinets to <span className="it">patio covers</span>.
          </h2>
          <p className="section-sub">
            Custom millwork built in-house. Quartz tops. Hand-painted finishes. Same crew, start to finish across every service we offer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
          {services.map((s) => (
            <article key={s.title}
              className="group bg-white rounded-xl border-t-[3px] border-oak hover:border-burnt p-8 shadow-sm hover:shadow-[0_18px_38px_rgba(26,26,26,0.14),0_4px_12px_rgba(181,130,74,0.18)] hover:-translate-y-1.5 transition-all cursor-pointer flex flex-col">
              <div className="mb-6">{s.icon}</div>
              <h3 className="font-display font-bold text-2xl text-ink mb-3 leading-tight">{s.title}</h3>
              <p className="text-charcoal text-base leading-normal mb-6 flex-grow">{s.body}</p>
              <a href="#gallery" className="text-forest group-hover:text-burnt font-display font-semibold text-sm tracking-wide self-start group-hover:translate-x-1 transition-all">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
