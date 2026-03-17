"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMouseTilt } from "@/hooks/useMouseTilt";

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const tiltRef = useMouseTilt({ maxTilt: 8, perspective: 1200, scale: 1.01, glare: true });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const init = async () => {
      const { gsap } = await import("gsap");

      const el = sectionRef.current;
      if (!el) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        el.querySelector("[data-hero-badge]"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
      )
        .fromTo(
          el.querySelector("[data-hero-title]"),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          el.querySelector("[data-hero-desc]"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          el.querySelector("[data-hero-buttons]"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          el.querySelectorAll("[data-hero-badge-item]"),
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 },
          "-=0.2"
        )
        .fromTo(
          el.querySelector("[data-hero-image]"),
          { opacity: 0, x: 60, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 1 },
          "-=0.8"
        );
    };

    init();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark bg-noise -mt-20 pt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p
                data-hero-badge
                className="text-accent font-medium tracking-[0.2em] uppercase text-sm opacity-0"
              >
                {t.hero.badge}
              </p>
              <h1
                data-hero-title
                className="heading-1 text-white/90 opacity-0"
              >
                {t.hero.title}{" "}
                <span className="bg-gradient-to-r from-primary-light via-accent to-primary-light bg-clip-text text-transparent animate-shimmer">
                  {t.hero.titleHighlight}
                </span>{" "}
                {t.hero.titleEnd}
              </h1>
              <p
                data-hero-desc
                className="text-body max-w-lg opacity-0"
              >
                {t.hero.description}
              </p>
            </div>

            <div
              data-hero-buttons
              className="flex flex-col sm:flex-row gap-4 opacity-0"
            >
              <Link href="/schedule" className="btn-primary text-center">
                {t.hero.cta}
              </Link>
              <Link href="/about" className="btn-secondary text-center">
                {t.hero.learnMore}
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { text: t.hero.badges.confidential, icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { text: t.hero.badges.online, icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
                { text: t.hero.badges.languages, icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" },
              ].map((badge, i) => (
                <div
                  key={i}
                  data-hero-badge-item
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card opacity-0"
                >
                  <svg
                    className="w-4 h-4 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={badge.icon} />
                  </svg>
                  <span className="text-sm text-white/70">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image with 3D Tilt */}
          <div data-hero-image className="relative hidden lg:block opacity-0">
            {/* Glow behind image */}
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 blur-3xl rounded-full animate-pulse-slow" />

            <div
              ref={tiltRef}
              className="relative animate-float"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glare overlay */}
              <div className="tilt-glare absolute inset-0 pointer-events-none rounded-2xl z-10" />

              {/* Main image */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                style={{ transform: "translateZ(20px)" }}
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/mama1.jpeg"
                    alt="Любовь - Psicóloga Online"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Decorative floating frame */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full border border-accent/20 rounded-2xl -z-10"
                style={{ transform: "translateZ(-10px)" }}
              />
              <div
                className="absolute -top-4 -left-4 w-full h-full border border-primary/15 rounded-2xl -z-10"
                style={{ transform: "translateZ(-20px)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
