# Tarefas Futuras - Site Psicóloga

## Funcionalidades Solicitadas pela Cliente

### 1. Sistema de Agendamento de Consultas
**Status:** ✅ Concluído
**Prioridade:** Alta

**Implementação Realizada:**
- [x] Integração com Calendly (opção escolhida)
- [x] Calendário interativo para visualizar horários disponíveis
- [x] Seleção de data e hora para agendamento
- [x] Formulário de dados do paciente (via Calendly)
- [x] Confirmação de agendamento por email (via Calendly)
- [x] Sincronização com Google Calendar
- [x] Página de agendamento com design responsivo

**Detalhes:**
- Link do Calendly: https://calendly.com/madualvesfr/30min
- Widget embutido na página /schedule
- Duração: 30 minutos
- Fuso horário: Central European Time (CET)

---

### 2. Sistema de Pagamento
**Status:** Pendente
**Prioridade:** Alta

**Requisitos:**
- [ ] Integração com gateway de pagamento
- [ ] Pagamento antes ou depois da consulta?
- [ ] Opções de pagamento (cartão, transferência, etc.)
- [ ] Emissão de recibo/fatura
- [ ] Gerenciamento de pagamentos recebidos

**Opções de Implementação:**
1. Stripe (internacional, aceita várias moedas)
2. PayPal
3. Transferência bancária manual

**Considerações:**
- Definir valor da consulta
- Política de cancelamento/reembolso
- Moedas aceitas (EUR, USD, BRL?)

---

## Outras Melhorias Sugeridas

### 3. Área do Paciente (Futuro)
- [ ] Login/cadastro de pacientes
- [ ] Histórico de consultas
- [ ] Histórico de pagamentos
- [ ] Documentos compartilhados

### 4. Painel Administrativo (Futuro)
- [ ] Dashboard para a psicóloga
- [ ] Gerenciar agenda
- [ ] Ver pagamentos
- [ ] Gerenciar pacientes

### 5. Blog Funcional (Futuro)
- [ ] Sistema de posts
- [ ] Categorias
- [ ] Busca

---

## Perguntas para a Cliente

1. ~~**Agendamento:**~~ ✅ Resolvido com Calendly

2. **Pagamento:**
   - Qual o valor da consulta?
   - Pagamento deve ser feito antes ou depois da consulta?
   - Aceita quais formas de pagamento?
   - Qual a política de cancelamento?

3. **Geral:**
   - Precisa de área de login para pacientes?
   - Quer receber notificações de novos agendamentos? (já configurado no Calendly)

---

## Notas Técnicas

**Stack Atual:**
- Next.js 14
- React 18
- Tailwind CSS 4
- Framer Motion
- TypeScript

**Para Sistema de Pagamento será necessário:**
- Conta no gateway de pagamento (Stripe/PayPal)
- Configuração de webhook para confirmação
- Página de checkout

**Integrações Ativas:**
- Calendly (agendamento)
- Google Calendar (sincronização de agenda)

---

## Histórico de Atualizações

| Data | Alteração |
|------|-----------|
| 28/12/2024 | Documento criado |
| 28/12/2024 | Sistema de agendamento implementado com Calendly |

---

*Última atualização: 28/12/2024*
