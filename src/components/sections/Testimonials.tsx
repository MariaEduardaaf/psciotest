"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Testimonials() {
  const { t } = useLanguage();
  const headerRef = useScrollReveal({ animation: "fadeUp", duration: 0.8 });
  const gridRef = useScrollReveal({ animation: "fadeUp", duration: 0.8, delay: 0.2, stagger: 0.15 });

  const testimonials = t.testimonials.items || [];

  return (
    <section className="section-padding bg-dark relative overflow-hidden bg-noise">
      {/* Background elements */}
      <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-accent/4 rounded-full blur-[80px]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">
            {t.testimonials.badge}
          </p>
          <h2 className="heading-2 text-white/90 mb-6">
            {t.testimonials.title}
          </h2>
          <p className="text-body">{t.testimonials.description}</p>
        </div>

        {/* Testimonials Grid */}
        <div ref={gridRef} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(
            (
              testimonial: { text: string; author: string; location: string },
              index: number,
            ) => (
              <div key={index} data-reveal>
                <GlassCard className="p-8 h-full" tiltMax={8}>
                  {/* Quote icon */}
                  <div className="mb-6">
                    <svg
                      className="w-10 h-10 text-primary/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Text */}
                  <p className="text-white/60 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                      <span className="text-white/80 font-medium text-sm">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-white/80 text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-white/40">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ),
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/30 text-sm mt-10">
          {t.testimonials.disclaimer}
        </p>
      </div>
    </section>
  );
}
