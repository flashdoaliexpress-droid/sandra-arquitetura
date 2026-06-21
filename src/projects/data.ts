import projeto1Cover from "../Projetos/Projeto 1/Projeto 1.png";
import projeto1g2 from "../Projetos/Projeto 1/Projeto 1 (2).png";
import projeto1g3 from "../Projetos/Projeto 1/Projeto 1 (3).png";
import projeto1g4 from "../Projetos/Projeto 1/Projeto 1 (4).png";

export type ProjectCategory = "residencial" | "interiores" | "comercial";

export type ProjectCategoryFilter = "todos" | ProjectCategory;

export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  location: string;
  city: string;
  year: string;
  category: ProjectCategory;
  client?: string;
  area?: string;
  status?: string;
  description: string[];
  cover: string;
  gallery: string[];
};

const STITCH_1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDJGVrxK7O5mQLBPqOWKOxgX9NMk1KEMeP5w0PfJUX7yOVUbWtKVazFQAAI3gKeogYIRJq36z2FN_-FCvyzqiSuOLnwc4ZGcKjzRRU7DZBB3kG5cAt28ey_6AMQdtIjATcJzRpJzjI4ydF3ZkPbE8BqZMbV4qZi9UUqwSYByTEd4h27--o064uZ23dJ_P8-Rkk0BoNcbJMgMKUkdz6e6vAOVMe_Kn8vPgbYHKyuLjnIx5Uq55u7mTvLcQMI9uDSXIHwnSiUVtMmx6Jd";
const STITCH_2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBS9ipEIOeyfIY37CgijTrV4_FaMJZXO2RGE-UofX54EoywKueBftyDeuIizH8q9vRQKTXSaGkNf_2LpL9x_yOAllsOYfUPEGyN1j-q_B4-sZON6iVfRE-PTQwsMmiD_vTDSKO9E7OOHYkgLYRlgN5FU7aE0Tev5d34je36Gc43lJj5JYVNHCNgLmZKo1uM-QTLl46ndw68MMOzsubLctpXZBYqEiUWbXkN7_RpuHp1oV85clqWjtMOmI9Xnc1dxk4SKSrnQhQB8AYa";
const STITCH_3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB_nAXt1HNL7iA0rT_HmvzMI-Ma9NKqS5DLCCDxiBeyodzH5P6Cztz1_1jfjlonf5mdjLmiZk12wOFRiSLD-k7FeD2XWnEDK3O9sgdoVqy5Tcth_DSl3SFO4wjVvyV3XgT3t8JkNh_JeoGuBsEA4RbE4Q5MzCLVwMSwxadO5ehZYt4KOnpGkgiYhCGur2G62rQNCcticmdk2Q8gqnKJgD_9N11Eh_SLCLQOQ08GV6pTK3vtc-oJG4v9lEJfHECULMeiUadN1Rwfj2OI";
const STITCH_4 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD1OJU9BWEYv8-0m1dYFo9PeB2v8x3VOijWrm2KKhued3PZ1Yxj2Lsqj_ZJYN_ARq3Ri6S-0akZawLtfkDYR1a0PnElVz_RHcyp8P-Daeb3Ou4GBe8c9spC7hhOD4dHel3TUxgY1w0HPYT4qSSYE7LC7r6oaQMAJaGvbJSw1DMXhlafVhtnEpaXEjDgvg7sknRfr_Zd1ws_NwQHidSx4i1jrrQG7np35MwtAliG2ENwhp8J0eiBfhPglG2j_Nv8X7smLhWGzHvUWwo1";
const STITCH_5 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAAEIsi-9pDvEYpHrs3Uvi_Bz515W9WWMpsnHqzIUaxvI9dVl0poPAZU6lnp32Qtw06i5dcW8iz8AbwwFR0Ss8-RsmoN1U2_UK28KwptwHk_paYMrYVvks9KIhVtHqC4e4mWoO8SYArlfpRu4IeP89FYA5r4JFvIIKb6QvM-z0AcTWauqLZv5alBFEB31Vv2RoOP61eVvrDhMAND0ZlyHEl0ruHQ1rk5BJ9cq7kCJnPyY6x2gm3VH0hw9xjeUt0wt2PZ2fn_v-zxWwT";

