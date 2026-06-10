import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IME Jr — Tecnologia, Dados e Educação com Excelência USP",
  description:
    "Soluções em tecnologia, dados e educação desenvolvidas por estudantes da USP, unindo rigor técnico, pesquisa e visão prática para desafios reais.",
  keywords: [
    "IME Jr",
    "USP",
    "Universidade de São Paulo",
    "excelência USP",
    "tecnologia USP",
    "dados USP",
    "educação USP",
    "empresa júnior",
    "empresa júnior USP",
    "empresa júnior tecnologia",
    "computação",
    "tecnologia",
    "análise de dados",
    "ciência de dados",
    "educação",
    "desenvolvimento de software",
    "desenvolvimento web",
    "sistemas sob medida",
    "aplicativos",
    "back-end",
    "front-end",
    "APIs",
    "automação",
    "machine learning",
    "inteligência artificial",
    "dashboards",
    "estatística aplicada",
    "consultoria em tecnologia",
    "consultoria em dados",
    "projetos educacionais",
    "materiais didáticos",
    "São Paulo",
    "Brasil",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
