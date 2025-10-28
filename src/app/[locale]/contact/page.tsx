import React from 'react';
import { useTranslations } from 'next-intl';
import { ContactForm } from '@/components/form';

export default function ContactPage() {
  const t = useTranslations('contactpage');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="text-lg mt-2">{t('description')}</p>
      <ContactForm />
    </div>
  );
}
