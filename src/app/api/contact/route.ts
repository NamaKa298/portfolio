// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  console.log('🔵 API appelée');
  
  try {
    const { name, email, message } = await request.json();
    console.log('📨 Données:', { name, email });

    const displayName = name?.trim() || email.split('@')[0];

    // Email 1 : Pour VOUS
    console.log('1️⃣ Envoi email notification...');
    const result1 = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['marion.saint-martin_pro@protonmail.com'],
      subject: `Message de ${displayName}`,
      html: '<p>Notification</p>'
    });
    console.log('✅ Email 1 résultat:', result1);

    // Email 2 : TEST TRÈS SIMPLE
    console.log('2️⃣ Envoi email confirmation...');
    console.log('📧 Email destination:', email);
    
    const result2 = await resend.emails.send({
      from: 'Test Confirmation <onboarding@resend.dev>',
      to: [email],
      subject: 'Test Confirmation',
      text: 'Ceci est un test',
    });
    
    console.log('✅ Email 2 résultat:', result2);
    console.log('🎯 Les deux emails envoyés');

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('💥 ERREUR CAPTURÉE:', error);
    // CORRECTION ICI :
    return NextResponse.json(
      { error: "Erreur lors de l'envoi" }, 
      { status: 500 }
    );
  }
}