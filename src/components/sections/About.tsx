"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMouseTilt } from "@/hooks/useMouseTilt";
import { useParallax } from "@/hooks/useParallax";

export default function About() {
  const { t } = useLanguage();
  const textRef = useScrollReveal({ animation: "fadeRight", duration: 0.8 });
  const tiltRef = useMouseTilt({ maxTilt: 8, perspective: 1200, scale: 1.01, glare: true });
  const orbRef = useParallax({ speed: -0.15 });

  return (
    <section className="section-padding bg-dark relative overflow-hidden bg-noise">
      {/* Background orbs */}
      <div ref={orbRef} className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with 3D effect */}
          <div className="relative">
            {/* Glow behind */}
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/15 via-transparent to-accent/10 blur-3xl rounded-full animate-pulse-slow" />

            <div
              ref={tiltRef}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="tilt-glare absolute inset-0 pointer-events-none rounded-2xl z-10" />

              <div
                className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                style={{ transform: "translateZ(15px)" }}
              >
                <div className="aspect-[4/5] max-w-md mx-auto relative">
                  <Image
                    src="/images/mama2.jpeg"
                    alt="Love - Psicóloga"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -top-3 -left-3 w-20 h-20 border border-accent/20 rounded-full -z-10"
                style={{ transform: "translateZ(-10px)" }}
              />
              <div
                className="absolute -bottom-3 -right-3 w-28 h-28 border border-primary/15 rounded-full -z-10"
                style={{ transform: "translateZ(-15px)" }}
              />
            </div>
          </div>

          {/* Content */}
          <div ref={textRef}>
            <div className="space-y-6">
              <div>
                <p data-reveal className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
                  {t.about.badge}
                </p>
                <h2 data-reveal className="heading-2 text-white/90 mb-6">
                  {t.about.title}
                </h2>
              </div>

              <div data-reveal className="space-y-4 text-body">
                <p>{t.about.text1}</p>
                <p>{t.about.text2}</p>
                <p>{t.about.text3}</p>
              </div>

              <div data-reveal className="flex flex-wrap gap-3 pt-4">
                {[
                  t.hero.badges.confidential,
                  t.hero.badges.online,
                  t.hero.badges.languages,
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card"
                  >
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>

              <div data-reveal className="pt-4">
                <Link href="/about" className="btn-primary">
                  {t.hero.learnMore}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
