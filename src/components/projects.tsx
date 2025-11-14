import { useTranslations } from 'next-intl';
import { projects } from '@/data/projects';
import { techIcons } from '@/data/iconMapping';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Calligraffitti, Poppins } from 'next/font/google';
import { Button } from './ui/button';

const calligraffitti = Calligraffitti({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: '600' });

const fontClasses: { [key: string]: string } = {
  calligraffitti: calligraffitti.className,
  poppins: poppins.className,
};

export default function Projects() {
  const t = useTranslations('projects');
  const tProjects = useTranslations('projects.projectsData');

  return (
    <div className="w-full px-4 xl:px-0 pt-5">
      <h2 className="text-4xl lg:text-6xl mb-6 pb-5">{t('title')}</h2>
      <Accordion type="single" collapsible>
        <div className="flex flex-col gap-4">
          {projects.map((project) => {
            const fontClass = project.font ? fontClasses[project.font] : '';
            const description = tProjects(`${project.id}.description`);
            const date = tProjects(`${project.id}.date`);

            return (
              <AccordionItem value={project.id} key={project.id}>
                <AccordionTrigger className="border-l border-t border-foreground/30 hover:border-foreground rounded-tl-xl">
                  <div className="cursor-pointer flex flex-row items-center justify-between w-full">
                    <h3
                      className={`text-3xl xl:text-5xl lg:text-4xl pl-10 ${fontClass} flex flex-row pr-10`}
                    >
                      {/*} {project.logo && (
                        <img src={project.logo} className="w-20 h-20" />
                      )}
                        */}
                      {project.title.startsWith('/') ? (
                        <Image
                          src={project.title}
                          alt="Project Logo"
                          loading="lazy"
                          width={1675}
                          height={188}
                          className="h-[25px] sm:h-[30px] md:h-[35px] lg:h-[48px] w-auto"
                        />
                      ) : (
                        project.title
                      )}
                    </h3>
                    <div className="hidden lg:flex pr-10">
                      {project.stack.map((tech) => {
                        const icon = techIcons[tech];
                        return (
                          <div key={tech}>
                            {icon && (
                              <div
                                className="text-5xl w-15 h-15 pl-5 opacity-50"
                                title={tech}
                              >
                                {icon}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col lg:flex-row">
                      <div className="w-full lg:w-2/5">
                        <p className="p-4 text-sm text-muted-foreground italic">
                          {date}
                        </p>
                        <div className="lg:hidden rounded-lg overflow-hidden w-full mb-5 relative aspect-video">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="w-full h-auto object-contain rounded-xl"
                            loading="lazy"
                          />
                        </div>
                        <p className="lg:p-4 text-lg">{description}</p>
                        <div className="flex pt-10 pb-10 justify-center">
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="items-center font-light justify-center size-lg sm:h-11 md:px-8 font-lg text-sm sm:text-sm bg-gradient-to-t from-[#A9AAAB] to-[#FAFAFA] hover:scale-105 p-6 transition-transform duration-300 custom-drop-shadow ButtonShadow">
                                {t('viewProject')} ↗
                              </Button>
                            </a>
                          ) : (
                            <Button disabled>{t('viewProject')} ↗</Button>
                          )}
                        </div>
                      </div>
                      <div className="hidden lg:block lg:w-3/5 lg:ml-20 mr-4 rounded-lg overflow-hidden w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1920}
                          height={1080}
                          className="w-full h-auto object-contain rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="hidden lg:flex gap-3 p-4 flex-wrap">
                      {project.stack_details.map((tech) => {
                        const icon = techIcons[tech];
                        return (
                          <div
                            key={tech}
                            className="flex items-center gap-2 opacity-50"
                          >
                            {icon && (
                              <div className="text-2xl w-6 h-6" title={tech}>
                                {icon}
                              </div>
                            )}
                            <span className="text-sm text-muted-foreground">
                              {tech}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </div>
      </Accordion>
    </div>
  );
}
