import { normalizeName } from "./utils";

import product_preview_desktop from "assets/projects/product_preview/product_preview_desktop.png";
import product_preview_mobile from "assets/projects/product_preview/product_preview_mobile.png";

export const tagsNameConfig = {
  "material-ui": "material-ui",
  reactjs: "reactjs",
  javascript: "javascript",
  typescript: "typescript",
  tests: "tests",
  storybook: "storybook",
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
  javascript: { tag: "javascript", pretty: "Javascript" },
  "material-ui": { tag: "material-ui", pretty: "Material UI" },
  typescript: { tag: "typescript", pretty: "Typescript" },
  reactjs: { tag: "reactjs", pretty: "React Js" },
  tests: { tag: "tests", pretty: "Testes Unitários" },
  storybook: { tag: "storybook", pretty: "Storybook" },
};

export const bestProjects: Project[] = [
  {
    id: normalizeName("Product Preview"),
    name: "Product Preview",
    details: "Componente de pré visualização de produto",
    description:
      "Um componente para pré visualizar um produto de uma loja virtual. Feito com Material UI, ReactJs, Typescript. Testado com a biblioteca @react-library-testing e jest. Documentado com Storybook. Responsivo para desktop, tablet e mobile",
    tags: [
      tagsConfig["material-ui"],
      tagsConfig["reactjs"],
      tagsConfig["storybook"],
      tagsConfig["typescript"],
      tagsConfig["tests"],
    ],
    date: "September 20, 2022",
    imgs: [product_preview_desktop, product_preview_mobile],
    mainImg: product_preview_desktop,
  },
];

export const otherProjects: Project[] = [];

export const allProjects: Project[] = [...bestProjects, ...otherProjects];
