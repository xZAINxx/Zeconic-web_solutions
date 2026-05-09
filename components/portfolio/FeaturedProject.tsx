"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

const tags = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "Vanta",
];

export default function FeaturedProject() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft aurora wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
        aria-hidden
      >
        <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <SectionWrapper className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="eyebrow text-textTertiary">
              <span className="text-primary">●</span>&nbsp; Featured · Studio
              site
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight text-textPrimary">
              Zeconic<span className="text-primary">.</span>com
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-textSecondary">
              Our home base — built from scratch with React, Next.js, Tailwind,
              Framer Motion, and Three.js. Every interaction, animation, and
              detail is a working demo of what we ship for clients.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/25 bg-primary/[0.04] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-primary/90 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-9">
              <Button
                variant="aurora"
                href="https://zeconic.com"
                size="md"
              >
                Visit zeconic.com →
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="relative lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surfaceHigh shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2 border-b border-white/[0.06] bg-surface px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-magenta/60" />
                  <div className="h-3 w-3 rounded-full bg-amber/60" />
                  <div className="h-3 w-3 rounded-full bg-primary/60" />
                </div>
                <div className="mx-3 flex-1 rounded-md bg-bgDeep px-3 py-1 font-mono text-xs text-textTertiary">
                  zeconic.com
                </div>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-background">
                <Image
                  src="/screenshots/zeconic.png"
                  alt="Zeconic.com homepage screenshot"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  priority
                />
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 via-accent/10 to-magenta/15 blur-3xl" />
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}
