import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

type Testimonial = {
  quote: string;
  name: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "A integração e maximização dos espaços ficou excelente. Pelo profissionalismo e atenção com que conduziu a obra em todas as etapas, eu a indico.",
    name: "Hélio",
  },
  {
    quote:
      "O projeto ficou extremamente bem resolvido, funcional e com uma estética impecável. Quero deixar registrada minha satisfação com o trabalho que a Sandra realizou no meu apartamento.",
    name: "Patricia Santos",
  },
  {
    quote:
      "Profissionalismo, competência, agilidade e pró-atividade na entrega do trabalho. Recomendo muito o trabalho desta artista, como eu a chamo. Nota mil.",
    name: "Alexandre Pinto",
  },
  {
    quote:
      "Já contratei o serviço da arquiteta Sandra. Recomendo por ser uma excelente profissional. Qualidade, confiança e rapidez.",
    name: "Antonio Severo",
  },
  {
    quote:
      "Ótima arquiteta, responsável e muito criativa. Adorei o trabalho dela. Recomendo muito.",
    name: "Rodrigo Kalife",
  },
  {
    quote: "Uma ótima profissional. Ouve a necessidade do cliente. Gratidão.",
    name: "Inez Aso",
  },
  {
    quote:
      "Atenciosa, prestativa e cumpriu os prazos combinados. Recomendo!",
    name: "Patrícia Inglez de Souza",
  },
  {
    quote:
      "Profissional de qualidade, faz tudo com muito cuidado e dedicação. Super indico os serviços dela.",
    name: "Claudio Maciel",
  },
];

const AUTOPLAY_MS = 3000;
const GOOGLE_REVIEWS_URL = "https://share.google/8XzOKPDnlV2CzNHmb";

export default function Testimonials() {
  const section = useInView<HTMLDivElement>(0.2);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const total = TESTIMONIALS.length;

  const goTo = useCallback(
    (i: number) => setActive(((i % total) + total) % total),
    [total]
  );
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || !section.inView) return;
    timerRef.current = window.setTimeout(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [active, paused, section.inView, next]);

  const current = TESTIMONIALS[active];

  return (
    <section
      id="depoimentos"
      ref={section.ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative w-full bg-background py-24 md:py-32 overflow-hidden"
    >
      {/* Giant decorative quote mark */}
      <div
        aria-hidden
        className="absolute left-1/2 top-12 md:top-16 -translate-x-1/2 pointer-events-none select-none"
      >
        <span className="font-display-lg text-[180px] md:text-[280px] leading-none text-primary-container/[0.07]">
          “
        </span>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        {/* Eyebrow + title */}
        <div
          className={`text-center mb-16 md:mb-20 opacity-0 ${
            section.inView ? "animate-fade-up" : ""
          }`}
        >
          <p className="font-label-caps text-[11px] md:text-[12px] tracking-[0.32em] text-primary-container uppercase mb-4">
            Depoimentos
          </p>
          <h2 className="font-display-lg text-[28px] md:text-[40px] leading-[1.15] tracking-[0.04em] uppercase text-on-surface max-w-[760px] mx-auto">
            O QUE DIZEM SOBRE O{" "}
            <span className="text-primary-container border-b border-primary-container pb-1 inline-block">
              TRABALHO
            </span>
          </h2>
        </div>

        {/* Carousel viewport */}
        <div className="relative max-w-[860px] mx-auto">
          {/* Quote */}
          <div
            className="min-h-[260px] md:min-h-[280px] flex items-center justify-center"
            aria-live="polite"
            aria-atomic="true"
          >
            <blockquote
              key={active}
              className="text-center animate-fade-in"
            >
              <p className="font-display-lg text-[22px] md:text-[30px] lg:text-[34px] leading-[1.4] tracking-[0.01em] text-on-surface/90 max-w-[780px] mx-auto">
                “{current.quote}”
              </p>
              <footer className="mt-10 md:mt-12">
                <p className="font-label-caps text-[12px] md:text-[13px] tracking-[0.32em] uppercase text-on-surface">
                  {current.name}
                </p>
                <p className="font-label-caps text-[10px] tracking-[0.28em] uppercase text-on-surface-variant/70 mt-2">
                  Cliente
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Controls row */}
          <div className="mt-14 md:mt-16 flex items-center justify-between border-t border-outline-variant/60 pt-6">
            {/* Prev */}
            <button
              type="button"
              onClick={prev}
              aria-label="Depoimento anterior"
              className="group inline-flex items-center gap-3 font-label-caps text-[11px] tracking-[0.32em] uppercase text-on-surface-variant hover:text-primary-container transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] transform group-hover:-translate-x-1 transition-transform">
                arrow_left_alt
              </span>
              Anterior
            </button>

            {/* Index dots */}
            <div className="flex items-center gap-3">
              <span className="font-label-caps text-[11px] tracking-[0.28em] text-on-surface tabular-nums">
                {String(active + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Ir para depoimento ${i + 1}`}
                    aria-current={i === active ? "true" : undefined}
                    className={`h-[2px] transition-all duration-300 ${
                      i === active
                        ? "w-8 bg-primary-container"
                        : "w-4 bg-outline-variant hover:bg-on-surface-variant"
                    }`}
                  />
                ))}
              </div>
              <span className="font-label-caps text-[11px] tracking-[0.28em] text-on-surface-variant/70 tabular-nums">
                {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={next}
              aria-label="Próximo depoimento"
              className="group inline-flex items-center gap-3 font-label-caps text-[11px] tracking-[0.32em] uppercase text-on-surface-variant hover:text-primary-container transition-colors"
            >
              Próximo
              <span className="material-symbols-outlined text-[18px] transform group-hover:translate-x-1 transition-transform">
                arrow_right_alt
              </span>
            </button>
          </div>

          {/* Google reviews link */}
          <div className="mt-10 md:mt-12 text-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-label-caps text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-on-surface border-b border-primary-container pb-1 hover:text-primary-container transition-colors"
            >
              <span
                className="material-symbols-outlined text-primary-container text-[18px]"
                aria-hidden
              >
                reviews
              </span>
              Ver todas as avaliações no Google
              <span className="material-symbols-outlined text-primary-container text-[16px] transform group-hover:translate-x-1 transition-transform">
                arrow_outward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
