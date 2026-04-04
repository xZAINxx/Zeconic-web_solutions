"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

const valueCards = [
  {
    title: "Custom-built, not templated",
    desc: "Every project starts from scratch, designed around your business and your customers.",
  },
  {
    title: "Results-focused, not just pretty",
    desc: "We care about conversions, leads, and business outcomes — not just how it looks.",
  },
  {
    title: "A real partner, not just a vendor",
    desc: "We stay involved after launch and treat your business growth as our own success metric.",
  },
] as const;

const businessTypes = [
  { icon: "🏗️", label: "Contractors & builders" },
  { icon: "❄️", label: "HVAC & plumbing" },
  { icon: "✂️", label: "Salons & spas" },
  { icon: "🍽️", label: "Restaurants & food" },
  { icon: "🏠", label: "Real estate agents" },
  { icon: "⚡", label: "Any local service business" },
] as const;

const techStack = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "Supabase",
  "AI APIs",
] as const;

export default function AboutContent() {
  return (
    <>
      {/* Block 1 — Brand story */}
      <section className="bg-surface py-20">
        <SectionWrapper className="!py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-textPrimary leading-tight">
                No agencies.
                <br />
                No templates.
                <br />
                No fluff.
              </h2>
              <p className="font-body text-textSecondary mt-6 leading-relaxed">
                Zeconic Web Solutions is the web and AI division of Zeconic LLC.
                We work with small businesses across the US to build modern
                websites and AI-powered tools that actually move the needle.
              </p>
              <p className="font-body text-textSecondary mt-4 leading-relaxed">
                No bloated agency markups. No cookie-cutter templates. Just
                custom work, clear communication, and results you can measure.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4"
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
                  className="rounded-xl border border-border/40 bg-surfaceHigh p-5 flex gap-4"
                >
                  <div className="w-1 rounded-full bg-primary shrink-0 self-stretch" />
                  <div>
                    <h4 className="font-display text-sm font-semibold text-textPrimary">
                      {v.title}
                    </h4>
                    <p className="font-body text-xs text-textSecondary mt-1 leading-relaxed">
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
      <section className="bg-background py-20 border-t border-border/30">
        <SectionWrapper className="!py-0">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-body tracking-[0.25em] text-primary uppercase">
              Who we work with
            </span>
            <h2 className="font-display text-3xl font-bold text-textPrimary mt-3">
              Small businesses that are serious about growth
            </h2>
            <p className="font-body text-textSecondary mt-4">
              We work with service businesses, contractors, and local companies
              across the US who want to compete online without the enterprise
              price tag.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {businessTypes.map((type, i) => (
              <motion.div
                key={type.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border/40 bg-surface p-5 flex flex-col items-center text-center gap-2"
              >
                <span className="text-2xl">{type.icon}</span>
                <span className="font-body text-sm text-textSecondary">
                  {type.label}
                </span>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Block 3 — Stack / approach */}
      <section className="bg-surface py-16 border-t border-border/30">
        <SectionWrapper className="!py-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div>
              <span className="text-xs font-body tracking-[0.25em] text-primary uppercase">
                How we build
              </span>
              <h3 className="font-display text-2xl font-bold text-textPrimary mt-2">
                Modern tech, practical results
              </h3>
              <p className="font-body text-textSecondary text-sm mt-3 max-w-md leading-relaxed">
                We use the same technology stack as the world&apos;s fastest
                websites — React, Next.js, and Tailwind CSS — so your site is
                fast, secure, and easy to scale.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 max-w-xs justify-center md:justify-end">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-body px-3 py-1.5 rounded-full border border-primary/30 text-primary/80 bg-primary/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}
