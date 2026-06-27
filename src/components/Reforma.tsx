import { useEffect, useRef, useState } from "react";
import videoSrc from "../assets/antes-depois-scroll.mp4";
import { useInView } from "../hooks/useInView";

const SCROLL_MULTIPLIER = 3;

export default function Reforma() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const text = useInView<HTMLDivElement>(0.2);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper) return;

    const reduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setReady(true);
      return;
    }

    let rafId = 0;

    const update = () => {
      const duration = video.duration;
      if (!duration || Number.isNaN(duration)) {
        rafId = 0;
        return;
      }
      const rect = wrapper.getBoundingClientRect();
      const total = wrapper.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      const targetTime = progress * duration;

      if (Math.abs(video.currentTime - targetTime) > 0.008) {
        video.currentTime = targetTime;
      }
      rafId = 0;
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    const onMeta = () => {
      setReady(true);
      onScroll();
    };

    if (video.readyState >= 1) {
      onMeta();
    } else {
      video.addEventListener("loadedmetadata", onMeta);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="reforma"
      ref={wrapperRef}
      className="relative w-full bg-background"
      style={{ height: `${SCROLL_MULTIPLIER * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="h-full flex flex-col md:flex-row items-stretch md:items-center justify-start md:justify-between pb-10 md:pb-0">
          {/* LEFT — Headline / Subheadline */}
          <div
            ref={text.ref}
            className={`w-full md:w-1/2 flex flex-col justify-center px-margin-mobile md:px-margin-desktop py-8 md:py-0 opacity-0 ${
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

          {/* RIGHT — Scroll-scrub video (full bleed right) */}
          <div className="w-full md:w-1/2 flex md:justify-end">
            <div className="relative h-[50vh] md:h-[88vh] aspect-[804/1144] w-full md:w-auto">
              <video
                ref={videoRef}
                src={videoSrc}
                muted
                playsInline
                preload="auto"
                disableRemotePlayback
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                  ready ? "opacity-100" : "opacity-0"
                }`}
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
      </div>
    </section>
  );
}
