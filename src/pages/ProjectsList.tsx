import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import {
  CATEGORIES,
  CATEGORY_LABELS,
  filterProjects,
  PROJECTS,
  type Project,
  type ProjectCategoryFilter,
} from "../projects/data";

const FILTER_LABELS: Record<ProjectCategoryFilter, string> = {
  todos: "Projetos",
  residencial: "Projetos Residenciais",
  interiores: "Projetos de Interiores",
  comercial: "Projetos Comerciais",
};

const FILTER_DESCRIPTIONS: Record<ProjectCategoryFilter, string> = {
  todos:
    "Portfólio completo de projetos de arquitetura e interiores de Sandra da Rocha — reformas residenciais, projetos comerciais e obras autorais em Porto Alegre e todo o Brasil.",
  residencial:
    "Projetos residenciais assinados por Sandra da Rocha: casas novas, reformas de apartamentos e residências em Porto Alegre e todo o Brasil.",
  interiores:
    "Projetos de interiores e reformas de ambientes assinados por Sandra da Rocha — cozinhas, salas, banheiros e apartamentos completos.",
  comercial:
    "Projetos comerciais assinados por Sandra da Rocha: clínicas, escritórios, salas comerciais e concessionárias em Porto Alegre e todo o Brasil.",
};

function isValidFilter(value: string | null): value is ProjectCategoryFilter {
  return (
    value === "todos" ||
    value === "residencial" ||
    value === "interiores" ||
    value === "comercial"
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projetos/${project.slug}`}
      className="group relative block border border-outline-variant overflow-hidden bg-surface-container-lowest"
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden bg-surface-container">
        <img
          src={project.cover}
          alt={`Capa do projeto ${project.title}, em ${project.city}`}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          style={{ filter: "grayscale(40%)" }}
        />
      </div>

      {/* Static caption (always visible) */}
      <div className="px-6 py-5 border-t border-outline-variant flex flex-col gap-1">
        <h3 className="font-headline-md text-[14px] uppercase tracking-[0.1em] text-on-surface">
          {project.title}
        </h3>
        <span className="font-label-caps text-[10px] tracking-[0.25em] text-on-surface-variant uppercase">
          {project.city} · {project.year}
        </span>
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-x-0 bottom-0 bg-on-surface/90 backdrop-blur-sm p-7 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
        style={{
          // sit above the static caption
          bottom: "0",
        }}
      >
        <div className="flex flex-col gap-3">
          <span className="font-label-caps text-[10px] tracking-[0.3em] text-primary-fixed-dim uppercase">
            {CATEGORY_LABELS[project.category]}
          </span>
          <h4 className="font-display-lg text-[22px] tracking-[0.06em] uppercase text-white leading-tight">
            {project.title}
          </h4>
          {project.subtitle && (
            <span className="font-body-md text-[13px] text-white/80">
              {project.subtitle}
            </span>
          )}
          <span className="inline-flex items-center gap-2 mt-2 font-label-caps text-label-caps tracking-[0.3em] text-white uppercase">
            VER PROJETO
            <span
              className="material-symbols-outlined text-[16px]"
              aria-hidden
            >
              arrow_forward
            </span>
          </span>
        </div>
      </div>

      {/* Left vertical bar on hover (terracota accent) */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}

export default function ProjectsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawCategory = searchParams.get("categoria");
  const activeFilter: ProjectCategoryFilter = isValidFilter(rawCategory)
    ? rawCategory
    : "todos";

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeFilter]);

  const projects = filterProjects(activeFilter);

  const setFilter = (value: ProjectCategoryFilter) => {
    if (value === "todos") {
      const next = new URLSearchParams(searchParams);
      next.delete("categoria");
      setSearchParams(next, { replace: false });
    } else {
      setSearchParams({ categoria: value }, { replace: false });
    }
  };

  const seoTitle = `${FILTER_LABELS[activeFilter]} · Sandra da Rocha Arquitetura`;
  const seoDescription = FILTER_DESCRIPTIONS[activeFilter];
  const itemListJsonLd =
    activeFilter === "todos"
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: PROJECTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://www.arqsandra.com.br/projetos/${p.slug}`,
            name: p.title,
          })),
        }
      : undefined;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        path="/projetos"
        noindex={activeFilter !== "todos"}
        jsonLd={itemListJsonLd}
      />
      <Navbar />
      <main className="bg-background min-h-screen pt-32 md:pt-40 pb-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Tabs (textos guias) */}
          <div className="border-b border-outline-variant mb-12 md:mb-16 overflow-x-auto">
            <div className="flex gap-8 md:gap-12 min-w-fit">
              {CATEGORIES.map((tab) => {
                const isActive = tab.value === activeFilter;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setFilter(tab.value)}
                    className={`relative font-label-caps text-label-caps tracking-[0.3em] uppercase pb-4 transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-primary-container"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-primary-container" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          ) : (
            <div className="border border-outline-variant bg-surface-container-low p-16 text-center">
              <span
                className="material-symbols-outlined text-primary-container text-[40px] mb-4 inline-block"
                aria-hidden
              >
                construction
              </span>
              <h2 className="font-display-lg text-[24px] uppercase tracking-[0.06em] text-on-surface mb-2">
                EM BREVE
              </h2>
              <p className="font-body-md text-on-surface-variant max-w-md mx-auto">
                Novos projetos desta categoria serão publicados em breve.
                Enquanto isso, conheça os demais.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
