"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedProject() {
  return (
    <section className="bg-surface border-y border-border/30 py-20">
      <SectionWrapper as="div" className="!py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <span className="text-xs font-body tracking-[0.25em] text-primary uppercase">
              Featured project
            </span>
            <h2 className="font-display text-4xl font-bold text-textPrimary leading-tight">
              Zeconic.com
            </h2>
            <p className="font-body text-textSecondary text-base leading-relaxed">
              Our own home base — built from scratch with React, Next.js, and
              Tailwind CSS. Every interaction, animation, and detail was crafted
              to demonstrate what we build for clients.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "Tailwind CSS",
                "Framer Motion",
                "Three.js",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-body px-3 py-1 rounded-full border border-primary/30 text-primary/80 bg-primary/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              <a
                href="https://zeconic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-body text-primary hover:underline underline-offset-4"
              >
                Visit site →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl border border-border/60 bg-surfaceHigh overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-surface">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-3 bg-background rounded-md px-3 py-1 text-xs font-body text-textTertiary">
                  zeconic.com
                </div>
              </div>
              <div className="aspect-[16/10] relative bg-background overflow-hidden">
                <Image
                  src="/screenshots/zeconic.png"
                  alt="Zeconic.com homepage screenshot"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                />
              </div>
            </div>

            <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-2xl -z-10 pointer-events-none" />
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}
