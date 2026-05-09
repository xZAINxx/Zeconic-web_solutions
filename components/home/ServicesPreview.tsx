"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

type Card = {
  number: string;
  title: string;
  blurb: string;
  href: string;
  accent: string;
  points: string[];
};

const cards: Card[] = [
  {
    number: "01",
    title: "Web Development",
    blurb:
      "Custom React + Next.js websites engineered for speed, SEO, and conversions. No templates, no WordPress.",
    href: "/services#web-development",
    accent: "from-primary/30 via-primary/10 to-transparent",
    points: ["Business sites", "Landing pages", "Web apps"],
  },
  {
    number: "02",
    title: "AI Chatbots",
    blurb:
      "Custom-trained chatbots embedded into your site that capture leads, answer FAQs, and book appointments 24/7.",
    href: "/services#ai-chatbots",
    accent: "from-accent/30 via-accent/10 to-transparent",
    points: ["Lead capture", "FAQ automation", "Booking"],
  },
  {
    number: "03",
    title: "Social Media",
    blurb:
      "Profile setup, brand consistency, and a launch content kit so your social presence shows up sharp on day one.",
    href: "/services#social-media",
    accent: "from-magenta/30 via-magenta/10 to-transparent",
    points: ["Profiles", "Brand kit", "Launch posts"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function ServicesPreview() {
  return (
    <SectionWrapper className="relative">
      <div className="mb-14 flex flex-col items-start gap-3">
        <span className="eyebrow text-textTertiary">
          <span className="text-primary">●</span>&nbsp; What we do
        </span>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-textPrimary">
          Three services. <span className="aurora-text">One studio.</span>
        </h2>
        <p className="max-w-2xl text-[15px] leading-relaxed text-textSecondary">
          Every project ships fast, looks designed, and is built to grow with
          you. Pick one — or stack all three.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 gap-5 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.12 }}
      >
        {cards.map((c) => (
          <motion.div key={c.number} variants={cardVariants}>
            <Link
              href={c.href}
              className="group relative block h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-surface/60 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-surface/80"
            >
              <div
                className={`pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${c.accent}`}
              />
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-[0.18em] text-textTertiary">
                  {c.number} / 03
                </span>
                <span className="text-textTertiary transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                  →
                </span>
              </div>
              <h3 className="mt-10 font-display text-2xl font-semibold text-textPrimary">
                {c.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-textSecondary">
                {c.blurb}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {c.points.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.16em] text-textSecondary"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
