import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Love | Psicóloga Online",
  description:
    "Psicóloga especializada em atendimento online em russo e ucraniano. Terapia individual e de casal com atendimento personalizado de qualquer lugar do mundo.",
  keywords: [
    "psicóloga online",
    "terapia online",
    "psicólogo russo",
    "psicólogo ucraniano",
    "terapia em russo",
    "психолог онлайн",
  ],
  authors: [{ name: "Love" }],
  openGraph: {
    title: "Love | Psicóloga Online",
    description:
      "Psicóloga especializada em atendimento online em russo e ucraniano.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
