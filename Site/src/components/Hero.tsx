import { useState, useEffect } from "react";
import heroImg1Desktop from "../assets/Hero - Imagem 1 desktop.png";
import heroImg1Mobile from "../assets/Hero - Imagem 1 mobile.png";
import heroImg2Desktop from "../assets/Hero - Imagem 2 desktop.png";
import heroImg2Mobile from "../assets/Hero - Imagem 2 mobile.png";
import heroImg3Desktop from "../assets/Hero - Imagem 3 desktop.png";
import heroImg3Mobile from "../assets/Hero - Imagem 3 mobile.png";
import logoHero from "../Logo/Hero/Logo principal - Hero.png";

const HERO_IMAGES = [
  {
    desktop: heroImg1Desktop,
    mobile: heroImg1Mobile,
  },
  {
    desktop: heroImg2Desktop,
    mobile: heroImg2Mobile,
  },
  {
    desktop: heroImg3Desktop,
    mobile: heroImg3Mobile,
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = isMobile
    ? HERO_IMAGES[currentImageIndex].mobile
    : HERO_IMAGES[currentImageIndex].desktop;

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex flex-col overflow-hidden bg-surface-variant"
    >
      <div
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url('${currentImage}')` }}
        role="img"
        aria-label="Interior arquitetônico iluminado pela luz dourada da hora do anoitecer, com janelas altas projetando sombras geométricas sobre piso de pedra polida."
      />
      {/* Top gradient for navbar legibility */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/35 to-transparent z-10" />

      {/* Logo */}
      <div className="absolute top-1 left-margin-mobile md:left-margin-desktop z-30 flex items-center h-20 md:h-24">
        <img
          src={logoHero}
          alt="Logo Sandra"
          className="h-14 md:h-16 w-auto object-contain"
        />
      </div>

      {/* Content */}
      <main className="relative z-20 flex-grow flex flex-col justify-end px-margin-mobile md:px-margin-desktop pb-margin-desktop max-w-container-max mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end w-full">
          {/* Headline */}
          <div className="flex flex-col items-start">
            <div className="hidden md:block w-px h-24 bg-white/60 mb-6 ml-1" />
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white leading-[1.0] tracking-[0.04em] uppercase max-w-3xl">
              ARQUITETURA
              <br />
              <span className="text-white tracking-[0.06em] pr-4">
                AUTORAL
              </span>
            </h1>
          </div>

          {/* Bottom right meta */}
          <div className="hidden md:block pb-2">
            <span className="font-label-caps text-label-caps tracking-[0.5em] uppercase text-white/70">
              EST. 1997
            </span>
          </div>
        </div>
      </main>
    </section>
  );
}
