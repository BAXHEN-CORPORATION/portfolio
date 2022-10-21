import { MessagesIds } from "lang/types";

export interface Experience {
  title: string;
  begin: number | string;
  end: number | string;
  description: string;
}

export const workExperiences: Experience[] = [
  {
    title: MessagesIds.WORK_EXPERIENCE_01_TITLE,
    begin: "2021",
    end: new Date().getFullYear(),
    description: MessagesIds.WORK_EXPERIENCE_01_DESCRIPTION,
  },
  {
    title: MessagesIds.WORK_EXPERIENCE_02_TITLE,
    begin: "2020",
    end: "2021",
    description: MessagesIds.WORK_EXPERIENCE_02_DESCRIPTION,
  },
  {
    title: MessagesIds.WORK_EXPERIENCE_03_TITLE,
    begin: "2019",
    end: "2020",
    description: MessagesIds.WORK_EXPERIENCE_03_DESCRIPTION,
  },
];
