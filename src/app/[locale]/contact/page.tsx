'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { ContactForm } from '@/components/form';
import { Navbar } from '@/components/navbar';
import { scrollToSection } from '@/lib/scrollToSection';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <div className="max-w-screen-xl mx-auto w-full flex-col justify-center pb-10">
      <Navbar scrollToSection={scrollToSection} />
        <section
          id="contact"
          className="flex justify-center flex-col sm:pt-56 sm:pb-56"
        >
          <h1 className="slide-up text-5xl lg:text-6xl xl:text-7xl text-center font-normal px-2 mx:px-0 mb-3 md:mb-4 lg:mb-5 xl:mb-6 max-w-7xl mx-auto">
            {t('titlehero')}
          </h1>
          <ContactForm />
        </section>
    </div>
  );
}
