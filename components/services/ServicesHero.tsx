"use client";

import { PageHero } from "@/components/ui/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      eyebrow="What we offer"
      accentDot="primary"
      variant="aurora"
      title={
        <>
          Three services.{" "}
          <span className="aurora-text">Engineered, not assembled.</span>
        </>
      }
      blurb="Everything we ship is custom — designed around your business, your customers, and your goals. No drag-and-drop builders, no WordPress themes."
    />
  );
}
