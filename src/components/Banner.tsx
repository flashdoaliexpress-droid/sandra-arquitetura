import banner from "../assets/Banner.png";
import { useInView } from "../hooks/useInView";

export default function Banner() {
  const { ref, inView } = useInView<HTMLImageElement>(0.1);

  return (
    <section
      aria-hidden
      className="w-full h-[280px] md:h-[420px] lg:h-[480px] overflow-hidden border-y border-outline-variant/50"
    >
      <img
        ref={ref}
        src={banner}
        alt=""
        loading="lazy"
        className={`w-full h-full object-cover opacity-0 ${
          inView ? "animate-fade-in" : ""
        }`}
      />
    </section>
  );
}
