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

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="absolute top-0 left-1/2 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
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
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-textSecondary">
              Custom websites and AI tools for small businesses across the US.
            </p>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-textTertiary">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2">
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
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-textTertiary">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-textSecondary">
              <a
                href="mailto:info@zeconic.com"
                className="transition-colors hover:text-primary"
              >
                info@zeconic.com
              </a>
              <a
                href="tel:+19253342667"
                className="font-body text-sm text-textSecondary transition-colors hover:text-primary"
              >
                +1 (925) 334-2667
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-textTertiary">
            © <CopyrightYear /> Zeconic LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
