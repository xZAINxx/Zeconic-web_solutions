"use client";

import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import type { Service } from "@/lib/services";
import { motion } from "framer-motion";

export default function ServiceBlock({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      className="relative overflow-hidden border-t border-white/[0.05]"
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full opacity-[0.08] blur-[140px]"
        style={{
          background: service.accentColor,
          [isEven ? "right" : "left"]: "-160px",
        }}
        aria-hidden
      />

      <SectionWrapper className="relative !py-24 md:!py-32">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-[11px] uppercase tracking-[0.22em]"
                style={{ color: service.accentColor }}
              >
                {service.number} / 03
              </span>
              <span className="h-px w-10" style={{ background: service.accentColor }} />
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight text-textPrimary">
              {service.title}
            </h2>
            <p
              className="mt-5 text-lg font-medium leading-snug"
              style={{ color: service.accentColor }}
            >
              {service.tagline}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-textSecondary">
              {service.description}
            </p>

            <div className="mt-8">
              <p className="eyebrow text-textTertiary">Ideal for</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.idealFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border bg-surface/50 px-3 py-1 text-xs text-textSecondary backdrop-blur-sm"
                    style={{ borderColor: `${service.accentColor}30` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Button variant="aurora" href="/contact" size="md">
                Start this service →
              </Button>
            </div>
          </motion.div>

          {/* Right: features + process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.06 }}
                  className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-surface/40 p-5 backdrop-blur-sm transition-colors hover:border-white/[0.12]"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${service.accentColor}, transparent)`,
                    }}
                  />
                  <h4
                    className="font-display text-[15px] font-semibold"
                    style={{ color: service.accentColor }}
                  >
                    {f.title}
                  </h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-textSecondary">
                    {f.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-white/[0.06] bg-surface/40 p-5 backdrop-blur-sm">
              <p className="eyebrow text-textTertiary">Our process</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
                {service.process.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="text-xs text-textSecondary">{step}</span>
                    {i < service.process.length - 1 && (
                      <span
                        className="text-xs opacity-50"
                        style={{ color: service.accentColor }}
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}
