"use client";
import { Button } from "@/components/ui/button";
import "./globals.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowUpRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/form";
import Projects from "@/components/projects";


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
    <div className="font-sans item-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px]">
        <section
          id="titleSection"
          className="flex flex-col items-center justify-center"
        >
          <h1 className="slide-up">{t('greeting')}</h1>
          <h1 className="slide-up">{t('title')}</h1>
        </section>
        <section id="callToAction">
          <div className="flex gap-10 items-center justify-center flex-col sm:flex-row">
            <div className="flex flex-wrap items-center gap-2 md:flex-row slide-up-from-bottom-left w-full sm:flex-1 max-w-[10rem]">
              <Button
                variant="default"
                className="items-center size-lg sm:h-14 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-gray-400 to-foreground hover:scale-105 w-full justify-center rounded-xl"
                onClick={() => scrollToSection('contact')}
              >
                {t('contact')}
                <ArrowUpRightIcon />
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:flex-row slide-up-from-bottom-right w-full sm:flex-1 max-w-[10rem]">
              <Button
                variant="outline"
                className="font-lg size-lg sm:h-14 md:px-8 text-sm sm:text-sm hover:scale-105 items-center border-foreground/30 w-full justify-center rounded-xl"
                onClick={() => scrollToSection('projects')}
              >
                {t('viewProjects')}
              </Button>
            </div>
          </div>
        </section>
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
