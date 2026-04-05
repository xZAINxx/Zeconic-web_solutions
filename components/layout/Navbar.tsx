"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

const MotionLink = motion(Link);

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

type NavItemProps = {
  href: string;
  label: string;
  isActive: boolean;
};

function NavItem({ href, label, isActive }: NavItemProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const spotlightOpacity = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      spotlightX.set(e.clientX - rect.left);
      spotlightY.set(e.clientY - rect.top);
    },
    [spotlightX, spotlightY]
  );

  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) =>
      `radial-gradient(120px circle at ${x}px ${y}px, rgba(0,229,255,0.22), transparent 70%)`
  );

  const spotlightOpacitySpring = useSpring(spotlightOpacity, {
    stiffness: 300,
    damping: 30,
  });

  return (
    <MotionLink
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onHoverStart={() => spotlightOpacity.set(1)}
      onHoverEnd={() => spotlightOpacity.set(0)}
      className="relative cursor-pointer overflow-hidden rounded-xl px-4 py-2.5 font-body text-sm font-medium transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background: spotlightBg,
          opacity: spotlightOpacitySpring,
        }}
      />
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 rounded-xl border border-primary/30 bg-primary/[0.12]"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span
        className={`relative z-10 ${
          isActive ? "text-primary" : "text-textSecondary hover:text-textPrimary"
        }`}
      >
        {label}
      </span>
    </MotionLink>
  );
}

function MagneticDock({ pathname }: { pathname: string | null }) {
  const dockRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-200, 200], [8, -8]),
    { stiffness: 200, damping: 30 }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-400, 400], [-12, 12]),
    { stiffness: 200, damping: 30 }
  );
  const translateZ = useSpring(
    useTransform(mouseY, [-200, 200], [15, -5]),
    { stiffness: 200, damping: 30 }
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = dockRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <div
      className="pointer-events-auto flex"
      style={{ perspective: "1200px" }}
    >
      <motion.nav
        ref={dockRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-center gap-1 rounded-2xl px-3 py-2.5"
        style={{
          background: "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
          rotateX,
          rotateY,
          translateZ,
          transformStyle: "preserve-3d",
        }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.2 }}
      >
        <div
          className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,229,255,0.12) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        {links.map(({ href, label }) => (
          <NavItem
            key={href}
            href={href}
            label={label}
            isActive={pathname === href}
          />
        ))}
        <motion.div
          className="ml-1"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Button
            variant="primary"
            className="!px-5 !py-2.5 !text-sm shadow-[0_4px_15px_rgba(0,229,255,0.25)]"
            href="/contact"
          >
            Book a call
          </Button>
        </motion.div>
      </motion.nav>
    </div>
  );
}

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
      className="pointer-events-none fixed inset-x-0 top-0 z-50"
      initial={false}
    >
      <div className="relative mx-auto flex h-[5.5rem] max-w-7xl items-center justify-between gap-3 px-6 md:grid md:h-24 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-4 md:px-12">
        <div className="min-w-0 pr-2 md:pr-4">
          <motion.div
            className={[
              "pointer-events-auto rounded-lg px-2 py-1 transition-[background-color,backdrop-filter,border-color] duration-300",
              scrolled
                ? "border border-border bg-background/80 backdrop-blur-md"
                : "border border-transparent",
              "md:border-transparent md:bg-transparent md:backdrop-blur-none",
            ].join(" ")}
          >
            <Link href="/" className="group block max-w-full">
              <Image
                src="/zeconic-logo.png"
                alt="Zeconic Web Solutions"
                width={980}
                height={205}
                priority
                sizes="(max-width: 768px) 78vw, min(520px, 34vw)"
                className="h-16 w-auto max-w-full object-contain object-left transition-opacity duration-300 group-hover:opacity-90 md:h-20"
              />
            </Link>
          </motion.div>
        </div>

        <div className="pointer-events-none hidden min-w-0 justify-center justify-self-center md:flex">
          <MagneticDock pathname={pathname} />
        </div>

        <div className="flex shrink-0 items-center justify-end md:min-w-0">
          <button
            type="button"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-md border border-border text-textPrimary md:hidden"
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
        </div>
      </div>

      <AnimatePresence mode="wait">
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            key="drawer"
            className="pointer-events-auto overflow-hidden border-b border-border bg-surface md:hidden"
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
