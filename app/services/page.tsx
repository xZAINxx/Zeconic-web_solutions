import { CTABanner } from "@/components/home/CTABanner";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesPage from "@/components/services/ServicesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Services | Zeconic Web Solutions" },
  description:
    "Custom web development, AI chatbots, and social media setup for small businesses across the US.",
};

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesPage />
      <CTABanner />
    </>
  );
}
