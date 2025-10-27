"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { formSchema } from "@/lib/schemas/contact.schema";
import { Send } from 'lucide-react';
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

  const t = useTranslations('form');

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    form.reset();
  }

  return (
    <Card className="w-full max-w-7xl border border-foreground/70">
      <CardHeader className="text-4xl">
        <h3>{t('title')}</h3>
        <CardDescription className="text-xl">
          {t('description')}
        </CardDescription>
      </CardHeader>
      <CardContent>
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
                      className="border border-foreground/70  text-foreground !text-lg"
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
                      className="border border-foreground/70 !text-lg"
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
                    className="min-h-24 rounded-md resize-none border border-foreground/70 focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-ring !text-lg"
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
      </CardContent>
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
    </Card>
  );
}
