"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "We learn about your business, goals, and what you actually need — no jargon, no pressure.",
  },
  {
    number: "02",
    title: "Proposal",
    description:
      "You get a clear scope, timeline, and pricing. No surprises, no hidden fees.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and develop your project with regular check-ins and revision rounds.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Your site or tool goes live. We handle deployment, testing, and any launch-day issues.",
  },
  {
    number: "05",
    title: "Ongoing support",
    description:
      "Optional retainer for updates, hosting, and chatbot tuning as your business grows.",
  },
];

function KineticStepTitle({
  index,
  scrollProgress,
  className,
  children,
}: {
  index: number;
  scrollProgress: MotionValue<number>;
  className?: string;
  children: ReactNode;
}) {
  const smooth = useSpring(scrollProgress, { damping: 45, stiffness: 220 });
  const y = useTransform(
    smooth,
    [index / 5, (index + 1) / 5],
    [8, 0],
  );
  const opacity = useTransform(
    smooth,
    [index / 5, (index + 1) / 5],
    [0.72, 1],
  );

  return (
    <motion.h3 style={{ y, opacity }} className={className}>
      {children}
    </motion.h3>
  );
}

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.6"],
  });

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { width: "0%" },
        {
          width: "80%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
            onUpdate: (self) => {
              setActiveStep(Math.min(4, Math.floor(self.progress * 5)));
            },
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-surface relative overflow-hidden border-t border-border/30"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `repeating-linear-gradient(
      45deg,
      var(--primary) 0px,
      var(--primary) 1px,
      transparent 1px,
      transparent 40px
    )`,
        }}
      />

      <SectionWrapper as="div" className="relative z-10 py-0 !pt-20 !pb-28">
        <div className="max-w-3xl">
          <span className="text-xs font-body tracking-[0.25em] text-primary uppercase">
            How it works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-textPrimary mt-3 leading-tight">
            From first call to launch day
          </h2>
          <p className="font-body text-textSecondary mt-4 text-base">
            A clear process with no surprises.
          </p>
        </div>

        {/* Desktop horizontal stepper */}
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute top-[28px] left-[10%] right-[10%] h-px bg-border/40" />
          <div
            ref={lineRef}
            className="absolute top-[28px] left-[10%] h-px bg-primary origin-left z-[1]"
            style={{ width: "0%" }}
          />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => {
              const active = activeStep === i;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  viewport={{ once: true, margin: "-40px" }}
                  className="group flex flex-col items-center text-center gap-4 pt-0"
                >
                  <div
                    className={[
                      "relative w-14 h-14 rounded-full border flex items-center justify-center z-10 transition-colors duration-300",
                      active
                        ? "border-primary bg-primaryGlow"
                        : "border-border/60 bg-surface",
                    ].join(" ")}
                  >
                    <span className="font-display text-sm font-bold text-primary">
                      {step.number}
                    </span>
                    <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/40 transition-all duration-500 pointer-events-none" />
                  </div>

                  <KineticStepTitle
                    index={i}
                    scrollProgress={scrollYProgress}
                    className="font-display text-base font-semibold text-textPrimary leading-tight"
                  >
                    {step.title}
                  </KineticStepTitle>

                  <p className="font-body text-xs text-textSecondary leading-relaxed max-w-[160px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative mt-12 flex flex-col gap-10 lg:hidden pl-8">
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-border/40" />

          {steps.map((step, i) => {
            const active = activeStep === i;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-30px" }}
                className="relative flex gap-5"
              >
                <div
                  className={[
                    "absolute -left-8 w-10 h-10 rounded-full border flex items-center justify-center shrink-0 z-10 transition-colors duration-300",
                    active
                      ? "border-primary bg-primaryGlow"
                      : "border-border/60 bg-surface",
                  ].join(" ")}
                >
                  <span className="font-display text-xs font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 min-w-0">
                  <KineticStepTitle
                    index={i}
                    scrollProgress={scrollYProgress}
                    className="font-display text-base font-semibold text-textPrimary"
                  >
                    {step.title}
                  </KineticStepTitle>
                  <p className="font-body text-sm text-textSecondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="font-body text-sm text-textTertiary">
            Ready to start?{" "}
            <Link
              href="/contact"
              className="text-primary hover:underline underline-offset-4"
            >
              Book a free discovery call →
            </Link>
          </p>
        </div>
      </SectionWrapper>
    </section>
  );
}
