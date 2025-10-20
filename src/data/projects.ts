import { Project } from "@/interfaces/project";

export const projects: Project[] = [
  {
    id: "lightStep",
    title: "LightStep",
    description:
      "Plateforme de vente en ligne complète avec panier et paiement",
    image: "/projects/ecommerce.jpg",
    date: "Sep 2025",
    competences: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    link: "",
  },
  {
    id: "nutribouge",
    title: "Nutri-bouge",
    description:
      "Site vitrine pour cabinet de coaching sportif et diététique. Plateforme complète proposant des services de coaching individuel et en groupe, avec système de tarification, formulaire de contact, présentation des services d'éducation thérapeutique et de diététique.",
    image: "/projects/blog.jpg",
    date: "janvier 2025 - avril 2025",
    competences: ["CSS", "HTML", "JavaScript"],
    link: "https://nutribouge.com/",
  },
];
