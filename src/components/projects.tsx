import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { techIcons } from "@/data/iconMapping";
import { cloneElement, ReactElement } from "react";
import {useState} from "react";

export default function Projects() {
  const [clickedProject, setClickedProject] = useState<string | null>(null);

  const t = useTranslations("home");
  
  const handleProjectClick = (projectId: string) => {
    setClickedProject(projectId);
  };

  return (
    <div className="w-full">
      <h2 className="font-roboto text-3xl mb-6">{t("projects")}</h2>
      <div className="flex flex-col gap-4">
        {projects.map((project) => {
          const isActive = clickedProject === project.id;
          
          return (
            <div
              key={project.id}
              className="flex flex-row pb-6 hover:shadow-lg transition-shadow relative"
            >
              <div 
                className={`
                  w-1/2 border-l pl-6 transition-colors
                  ${isActive 
                    ? "border-l-2 border-foreground" 
                    : "border-foreground/30 hover:border-foreground"
                  }
                `}
              >
                <div 
                  className="cursor-pointer" 
                  onClick={() => handleProjectClick(project.id)}
                >
                  <p className="text-sm text-muted-foreground">
                    {project.date}
                  </p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-lg"
                >
                  {t("viewProject")} ↗
                </a>
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
                        <span className="text-sm text-muted-foreground">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div> {/* ← AJOUT: Fermeture de la première div de colonne */}
              
              <div>
                <div>
                  {isActive && (
                    <div className=" w-1/2 flex absolute justify-center items-center top-1/2 transform -translate-y-1/2 rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full pl-6 object-cover"
                      />
                    </div>)
                  }
                </div>
              </div>
            </div> // Fermeture du container principal du projet
          );
        })}
      </div>
    </div>
  );
}