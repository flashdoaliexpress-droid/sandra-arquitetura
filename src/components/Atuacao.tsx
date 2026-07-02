import { useInView } from "../hooks/useInView";

const RESIDENCIAL = [
  "Reforma de apartamentos no Centro de POA",
  "Reforma de cozinhas e banheiros",
  "Projetos de casas novas",
  "Design de interiores residencial",
];

const COMERCIAL = [
  "Clínicas e consultórios",
  "Escritórios: advocacia, contabilidade, odontologia",
  "Salas comerciais em geral",
  "Projetos comerciais do zero",
];

const ACOMPANHAMENTO: { icon: string; text: string }[] = [
  { icon: "engineering", text: "Acompanho a obra do início ao fim" },
  { icon: "event", text: "Gerencio prazos e cronograma" },
  { icon: "electrical_services", text: "Resolvo problemas elétricos e hidráulicos" },
  { icon: "chair", text: "Incluo móveis, iluminação e decoração" },
];

export default function Atuacao() {
  const header = useInView<HTMLDivElement>(0.2);
  const table = useInView<HTMLDivElement>(0.15);
  const band = useInView<HTMLDivElement>(0.15);

  return (
    <section id="atuacao" className="relative w-full bg-background">
      {/* Top — heading + comparison table */}
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-20 md:py-32">
        <div
          ref={header.ref}
          className={`flex flex-col gap-6 mb-16 md:mb-20 max-w-3xl opacity-0 ${
            header.inView ? "animate-fade-up" : ""
          }`}
        >
          <span className="font-label-caps text-[11px] tracking-[0.3em] uppercase text-on-surface-variant">
            Áreas de Atuação
          </span>
          <h2 className="font-display-lg text-[40px] md:text-[52px] lg:text-[56px] leading-[1.05] tracking-[0.04em] uppercase text-on-surface">
            RESIDENCIAL{" "}
            <span className="text-primary-container">&</span>{" "}
            COMERCIAL.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface/85 max-w-[640px] leading-[1.7]">
            Atendo tanto quem quer reformar o apartamento onde vive há anos
            quanto quem precisa de um escritório que transmita credibilidade.
            O olhar é o mesmo: funcionalidade, estética duradoura e
            identidade.
          </p>
        </div>

        <div
          ref={table.ref}
          className={`grid grid-cols-1 md:grid-cols-2 border-t border-outline-variant opacity-0 ${
            table.inView ? "animate-fade-up" : ""
          }`}
        >
          {/* Residencial column */}
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-outline-variant">
            <div className="flex items-center gap-4 py-6 md:py-7 px-1">
              <span
                aria-hidden
                className="w-2 h-2 bg-primary-container shrink-0"
              />
              <span className="font-label-caps text-[12px] tracking-[0.3em] uppercase text-on-surface">
                Residencial
              </span>
            </div>
            <ul className="flex flex-col border-t border-outline-variant">
              {RESIDENCIAL.map((item) => (
                <li
                  key={item}
                  className="font-body-md text-body-md text-on-surface py-5 md:py-6 px-1 border-b border-outline-variant last:border-b-0 leading-[1.5]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Comercial column */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 py-6 md:py-7 px-1 md:pl-10">
              <span
                aria-hidden
                className="w-2 h-2 bg-primary-container shrink-0"
              />
              <span className="font-label-caps text-[12px] tracking-[0.3em] uppercase text-on-surface">
                Comercial
              </span>
            </div>
            <ul className="flex flex-col border-t border-outline-variant">
              {COMERCIAL.map((item) => (
                <li
                  key={item}
                  className="font-body-md text-body-md text-on-surface py-5 md:py-6 px-1 md:pl-10 border-b border-outline-variant last:border-b-0 leading-[1.5]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom — full-bleed brown band */}
      <div
        ref={band.ref}
        className={`w-full bg-primary-container opacity-0 ${
          band.inView ? "animate-fade-up" : ""
        }`}
      >
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-on-primary-container/30 pb-8 mb-12 md:mb-16">
            <h3 className="font-display-lg text-[28px] md:text-[36px] lg:text-[40px] leading-[1.1] tracking-[0.04em] uppercase text-on-primary-container max-w-[680px]">
              EU CUIDO DE TUDO, DO PROJETO À ENTREGA.
            </h3>
            <span className="font-label-caps text-[11px] tracking-[0.3em] uppercase text-on-primary-container/80 shrink-0">
              Acompanhamento Integral
            </span>
          </div>

          <ul className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 border-t border-on-primary-container/30 sm:border-t-0">
            {ACOMPANHAMENTO.map((item, i) => (
              <li
                key={item.text}
                className="flex items-start gap-5 py-6 sm:py-0 sm:pt-6 sm:flex-col sm:items-stretch sm:gap-5 border-b border-on-primary-container/30 sm:border-b-0 sm:border-t last:border-b-0"
              >
                <span
                  aria-hidden
                  className="material-symbols-outlined text-on-primary-container shrink-0 text-[32px] md:text-[36px] leading-none"
                  style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
                >
                  {item.icon}
                </span>
                <div className="flex flex-col gap-2 sm:gap-3 flex-1">
                  <span className="font-label-caps text-[11px] tracking-[0.3em] uppercase text-on-primary-container/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body-lg text-[17px] md:text-[19px] leading-[1.4] text-on-primary-container">
                    {item.text}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-14 md:mt-20 sm:border-t sm:border-on-primary-container/30 sm:pt-10 md:pt-12">
            <p className="font-display-lg text-[26px] md:text-[40px] lg:text-[48px] leading-[1.1] tracking-[0.04em] uppercase text-on-primary-container max-w-[1000px]">
              VOCÊ TEM{" "}
              <span className="sm:border-b sm:border-on-primary-container/70 sm:pb-1">
                ZERO ESTRESSE
              </span>
              . EU RESOLVO TUDO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
