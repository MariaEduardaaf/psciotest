"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";

const benefitIcons: Record<string, string> = {
  comfort: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  flexibility: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  noBorders: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  privacy: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  timeSaving: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  effectiveness: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
};

export default function WhyOnline() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal({ animation: "fadeUp", duration: 0.8 });
  const gridRef = useScrollReveal({ animation: "fadeUp", duration: 0.8, delay: 0.15, stagger: 0.1 });

  const benefitKeys = ["comfort", "flexibility", "noBorders", "privacy", "timeSaving", "effectiveness"] as const;

  const benefits = benefitKeys.map((key) => ({
    key,
    icon: benefitIcons[key],
    title: t.whyOnline.benefits[key].title,
    description: t.whyOnline.benefits[key].description,
  }));

  return (
    <section className="section-padding bg-dark-surface relative overflow-hidden bg-noise">
      {/* Background */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
            {t.whyOnline.badge}
          </p>
          <h2 className="heading-2 text-white/90 mb-6">{t.whyOnline.title}</h2>
          <p className="text-body">{t.whyOnline.description}</p>
        </div>

        {/* Benefits Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.key} data-reveal>
              <GlassCard className="p-7 h-full group" tiltMax={8}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-500">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={benefit.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white/90 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
