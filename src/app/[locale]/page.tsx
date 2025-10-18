"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./globals.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowUpRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/form";

export default function HomePage() {
  const t = useTranslations("home");
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="font-sans item-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px]">
        <section
          id="titleSection"
          className="flex flex-row items-center justify-center"
        >
          <div className="pr-6">
            <Image
              className=" rounded-full"
              src="/photo.webp"
              alt="Vercel logomark"
              width={180}
              height={180}
            />
          </div>
          <div>
            <h1 className="font-roboto">{t("greeting")}</h1>
            <h2 className="font-roboto">{t("title")}</h2>
          </div>
        </section>
        <section id="callToAction">
          <div className="flex gap-10 items-center justify-center flex-col sm:flex-row">
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
              <Button
                variant="default"
                className="rounded-full items-center h-10 px-6 sm:h-14 md:px-8 font-lg font-semibold text-sm sm:text-xl hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                {t("contact")}
                <ArrowUpRightIcon />
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
              <Button
                variant="outline"
                className="rounded-full font-lg h-10 px-6 sm:h-14 md:px-8 font-semibold text-sm sm:text-xl hover:scale-105 items-center border-foreground"
                onClick={() => scrollToSection("projects")}
              >
                {t("viewProjects")}
              </Button>
            </div>
          </div>
        </section>
        <section id="projects" className="flex pb-10">
          <h3 className="font-roboto">{t("projects")}</h3>
          {/* Add your project content here */}
        </section>
        <section id="competencies" className="flex pb-10">
          <h3 className="font-roboto">Competencies</h3>
          {/* Add your competencies content here */}
        </section>
        <section id="about" className="flex pb-10">
          <h3 className="font-roboto">About Me</h3>
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
