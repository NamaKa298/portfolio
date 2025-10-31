import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.error('RESEND_API_KEY manquante');
}
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const getDisplayName = () => {
      if (name?.trim()) return name.trim();
      return email.split('@')[0];
    };

    const displayName = getDisplayName();

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['marion.saint-martin_pro@protonmail.com'],
      subject: `Nouveau message de ${displayName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333;">Nouveau message de contact</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>👤 Nom :</strong> ${displayName}</p>
            <p><strong>📧 Email :</strong> ${email}</p>
            <p><strong>💬 Message :</strong></p>
            <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #3B82F6;">
              ${message}
              </p>
              </div>
              </div>
              `,
    });

    await resend.emails.send({
      from: 'Marion Saint-Martin <onboarding@resend.dev>',
      to: [email],
      subject: `✅ Confirmation de réception - Marion Saint-Martin`,
      html: `
    <h1>Test confirmation</h1>
    <p>Bonjour, votre message a bien été reçu.</p>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur Resend:', error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
