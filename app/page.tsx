import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Process } from "@/components/process";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { MidCTA } from "@/components/mid-cta";
import { FAQ } from "@/components/faq";
import { EstimateForm } from "@/components/estimate-form";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { ScrollRevealProvider } from "@/components/scroll-reveal";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <ScrollRevealProvider />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Process />
        <About />
        <Testimonials />
        <MidCTA />
        <FAQ />
        <EstimateForm />
      </main>
      <SiteFooter />
      <MobileStickyCTA />
    </>
  );
}
