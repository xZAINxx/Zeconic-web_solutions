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

const trustItems = [
  "4 websites shipped",
  "React & Next.js",
  "US-based",
  "Claude API",
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
        scale: 0.6,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=300",
          scrub: true,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      {/* Layer 1 — Vanta Net background */}
      <div className="absolute inset-0 z-0">
        <VantaNet className="h-full w-full" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[30%] min-h-[140px] bg-gradient-to-t from-background to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute top-1/2 right-[2%] z-[4] hidden h-[50vw] max-h-[620px] w-[50vw] max-w-[620px] -translate-y-1/2 opacity-100 lg:block">
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

      <SectionWrapper className="relative z-10 w-full pt-32 pb-0">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-xl lg:max-w-none">
            <span className="mb-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-primaryGlow bg-primaryGlow px-3 py-1 font-body text-xs uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-primary" />
              <span className="inline-flex items-center gap-x-2">
                Web Development
                <span className="text-primary/50" aria-hidden>
                  ·
                </span>
                AI Chatbots
                <span className="text-primary/50" aria-hidden>
                  ·
                </span>
                Social Media
              </span>
            </span>

            <SplitTextReveal
              as="h1"
              className="font-display text-4xl font-bold leading-[1.08] text-textPrimary md:text-5xl lg:text-6xl"
              parts={[
                "Modern",
                "websites",
                "+",
                { text: "AI chatbots", className: "text-primary" },
                "for",
                "businesses",
                "that",
                "want",
                "to",
                "grow",
              ]}
            />

            <motion.p
              className="mt-6 max-w-xl font-body text-lg leading-relaxed text-textSecondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            >
              We build custom websites and AI-powered tools that help small
              businesses look professional, generate leads, and run smarter.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            >
              <Button
                variant="primary"
                href="/contact"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book a free discovery call
              </Button>
              <Button
                variant="secondary"
                href="/portfolio"
                size="lg"
                className="w-full sm:w-auto"
              >
                See our work
              </Button>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-body text-xs text-textSecondary/60"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            >
              {trustItems.map((item, i) => (
                <span key={item} className="flex items-center gap-1.5">
                  {i > 0 ? (
                    <span className="text-primary" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
          <div
            className="hidden min-h-[min(50vw,620px)] lg:block"
            aria-hidden
          />
        </div>
      </SectionWrapper>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-textTertiary md:flex">
        <span>Scroll</span>
        <div className="h-8 w-px animate-pulse bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
