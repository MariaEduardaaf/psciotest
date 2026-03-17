"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";

const iconMap: Record<string, string> = {
  anxiety: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  depression: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  relationships: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  selfEsteem: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  grief: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707",
  personal: "M13 10V3L4 14h7v7l9-11h-7z",
};

export default function Services() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal({ animation: "fadeUp", duration: 0.8 });
  const gridRef = useScrollReveal({ animation: "fadeUp", duration: 0.8, delay: 0.2, stagger: 0.12 });
  const ctaRef = useScrollReveal({ animation: "fadeUp", duration: 0.6, delay: 0.4 });

  const services = [
    { id: "anxiety", ...t.services.items.anxiety },
    { id: "depression", ...t.services.items.depression },
    { id: "relationships", ...t.services.items.relationships },
    { id: "selfEsteem", ...t.services.items.selfEsteem },
    { id: "grief", ...t.services.items.grief },
    { id: "personal", ...t.services.items.personal },
  ];

  return (
    <section className="section-padding bg-dark-card relative overflow-hidden bg-noise">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
            {t.services.badge}
          </p>
          <h2 className="heading-2 text-white/90 mb-6">{t.services.title}</h2>
          <p className="text-body">{t.services.description}</p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div key={service.id} data-reveal>
              <GlassCard className="p-8 h-full group" tiltMax={10}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={iconMap[service.id]}
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-white/90 mb-3">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {service.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center mt-14">
          <Link href="/schedule" className="btn-primary">
            {t.services.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
