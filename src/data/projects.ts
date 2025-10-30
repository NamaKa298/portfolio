import { Project } from '@/interfaces/project';

export const projects: Project[] = [
  {
    id: 'lightStep',
    title: 'LightStep',
    descriptionKey: 'lightStep.description',
    image: '/lightstep.webp',
    date: 'juin 2025 - en cours',
    competences: [
      'TypeScript',
      'React',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Figma',
      'Express',
    ],
    link: '',
    font: 'calligraffitti',
    logo: '/lightstep-logo.svg',
  },
  {
    id: 'nutribouge',
    title: 'NUTRI-BOUGE',
    descriptionKey: 'nutribouge.description',
    image: '/nutribouge.webp',
    date: 'mars 2025 - avril 2025',
    competences: ['CSS', 'HTML', 'JavaScript', 'Sass', 'Figma'],
    link: 'https://nutribouge.com/',
    font: 'poppins',
  },
];
