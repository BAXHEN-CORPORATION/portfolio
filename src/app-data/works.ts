import app_01 from "assets/app_01.png";
import { normalizeName } from "./utils";

export const tagsNameConfig = {
  "material-ui": "material-ui",
  reactjs: "reactjs",
  nodejs: "nodejs",
  angularjs: "angularjs",
};

export type Tags = keyof typeof tagsNameConfig;

export interface Tag {
  pretty: string;
  tag: Tags;
}

export interface Project {
  id: string;
  mainImg: string;
  imgs: string[];
  details: string;
  description: string;
  name: string;
  tags: Tag[];
  date: string;
}

type TagConfig = {
  [Property in keyof typeof tagsNameConfig]: Tag;
};

const tagsConfig: TagConfig = {
  angularjs: { tag: "angularjs", pretty: "Angular Js" },
  "material-ui": { tag: "material-ui", pretty: "Material UI" },
  nodejs: { tag: "nodejs", pretty: "Node Js" },
  reactjs: { tag: "reactjs", pretty: "React Js" },
};

export const bestProjects: Project[] = [
  {
    id: "www.baxhen.com/portfolio",
    name: "Portfolio",
    details: "Portfolio Material UI",
    description:
      "Duis sed odio sit amet nibh vulputate cursus an amet mauris. Morbi accumsan ipsum velit. Nam c tellus a odio tincidunt auctor a ornare odiomi. non mauris vit ae erat consequat auctor eu ine amet mau auctor a ornare odio.",
    tags: [tagsConfig["material-ui"], tagsConfig["reactjs"]],
    date: "September 28, 2022",
    imgs: [app_01, app_01, app_01, app_01],
    mainImg: app_01,
  },
  {
    id: "www.baxhen.com/portfolio",
    name: "Portfolio 2",
    details: "Portfolio Material UI",
    description:
      "Duis sed odio sit amet nibh vulputate cursus an amet mauris. Morbi accumsan ipsum velit. Nam c tellus a odio tincidunt auctor a ornare odiomi. non mauris vit ae erat consequat auctor eu ine amet mau auctor a ornare odio.",
    tags: [tagsConfig["material-ui"], tagsConfig["reactjs"]],
    date: "September 28, 2022",
    imgs: [app_01, app_01, app_01, app_01],
    mainImg: app_01,
  },
  {
    id: "www.baxhen.com/portfolio",
    name: "Portfolio 3",
    details: "Portfolio Material UI",
    description:
      "Duis sed odio sit amet nibh vulputate cursus an amet mauris. Morbi accumsan ipsum velit. Nam c tellus a odio tincidunt auctor a ornare odiomi. non mauris vit ae erat consequat auctor eu ine amet mau auctor a ornare odio.",
    tags: [tagsConfig["material-ui"], tagsConfig["reactjs"]],
    date: "September 28, 2022",
    imgs: [app_01, app_01, app_01, app_01],
    mainImg: app_01,
  },
];
