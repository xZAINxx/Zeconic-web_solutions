"use client";

import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import VantaNet from "@/components/ui/VantaNet";
import { SplitTextReveal } from "@/components/ui/SplitTextReveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Suspense, useEffect, useRef } from "react";

const CyberGlobe = dynamic(() => import("@/components/3d/CyberGlobe"), {
  ssr: false,
});

const stats = [
  { value: "40+", label: "Sites shipped" },
  { value: "100%", label: "US-built" },
  { value: "<2wk", label: "Avg launch" },
  { value: "AI", label: "Native" },
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const hero = heroRef.current;
    const globe = globeRef.current;
    if (!hero || !globe) return;

    const ctx = gsap.context(() => {
      gsap.to(globe, {
        scale: 0.55,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=320",
          scrub: true,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-bgDeep"
    >
      {/* Layer 1 — Vanta Net background (preserved) */}
      <div className="absolute inset-0 z-0">
        <VantaNet className="h-full w-full" />
        {/* Aurora veil — soft cyan/violet/magenta wash over the net */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 20% 30%, rgba(0,229,255,0.18), transparent 55%), radial-gradient(ellipse at 80% 70%, rgba(255,79,216,0.14), transparent 55%), radial-gradient(ellipse at 60% 10%, rgba(123,97,255,0.16), transparent 55%)",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[35%] min-h-[160px] bg-gradient-to-t from-background to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
            backgroundSize: "96px 96px",
          }}
        />
      </div>

      {/* Layer 2 — CyberGlobe (preserved) */}
      <div className="pointer-events-none absolute top-1/2 right-[2%] z-[4] hidden h-[52vw] max-h-[680px] w-[52vw] max-w-[680px] -translate-y-1/2 lg:block">
        <div
          ref={globeRef}
          className="h-full w-full will-change-transform"
          style={{ transformOrigin: "center center" }}
        >
          <Suspense fallback={<div className="h-full w-full" />}>
            <CyberGlobe />
          </Suspense>
        </div>
      </div>

      <SectionWrapper className="relative z-10 w-full !pt-32 !pb-12 md:!pt-40">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            {/* Eyebrow chip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-textSecondary">
                v2026 · Available for new projects
              </span>
            </motion.div>

            <div className="mt-7">
              <SplitTextReveal
                as="h1"
                className="font-display text-[clamp(2.5rem,7vw,5.25rem)] font-bold leading-[0.98] tracking-tight text-textPrimary"
                parts={[
                  "Websites",
                  "&",
                  { text: "AI", className: "aurora-text" },
                  "for",
                  "businesses",
                  "that",
                  "ship.",
                ]}
              />
            </div>

            <motion.p
              className="mt-7 max-w-[36rem] text-[1.05rem] leading-relaxed text-textSecondary"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
            >
              We design and engineer custom websites and AI-powered tools for
              small businesses across the US — built on the same stack the
              fastest sites on the web run on.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap gap-3.5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05, ease: "easeOut" }}
            >
              <Button variant="aurora" href="/contact" size="lg">
                Start a project
                <span aria-hidden className="ml-1">→</span>
              </Button>
              <Button variant="secondary" href="/portfolio" size="lg">
                See our work
              </Button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              className="mt-14 grid max-w-xl grid-cols-4 divide-x divide-white/[0.06] border-t border-white/[0.06] pt-7"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.25, ease: "easeOut" }}
            >
              {stats.map((s) => (
                <div key={s.label} className="px-4 first:pl-0">
                  <div className="font-display text-2xl font-bold text-textPrimary md:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-textTertiary">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="hidden lg:col-span-5 lg:block" aria-hidden />
        </div>
      </SectionWrapper>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-textTertiary">
          Scroll
        </span>
        <div className="h-9 w-px animate-pulse bg-gradient-to-b from-primary via-accent to-transparent" />
      </div>
    </section>
  );
}
