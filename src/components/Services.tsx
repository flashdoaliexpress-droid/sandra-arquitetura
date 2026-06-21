

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
    icon: "chair",
    title: "DESIGN DE INTERIORES",
    description:
      "Ambientes pensados em camadas: cor, textura, mobiliário e luz como um só.",
  },
  {
    index: "03",
    icon: "engineering",
    title: "ACOMPANHAMENTO DE OBRA",
    description:
      "Visitas técnicas e gestão da reforma para garantir que cada detalhe saia exatamente como foi desenhado.",
  },
  {
    index: "04",
    icon: "assignment",
    title: "GERENCIAMENTO DE OBRA",
    description:
      "Coordenação completa da reforma — equipes, prazos, materiais e orçamento sob uma única liderança técnica.",
  },
  {
    index: "05",
    icon: "layers",
    title: "SELEÇÃO DE MATERIAIS",
    description:
      "Curadoria de porcelanatos, revestimentos e acabamentos com o melhor custo-benefício.",
  },
  {
    index: "06",
    icon: "weekend",
    title: "CURADORIA DE MÓVEIS",
    description:
      "Indicação de fornecedores e peças que conciliam estética, durabilidade e orçamento.",
  },
  {
    index: "07",
    icon: "lightbulb",
    title: "PROJETO LUMINOTÉCNICO",
    description:
      "Planejamento de pontos de luz, temperatura e cenas que transformam o ambiente.",
  },
  {
    index: "08",
    icon: "support_agent",
    title: "CONSULTORIA PONTUAL",
    description:
      "Para dúvidas específicas, orientação objetiva por sessão, sem contrato completo.",
  },
];

export default function Services() {
  const handleSchedule = () => {
    const phone = "555181149971";
    const message = encodeURIComponent(
      "Olá Sandra! Gostaria de agendar uma conversa sobre meu projeto."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section
      id="servicos"
      className="relative w-full bg-primary-container text-on-primary-container py-24 md:py-32 pb-32 md:pb-48"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="block font-label-caps text-label-caps tracking-[0.45em] text-on-primary-container/70 mb-6 uppercase">
            SERVIÇOS
          </span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-on-primary-container/25">
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

        {/* Bottom CTA */}
        <div className="mt-24 md:mt-32 text-center max-w-2xl mx-auto flex flex-col items-center">
          <div className="w-px h-16 bg-on-primary-container/40 mb-8" />
          <h3 className="font-headline-lg text-headline-lg text-on-primary-container uppercase mb-6">
            NÃO SABE POR ONDE COMEÇAR?
          </h3>
          <p className="font-body-lg text-body-lg text-on-primary-container/85 mb-10 max-w-[520px]">
            A primeira conversa é gratuita, me conta seu projeto e eu te
            oriento o próximo passo.
          </p>
          <button
            onClick={handleSchedule}
            className="inline-flex items-center justify-center border border-on-primary-container px-12 py-5 font-label-caps text-label-caps tracking-[0.35em] text-on-primary-container hover:bg-on-primary-container hover:text-primary-container transition-colors duration-300 uppercase"
          >
            AGENDAR CONVERSA
            <span
              className="material-symbols-outlined ml-3"
              style={{ fontSize: "16px" }}
              aria-hidden
            >
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
