import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ActivityMedia from "@/components/ActivityMedia";
import { events, initiatives, talksMedia } from "@/data/initiatives";

export const metadata: Metadata = {
  title: "Atividades | IME Jr — Além dos serviços",
  description:
    "Conheça as atividades da IME Jr: palestras, visitas a empresas, eventos no IME-USP em parceria com suas comissões organizadoras e iniciativas de educação e extensão.",
};

const chapters = [
  { id: "palestras", number: "01", label: "Palestras e visitas" },
  { id: "eventos", number: "02", label: "Eventos no IME-USP" },
  { id: "iniciativas", number: "03", label: "Iniciativas" },
];

export default function AtividadesPage() {
  return (
    <>
      <Navbar />
      <main className="activities-editorial bg-[#000000] text-[#FFFFFF]">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <h1 className="brand-heading text-[clamp(2.5rem,5.8vw,5.5rem)]">
                Atividades<br />
                <span className="text-[#FFDA33]">da IME Jr.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold leading-snug text-white max-w-xl mt-8">
                Nem tudo que a gente faz cabe num projeto.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-[#A0A0A0] max-w-xl mt-5">
                Além de desenvolver soluções em Computação e Dados, a IME Jr
                promove formação profissional, eventos no IME-USP e iniciativas
                de educação e extensão.
              </p>
              <a href="#palestras" className="inline-flex items-center gap-4 mt-8 text-sm font-semibold hover:text-[#FFDA33] transition-colors">
                Conheça nossas atividades <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
            <figure className="lg:col-span-5">
              <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden">
                <Image src="/fotos-lideres/equipe.jpeg" alt="Integrantes da equipe da IME Jr reunidos" fill priority sizes="(min-width: 1024px) 480px, 100vw" className="object-cover object-[center_45%] grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 to-transparent" aria-hidden="true" />
              </div>
              <figcaption className="flex justify-between gap-4 mt-4 text-xs text-[#A0A0A0]">
                <span>Equipe IME Jr</span>
                <span className="shrink-0">IME Jr / USP</span>
              </figcaption>
            </figure>
          </div>
          <nav aria-label="Nesta página" className="grid md:grid-cols-3 gap-x-8 mt-16 md:mt-24 border-t border-[#2E2E2E]">
            {chapters.map((chapter) => (
              <a key={chapter.id} href={`#${chapter.id}`} className="group flex items-center gap-4 py-5 border-b border-[#2E2E2E] text-sm">
                <span className="text-xs text-[#FFDA33]">{chapter.number}</span>
                <span className="flex-1">{chapter.label}</span>
                <ArrowDown size={15} className="text-[#A0A0A0] group-hover:translate-y-1 transition-transform" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </section>

        <section id="palestras" className="bg-[#101010] py-16 md:py-20" aria-labelledby="palestras-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="type-secondary text-[#FFDA33] mb-6">01 / Palestras & conversas</p>
                <h2 id="palestras-title" className="brand-heading text-3xl sm:text-4xl mb-6">
                  Formação e contato com o mercado.
                </h2>
                <p className="text-[#A0A0A0] leading-relaxed max-w-xl">
                  Recebemos profissionais e empresas para compartilhar experiências
                  sobre o mercado de trabalho, carreira e empreendedorismo.
                  Também realizamos visitas a empresas, aproximando nossos membros
                  da rotina das organizações e das possibilidades de atuação em
                  Computação e Dados.
                </p>
              </div>
              <ActivityMedia media={talksMedia} wide />
            </Reveal>
          </div>
        </section>

        <section id="eventos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28" aria-labelledby="eventos-title">
          <Reveal className="grid lg:grid-cols-12 gap-6 mb-16 md:mb-24">
            <p className="lg:col-span-4 type-secondary text-[#A0A0A0] pt-2">02 / Eventos</p>
            <div className="lg:col-span-8">
              <h2 id="eventos-title" className="brand-heading text-4xl sm:text-5xl md:text-6xl">Eventos no IME-USP</h2>
              <p className="text-[#A0A0A0] leading-relaxed max-w-xl mt-6">Promovemos eventos em nosso instituto em parceria com suas comissões organizadoras, como a aMostra de Estatística e a Semana da Computação. São oportunidades de aproximar estudantes, pesquisadores e profissionais e ampliar o debate sobre nossas áreas de atuação.</p>
            </div>
          </Reveal>
          {events.map((event, index) => (
            <article id={event.id} key={event.id} className="border-t border-[#2E2E2E] pt-10 md:pt-14 mt-14 md:mt-20">
              <Reveal className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-center">
                <ActivityMedia media={event.media} className={`md:col-span-6 ${index % 2 === 1 ? "md:order-2" : ""}`} />
                <div className="md:col-span-6">
                  <p className="type-secondary text-[#FFDA33] mb-5">{event.category}</p>
                  <h3 className="brand-heading text-3xl sm:text-4xl lg:text-5xl mb-4">{event.title}</h3>
                  <p className="text-lg font-medium text-[#D0D0D0] mb-6">{event.subtitle}</p>
                  <p className="text-[#A0A0A0] leading-relaxed">{event.description}</p>
                  <p className="text-xs leading-relaxed text-[#A0A0A0] mt-6">{event.formats}</p>
                  <a href={event.href} target="_blank" rel="noopener noreferrer" className="activity-text-link mt-8">
                    {event.linkLabel} <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </div>
              </Reveal>
            </article>
          ))}
          <p className="mt-12 text-xs leading-relaxed text-[#A0A0A0]">Programação e inscrições são divulgadas nos canais oficiais de cada evento.</p>
        </section>

        <section id="iniciativas" className="bg-[#101010] py-20 md:py-28" aria-labelledby="iniciativas-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="flex flex-col lg:flex-row justify-between gap-8 mb-16 md:mb-24">
              <p className="type-secondary text-[#A0A0A0] pt-2">03 / Iniciativas</p>
              <h2 id="iniciativas-title" className="brand-heading text-4xl sm:text-5xl md:text-6xl lg:max-w-2xl">Conhecimento bom<br /><span className="font-semibold">é conhecimento compartilhado.</span></h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-14 md:gap-12 lg:gap-24">
              <article id="imensina">
                <Reveal>
                  <p className="type-secondary text-[#FFDA33] mb-5">{initiatives[0].category}</p>
                  <h3 className="brand-heading text-3xl sm:text-4xl mb-5">{initiatives[0].title}</h3>
                  <p className="text-lg font-medium text-[#D0D0D0] mb-5">{initiatives[0].subtitle}</p>
                  <p className="text-[#A0A0A0] leading-relaxed mb-8">{initiatives[0].description}</p>
                  <ActivityMedia media={initiatives[0].media} />
                  <a href={initiatives[0].href} target="_blank" rel="noopener noreferrer" className="activity-text-link mt-7">
                    {initiatives[0].linkLabel} <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </Reveal>
              </article>
              <article id="youtube" className="md:pt-20 border-t md:border-t-0 border-[#2E2E2E] pt-12">
                <Reveal delay={90}>
                  <a href={initiatives[1].href} target="_blank" rel="noopener noreferrer" aria-label="Abrir canal de aulas da IME Jr no YouTube (nova aba)" className="group block relative aspect-video bg-[#1A1A1A] overflow-hidden">
                    <div aria-hidden="true" className="absolute inset-0 activity-video-lines opacity-40" />
                    <span className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.2em] text-[#A0A0A0]">IME Jr / Aprender junto</span>
                    <span className="absolute inset-0 flex items-center justify-center"><Play size={42} strokeWidth={1} className="text-[#FFFFFF] group-hover:scale-110 transition-transform" aria-hidden="true" /></span>
                    <span className="absolute bottom-6 left-6 text-xs text-[#A0A0A0]">Canal no YouTube <span aria-hidden="true">↗</span></span>
                  </a>
                  <p className="text-xs text-[#A0A0A0] mt-3">Espaço para destaque de uma aula · acesse o canal completo</p>
                  <p className="type-secondary text-[#FFDA33] mt-9 mb-5">{initiatives[1].category}</p>
                  <h3 className="brand-heading text-3xl sm:text-4xl mb-5">{initiatives[1].title}</h3>
                  <p className="text-[#A0A0A0] leading-relaxed">{initiatives[1].description}</p>
                  <a href={initiatives[1].href} target="_blank" rel="noopener noreferrer" className="activity-text-link mt-7">
                    {initiatives[1].linkLabel} <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </Reveal>
              </article>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Reveal className="border-t border-[#2E2E2E] pt-10 md:pt-14 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="type-secondary text-[#A0A0A0] mb-7">Fale com a IME Jr</p>
              <h2 className="brand-heading text-3xl sm:text-5xl">Parcerias e participação</h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm leading-relaxed text-[#A0A0A0] mb-6">Para propor uma palestra, organizar uma visita técnica ou conversar sobre parcerias, entre em contato com a IME Jr.</p>
              <Link href="/#contato" className="activity-text-link">Entre em contato <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
