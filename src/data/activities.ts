export type Activity = {
  id: string;
  date: string;
  area: string;
  title: string;
  description: string;
  href: string;
};

export const activities: Activity[] = [
  {
    id: "trilha-analise-dados",
    date: "12 MAI",
    area: "Dados",
    title: "Trilha de Análise de Dados",
    description:
      "Introdução ao R, estatística básica e distribuições — primeiros passos do núcleo de Dados.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7460072373791145984",
  },
  {
    id: "curso-html-zero",
    date: "08 MAI",
    area: "Computação",
    title: "Curso: HTML do Zero",
    description:
      "Trilha de programação web do núcleo de Computação — Aula 1 disponível no YouTube da IME Jr.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7452126859275755520",
  },
  {
    id: "selecao-estudos-caso",
    date: "20 ABR",
    area: "PS 2026.1",
    title: "Seleção — Estudos de Caso",
    description:
      "Análise de queda de engajamento em plataforma de streaming de áudio — quatro abordagens, quatro equipes.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7452126859275755520",
  },
];
