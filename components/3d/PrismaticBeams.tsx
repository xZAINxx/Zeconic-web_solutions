"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  parallax?: boolean;
};

export default function PrismaticBeams({
  className = "",
  parallax = true,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallax) return;
    const el = wrapRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      el.style.transform = `translate3d(${x * -80}px, ${y * -60}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [parallax]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-bgDeep ${className}`}
      aria-hidden
    >
      <div
        ref={wrapRef}
        className="prism-mask absolute -inset-[20vw] z-0"
        style={{ willChange: "transform", transition: "transform 0.15s ease-out" }}
      >
        <div
          className="absolute left-[10%] top-[-20%] h-[160vh] w-[35vw] origin-top mix-blend-hard-light blur-sm animate-beam-1"
          style={{
            background:
              "linear-gradient(180deg, rgba(56,189,248,1) 0%, rgba(124,58,237,0.8) 50%, rgba(0,0,0,0) 100%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          className="absolute left-[30%] top-[-10%] h-[150vh] w-[40vw] origin-top mix-blend-hard-light blur-md animate-beam-2"
          style={{
            background:
              "linear-gradient(180deg, rgba(34,211,238,1) 0%, rgba(255,79,216,0.8) 60%, rgba(0,0,0,0) 100%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          className="absolute left-[60%] top-[-30%] h-[180vh] w-[40vw] origin-top mix-blend-hard-light blur-sm animate-beam-3"
          style={{
            background:
              "linear-gradient(180deg, rgba(123,97,255,1) 0%, rgba(255,200,87,0.7) 40%, rgba(0,0,0,0) 100%)",
            willChange: "transform, opacity",
          }}
        />
      </div>
      <div className="film-grain absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  );
}
