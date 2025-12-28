# BRAIN - Website Profissional para Psicóloga

> Documento central de inteligência do projeto

---

## 1. INFORMACOES DO PROJETO

### 1.1 Dados da Profissional
| Campo | Valor |
|-------|-------|
| Nome | Love (nome provisório - nome russo a definir) |
| Localização | Altea, Espanha |
| Modalidade | 100% Online |
| CRP/Registro | A definir |
| Idiomas de atendimento | Russo e Ucraniano |
| Idioma do site | Português (inicial) - depois Russo/Ucraniano |

### 1.2 Objetivo
Criar um website profissional, elegante e funcional para uma psicóloga que atende exclusivamente online, transmitindo credibilidade, acolhimento e profissionalismo internacional.

### 1.3 Público-Alvo
- Pessoas buscando atendimento psicológico online
- Expatriados e pessoas que vivem no exterior
- Falantes de russo buscando terapia no idioma nativo
- Pacientes que preferem a conveniência do atendimento remoto

### 1.4 Valores a Transmitir
- Profissionalismo e credibilidade
- Acolhimento e empatia
- Confidencialidade e ética
- Modernidade e acessibilidade global
- Flexibilidade do atendimento online

---

## 2. IDENTIDADE VISUAL

### 2.1 Paleta de Cores - ELEGANCIA (Escolhida)

```
Primária:     #6B5B95 (Lavanda - tranquilidade, sofisticação)
Secundária:   #F7F3F0 (Creme - suavidade, acolhimento)
Acento:       #C9A86C (Dourado - profissionalismo, confiança)
Texto:        #3D3D3D (Cinza escuro - legibilidade)
Background:   #FFFFFF (Branco - limpeza, clareza)
```

### 2.2 Variações da Paleta
```
Lavanda clara:    #8B7FB5 (hover states)
Lavanda escura:   #524175 (textos destaque)
Creme escuro:     #EBE5DF (bordas, divisores)
Dourado claro:    #D4BC8A (hover em CTAs)
Dourado escuro:   #A8894F (textos especiais)
```

### 2.3 Tipografia

**Títulos:** Cormorant Garamond
- Elegante, clássica, sofisticada
- Peso: 500, 600, 700

**Corpo:** Inter
- Moderna, altamente legível
- Peso: 400, 500, 600

**Alternativa para destaques:** Playfair Display
- Para citações ou elementos especiais

### 2.4 Elementos Visuais
- Formas orgânicas e suaves
- Linhas curvas e delicadas
- Ícones minimalistas em linha fina
- Fotos com tratamento suave (leve dessaturação)
- Espaços em branco generosos
- Sombras sutis e elegantes
- Bordas arredondadas (8-16px)

---

## 3. ESTRUTURA DE PÁGINAS

### 3.1 Páginas Principais

| Página | Descrição | Prioridade |
|--------|-----------|------------|
| Home | Landing page com apresentação geral | Alta |
| Sobre | Biografia, formação, abordagem terapêutica | Alta |
| Serviços | Lista de especialidades e tipos de atendimento | Alta |
| Blog/Artigos | Conteúdo educativo sobre saúde mental | Média |
| Contato | Formulário, WhatsApp | Alta |
| Agendamento | Sistema de marcação de consultas online | Alta |
| FAQ | Perguntas frequentes sobre terapia online | Média |

### 3.2 Detalhamento por Página

#### HOME
- Hero section com foto profissional e chamada principal
- Destaque: "Terapia Online - Atendimento de qualquer lugar do mundo"
- Breve apresentação (2-3 frases)
- Cards de serviços principais
- Seção "Por que terapia online?"
- Seção de diferenciais
- CTA para agendamento
- Depoimentos em destaque (anônimos)
- Seção de blog (últimos artigos)

#### SOBRE
- Foto profissional grande
- História e jornada profissional
- Formação acadêmica e especializações
- Abordagem terapêutica utilizada
- Certificações e registros profissionais
- Filosofia de trabalho
- Idiomas de atendimento

#### SERVICOS (a definir com mais detalhes)
Sugestões iniciais:
- Terapia Individual Online
- Terapia de Casal Online
- Orientação Profissional
- Acompanhamento para Expatriados
- Sessões em múltiplos idiomas

