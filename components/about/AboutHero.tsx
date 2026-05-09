"use client";

import { PageHero } from "@/components/ui/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      eyebrow="About us"
      accentDot="accent"
      variant="aurora"
      title={
        <>
          Built by builders.{" "}
          <span className="aurora-text">For businesses that ship.</span>
        </>
      }
      blurb="The web and AI division of Zeconic LLC — a US-based studio that helps small businesses compete online with custom websites and intelligent tools."
    />
  );
}
