import { normalizeName } from "./utils";

import Visibility from "@mui/icons-material/Visibility";
import {
  default as GitHub,
  default as SvgIcon,
} from "@mui/icons-material/GitHub";

import { MessagesIds } from "lang/types";
//* Product Preview Images

import product_preview_desktop from "assets/projects/product_preview/product_preview_desktop.png";
import product_preview_mobile from "assets/projects/product_preview/product_preview_mobile.png";
import product_preview_test from "assets/projects/product_preview/product_preview_test.png";
import product_preview_storybook from "assets/projects/product_preview/product_preview_storybook.png";

//* Clock App Images

import clock_app_mobile_details from "assets/projects/clock_app/mobile_details.png";
import clock_app_mobile from "assets/projects/clock_app/mobile.png";
import clock_app_night_details from "assets/projects/clock_app/night_details.png";
import clock_app_night_quote from "assets/projects/clock_app/night_quote.png";
import clock_app_graphql from "assets/projects/clock_app/graphql.png";
import clock_app_day_quote from "assets/projects/clock_app/day_quote.png";
import clock_app_day_details from "assets/projects/clock_app/day_details.png";
import clock_app_cypress from "assets/projects/clock_app/cypress.png";

//* Spotify Clone Images

import spotify_first_load from "assets/projects/spotify_clone/spotify_first_load.png";
import spotify_search_filter from "assets/projects/spotify_clone/spotify_search_filter.png";
import spotify_search_shortcut from "assets/projects/spotify_clone/spotify_search_shortcut.png";
import spotify_song_card from "assets/projects/spotify_clone/spotify_song_card.png";
import spotify_song_selection from "assets/projects/spotify_clone/spotify_song_selection.png";

export const tagsNameConfig = {
  "material-ui": "material-ui",
  reactjs: "reactjs",
  javascript: "javascript",
  typescript: "typescript",
  tests: "tests",
  storybook: "storybook",
  nextjs: "nextjs",
  graphql: "graphql",
  cypress: "cypress",
  "react-query": "react-query",
  tailwind: "tailwind",
  redux: "redux",
  "redux-rtk": "redux-rtk",
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
  nextjs: { tag: "nextjs", pretty: "NextJs" },
  cypress: { tag: "cypress", pretty: "Cypress" },
  graphql: { tag: "graphql", pretty: "GraphQL" },
  "react-query": { tag: "react-query", pretty: "React Query" },
  tailwind: { tag: "tailwind", pretty: "Tailwind CSS" },
  "redux-rtk": { tag: "redux-rtk", pretty: "Redux ToolKit" },
  redux: { tag: "redux", pretty: "Redux" },
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
        url: "https://product-preview.baxhen.com",
      },
    ],
  },
  {
    id: normalizeName("Clock App"),
    name: MessagesIds.PROJECT_02_NAME,
    details: MessagesIds.PROJECT_02_DETAILS,
    description: MessagesIds.PROJECT_02_DESCRIPTION,
    tags: [
      tagsConfig["material-ui"],
      tagsConfig["reactjs"],
      tagsConfig["nextjs"],
      tagsConfig["graphql"],
      tagsConfig["typescript"],
      tagsConfig["cypress"],
      tagsConfig["react-query"],
    ],
    date: "2022-11-05",
    imgs: [
      clock_app_night_quote,
      clock_app_mobile,
      clock_app_graphql,
      clock_app_cypress,
      clock_app_mobile_details,
      clock_app_night_details,
      clock_app_day_quote,
      clock_app_day_details,
    ],
    mainImg: clock_app_night_quote,
    resources: [
      {
        Icon: GitHub,
        url: "https://github.com/baxhen/clock-app",
      },
      {
        Icon: Visibility,
        url: "https://clock-app.baxhen.com",
      },
    ],
  },
  {
    id: normalizeName("Spotify Clone"),
    name: MessagesIds.PROJECT_03_NAME,
    details: MessagesIds.PROJECT_03_DETAILS,
    description: MessagesIds.PROJECT_03_DESCRIPTION,
    tags: [
      tagsConfig["tailwind"],
      tagsConfig["reactjs"],
      tagsConfig["nextjs"],
      tagsConfig["typescript"],
      tagsConfig["redux"],
      tagsConfig["redux-rtk"],
    ],
    date: "2025-05-09",
    imgs: [
      spotify_first_load,
      spotify_search_filter,
      spotify_search_shortcut,
      spotify_song_card,
      spotify_song_selection,
    ],
    mainImg: spotify_first_load,
    resources: [
      {
        Icon: GitHub,
        url: "https://github.com/baxhen/spotify-clone",
      },
      {
        Icon: Visibility,
        url: "https://spotify-clone-baxhen.netlify.app",
      },
    ],
  },
];

export const otherProjects: Project[] = [];

export const allProjects: Project[] = [...bestProjects, ...otherProjects];
