export interface Experience {
  title: string;
  begin: number | string;
  end: number | string;
  description: string;
}

export const workExperiences: Experience[] = [
  {
    title: "Designer Web",
    begin: "2019",
    end: new Date().getFullYear(),
    description:
      "Designer Web. Proin gravida nibh vel velit auctor ali uet. Proin gravida nibh vel velit auctor ali uet.",
  },
  {
    title: "Estagiária de publicidade",
    begin: "2018",
    end: "2019",
    description:
      "Estagiária de publicidade. Proin gravida nibh vel velit auctor ali uet. Proin gravida nibh vel velit auctor ali uet.",
  },
  {
    title: "Graduação em Artes Gráficas",
    begin: "2015",
    end: "2018",
    description:
      "Graduação em Artes Gráficas. Proin gravida nibh vel velit auctor ali uet. Proin gravida nibh vel velit auctor ali uet.",
  },
];
