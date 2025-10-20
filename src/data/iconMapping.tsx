import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiGit,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { ReactElement } from "react";

// Mapping centralisé de TOUTES les icônes
export const techIcons: Record<string, ReactElement> = {
  // Frameworks
  "Next.js": <SiNextdotjs />,
  React: <SiReact />,

  // Langages
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,

  // Styling
  Tailwind: <SiTailwindcss />,
  CSS: <SiCss3 />,
  HTML: <SiHtml5 />,

  // Backend
  "Node.js": <SiNodedotjs />,
  Express: <SiExpress />,

  // Databases
  PostgreSQL: <SiPostgresql />,
  Prisma: <SiPrisma />,

  // Tools
  Git: <SiGit />,
  Figma: <SiFigma />,
  Vercel: <SiVercel />,
};
