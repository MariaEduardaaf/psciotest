"use client";
import { useEffect, useRef } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "vertical" | "horizontal";
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = -0.2, direction = "vertical" } = options;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const el = ref.current;
      if (!el) return;

      const prop = direction === "vertical" ? "y" : "x";

      gsap.to(el, {
        [prop]: `${speed * 100}%`,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement || el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    };

    init();
  }, [speed, direction]);

  return ref;
}
