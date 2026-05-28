import Image from "next/image";

const stats = [
  { label: "Owner", value: "Joel Gonzalez" },
  { label: "Based in", value: "Pelion, SC" },
  { label: "Tenure", value: "5+ years" },
  { label: "Crew", value: "Same, start to finish" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-h2" className="bg-stone py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="reveal">
          <span className="section-tag">04 Meet Joel</span>
          <h2 id="about-h2" className="section-h">
            You'll meet the <span className="it">owner</span> before you sign anything.
          </h2>
          <p className="text-charcoal text-lg leading-relaxed max-w-[56ch] mb-12">
            RAH360 is owner-led. Joel Gonzalez is on every job site, every day. The same crew that bids your project is the crew that finishes it. We've spent the last five-plus years finishing custom kitchens, baths, and patio covers across Lexington, Richland, Aiken, and Saluda counties.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300 p-px rounded-md overflow-hidden reveal-stagger">
            {stats.map((s) => (
              <div key={s.label} className="bg-stone px-5 py-4 flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.10em] text-gray-500">{s.label}</span>
                <span className="font-display font-semibold text-[17px] text-ink tracking-tight">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative aspect-square rounded-xl overflow-hidden shadow-md">
          <Image src="/assets/joel-portrait.jpg"
            alt="Joel Gonzalez, owner of RAH360, on a remodel job site in Pelion, South Carolina"
            fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
