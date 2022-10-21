import { normalizeName } from "./utils";

import Visibility from "@mui/icons-material/Visibility";
import {
  default as GitHub,
  default as SvgIcon,
} from "@mui/icons-material/GitHub";

import product_preview_desktop from "assets/projects/product_preview/product_preview_desktop.png";
import product_preview_mobile from "assets/projects/product_preview/product_preview_mobile.png";
import product_preview_test from "assets/projects/product_preview/product_preview_test.png";
import product_preview_storybook from "assets/projects/product_preview/product_preview_storybook.png";
import { MessagesIds } from "lang/types";

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
export interface Resource {
  Icon: typeof SvgIcon;
  url: string;
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
  resources?: Resource[];
}

type TagConfig = {
  [Property in keyof typeof tagsNameConfig]: Tag;
};

const tagsConfig: TagConfig = {
  javascript: { tag: "javascript", pretty: "Javascript" },
  "material-ui": { tag: "material-ui", pretty: "Material UI" },
  typescript: { tag: "typescript", pretty: "Typescript" },
  reactjs: { tag: "reactjs", pretty: "React Js" },
  tests: { tag: "tests", pretty: MessagesIds.UNIT_TESTS },
  storybook: { tag: "storybook", pretty: "Storybook" },
};

export const bestProjects: Project[] = [
  {
    id: normalizeName("Product Preview"),
    name: MessagesIds.PROJECT_01_NAME,
    details: MessagesIds.PROJECT_01_DETAILS,
    description: MessagesIds.PROJECT_01_DESCRIPTION,
    tags: [
      tagsConfig["material-ui"],
      tagsConfig["reactjs"],
      tagsConfig["storybook"],
      tagsConfig["typescript"],
      tagsConfig["tests"],
    ],
    date: "2022-09-20",
    imgs: [
      product_preview_desktop,
      product_preview_mobile,
      product_preview_test,
      product_preview_storybook,
    ],
    mainImg: product_preview_desktop,
    resources: [
      {
        Icon: GitHub,
        url: "https://github.com/BAXHEN-CORPORATION/product-preview-001",
      },
      {
        Icon: Visibility,
        url: "https://classy-narwhal-e82e98.netlify.app/",
      },
    ],
  },
];

export const otherProjects: Project[] = [];

export const allProjects: Project[] = [...bestProjects, ...otherProjects];
