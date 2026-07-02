import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Manifesto from "../components/Manifesto";
import Projects from "../components/Projects";
import Reforma from "../components/Reforma";
import Atuacao from "../components/Atuacao";
import Services from "../components/Services";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const ROUTE_TO_ANCHOR: Record<string, string> = {
  "/": "hero",
  "/sobre": "sobre",
  "/manifesto": "manifesto",
  "/servicos": "servicos",
  "/contato": "contato",
};

type SeoConfig = { title: string; description: string };

const ROUTE_TO_SEO: Record<string, SeoConfig> = {
  "/": {
    title:
      "Sandra da Rocha · Arquiteta em Porto Alegre — Reformas, Projetos Residenciais e Comerciais",
    description:
      "Arquiteta com 28 anos de experiência em reformas de apartamentos, casas e projetos comerciais. Especialista em edifícios do centro histórico de Porto Alegre / RS.",
  },
  "/sobre": {
    title: "Sobre Sandra da Rocha · Arquiteta UNISINOS/RS 1998",
    description:
      "Arquiteta formada pela UNISINOS/RS em 1998, com 28 anos de trajetória em reformas residenciais e projetos comerciais em Porto Alegre e todo o Brasil.",
  },
  "/manifesto": {
    title: "Manifesto · Arquitetura Autoral, Atemporal e Presente",
    description:
      "Projeto bom é aquele que você não precisa explicar. Três pilares — autoral, atemporal, presente — guiam cada projeto assinado por Sandra da Rocha.",
  },
  "/servicos": {
    title: "Serviços de Arquitetura e Reforma em Porto Alegre",
    description:
      "Projeto de reforma, projeto arquitetônico, design de interiores, acompanhamento de obra, consultoria de imóvel e gerenciamento de obra em Porto Alegre / RS.",
  },
  "/contato": {
    title: "Contato · Sandra da Rocha Arquitetura",
    description:
      "Fale com Sandra pelo WhatsApp para conversar sobre seu projeto de reforma, arquitetura ou design de interiores. Primeira conversa gratuita, sem compromisso.",
  },
};

const HOMEPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.arqsandra.com.br/",
  name: "Sandra da Rocha Arquitetura",
  inLanguage: "pt-BR",
  publisher: { "@id": "https://www.arqsandra.com.br/#business" },
};

export default function Home() {
  const { pathname } = useLocation();
  const seo = ROUTE_TO_SEO[pathname] ?? ROUTE_TO_SEO["/"];

  useEffect(() => {
    const id = ROUTE_TO_ANCHOR[pathname];
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [pathname]);

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path={pathname}
        jsonLd={pathname === "/" ? HOMEPAGE_JSON_LD : undefined}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Manifesto />
        <Services />
        <div aria-hidden className="h-10 md:hidden bg-background" />
        <Banner />
        <Projects />
        <Reforma />
        <Atuacao />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
