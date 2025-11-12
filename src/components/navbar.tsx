import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import { ArrowUpRightIcon, MenuIcon, XIcon } from 'lucide-react';
import { MdWork } from 'react-icons/md';
import { IoPersonSharp } from 'react-icons/io5';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export const Navbar = ({
  scrollToSection,
}: {
  scrollToSection: (id: string) => void;
}) => {
  const t = useTranslations('header');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenu = isMobileMenuOpen ? (
    <div
      className="fixed inset-0 bg-black h-screen w-screen flex flex-col transform transition-transform duration-500 ease-in-out animate-slide-in-right"
      style={{
        zIndex: 99999,
        animation: 'slideInRight 0.4s ease-out forwards',
      }}
    >
      {/* Bouton fermer EN HAUT à droite */}
      <div className="absolute top-6 right-6">
        <button
          aria-label="close-menu"
          className="h-8 w-8 cursor-pointer flex items-center justify-center text-white hover:bg-gray-800 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <XIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Contenu du menu */}
      <div className="flex flex-col items-center justify-center h-full px-8 space-y-12">
        <a
          className="group flex gap-4 items-center text-white text-2xl cursor-pointer hover:text-gray-300 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
            setIsMobileMenuOpen(false);
          }}
          href="#about"
        >
          <IoPersonSharp className="h-8 w-8" />
          <span>{t('about')}</span>
        </a>

        <a
          className="group flex gap-4 items-center text-white text-2xl cursor-pointer hover:text-gray-300 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
            setIsMobileMenuOpen(false);
          }}
          href="#projects"
        >
          <MdWork className="h-8 w-8" />
          <span>{t('works')}</span>
        </a>

        <a
          className="group flex gap-4 items-center text-white text-2xl cursor-pointer hover:text-gray-300 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
            setIsMobileMenuOpen(false);
          }}
          href="#contact"
        >
          {t('contact')}
          <ArrowUpRightIcon className="ml-3" />
        </a>
      </div>
    </div>
  ) : null;

  return (
    <header
      className="sm:px-12 md:px-24 lg:px-32 xl:px-10 font-onest container mx-auto py-6"
      style={{ opacity: 1, transform: 'none' }}
    >
      <nav className="flex justify-between slide-down">
        <ul className="hidden lg:flex lg:w-full gap-6 items-center justify-between">
          <li>
            <LanguageSwitcher />
          </li>
          <div className="flex gap-6">
            <li className="duration-300 hover:duration-300">
              <a
                className="group flex gap-3 items-center"
                onClick={() => scrollToSection('about')}
                href="#about"
              >
                <div className="text-[#71717A] duration-300 group-hover:text-white cursor-pointer">
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
                className="flex font-light items-center justify-center size-lg sm:h-11 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-[#A9AAAB] to-[#FAFAFA] hover:scale-105 w-full transition-transform duration-300 custom-drop-shadow ButtonShadow"
                onClick={() => scrollToSection('contact')}
              >
                {t('contact')}
                <ArrowUpRightIcon />
              </Button>
            </div>
          </li>
        </ul>
        <div
          className="lg:hidden flex w-full items-center justify-between px-6"
          style={{
            zIndex: 9999,
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          <LanguageSwitcher />
          <button
            className="h-8 w-8 cursor-pointer flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Mobile rendu via Portal */}
        {typeof window !== 'undefined' &&
          createPortal(mobileMenu, document.body)}
      </nav>
    </header>
  );
};
