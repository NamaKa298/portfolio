import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import { ArrowUpRightIcon } from 'lucide-react';
import { MdWork } from 'react-icons/md';
import { IoPersonSharp } from 'react-icons/io5';
export const Navbar = ({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) => {
  const t = useTranslations('header');

  return (
    <header
      className="sm:px-12 md:px-24 lg:px-32 xl:px-10 font-onest container mx-auto py-6"
      style={{ opacity: 1, transform: 'none' }}
    >
      <nav className="flex justify-between slide-down">
        <ul className="hidden xl:flex xl:w-full gap-6 items-center justify-between ">
          <li>
            <LanguageSwitcher />
          </li>{' '}
          <div className="flex gap-6">
            <li className="duration-300 hover:duration-300">
              <a
                className="group flex gap-3 items-center"
                onClick={() => scrollToSection('about')}
                href="#about"
              >
                <div className="text-[#71717A] duration-300 group-hover:text-white cursor:pointer">
                  <IoPersonSharp className="h-6 w-6" />
                </div>
                <span>{t('about')}</span>
              </a>
            </li>
            <li className="duration-300 hover:duration-300">
              <a
                className="group flex gap-3 items-center"
                onClick={() => scrollToSection('projects')}
                href="#projects"
              >
                <div className="text-[#71717A] duration-300 group-hover:text-white">
                  <MdWork className="h-6 w-6" />
                </div>
                <span>{t('works')}</span>
              </a>
            </li>
          </div>
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
        </ul>
      </nav>
    </header>
  );
};
