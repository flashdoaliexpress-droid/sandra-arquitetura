import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Manifesto from "../components/Manifesto";
import Projects from "../components/Projects";
import Reforma from "../components/Reforma";
import Services from "../components/Services";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

const ROUTE_TO_ANCHOR: Record<string, string> = {
  "/": "hero",
  "/sobre": "sobre",
  "/manifesto": "manifesto",
  "/servicos": "servicos",
  "/contato": "contato",
};

export default function Home() {
  const { pathname } = useLocation();

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
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
