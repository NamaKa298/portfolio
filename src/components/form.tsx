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
import {
  Card,
  CardContent,
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
      <div>
        <Card className="w-full max-w-7xl border border-foreground/30 bg-transparent flex flex-row rounded-xl">
          <CardContent className="w-1/2 border border-foreground/30 p-2 m-2 rounded-xl flex flex-col">
            <CardHeader className="text-4xl flex-grow">
              <CardTitle className="text-5xl pb-5 font-nohemi">
                {t('title')}
              </CardTitle>
              <CardDescription className="text-xl">
                {t('description')}
              </CardDescription>
              <div className="flex flex-row justify-between h-full mt-auto gap-5 items-end">
                <a
                  href="https://github.com/NamaKa298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="flex items-center justify-center size-lg sm:h-11 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-[#A9AAAB] to-[#FAFAFA] hover:scale-105 rounded-xl p-3 w-full">
                    <FaGithub /> Github
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/marionsaint-martin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="flex items-center justify-center size-lg sm:h-11 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-[#A9AAAB] to-[#FAFAFA] hover:scale-105 rounded-xl p-3 w-full">
                    <FaLinkedin /> LinkedIn
                  </Button>
                </a>
                <a
                  href="https://x.com/marion_st_m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="flex items-center justify-center size-lg sm:h-11 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-[#A9AAAB] to-[#FAFAFA] hover:scale-105 rounded-xl p-3 w-full">
                    <FaXTwitter /> Twitter
                  </Button>
                </a>
              </div>
            </CardHeader>
          </CardContent>
          <CardContent className="w-1/2 p-2 pt-4">
            <form id="form" onSubmit={form.handleSubmit(onSubmit)}>
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
                          className="border border-foreground/30  text-foreground !text-lg rounded-xl"
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
                          className="border border-foreground/30 !text-lg rounded-xl"
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
                        className="h-auto rounded-xl resize-none border border-foreground/30 focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-ring !text-lg"
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
                  className="items-center justify-center size-lg sm:h-11 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-[#A9AAAB] to-[#FAFAFA] rounded-xl px-8 py-5 hover:scale-105"
                  type="submit"
                  form="form"
                >
                  {t('submit')}
                  <Send />
                </Button>
              </Field>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
