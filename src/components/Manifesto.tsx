import imagemSessaoComplementar from "../assets/Imagem Sessão Complementar.png";
import { useInView } from "../hooks/useInView";

const MANIFESTO_IMAGE = imagemSessaoComplementar;

const PILLARS = [
  {
    title: "AUTORAL",
    description:
      "Design rigoroso e intransferível, pautado na essência singular de cada contexto.",
  },
  {
    title: "ATEMPORAL",
    description:
      "Rejeição a tendências passageiras em favor de uma estética de durabilidade visual e construtiva.",
  },
  {
    title: "PRESENTE",
    description:
      "Arquitetura concebida para o agora, conectada intrinsecamente ao seu tempo e lugar.",
  },
];

export default function Manifesto() {
  const text = useInView<HTMLDivElement>(0.15);
  const image = useInView<HTMLDivElement>(0.15);

  return (
    <section
      id="manifesto"
      className="relative w-full overflow-hidden min-h-[640px] md:min-h-[820px] flex items-center bg-background"
    >
      <div className="w-full max-w-container-max mx-auto lg:pl-margin-desktop flex flex-col-reverse lg:flex-row h-full">
        {/* LEFT - 60% text */}
        <div
          ref={text.ref}
          className={`w-full lg:w-[60%] pt-12 pb-16 lg:py-24 px-margin-mobile lg:px-0 lg:pr-gutter flex flex-col justify-center z-10 relative opacity-0 ${
            text.inView ? "animate-fade-up" : ""
          }`}
        >
          {/* Headline */}
          <h2 className="font-display-lg text-[40px] md:text-[44px] leading-[1.1] tracking-[0.04em] uppercase text-on-background mb-10 max-w-[800px]">
            PROJETO BOM É AQUELE QUE VOCÊ NÃO PRECISA{" "}
            <span className="text-primary-container border-b border-primary-container pb-1 inline-block">
              EXPLICAR.
            </span>
          </h2>

          {/* Paragraph */}
          <p className="font-body-lg text-body-lg text-on-background/85 mb-14 md:mb-16 max-w-[640px]">
            Acredito que a arquitetura deve falar por si, especialmente em
            reformas, onde o desafio é maior e o resultado precisa parecer
            inevitável. Reformo apartamentos antigos preservando o que eles têm
            de melhor: pela clareza das formas, pela honestidade dos materiais
            e pela intuição do uso. Sem discursos complexos, sem demolir o que
            faz sentido, apenas atualizando o que precisa.
          </p>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 md:mb-16 max-w-[720px]">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="flex">
                <div className="w-px h-full bg-primary-container mr-4" />
                <div>
                  <h3 className="font-headline-md text-[14px] uppercase tracking-widest text-on-background mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-body-md text-[12px] text-on-background/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#servicos"
            className="group inline-flex items-center self-start"
          >
            <span className="font-label-caps text-[12px] uppercase tracking-[0.3em] text-on-background border-b border-transparent group-hover:border-primary-container transition-colors duration-300 pb-1">
              QUERO ENTENDER MELHOR
            </span>
            <span
              className="material-symbols-outlined text-primary-container ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              arrow_right_alt
            </span>
          </a>
        </div>

        {/* RIGHT - 40% image (full-bleed top on mobile, anchored right on desktop) */}
        <div
          ref={image.ref}
          className={`w-full aspect-[4/3] lg:aspect-auto lg:w-[40%] lg:h-auto lg:absolute lg:top-0 lg:right-0 lg:bottom-0 opacity-0 ${
            image.inView ? "animate-fade-in" : ""
          }`}
        >
          <div className="relative w-full h-full">
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-700 hover:filter hover:grayscale-0"
              style={{
                backgroundImage: `url('${MANIFESTO_IMAGE}')`,
                filter: "grayscale(20%)",
              }}
              role="img"
              aria-label="Interior arquitetônico minimalista com geometria nítida e luz natural cruzando o piso polido."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
