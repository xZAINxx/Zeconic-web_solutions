"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-surface border-t border-border/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Animated glow orb — pulses slowly */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/8 blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full bg-accent/6 blur-[80px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Diagonal grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
      -45deg,
      var(--primary) 0px,
      var(--primary) 1px,
      transparent 1px,
      transparent 50px
    )`,
        }}
      />

      <SectionWrapper as="div" className="relative z-10 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto"
        >
          <span className="text-xs font-body tracking-[0.25em] text-primary uppercase">
            Let&apos;s build something great
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-textPrimary leading-tight">
            Ready to level up your
            <br />
            business online?
          </h2>

          <p className="font-body text-textSecondary text-base leading-relaxed max-w-lg">
            Book a free 30-minute discovery call. No commitment, no pressure —
            just a conversation about what you need.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Button variant="primary" href="/contact" size="lg">
              Book a free discovery call
            </Button>
            <Button variant="secondary" href="/portfolio" size="lg">
              See our work first
            </Button>
          </div>

          <p className="font-body text-xs text-textTertiary mt-2">
            Free consultation · No commitment · Response within 1 business day
          </p>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
