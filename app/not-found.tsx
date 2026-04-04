"use client";

import { Button } from "@/components/ui/Button";
import VantaNet from "@/components/ui/VantaNet";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center overflow-hidden bg-background px-6 md:min-h-[calc(100dvh-4.25rem)]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <VantaNet className="h-full w-full" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center select-none"
        aria-hidden
      >
        <span className="font-display text-[clamp(8rem,28vw,18rem)] font-bold leading-none text-primary/10">
          404
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-lg text-center">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Page not found
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-textPrimary md:text-5xl">
          Lost in space.
        </h1>
        <p className="mt-4 font-body text-base text-textSecondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button variant="primary" size="lg" href="/">
            Back to home
          </Button>
          <Link
            href="/portfolio"
            className="font-body text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
          >
            View our work
          </Link>
        </div>
      </div>
    </div>
  );
}
