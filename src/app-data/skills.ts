export interface Skill {
  name: string;
  value: number;
  proficiency: string;
}

export const skills: Skill[] = [
  { name: "Honestidade", value: 99, proficiency: "Especialista" },
  { name: "Inocência", value: 85, proficiency: "Nível ONU" },
  { name: "Fofura", value: 78, proficiency: "Nata" },
  { name: "Trabalhar", value: 80, proficiency: "Sempre" },
];
