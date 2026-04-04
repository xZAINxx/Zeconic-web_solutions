"use client";

import { useRef, useState } from "react";
import type { MouseEvent } from "react";

export function useMagneticTilt(strength = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(800px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };

  const onMouseLeave = () => setTransform("");

  return { ref, transform, onMouseMove, onMouseLeave };
}
