import banner from "../assets/Banner.png";
import { useInView } from "../hooks/useInView";

export default function Banner() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section
      aria-labelledby="banner-headline"
      className="relative w-full overflow-hidden border-y border-outline-variant/50 min-h-[480px] md:min-h-[560px] lg:min-h-[620px] flex items-center"
    >
      {/* Background image */}
      <img
        src={banner}
        alt="Interior de apartamento reformado pela Sandra, com luz natural e mobiliário sob medida."
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark gradient overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/25 md:from-black/65 md:via-black/40 md:to-black/15"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-24">
        <div
          ref={ref}
          className={`max-w-[640px] opacity-0 ${
            inView ? "animate-fade-up" : ""
          }`}
        >
          {/* Eyebrow */}
          <p className="font-label-caps text-[11px] md:text-[12px] tracking-[0.32em] text-white/75 uppercase mb-6">
            O QUE VOCÊ GANHA COMIGO
          </p>

          {/* Headline */}
          <h2
            id="banner-headline"
            className="font-display-lg text-[28px] md:text-[40px] lg:text-[46px] leading-[1.15] tracking-[0.035em] uppercase text-white mb-8"
          >
            VOCÊ NÃO CONTRATA UM PROJETO. CONTRATA UMA{" "}
            <span className="text-primary-fixed-dim border-b border-primary-fixed-dim pb-1 inline-block">
              OBRA SEM DOR DE CABEÇA.
            </span>
          </h2>

          {/* Subheadline */}
          <p className="font-body-lg text-[15px] md:text-[17px] leading-[1.75] text-white/85 max-w-[560px]">
            Do diagnóstico à última almofada. E, no meio do caminho, todas as
            soluções que ninguém vê: fornecedores, prazos, imprevistos,
            decisões técnicas. Você me conta a vida que quer ter no espaço;
            eu cuido do resto.
          </p>
        </div>
      </div>
    </section>
  );
}
