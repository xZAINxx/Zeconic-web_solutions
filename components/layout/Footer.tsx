import Link from "next/link";

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
            <p className="font-display text-lg font-semibold text-textPrimary">
              Zeconic
            </p>
            <p className="mt-1 text-sm text-textSecondary">Web Solutions</p>
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
            <p className="mt-4 text-sm text-textSecondary">
              <a
                href="mailto:hello@zeconic.com"
                className="transition-colors hover:text-primary"
              >
                hello@zeconic.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-textTertiary">
            © 2025 Zeconic LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
