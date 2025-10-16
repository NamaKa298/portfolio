import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./globals.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ArrowUpRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/form";

export default function HomePage() {
  const t = useTranslations("home");
  return (
    <div className="font-sans item-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px]">
        <section className="flex flex-row items-center justify-center">
          <div className="pr-6">
            <Image
              className=" rounded-full"
              src="/photo.webp"
              alt="Vercel logomark"
              width={170}
              height={170}
            />
          </div>
          <div>
            <h1 className="font-roboto">{t("greeting")}</h1>
            <h2 className="font-roboto">{t("title")}</h2>
          </div>
        </section>
        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
          <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button
              variant="outline"
              className="rounded-full items-center h-10 px-6 sm:h-12 md:px-8 font-medium text-sm sm:text-base bg-foreground text-background hover:bg-accent-foreground hover:text-background"
            >
              {t("contact")}
              <ArrowUpRightIcon />
            </Button>
          </div>
        </div>
        <ContactForm />
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
