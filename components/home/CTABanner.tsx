"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import PrismaticBeams from "@/components/3d/PrismaticBeams";
import { motion } from "framer-motion";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="hairline" />
      {/* Beams accent */}
      <div className="absolute inset-0">
        <PrismaticBeams parallax={false} />
      </div>

      <SectionWrapper className="relative z-10 !py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6"
        >
          <span className="eyebrow text-primary">
            <span className="mr-1.5">●</span> Let&apos;s build
          </span>
          <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-tight text-textPrimary">
            Ready to ship something{" "}
            <span className="aurora-text">that actually converts?</span>
          </h2>
          <p className="max-w-xl text-[16px] leading-relaxed text-textSecondary">
            Book a free 30-minute call. No deck, no pitch — just a conversation
            about what you&apos;re trying to build and whether we&apos;re a
            match.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3.5">
            <Button variant="aurora" href="/contact" size="lg">
              Book a discovery call →
            </Button>
            <Button variant="secondary" href="/portfolio" size="lg">
              See our work first
            </Button>
          </div>
          <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary">
            Free · No commitment · Response within 1 business day
          </p>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
