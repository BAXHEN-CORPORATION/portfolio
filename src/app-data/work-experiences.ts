export interface Experience {
  title: string;
  begin: number | string;
  end: number | string;
  description: string;
}

export const workExperiences: Experience[] = [
  {
    title: "Desenvolvedor ReactJs Sênior",
    begin: "2021",
    end: new Date().getFullYear(),
    description:
      "Trabalhei como desenvolvedor líder com definições de tecnologias e padrões de projetos. Desenvolvi fomulários de varias etapas, Tabelas simples e tabelas dinãmicas com todas as ações do CRUD. Desenvolvi gráficos para a visualização de dados complexos. Fiz a tutoria de estagiários para o desenvolvimento front-end. Desenvolvi uma biblioteca privada para o cliente reutilizar todos os componentes feitos pelo time em diversas aplicações. Além de um chat bot para a melhoria da experiência do usuário. Documentação feita com Storybook.",
  },
  {
    title: "Desenvolvedor Fullstack",
    begin: "2020",
    end: "2021",
    description:
      "Trabalhei com o desenvolvimento de aplicações de streaming de vídeo via browser (WebRTC), desenvolvi control e de pagamentos e de assinaturas para uma aplicação usando MongoDB, NodeJs e ReactJs.",
  },
  {
    title: "Desenvolvedor Freelancer",
    begin: "2019",
    end: "2020",
    description:
      "Trabalhei desenvolvendo aplicações em diversas linguagens com oem Python, C#, Visual Basic e Javascript. Desenvolvi robos que capturam dados da internet. Dei manutenção em robos de acompanhamento de pregões e lances. Desenvolvi websites para uma agência de jogos competitivos.",
  },
];
