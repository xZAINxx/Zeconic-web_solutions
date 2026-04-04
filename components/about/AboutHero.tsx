"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative bg-background pt-32 pb-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <SectionWrapper className="relative z-10 text-center !py-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-body tracking-[0.25em] text-primary uppercase">
            About us
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-textPrimary mt-3 leading-tight">
            Built by builders. For businesses.
          </h1>
          <p className="font-body text-textSecondary text-lg mt-5 max-w-xl mx-auto">
            We&apos;re the web and AI division of Zeconic LLC — a US-based team
            that helps small businesses compete online with custom websites and
            intelligent tools.
          </p>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
