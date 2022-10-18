import { Tags } from "./works";

export type FilterTag = Tags | "all";

export interface Filter {
  label: string;
  tag: FilterTag;
}

export const filters: Filter[] = [
  { label: "Show All", tag: "all" },
  { label: "ReactJs", tag: "reactjs" },
  { label: "Material UI", tag: "material-ui" },
  { label: "Typescript", tag: "typescript" },
  { label: "Storybook", tag: "storybook" },
  { label: "Testes Unitários", tag: "tests" },
];
