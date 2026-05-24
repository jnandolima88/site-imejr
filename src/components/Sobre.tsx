"use client";

import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function Sobre() {
  return (
    <section id="sobre" className="py-24" style={{ background: "#101010" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <Reveal>
            <p className="section-label mb-4">Quem somos</p>
            <h2 className="section-title">
              A empresa júnior do IME-USP
            </h2>
            <p className="section-subtitle">
              Somos alunos de graduação do Instituto de
              Matemática, Estatística e Ciência da Computação da Universidade de São Paulo. Aplicamos
              na prática os conhecimentos adquiridos em sala de aula, com
              supervisão de professores do IME.
            </p>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: "#A0A0A0" }}
            >
              Atendemos pessoas físicas e jurídicas que buscam soluções em
              Computação, Análise de Dados e Educação.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "IME-USP",
                "100% universitários",
                "Desde 1991",
                "CNPJ 26.531.013/0001-80",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded border"
                  style={{
                    border: "1px solid #2E2E2E",
                    color: "#5E5E5E",
                    background: "transparent",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Right: numbers */}
          <div className="grid grid-cols-2 gap-px" style={{ background: "#2E2E2E" }}>
            {[
              { end: 3,   suffix: "",  label: "áreas de atuação"  },
              { end: 30,  suffix: "+", label: "anos de história"   },
              { end: 100, suffix: "+", label: "projetos entregues" },
              { end: 50,  suffix: "+", label: "membros do IME"     },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col justify-center p-10"
                style={{ background: "#101010" }}
              >
                <span className="text-5xl font-black mb-2" style={{ color: "#FFDA33" }}>
                  <CountUp end={s.end} suffix={s.suffix} />
                </span>
                <span className="text-sm" style={{ color: "#5E5E5E" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
