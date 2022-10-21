import { MessagesIds } from "lang/types";
import { Tags } from "./works";

export type FilterTag = Tags | "all";

export interface Filter {
  label: string;
  tag: FilterTag;
}

export const filters: Filter[] = [
  { label: MessagesIds.FILTER_SHOW_ALL, tag: "all" },
  { label: "ReactJs", tag: "reactjs" },
  { label: "Material UI", tag: "material-ui" },
  { label: "Typescript", tag: "typescript" },
  { label: "Storybook", tag: "storybook" },
  { label: MessagesIds.UNIT_TESTS, tag: "tests" },
];
