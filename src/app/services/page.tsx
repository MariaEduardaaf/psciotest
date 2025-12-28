"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [
  <svg
    key="1"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>,
  <svg
    key="2"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>,
  <svg
    key="3"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>,
  <svg
    key="4"
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>,
];

export default function ServicosPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
              {t.services.badge}
            </p>
            <h1 className="heading-1 text-text-dark mb-6">
              {t.services.title}
            </h1>
            <p className="text-body">{t.services.description}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {t.servicesPageFull.services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {icons[index]}
                  </div>
                  <h2 className="heading-2 text-text-dark">{service.title}</h2>
                  <p className="text-body">{service.description}</p>
                  <div>
                    <h4 className="font-medium text-text-dark mb-3">
                      {t.servicesPageFull.topicsTitle}
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-center gap-2 text-text-light text-sm"
                        >
                          <svg
                            className="w-4 h-4 text-accent flex-shrink-0"
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
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className={`bg-secondary/50 rounded-2xl p-8 lg:p-12 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-square max-w-sm mx-auto rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-primary/30">{icons[index]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Idiomas */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 text-text-dark mb-6">
              {t.servicesPageFull.languageSection.title}
            </h2>
            <p className="text-body mb-8">
              {t.servicesPageFull.languageSection.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm">
                <span className="text-2xl">🇷🇺</span>
                <span className="font-medium text-text">
                  {t.servicesPageFull.languageSection.russian}
                </span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm">
                <span className="text-2xl">🇺🇦</span>
                <span className="font-medium text-text">
                  {t.servicesPageFull.languageSection.ukrainian}
                </span>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="inline-block bg-white text-primary px-8 py-4 rounded-soft font-medium transition-all duration-300 hover:bg-secondary hover:shadow-lg"
            >
              {t.cta.button}
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-soft font-medium transition-all duration-300 hover:bg-white hover:text-primary"
            >
              {t.servicesPageFull.cta.questions}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
