"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const valueCards = [
  {
    title: "Custom-built, not templated",
    desc: "Every project starts from scratch — designed around your business, your customers, and what you actually need.",
    accent: "primary",
  },
  {
    title: "Results-focused, not just pretty",
    desc: "We care about conversions, leads, and business outcomes. Aesthetics serve performance, not the other way around.",
    accent: "accent",
  },
  {
    title: "A real partner, not just a vendor",
    desc: "We stay involved after launch and treat your business growth as our own success metric.",
    accent: "magenta",
  },
] as const;

const businessTypes = [
  { label: "Contractors & builders" },
  { label: "HVAC & plumbing" },
  { label: "Salons & spas" },
  { label: "Restaurants & food" },
  { label: "Real estate agents" },
  { label: "Any local service business" },
];

const techStack = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "Vercel",
  "Supabase",
  "Anthropic API",
];

const accentMap = {
  primary: "text-primary border-primary/30",
  accent: "text-accent border-accent/30",
  magenta: "text-magenta border-magenta/30",
} as const;

export default function AboutContent() {
  return (
    <>
      {/* Block 1 — Brand story */}
      <section className="relative overflow-hidden">
        <SectionWrapper>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="eyebrow text-textTertiary">
                <span className="text-primary">●</span>&nbsp; Our approach
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.04] tracking-tight text-textPrimary">
                No agencies.
                <br />
                No templates.
                <br />
                <span className="aurora-text">No fluff.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-textSecondary">
                Zeconic Web Solutions is the web and AI division of Zeconic LLC.
                We work with small businesses across the US to build modern
                websites and AI-powered tools that actually move the needle.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-textSecondary">
                No bloated agency markups. No cookie-cutter templates. Just
                custom work, clear communication, and results you can measure.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-3.5 lg:col-span-7"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {valueCards.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-5 rounded-2xl border border-white/[0.06] bg-surface/50 p-6 backdrop-blur-sm"
                >
                  <div
                    className={`w-1 shrink-0 rounded-full self-stretch ${
                      v.accent === "primary"
                        ? "bg-primary"
                        : v.accent === "accent"
                          ? "bg-accent"
                          : "bg-magenta"
                    }`}
                  />
                  <div>
                    <h4 className="font-display text-base font-semibold text-textPrimary">
                      {v.title}
                    </h4>
                    <p className="mt-2 text-[14px] leading-relaxed text-textSecondary">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SectionWrapper>
      </section>

      {/* Block 2 — Who we serve */}
      <section className="relative overflow-hidden border-t border-white/[0.05]">
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen opacity-40"
          aria-hidden
        >
          <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-magenta/20 blur-3xl" />
        </div>
        <SectionWrapper>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow text-textTertiary">
              <span className="text-magenta">●</span>&nbsp; Who we work with
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.05] tracking-tight text-textPrimary">
              Small businesses{" "}
              <span className="aurora-text">serious about growth.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-textSecondary">
              Service businesses, contractors, and local companies that want to
              compete online without the enterprise price tag.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {businessTypes.map((type, i) => (
              <motion.div
                key={type.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/[0.07] bg-surface/40 p-5 text-center backdrop-blur-sm transition-colors hover:border-white/[0.14]"
              >
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-textTertiary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-[14px] text-textSecondary">
                  {type.label}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Block 3 — Stack */}
      <section className="relative border-t border-white/[0.05]">
        <SectionWrapper className="!py-20">
          <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="md:max-w-md">
              <span className="eyebrow text-textTertiary">
                <span className="text-primary">●</span>&nbsp; How we build
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-textPrimary md:text-3xl">
                Modern stack.{" "}
                <span className="aurora-text">Practical results.</span>
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-textSecondary">
                We use the same technology that powers the world&apos;s fastest
                sites — so yours is fast, secure, and easy to scale.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
              {techStack.map((tech, i) => {
                const accent =
                  i % 3 === 0 ? "primary" : i % 3 === 1 ? "accent" : "magenta";
                return (
                  <span
                    key={tech}
                    className={`rounded-full border bg-bgDeep/40 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] backdrop-blur-sm ${accentMap[accent]}`}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}
