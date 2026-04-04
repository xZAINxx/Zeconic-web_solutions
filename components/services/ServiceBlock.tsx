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

  const contentColumn = (
    <motion.div
      key="content"
      initial={{ opacity: 0, x: isEven ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center gap-4">
        <span
          className="font-display text-5xl font-bold opacity-20"
          style={{ color: service.accentColor }}
        >
          {service.number}
        </span>
        <h2 className="font-display text-4xl font-bold text-textPrimary">
          {service.title}
        </h2>
      </div>

      <p
        className="font-body text-lg font-medium"
        style={{ color: service.accentColor }}
      >
        {service.tagline}
      </p>

      <p className="font-body text-textSecondary leading-relaxed">
        {service.description}
      </p>

      <div className="mt-2">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-textTertiary mb-3">
          Ideal for
        </p>
        <div className="flex flex-wrap gap-2">
          {service.idealFor.map((item) => (
            <span
              key={item}
              className="text-xs font-body px-3 py-1.5 rounded-full border bg-surface text-textSecondary"
              style={{ borderColor: `${service.accentColor}30` }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <Button variant="primary" href="/contact" size="md">
          Start this service →
        </Button>
      </div>
    </motion.div>
  );

  const detailsColumn = (
    <motion.div
      key="details"
      initial={{ opacity: 0, x: isEven ? 24 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1,
      }}
      viewport={{ once: true }}
      className="flex flex-col gap-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {service.features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border/40 bg-surfaceHigh p-5 flex flex-col gap-2"
            style={{ borderTop: `2px solid ${service.accentColor}40` }}
          >
            <h4
              className="font-display text-sm font-semibold"
              style={{ color: service.accentColor }}
            >
              {feature.title}
            </h4>
            <p className="font-body text-xs text-textSecondary leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-2 rounded-xl border border-border/30 bg-surface p-5">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-textTertiary mb-4">
          Our process
        </p>
        <div className="flex flex-wrap gap-2 items-center">
          {service.process.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="font-body text-xs text-textSecondary">{step}</span>
              {i < service.process.length - 1 && (
                <span
                  style={{ color: service.accentColor }}
                  className="text-xs opacity-60"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id={service.id}
      className={`${index === 0 ? "pt-16 pb-24" : "py-24"} border-t border-border/30 ${isEven ? "bg-background" : "bg-surface"} relative overflow-hidden`}
    >
      <div
        className="absolute top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
        style={{
          background: service.accentColor,
          [isEven ? "right" : "left"]: "-100px",
        }}
      />

      <SectionWrapper className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {isEven ? (
            <>
              {contentColumn}
              {detailsColumn}
            </>
          ) : (
            <>
              {detailsColumn}
              {contentColumn}
            </>
          )}
        </div>
      </SectionWrapper>
    </section>
  );
}
