import { CTABanner } from "@/components/home/CTABanner";
import FeaturedProject from "@/components/portfolio/FeaturedProject";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Portfolio | Zeconic Web Solutions" },
  description: "Real websites built for real businesses. See our work.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <FeaturedProject />
      <ProjectGrid />
      <CTABanner />
    </>
  );
}
