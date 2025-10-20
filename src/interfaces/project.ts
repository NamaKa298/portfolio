import { ReactElement } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  competences: string[];
  link: string;
}
