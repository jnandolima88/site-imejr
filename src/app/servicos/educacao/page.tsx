import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookOpenText,
  FileText,
  GraduationCap,
  PenTool,
  Presentation,
  School,
  UsersRound,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const accent = "#D62839";

const pillars = [
  {
    title: "Cursos e oficinas",
    text: "Ministramos cursos, aulas e atividades formativas em matemática, programação, tecnologia e temas ligados ao universo do IME-USP.",
  },
  {
    title: "Cursinho popular",
    text: "Mantemos o Pré-vestibular IMEnsina, uma iniciativa educacional voltada ao acesso ao ensino superior e à formação de estudantes.",
  },
  {
    title: "Materiais e editoração",
    text: "Produzimos, revisamos e organizamos questões, listas, apostilas, materiais didáticos e conteúdos educacionais.",
  },
];

const capabilities = [
  {
    icon: Presentation,
    title: "Cursos ministrados",
    text: "Aulas, minicursos, oficinas e trilhas introdutórias em matemática, programação, dados e tecnologia.",
  },
  {
    icon: School,
    title: "Pré-vestibular IMEnsina",
    text: "Atuação em projeto popular de preparação para vestibulares, com foco em impacto social e ensino de qualidade.",
  },
  {
    icon: PenTool,
    title: "Editoração de questões",
    text: "Criação, revisão, padronização e organização de questões para avaliações, listas e bancos de exercícios.",
  },
  {
    icon: BookOpenText,
    title: "Materiais didáticos",
    text: "Apostilas, listas, roteiros de aula e materiais de apoio pensados para clareza, progressão e aprendizagem.",
  },
  {
    icon: BookOpen,
    title: "Divulgação matemática",
    text: "Conteúdos e atividades para aproximar matemática, estatística e computação de diferentes públicos.",
  },
  {
    icon: FileText,
    title: "Revisão pedagógica",
    text: "Apoio na estruturação de conteúdo, linguagem, sequência didática e coerência de materiais educacionais.",
  },
  {
    icon: GraduationCap,
    title: "Apoio a estudantes",
    text: "Projetos voltados a ensino básico, pré-vestibular e formação complementar em temas técnicos.",
  },
  {
    icon: UsersRound,
    title: "Projetos institucionais",
    text: "Parcerias com escolas, organizações e iniciativas que buscam apoio técnico-pedagógico.",
  },
];

const process = [
  "Entendimento do público, objetivo e nível de conhecimento",
  "Definição do formato: curso, material, lista, aula ou projeto",
  "Produção, revisão e organização do conteúdo",
  "Entrega com orientação para aplicação ou continuidade",
];

const formats = [
  "Cursos",
  "Oficinas",
  "Aulas",
  "Listas de exercícios",
  "Apostilas",
  "Questões",
  "Materiais digitais",
  "Divulgação matemática",
  "Pré-vestibular",
  "Tecnologia educacional",
];

export const metadata: Metadata = {
  title: "Educação | IME Jr",
  description:
    "Projetos educacionais da IME Jr: cursos, oficinas, cursinho popular, editoração de questões e materiais didáticos.",
};

