"use client";

import { PageHero } from "@/components/ui/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      eyebrow="Get in touch"
      accentDot="magenta"
      variant="beams"
      title={
        <>
          Let&apos;s build{" "}
          <span className="aurora-text">something great.</span>
        </>
      }
      blurb="Tell us about your project. We'll review your message and get back within one business day."
    />
  );
}
