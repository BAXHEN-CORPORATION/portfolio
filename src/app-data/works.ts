import app_01 from "assets/app_01.png";

export type Tags =
  | "material-ui"
  | "reactjs"
  | "nodejs"
  | "javascript"
  | "angularjs"
  | "typescript";

export interface Project {
  img: string;
  name: string;
  tags: Tags[];
  date: string;
}

export const bestProjects: Project[] = [
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["material-ui", "angularjs"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["material-ui", "reactjs"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["nodejs", "reactjs"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["angularjs", "javascript"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["material-ui", "reactjs", "nodejs"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["reactjs", "nodejs"],
    date: "22-08-2022",
  },
];

export const allProjects: Project[] = [
  ...bestProjects,
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["angularjs", "nodejs", "material-ui"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["material-ui", "reactjs", "nodejs"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["reactjs", "nodejs", "typescript"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["material-ui", "reactjs", "nodejs"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["reactjs", "nodejs", "typescript"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["material-ui", "reactjs", "nodejs"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["angularjs", "nodejs", "typescript"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["angularjs", "nodejs", "typescript"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["reactjs", "nodejs", "typescript"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["material-ui", "reactjs", "nodejs"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["angularjs", "nodejs", "typescript"],
    date: "22-08-2022",
  },
  {
    img: app_01,
    name: "Portfolio App",
    tags: ["angularjs", "nodejs", "typescript"],
    date: "22-08-2022",
  },
];
