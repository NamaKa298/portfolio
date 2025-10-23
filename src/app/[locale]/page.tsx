"use client";
import { Button } from "@/components/ui/button";
import "./globals.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowUpRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/form";
import Projects from "@/components/projects";
import { Header } from '@/components/Header';

export default function HomePage() {
  const t = useTranslations('home');
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <main className="flex flex-col gap-[32px]">
        <header className="max-full mx-auto pt-20 md:pt-28 lg:pt-36 xl:pt-44 overflow-hidden relative text-center pb-56 md:pb-64 lg:pb-72">
          <section
            id="titleSection"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="slide-up text-5xl lg:text-6xl xl:text-7xl text-center font-normal px-2 mx:px-0 mb-3 md:mb-4 lg:mb-5 xl:mb-6 max-w-7xl mx-auto">
              {t('title')}
            </h1>
            <p className="text-[#A9AAAB] mb-6 text-center mx-auto max-w-2xl text-sm xl:text-base px-2 mx:px-0 slide-up">
              {t('description')}
            </p>
          </section>
          <section id="callToAction">
            <div className="flex gap-6 justify-center mb-16 md:mb-20 lg:mb-24 xl:mb-28">
              <div className="flex flex-wrap items-center gap-2 md:flex-row slide-up-from-bottom-left w-full sm:flex-1 max-w-[10rem]">
                <Button
                  variant="default"
                  className="items-center justify-center size-lg sm:h-14 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-[#A9AAAB] to-[#FAFAFA] hover:scale-105 w-full rounded-xl"
                  onClick={() => scrollToSection('contact')}
                >
                  {t('contact')}
                  <ArrowUpRightIcon />
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:flex-row slide-up-from-bottom-right w-full sm:flex-1 max-w-[10rem]">
                <Button
                  variant="outline"
                  className="items-center font-lg size-lg sm:h-14 md:px-8 text-sm sm:text-sm hover:scale-105 border-foreground/30 w-full justify-center rounded-xl"
                  onClick={() => scrollToSection('projects')}
                >
                  {t('viewProjects')}
                </Button>
              </div>
            </div>
          </section>
        </header>
        <section id="projects" className="flex pt-20">
          <Projects />
        </section>
        <section id="competencies" className="flex pb-10">
          <h2 className="pt-20">{t('competencies')}</h2>
          {/* Add your competencies content here */}
        </section>
        <section id="about" className="flex pb-10">
          <h2 className="pt-20">{t('about')}</h2>
          {/* Add your about me content here */}
        </section>
        <section id="contact" className="flex justify-center pb-10">
          <ContactForm />
        </section>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/NamaKa298"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          Github →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/marionsaint-martin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          LinkedIn →
        </a>
      </footer>
    </div>
  );
}
