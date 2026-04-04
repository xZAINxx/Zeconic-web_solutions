"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import SpotlightGrid from "@/components/ui/SpotlightGrid";
import { useMagneticTilt } from "@/hooks/useMagneticTilt";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

const services = [
  {
    icon: (
      <span className="text-2xl font-bold leading-none font-display">
        {"</>"}
      </span>
    ),
    title: "Web Development",
    description:
      "Custom React and Next.js websites built for speed, SEO, and conversions. No templates — everything is built for your business.",
    features: [
      "Landing pages & business sites",
      "Full-stack web applications",
      "SEO-optimized & mobile-first",
    ],
    href: "/services#web-development",
    accentColor: "#00E5FF",
  },
  {
    icon: <span className="text-3xl leading-none">✦</span>,
    title: "AI Chatbots",
    description:
      "Custom chatbots built on Claude or OpenAI, embedded on your site to capture leads, answer FAQs, and book appointments 24/7.",
    features: [
      "Lead capture & qualification",
      "FAQ & support automation",
      "Appointment booking flows",
    ],
    href: "/services#ai-chatbots",
    accentColor: "#7B61FF",
  },
  {
    icon: <span className="text-3xl leading-none">⊕</span>,
    title: "Social Media Setup",
    description:
      "Done-for-you Instagram, Facebook, and TikTok page creation. Professional branding, bio, and content to launch your presence.",
    features: [
      "Profile setup & branding",
      "Instagram, Facebook, TikTok",
      "Content strategy kickoff",
    ],
    href: "/services#social-media",
    accentColor: "#00E5FF",
  },
];

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
  accentColor?: string;
};

function ServiceCard({
  icon,
  title,
  description,
  features,
  href,
  accentColor = "#00E5FF",
}: ServiceCardProps) {
  const { ref, transform, onMouseMove, onMouseLeave } = useMagneticTilt(8);

  return (
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
      className="relative group rounded-2xl bg-surface border border-border/50 p-8 flex flex-col gap-5 cursor-pointer"
    >
      <div
        className="absolute top-0 left-8 right-8 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}66, transparent)`,
        }}
      />

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 40px ${accentColor}11` }}
      />

      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center"
        style={{
          background: `${accentColor}15`,
          border: `1px solid ${accentColor}30`,
          color: accentColor,
        }}
      >
        {icon}
      </div>

      <h3 className="font-display text-xl font-semibold text-textPrimary">
        {title}
      </h3>

      <p className="font-body text-textSecondary text-sm leading-relaxed">
        {description}
      </p>

      <ul className="flex flex-col gap-2 mt-auto">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-xs font-body text-textSecondary"
          >
            <span
              style={{ color: accentColor }}
              className="text-base leading-none"
            >
              ›
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-xs font-body mt-2 group/link"
        style={{ color: accentColor }}
      >
        Learn more
        <span className="transition-transform group-hover/link:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}

export function ServicesPreview() {
  return (
    <section className="bg-background relative overflow-hidden">
      <SpotlightGrid className="absolute inset-0 z-0 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      <SectionWrapper as="div" className="relative z-10 !pt-16 !pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-body tracking-[0.25em] text-primary uppercase">
              What we do
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-textPrimary mt-3 leading-tight">
              Everything your business
              <br />
              needs online
            </h2>
            <p className="font-body text-textSecondary mt-4 text-base">
              Three core services, built to work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 font-body text-sm text-textSecondary hover:text-primary transition-colors"
            >
              View all service details
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
