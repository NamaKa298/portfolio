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
import { FaSass } from "react-icons/fa";
// Mapping centralisé de TOUTES les icônes
export const techIcons: Record<string, JSX.Element> = {
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
  Sass: <FaSass />,

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
