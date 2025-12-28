# Tarefas Futuras - Site Psicóloga

## Funcionalidades Solicitadas pela Cliente

### 1. Sistema de Agendamento de Consultas
**Status:** Pendente
**Prioridade:** Alta

**Requisitos:**
- [ ] Calendário interativo para visualizar horários disponíveis
- [ ] Seleção de data e hora para agendamento
- [ ] Formulário de dados do paciente (nome, email, telefone)
- [ ] Confirmação de agendamento por email
- [ ] Painel para a psicóloga gerenciar sua agenda
- [ ] Opção de cancelar/remarcar consulta
- [ ] Lembretes automáticos por email (24h antes)

**Opções de Implementação:**
1. Integração com Calendly (mais simples)
2. Integração com Google Calendar API
3. Sistema próprio com banco de dados

**Considerações:**
- Definir duração padrão das consultas (50 min)
- Definir horários de atendimento
- Fuso horário (Espanha - CET)

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

1. **Agendamento:**
   - Prefere usar uma ferramenta pronta (Calendly) ou sistema próprio?
   - Quais dias e horários está disponível para atendimento?
   - Consulta tem duração fixa de 50 minutos?

2. **Pagamento:**
   - Qual o valor da consulta?
   - Pagamento deve ser feito antes ou depois da consulta?
   - Aceita quais formas de pagamento?
   - Qual a política de cancelamento?

3. **Geral:**
   - Precisa de área de login para pacientes?
   - Quer receber notificações de novos agendamentos?

---

## Notas Técnicas

**Stack Atual:**
- Next.js 14
- React 18
- Tailwind CSS 4
- Framer Motion
- TypeScript

**Para Agendamento/Pagamento será necessário:**
- Backend (API Routes do Next.js ou serviço externo)
- Banco de dados (se sistema próprio)
- Serviço de email (para confirmações)
- Conta no gateway de pagamento

---

*Última atualização: 28/12/2024*
