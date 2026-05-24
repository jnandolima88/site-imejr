import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Atividades from "@/components/Atividades";
import Equipe from "@/components/Equipe";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Atividades />
        <Equipe />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
