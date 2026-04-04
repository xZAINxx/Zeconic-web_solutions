"use client";

import { motion } from "framer-motion";

export type SplitTextPart = string | { text: string; className?: string };

export type SplitTextRevealProps = {
  parts: SplitTextPart[];
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  as?: "h1" | "h2" | "div" | "p";
};

export function SplitTextReveal({
  parts,
  className = "",
  staggerDelay = 0.06,
  delayChildren = 0,
  as: Tag = "h1",
}: SplitTextRevealProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  const childVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        mass: 0.8,
      },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        className="inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 md:gap-x-3.5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {parts.map((part, index) => (
          <span
            key={`mask-${index}`}
            className="inline-flex overflow-hidden pb-[0.08em] [perspective:1000px]"
          >
            <motion.span variants={childVariants} className="inline-block">
              {typeof part === "string" ? (
                part
              ) : (
                <span className={part.className}>{part.text}</span>
              )}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
