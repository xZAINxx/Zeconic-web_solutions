"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function PortfolioTeaser() {
  const featured = projects.filter((p) => !p.isPlaceholder).slice(0, 3);

  return (
    <section className="relative overflow-hidden">
      <SectionWrapper className="relative">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="eyebrow text-textTertiary">
              <span className="text-magenta">●</span>&nbsp; Recent work
            </span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-textPrimary">
              Real sites for{" "}
              <span className="aurora-text">real businesses.</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-textSecondary transition-colors hover:text-primary md:inline-flex"
          >
            View portfolio <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group"
            >
              <Link
                href={project.url}
                target={project.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.06] bg-surface">
                  {/* Glow on hover */}
                  <div
                    className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
                    style={{
                      background:
                        i === 0
                          ? "radial-gradient(circle at center, rgba(0,229,255,0.6), transparent 70%)"
                          : i === 1
                            ? "radial-gradient(circle at center, rgba(123,97,255,0.6), transparent 70%)"
                            : "radial-gradient(circle at center, rgba(255,79,216,0.55), transparent 70%)",
                    }}
                  />
                  {project.screenshotPath ? (
                    <Image
                      src={project.screenshotPath}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-textTertiary">
                      Coming soon
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bgDeep to-transparent" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary">
                      {project.displayUrl}
                    </div>
                    <div className="mt-1 font-display text-xl font-semibold text-textPrimary">
                      {project.name}
                    </div>
                  </div>
                  <span className="mt-1 text-textTertiary transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary">
                    ↗
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center md:hidden">
          <Link
            href="/portfolio"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary"
          >
            View full portfolio →
          </Link>
        </p>
      </SectionWrapper>
    </section>
  );
}
