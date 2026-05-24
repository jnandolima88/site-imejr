"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    num: "01",
    accent: "#357DED",          // azul → Computação
    title: "Computação",
    description:
      "Do site ao sistema inteligente: desenvolvemos soluções digitais completas com as tecnologias mais modernas do mercado.",
    body: "Atuamos em desenvolvimento web, aplicativos, sistemas de informação e integração de Machine Learning em produtos reais. Nossa equipe aplica boas práticas de UX/UI, arquitetura de software e metodologias ágeis",
    note: "Trabalhamos com React, Next.js, Node.js, Python, WordPress e muito mais. Se você precisa de presença digital, automação ou um sistema sob medida, a gente resolve.",
  },
  {
    num: "02",
    accent: "#FFDA33",          // amarelo → Dados
    title: "Análise de Dados",
    description:
      "Nosso time de Dados atua dando visibilidade, gerando insights e resolvendo problemas, sejam eles de caráter Empresarial ou Acadêmico.",
    body: "Trabalhamos com Python, R, SQL, Dashboards, Machine Learning, Inteligência Artificial e Estatística.",
    note: "Geração de insights, análises estatísticas, geração de métricas, visualizações em cima de bases de dados e construção de modelos de Machine Learning para previsão de números com base em dados estruturados.",
  },
  {
    num: "03",
    accent: "#D62839",          // vermelho → Educação
    title: "Educação",
    description:
      "Nosso time de Educação desenvolve projetos que atendam a demanda das instituições educacionais, de estudantes do ensino básico e pré-vestibulares.",
    body: "Nossa equipe trabalha com editoração de questões, materiais didáticos, divulgação matemática e com o cursinho Pré-vestibular IMEnsina.",
    note: "Atuamos no que diz respeito ao ensino de matemática e ao uso de recursos tecnológicos na sala de aula.",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" style={{ background: "#000000" }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <p className="section-label mb-4">O que fazemos</p>
        <h2 className="section-title">Serviços</h2>
      </div>

      {/* Services — full-width rows */}
      <div style={{ borderTop: "1px solid #2E2E2E" }}>
        {services.map((s, i) => (
          <Reveal key={s.num} delay={i * 60} y={20}>
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-12 items-start"
            style={{
              borderBottom: "1px solid #2E2E2E",
            }}
          >
            {/* Number + title */}
            <div className="lg:col-span-4">
              <span
                className="text-xs font-bold tracking-widest mb-3 block"
                style={{ color: s.accent }}
              >
                {s.num}
              </span>
              <h3 className="text-3xl font-black text-white mb-4">{s.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: "#A0A0A0" }}>
                {s.description}
              </p>
            </div>

            {/* Body */}
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed mb-4" style={{ color: "#5E5E5E" }}>
                {s.body}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#3E3E3E" }}>
                {s.note}
              </p>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-3 flex flex-col gap-3 lg:items-end">
              <a
                href="#contato"
                className="btn-primary text-sm whitespace-nowrap"
                style={{ background: s.accent, color: s.accent === "#FFDA33" ? "#101010" : "#ffffff" }}
              >
                Contato
                <ArrowRight size={14} />
              </a>
              <a
                href="#atividades"
                className="text-sm font-medium transition-colors flex items-center gap-1.5 group"
                style={{ color: "#5E5E5E" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#5E5E5E")}
              >
                Confira nossos trabalhos
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          </Reveal>
        ))}
      </div>

      <div className="pb-8" />
    </section>
  );
}
