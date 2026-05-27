"use client";

import { useEffect, useState } from "react";
import { Linkedin } from "lucide-react";
import Reveal from "@/components/Reveal";

type LiderRow = {
  id: string;
  nome: string;
  cargo: string;
  area: string[] | string | null;
  linkedin: string | null;
  foto: string;
};

type Lider = {
  id: string;
  nome: string;
  cargo: string;
  areas: string[];
  linkedin?: string;
  foto: string;
};

const AREA_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Computação: { bg: "#357DED18", text: "#357DED", border: "#357DED30" },
  Dados: { bg: "#FFDA3318", text: "#FFDA33", border: "#FFDA3330" },
  Educação: { bg: "#D6283918", text: "#D62839", border: "#D6283930" },
};

const TEAM_PHOTO_URL =
  "https://nzvfpnyobvhavabegazv.supabase.co/storage/v1/object/public/fotos-lideres/equipe.jpeg";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function normalizeAreas(area: LiderRow["area"]) {
  if (Array.isArray(area)) {
    return area.filter(Boolean);
  }

  if (typeof area === "string" && area.trim()) {
    return [area.trim()];
  }

  return [];
}

function getAreaColor(area: string) {
  return AREA_COLORS[area] ?? { bg: "#4ADE8018", text: "#4ADE80", border: "#4ADE8030" };
}

async function fetchLideres(): Promise<Lider[]> {
  if (!supabaseUrl || !supabaseKey) {
    return [];
  }

  const endpoint = new URL("/rest/v1/lideres", supabaseUrl);
  endpoint.searchParams.set("select", "id,nome,cargo,area,linkedin,foto");

  const response = await fetch(endpoint.toString(), {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
  });

  if (!response.ok) {
    throw new Error("Could not load lideres");
  }

  const rows = (await response.json()) as LiderRow[];

  return rows
    .map((lider) => ({
      id: lider.id,
      nome: lider.nome,
      cargo: lider.cargo,
      areas: normalizeAreas(lider.area),
      linkedin: lider.linkedin ?? undefined,
      foto: lider.foto,
    }))
    .sort((a, b) => {
      const aIsPresident = a.cargo.toLowerCase().includes("presidente");
      const bIsPresident = b.cargo.toLowerCase().includes("presidente");

      if (aIsPresident && !bIsPresident) return -1;
      if (!aIsPresident && bIsPresident) return 1;

      return a.nome.localeCompare(b.nome, "pt-BR");
    });
}

export default function Equipe() {
  const [lideres, setLideres] = useState<Lider[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let ignore = false;

    fetchLideres()
      .then((items) => {
        if (!ignore) {
          setLideres(items);
          setLoaded(true);
        }
      })
      .catch(() => {
        if (!ignore) {
          setLideres([]);
          setLoaded(true);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section id="equipe" className="py-24" style={{ background: "#101010" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className="lg:col-span-5">
              <p className="section-label mb-4">Time</p>
              <h2 className="section-title mb-4">Nossa Equipe</h2>
              <p className="text-lg leading-relaxed" style={{ color: "#A0A0A0" }}>
                Mais de 50 membros unidos pelo IME-USP e pela vontade de transformar
                conhecimento técnico em projetos reais. A liderança organiza as frentes,
                mas o trabalho da IME Jr nasce do time completo.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative max-w-3xl lg:ml-auto">
                <div
                  className="absolute -inset-3 rounded-2xl"
                  style={{ border: "1px solid #2E2E2E", background: "#0B0B0B" }}
                />
                <div
                  className="relative overflow-hidden rounded-xl border aspect-[16/10] md:aspect-[16/9]"
                  style={{ borderColor: "#3E3E3E", background: "#000000" }}
                >
                  <img
                    src={TEAM_PHOTO_URL}
                    alt="Equipe da IME Jr"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "center 45%" }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 58%, rgba(0,0,0,0.42) 100%)",
                    }}
                  />
                  <div
                    className="absolute left-0 top-0 h-full w-1.5"
                    style={{
                      background:
                        "linear-gradient(180deg, #357DED 0%, #FFDA33 48%, #D62839 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div style={{ borderTop: "1px solid #2E2E2E" }} className="pt-8">
          <div className="flex items-end justify-between gap-8 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#3E3E3E" }}>
                Liderança
              </p>
              <h3 className="text-xl md:text-2xl font-black text-white">
                Quem coordena as frentes da IME Jr
              </h3>
            </div>
            <p className="hidden md:block text-sm max-w-sm leading-relaxed" style={{ color: "#5E5E5E" }}>
              Abaixo destacamos as pessoas responsáveis por orientar áreas,
              projetos e decisões.
            </p>
          </div>

          {lideres.length === 0 && loaded ? (
            <div
              className="py-8 text-sm"
              style={{ color: "#5E5E5E", borderBottom: "1px solid #2E2E2E" }}
            >
              Nenhum líder publicado no momento.
            </div>
          ) : null}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {lideres.map((lider, index) => (
              <Reveal key={lider.id} delay={index * 60} y={16}>
                <article
                  className="rounded-lg border overflow-hidden transition-all duration-200 group"
                  style={{ background: "#1A1A1A", borderColor: "#2E2E2E" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#3E3E3E")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "#2E2E2E")}
                >
                  <div className="relative aspect-[4/3] overflow-hidden" style={{ background: "#101010" }}>
                    <img
                      src={lider.foto}
                      alt={`Foto de ${lider.nome}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-white text-base truncate">
                          {lider.nome}
                        </h3>
                        <p className="text-xs mt-1" style={{ color: "#FFDA33" }}>
                          {lider.cargo}
                        </p>
                      </div>

                      {lider.linkedin ? (
                        <a
                          href={lider.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn de ${lider.nome}`}
                          className="flex-shrink-0 transition-colors mt-0.5"
                          style={{ color: "#3E3E3E" }}
                          onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                          onMouseLeave={e => (e.currentTarget.style.color = "#3E3E3E")}
                        >
                          <Linkedin size={15} />
                        </a>
                      ) : null}
                    </div>

                    {lider.areas.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {lider.areas.map((area) => {
                          const color = getAreaColor(area);

                          return (
                            <span
                              key={area}
                              className="text-[10px] font-semibold px-2 py-1 rounded"
                              style={{
                                background: color.bg,
                                color: color.text,
                                border: `1px solid ${color.border}`,
                              }}
                            >
                              {area}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
