"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";

const items = [
  { q: "How long does a kitchen remodel take?",
    a: "Most full kitchen remodels run four to seven weeks, start to finish. Cabinet refreshes (custom doors on existing boxes) run two to three. We finalize the timeline in writing during the planning step, and the same crew that starts is the crew that finishes, so the timeline doesn't stretch with subcontractor hand-offs." },
  { q: "What's included in the free estimate?",
    a: "Joel walks your space in person, listens to what you have in mind, and gives you a written estimate covering scope, materials, and timeline. No template price-list. No high-pressure close. You decide what to do next." },
  { q: "Do you handle permits?",
    a: "Yes, where permits are required, we handle the application and inspection coordination as part of the planning step. We work with the relevant county building departments across the Midlands: Lexington, Richland, Aiken, and Saluda." },
  { q: "Do you offer financing?",
    a: "We don't finance directly, but we're happy to walk through common homeowner financing options: HELOCs, home improvement loans, and contractor-partner programs. We'll also break the project into phases if budget timing is a concern." },
  { q: "Can I see references from past clients?",
    a: "Yes. Joel will share recent client contact information directly during your in-person estimate. Neighbors and references you can call. We're proud of every job we've shipped." },
  { q: "Do you cover my county?",
    a: "We serve the SC Midlands: primarily Lexington, Richland, Aiken, and Saluda counties. If you're nearby and not sure, call us at (832) 954-7349 or send us your address through the estimate form. We'll let you know within one business day." },
  { q: "What materials do you use?",
    a: "For kitchens: raised-panel custom cabinetry built in-house, glazed paint finishes, quartz countertops (Black Galaxy and similar), soft-close hinges. For baths: tile from subway to herringbone, custom or stock vanities, fixtures specified during planning. We discuss materials in person and put every spec in writing before build starts." },
  { q: "How do you handle change-orders?",
    a: "Face-to-face, never as a billing surprise. If we discover something during build that changes scope (an unexpected wiring issue, a homeowner request for an upgrade), we walk you through it before any work changes. No surprise invoices." },
];

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-h2" className="bg-cream py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="reveal">
          <span className="section-tag">07 Questions</span>
          <h2 id="faq-h2" className="section-h">
            Questions homeowners <span className="it">actually ask</span>.
          </h2>
          <p className="section-sub">If yours isn't here, ask us directly. We'll respond within one business day.</p>
        </div>

        <Accordion.Root type="single" collapsible className="max-w-[720px] mx-auto reveal-stagger">
          {items.map((it, i) => (
            <Accordion.Item key={i} value={`item-${i}`} className="border-t border-gray-200 last:border-b">
              <Accordion.Trigger className="group flex items-center justify-between gap-4 w-full text-left py-4 font-display font-semibold text-lg text-ink hover:text-forest transition-colors [&[data-state=open]]:text-forest">
                <span>{it.q}</span>
                <ChevronRight className="w-4 h-4 text-oak flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-90" />
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <p className="pb-4 pt-3 text-charcoal text-base leading-normal">{it.a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
