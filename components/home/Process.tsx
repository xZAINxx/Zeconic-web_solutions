"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Discovery",
    blurb:
      "We talk through your business, your audience, and what success looks like. Free 30-minute call, zero pressure.",
    duration: "Day 1",
  },
  {
    number: "02",
    title: "Design",
    blurb:
      "You see real mockups before any code is written. Aurora-grade typography, custom illustration, motion baked in.",
    duration: "Days 2–4",
  },
  {
    number: "03",
    title: "Build",
    blurb:
      "We engineer with React + Next.js — the stack that powers the fastest sites on the internet. You watch the staging URL update in real time.",
    duration: "Days 5–10",
  },
  {
    number: "04",
    title: "Launch",
    blurb:
      "We deploy to Vercel, hand you the keys, and stay on standby for tweaks. Your site goes live, traffic starts flowing.",
    duration: "Day 12",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper className="relative">
      <div className="mb-16 flex flex-col items-start gap-3">
        <span className="eyebrow text-textTertiary">
          <span className="text-accent">●</span>&nbsp; How we work
        </span>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-textPrimary">
          From call to launch in{" "}
          <span className="aurora-text">about two weeks.</span>
        </h2>
        <p className="max-w-2xl text-[15px] leading-relaxed text-textSecondary">
          A tight, opinionated process. No three-month timelines. No surprise
          invoices.
        </p>
      </div>

      <div ref={ref} className="relative pl-12 md:pl-16">
        <div className="absolute left-4 top-0 h-full w-px bg-white/[0.06] md:left-6" />
        <motion.div
          className="absolute left-4 top-0 w-px origin-top bg-gradient-to-b from-primary via-accent to-magenta md:left-6"
          style={{ height: lineHeight }}
        />

        <div className="space-y-14 md:space-y-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative"
            >
              <div className="absolute -left-12 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.10] bg-surface md:-left-16 md:h-10 md:w-10">
                <div className="h-1.5 w-1.5 rounded-full bg-primary md:h-2 md:w-2" />
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                    {step.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-textTertiary">
                    {step.duration}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-textPrimary md:text-3xl">
                  {step.title}
                </h3>
                <p className="max-w-2xl text-[15px] leading-relaxed text-textSecondary">
                  {step.blurb}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
