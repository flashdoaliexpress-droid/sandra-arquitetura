import imagemSobre from "../assets/Imagem SOBRE (2).png";

const PORTRAIT = imagemSobre;

const STATS = [
  { value: "28", suffix: "+", label: "ANOS DE EXPERIÊNCIA" },
  { value: "150", suffix: "+", label: "PROJETOS ENTREGUES" },
  { value: "100", suffix: "%", label: "CLIENTES SATISFEITOS" },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative w-full bg-background py-24 md:py-32 overflow-hidden"
    >
      {/* Giant watermark 'S' */}
      <div
        aria-hidden
        className="absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden z-0 opacity-[0.05]"
      >
        <span className="font-display-lg text-[400px] md:text-[600px] leading-none text-on-surface select-none -translate-y-8">
          S
        </span>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          {/* Left: Portrait */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] relative border border-outline-variant/50 p-2">
              <img
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                style={{ filter: "grayscale(15%) sepia(8%) contrast(1.05)" }}
                src={PORTRAIT}
                alt="Retrato profissional de Sandra da Rocha, arquiteta especialista em reformas residenciais."
              />
              {/* Overlay block */}
              <div className="absolute bottom-0 left-0 bg-background border-t border-r border-outline-variant/50 p-6 md:p-8 translate-y-4 translate-x-4">
                <h2 className="font-display-lg text-headline-md tracking-[0.08em] text-on-surface mb-1 uppercase">
                  SANDRA DA ROCHA
                </h2>
                <p className="font-body-md text-label-caps text-on-surface-variant tracking-[0.1em]">
                  Arquiteta · Especialista em Reformas · UNISINOS/RS
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary-container" />
              <span className="font-label-caps text-label-caps tracking-[0.4em] text-primary-container uppercase">
                SOBRE
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display-lg text-[32px] md:text-[44px] leading-[1.15] tracking-[0.04em] text-on-surface mb-10 max-w-[95%] uppercase">
              ARQUITETURA COMO LINGUAGEM DE QUEM{" "}
              <span className="text-primary-container border-b border-primary-container pb-1 inline-block">
                HABITA
              </span>
            </h2>

            {/* Body */}
            <div className="space-y-5 font-body-md text-on-surface/85 max-w-[90%] border-l border-outline-variant pl-6 mb-12">
              <p className="leading-[1.8]">
                Formada pela{" "}
                <strong className="font-medium">UNISINOS/RS</strong> em 1997,
                sou especialista em{" "}
                <strong className="font-medium">
                  transformar apartamentos antigos em lares atuais
                </strong>
                , preservando o que eles têm de melhor.
              </p>
              <p className="leading-[1.8]">
                Quase três décadas ajudando proprietários a reformar imóveis
                sem perder a alma do espaço. Trabalho do diagnóstico inicial à
                última peça de mobiliário, em cozinhas, banheiros, salas e
                apartamentos inteiros, costurando projeto, interiores e
                execução em um único fio condutor.
              </p>
              <p className="leading-[1.8]">
                Acredito em ambientes que envelhecem com elegância, que
                respeitam quem os usa, e que carregam histórias muito além da
                estética. Em uma reforma, a história começa antes da gente
                chegar, e o trabalho é preservar o que vale a pena e atualizar
                o que precisa.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-y border-outline-variant py-8 mb-10">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col border-l border-outline-variant/40 pl-4"
                >
                  <div className="font-display-lg text-[42px] md:text-[48px] text-on-surface leading-none mb-2">
                    {s.value}
                    {s.suffix && (
                      <span className="text-primary-container text-[28px] md:text-[32px] ml-1 align-top">
                        {s.suffix}
                      </span>
                    )}
                  </div>
                  <div className="font-label-caps text-[10px] tracking-[0.15em] text-on-surface-variant uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href="#servicos"
                className="group inline-flex items-center gap-3 font-label-caps text-label-caps tracking-[0.3em] text-on-surface border-b border-primary-container pb-1 hover:text-primary-container transition-colors uppercase"
              >
                VAMOS CONVERSAR
                <span className="material-symbols-outlined text-primary-container transform group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
