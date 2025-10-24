import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import { ArrowUpRightIcon } from 'lucide-react';
import { ChevronsLeftRightEllipsis } from 'lucide-react';

export const Navbar = ({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) => {
  const t = useTranslations('header');

  return (
    <header
      className="px-5 sm:px-12 md:px-24 lg:px-32 xl:px-48 font-onest container mx-auto py-6"
      style={{ opacity: 1, transform: 'none' }}
    >
      <nav className="flex justify-between slide-down">
        <ul className="hidden xl:flex xl:w-full gap-6 items-center justify-between ">
          <li className="duration-300 hover:duration-300">
            <a
              className="group flex gap-3"
              onClick={() => scrollToSection('about')}
            >
              <div className="text-[#71717A] duration-300 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  color="currentColor"
                >
                  <path
                    d="M9.52623 2.04919C10.352 1.54964 11.1263 1.25 12.0001 1.25C12.8739 1.25 13.6481 1.54964 14.4739 2.04919C15.2737 2.53302 16.1878 3.2468 17.3352 4.14286L18.5185 5.06682C19.8945 6.14061 20.7839 6.83466 21.2676 7.82756C21.7511 8.82002 21.7507 9.95006 21.7501 11.6999L21.7501 14.033V14.033C21.7501 15.8785 21.7501 17.3396 21.597 18.4829C21.4395 19.6591 21.1077 20.6109 20.3599 21.3617C19.1696 22.5568 18.2059 22.7147 15.7782 22.7499C15.5774 22.7528 15.3838 22.6751 15.2408 22.5342C15.0978 22.3932 15.0173 22.2008 15.0173 22V18.0057C15.0173 17.5295 15.0169 17.2099 15 16.9624C15 16.1323 14.2672 15.773 13.8105 15.773C13.5631 15.7561 12.4763 15.7557 12.0001 15.7557C11.2738 15.7557 10.4542 15.7561 10.2067 15.773C9.74992 15.773 9.01729 16.1278 9.01729 16.9624C9.00041 17.2099 9 17.5295 9 18.0057V22C9 22.2008 8.91948 22.3932 8.77646 22.5342C8.63345 22.6751 8.43989 22.7528 8.23911 22.7499C5.81142 22.7147 4.83057 22.5568 3.64026 21.3617C2.89243 20.6109 2.56067 19.6591 2.40316 18.4829C2.25005 17.3395 2.25006 15.8784 2.25008 14.033L2.25008 11.8846L2.25004 11.6999C2.24947 9.95007 2.2491 8.82002 2.73256 7.82756C3.21624 6.83466 4.10564 6.14061 5.48164 5.06683L6.66493 4.14286L6.66494 4.14285C7.81241 3.24679 8.72645 2.53302 9.52623 2.04919Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <span>{t('about')}</span>
            </a>
          </li>
          <li className="duration-300 hover:duration-300">
            <a
              className="group flex gap-3"
              onClick={() => scrollToSection('projects')}
            >
              <div className="text-[#71717A] duration-300 group-hover:text-white">
                <ChevronsLeftRightEllipsis />
              </div>
              <span>{t('works')}</span>
            </a>
          </li>
          <li>
            <div className="flex flex-wrap items-center gap-2 md:flex-row w-full sm:flex-1 max-w-[10rem]">
              <Button
                variant="default"
                className="items-center justify-center size-lg sm:h-11 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-[#A9AAAB] to-[#FAFAFA] hover:scale-105 w-full rounded-xl"
                onClick={() => scrollToSection('contact')}
              >
                {t('contact')}
                <ArrowUpRightIcon />
              </Button>
            </div>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};
