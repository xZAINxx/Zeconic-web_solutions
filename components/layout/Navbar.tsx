"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

const linkVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const drawerVariants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  return (
    <motion.header
      className={[
        "fixed top-0 z-50 w-full border-b transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      ].join(" ")}
      initial={false}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-[4.25rem] md:px-12">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-lg font-bold text-primary transition-colors group-hover:text-primary">
            Zeconic
          </span>
          <span className="text-xs font-medium text-textSecondary">
            Web Solutions
          </span>
        </Link>

        <motion.ul
          className="hidden items-center gap-8 md:flex"
          initial="hidden"
          animate="visible"
        >
          {links.map(({ href, label }, i) => {
            const active = pathname === href;
            return (
              <motion.li key={href} custom={i} variants={linkVariants}>
                <Link
                  href={href}
                  className={`font-body text-sm transition-colors duration-200 ${
                    active
                      ? "text-primary"
                      : "text-textSecondary hover:text-textPrimary"
                  }`}
                >
                  {label}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <Button variant="primary" className="!py-2 !text-sm" href="/contact">
              Book a call
            </Button>
          </motion.div>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-textPrimary md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          <svg
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence mode="wait">
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            key="drawer"
            className="overflow-hidden border-b border-border bg-surface md:hidden"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="exit"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block rounded-md px-2 py-3 font-body text-sm transition-colors duration-200 hover:bg-surfaceHigh ${
                        active
                          ? "text-primary"
                          : "text-textSecondary hover:text-textPrimary"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Button
                  variant="primary"
                  className="w-full"
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Book a call
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
