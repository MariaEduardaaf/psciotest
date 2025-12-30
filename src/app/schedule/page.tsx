"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

// Horários disponíveis (pode ser configurado)
const AVAILABLE_TIMES = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
];

// Gerar próximos 14 dias úteis
function getNextWeekdays(count: number): Date[] {
  const dates: Date[] = [];
  const today = new Date();
  let current = new Date(today);
  current.setDate(current.getDate() + 1); // Começa amanhã

  while (dates.length < count) {
    const day = current.getDay();
    // Pula sábado (6) e domingo (0)
    if (day !== 0 && day !== 6) {
      dates.push(new Date(current));
    }
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

function formatDate(date: Date, locale: string): string {
  return date.toLocaleDateString(locale, {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function formatDateISO(date: Date): string {
  return date.toISOString().split("T")[0];
}

export default function AgendamentoPage() {
  const { t, language } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"date" | "form">("date");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "Teste Usuario",
    email: "teste@teste.com",
    phone: "123456789",
  });

  const availableDates = getNextWeekdays(14);

  const locale = language === "pt" ? "pt-BR" : language === "ru" ? "ru-RU" : "uk-UA";

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setStep("form");
    }
  };

  const handleBack = () => {
    setStep("date");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    setLoading(true);

    const payload = {
      date: formatDateISO(selectedDate),
      time: selectedTime,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    };

    console.log("=== ENVIANDO PARA API ===");
    console.log("Payload:", payload);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status);

      const data = await response.json();
      console.log("Response data:", data);

      if (data.url) {
        console.log("Redirecionando para:", data.url);
        window.location.href = data.url;
      } else {
        console.error("Erro - sem URL:", data);
        alert(data.error || "Erro ao criar sessão de pagamento");
      }
    } catch (error) {
      console.error("Erro no fetch:", error);
      alert("Erro ao processar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Textos traduzidos
  const texts = {
    pt: {
      selectDate: "Selecione uma data",
      selectTime: "Selecione um horário",
      continue: "Continuar",
      back: "Voltar",
      yourData: "Seus dados",
      name: "Nome completo",
      email: "Email",
      phone: "Telefone (opcional)",
      payAndConfirm: "Pagar e Confirmar",
      processing: "Processando...",
      selectedDateTime: "Data e horário selecionados",
      paymentInfo: "Pagamento de €50 (50% do valor da consulta)",
      securePayment: "Pagamento seguro via Stripe",
    },
    ru: {
      selectDate: "Выберите дату",
      selectTime: "Выберите время",
      continue: "Продолжить",
      back: "Назад",
      yourData: "Ваши данные",
      name: "Полное имя",
      email: "Email",
      phone: "Телефон (необязательно)",
      payAndConfirm: "Оплатить и подтвердить",
      processing: "Обработка...",
      selectedDateTime: "Выбранные дата и время",
      paymentInfo: "Оплата €50 (50% от стоимости консультации)",
      securePayment: "Безопасная оплата через Stripe",
    },
    uk: {
      selectDate: "Виберіть дату",
      selectTime: "Виберіть час",
      continue: "Продовжити",
      back: "Назад",
      yourData: "Ваші дані",
      name: "Повне ім'я",
      email: "Email",
      phone: "Телефон (необов'язково)",
      payAndConfirm: "Оплатити та підтвердити",
      processing: "Обробка...",
      selectedDateTime: "Вибрані дата та час",
      paymentInfo: "Оплата €50 (50% від вартості консультації)",
      securePayment: "Безпечна оплата через Stripe",
    },
  };

  const txt = texts[language as keyof typeof texts] || texts.pt;

  return (
    <>
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

      {/* Booking Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
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

              <div className="p-6 md:p-8">
                {step === "date" ? (
                  <>
                    {/* Seleção de Data */}
                    <div className="mb-8">
                      <h3 className="font-heading font-semibold text-text-dark mb-4">
                        {txt.selectDate}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {availableDates.map((date) => (
                          <button
                            key={formatDateISO(date)}
                            onClick={() => handleDateSelect(date)}
                            className={`p-3 rounded-xl border-2 transition-all duration-200 text-center ${
                              selectedDate && formatDateISO(selectedDate) === formatDateISO(date)
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-secondary-dark hover:border-primary/50 text-text-dark"
                            }`}
                          >
                            <span className="block text-sm font-medium">
                              {formatDate(date, locale)}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Seleção de Horário */}
                    {selectedDate && (
                      <div className="mb-8">
                        <h3 className="font-heading font-semibold text-text-dark mb-4">
                          {txt.selectTime}
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
                          {AVAILABLE_TIMES.map((time) => (
                            <button
                              key={time}
                              onClick={() => handleTimeSelect(time)}
                              className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                                selectedTime === time
                                  ? "border-primary bg-primary/10 text-primary"
                                  : "border-secondary-dark hover:border-primary/50 text-text-dark"
                              }`}
                            >
                              <span className="font-medium">{time}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Botão Continuar */}
                    {selectedDate && selectedTime && (
                      <div className="flex justify-end">
                        <button
                          onClick={handleContinue}
                          className="btn-primary"
                        >
                          {txt.continue}
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {/* Resumo da seleção */}
                    <div className="mb-6 p-4 bg-secondary/50 rounded-xl">
                      <p className="text-sm text-text-light mb-1">{txt.selectedDateTime}</p>
                      <p className="font-semibold text-text-dark">
                        {selectedDate && formatDate(selectedDate, locale)} - {selectedTime}
                      </p>
                    </div>

                    {/* Formulário */}
                    <form onSubmit={handleSubmit}>
                      <h3 className="font-heading font-semibold text-text-dark mb-4">
                        {txt.yourData}
                      </h3>

                      <div className="space-y-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-text-dark mb-1">
                            {txt.name} *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border-2 border-secondary-dark focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-dark mb-1">
                            {txt.email} *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border-2 border-secondary-dark focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-dark mb-1">
                            {txt.phone}
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border-2 border-secondary-dark focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Info de pagamento */}
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <span className="font-medium text-green-800">{txt.securePayment}</span>
                        </div>
                        <p className="text-green-700 text-sm">{txt.paymentInfo}</p>
                      </div>

                      {/* Botões */}
                      <div className="flex flex-col sm:flex-row gap-3 justify-between">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="btn-secondary"
                        >
                          {txt.back}
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loading ? txt.processing : txt.payAndConfirm}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
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
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-text-dark mb-2">
                  {language === "pt" ? "Pagamento Antecipado" : language === "ru" ? "Предоплата" : "Передоплата"}
                </h3>
                <p className="text-text-light text-sm">
                  {language === "pt"
                    ? "50% do valor (€50) pago no agendamento. Restante após a consulta."
                    : language === "ru"
                    ? "50% стоимости (€50) оплачивается при записи. Остаток после консультации."
                    : "50% вартості (€50) оплачується при записі. Решта після консультації."}
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