export default function EducacaoPage() {
  return (
    <>
      <Navbar logoOnly />
      <main style={{ background: "#000000" }}>
        <section
          className="pt-32 pb-24"
          style={{ borderBottom: "1px solid #2E2E2E" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <Reveal className="lg:col-span-8" y={18}>
                <p className="section-label mb-4" style={{ color: accent }}>
                  Serviços / Educação
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight max-w-5xl">
                  Educação que transforma conhecimento técnico em aprendizado claro, aplicável e de alto impacto.
                </h1>
              </Reveal>

              <Reveal className="lg:col-span-4" delay={120} y={18}>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#A0A0A0" }}>
                  Desenvolvemos cursos, materiais e projetos educacionais
                  conectando a formação da USP a demandas concretas de ensino.
                </p>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Link
                    href="#comece-seu-projeto"
                    className="btn-primary justify-center"
                    style={{ background: accent, color: "#ffffff" }}
                  >
                    Conversar sobre um projeto
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: "#101010" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-px" style={{ background: "#2E2E2E" }}>
              {pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 80} y={16}>
                <div className="service-panel p-8 h-full" style={{ background: "#101010" }}>
                  <h2 className="text-xl font-black text-white mb-4">
                    {pillar.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
                    {pillar.text}
                  </p>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" style={{ background: "#000000" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl mb-14">
              <p className="section-label mb-4">Frentes de atuação</p>
              <h2 className="section-title">
                Do conteúdo à aula, ajudamos a construir experiências de
                aprendizagem mais claras.
              </h2>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map(({ icon: Icon, title, text }, index) => (
                <Reveal key={title} delay={index * 45} y={16}>
                <article
                  className="service-panel rounded-lg p-6 border h-full"
                  style={{ background: "#1A1A1A", borderColor: "#2E2E2E" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                    style={{ background: "#D6283918", border: "1px solid #D6283935" }}
                  >
                    <Icon size={18} style={{ color: accent }} />
                  </div>
                  <h3 className="font-black text-white mb-3">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
                    {text}
                  </p>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" style={{ background: "#101010" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-14">
              <Reveal className="lg:col-span-5">
                <p className="section-label mb-4">Como trabalhamos</p>
                <h2 className="section-title mb-5">
                  Método simples para alinhar conteúdo, público e formato.
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "#A0A0A0" }}>
                  Antes de produzir, entendemos quem vai aprender, qual é o
                  objetivo e qual formato faz mais sentido. A partir disso,
                  estruturamos uma entrega clara, aplicável e bem organizada.
                </p>
              </Reveal>

              <Reveal className="lg:col-span-7" delay={100} y={18} style={{ borderTop: "1px solid #2E2E2E" }}>
                {process.map((step, index) => (
                  <div
                    key={step}
                    className="service-process-row grid grid-cols-[56px_1fr] gap-6 py-6"
                    style={{ borderBottom: "1px solid #2E2E2E" }}
                  >
                    <span className="text-sm font-black" style={{ color: accent }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-semibold text-white">{step}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-24" style={{ background: "#000000" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <Reveal className="lg:col-span-5">
                <p className="section-label mb-4">Formatos possíveis</p>
                <h2 className="section-title mb-5">
                  Projetos educacionais ajustados ao seu contexto.
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "#A0A0A0" }}>
                  A entrega pode ser uma aula, uma trilha completa, um material
                  revisado ou um projeto educacional mais amplo.
                </p>
              </Reveal>

              <Reveal className="lg:col-span-7 flex flex-wrap gap-3" delay={100} y={18}>
                {formats.map((format, index) => (
                  <span
                    key={format}
                    className="service-pill text-sm font-semibold px-4 py-2 rounded-lg border"
                    style={{
                      borderColor: "#2E2E2E",
                      color: "#A0A0A0",
                      background: "#101010",
                      transitionDelay: `${index * 12}ms`,
                    }}
                  >
                    {format}
                  </span>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="comece-seu-projeto"
          className="py-24"
          style={{ background: "#101010" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal
              y={18}
              className="animated-service-gradient rounded-lg p-8 md:p-12 grid lg:grid-cols-12 gap-10 items-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(214,40,57,0.18) 0%, #1A1A1A 42%, rgba(214,40,57,0.08) 62%, #101010 100%)",
                border: "1px solid #D6283935",
              }}
            >
              <div className="lg:col-span-8">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ background: accent, border: "1px solid #F05A68" }}
                >
                  <Image
                    src="/logo.png"
                    alt="IME Jr"
                    width={36}
                    height={20}
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Tem uma aula, curso ou material que precisa ganhar forma?
                </h2>
                <p className="text-base leading-relaxed max-w-3xl" style={{ color: "#A0A0A0" }}>
                  Conte o público e o objetivo. A gente ajuda a transformar a
                  ideia em uma entrega educacional clara.
                </p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Link
                  href="https://calendly.com/joel-landim-imejr/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center w-full sm:w-auto"
                  style={{ background: accent, color: "#ffffff" }}
                >
                  Fale com a equipe
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
