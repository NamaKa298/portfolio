import { Project } from '@/interfaces/project';

export const projects: Project[] = [
  {
    id: 'lightStep',
    title: 'LightStep',
    description:
      "LightStep est une boutique en ligne dédiée aux passionnés de sport, offrant une sélection variée d'équipements adaptés à toutes les disciplines. Grâce à une interface intuitive et des filtres avancés, les utilisateurs peuvent facilement trouver des produits fiables et performants, accompagnés d'avis et de recommandations pour un choix éclairé.",
    image: '/lightstep.webp',
    date: 'juin 2025 - en cours',
    competences: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    link: '',
    font: 'calligraffitti',
    logo: '/lightstep-logo.svg',
  },
  {
    id: 'nutribouge',
    title: 'NUTRI-BOUGE',
    description:
      "Site vitrine pour cabinet de coaching sportif et diététique. Plateforme complète proposant des services de coaching individuel et en groupe, avec système de tarification, formulaire de contact, présentation des services d'éducation thérapeutique et de diététique.",
    image: '/nutribouge.webp',
    date: 'janvier 2025 - avril 2025',
    competences: ['CSS', 'HTML', 'JavaScript', 'Sass'],
    link: 'https://nutribouge.com/',
    font: 'poppins',
  },
];
