import { useEffect, useRef } from "react";
import videoSrc from "../assets/antes-depois.mp4";
import { useInView } from "../hooks/useInView";

export default function Reforma() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const text = useInView<HTMLDivElement>(0.2);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play().catch(() => {});
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="reforma" className="relative w-full bg-background overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch md:items-center">
        {/* LEFT — Headline / Subheadline */}
        <div
          ref={text.ref}
          className={`w-full md:w-1/2 flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-16 md:py-24 opacity-0 ${
            text.inView ? "animate-fade-up" : ""
          }`}
        >
          <h2 className="font-display-lg text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[0.04em] uppercase text-on-surface mb-8 max-w-[640px]">
            <span className="text-primary-container border-b border-primary-container pb-1 inline-block">
              RECOMEÇAR
            </span>
            , SEM APAGAR.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface/85 max-w-[520px] leading-[1.7]">
            Reformar não é apagar a história do apartamento. É reconhecer o
            que ele tem de melhor, ajustar o que não funciona mais e
            devolvê-lo atualizado, com a alma intacta. Cada reforma é um
            recomeço, sem precisar começar do zero.
          </p>
        </div>

        {/* RIGHT — Video full-bleed direita */}
        <div className="w-full md:w-1/2 flex md:justify-end">
          <div className="relative w-full md:w-auto h-[70vh] md:h-[88vh] aspect-[804/1144]">
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              playsInline
              preload="auto"
              disableRemotePlayback
              className="w-full h-full object-cover"
            />
            {/* Badge cobrindo logo do Kling */}
            <div className="absolute bottom-0 right-0 bg-background border-t border-l border-outline-variant/60 px-4 py-3 md:px-6 md:py-4">
              <span className="font-label-caps text-[11px] md:text-[12px] tracking-[0.3em] text-on-surface uppercase">
                Antes, Depois
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
