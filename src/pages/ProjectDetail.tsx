import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import {
  CATEGORY_LABELS,
  getProjectBySlug,
  getProjectNeighbors,
} from "../projects/data";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { STORAGE_KEYS } from "../lib/storage";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [, setLastViewed] = useLocalStorage<string>(
    STORAGE_KEYS.lastViewedProject,
    ""
  );

  useEffect(() => {
    if (project) {
      setLastViewed(project.slug);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project?.slug]);

  if (!project) {
    return <Navigate to="/projetos" replace />;
  }

  const { prev, next } = getProjectNeighbors(project.slug);

  const fichaItems: { label: string; value?: string }[] = [
    { label: "LOCALIZAÇÃO", value: project.location },
    { label: "ANO", value: project.year },
    { label: "ÁREA", value: project.area },
    { label: "CLIENTE", value: project.client },
    { label: "STATUS", value: project.status },
    { label: "CATEGORIA", value: CATEGORY_LABELS[project.category] },
  ].filter((item) => item.value);

  const allImages = [project.cover, ...project.gallery];

  const seoTitle = `${project.title} · ${project.city} · Sandra da Rocha Arquitetura`;
  const rawDescription = project.description[0] ?? project.subtitle ?? "";
  const seoDescription =
    rawDescription.length > 155
      ? rawDescription.slice(0, 152).trimEnd() + "..."
      : rawDescription;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: rawDescription,
    author: { "@id": "https://www.arqsandra.com.br/#sandra" },
    creator: { "@id": "https://www.arqsandra.com.br/#sandra" },
    dateCreated: project.year,
    locationCreated: {
      "@type": "Place",
      name: project.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: project.city,
        addressCountry: "BR",
      },
    },
    image: `https://www.arqsandra.com.br${project.cover.startsWith("/") ? project.cover : "/" + project.cover}`,
    url: `https://www.arqsandra.com.br/projetos/${project.slug}`,
  };

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        path={`/projetos/${project.slug}`}
        image={project.cover}
        type="article"
        jsonLd={projectJsonLd}
      />
      <Navbar />
      <main className="bg-background min-h-screen pt-28 md:pt-32 pb-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Back link */}
          <Link
            to="/projetos"
            className="group inline-flex items-center gap-2 mb-10 md:mb-14 font-label-caps text-label-caps tracking-[0.3em] text-on-surface-variant hover:text-primary-container transition-colors uppercase"
          >
            <span
              className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1"
              aria-hidden
            >
              arrow_back
            </span>
            VOLTAR PARA PROJETOS
          </Link>

          {/* Split: left sticky text + right gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
            {/* LEFT - sticky on desktop */}
            <aside className="lg:sticky lg:top-32 lg:self-start lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto pr-2">
              {/* Category chip */}
              <div className="inline-block border border-primary-container px-3 py-1 mb-8">
                <span className="font-label-caps text-[10px] tracking-[0.3em] text-primary-container uppercase">
                  {CATEGORY_LABELS[project.category]}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display-lg text-[40px] md:text-[52px] leading-[1.05] tracking-[0.04em] uppercase text-on-surface mb-4">
                {project.title}
              </h1>

              {/* Subtitle */}
              {project.subtitle && (
                <p className="font-body-lg text-body-lg text-on-surface/70 mb-10">
                  {project.subtitle}
                </p>
              )}

              {/* Ficha técnica */}
              <dl className="grid grid-cols-1 gap-y-3 border-y border-outline-variant py-6 mb-10">
                {fichaItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-baseline gap-6"
                  >
                    <dt className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant uppercase shrink-0">
                      {item.label}
                    </dt>
                    <dd className="font-body-md text-[14px] text-on-surface text-right">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Description */}
              <div className="space-y-5 font-body-md text-on-surface/85 mb-10">
                {project.description.map((p, i) => (
                  <p key={i} className="leading-[1.8]">
                    {p}
                  </p>
                ))}
              </div>

              {/* Prev / Next */}
              <div className="flex justify-between items-center gap-4 border-t border-outline-variant pt-6 mt-6">
                <Link
                  to={`/projetos/${prev.slug}`}
                  className="group flex flex-col items-start text-left flex-1 min-w-0"
                >
                  <span className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant uppercase mb-1 inline-flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-[14px] transition-transform group-hover:-translate-x-1"
                      aria-hidden
                    >
                      arrow_back
                    </span>
                    ANTERIOR
                  </span>
                  <span className="font-headline-md text-[14px] tracking-[0.08em] uppercase text-on-surface group-hover:text-primary-container transition-colors truncate w-full">
                    {prev.title}
                  </span>
                </Link>
                <Link
                  to={`/projetos/${next.slug}`}
                  className="group flex flex-col items-end text-right flex-1 min-w-0"
                >
                  <span className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant uppercase mb-1 inline-flex items-center gap-1">
                    PRÓXIMO
                    <span
                      className="material-symbols-outlined text-[14px] transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      arrow_forward
                    </span>
                  </span>
                  <span className="font-headline-md text-[14px] tracking-[0.08em] uppercase text-on-surface group-hover:text-primary-container transition-colors truncate w-full">
                    {next.title}
                  </span>
                </Link>
              </div>
            </aside>

            {/* RIGHT - gallery */}
            <div className="flex flex-col gap-gutter">
              {allImages.map((src, i) => (
                <figure
                  key={i}
                  className="border border-outline-variant bg-surface-container overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`${project.title} - imagem ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-auto block"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
