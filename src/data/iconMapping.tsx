import React from 'react';
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
  SiTrello,
  SiMongodb,
  SiPython,
  SiShadcnui,
  SiGithub,
  SiResend,
  SiRedis,
  SiVite,
  SiRender,
} from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
// Mapping centralisé de TOUTES les icônes
export const techIcons: Record<string, React.JSX.Element> = {
  // Frameworks
  'Next.js': <SiNextdotjs />,
  React: <SiReact />,
  Vite: <SiVite />,
  Render: <SiRender />,

  // Langages
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  Python: <SiPython />,

  // Styling
  Tailwind: <SiTailwindcss />,
  CSS: <SiCss3 />,
  HTML: <SiHtml5 />,
  Sass: <FaSass />,
  Shadcn: <SiShadcnui />,

  // Backend
  'Node.js': <SiNodedotjs />,
  Express: <SiExpress />,

  // Databases
  PostgreSQL: <SiPostgresql />,
  Prisma: <SiPrisma />,
  MongoDB: <SiMongodb />,

  // Tools
  Git: <SiGit />,
  Figma: <SiFigma />,
  Vercel: <SiVercel />,
  Trello: <SiTrello />,
  Github: <SiGithub />,
  Resend: <SiResend />,
  Redis: <SiRedis />,
};
