"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const activities = [
  {
    date: "12 MAI",
    area: "Dados",
    areaColor: "#FFDA33",
    title: "Trilha de Análise de Dados",
    description: "Introdução ao R, estatística básica e distribuições — primeiros passos do núcleo de Dados.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7460072373791145984",
  },
  {
    date: "08 MAI",
    area: "Computação",
    areaColor: "#357DED",
    title: "Curso: HTML do Zero",
    description: "Trilha de programação web do núcleo de Computação — Aula 1 disponível no YouTube da IME Jr.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7452126859275755520",
  },
  {
    date: "20 ABR",
    area: "PS 2026.1",
    areaColor: "#FFDA33",
    title: "Seleção — Estudos de Caso",
    description: "Análise de queda de engajamento em plataforma de streaming de áudio — quatro abordagens, quatro equipes.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7452126859275755520",
  },
];

export default function Atividades() {
  return (
    <section id="atividades" className="py-24" style={{ background: "#101010" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-4">Novidades</p>
              <h2 className="section-title">Atividades Recentes</h2>
            </div>
            <a
              href="https://www.instagram.com/imejr.usp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "#5E5E5E" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#5E5E5E")}
            >
              Ver mais no Instagram
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>

        {/* Activity list */}
        <div style={{ borderTop: "1px solid #2E2E2E" }}>
          {activities.map((a, i) => (
            <Reveal key={a.title} delay={i * 80} y={16}>
            <a
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="py-8 grid sm:grid-cols-12 gap-6 items-center group"
              style={{ borderBottom: "1px solid #2E2E2E", display: "grid" }}
            >
              {/* Date */}
              <div className="sm:col-span-2">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3E3E3E" }}>
                  {a.date}
                </span>
              </div>

              {/* Tag */}
              <div className="sm:col-span-2">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                  style={{
                    background: `${a.areaColor}18`,
                    color: a.areaColor,
                    border: `1px solid ${a.areaColor}30`,
                  }}
                >
                  {a.area}
                </span>
              </div>

              {/* Title + description */}
              <div className="sm:col-span-7">
                <h3 className="font-bold text-white mb-1 group-hover:opacity-70 transition-opacity">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5E5E5E" }}>
                  {a.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="sm:col-span-1 flex justify-end">
                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "#5E5E5E" }}
                />
              </div>
            </a>
            </Reveal>
          ))}
        </div>

        {/* Mobile Instagram link */}
        <div className="mt-8 sm:hidden">
          <a
            href="https://www.instagram.com/imejr.usp/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: "#5E5E5E" }}
          >
            Ver mais no Instagram
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
