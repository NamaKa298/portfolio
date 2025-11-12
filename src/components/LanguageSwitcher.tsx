"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (checked: boolean) => {
    const newLocale = checked ? "en" : "fr";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-2 h-10">
      <Switch
        id="language_mode"
        aria-label="Language switcher"
        aria-labelledby="language_label"
        checked={locale === 'en'}
        onCheckedChange={changeLanguage}
      />
      <Label id="language_label" htmlFor="language_mode">
        fr / en
      </Label>
    </div>
  );
}
