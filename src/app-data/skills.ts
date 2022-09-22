export interface Skill {
  name: string;
  value: number;
  proficiency: string;
}

export const skills: Skill[] = [
  { name: "AngularJs", value: 75, proficiency: "Advanced" },
  { name: "NodeJs", value: 65, proficiency: "Intermediate" },
  { name: "ReactJs", value: 25, proficiency: "Novice" },
  { name: "Javascript", value: 90, proficiency: "Expert" },
];
