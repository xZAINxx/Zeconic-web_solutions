"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const AuroraMesh = dynamic(() => import("@/components/3d/AuroraMesh"), {
  ssr: false,
});
const PrismaticBeams = dynamic(
  () => import("@/components/3d/PrismaticBeams"),
  { ssr: false }
);

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  blurb?: string;
  variant?: "aurora" | "beams";
  accentDot?: "primary" | "accent" | "magenta";
};

const dotClass = {
  primary: "text-primary",
  accent: "text-accent",
  magenta: "text-magenta",
} as const;

export function PageHero({
  eyebrow,
  title,
  blurb,
  variant = "aurora",
  accentDot = "primary",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-bgDeep">
      {/* Ambient 3D layer */}
      <div className="absolute inset-0">
        {variant === "aurora" ? (
          <AuroraMesh intensity="subtle" />
        ) : (
          <PrismaticBeams parallax={false} />
        )}
      </div>

      <SectionWrapper className="relative z-10 !pt-40 !pb-24 md:!pt-48 md:!pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-4xl flex-col gap-5 text-center"
        >
          <span className="eyebrow mx-auto text-textTertiary">
            <span className={dotClass[accentDot]}>●</span>&nbsp; {eyebrow}
          </span>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.02] tracking-tight text-textPrimary">
            {title}
          </h1>
          {blurb ? (
            <p className="mx-auto max-w-2xl text-[16px] leading-relaxed text-textSecondary">
              {blurb}
            </p>
          ) : null}
        </motion.div>
      </SectionWrapper>
      <div className="hairline" />
    </section>
  );
}