export const PROJECTS: Project[] = [
  {
    slug: "casa-aurum",
    title: "CASA AURUM",
    subtitle: "Cozinha Gourmet Integrada",
    location: "Lago Sul · Brasília",
    city: "Lago Sul, DF",
    year: "2024",
    category: "interiores",
    client: "Casal de empresários",
    area: "48 m²",
    status: "Concluído",
    description: [
      "A Casa Aurum é um projeto de interiores pensado para transformar a cozinha no verdadeiro centro da residência. Localizada no Lago Sul, em Brasília, a proposta nasceu para atender um casal jovem de empresários que valoriza praticidade, elegância e momentos de convivência dentro de casa.",
      "O ambiente foi desenvolvido para ir além da função tradicional de uma cozinha. A ideia era criar um espaço gourmet acolhedor, sofisticado e funcional, capaz de atender tanto à rotina diária quanto aos encontros com amigos e familiares.",
      "A paleta de tons neutros — bege, taupe, madeira natural e preto — cria uma atmosfera contemporânea. A grande ilha central é o elemento protagonista, com acabamento em pedra clara e três banquetas. Armários planejados com acabamento fosco, painel ripado de madeira no backsplash, iluminação LED quente, geladeira inox e torre de madeira com fornos completam a composição.",
    ],
    cover: projeto1Cover,
    gallery: [projeto1g2, projeto1g3, projeto1g4],
  },
  {
    slug: "casa-alvorada",
    title: "CASA ALVORADA",
    subtitle: "Residência Unifamiliar",
    location: "Porto Alegre · RS",
    city: "Porto Alegre, RS",
    year: "2024",
    category: "residencial",
    area: "320 m²",
    status: "Concluído",
    description: [
      "Projeto residencial autoral pensado para uma família com duas crianças, em terreno de meia encosta no bairro Três Figueiras. A casa se abre para o jardim sul pelas duas faces, capturando luz indireta durante todo o dia.",
      "O partido organiza dois blocos perpendiculares: social no térreo (sala integrada à cozinha e ao jardim) e íntimo no segundo pavimento, ligado por uma escada de concreto aparente que funciona como espinha estrutural.",
    ],
    cover: STITCH_1,
    gallery: [STITCH_2, STITCH_3],
  },
  {
    slug: "edificio-veritas",
    title: "EDIFÍCIO VERITAS",
    subtitle: "Conjunto Residencial",
    location: "Gramado · RS",
    city: "Gramado, RS",
    year: "2023",
    category: "residencial",
    area: "1.200 m²",
    status: "Em obra",
    description: [
      "Pequeno edifício de quatro pavimentos em Gramado, com seis unidades exclusivas de 180m² cada. Fachada em pedra natural local e madeira termotratada, dialogando com a arquitetura serrana sem cair no pastiche alpino.",
    ],
    cover: STITCH_2,
    gallery: [STITCH_1, STITCH_3, STITCH_4],
  },
  {
    slug: "pavilhao-terra",
    title: "PAVILHÃO TERRA",
    subtitle: "Showroom Comercial",
    location: "Canela · RS",
    city: "Canela, RS",
    year: "2023",
    category: "comercial",
    client: "Marca de móveis sob medida",
    area: "240 m²",
    status: "Concluído",
    description: [
      "Showroom comercial para uma marca de móveis sob medida, projetado como pavilhão único de pé-direito triplo. A volumetria simples permite que o produto exposto seja sempre o protagonista, com a arquitetura recuando para o papel de moldura.",
    ],
    cover: STITCH_3,
    gallery: [STITCH_4, STITCH_5],
  },
  {
    slug: "galeria-monolito",
    title: "GALERIA MONOLITO",
    subtitle: "Espaço Cultural",
    location: "Caxias do Sul · RS",
    city: "Caxias do Sul, RS",
    year: "2022",
    category: "comercial",
    area: "180 m²",
    status: "Concluído",
    description: [
      "Galeria de arte privada com programa misto: exposição, residência de artistas e pequeno auditório. Estrutura única em concreto aparente, vedações leves em vidro e taipa de pilão.",
    ],
    cover: STITCH_4,
    gallery: [STITCH_5, STITCH_1],
  },
];

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  residencial: "RESIDENCIAL",
  interiores: "DESIGN DE INTERIORES",
  comercial: "COMERCIAL",
};

export const CATEGORIES: { value: ProjectCategoryFilter; label: string }[] = [
  { value: "todos", label: "TODOS" },
  { value: "residencial", label: "RESIDENCIAIS" },
  { value: "interiores", label: "DESIGN DE INTERIORES" },
  { value: "comercial", label: "COMERCIAIS" },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectNeighbors(slug: string): {
  prev: Project;
  next: Project;
} {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  const len = PROJECTS.length;
  const prev = PROJECTS[(i - 1 + len) % len];
  const next = PROJECTS[(i + 1) % len];
  return { prev, next };
}

export function filterProjects(filter: ProjectCategoryFilter): Project[] {
  if (filter === "todos") return PROJECTS;
  return PROJECTS.filter((p) => p.category === filter);
}
