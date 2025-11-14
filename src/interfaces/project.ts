export interface Project {
  id: string;
  title: string;
  descriptionKey: string;
  image: string;
  dateKey?: string;
  stack: string[];
  stack_details: string[];
  link?: string;
  font?: string;
  logo?: string;
}
