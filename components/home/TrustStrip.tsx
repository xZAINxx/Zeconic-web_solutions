"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Websites shipped", sublabel: "across the US" },
  { value: "3", label: "Core services", sublabel: "web · AI · social" },
  { value: "100%", label: "US-based", sublabel: "Frisco, Texas" },
  { value: "24/7", label: "AI support", sublabel: "always on for your customers" },
];

type StatBlockProps = {
  value: string;
  label: string;
  sublabel: string;
  showDivider: boolean;
};

function StatBlock({ value, label, sublabel, showDivider }: StatBlockProps) {
  return (
    <div
      className={`flex flex-col items-center text-center gap-1 ${
        showDivider ? "md:border-l md:border-border/30" : ""
      }`}
    >
      <motion.span
        className="font-display text-4xl md:text-5xl font-bold text-primary"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        {value}
      </motion.span>
      <span className="font-body text-sm text-textPrimary font-medium">
        {label}
      </span>
      <span className="font-body text-xs text-textTertiary">{sublabel}</span>
    </div>
  );
}

export function TrustStrip() {
  return (
    <section className="relative bg-background border-y border-border/30 py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-32 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-32 bg-accent/5 blur-3xl rounded-full" />
      </div>

      <SectionWrapper as="div" className="relative z-10 !py-0">
        <p className="text-center font-body text-sm text-textSecondary mb-10">
          Trusted by small businesses across the US to build their online
          presence
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <StatBlock key={stat.label} {...stat} showDivider={i > 0} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
