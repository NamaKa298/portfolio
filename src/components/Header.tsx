import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import { ArrowUpRightIcon } from 'lucide-react';

export const Header = ({
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
            <a className="group flex gap-3" href="/">
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
              <span>{t('home')}</span>
            </a>
          </li>
          <li className="duration-300 hover:duration-300">
            <a className="group flex gap-3" href="#projects">
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
                    d="M12 1.25C10.4812 1.25 9.25 2.48122 9.25 4V6.55337C9.25 7.53787 8.60995 8.40804 7.67014 8.70126L6.8831 8.94682C5.31674 9.43552 4.25 10.8858 4.25 12.5266C4.25 13.4931 5.0335 14.2766 6 14.2766H19C19.9665 14.2766 20.75 13.4931 20.75 12.5266C20.75 10.8858 19.6833 9.43552 18.1169 8.94682L17.3299 8.70126C16.39 8.40804 15.75 7.53787 15.75 6.55337V4C15.75 2.48122 14.5188 1.25 13 1.25H12ZM6 15.776H19C19.1284 15.776 19.255 15.7686 19.3795 15.7541C19.6769 15.7195 19.8256 15.7022 19.917 15.7626C20.0083 15.8229 20.0436 15.9425 20.1142 16.1818C20.4828 17.4304 20.6396 18.7569 20.7095 19.8235L20.7126 19.8706C20.7398 20.2842 20.7653 20.6734 20.7384 20.9966C20.7079 21.364 20.6041 21.7417 20.3004 22.065C19.9944 22.3907 19.5276 22.5404 19.1667 22.6201C18.7653 22.7088 18.308 22.7488 17.8667 22.7494C17.4249 22.7499 16.9697 22.7109 16.5715 22.6267C16.2149 22.5513 15.7544 22.4107 15.4487 22.1059C15.1392 21.7972 15.0264 21.4217 14.9785 21.0663C14.9475 20.8364 14.6682 20.7115 14.4805 20.8478C14.2083 21.0455 13.9194 21.2218 13.6197 21.3787C12.3465 22.0453 10.8297 22.3916 9.41285 22.5678C7.98809 22.745 6.6165 22.7556 5.60582 22.7231C5.09907 22.7068 4.67969 22.6795 4.38554 22.6561C3.88039 22.5678 3.43409 22.4231 3.32298 22.19C3.21188 21.9569 3.22848 21.6831 3.36692 21.4651C4.0635 20.3685 4.57655 19.0543 4.89533 17.8491C5.03501 17.321 5.13296 16.8309 5.19428 16.4029C5.24053 16.08 5.26366 15.9186 5.34902 15.8452C5.43438 15.7718 5.6144 15.7732 5.97444 15.7759L6 15.776Z"
                    fill="currentColor"
                  ></path>
                </svg>
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
