"use client";

import { PageHero } from "@/components/ui/PageHero";

export default function PortfolioHero() {
  return (
    <PageHero
      eyebrow="Selected work"
      accentDot="magenta"
      variant="aurora"
      title={
        <>
          Real sites for{" "}
          <span className="aurora-text">real businesses.</span>
        </>
      }
      blurb="Every project is custom-built — no templates, no shortcuts. Here's a slice of what we've shipped lately."
    />
  );
}
