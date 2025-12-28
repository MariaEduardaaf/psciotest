"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SobrePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
              {t.about.badge}
            </p>
            <h1 className="heading-1 text-text-dark mb-6">{t.about.title}</h1>
            <p className="text-body">{t.about.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden">
                <Image
                  src="/images/mama2.jpeg"
                  alt="Любовь - Psicóloga"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <div className="space-y-4 text-body">
                <p>{t.about.text1}</p>
                <p>{t.about.text2}</p>
                <p>{t.about.text3}</p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="italic text-text-light">
                  &ldquo;{t.about.quote}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="heading-2 text-text-dark text-center mb-12">
            {t.aboutPage.qualifications.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-dark mb-2">
                {t.aboutPage.qualifications.graduation.title}
              </h3>
              <p className="text-text-light text-sm">
                {t.aboutPage.qualifications.graduation.description}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-dark mb-2">
                {t.aboutPage.qualifications.specialization.title}
              </h3>
              <p className="text-text-light text-sm">
                {t.aboutPage.qualifications.specialization.description}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-text-dark mb-2">
                {t.aboutPage.qualifications.international.title}
              </h3>
              <p className="text-text-light text-sm">
                {t.aboutPage.qualifications.international.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            {t.aboutPage.cta.title}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t.aboutPage.cta.description}
          </p>
          <Link
            href="/schedule"
            className="inline-block bg-white text-primary px-8 py-4 rounded-soft font-medium transition-all duration-300 hover:bg-secondary hover:shadow-lg"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
