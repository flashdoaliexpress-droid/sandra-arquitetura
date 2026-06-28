

type Service = {
  index: string;
  icon: string;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    index: "01",
    icon: "architecture",
    title: "PROJETO DE REFORMA",
    description:
      "Plantas, projeto técnico e documentação completa para reformar apartamentos, casas, clínicas ou escritórios, com responsabilidade técnica.",
  },
  {
    index: "02",
    icon: "domain",
    title: "PROJETO ARQUITETÔNICO",
    description:
      "Construção do zero: concepção do imóvel inteiro, do partido arquitetônico à entrega das chaves, com responsabilidade técnica.",
  },
  {
    index: "03",
    icon: "chair",
    title: "DESIGN DE INTERIORES",
    description:
      "Ambientes pensados em camadas: cor, textura, mobiliário e luz como um só.",
  },
  {
    index: "04",
    icon: "engineering",
    title: "ACOMPANHAMENTO DE OBRA",
    description:
      "Visitas técnicas e gestão da obra para garantir que cada detalhe saia exatamente como foi desenhado.",
  },
  {
    index: "05",
    icon: "home_work",
    title: "CONSULTORIA DE IMÓVEL",
    description:
      "Avaliação técnica antes da compra: potencial de reforma, problemas estruturais e possibilidades de transformação. Olho duplo de arquiteta e corretora.",
  },
  {
    index: "06",
    icon: "assignment",
    title: "GERENCIAMENTO DE OBRA",
    description:
      "Coordenação completa: equipes, prazos, materiais e orçamento sob uma única liderança técnica.",
  },
];

import { useInView } from "../hooks/useInView";

export default function Services() {
  const header = useInView<HTMLDivElement>(0.2);
  const grid = useInView<HTMLDivElement>(0.1);
  const differential = useInView<HTMLDivElement>(0.15);

  return (
    <section
      id="servicos"
      className="relative w-full bg-primary-container text-on-primary-container py-24 md:py-32"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header */}
        <div
          ref={header.ref}
          className={`mb-16 md:mb-24 opacity-0 ${
            header.inView ? "animate-fade-up" : ""
          }`}
        >
          <h2 className="font-display-lg text-display-lg-mobile md:text-[44px] leading-[1.1] tracking-[0.045em] text-on-primary-container max-w-[800px] uppercase">
            COMO POSSO TRANSFORMAR SEU{" "}
            <span className="text-white border-b-2 border-white pb-1 inline-block">
              ESPAÇO
            </span>{" "}
            ?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container/85 mt-8 max-w-[640px]">
            Seja para reformar seu apartamento, projetar um escritório
            moderno ou construir uma casa do zero, cada projeto recebe a
            mesma dedicação. Do diagnóstico do que existe à última luminária
            instalada, pensado para que o resultado supere o que você
            imaginou.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={grid.ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-on-primary-container/25 opacity-0 ${
            grid.inView ? "animate-fade-up" : ""
          }`}
        >
          {SERVICES.map((s, i) => (
            <div
              key={s.index}
              className={`group relative border-r border-b border-on-primary-container/25 p-8 md:p-10 flex flex-col transition-colors duration-300 ${
                i === 0
                  ? "bg-terracota-hover"
                  : "hover:bg-terracota-hover"
              }`}
            >
              {/* Left vertical bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-[2px] bg-white transition-opacity ${
                  i === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />

              {/* Index + Icon */}
              <div className="flex justify-between items-start mb-10">
                <span
                  className={`font-label-caps text-label-caps tracking-[0.1em] transition-colors ${
                    i === 0
                      ? "text-white/60"
                      : "text-on-primary-container/50 group-hover:text-white/60"
                  }`}
                >
                  {s.index}
                </span>
                <span
                  className={`material-symbols-outlined transition-colors ${
                    i === 0
                      ? "text-white"
                      : "text-on-primary-container group-hover:text-white"
                  }`}
                  style={{ fontSize: "32px" }}
                  aria-hidden
                >
                  {s.icon}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`font-headline-md text-[16px] tracking-[0.08em] uppercase mb-4 transition-colors ${
                  i === 0
                    ? "text-white"
                    : "text-on-primary-container group-hover:text-white"
                }`}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                className={`font-body-md text-[13px] leading-relaxed mb-10 transition-colors ${
                  i === 0
                    ? "text-white/80"
                    : "text-on-primary-container/75 group-hover:text-white/80"
                }`}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Diferencial regional — full-width card */}
        <div
          ref={differential.ref}
          className={`relative mt-10 md:mt-14 bg-on-surface text-white p-8 md:p-14 lg:p-16 border-l-[3px] border-primary-container overflow-hidden opacity-0 ${
            differential.inView ? "animate-fade-up" : ""
          }`}
        >
          {/* Watermark icon */}
          <span
            aria-hidden
            className="material-symbols-outlined absolute right-6 top-6 md:right-10 md:top-10 text-white/[0.08] pointer-events-none select-none"
            style={{ fontSize: "180px", lineHeight: 1 }}
          >
            apartment
          </span>

          <div className="relative z-10 max-w-[820px]">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="material-symbols-outlined text-primary-fixed-dim"
                style={{ fontSize: "20px" }}
                aria-hidden
              >
                star
              </span>
              <span className="font-label-caps text-[11px] tracking-[0.32em] text-primary-fixed-dim uppercase">
                Diferencial
              </span>
            </div>

            <h3 className="font-display-lg text-[26px] md:text-[34px] leading-[1.15] tracking-[0.04em] text-white uppercase mb-6 max-w-[680px]">
              ESPECIALISTA EM APARTAMENTOS DO{" "}
              <span className="text-primary-fixed-dim border-b border-primary-fixed-dim pb-1 inline-block">
                CENTRO DE POA
              </span>
            </h3>

            <p className="font-body-lg text-[15px] md:text-[16px] leading-[1.75] text-white/80 max-w-[640px] mb-5">
              Conheço as particularidades dos prédios do centro de Porto
              Alegre: lajes, instalações, legislações de condomínio e
              soluções que preservam o que há de melhor na construção
              original. Décadas atuando na região me deram o repertório que
              só quem está em campo tem.
            </p>

            <p className="font-label-caps text-[11px] tracking-[0.18em] text-white/50 uppercase">
              Atuação presencial em Porto Alegre / RS. Projetos atendidos em
              todo o Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
