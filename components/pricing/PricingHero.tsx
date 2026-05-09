"use client";

import { PageHero } from "@/components/ui/PageHero";

export default function PricingHero() {
  return (
    <PageHero
      eyebrow="Pricing"
      accentDot="primary"
      variant="aurora"
      title={
        <>
          Simple pricing.{" "}
          <span className="aurora-text">Honest scope.</span>
        </>
      }
      blurb="Every project is custom-quoted based on your goals and complexity. No surprise fees. No locked-in contracts. No deck."
    />
  );
}
