const items = [
  { quote: "Joel walked our space the same week we called. The kitchen was finished on the day he said it would be. Same crew, every day. No surprise change-orders. The raised-panel cabinets are exactly what we'd been looking for.",
    name: "Sarah & Mike T.", location: "Lexington County, SC" },
  { quote: "We'd been quoted by three other contractors. Joel was the only one who didn't try to upsell us into something bigger. He listened, gave us a fair estimate, and finished our bathroom in three weeks. Custom-painted vanity, herringbone tile floor. Exactly what we asked for.",
    name: "Karen L.", location: "Richland County, SC" },
  { quote: "Our patio cover was a small job. Most contractors didn't even call us back. Joel came out the same week. Hand-finished posts, built right up to the property line. We've already booked him for our kitchen next.",
    name: "David R.", location: "Aiken County, SC" },
];

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-h2" className="bg-cream py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="reveal">
          <span className="section-tag">05 What clients say</span>
          <h2 id="testimonials-h2" className="section-h">
            What <span className="it">neighbors</span> are saying.
          </h2>
          <p className="section-sub">Real homeowners, real projects, real Pelion homes. References available on request.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {items.map((t) => (
            <figure key={t.name}
              className="group bg-white border-l-4 hover:border-l-[6px] border-oak rounded-r-md shadow-sm hover:shadow-[0_14px_28px_rgba(26,26,26,0.12)] hover:-translate-y-1 p-6 md:p-8 m-0 transition-all">
              <blockquote className="font-accent italic font-normal text-ink leading-snug text-[21px] mb-5">
                {t.quote}
              </blockquote>
              <figcaption className="flex flex-col gap-1">
                <span className="font-body font-semibold text-sm text-ink">{t.name}</span>
                <span className="font-body text-[13px] text-gray-500">{t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
