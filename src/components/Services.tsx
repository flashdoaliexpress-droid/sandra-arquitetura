

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
      "Plantas, projeto técnico e documentação completa para reformar ambientes ou imóveis inteiros, com responsabilidade técnica.",
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
      "Visitas técnicas e gestão da reforma para garantir que cada detalhe saia exatamente como foi desenhado.",
  },
  {
    index: "05",
    icon: "home_work",
    title: "CONSULTORIA DE IMÓVEL",
    description:
      "Avaliação técnica antes da compra: potencial de reforma, problemas estruturais e possibilidades de transformação.",
  },
  {
    index: "06",
    icon: "assignment",
    title: "GERENCIAMENTO DE OBRA",
    description:
      "Coordenação completa da reforma: equipes, prazos, materiais e orçamento sob uma única liderança técnica.",
  },
];

import { useInView } from "../hooks/useInView";

export default function Services() {
  const header = useInView<HTMLDivElement>(0.2);
  const grid = useInView<HTMLDivElement>(0.1);

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
              LAR
            </span>{" "}
            ?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container/85 mt-8 max-w-[600px]">
            Do diagnóstico do espaço existente à última luminária instalada,
            cada etapa da sua reforma pensada para que o resultado supere o
            que você imaginou (ou ainda nem sabia que queria).
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
      </div>
    </section>
  );
}