#### CONTATO
- Formulário de contato
- Botão WhatsApp flutuante
- Fuso horário de atendimento (CET - Espanha)
- Horários disponíveis
- Redes sociais
- Email profissional

#### COMO FUNCIONA (Terapia Online)
- Passo a passo do processo
- Plataformas utilizadas (Zoom, Google Meet, etc.)
- Requisitos técnicos
- Privacidade e segurança
- Primeira sessão gratuita? (a definir)

---

## 4. FUNCIONALIDADES TÉCNICAS

### 4.1 Essenciais
- [ ] Design responsivo (mobile-first)
- [ ] SEO otimizado (multilíngue)
- [ ] Performance (Core Web Vitals)
- [ ] Formulário de contato funcional
- [ ] Integração WhatsApp
- [ ] SSL/HTTPS
- [ ] Analytics
- [ ] Suporte a múltiplos idiomas (futuro)

### 4.2 Avançadas
- [ ] Sistema de agendamento online (Calendly ou Cal.com)
- [ ] Blog com CMS
- [ ] Chat online
- [ ] Newsletter
- [ ] Integração com redes sociais
- [ ] Seletor de idioma

### 4.3 Acessibilidade
- [ ] WCAG 2.1 AA compliance
- [ ] Alto contraste
- [ ] Navegação por teclado
- [ ] Alt text em imagens
- [ ] Textos legíveis

---

## 5. STACK TECNOLÓGICA

### 5.1 Stack Escolhida - Next.js

```
Frontend:     Next.js 14 (App Router)
Styling:      Tailwind CSS + Framer Motion
UI:           shadcn/ui
Forms:        React Hook Form + Zod
Email:        Resend
Agendamento:  Cal.com ou Calendly (embed)
CMS:          MDX (simples) ou Sanity (se precisar de mais)
Deploy:       Vercel
Analytics:    Google Analytics 4
Fontes:       Google Fonts (Cormorant Garamond + Inter)
```

### 5.2 Estrutura de Pastas

```
/
├── app/
│   ├── page.tsx              # Home
│   ├── sobre/page.tsx        # Sobre
│   ├── servicos/page.tsx     # Serviços
│   ├── blog/
│   │   ├── page.tsx          # Lista de artigos
│   │   └── [slug]/page.tsx   # Artigo individual
│   ├── contato/page.tsx      # Contato
│   ├── agendamento/page.tsx  # Agendamento
│   ├── faq/page.tsx          # FAQ
│   ├── layout.tsx            # Layout global
│   └── globals.css           # Estilos globais
├── components/
│   ├── ui/                   # Componentes shadcn
│   ├── layout/               # Header, Footer, Nav
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── sections/             # Seções de páginas
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── forms/                # Formulários
│   │   └── ContactForm.tsx
│   └── common/               # Componentes reutilizáveis
│       ├── Button.tsx
│       ├── Card.tsx
│       └── WhatsAppButton.tsx
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── content/
│   └── blog/                 # Artigos em MDX
├── public/
│   └── images/
├── styles/
│   └── fonts.ts              # Configuração de fontes
└── types/
    └── index.ts
```

---

## 6. CONTEÚDO NECESSÁRIO

### 6.1 Textos (A coletar)
- [ ] Bio completa da Love
- [ ] Descrição de cada serviço oferecido
- [ ] FAQ (10-15 perguntas sobre terapia online)
- [ ] Textos para meta tags SEO
- [ ] Termos de uso e privacidade

### 6.2 Imagens (A coletar)
- [ ] Foto profissional principal (hero)
- [ ] Foto para página Sobre
- [ ] Fotos adicionais (opcional)
- [ ] Imagens decorativas (usaremos stock/ilustrações)

### 6.3 Informações (A coletar)
- [ ] Nome completo
- [ ] Registro profissional (país de origem)
- [ ] Telefone/WhatsApp
- [ ] Email profissional
- [ ] Horários de atendimento
- [ ] Redes sociais (Instagram, LinkedIn)
- [ ] Valores das sessões (opcional mostrar)
- [ ] Formas de pagamento aceitas

---

## 7. SEO E MARKETING

