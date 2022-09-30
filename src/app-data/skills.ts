export interface Skill {
  name: string;
  value: number;
  proficiency: string;
}

export const skills: Skill[] = [
  { name: "Design", value: 80, proficiency: "Experiente" },
  { name: "Photoshop", value: 65, proficiency: "Intermediário" },
  { name: "Excel", value: 30, proficiency: "Iniciante" },
  { name: "Fotografia", value: 50, proficiency: "Intermediário" },
];
