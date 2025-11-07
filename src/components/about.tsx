import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { FaXTwitter } from 'react-icons/fa6';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiGit,
  SiFigma,
  SiVercel,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { Card } from './ui/card';
import { ArrowUpRightIcon } from 'lucide-react';
import { Button } from './ui/button';

export default function About() {
  const t = useTranslations('about');

  return (
    <div className="w-full">
      <h2 className="text-5xl mb-6 pb-5">{t('title')}</h2>
      <div className="flex flex-row text-lg gap-4 ">
        <div className="w-1/2 flex-1">
          <Card className="text-justify text-xl h-full">
            <div className="flex flex-col p-10 ">
              <p>{t('description')}</p>
              <div className="flex justify-center p-20">
                <a href="/CV_Marion_Saint_Martin.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="p-3 font-light hover:scale-105 flex gap-2 bg-foreground text-background hover:bg-primary/70 items-center justify-center size-lg sm:h-11 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-[#A9AAAB] to-[#FAFAFA] rounded-xl transition-transform duration-300 custom-drop-shadow ButtonShadow">
                    {t('cv')}
                  </Button>
                </a>
              </div>
              <div className="flex flex-row justify-between">
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-primary/70"
                  href="https://github.com/NamaKa298"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github Profile"
                >
                  <FaGithub className="h-8 w-8" />
                  <div className=" flex flex-row">
                    Github <ArrowUpRightIcon />
                  </div>
                </a>
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-primary/70"
                  href="https://www.linkedin.com/in/marionsaint-martin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="h-8 w-8" />
                  <div className=" flex flex-row">
                    LinkedIn <ArrowUpRightIcon />
                  </div>
                </a>
                <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-primary/70"
                  href="https://x.com/marion_st_m"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                >
                  <FaXTwitter className="h-8 w-8" />
                  <div className=" flex flex-row">
                    Twitter <ArrowUpRightIcon />
                  </div>
                </a>
              </div>
            </div>
          </Card>
        </div>
        <div className="w-1/2 flex-1">
          <Card className=" text-justify text-2xl h-full">
            <div className="mb-8 pt-10 pl-10">
              <h3>{t('tools')}</h3>
            </div>
            <div className="flex flex-wrap gap-8 p-10">
              <SiTypescript className="text-[#3178c6] h-[50px] w-[50px]" />
              <SiReact className="text-[#61dafb] h-[50px] w-[50px]" />
              <SiPrisma className="h-[50px] w-[50px]" />
              <SiNodedotjs className="text-[#339933] h-[50px] w-[50px]" />
              <SiNextdotjs className="h-[50px] w-[50px]" />
              <SiTailwindcss className="text-[#38bdf8] h-[50px] w-[50px]" />
              <SiPostgresql className="text-[#336791] h-[50px] w-[50px]" />
              <SiJavascript className="text-[#f7df1e] h-[50px] w-[50px]" />
              <SiHtml5 className="text-[#e34f26] h-[50px] w-[50px]" />
              <SiCss3 className="text-[#1572b6] h-[50px] w-[50px]" />
              <FaSass className="text-[#cc6699] h-[50px] w-[50px]" />
              <SiExpress className="h-[50px] w-[50px]" />
              <SiGit className="text-[#f05032] h-[50px] w-[50px]" />
              <SiFigma className="text-[#f24e1e] h-[50px] w-[50px]" />
              <SiVercel className="h-[50px] w-[50px]" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
