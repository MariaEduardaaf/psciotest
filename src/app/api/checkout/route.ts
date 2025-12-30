import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  console.log("=== CHECKOUT API CHAMADA ===");

  try {
    const body = await request.json();
    const { date, time, name, email, phone } = body;

    console.log("Dados recebidos:", { date, time, name, email, phone });

    // Validate required fields
    if (!date || !time || !name || !email) {
      console.log("ERRO: Campos obrigatórios faltando");
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    console.log("Criando sessão Stripe...");
    console.log("STRIPE_SECRET_KEY existe:", !!process.env.STRIPE_SECRET_KEY);

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: process.env.CONSULTATION_CURRENCY || "eur",
            product_data: {
              name: "Consulta Psicológica Online",
              description: `Agendamento para ${date} às ${time}`,
            },
            unit_amount: parseInt(process.env.CONSULTATION_PRICE || "5000"),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${request.headers.get("origin")}/schedule/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("origin")}/schedule?canceled=true`,
      customer_email: email,
      metadata: {
        date,
        time,
        name,
        email,
        phone: phone || "",
      },
    });

    console.log("Sessão criada com sucesso:", session.id);
    console.log("URL do checkout:", session.url);

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error("=== ERRO NO STRIPE ===");
    console.error("Tipo:", error.type);
    console.error("Mensagem:", error.message);
    console.error("Código:", error.code);
    console.error("Erro completo:", error);

    return NextResponse.json(
      { error: error.message || "Erro ao criar sessão de pagamento" },
      { status: 500 }
    );
  }
}
