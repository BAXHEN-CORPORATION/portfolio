import { MessagesIds } from "lang/types";

export interface Skill {
  name: string;
  value: number;
  proficiency: string;
}

export const skills: Skill[] = [
  { name: "ReactJs", value: 90, proficiency: MessagesIds.MY_SKILLS_ADVANCED },
  { name: "Redux", value: 75, proficiency: MessagesIds.MY_SKILLS_INTERMEDIATE },
  {
    name: "Material UI",
    value: 80,
    proficiency: MessagesIds.MY_SKILLS_ADVANCED,
  },
  {
    name: "Javascript",
    value: 85,
    proficiency: MessagesIds.MY_SKILLS_ADVANCED,
  },
  {
    name: "Typescript",
    value: 70,
    proficiency: MessagesIds.MY_SKILLS_INTERMEDIATE,
  },
  {
    name: "Storybook",
    value: 50,
    proficiency: MessagesIds.MY_SKILLS_INTERMEDIATE,
  },
  {
    name: MessagesIds.UNIT_TESTS,
    value: 65,
    proficiency: MessagesIds.MY_SKILLS_INTERMEDIATE,
  },
];
