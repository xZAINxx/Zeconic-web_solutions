"use client";

import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { useState } from "react";

const inputClass = [
  "w-full rounded-xl border border-white/[0.08] bg-surface/40 px-4 py-3.5",
  "text-sm text-textPrimary placeholder:text-textTertiary backdrop-blur-sm",
  "transition-all duration-200",
  "focus:border-primary/60 focus:bg-surface/60 focus:outline-none focus:ring-2 focus:ring-primary/20",
  "focus:shadow-[0_0_30px_rgba(0,229,255,0.10)]",
].join(" ");

const nextSteps = [
  {
    num: "01",
    title: "We review your message",
    desc: "Within 1 business day, someone from our team reads your message.",
    accent: "primary",
  },
  {
    num: "02",
    title: "We schedule a discovery call",
    desc: "A free 30-minute call to understand your project and goals.",
    accent: "accent",
  },
  {
    num: "03",
    title: "You get a custom proposal",
    desc: "A clear scope, timeline, and quote — no pressure to commit.",
    accent: "magenta",
  },
] as const;

const accentMap = {
  primary: "text-primary",
  accent: "text-accent",
  magenta: "text-magenta",
} as const;

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-start gap-6 rounded-2xl border border-primary/30 bg-surface/60 p-8 backdrop-blur-sm"
    >
      <div className="flex items-center gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{
            background:
              "linear-gradient(120deg, #00E5FF33, #7B61FF33, #FF4FD833)",
          }}
        >
          <svg
            className="h-5 w-5 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="max-w-md text-[15px] leading-relaxed text-textPrimary">
          We&apos;ve got your message. Expect to hear from us within one
          business day.
        </p>
      </div>
      <button
        type="button"
        onClick={onReset}
        className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary transition-colors hover:text-textPrimary"
      >
        Send another message →
      </button>
    </motion.div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      projectType: String(data.get("projectType") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setErrorMsg(
          json.error || "Something went wrong sending your message.",
        );
        setStatus("error");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error("Contact submit failed:", err);
      setErrorMsg("Network error. Check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section className="relative border-t border-white/[0.05] py-20">
      <SectionWrapper className="!py-0">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <span className="eyebrow text-textTertiary">
              <span className="text-primary">●</span>&nbsp; Send us a message
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-textPrimary md:text-3xl">
              Tell us about your project
            </h2>

            <div className="mt-8">
              {status === "sent" ? (
                <SuccessState onReset={() => setStatus("idle")} />
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-name"
                        className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary"
                      >
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
                      <label
                        htmlFor="contact-email"
                        className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary"
                      >
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
                    <label
                      htmlFor="contact-type"
                      className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary"
                    >
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
                        Select a service…
                      </option>
                      <option value="website">Website</option>
                      <option value="ai-chatbot">AI Chatbot</option>
                      <option value="social-media">Social Media Setup</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-message"
                      className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about your business and what you're looking to build..."
                      required
                      rows={5}
                      className={`${inputClass} min-h-[140px] resize-y`}
                    />
                  </div>
                  {status === "error" && errorMsg ? (
                    <div
                      role="alert"
                      className="rounded-xl border border-magenta/40 bg-magenta/[0.06] px-4 py-3 text-[13.5px] text-magenta backdrop-blur-sm"
                    >
                      {errorMsg}
                    </div>
                  ) : null}
                  <Button
                    variant="aurora"
                    size="lg"
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full justify-center"
                  >
                    {status === "sending" ? "Sending…" : "Send message →"}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Side */}
          <div className="flex flex-col gap-10 lg:col-span-5 lg:pt-12">
            <div className="flex flex-col gap-7">
              <span className="eyebrow text-textTertiary">
                <span className="text-accent">●</span>&nbsp; What happens next
              </span>
              {nextSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-5"
                >
                  <span
                    className={`shrink-0 font-display text-3xl font-bold opacity-40 ${accentMap[step.accent]}`}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-textPrimary">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-textSecondary">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-surface/40 p-6 backdrop-blur-sm">
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary">
                  Email
                </p>
                <a
                  href="mailto:info@zeconic.com"
                  className="mt-1 block text-[14.5px] text-primary transition-colors hover:text-textPrimary"
                >
                  info@zeconic.com
                </a>
              </div>
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary">
                  Phone
                </p>
                <a
                  href="tel:+13475258073"
                  className="mt-1 block text-[14.5px] text-primary transition-colors hover:text-textPrimary"
                >
                  +1 (347) 525-8073
                </a>
              </div>
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary">
                  Response time
                </p>
                <p className="mt-1 text-[14.5px] text-textSecondary">
                  Within 1 business day
                </p>
              </div>
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-textTertiary">
                  Based in
                </p>
                <p className="mt-1 text-[14.5px] text-textSecondary">
                  United States · Serving the entire US
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
