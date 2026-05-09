"use client";

import { useMagneticTilt } from "@/hooks/useMagneticTilt";
import type { Project } from "@/lib/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, transform, onMouseMove, onMouseLeave } = useMagneticTilt(5);
  const [imageFailed, setImageFailed] = useState(false);

  if (project.isPlaceholder) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: index * 0.08 }}
        viewport={{ once: true }}
      >
        <Link href="/contact">
          <div className="group flex h-full min-h-[320px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/[0.10] bg-surface/40 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-surface/60">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-primary/40 text-2xl text-primary/60 transition-all duration-300 group-hover:border-primary group-hover:text-primary">
              +
            </div>
            <h3 className="font-display text-xl font-semibold text-textSecondary transition-colors group-hover:text-textPrimary">
              Your business?
            </h3>
            <p className="max-w-[240px] text-[13.5px] leading-relaxed text-textTertiary">
              We&apos;re always taking on the next project. That could be you.
            </p>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              Get in touch →
            </span>
          </div>
        </Link>
      </motion.div>
    );
  }

  const showImage = Boolean(project.screenshotPath) && !imageFailed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform,
          transition: transform
            ? "none"
            : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
        className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-surface/60 backdrop-blur-sm transition-colors duration-300 hover:border-white/[0.14]"
      >
        {/* Aurora hover halo */}
        <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-magenta/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="border-b border-white/[0.05] bg-surfaceHigh/60">
          <div className="flex items-center gap-2 px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-magenta/50" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber/50" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary/50" />
            </div>
            <div className="mx-2 flex-1 truncate rounded bg-bgDeep px-2 py-0.5 font-mono text-[10px] text-textTertiary">
              {project.displayUrl}
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-background">
            {showImage && project.screenshotPath ? (
              <Image
                src={project.screenshotPath}
                alt={`${project.name} screenshot`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-[0.18em] text-textTertiary">
                Screenshot coming soon
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-lg font-semibold text-textPrimary">
              {project.name}
            </h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-primary transition-colors hover:text-textPrimary"
            >
              Visit ↗
            </a>
          </div>
          <p className="text-[13.5px] leading-relaxed text-textSecondary">
            {project.description}
          </p>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.06] bg-bgDeep/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-textTertiary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
