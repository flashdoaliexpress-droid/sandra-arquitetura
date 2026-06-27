import imagemSobre from "../assets/Imagem SOBRE (2).png";
import { useInView } from "../hooks/useInView";

const PORTRAIT = imagemSobre;

export default function About() {
  const portrait = useInView<HTMLDivElement>(0.2);
  const content = useInView<HTMLDivElement>(0.2);

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
          <div
            ref={portrait.ref}
            className={`w-full md:w-1/2 relative opacity-0 ${
              portrait.inView ? "animate-fade-in" : ""
            }`}
          >
            <div className="aspect-[4/5] relative border border-outline-variant/50 p-2">
              <img
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                style={{ filter: "grayscale(15%) sepia(8%) contrast(1.05)" }}
                src={PORTRAIT}
                alt="Retrato profissional de Sandra da Rocha, arquiteta especialista em reformas residenciais."
              />
            </div>
          </div>

          {/* Right: Content */}
          <div
            ref={content.ref}
            className={`w-full md:w-1/2 flex flex-col justify-center opacity-0 ${
              content.inView ? "animate-fade-up" : ""
            }`}
          >
            {/* Title */}
            <h2 className="font-display-lg text-[32px] md:text-[44px] leading-[1.15] tracking-[0.04em] text-on-surface mb-10 max-w-[95%] uppercase">
              ARQUITETURA COMO LINGUAGEM DE QUEM{" "}
              <span className="text-primary-container border-b border-primary-container pb-1 inline-block">
                HABITA
              </span>
            </h2>

            {/* Body */}
            <div className="space-y-5 font-body-md text-on-surface/85 max-w-[90%] border-l border-outline-variant pl-6 mb-8">
              <p className="leading-[1.8]">
                Formada pela{" "}
                <strong className="font-medium">UNISINOS/RS</strong> em 1998,
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

            {/* Metadata discreta */}
            <div className="max-w-[90%] border-t border-outline-variant/60 pt-5 mb-10 space-y-2">
              <p className="font-label-caps text-[10px] tracking-[0.25em] text-on-surface/80 uppercase">
                Sandra da Rocha
                <span className="text-on-surface-variant/70">
                  {" · "}Arquiteta{" · "}UNISINOS/RS 1998
                </span>
              </p>
              <p className="font-label-caps text-[10px] tracking-[0.25em] text-on-surface-variant/80 uppercase">
                28+ anos{" · "}150+ projetos{" · "}100% clientes satisfeitos
              </p>
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
