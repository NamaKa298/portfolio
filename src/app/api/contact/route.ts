// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { config } from '@/lib/config';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log('🔵 API appelée');

  try {
    if (!config.contactEmail) {
      throw new Error('CONTACT_EMAIL non configurée');
    }

    const { name, email, message } = await request.json();
    console.log('📨 Données :', { name, email, message });

    const displayName = name?.trim() || email.split('@')[0];

    console.log('1️⃣ Envoi email notification...');
    const result1 = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [config.contactEmail],
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
    console.log('✅ Email bien envoyé :', result1);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('💥 ERREUR CAPTURÉE :', error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" },
      { status: 500 }
    );
  }
}