import { Tags } from "./works";

export type FilterTag = Tags | "all";

export interface Filter {
  label: string;
  tag: FilterTag;
}

export const filters: Filter[] = [
  { label: "Show All", tag: "all" },
  { label: "ReactJs", tag: "reactjs" },
  { label: "AngularJs", tag: "angularjs" },
  { label: "NodeJs", tag: "nodejs" },
  { label: "Material UI", tag: "material-ui" },
];
