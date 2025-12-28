"use client";

import { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AgendamentoPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
              {t.schedulePage.badge}
            </p>
            <h1 className="heading-1 text-text-dark mb-6">
              {t.schedulePage.title}
            </h1>
            <p className="text-body max-w-2xl mx-auto">{t.schedulePage.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Card container */}
            <div className="bg-white rounded-3xl shadow-xl border border-secondary-dark overflow-hidden">
              {/* Header do card */}
              <div className="bg-primary px-6 py-4 md:px-8 md:py-5">
                <div className="flex items-center justify-center gap-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <h2 className="text-white font-heading text-xl md:text-2xl font-semibold">
                    {t.schedulePage.calendarHeader}
                  </h2>
                </div>
              </div>

              {/* Calendly widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/madualvesfr/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=3d3d3d&primary_color=6b5b95"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-2 text-text-dark text-center mb-10">
              {t.schedulePage.info.title}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-text-dark mb-2">
                  {t.schedulePage.info.duration.title}
                </h3>
                <p className="text-text-light text-sm">
                  {t.schedulePage.info.duration.description}
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-text-dark mb-2">
                  {t.schedulePage.info.frequency.title}
                </h3>
                <p className="text-text-light text-sm">
                  {t.schedulePage.info.frequency.description}
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
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
                <h3 className="font-heading font-semibold text-text-dark mb-2">
                  {t.schedulePage.info.timezone.title}
                </h3>
                <p className="text-text-light text-sm">
                  {t.schedulePage.info.timezone.description}
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
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
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-text-dark mb-2">
                  {t.schedulePage.info.platform.title}
                </h3>
                <p className="text-text-light text-sm">
                  {t.schedulePage.info.platform.description}
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
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
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-text-dark mb-2">
                  {t.schedulePage.info.languages.title}
                </h3>
                <p className="text-text-light text-sm">
                  {t.schedulePage.info.languages.description}
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-text-dark mb-2">
                  {t.schedulePage.info.confidentiality.title}
                </h3>
                <p className="text-text-light text-sm">
                  {t.schedulePage.info.confidentiality.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-2 text-text-dark mb-4">
              {t.schedulePage.faqSection.title}
            </h2>
            <p className="text-body mb-8">{t.schedulePage.faqSection.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/faq" className="btn-secondary">
                {t.schedulePage.faqSection.faqButton}
              </Link>
              <Link href="/contact" className="btn-primary">
                {t.schedulePage.faqSection.contactButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
