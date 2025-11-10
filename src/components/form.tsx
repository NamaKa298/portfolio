"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { formSchema } from "@/lib/schemas/contact.schema";
import { Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Calendar } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { ArrowUpRightIcon } from 'lucide-react';

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const t = useTranslations('contact');

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log('🔄 Données du formulaire:', data);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('✅ Email envoyé avec succès!');
        form.reset();
      } else {
        console.error('❌ Erreur API:', result.error);
      }
    } catch (error) {
      console.error('💥 Erreur réseau:', error);
    }
  }

  return (
    <div>
      <h2 className="text-4xl lg:text-6xl xl:text-7xl text-center font-normal px-2 mx:px-0 mb-3 md:mb-4 lg:mb-5 xl:mb-10 max-w-7xl mx-auto">
        {t('titlehero')}
      </h2>
      <div className="w-full max-w-7xl flex flex-row gap-4">
        <div className="w-1/2 flex-1">
          <Card className="flex flex-col h-full">
            <CardHeader className="text-xl flex-grow">
              <CardTitle className="text-5xl pb-5 font-nohemi">
                {t('title')}
              </CardTitle>
              <CardDescription className="text-xl">
                {t('description')}
              </CardDescription>

              <div className="flex flex-col justify-between h-full mt-auto items-end">
                <div className="flex flex-col text-center mt-9 w-full">
                  <p className="text-lg font-semibold">{t('callTitle')}</p>
                  <p className="text-lg mb-6">{t('callDescription')} </p>
                  <Button
                    variant="default"
                    className="flex font-light items-center justify-center size-lg sm:h-11 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-[#A9AAAB] to-[#FAFAFA] px-8 py-5 hover:scale-105 transition-transform duration-300 custom-drop-shadow ButtonShadow"
                    onClick={() =>
                      window.open(
                        'https://calendly.com/marion-saint-martin_pro/30min',
                        '_blank'
                      )
                    }
                  >
                    <Calendar className="!h-6 !w-6" />
                    {t('callButton')}
                  </Button>
                </div>
                <div className="flex flex-row gap-4 justify-between w-full">
                  <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-primary/50"
                    href="https://github.com/NamaKa298"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github Profile"
                  >
                    <FaGithub className="h-8 w-8" />
                    <div className="flex flex-row">
                      Github <ArrowUpRightIcon />
                    </div>
                  </a>
                  <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-primary/50"
                    href="https://www.linkedin.com/in/marionsaint-martin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="h-8 w-8" />
                    <div className="flex flex-row">
                      LinkedIn <ArrowUpRightIcon />
                    </div>
                  </a>
                  <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-primary/50"
                    href="https://x.com/marion_st_m"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                  >
                    <FaXTwitter className="h-8 w-8" />
                    <div className="flex flex-row">
                      Twitter <ArrowUpRightIcon />
                    </div>
                  </a>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
        <div className="w-1/2 flex-1">
          <Card className="placeholder:p-2 h-full">
            <form
              className="p-6"
              id="form"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FieldGroup>
                <div className="flex flex-row gap-4">
                  <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="form-name">
                          {t('nameLabel')}
                        </FieldLabel>
                        <Input
                          {...field}
                          className="border border-foreground/20  text-foreground !text-lg"
                          id="form-name"
                          aria-invalid={fieldState.invalid}
                          placeholder={t('namePlaceholder')}
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="form-email">
                          {t('emailLabel')}
                        </FieldLabel>
                        <Input
                          {...field}
                          className="border border-foreground/20 !text-lg"
                          id="form-email"
                          aria-invalid={fieldState.invalid}
                          placeholder={t('emailPlaceholder')}
                          autoComplete="off"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>
                <Controller
                  name="message"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-message">
                        {t('messageLabel')}
                      </FieldLabel>
                      <InputGroupTextarea
                        {...field}
                        id="form-message"
                        placeholder={t('messagePlaceholder')}
                        rows={6}
                        className="h-auto resize-none border border-foreground/20 focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-ring !text-lg"
                        aria-invalid={fieldState.invalid}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums">
                          {field.value.length}/500 characters
                        </InputGroupText>
                      </InputGroupAddon>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </form>
            <CardFooter>
              <Field orientation="horizontal" className="justify-center">
                <Button
                  className="flex font-light items-center justify-center size-lg sm:h-11 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-[#A9AAAB] to-[#FAFAFA] px-8 py-5 hover:scale-105 transition-transform duration-300 custom-drop-shadow ButtonShadow"
                  type="submit"
                  form="form"
                >
                  {t('submit')}
                  <Send className="!h-6 !w-6" />
                </Button>
              </Field>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
