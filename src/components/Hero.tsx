import { useEffect, useState } from "react";
import heroImg1DesktopPng from "../assets/Hero - Imagem 1 desktop.png";
import heroImg1DesktopWebp from "../assets/Hero - Imagem 1 desktop.webp";
import heroImg1MobilePng from "../assets/Hero - Imagem 1 mobile.png";
import heroImg1MobileWebp from "../assets/Hero - Imagem 1 mobile.webp";
import heroImg2DesktopPng from "../assets/Hero - Imagem 2 desktop.png";
import heroImg2DesktopWebp from "../assets/Hero - Imagem 2 desktop.webp";
import heroImg2MobilePng from "../assets/Hero - Imagem 2 mobile.png";
import heroImg2MobileWebp from "../assets/Hero - Imagem 2 mobile.webp";
import heroImg3DesktopPng from "../assets/Hero - Imagem 3 desktop.png";
import heroImg3DesktopWebp from "../assets/Hero - Imagem 3 desktop.webp";
import heroImg3MobilePng from "../assets/Hero - Imagem 3 mobile.png";
import heroImg3MobileWebp from "../assets/Hero - Imagem 3 mobile.webp";
import logoHero from "../Logo/Hero/Logo principal - Hero.png";

type HeroSlide = {
  desktopWebp: string;
  desktopPng: string;
  mobileWebp: string;
  mobilePng: string;
  alt: string;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    desktopWebp: heroImg1DesktopWebp,
    desktopPng: heroImg1DesktopPng,
    mobileWebp: heroImg1MobileWebp,
    mobilePng: heroImg1MobilePng,
    alt: "Interior arquitetônico iluminado pela luz dourada da hora do anoitecer, com janelas altas projetando sombras geométricas sobre piso de pedra polida.",
  },
  {
    desktopWebp: heroImg2DesktopWebp,
    desktopPng: heroImg2DesktopPng,
    mobileWebp: heroImg2MobileWebp,
    mobilePng: heroImg2MobilePng,
    alt: "Ambiente residencial com integração fluida entre cozinha e sala, marcado por materiais naturais e luz natural cruzada.",
  },
  {
    desktopWebp: heroImg3DesktopWebp,
    desktopPng: heroImg3DesktopPng,
    mobileWebp: heroImg3MobileWebp,
    mobilePng: heroImg3MobilePng,
    alt: "Detalhe arquitetônico contemporâneo com paleta neutra, tipografia de linhas retas e mobiliário sob medida.",
  },
];

const ROTATE_MS = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length);
    }, ROTATE_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex flex-col overflow-hidden bg-surface-variant"
    >
      {/* Background carousel — crossfade between slides */}
      <div className="absolute inset-0 w-full h-full z-0">
        {HERO_SLIDES.map((slide, i) => {
          const isFirst = i === 0;
          return (
            <picture
              key={i}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <source
                media="(max-width: 767px)"
                srcSet={slide.mobileWebp}
                type="image/webp"
              />
              <source
                media="(max-width: 767px)"
                srcSet={slide.mobilePng}
                type="image/png"
              />
              <source srcSet={slide.desktopWebp} type="image/webp" />
              <source srcSet={slide.desktopPng} type="image/png" />
              <img
                src={slide.desktopPng}
                alt={isFirst ? slide.alt : ""}
                aria-hidden={isFirst ? undefined : true}
                fetchPriority={isFirst ? "high" : "low"}
                loading={isFirst ? "eager" : "eager"}
                decoding="async"
                className="w-full h-full object-cover"
              />
            </picture>
          );
        })}
      </div>

      {/* Top gradient for navbar legibility */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/35 to-transparent z-10" />

      {/* Logo */}
      <div className="absolute top-1 left-margin-mobile md:left-margin-desktop z-30 flex items-center h-20 md:h-24">
        <img
          src={logoHero}
          alt="Logo Sandra"
          className="h-14 md:h-16 w-auto object-contain"
          decoding="async"
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
