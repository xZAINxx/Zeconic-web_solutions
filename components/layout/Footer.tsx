import Image from "next/image";
import Link from "next/link";
import { CopyrightYear } from "@/components/layout/CopyrightYear";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

const services = [
  { href: "/services#web-development", label: "Web Development" },
  { href: "/services#ai-chatbots", label: "AI Chatbots" },
  { href: "/services#social-media", label: "Social Media" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-bgDeep">
      {/* Aurora hairline */}
      <div className="hairline" />
      {/* Soft aurora glow at top */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[60%] -translate-x-1/2 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(0,229,255,0.4) 0%, rgba(123,97,255,0.2) 50%, transparent 80%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block max-w-[min(100%,280px)]">
              <Image
                src="/zeconic-logo.png"
                alt="Zeconic Web Solutions"
                width={980}
                height={205}
                sizes="(max-width: 768px) 60vw, 280px"
                className="h-10 w-auto max-w-full object-contain object-left md:h-12"
              />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-textSecondary">
              Custom websites and AI tools for small businesses across the US.
              Built lean, shipped fast, designed to grow with you.
            </p>
            <p className="eyebrow mt-8 text-textTertiary">
              <span className="text-primary">●</span>&nbsp; Currently taking new
              projects
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <p className="eyebrow text-textTertiary">Navigate</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-textSecondary transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <p className="eyebrow text-textTertiary">Services</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-textSecondary transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="eyebrow text-textTertiary">Contact</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-textSecondary">
              <a
                href="mailto:info@zeconic.com"
                className="transition-colors hover:text-primary"
              >
                info@zeconic.com
              </a>
              <a
                href="tel:+19253342667"
                className="transition-colors hover:text-primary"
              >
                +1 (925) 334-2667
              </a>
              <p className="text-textTertiary">United States</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-textTertiary">
            © <CopyrightYear /> Zeconic LLC · A division of Zeconic Project
            Solutions
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-textTertiary">
            Built with React · Next.js · Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
