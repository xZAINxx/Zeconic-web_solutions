"use client";

import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { useState } from "react";

const inputClass = [
  "w-full bg-surface border border-border/60 rounded-xl px-4 py-3.5",
  "font-body text-sm text-textPrimary placeholder:text-textTertiary",
  "focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/20",
  "focus:shadow-[0_0_20px_rgba(0,229,255,0.12)]",
  "transition-all duration-200",
].join(" ");

const nextSteps = [
  {
    num: "01",
    title: "We review your message",
    desc: "Within 1 business day, someone from our team will read your message.",
  },
  {
    num: "02",
    title: "We schedule a discovery call",
    desc: "A free 30-minute call to understand your project and goals.",
  },
  {
    num: "03",
    title: "You get a custom proposal",
    desc: "A clear scope, timeline, and quote — no pressure to commit.",
  },
] as const;

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10"
          aria-hidden
        >
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="font-body text-textPrimary text-base leading-relaxed max-w-md">
          We&apos;ve received your message. Expect to hear from us within 1
          business day.
        </p>
      </div>
      <button
        type="button"
        onClick={onReset}
        className="font-body text-sm text-primary hover:underline underline-offset-4"
      >
        Send another message
      </button>
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <section className="bg-background py-16">
      <SectionWrapper className="!py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold text-textPrimary mb-8">
              Tell us about your project
            </h2>
            {status === "sent" ? (
              <SuccessState onReset={() => setStatus("idle")} />
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="font-body text-xs text-textSecondary">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="font-body text-xs text-textSecondary">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-type" className="font-body text-xs text-textSecondary">
                    Project type
                  </label>
                  <select
                    id="contact-type"
                    name="projectType"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    <option value="website">Website</option>
                    <option value="ai-chatbot">AI Chatbot</option>
                    <option value="social-media">Social Media Setup</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="font-body text-xs text-textSecondary">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder={`Tell us about your business and what you're looking to build...`}
                    required
                    rows={5}
                    className={`${inputClass} resize-y min-h-[120px]`}
                  />
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full justify-center"
                >
                  {status === "sending" ? "Sending..." : "Send message →"}
                </Button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-10 lg:pt-14">
            <div className="flex flex-col gap-6">
              <h3 className="font-display text-lg font-semibold text-textPrimary">
                What happens next
              </h3>
              {nextSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <span className="font-display text-2xl font-bold text-primary/30 shrink-0 w-8">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-textPrimary">
                      {step.title}
                    </h4>
                    <p className="font-body text-xs text-textSecondary mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="rounded-xl border border-border/40 bg-surface p-6 flex flex-col gap-4">
              <div>
                <p className="font-body text-xs text-textTertiary uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@zeconic.com"
                  className="font-body text-sm text-primary hover:underline underline-offset-4"
                >
                  hello@zeconic.com
                </a>
              </div>
              <div>
                <p className="font-body text-xs text-textTertiary uppercase tracking-wider mb-1">
                  Response time
                </p>
                <p className="font-body text-sm text-textSecondary">
                  Within 1 business day
                </p>
              </div>
              <div>
                <p className="font-body text-xs text-textTertiary uppercase tracking-wider mb-1">
                  Based in
                </p>
                <p className="font-body text-sm text-textSecondary">
                  Frisco, Texas · Serving the entire US
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
