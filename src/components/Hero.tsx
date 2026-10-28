"use client";

import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,218,51,0.06) 0%, transparent 70%)",
        }}
      />

      {/* animate-hero aplica stagger fade-in-up nos filhos diretos */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-32 animate-hero">

        {/* 1 */}
        <p className="type-secondary mb-8" style={{ color: "#A0A0A0" }}>
          IME Jr · Computação e Dados · USP
        </p>

        {/* 2 */}
        <h1 className="brand-heading text-[clamp(2.5rem,6.5vw,6rem)] text-white mb-8">
          Código para criar.
          <br />
          <span style={{ color: "#FFDA33" }}>Dados para ir além.</span>
        </h1>

        <div className="max-w-2xl mx-auto mb-10">
          <p className="type-secondary mb-2" style={{ color: "#FFDA33" }}>
            Construímos tecnologia e transformamos dados em decisões.
          </p>
          <p className="type-secondary" style={{ color: "#A0A0A0" }}>
            Da primeira ideia ao próximo desafio, com o talento de quem faz USP.
          </p>
        </div>

        {/* 4 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#servicos" className="btn-primary">
            Nossos serviços
            <ArrowRight size={16} />
          </a>
          <a href="#contato" className="btn-ghost">
            Fale conosco
          </a>
        </div>
        <a href="/atividades" className="inline-flex items-center gap-2 mt-8 text-sm text-[#A0A0A0] hover:text-white transition-colors">
          Além dos serviços, tem muito mais por aqui
          <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>

      {/* Scroll cue — wrapper faz o fadeIn, filho faz o bounce */}
      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center justify-center transition-colors"
        style={{
          color: "#2E2E2E",
          opacity: 0,
          animation: "fadeIn 900ms cubic-bezier(0.16,1,0.3,1) 700ms forwards",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "#5E5E5E")}
        onMouseLeave={e => (e.currentTarget.style.color = "#2E2E2E")}
      >
        <ChevronDown size={24} className="animate-bounce" />
      </a>
    </section>
  );
}
