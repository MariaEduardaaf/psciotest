"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const requirementIcons = [
  <svg
    key="1"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>,
  <svg
    key="2"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
    />
  </svg>,
  <svg
    key="3"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>,
  <svg
    key="4"
    className="w-6 h-6"
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
  </svg>,
];

export default function ComoFuncionaPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
              {t.howItWorks.badge}
            </p>
            <h1 className="heading-1 text-text-dark mb-6">
              {t.howItWorksPage.title}
            </h1>
            <p className="text-body">{t.howItWorksPage.description}</p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-2 text-text-dark text-center mb-16">
            {t.howItWorksPage.stepsTitle}
          </h2>

          <div className="max-w-4xl mx-auto">
            {t.howItWorksPage.steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 pb-12">
                {/* Line */}
                {index < t.howItWorksPage.steps.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-secondary-dark" />
                )}

                {/* Number */}
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-heading font-semibold text-lg flex-shrink-0 relative z-10">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-grow pt-1">
                  <h3 className="font-heading text-xl font-semibold text-text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 text-text-dark mb-4">
              {t.howItWorksPage.requirementsTitle}
            </h2>
            <p className="text-body">
              {t.howItWorksPage.requirementsDescription}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {t.howItWorksPage.requirements.map((req, index) => (
              <div
                key={req.title}
                className="bg-white p-6 rounded-2xl text-center shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  {requirementIcons[index]}
                </div>
                <h3 className="font-heading font-semibold text-text-dark mb-2">
                  {req.title}
                </h3>
                <p className="text-text-light text-sm">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 text-text-dark mb-4">
              {t.howItWorksPage.platformsTitle}
            </h2>
            <p className="text-body mb-8">
              {t.howItWorksPage.platformsDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 px-6 py-4 bg-secondary rounded-xl">
                <svg
                  className="w-8 h-8 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h15a3 3 0 003-3v-9a3 3 0 00-3-3h-15zm0 1.5h15a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 16.5v-9A1.5 1.5 0 014.5 6z" />
                </svg>
                <span className="font-medium text-text">Zoom</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-secondary rounded-xl">
                <svg
                  className="w-8 h-8 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <span className="font-medium text-text">Google Meet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="heading-2 text-text-dark mb-4">
                  {t.howItWorksPage.securityTitle}
                </h2>
                <p className="text-body mb-6">
                  {t.howItWorksPage.securityDescription}
                </p>
                <ul className="space-y-3">
                  {t.howItWorksPage.securityItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-text-light"
                    >
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-6">
            {t.servicesPageFull.cta.title}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t.servicesPageFull.cta.description}
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
