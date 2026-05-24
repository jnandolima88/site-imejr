"use client";

import { useState } from "react";
import { Linkedin } from "lucide-react";
import { members, type Area } from "@/data/members";
import Reveal from "@/components/Reveal";

const AREA_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Computação:          { bg: "#357DED18", text: "#357DED", border: "#357DED30" },
  Dados:               { bg: "#FFDA3318", text: "#FFDA33", border: "#FFDA3330" },
  Educação:            { bg: "#D6283918", text: "#D62839", border: "#D6283930" },
};

const FILTERS: { label: string; value: Area }[] = [
  { label: "Computação", value: "Computação" },
  { label: "Dados", value: "Dados" },
  { label: "Educação", value: "Educação" },
];

function shortName(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length <= 2) return name;
  return `${parts[0]} ${parts[parts.length - 1]}`;
}

function initials(name: string) {
  const parts = name.trim().split(" ").filter(p => !["de","da","do","dos","das","e"].includes(p.toLowerCase()));
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Avatar gradient by initials (deterministic)
const GRADIENTS = [
  "linear-gradient(135deg,#357DED,#1a4fa8)",
  "linear-gradient(135deg,#FFDA33,#c9a800)",
  "linear-gradient(135deg,#D62839,#8c0017)",
  "linear-gradient(135deg,#5E5E5E,#2e2e2e)",
];
function avatarGradient(name: string) {
  const code = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return GRADIENTS[code % GRADIENTS.length];
}
function avatarTextColor(name: string) {
  const code = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  return code % GRADIENTS.length === 1 ? "#101010" : "#ffffff"; // yellow → dark text
}

const leadership = members.filter(m => m.roleRank < 3).sort((a, b) => a.roleRank - b.roleRank);
const regular    = members.filter(m => m.roleRank === 3);

export default function Equipe() {
  const [filter, setFilter] = useState<Area>("Computação");

  const filteredMembers = regular.filter(m => m.areas.includes(filter));

  return (
    <section id="equipe" className="py-24" style={{ background: "#101010" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal>
          <p className="section-label mb-4">Time</p>
          <h2 className="section-title mb-2">Nossa Equipe</h2>
          <p className="section-subtitle mb-16">
            {members.length} pessoas unidas pelo IME-USP e pela vontade de fazer algo real.
          </p>
        </Reveal>

        {/* ── Leadership ─────────────────────────────────── */}
        <div style={{ borderTop: "1px solid #2E2E2E" }} className="pb-16">
          <p className="text-xs font-semibold uppercase tracking-widest pt-8 pb-8" style={{ color: "#3E3E3E" }}>
            Liderança
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {leadership.map(m => (
              <div
                key={m.name}
                className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200"
                style={{ background: "#1A1A1A", borderColor: "#2E2E2E" }}
              >
                {/* Avatar */}
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm"
                  style={{ background: avatarGradient(m.name), color: avatarTextColor(m.name) }}
                >
                  {initials(m.name)}
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-white text-sm truncate">{m.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#FFDA33" }}>{m.role}</p>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {m.areas.map(a => (
                      <span
                        key={a}
                        className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                        style={{ background: AREA_COLORS[a]?.bg, color: AREA_COLORS[a]?.text }}
                      >
                        {a}
                      </span>
                    ))}
                    {m.departments.map(d => (
                      <span
                        key={d}
                        className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                        style={{ background: "#2E2E2E", color: "#5E5E5E" }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LinkedIn */}
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${m.name}`}
                    className="flex-shrink-0 transition-colors"
                    style={{ color: "#3E3E3E" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#3E3E3E")}
                  >
                    <Linkedin size={15} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Members ────────────────────────────────────── */}
        <div style={{ borderTop: "1px solid #2E2E2E" }}>
          {/* Filter tabs */}
          <div className="flex items-center gap-2 flex-wrap pt-8 pb-8">
            <p className="text-xs font-semibold uppercase tracking-widest mr-2" style={{ color: "#3E3E3E" }}>
              Membros
            </p>
            {FILTERS.map(f => {
              const active = filter === f.value;
              const aColor = AREA_COLORS[f.value]?.text;
              return (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-150"
                  style={{
                    background: active ? aColor : "transparent",
                    color: active ? (f.value === "Dados" ? "#101010" : "#ffffff") : "#5E5E5E",
                    borderColor: active ? aColor : "#2E2E2E",
                  }}
                >
                  {f.label}
                  <span className="ml-1.5 opacity-60">
                    {regular.filter(m => m.areas.includes(f.value)).length}
                  </span>
                </button>
              );
            })}
            <span className="ml-auto text-xs" style={{ color: "#3E3E3E" }}>
              {filteredMembers.length} {filteredMembers.length === 1 ? "membro" : "membros"}
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredMembers.map(m => (
              <div
                key={m.name}
                className="p-4 rounded-xl border flex flex-col items-center text-center transition-all duration-200 group"
                style={{ background: "#1A1A1A", borderColor: "#2E2E2E" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#3E3E3E")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#2E2E2E")}
              >
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm mb-3 group-hover:scale-105 transition-transform duration-200"
                  style={{ background: avatarGradient(m.name), color: avatarTextColor(m.name) }}
                >
                  {initials(m.name)}
                </div>

                {/* Name */}
                <p className="text-xs font-semibold text-white leading-tight mb-1 line-clamp-2">
                  {shortName(m.name)}
                </p>

                {/* Areas */}
                {m.areas.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-1 mt-1">
                    {m.areas.map(a => (
                      <span
                        key={a}
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                        style={{ background: AREA_COLORS[a]?.bg, color: AREA_COLORS[a]?.text }}
                      >
                        {a === "Computação" ? "Comp." : a}
                      </span>
                    ))}
                  </div>
                )}

                {/* LinkedIn */}
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${m.name}`}
                    className="mt-2 transition-colors"
                    style={{ color: "#3E3E3E" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#3E3E3E")}
                  >
                    <Linkedin size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
