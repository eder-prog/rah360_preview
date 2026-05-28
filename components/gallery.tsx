"use client";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

const items = [
  { src: "/assets/gallery/01-kitchen-modern.jpg",       caption: "Custom kitchen · Lexington County, SC",
    alt: "Modern kitchen remodel with white shaker cabinets, black island, quartz countertops and herringbone backsplash" },
  { src: "/assets/gallery/02-bath-marble.jpg",          caption: "Bathroom remodel · Pelion, SC",
    alt: "Full bathroom remodel with gray marble tile walk-in shower and mosaic floor" },
  { src: "/assets/gallery/03-kitchen-sage.jpg",         caption: "Kitchen remodel · Cayce, SC",
    alt: "Kitchen remodel with sage-green shaker cabinets, granite countertops and stainless hood" },
  { src: "/assets/gallery/04-bath-master.jpg",          caption: "Master bath · Aiken County, SC",
    alt: "Master bath remodel with dual vanity and tile walls" },
  { src: "/assets/gallery/05-kitchen-espresso.jpg",     caption: "Kitchen · Richland County, SC",
    alt: "Kitchen remodel with espresso dark shaker cabinets, granite countertops and mosaic backsplash" },
  { src: "/assets/gallery/06-floor-kitchen-refresh.jpg", caption: "Flooring + kitchen refresh · Saluda, SC",
    alt: "Hardwood flooring install with glazed cream cabinet refresh and farmhouse sink" },
];

export function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(() => setOpenIdx((i) => (i === null ? null : (i + 1) % items.length)), []);
  const prev = useCallback(() => setOpenIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length)), []);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [openIdx, close, next, prev]);

  return (
    <>
      <section id="gallery" aria-labelledby="gallery-h2" className="bg-cream py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="reveal">
            <span className="section-tag">02 Recent work</span>
            <h2 id="gallery-h2" className="section-h">
              Real homes. <span className="it">Real finishes</span>.
            </h2>
            <p className="section-sub">Every project photo-documented. No stock images. Click any photo to see it full-size.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 reveal-stagger">
            {items.map((it, i) => (
              <button key={it.src} onClick={() => setOpenIdx(i)} aria-label={`Open ${it.caption}`}
                className="group relative block rounded-md overflow-hidden shadow-sm hover:shadow-[0_16px_32px_rgba(26,26,26,0.18)] hover:-translate-y-1 transition-all cursor-pointer">
                <div className="relative aspect-[4/3]">
                  <Image src={it.src} alt={it.alt} fill loading="lazy"
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105" />
                </div>
                <span className="absolute left-0 right-0 bottom-0 px-4 py-3 bg-gradient-to-t from-ink/80 to-transparent text-cream text-[11px] font-mono uppercase tracking-wider text-left opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  {it.caption}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {openIdx !== null && (
        <div role="dialog" aria-modal="true" aria-label="Project photo viewer"
          className="fixed inset-0 z-[200] bg-ink/95 flex items-center justify-center">
          <button onClick={close} aria-label="Close image viewer"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-ink/50 text-cream text-3xl flex items-center justify-center hover:bg-ink/70">&times;</button>
          <button onClick={prev} aria-label="Previous image"
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ink/50 text-cream text-2xl flex items-center justify-center hover:bg-ink/70">‹</button>
          <button onClick={next} aria-label="Next image"
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ink/50 text-cream text-2xl flex items-center justify-center hover:bg-ink/70">›</button>
          <div className="relative w-[min(90vw,1200px)] aspect-[4/3] rounded-md shadow-2xl">
            <Image src={items[openIdx].src} alt={items[openIdx].alt} fill className="object-cover rounded-md" />
          </div>
          <div className="absolute left-0 right-0 bottom-8 text-center text-cream">
            <p className="font-display font-medium text-lg mb-1">{items[openIdx].caption}</p>
            <p className="font-mono text-xs opacity-70 tracking-widest">{openIdx + 1} of {items.length}</p>
          </div>
        </div>
      )}
    </>
  );
}
