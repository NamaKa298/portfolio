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

  return (
    <div className="w-full pt-20">
      <h2 className="text-5xl mb-6 pb-5">{t('title')}</h2>
      <Accordion type="single" collapsible>
        <div className="flex flex-col gap-4">
          {projects.map((project) => {
            const fontClass = project.font ? fontClasses[project.font] : '';
            return (
              <AccordionItem value={project.id} key={project.id}>
                <AccordionTrigger className="border-l border-t border-foreground/30 hover:border-foreground">
                  <div className="cursor-pointer flex flex-row items-center justify-between w-full">
                    <h3
                      className={`text-5xl pl-10 ${fontClass} flex flex-row pr-10`}
                    >
                      {/*} {project.logo && (
                        <img src={project.logo} className="w-20 h-20" />
                      )}
                        */}
                      {project.title}
                    </h3>
                    <div className="flex pr-10">
                      {project.competences.map((tech) => {
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
                  <div className="flex flex-row">
                    <div className="w-1/3 pl-4">
                      <p className="text-sm text-muted-foreground italic pb-4">
                        {project.date}
                      </p>
                      <p className="mb-4 text-justify text-lg">
                        {project.description}
                      </p>
                      <div className="flex pt-10 pb-10 justify-center">
                        <Button className="text-sm p-6 rounded-lg hover:scale-105">
                          {t('viewProject')} ↗
                        </Button>
                      </div>
                      <div className="flex gap-3 pt-4">
                        {project.competences.map((tech) => {
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
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-2/3 ml-20 rounded-lg"
                    />
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
