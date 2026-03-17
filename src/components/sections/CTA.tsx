"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

export default function CTA() {
  const { t } = useLanguage();
  const contentRef = useScrollReveal({ animation: "scaleIn", duration: 0.9 });
  const orbLeftRef = useParallax({ speed: -0.1 });
  const orbRightRef = useParallax({ speed: 0.15 });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

      {/* Animated orbs */}
      <div
        ref={orbLeftRef}
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[60px]"
      />
      <div
        ref={orbRightRef}
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[80px]"
      />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/3 rounded-full blur-[60px] animate-pulse-slow" />

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise" />

      <div className="container-custom relative z-10">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center">
          <h2 data-reveal className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white/95 mb-6 leading-tight">
            {t.cta.title}
          </h2>
          <p data-reveal className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.cta.description}
          </p>
          <div data-reveal className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-soft font-medium transition-all duration-400 hover:bg-secondary hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 text-center"
            >
              {t.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
