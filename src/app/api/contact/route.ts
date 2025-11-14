import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email et message sont requis' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'contact@votredomaine.com',
      to: ['marion.saint-martin@protonmail.com'],
      subject: `Nouveau message de ${name || 'Visiteur anonyme'}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name || 'Non spécifié'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Email envoyé avec succès', data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
