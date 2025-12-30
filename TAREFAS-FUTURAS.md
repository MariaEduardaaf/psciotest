# Tarefas Futuras - Site Psicóloga

## Funcionalidades Solicitadas pela Cliente

### 1. Sistema de Agendamento com Pagamento Integrado
**Status:** ✅ Concluído
**Prioridade:** Alta

**Implementação Realizada:**
- [x] Sistema próprio de seleção de data/hora (substituiu Calendly)
- [x] Calendário interativo com próximos 14 dias úteis
- [x] Seleção de horários disponíveis (09:00 - 17:00)
- [x] Formulário de dados do paciente (nome, email, telefone)
- [x] Integração com Stripe para pagamento
- [x] Página de sucesso após pagamento
- [x] Traduções em PT, RU e UK

**Detalhes:**
- Valor da consulta: €100
- Pagamento antecipado: €50 (50%)
- Moeda: EUR
- Gateway: Stripe
- Página: /schedule
- Página de sucesso: /schedule/success

**Fluxo implementado:**
```
Cliente seleciona data/hora
         ↓
Preenche dados pessoais
         ↓
Clica em "Pagar e Confirmar"
         ↓
Redirecionado para Stripe Checkout (€50)
         ↓
Pagamento aprovado → Página de sucesso
         ↓
Stripe envia notificação para psicóloga
         ↓
Psicóloga confirma via WhatsApp
```

---

### 2. Integração com Google Calendar (Automático)
**Status:** 🔄 Pendente
**Prioridade:** Média

**Requisitos:**
- [ ] Criar credenciais no Google Cloud Console
- [ ] Configurar conta de serviço
- [ ] Compartilhar calendário com a conta de serviço
- [ ] Implementar webhook do Stripe
- [ ] Criar evento automaticamente após pagamento

**Benefício:** Quando o cliente pagar, o evento é criado automaticamente no Google Calendar da psicóloga.

---

### 3. Email Automático de Confirmação
**Status:** 🔄 Pendente
**Prioridade:** Baixa

**Requisitos:**
- [ ] Configurar serviço de email (Resend, SendGrid, etc.)
- [ ] Template de email de confirmação
- [ ] Enviar automaticamente após pagamento

**Nota:** Por enquanto, o Stripe já envia recibo automático para o cliente e notificação para a psicóloga.

---

## Outras Melhorias Sugeridas

### 4. Área do Paciente (Futuro)
- [ ] Login/cadastro de pacientes
- [ ] Histórico de consultas
- [ ] Histórico de pagamentos
- [ ] Documentos compartilhados

### 5. Painel Administrativo (Futuro)
- [ ] Dashboard para a psicóloga
- [ ] Gerenciar agenda
- [ ] Ver pagamentos
- [ ] Gerenciar pacientes

---

## Notas Técnicas

**Stack Atual:**
- Next.js 14
- React 18
- Tailwind CSS 4
- Framer Motion
- TypeScript
- Stripe SDK

**Arquivos Criados/Modificados:**
- `src/app/schedule/page.tsx` - Página de agendamento com seleção de data/hora
- `src/app/schedule/success/page.tsx` - Página de sucesso após pagamento
- `src/app/api/checkout/route.ts` - API de checkout do Stripe
- `src/lib/stripe.ts` - Configuração do Stripe
- `.env.local` - Variáveis de ambiente (chaves Stripe)

**Integrações Ativas:**
- Stripe (pagamento) ✅
- Google Calendar (pendente configuração)

**Chaves Stripe (Modo Teste):**
- Configuradas em `.env.local`
- Para produção: trocar para chaves `pk_live_` e `sk_live_`

---

## Histórico de Atualizações

| Data | Alteração |
|------|-----------|
| 28/12/2024 | Documento criado |
| 28/12/2024 | Sistema de agendamento implementado com Calendly |
| 30/12/2024 | Substituído Calendly por sistema próprio com Stripe |
| 30/12/2024 | Implementado pagamento antecipado de €50 (50%) |
| 30/12/2024 | Página de sucesso criada |
| 30/12/2024 | Traduções PT/RU/UK adicionadas |

---

*Última atualização: 30/12/2024*
