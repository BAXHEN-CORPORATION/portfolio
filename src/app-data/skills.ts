export interface Skill {
  name: string;
  value: number;
  proficiency: string;
}

export const skills: Skill[] = [
  { name: "ReactJs", value: 90, proficiency: "Experiente" },
  { name: "Redux", value: 75, proficiency: "Intermediário" },
  { name: "Material UI", value: 80, proficiency: "Experiente" },
  { name: "Javascript", value: 85, proficiency: "Experiente" },
  { name: "Typescript", value: 70, proficiency: "Intermediário" },
  { name: "Storybook", value: 50, proficiency: "Intermediário" },
  { name: "Testes Unitários", value: 65, proficiency: "Intermediário" },
];
