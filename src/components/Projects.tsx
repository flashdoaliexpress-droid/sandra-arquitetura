import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";

type Project = {
  index: string;
  title: string;
  location: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "CASA ALVORADA",
    location: "PORTO ALEGRE, RS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJGVrxK7O5mQLBPqOWKOxgX9NMk1KEMeP5w0PfJUX7yOVUbWtKVazFQAAI3gKeogYIRJq36z2FN_-FCvyzqiSuOLnwc4ZGcKjzRRU7DZBB3kG5cAt28ey_6AMQdtIjATcJzRpJzjI4ydF3ZkPbE8BqZMbV4qZi9UUqwSYByTEd4h27--o064uZ23dJ_P8-Rkk0BoNcbJMgMKUkdz6e6vAOVMe_Kn8vPgbYHKyuLjnIx5Uq55u7mTvLcQMI9uDSXIHwnSiUVtMmx6Jd",
  },
  {
    index: "02",
    title: "EDIFÍCIO VERITAS",
    location: "GRAMADO, RS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS9ipEIOeyfIY37CgijTrV4_FaMJZXO2RGE-UofX54EoywKueBftyDeuIizH8q9vRQKTXSaGkNf_2LpL9x_yOAllsOYfUPEGyN1j-q_B4-sZON6iVfRE-PTQwsMmiD_vTDSKO9E7OOHYkgLYRlgN5FU7aE0Tev5d34je36Gc43lJj5JYVNHCNgLmZKo1uM-QTLl46ndw68MMOzsubLctpXZBYqEiUWbXkN7_RpuHp1oV85clqWjtMOmI9Xnc1dxk4SKSrnQhQB8AYa",
  },
  {
    index: "03",
    title: "PAVILHÃO TERRA",
    location: "CANELA, RS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_nAXt1HNL7iA0rT_HmvzMI-Ma9NKqS5DLCCDxiBeyodzH5P6Cztz1_1jfjlonf5mdjLmiZk12wOFRiSLD-k7FeD2XWnEDK3O9sgdoVqy5Tcth_DSl3SFO4wjVvyV3XgT3t8JkNh_JeoGuBsEA4RbE4Q5MzCLVwMSwxadO5ehZYt4KOnpGkgiYhCGur2G62rQNCcticmdk2Q8gqnKJgD_9N11Eh_SLCLQOQ08GV6pTK3vtc-oJG4v9lEJfHECULMeiUadN1Rwfj2OI",
  },
  {
    index: "04",
    title: "GALERIA MONOLITO",
    location: "CAXIAS DO SUL, RS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1OJU9BWEYv8-0m1dYFo9PeB2v8x3VOijWrm2KKhued3PZ1Yxj2Lsqj_ZJYN_ARq3Ri6S-0akZawLtfkDYR1a0PnElVz_RHcyp8P-Daeb3Ou4GBe8c9spC7hhOD4dHel3TUxgY1w0HPYT4qSSYE7LC7r6oaQMAJaGvbJSw1DMXhlafVhtnEpaXEjDgvg7sknRfr_Zd1ws_NwQHidSx4i1jrrQG7np35MwtAliG2ENwhp8J0eiBfhPglG2j_Nv8X7smLhWGzHvUWwo1",
  },
  {
    index: "05",
    title: "INSTITUTO HORIZONTE",
    location: "PORTO ALEGRE, RS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAEIsi-9pDvEYpHrs3Uvi_Bz515W9WWMpsnHqzIUaxvI9dVl0poPAZU6lnp32Qtw06i5dcW8iz8AbwwFR0Ss8-RsmoN1U2_UK28KwptwHk_paYMrYVvks9KIhVtHqC4e4mWoO8SYArlfpRu4IeP89FYA5r4JFvIIKb6QvM-z0AcTWauqLZv5alBFEB31Vv2RoOP61eVvrDhMAND0ZlyHEl0ruHQ1rk5BJ9cq7kCJnPyY6x2gm3VH0hw9xjeUt0wt2PZ2fn_v-zxWwT",
  },
];

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
              0{PROJECTS.length} PROJETOS
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
              <div
                key={p.index}
                data-card
                className="snap-start shrink-0 w-[280px] md:w-[320px] aspect-[3/4] flex flex-col bg-surface-container-lowest border border-outline-variant group cursor-pointer"
              >
                <div className="relative w-full h-[calc(100%-70px)] bg-surface-container overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ filter: "grayscale(20%)" }}
                    src={p.image}
                    alt={`Capa do projeto ${p.title}, em ${p.location}`}
                  />
                  <div className="absolute top-4 left-4 font-label-caps text-label-caps text-on-primary bg-primary-container px-2 py-1">
                    {p.index}
                  </div>
                </div>
                <div className="h-[70px] flex flex-col justify-center px-6 border-t border-outline-variant bg-surface-container-lowest">
                  <h3 className="font-headline-md text-[14px] uppercase tracking-[0.1em] text-on-surface mb-1">
                    {p.title}
                  </h3>
                  <span className="font-label-caps text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
                    {p.location}
                  </span>
                </div>
              </div>
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
              01 - 0{PROJECTS.length}
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
