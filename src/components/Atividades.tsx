"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Activity } from "@/data/activities";

type SupabaseActivity = {
  id: string | number;
  data: string;
  area: string;
  titulo: string;
  descricao: string;
  link: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function fetchActivities(): Promise<Activity[]> {
  if (!supabaseUrl || !supabaseKey) {
    return [];
  }

  const endpoint = new URL("/rest/v1/atividades", supabaseUrl);
  endpoint.searchParams.set("select", "id,data,area,titulo,descricao,link");
  endpoint.searchParams.set("order", "data.desc");
  endpoint.searchParams.set("limit", "3");

  const response = await fetch(endpoint.toString(), {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
  });

  if (!response.ok) {
    throw new Error("Could not load activities");
  }

  const rows = (await response.json()) as SupabaseActivity[];

  return rows.map((activity) => ({
    id: String(activity.id),
    date: formatActivityDate(activity.data),
    area: activity.area,
    title: activity.titulo,
    description: activity.descricao,
    href: activity.link,
  }));
}

function formatActivityDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);

  if (!year || !month || !day) {
    return date;
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    timeZone: "UTC",
  })
    .format(new Date(Date.UTC(year, month - 1, day)))
    .replace(".", "")
    .replace(" de ", " ")
    .toUpperCase();
}

function getAreaColor(area: string) {
  const normalized = area
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  if (normalized.includes("computacao") || normalized.includes("comp")) {
    return "#357DED";
  }

  if (normalized.includes("dados")) {
    return "#FFDA33";
  }

  if (normalized.includes("educacao")) {
    return "#D62839";
  }

  return "#4ADE80";
}

export default function Atividades() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let ignore = false;

    fetchActivities()
      .then((items) => {
        if (!ignore) {
          setActivities(items);
          setLoaded(true);
        }
      })
      .catch(() => {
        if (!ignore) {
          setActivities([]);
          setLoaded(true);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

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
          {activities.length === 0 && loaded ? (
            <div
              className="py-8 text-sm"
              style={{ color: "#5E5E5E", borderBottom: "1px solid #2E2E2E" }}
            >
              Nenhuma atividade publicada no momento.
            </div>
          ) : null}

          {activities.map((a, i) => {
            const areaColor = getAreaColor(a.area);

            return (
              <Reveal key={a.id} delay={i * 80} y={16}>
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
                      background: `${areaColor}18`,
                      color: areaColor,
                      border: `1px solid ${areaColor}30`,
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
            );
          })}
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
