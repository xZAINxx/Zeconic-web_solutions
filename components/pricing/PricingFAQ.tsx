"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "How long does a website take to build?",
    a: "Most business websites take 2–4 weeks from kickoff to launch. More complex projects or full-stack apps may take 6–8 weeks. We'll give you a realistic timeline in your proposal.",
  },
  {
    q: "Do I need to pay for hosting separately?",
    a: "We deploy to Vercel, which has a generous free tier that covers most small business sites. If your project needs a paid plan, we'll let you know upfront. Domain registration is separate.",
  },
  {
    q: "Can I update my website myself after it's live?",
    a: "Yes — if you want that ability, we can integrate a CMS (like Sanity or Contentful) so you can edit text, images, and content without touching code. We'll train you on how to use it.",
  },
  {
    q: "What's the difference between the one-time fee and a retainer?",
    a: "The one-time fee covers your build and launch. A monthly retainer covers ongoing updates, hosting management, performance monitoring, and chatbot tuning. Retainers are optional.",
  },
  {
    q: "Do you work with businesses outside of Texas?",
    a: "Yes — we work with small businesses across the entire US. Everything is handled remotely via video calls, email, and shared tools. Location is never a barrier.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just a discovery call. We'll ask about your business, goals, and budget. From there we handle everything — design, development, copy guidance, and launch.",
  },
];

function FAQRow({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: Faq;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`group overflow-hidden rounded-xl border backdrop-blur-sm transition-colors duration-300 ${
        isOpen
          ? "border-white/[0.14] bg-surface/80"
          : "border-white/[0.06] bg-surface/40 hover:border-white/[0.10]"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
      >
        <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-display text-[15px] font-medium text-textPrimary">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
          style={{
            background: isOpen
              ? "linear-gradient(120deg, #00E5FF22, #7B61FF22, #FF4FD822)"
              : "rgba(255,255,255,0.04)",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isOpen ? "#00E5FF" : "rgba(245,247,250,0.4)"}
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <p className="text-[14px] leading-relaxed text-textSecondary">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative border-t border-white/[0.05]">
      <SectionWrapper className="max-w-3xl">
        <div className="mb-12 text-center">
          <span className="eyebrow text-textTertiary">
            <span className="text-magenta">●</span>&nbsp; FAQ
          </span>
          <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,2.75rem)] font-bold leading-[1.08] tracking-tight text-textPrimary">
            Common <span className="aurora-text">questions.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((item, index) => (
            <FAQRow
              key={item.q}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
