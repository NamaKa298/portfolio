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

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['marion.saint-martin_pro@protonmail.com'],
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333;">Nouveau message de contact</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>👤 Nom :</strong> ${name}</p>
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
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333;">Merci pour votre message !</h2>
          <p>Bonjour <strong>${name}</strong>,</p>
          <p>Je vous confirme avoir bien reçu votre message et vous remercie de l'intérêt que vous portez à mon travail.</p>
          
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px;"><strong>Votre message :</strong></p>
            <p style="background: white; padding: 10px; border-radius: 5px; margin: 0;">
              "${message}"
            </p>
          </div>

          <p>Je m'engage à vous répondre dans les <strong>48 heures</strong>.</p>

          <div style="border-top: 1px solid #e2e8f0; margin-top: 30px; padding-top: 20px;">
            <p style="color: #64748b; margin: 0;">
              Bien cordialement,<br>
              <strong style="color: #1e293b;">Marion Saint-Martin</strong><br>
              Fullstack Ingénieure
            </p>
          </div>
        </div>
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
