export interface Experience {
  title: string;
  begin: number | string;
  end: number | string;
  description: string;
}

export const workExperiences: Experience[] = [
  {
    title: "Palestrante",
    begin: "2019",
    end: new Date().getFullYear(),
    description:
      "Lutando contra o facismo usando a democracia. Proin gravida nibh vel velit auctor ali uet. Proin gravida nibh vel velit auctor ali uet.",
  },
  {
    title: "Presidiário",
    begin: "2018",
    end: "2019",
    description:
      "Aprendi o que o pobre passa na cadeia, sem churrasco e sem cerveja não dá. Proin gravida nibh vel velit auctor ali uet. Proin gravida nibh vel velit auctor ali uet.",
  },
  {
    title: "Presidente do Brasil",
    begin: "2002",
    end: "2012",
    description:
      "Ajudei os pobres. E tirei 25 millhões de crianças da rua. Proin gravida nibh vel velit auctor ali uet. Proin gravida nibh vel velit auctor ali uet.",
  },
];
