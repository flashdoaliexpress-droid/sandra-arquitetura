import imagemCTAFinal from "../assets/IMAGEM CTA FINAL (2).png";

const CTA_IMAGE = imagemCTAFinal;

const PHONE = "555181149971";

export default function FinalCTA() {
  const openWhatsapp = () => {
    const msg = encodeURIComponent(
      "Olá Sandra! Tenho interesse em conversar sobre arquitetura."
    );
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

  return (
    <section id="contato" className="w-full">
      <div className="flex flex-col md:flex-row w-full min-h-[640px] md:min-h-[760px]">
        {/* LEFT - Image (50%) */}
        <div className="w-full md:w-1/2 relative h-[420px] md:h-auto border-b md:border-b-0 md:border-r border-outline-variant">
          <div className="absolute inset-0 bg-surface">
            <img
              className="w-full h-full object-cover"
              src={CTA_IMAGE}
              alt="Sala de jantar bem iluminada com luz natural cruzando móveis sofisticados, projeto entregue pela Sandra Arquitetura em 2024."
            />
          </div>
          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 bg-surface px-6 py-4 border-t border-r border-outline-variant">
            <span className="font-label-caps text-label-caps text-on-surface tracking-[0.25em] uppercase">
              PROJETO ENTREGUE 2024
            </span>
          </div>
        </div>

        {/* RIGHT - Terracotta block (50%) */}
        <div className="w-full md:w-1/2 bg-primary-container relative flex flex-col justify-between p-8 md:p-16 lg:p-24">
          {/* Top marker */}
          <div className="absolute top-8 right-8 md:top-12 md:right-12">
            <span className="font-label-caps text-label-caps text-on-primary-container/70 tracking-[0.3em] uppercase">
              VI / VI
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-center max-w-xl pt-12 md:pt-0">
            {/* Eyebrow */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-px bg-on-primary-container" />
              <span className="font-label-caps text-label-caps text-on-primary-container tracking-[0.4em] uppercase">
                VAMOS COMEÇAR
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display-lg text-[36px] md:text-[44px] leading-[1.1] tracking-[0.04em] text-on-primary-container mb-8 uppercase font-normal">
              SUA PRÓXIMA REFORMA COMEÇA COM UMA{" "}
              <span className="text-white border-b border-white pb-1 inline-block">
                CONVERSA.
              </span>
            </h2>

            {/* Supporting text */}
            <p className="font-body-lg text-body-lg text-on-primary-container/90 mb-12 max-w-md">
              Não importa se você acabou de assumir as chaves ou se mora ali
              há anos — transformar um apartamento em algo atual sem perder o
              que ele tem de melhor é o que faço melhor. A primeira conversa é
              gratuita, sem compromisso.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <button
                onClick={openWhatsapp}
                className="group inline-flex items-center bg-white text-primary-container px-8 py-4 hover:bg-white/90 transition-colors duration-300"
              >
                <span className="font-label-caps text-label-caps tracking-[0.3em] mr-4 uppercase">
                  ME CHAME NO WHATSAPP
                </span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Contact meta footer */}
          <div className="mt-16 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 border-t border-on-primary-container/30 pt-8">
            <div className="flex flex-col">
              <span className="font-label-caps text-[10px] text-on-primary-container/60 tracking-[0.3em] mb-1 uppercase">
                TELEFONE
              </span>
              <span className="font-label-caps text-[11px] text-on-primary-container tracking-[0.1em]">
                +55 51 81 14 9971
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-[10px] text-on-primary-container/60 tracking-[0.3em] mb-1 uppercase">
                LOCALIZAÇÃO
              </span>
              <span className="font-label-caps text-[11px] text-on-primary-container tracking-[0.1em] uppercase">
                PORTO ALEGRE · RS · BRASIL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
