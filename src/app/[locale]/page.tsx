"use client";
import { Button } from "@/components/ui/button";
import "./globals.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { ArrowUpRightIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ContactForm } from '@/components/form';
import Projects from '@/components/projects';
import { Navbar } from '@/components/navbar';
import About from '@/components/about';
import { scrollToSection } from '@/lib/scrollToSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FaXTwitter } from 'react-icons/fa6';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="max-w-screen-xl mx-auto w-full">
      <Navbar scrollToSection={scrollToSection} />
      <main className="flex flex-col gap-[32px]">
        <header className="h-screen max-full mx-auto pt-20 sm:pt-20 md:pt-28 lg:pt-36 xl:pt-44 overflow-hidden relative text-center lg:pb-0">
          <section
            id="titleSection"
            className="flex flex-col items-center justify-center z-0"
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
              <div
                id="contactcallToAction"
                className="flex flex-wrap items-center gap-2 md:flex-row slide-up-from-bottom-left w-full sm:flex-1 max-w-[10rem]"
              >
                <Button
                  variant="default"
                  className="flex font-light items-center justify-center size-lg sm:h-11 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-[#A9AAAB] to-[#FAFAFA] hover:scale-105 w-full transition-transform duration-300 custom-drop-shadow ButtonShadow"
                  onClick={() => scrollToSection('contact')}
                >
                  {t('contact')}
                  <ArrowUpRightIcon />
                </Button>
              </div>
              <div
                id="projectscallToAction"
                className="flex flex-wrap items-center gap-2 md:flex-row slide-up-from-bottom-right w-full sm:flex-1 max-w-[10rem]"
              >
                <Button
                  variant="outline"
                  className="flex font-light items-center font-lg size-lg sm:h-11 md:px-8 text-sm sm:text-sm hover:scale-105 border-foreground/30 w-full justify-center transition-transform duration-300 custom-drop-shadow ButtonShadow"
                  onClick={() => scrollToSection('projects')}
                >
                  {t('viewProjects')}
                </Button>
              </div>
            </div>
          </section>
          <div
            className=" z-[-10] bg-[#D9D9D9] w-full h-[1000px] rounded-full absolute bottom-[-350px] left-1/2 -translate-x-1/2 translate-y-1/2 mix-blend-lighten pointer-events-none opacity-0 blur-[200px] animate-glow-appear"
            style={{ opacity: 0.3 }}
          >
            {''}
          </div>
        </header>
        <ScrollReveal>
          <section id="projects" className="lg:min-h-screen flex sm:pb-56">
            <Projects />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="about" className="lg:h-screen flex sm:pb-56">
            <About />
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section id="contact" className="lg:min-h-screen flex sm:pb-56">
            <ContactForm />
          </section>
        </ScrollReveal>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center border-t py-10">
        <div>{t('footer')}</div>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-primary/50"
          href="https://github.com/NamaKa298"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          Github →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-primary/50"
          href="https://www.linkedin.com/in/marionsaint-martin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          LinkedIn →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-primary/50"
          href="https://x.com/marion_st_m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
          Twitter →
        </a>
      </footer>
    </div>
  );
}
