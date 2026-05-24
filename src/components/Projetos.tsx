import { ExternalLink, Code2, BarChart3, GraduationCap } from "lucide-react";

const projects = [
  {
    tag: "Computação",
    icon: Code2,
    tagColor: "bg-blue-100 text-blue-700",
    title: "Plataforma de Gestão Acadêmica",
    description:
      "Sistema web completo para gestão de alunos, notas e frequência para rede de colégios particulares em São Paulo.",
    tech: ["Next.js", "PostgreSQL", "FastAPI"],
    year: "2024",
  },
  {
    tag: "Análise de Dados",
    icon: BarChart3,
    tagColor: "bg-violet-100 text-violet-700",
    title: "Dashboard de Vendas em Tempo Real",
    description:
      "Solução de BI com ETL automatizado e dashboards interativos para varejista com 30+ lojas no estado de SP.",
    tech: ["Python", "Power BI", "Airflow"],
    year: "2024",
  },
  {
    tag: "Educação",
    icon: GraduationCap,
    tagColor: "bg-emerald-100 text-emerald-700",
    title: "Apostilas de Preparatório Vestibular",
    description:
      "Série completa de materiais didáticos de Matemática e Estatística para cursinhos pré-vestibular.",
    tech: ["LaTeX", "Revisão pedagógica", "Edição"],
    year: "2023",
  },
  {
    tag: "Análise de Dados",
    icon: BarChart3,
    tagColor: "bg-violet-100 text-violet-700",
    title: "Modelo Preditivo de Churn",
    description:
      "Modelo de machine learning para prever cancelamentos em startup de SaaS, reduzindo churn em 18%.",
    tech: ["Python", "scikit-learn", "Streamlit"],
    year: "2023",
  },
  {
    tag: "Computação",
    icon: Code2,
    tagColor: "bg-blue-100 text-blue-700",
    title: "App de Monitoramento Ambiental",
    description:
      "Aplicativo mobile e API para coleta e visualização de dados de sensores IoT em tempo real.",
    tech: ["React Native", "Node.js", "InfluxDB"],
    year: "2023",
  },
  {
    tag: "Educação",
    icon: GraduationCap,
    tagColor: "bg-emerald-100 text-emerald-700",
    title: "Treinamento em Python para Dados",
    description:
      "Programa de capacitação de 40h em Python e análise de dados para equipe de engenharia de empresa multinacional.",
    tech: ["Python", "Jupyter", "Pandas"],
    year: "2022",
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Portfólio
          </span>
          <h2 className="section-title mt-3">Projetos & Cases</h2>
          <p className="section-subtitle mx-auto text-center">
            Uma amostra do que já construímos — soluções reais para desafios
            reais de empresas e organizações.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="card p-6 flex flex-col group cursor-pointer"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`${p.tagColor} text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5`}
                  >
                    <Icon size={12} />
                    {p.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {p.year}
                  </span>
                </div>

                <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-primary-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  {p.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contato"
            className="btn-primary"
          >
            Tem um projeto em mente?
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
