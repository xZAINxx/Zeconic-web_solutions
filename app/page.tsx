import { CTABanner } from "@/components/home/CTABanner";
import { Hero } from "@/components/home/Hero";
import { PortfolioTeaser } from "@/components/home/PortfolioTeaser";
import { Process } from "@/components/home/Process";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustStrip } from "@/components/home/TrustStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <PortfolioTeaser />
      <Testimonials />
      <Process />
      <CTABanner />
    </>
  );
}
