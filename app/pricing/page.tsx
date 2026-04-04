import { CTABanner } from "@/components/home/CTABanner";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingHero from "@/components/pricing/PricingHero";
import PricingTiers from "@/components/pricing/PricingTiers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Pricing | Zeconic Web Solutions" },
  description:
    "Simple, transparent pricing for web development, AI chatbots, and social media setup.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingTiers />
      <PricingFAQ />
      <CTABanner />
    </>
  );
}