### 7.1 Palavras-chave Principais
- Psicóloga online
- Terapia online em russo
- Psicólogo para expatriados
- Terapia online internacional
- Психолог онлайн (russo)
- Online therapy

### 7.2 Estratégias SEO
- URLs amigáveis
- Meta descriptions otimizadas
- Heading hierarchy correta
- Schema markup (Person, ProfessionalService)
- Sitemap XML
- Robots.txt
- Open Graph tags

### 7.3 Integrações Marketing
- Google Business Profile
- Instagram
- LinkedIn
- Facebook (opcional)

---

## 8. CRONOGRAMA DE DESENVOLVIMENTO

### Fase 1 - Setup e Estrutura
- [ ] Inicializar projeto Next.js
- [ ] Configurar Tailwind CSS com cores da paleta
- [ ] Instalar e configurar shadcn/ui
- [ ] Configurar fontes (Cormorant Garamond + Inter)
- [ ] Criar estrutura de pastas
- [ ] Configurar ESLint e Prettier

### Fase 2 - Layout Global
- [ ] Criar Header responsivo
- [ ] Criar Footer
- [ ] Criar navegação mobile
- [ ] Botão WhatsApp flutuante

### Fase 3 - Páginas Principais
- [ ] Página Home completa
- [ ] Página Sobre
- [ ] Página Serviços
- [ ] Página Contato com formulário
- [ ] Página FAQ

### Fase 4 - Funcionalidades
- [ ] Formulário de contato funcional
- [ ] Integração com email (Resend)
- [ ] Sistema de agendamento
- [ ] Animações com Framer Motion

### Fase 5 - Blog e Conteúdo
- [ ] Sistema de blog com MDX
- [ ] Página de listagem de artigos
- [ ] Template de artigo

### Fase 6 - Otimização e Deploy
- [ ] SEO técnico
- [ ] Performance optimization
- [ ] Testes responsivos
- [ ] Deploy na Vercel
- [ ] Configurar domínio

---

## 9. DECISOES TOMADAS

| Item | Decisão | Data |
|------|---------|------|
| Nome provisório | Love | 26/12/2024 |
| Localização | Altea, Espanha | 26/12/2024 |
| Modalidade | 100% Online | 26/12/2024 |
| Paleta de cores | Elegância (Lavanda) | 26/12/2024 |
| Logo | Não tem - criar ou usar tipografia | 26/12/2024 |
| Fotos | Aguardando receber | 26/12/2024 |
| Stack | Next.js 14 + Tailwind + shadcn | 26/12/2024 |

---

## 10. DECISOES PENDENTES

| Item | Opções | Status |
|------|--------|--------|
| Nome real da psicóloga | Aguardando | Pendente |
| Serviços específicos | A definir com ela | Pendente |
| Idiomas de atendimento | Russo e Ucraniano | Definido |
| Sistema de agendamento | Calendly vs Cal.com | Pendente |
| Domínio | A definir | Pendente |
| Valores das sessões | Mostrar ou não? | Pendente |
| WhatsApp número | A definir | Pendente |

---

## 11. NOTAS E OBSERVACOES

- Site focado em atendimento 100% online
- Priorizar experiência mobile
- Botão WhatsApp sempre visível
- Cores transmitem elegância e tranquilidade
- Considerar fusos horários diferentes dos pacientes
- Destacar segurança e privacidade do atendimento online
- Possivelmente multilíngue no futuro (RU/ES/EN)
- Formulário simples (menos campos = mais conversão)
- Tempo de carregamento < 3 segundos

---

## 12. PROXIMOS PASSOS IMEDIATOS

1. **Iniciar projeto Next.js** com a configuração definida
2. **Configurar Tailwind** com a paleta Elegância
3. **Criar componentes base** (Header, Footer, Button)
4. **Desenvolver página Home** como MVP

---

## 13. INSPIRACOES E REFERENCIAS

### Estilo Visual Desejado
- Minimalista e sofisticado
- Tons lavanda e dourado
- Muito espaço em branco
- Tipografia elegante com serifa nos títulos
- Sensação de calma e profissionalismo

### Referências de Layout
- Sites de terapeutas premium
- Estética de spa/wellness de luxo
- Design editorial elegante

---

*Documento atualizado em: 26/12/2024*
*Versão: 1.1*
