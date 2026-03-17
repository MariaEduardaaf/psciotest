"use client";
import { useRef, useCallback, useEffect, useState } from "react";

interface TiltOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
  maxGlare?: number;
  disabled?: boolean;
}

export function useMouseTilt(options: TiltOptions = {}) {
  const {
    maxTilt = 15,
    perspective = 1000,
    scale = 1.02,
    speed = 400,
    glare = false,
    maxGlare = 0.3,
    disabled = false,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (disabled || isMobile || !ref.current) return;
      const el = ref.current;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

      if (glare) {
        const glareEl = el.querySelector(".tilt-glare") as HTMLElement;
        if (glareEl) {
          const angle =
            Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
          const intensity =
            Math.min(
              Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) /
                Math.max(centerX, centerY),
              1
            ) * maxGlare;
          glareEl.style.background = `linear-gradient(${angle + 180}deg, rgba(255,255,255,${intensity}) 0%, transparent 80%)`;
        }
      }
    },
    [maxTilt, perspective, scale, glare, maxGlare, disabled, isMobile]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    ref.current.style.transition = `transform ${speed}ms ease-out`;
    if (glare) {
      const glareEl = ref.current.querySelector(".tilt-glare") as HTMLElement;
      if (glareEl) glareEl.style.background = "transparent";
    }
  }, [perspective, speed, glare]);

  const handleMouseEnter = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transition = "none";
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || disabled || isMobile) return;

    el.style.willChange = "transform";
    el.style.transformStyle = "preserve-3d";

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter, disabled, isMobile]);

  return ref;
}
