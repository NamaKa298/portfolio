import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from './ui/button';
import { ArrowUpRightIcon } from 'lucide-react';
import { ChevronsLeftRightEllipsis, User, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export const Navbar = ({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) => {
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <header
      className="px-5 sm:px-12 md:px-24 lg:px-32 xl:px-48 font-onest container mx-auto py-6"
      style={{ opacity: 1, transform: 'none' }}
    >
      <nav className="flex justify-between slide-down">
        <ul className="hidden xl:flex xl:w-full gap-6 items-center justify-between ">
          {pathname === `/${locale}/contact` && (
           <li className="duration-300 hover:duration-300">
            <a
              className="group flex gap-3"
              onClick={() => scrollToSection('about')}
              href={`/${locale}`}
            >
              <div className="text-[#71717A] duration-300 group-hover:text-white cursor:pointer">
                <Home />
              </div>
              <span>{t('home')}</span>
            </a>
          </li>
        )}
          {pathname === `/${locale}` && (
            <li className="duration-300 hover:duration-300">
            <a
              className="group flex gap-3"
              onClick={() => scrollToSection('about')}
              href="#about"
            >
              <div className="text-[#71717A] duration-300 group-hover:text-white cursor:pointer">
                <User />
              </div>
              <span>{t('about')}</span>
            </a>
          </li>
        )}
        {pathname === `/${locale}` && (
          <li className="duration-300 hover:duration-300">
            <a
              className="group flex gap-3"
              onClick={() => scrollToSection('projects')}
              href="#projects"
            >
              <div className="text-[#71717A] duration-300 group-hover:text-white">
                <ChevronsLeftRightEllipsis />
              </div>
              <span>{t('works')}</span>
            </a>
          </li>)}
          {pathname === `/${locale}` && (
          <li>
            <div className="flex flex-wrap items-center gap-2 md:flex-row w-full sm:flex-1 max-w-[10rem]">
              <Link href={`/${locale}/contact`} className="w-full">
                <Button
                  variant="default"
                  className="items-center justify-center size-lg sm:h-11 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-[#A9AAAB] to-[#FAFAFA] hover:scale-105 w-full rounded-xl"
                >
                  {t('contact')}
                  <ArrowUpRightIcon />
                </Button>
              </Link>
            </div>
          </li>)}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};
