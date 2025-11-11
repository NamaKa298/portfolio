import { useTranslations } from 'next-intl';
import { projects } from '@/data/projects';
import { techIcons } from '@/data/iconMapping';
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
    <div className="w-full">
      <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl mb-6 pb-5">
        {t('title')}
      </h2>
      <Accordion type="single" collapsible>
        <div className="flex flex-col gap-4">
          {projects.map((project) => {
            const fontClass = project.font ? fontClasses[project.font] : '';
            const description = tProjects(`${project.id}.description`);

            return (
              <AccordionItem value={project.id} key={project.id}>
                <AccordionTrigger className="border-l border-t border-foreground/30 hover:border-foreground rounded-tl-xl">
                  <div className="cursor-pointer flex flex-row items-center justify-between w-full">
                    <h3
                      className={`xl:text-5xl lg:text-4xl md:text-3xl sm:text-xl pl-10 ${fontClass} flex flex-row pr-10`}
                    >
                      {/*} {project.logo && (
                        <img src={project.logo} className="w-20 h-20" />
                      )}
                        */}
                      {project.title.startsWith('/') ? (
                        <img
                          src={project.title}
                          alt="Project Logo"
                          loading="lazy"
                          className="h-[48px] w-auto"
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
                          {project.date}
                        </p>
                        <p className="p-4 text-justify text-lg">
                          {description}
                        </p>
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
                      <div className="lg:w-3/5 ml-20 mr-4 rounded-lg overflow-hidden w-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto object-contain rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="hidden lg:flex gap-3 p-4 flex-wrap">
                      {project.stack_details.map((tech) => {
                        const icon = techIcons[tech];
                        return (
                          <div key={tech} className="flex items-center gap-2">
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
