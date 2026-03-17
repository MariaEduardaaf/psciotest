"use client";
import { useEffect, useRef } from "react";

type RevealAnimation =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "scaleIn"
  | "rotateIn";

interface ScrollRevealOptions {
  animation?: RevealAnimation;
  duration?: number;
  delay?: number;
  stagger?: number;
  threshold?: number;
  once?: boolean;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    animation = "fadeUp",
    duration = 0.8,
    delay = 0,
    stagger = 0.1,
    threshold = 0.2,
    once = true,
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let gsapInstance: typeof import("gsap")["gsap"] | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      gsapInstance = gsap;

      const el = ref.current;
      if (!el) return;

      const children = el.querySelectorAll("[data-reveal]");
      const targets = children.length > 0 ? children : [el];

      const fromVars: Record<RevealAnimation, gsap.TweenVars> = {
        fadeUp: { opacity: 0, y: 60 },
        fadeDown: { opacity: 0, y: -60 },
        fadeLeft: { opacity: 0, x: -60 },
        fadeRight: { opacity: 0, x: 60 },
        scaleIn: { opacity: 0, scale: 0.85 },
        rotateIn: { opacity: 0, rotateY: 15, rotateX: 5 },
      };

      const toVars: gsap.TweenVars = {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: `top ${100 - threshold * 100}%`,
          toggleActions: once
            ? "play none none none"
            : "play reverse play reverse",
        },
      };

      gsap.fromTo(targets, fromVars[animation], toVars);
    };

    init();

    return () => {
      if (gsapInstance) {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        });
      }
    };
  }, [animation, duration, delay, stagger, threshold, once]);

  return ref;
}
