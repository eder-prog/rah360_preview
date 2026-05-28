export function Hero() {
  return (
    <section
      id="hero"
      data-theme="dark"
      aria-labelledby="hero-h1"
      className="relative min-h-[520px] md:min-h-[680px] overflow-hidden text-cream bg-ink pt-[108px] md:pt-[180px] pb-20 md:pb-40"
    >
      {/* Layer 1: photo */}
      <div
        role="img"
        aria-label="Custom raised-panel kitchen remodel by RAH360 in the South Carolina Midlands"
        className="absolute inset-0 z-0 bg-cover bg-center saturate-[1.15] contrast-[1.04]"
        style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
      />
      {/* Layer 2: overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(105deg, rgba(15,12,8,0.88) 0%, rgba(15,12,8,0.72) 40%, rgba(15,12,8,0.45) 72%, rgba(15,12,8,0.30) 100%), linear-gradient(180deg, transparent 0%, transparent 55%, rgba(15,12,8,0.65) 100%)",
        }}
      />

      <div className="relative z-[2] max-w-[1200px] mx-auto px-4 md:px-8 reveal">
        <h1
          id="hero-h1"
          className="font-display font-black text-cream mb-6 max-w-[24ch] leading-[0.98] tracking-tightest"
          style={{ fontSize: "clamp(36px, 8vw, 72px)" }}
        >
          Custom kitchens, baths, and full home remodels. <span className="it">Done right,</span> here in the Midlands.
        </h1>
        <p className="text-lg md:text-xl text-cream/90 mb-10 max-w-[52ch] leading-normal">
          Free in-person estimate. Joel comes out personally. No pressure, no template kitchens.
        </p>
        <div className="flex flex-wrap items-center gap-6 mb-12">
          <a
            href="#estimate-form"
            className="inline-flex items-center justify-center px-8 py-4 min-h-[56px] bg-burnt text-white font-display font-bold text-lg rounded-xl shadow-warm hover:bg-burnt-hover hover:-translate-y-0.5 hover:scale-[1.02] transition-all"
          >
            Get a Free Estimate
          </a>
          <a
            href="#gallery"
            className="text-cream font-body font-medium text-base underline decoration-oak decoration-2 underline-offset-4 hover:decoration-burnt transition-colors"
          >
            See finished projects <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="text-sm text-cream/85 tracking-wider">
          Same crew, start to finish · Free in-person estimate · Built in the Midlands
        </p>
      </div>
    </section>
  );
}
