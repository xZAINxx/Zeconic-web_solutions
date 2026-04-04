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
  const { ref, transform, onMouseMove, onMouseLeave } = useMagneticTilt(6);
  const [imageFailed, setImageFailed] = useState(false);

  if (project.isPlaceholder) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Link href="/contact">
          <div className="group rounded-2xl border border-dashed border-border/60 hover:border-primary/40 bg-surface/50 p-8 flex flex-col items-center justify-center text-center gap-4 h-full min-h-[320px] transition-colors duration-300">
            <div className="w-14 h-14 rounded-full border border-dashed border-primary/40 flex items-center justify-center text-2xl text-primary/60 group-hover:text-primary group-hover:border-primary transition-colors duration-300">
              +
            </div>
            <h3 className="font-display text-xl font-semibold text-textSecondary group-hover:text-textPrimary transition-colors">
              Your business?
            </h3>
            <p className="font-body text-sm text-textTertiary max-w-[220px]">
              We&apos;re building something for our next client. That could be
              you.
            </p>
            <span className="text-xs font-body text-primary mt-2">
              Get in touch →
            </span>
          </div>
        </Link>
      </motion.div>
    );
  }

  const showImage =
    Boolean(project.screenshotPath) && !imageFailed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
        className="group rounded-2xl border border-border/50 bg-surface overflow-hidden hover:border-border transition-colors duration-300"
      >
        <div className="border-b border-border/40 bg-surfaceHigh">
          <div className="flex items-center gap-2 px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="flex-1 mx-2 bg-background rounded px-2 py-0.5 text-[10px] font-body text-textTertiary truncate">
              {project.displayUrl}
            </div>
          </div>
          <div className="aspect-[16/10] relative bg-background overflow-hidden">
            {showImage && project.screenshotPath ? (
              <Image
                src={project.screenshotPath}
                alt={`${project.name} screenshot`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-textTertiary text-xs font-body">
                Screenshot coming soon
              </div>
            )}
          </div>
        </div>

        <div className="p-6 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-lg font-semibold text-textPrimary">
              {project.name}
            </h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-body text-primary hover:underline underline-offset-4 shrink-0"
            >
              Visit →
            </a>
          </div>
          <p className="font-body text-sm text-textSecondary leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-body px-2 py-0.5 rounded-full bg-surfaceHigh text-textTertiary border border-border/40"
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
