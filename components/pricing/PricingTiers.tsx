"use client";

import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    tagline: "Get online fast",
    description:
      "Clean, professional web presence without the complexity. Built fast, ships in days.",
    includes: [
      "Single-page or landing page",
      "Mobile-first responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "Vercel deployment",
      "2 revision rounds",
    ],
    cta: "Request a quote",
    featured: false,
    accentColor: "#00E5FF",
    accentClass: "primary",
  },
  {
    name: "Growth",
    tagline: "Most popular",
    description:
      "A full multi-page website built to convert visitors into customers. Everything you need to compete online.",
    includes: [
      "Multi-page site (up to 6 pages)",
      "Custom design system",
      "SEO optimization",
      "Performance tuning",
      "Analytics integration",
      "CMS integration (optional)",
      "3 revision rounds",
      "30 days post-launch support",
    ],
    cta: "Request a quote",
    featured: true,
    accentColor: "#7B61FF",
    accentClass: "accent",
  },
  {
    name: "Pro",
    tagline: "Full-stack & AI",
    description:
      "The full package — custom site or app plus a custom-trained AI chatbot to automate customer interactions.",
    includes: [
      "Everything in Growth",
      "AI chatbot integration",
      "Custom-trained on your business",
      "Lead capture & booking flows",
      "Full-stack features (auth, DB)",
      "Monthly retainer available",
      "Priority support",
    ],
    cta: "Request a quote",
    featured: false,
    accentColor: "#FF4FD8",
    accentClass: "magenta",
  },
] as const;

type Tier = (typeof tiers)[number];

function TierCard({ tier, index }: { tier: Tier; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col rounded-2xl border backdrop-blur-sm ${
        tier.featured
          ? "scale-[1.02] border-white/[0.10] bg-surface/80"
          : "border-white/[0.06] bg-surface/50"
      }`}
    >
      {tier.featured && (
        <>
          {/* Aurora glow ring */}
          <div
            className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-100 blur-2xl"
            style={{
              background:
                "linear-gradient(120deg, rgba(0,229,255,0.40), rgba(123,97,255,0.40), rgba(255,79,216,0.30))",
            }}
            aria-hidden
          />
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span
              className="rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-textPrimary"
              style={{
                background:
                  "linear-gradient(120deg, #00E5FF, #7B61FF 45%, #FF4FD8)",
              }}
            >
              Most popular
            </span>
          </div>
        </>
      )}

      <div
        className="absolute inset-x-0 top-0 h-px rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${tier.accentColor}, transparent)`,
        }}
      />

      <div className="flex flex-1 flex-col gap-6 p-8">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-2xl font-bold text-textPrimary">
              {tier.name}
            </h3>
            <span
              className="rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em]"
              style={{
                color: tier.accentColor,
                background: `${tier.accentColor}15`,
                border: `1px solid ${tier.accentColor}40`,
              }}
            >
              {tier.tagline}
            </span>
          </div>
          <p className="mt-3 text-[14px] leading-relaxed text-textSecondary">
            {tier.description}
          </p>
        </div>

        <div className="border-y border-white/[0.06] py-4">
          <p className="font-display text-[2rem] font-bold leading-none text-textPrimary">
            Custom quote
          </p>
          <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary">
            Priced to your scope
          </p>
        </div>

        <ul className="flex flex-1 flex-col gap-2.5">
          {tier.includes.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-textSecondary"
            >
              <span
                style={{ color: tier.accentColor }}
                className="mt-0.5 shrink-0 text-base leading-none"
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <Button
          variant={tier.featured ? "aurora" : "secondary"}
          href="/contact"
          size="md"
          className="mt-auto w-full justify-center"
        >
          {tier.cta} →
        </Button>
      </div>
    </motion.div>
  );
}

export default function PricingTiers() {
  return (
    <section className="relative">
      <SectionWrapper>
        <div className="mb-14 text-center">
          <span className="eyebrow text-textTertiary">
            <span className="text-accent">●</span>&nbsp; Choose your plan
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight text-textPrimary">
            What&apos;s right{" "}
            <span className="aurora-text">for your business?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-textSecondary">
            Every project starts with a free discovery call. We&apos;ll
            recommend the right fit after understanding your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 py-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-textTertiary">
          Monthly retainers available · Hosting · Updates · Chatbot tuning
        </p>
      </SectionWrapper>
    </section>
  );
}
