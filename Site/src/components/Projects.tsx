import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import { PROJECTS as PROJECT_DATA } from "../projects/data";

type CardProject = {
  index: string;
  slug: string;
  title: string;
  location: string;
  image: string;
};

const PROJECTS: CardProject[] = PROJECT_DATA.map((p, i) => ({
  index: String(i + 1).padStart(2, "0"),
  slug: p.slug,
  title: p.title,
  location: p.city.toUpperCase(),
  image: p.cover,
}));

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const header = useInView<HTMLDivElement>(0.2);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section
      id="projetos"
      className="relative w-full overflow-hidden bg-background py-20 md:py-32"
    >
      {/* Terracotta band crossing the middle */}
      <div
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[280px] md:h-[360px] bg-primary-container z-0"
      />

      <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col gap-10">
        {/* Header */}
        <div
          ref={header.ref}
          className={`flex flex-col md:flex-row justify-between items-end gap-8 mb-4 opacity-0 ${
            header.inView ? "animate-fade-up" : ""
          }`}
        >
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="font-display-lg text-[40px] md:text-[44px] leading-[1.1] tracking-[0.04em] uppercase text-on-surface">
              OBRAS QUE{" "}
              <span className="text-primary-container border-b-2 border-primary-container pb-1 inline-block">
                FALAM
              </span>{" "}
              POR SI.
            </h2>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0 pb-2">
            <span className="font-label-caps text-[11px] tracking-[0.3em] text-on-surface-variant uppercase">
              {String(PROJECTS.length).padStart(2, "0")} PROJETOS
            </span>
            <div className="w-16 h-px bg-outline-variant" />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-[calc(100%+20px)] md:w-[calc(100%+64px)] -ml-margin-mobile md:-ml-margin-desktop pl-margin-mobile md:pl-margin-desktop overflow-hidden">
          <div
            ref={scrollerRef}
            className="flex gap-gutter overflow-x-auto snap-x snap-mandatory pb-4 pr-margin-mobile md:pr-margin-desktop"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {PROJECTS.map((p) => (
              <Link
                key={p.slug}
                to={`/projetos/${p.slug}`}
                data-card
                className="snap-start shrink-0 w-[280px] md:w-[320px] aspect-[3/4] flex flex-col bg-surface-container-lowest border border-outline-variant group cursor-pointer"
              >
                <div className="relative w-full h-[calc(100%-70px)] bg-surface-container overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-[filter] duration-500 group-hover:[filter:grayscale(0%)]"
                    style={{ filter: "grayscale(20%)" }}
                    src={p.image}
                    alt={`Capa do projeto ${p.title}, em ${p.location}`}
                  />
                  <div className="absolute top-4 left-4 font-label-caps text-label-caps text-on-primary bg-primary-container px-2 py-1 z-10">
                    {p.index}
                  </div>
                  {/* Animated outline frame */}
                  <div
                    aria-hidden
                    className="absolute inset-3 md:inset-4 border border-white/0 group-hover:border-white/95 group-focus-visible:border-white/95 scale-90 group-hover:scale-100 group-focus-visible:scale-100 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-500 ease-out pointer-events-none"
                  />
                </div>
                <div className="h-[70px] flex items-center px-6 border-t border-outline-variant bg-surface-container-lowest">
                  <h3 className="font-headline-md text-[14px] uppercase tracking-[0.1em] text-on-surface">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Controls + footer link */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-4 border-t border-outline-variant pt-8">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <button
                aria-label="Projeto anterior"
                onClick={() => scrollBy(-1)}
                className="w-12 h-12 flex items-center justify-center border border-outline-variant bg-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-colors duration-300 text-on-surface"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  chevron_left
                </span>
              </button>
              <button
                aria-label="Próximo projeto"
                onClick={() => scrollBy(1)}
                className="w-12 h-12 flex items-center justify-center border border-outline-variant bg-surface hover:bg-primary hover:text-on-primary hover:border-primary transition-colors duration-300 text-on-surface"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  chevron_right
                </span>
              </button>
            </div>
            <span className="font-label-caps text-label-caps tracking-[0.25em] text-on-surface-variant uppercase">
              01 - {String(PROJECTS.length).padStart(2, "0")}
            </span>
          </div>
          <Link className="group flex items-center gap-3" to="/projetos">
            <span className="font-label-caps text-label-caps tracking-[0.3em] text-on-surface group-hover:text-primary-container transition-colors duration-300 uppercase">
              VER PORTFÓLIO COMPLETO
            </span>
            <span
              className="material-symbols-outlined text-on-surface group-hover:text-primary-container transition-transform duration-300 group-hover:translate-x-1"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
