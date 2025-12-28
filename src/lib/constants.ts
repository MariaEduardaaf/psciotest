export const siteConfig = {
  name: "Любовь",
  title: "Love | Psicóloga Online",
  description:
    "Psicóloga especializada em atendimento online em russo e ucraniano. Terapia individual e de casal com atendimento personalizado de qualquer lugar do mundo.",
  url: "https://love-psicologa.com", // a definir
  ogImage: "/og-image.jpg",
  links: {
    whatsapp: "https://wa.me/34XXXXXXXXX", // a definir
    instagram: "https://instagram.com/love.psicologa", // a definir
    email: "contato@love-psicologa.com", // a definir
  },
  location: "Altea, Espanha",
  timezone: "Europe/Madrid",
  languages: ["Russo", "Ucraniano"],
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const services = [
  {
    id: 1,
    title: "Terapia Individual",
    description:
      "Sessões individuais personalizadas para trabalhar questões emocionais, comportamentais e de desenvolvimento pessoal.",
    icon: "user",
  },
  {
    id: 2,
    title: "Terapia de Casal",
    description:
      "Atendimento para casais que buscam melhorar a comunicação, resolver conflitos e fortalecer o relacionamento.",
    icon: "heart",
  },
  {
    id: 3,
    title: "Orientação para Expatriados",
    description:
      "Suporte especializado para pessoas que vivem fora de seu país de origem, lidando com adaptação cultural e saudades.",
    icon: "globe",
  },
  {
    id: 4,
    title: "Ansiedade e Estresse",
    description:
      "Tratamento focado em técnicas para gerenciar ansiedade, estresse e desenvolver maior equilíbrio emocional.",
    icon: "brain",
  },
];
