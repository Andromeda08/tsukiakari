import { Tech } from "./Technology.type";

export interface Project {
  name: string;
  icon: string;
  desc: string;
  github?: string;
  link?: string;
  tech?: Tech[];
}