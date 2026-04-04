import AboutContent from "@/components/about/AboutContent";
import AboutHero from "@/components/about/AboutHero";
import { CTABanner } from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About | Zeconic Web Solutions" },
  description:
    "Zeconic Web Solutions — the web and AI division of Zeconic LLC. We build custom websites and AI tools for small businesses across the US.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <CTABanner />
    </>
  );
}
