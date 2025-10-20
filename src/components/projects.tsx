import { useTranslations } from "next-intl";
import { Project } from "../interfaces/project";
import { Card } from "@/components/ui/card";
import {projects} from "@/data/projects";

export default function Projects() {
  const t = useTranslations("home");
  return (
    <div className="w-full">
      <h2 className="font-roboto text-3xl mb-6">{t("projects")}</h2>
      <div className="flex flex-col">
        {projects.map((project) => (
          <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <p className="text-sm text-muted-foreground mb-4">Date: {project.date}</p>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Voir le projet →
              </a>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
