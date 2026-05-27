import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IME Jr — Empresa Júnior do IME-USP",
  description:
    "Soluções em Computação, Análise de Dados e Educação por estudantes da USP. #VemSerGigante",
  keywords: ["empresa júnior", "IME", "USP", "computação", "dados", "educação"],
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
