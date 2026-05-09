"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const numbers = [
  { value: "4+", label: "Live sites in production" },
  { value: "<2s", label: "Average load time" },
  { value: "100%", label: "Mobile responsive" },
  { value: "24/7", label: "AI handles inquiries" },
];

export function TrustStrip() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-90 mix-blend-screen"
        aria-hidden
      >
        <div
          className="absolute -inset-x-10 -top-20 h-72 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,229,255,0.30) 0%, rgba(123,97,255,0.20) 40%, rgba(255,79,216,0.16) 70%, transparent 100%)",
          }}
        />
      </div>
      <div className="hairline" />
      <SectionWrapper className="relative !py-20">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-x-8">
          {numbers.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-start"
            >
              <div className="font-display text-4xl font-bold tracking-tight text-textPrimary md:text-5xl">
                {n.value}
              </div>
              <div className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary">
                {n.label}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
      <div className="hairline" />
    </section>
  );
}
