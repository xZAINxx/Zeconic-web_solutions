"use client";

import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    tagline: "Get online fast",
    description:
      "Perfect for businesses that need a clean, professional web presence without the complexity.",
    includes: [
      "Single-page or landing page",
      "Mobile-first responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "Vercel deployment",
      "2 revision rounds",
    ],
    cta: "Get a quote",
    featured: false,
    accentColor: "#00E5FF",
  },
  {
    name: "Growth",
    tagline: "Most popular",
    description:
      "A full multi-page website built to convert visitors into customers, with everything you need to compete online.",
    includes: [
      "Multi-page website (up to 6 pages)",
      "Custom design system",
      "SEO optimization",
      "Performance optimization",
      "Analytics integration",
      "CMS integration (optional)",
      "3 revision rounds",
      "30 days post-launch support",
    ],
    cta: "Get a quote",
    featured: true,
    accentColor: "#00E5FF",
  },
  {
    name: "Pro",
    tagline: "Full-stack & AI",
    description:
      "For businesses that want the full package — custom web app or site plus an AI chatbot to automate customer interactions.",
    includes: [
      "Everything in Growth",
      "AI chatbot integration",
      "Custom-trained on your business",
      "Lead capture & appointment flows",
      "Full-stack features (auth, DB)",
      "Monthly retainer available",
      "Priority support",
    ],
    cta: "Get a quote",
    featured: false,
    accentColor: "#7B61FF",
  },
] as const;

type Tier = (typeof tiers)[number];

function TierCard({ tier, index }: { tier: Tier; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl border flex flex-col ${
        tier.featured
          ? "border-primary/60 bg-surface scale-[1.02] shadow-[0_0_40px_rgba(0,229,255,0.08)]"
          : "border-border/40 bg-surface/60"
      }`}
    >
      {tier.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-background text-[10px] font-body font-bold px-3 py-1 rounded-full tracking-wider uppercase">
            Most popular
          </span>
        </div>
      )}

      <div
        className="absolute top-0 inset-x-0 h-px rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg, transparent, ${tier.accentColor}80, transparent)`,
        }}
      />

      <div className="p-8 flex flex-col gap-6 flex-1">
        <div>
          <div className="flex items-center justify-between mb-1 gap-2 flex-wrap">
            <h3 className="font-display text-2xl font-bold text-textPrimary">{tier.name}</h3>
            <span
              className="text-xs font-body px-2 py-1 rounded-full"
              style={{
                color: tier.accentColor,
                background: `${tier.accentColor}15`,
                border: `1px solid ${tier.accentColor}30`,
              }}
            >
              {tier.tagline}
            </span>
          </div>
          <p className="font-body text-sm text-textSecondary mt-3 leading-relaxed">{tier.description}</p>
        </div>

        <div className="py-4 border-y border-border/30">
          <p className="font-display text-3xl font-bold text-textPrimary">Custom quote</p>
          <p className="font-body text-xs text-textTertiary mt-1">Priced based on your project scope</p>
        </div>

        <ul className="flex flex-col gap-2.5 flex-1">
          {tier.includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm font-body text-textSecondary">
              <span style={{ color: tier.accentColor }} className="mt-0.5 text-base leading-none shrink-0">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <Button
          variant={tier.featured ? "primary" : "secondary"}
          href="/contact"
          size="md"
          className="w-full justify-center mt-auto"
        >
          {tier.cta} →
        </Button>
      </div>
    </motion.div>
  );
}

export default function PricingTiers() {
  return (
    <section className="bg-background py-20">
      <SectionWrapper>
        <div className="text-center mb-12">
          <span className="text-xs font-body tracking-[0.25em] text-primary uppercase">Choose your plan</span>
          <h2 className="font-display text-4xl font-bold text-textPrimary mt-3">
            What&apos;s right for your business?
          </h2>
          <p className="font-body text-textSecondary mt-3 max-w-lg mx-auto">
            All projects start with a free discovery call. We&apos;ll recommend the right fit after understanding
            your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start py-6">
          {tiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        <p className="text-center font-body text-xs text-textTertiary mt-8">
          Monthly retainers available for ongoing support, hosting, and updates. Ask us about pricing.
        </p>
      </SectionWrapper>
    </section>
  );
}
