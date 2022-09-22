import app_01 from "assets/app_01.png";

export interface Project {
  img: string;
  name: string;
  tags: string[];
  date: string;
}

export const bestProjects: Project[] = [
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["Material UI", "ReactJs"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["Material UI", "ReactJs"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["Material UI", "ReactJs"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["Material UI", "ReactJs"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["Material UI", "ReactJs"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["Material UI", "ReactJs"],
    date: "22-08-2022",
  },
];

export const allWorks = [...bestProjects];
