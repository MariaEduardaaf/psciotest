"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

function SuccessContent() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      title: "Agendamento Confirmado!",
      subtitle: "Seu pagamento foi processado com sucesso.",
      message: "Você receberá uma confirmação por email com os detalhes da sua consulta. A psicóloga entrará em contato pelo WhatsApp para confirmar o agendamento.",
      whatNext: "Próximos passos:",
      step1: "Verifique seu email para o recibo do pagamento",
      step2: "Aguarde o contato pelo WhatsApp para confirmação",
      step3: "Prepare-se para sua sessão no horário marcado",
      reminder: "Lembre-se: O restante do pagamento (€50) será feito após a consulta.",
      backHome: "Voltar ao Início",
      contact: "Entrar em Contato",
    },
    ru: {
      title: "Запись подтверждена!",
      subtitle: "Ваш платеж успешно обработан.",
      message: "Вы получите подтверждение по email с деталями вашей консультации. Психолог свяжется с вами через WhatsApp для подтверждения записи.",
      whatNext: "Следующие шаги:",
      step1: "Проверьте email для получения квитанции об оплате",
      step2: "Ожидайте связи через WhatsApp для подтверждения",
      step3: "Подготовьтесь к сессии в назначенное время",
      reminder: "Помните: Оставшаяся часть оплаты (€50) будет произведена после консультации.",
      backHome: "На главную",
      contact: "Связаться",
    },
    uk: {
      title: "Запис підтверджено!",
      subtitle: "Ваш платіж успішно оброблено.",
      message: "Ви отримаєте підтвердження на email з деталями вашої консультації. Психолог зв'яжеться з вами через WhatsApp для підтвердження запису.",
      whatNext: "Наступні кроки:",
      step1: "Перевірте email для отримання квитанції про оплату",
      step2: "Очікуйте зв'язку через WhatsApp для підтвердження",
      step3: "Підготуйтеся до сесії в призначений час",
      reminder: "Пам'ятайте: Решта оплати (€50) буде здійснена після консультації.",
      backHome: "На головну",
      contact: "Зв'язатися",
    },
  };

  const txt = texts[language as keyof typeof texts] || texts.pt;

  return (
    <section className="min-h-screen bg-gradient-to-b from-secondary to-white py-16 md:py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* Success Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
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
            </div>

            <h1 className="heading-1 text-text-dark mb-4">{txt.title}</h1>
            <p className="text-xl text-primary font-medium mb-6">{txt.subtitle}</p>
            <p className="text-body mb-8">{txt.message}</p>

            {/* Next Steps */}
            <div className="bg-secondary/50 rounded-2xl p-6 mb-8 text-left">
              <h3 className="font-heading font-semibold text-text-dark mb-4">
                {txt.whatNext}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                    1
                  </span>
                  <span className="text-text-light">{txt.step1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                    2
                  </span>
                  <span className="text-text-light">{txt.step2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium">
                    3
                  </span>
                  <span className="text-text-light">{txt.step3}</span>
                </li>
              </ul>
            </div>

            {/* Reminder */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <div className="flex items-center gap-2 justify-center">
                <svg
                  className="w-5 h-5 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-amber-800 text-sm">{txt.reminder}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-secondary">
                {txt.backHome}
              </Link>
              <Link href="/contact" className="btn-primary">
                {txt.contact}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LoadingState() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-secondary to-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-text-dark font-medium">Carregando...</p>
      </div>
    </section>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <SuccessContent />
    </Suspense>
  );
}
