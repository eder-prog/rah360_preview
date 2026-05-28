const steps = [
  { n: "01", title: "Estimate",
    body: "Joel comes out personally to walk your space. We discuss scope, materials, and your timeline. The estimate is free and in person, no template price-list, no high-pressure close. Expect us within one business day of your request." },
  { n: "02", title: "Plan",
    body: "We finalize materials, cabinetry details, finishes, and a written timeline. Permits, where needed, are handled by us. You see every line item before you sign anything." },
  { n: "03", title: "Build",
    body: "The same crew that bid your job is the crew that finishes it. Photo updates as we progress. Change-order conversations happen face-to-face, never as a billing surprise." },
  { n: "04", title: "Walk-through",
    body: "Final walk-through with Joel. Anything that's not right, we fix on the spot. Then it's your kitchen, bath, or patio, built to last, photo-documented for our portfolio." },
];

export function Process() {
  return (
    <section id="process" aria-labelledby="process-h2" className="bg-cream py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16">
        <div className="reveal">
          <span className="section-tag">03 How it works</span>
          <h2 id="process-h2" className="section-h">
            Four steps, from estimate to <span className="it">walk-through</span>.
          </h2>
          <p className="section-sub">
            No mystery, no pressure, no surprise change-orders. You meet Joel before anything begins, and you see the work, photo-documented, every step.
          </p>
        </div>
        <ol className="reveal-stagger">
          {steps.map((s, i) => (
            <li key={s.n}
              className={`group grid grid-cols-[64px_1fr] gap-6 items-start py-6 transition-colors hover:bg-oak/5
                ${i === 0 ? "" : "border-t border-gray-200"}`}>
              <span className="font-mono text-2xl font-semibold text-oak group-hover:text-burnt transition-colors">{s.n}</span>
              <div>
                <h3 className="font-display font-bold text-2xl text-ink mb-2 tracking-tight">{s.title}</h3>
                <p className="text-charcoal text-base leading-normal">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
