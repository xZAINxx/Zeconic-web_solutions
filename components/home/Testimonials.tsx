"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { testimonials } from "@/lib/testimonials";

const AUTO_ROTATE_MS = 7000;

const accentRing = {
  primary: "from-primary/40 via-primary/10 to-transparent",
  accent: "from-accent/40 via-accent/10 to-transparent",
  magenta: "from-magenta/40 via-magenta/10 to-transparent",
} as const;

const accentText = {
  primary: "text-primary",
  accent: "text-accent",
  magenta: "text-magenta",
} as const;

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-amber"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden border-t border-white/[0.05]">
      {/* Aurora glow accent */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-screen opacity-50"
        aria-hidden
      >
        <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-magenta/25 blur-3xl" />
      </div>

      <SectionWrapper className="relative">
        <div className="mb-14 flex flex-col items-start gap-3">
          <span className="eyebrow text-textTertiary">
            <span className="text-magenta">●</span>&nbsp; What clients say
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-textPrimary">
            Don&apos;t take{" "}
            <span className="aurora-text">our word for it.</span>
          </h2>
        </div>

        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="relative">
            {/* Aurora halo behind active card */}
            <div
              className={`pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br opacity-100 blur-2xl transition-all duration-700 ${accentRing[t.accent]}`}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-surface/60 p-8 backdrop-blur-md md:p-12"
              >
                {/* Top accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      t.accent === "primary"
                        ? "linear-gradient(90deg, transparent, rgba(0,229,255,0.6), transparent)"
                        : t.accent === "accent"
                          ? "linear-gradient(90deg, transparent, rgba(123,97,255,0.6), transparent)"
                          : "linear-gradient(90deg, transparent, rgba(255,79,216,0.6), transparent)",
                  }}
                />

                <div className="flex items-center justify-between gap-4">
                  <Stars />
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary">
                    {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                </div>

                <blockquote className="mt-7">
                  <p className="font-display text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-[1.4] tracking-tight text-textPrimary">
                    <span className={`mr-1 ${accentText[t.accent]}`}>“</span>
                    {t.quote}
                    <span className={`ml-1 ${accentText[t.accent]}`}>”</span>
                  </p>
                </blockquote>

                <div className="mt-8 flex items-center gap-4 border-t border-white/[0.06] pt-6">
                  {/* Initial avatar */}
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.10] font-display text-lg font-semibold text-textPrimary"
                    style={{
                      background:
                        t.accent === "primary"
                          ? "linear-gradient(135deg, rgba(0,229,255,0.25), rgba(0,229,255,0.05))"
                          : t.accent === "accent"
                            ? "linear-gradient(135deg, rgba(123,97,255,0.25), rgba(123,97,255,0.05))"
                            : "linear-gradient(135deg, rgba(255,79,216,0.25), rgba(255,79,216,0.05))",
                    }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-display text-[15px] font-semibold text-textPrimary">
                      {t.name}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-textTertiary">
                      {t.role} · {t.business}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-7 flex items-center justify-between">
            <div className="flex gap-2" role="tablist" aria-label="Select testimonial">
              {testimonials.map((tt, i) => (
                <button
                  key={tt.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group relative h-1.5 w-10 overflow-hidden rounded-full bg-white/[0.06] transition-colors hover:bg-white/[0.12]"
                  aria-label={`Testimonial ${i + 1}`}
                  aria-selected={i === index}
                  role="tab"
                >
                  <span
                    className="absolute inset-y-0 left-0 transition-all duration-300"
                    style={{
                      width: i === index ? "100%" : "0%",
                      background:
                        "linear-gradient(90deg, #00E5FF, #7B61FF 50%, #FF4FD8)",
                    }}
                  />
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-surface/40 text-textSecondary backdrop-blur-sm transition-all hover:border-white/[0.18] hover:text-textPrimary"
                aria-label="Previous testimonial"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-surface/40 text-textSecondary backdrop-blur-sm transition-all hover:border-white/[0.18] hover:text-textPrimary"
                aria-label="Next testimonial"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
