"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ACCENT = "#00E5FF";
const SURFACE = "#0f0f0f";
const BORDER = "#2a2a2a";

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

type FAQCardProps = {
  item: Faq;
  index: number;
  isOpen: boolean;
  openIndex: number | null;
  totalCards: number;
  onToggle: () => void;
};

function FAQCard({ item, index, isOpen, openIndex, totalCards, onToggle }: FAQCardProps) {
  const isBelowOpen = openIndex !== null && index > openIndex;
  const distanceFromOpen = openIndex !== null ? Math.abs(index - openIndex) : index;

  const tiltAngle = isBelowOpen ? Math.min(42 + distanceFromOpen * 3, 55) : 0;
  const zOffset = isBelowOpen ? -distanceFromOpen * 18 : 0;
  const yOffset = isBelowOpen ? distanceFromOpen * -6 : 0;
  const scaleVal = isBelowOpen ? Math.max(1 - distanceFromOpen * 0.03, 0.88) : 1;
  const opacityVal = isBelowOpen ? Math.max(1 - distanceFromOpen * 0.15, 0.3) : 1;

  return (
    <motion.div
      layout
      role="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      style={{
        transformPerspective: 1200,
        transformOrigin: "center top",
        zIndex: isOpen ? 50 : totalCards - index,
        cursor: "pointer",
        userSelect: "none",
      }}
      animate={{
        rotateX: isOpen ? 0 : tiltAngle,
        translateZ: zOffset,
        translateY: yOffset,
        scale: scaleVal,
        opacity: opacityVal,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.8 }}
      className="relative group outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-2xl"
    >
      <div className="relative" style={{ transformStyle: "preserve-3d" }}>
        {/* Depth shadow — pseudo-3D base under the card */}
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-2xl"
          style={{
            inset: 0,
            transform: "translateZ(-8px) translateY(4px)",
            background: "rgba(0,229,255,0.03)",
            borderRadius: "inherit",
            filter: "blur(4px)",
            zIndex: 0,
          }}
        />

        <motion.div
          layout
          className="relative z-[1] rounded-2xl overflow-hidden border"
          style={{
            background: isOpen
              ? `linear-gradient(135deg, ${ACCENT}12, ${ACCENT}06, ${SURFACE})`
              : SURFACE,
            borderColor: isOpen ? `${ACCENT}40` : BORDER,
            boxShadow: isOpen
              ? `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${ACCENT}14, inset 0 1px 0 rgba(255,255,255,0.06)`
              : "0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
            animate={{
              background: isOpen
                ? `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`
                : `linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)`,
            }}
          />

          <div className="flex items-center gap-4 px-6 py-5 pointer-events-none">
            <div className="flex-1 min-w-0">
              <h3 className="font-body text-[15px] font-semibold text-textPrimary leading-snug pr-2">
                {item.q}
              </h3>
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: isOpen ? `${ACCENT}20` : "rgba(255,255,255,0.04)",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isOpen ? ACCENT : "rgba(240,240,240,0.4)"}
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </motion.div>
          </div>

          <AnimatePresence mode="sync">
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, rotateX: -15 }}
                animate={{ height: "auto", opacity: 1, rotateX: 0 }}
                exit={{ height: 0, opacity: 0, rotateX: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                style={{
                  transformOrigin: "top center",
                  transformStyle: "preserve-3d",
                  overflow: "hidden",
                }}
              >
                <div className="px-6 pb-6 pt-0 pointer-events-none">
                  <div
                    className="h-px w-full mb-4"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${ACCENT}30, transparent)`,
                    }}
                  />
                  <p className="font-body text-sm leading-relaxed text-textSecondary max-w-2xl">
                    {item.a}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {isBelowOpen && (
        <div
          className="absolute inset-x-2 -bottom-1 h-3 rounded-b-xl pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, ${ACCENT}14, transparent)`,
            filter: "blur(4px)",
          }}
        />
      )}
    </motion.div>
  );
}

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface border-t border-border/30 py-20">
      <SectionWrapper className="max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-xs font-body tracking-[0.25em] text-primary uppercase">FAQ</span>
          <h2 className="font-display text-4xl font-bold text-textPrimary mt-3">Common questions</h2>
        </div>

        <motion.div
          className="flex flex-col gap-3"
          style={{
            perspective: "1000px",
            perspectiveOrigin: "center top",
            transformStyle: "preserve-3d",
          }}
        >
          {faqs.map((item, index) => (
            <FAQCard
              key={item.q}
              item={item}
              index={index}
              isOpen={openIndex === index}
              openIndex={openIndex}
              totalCards={faqs.length}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
