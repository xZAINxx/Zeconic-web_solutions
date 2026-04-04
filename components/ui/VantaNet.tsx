"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: {
      NET: (options: {
        el: HTMLElement;
        THREE?: object;
        mouseControls?: boolean;
        touchControls?: boolean;
        gyroControls?: boolean;
        color?: number;
        backgroundColor?: number;
        points?: number;
        maxDistance?: number;
        spacing?: number;
        showDots?: boolean;
      }) => { destroy: () => void };
    };
    THREE?: object;
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default function VantaNet({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let destroyed = false;

    async function init() {
      await loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js",
      );
      await loadScript(
        "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js",
      );

      if (destroyed || !containerRef.current || !window.VANTA) return;

      const THREE =
        typeof window !== "undefined" && window.THREE
          ? window.THREE
          : ((await import("three")) as unknown as NonNullable<Window["THREE"]>);

      vantaRef.current = window.VANTA.NET({
        el: containerRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        color: 0x00e5ff,
        backgroundColor: 0x080808,
        points: 9,
        maxDistance: 23,
        spacing: 18,
        showDots: true,
      });
    }

    init();

    return () => {
      destroyed = true;
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
