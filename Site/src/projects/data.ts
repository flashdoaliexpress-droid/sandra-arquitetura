// Projeto 1 — Casa Aurum
import projeto1Cover from "../Projetos/Projeto 1/Projeto 1.png";
import projeto1g2 from "../Projetos/Projeto 1/Projeto 1 (2).png";
import projeto1g3 from "../Projetos/Projeto 1/Projeto 1 (3).png";
import projeto1g4 from "../Projetos/Projeto 1/Projeto 1 (4).png";

// Projeto 2 — Sala Jardim de Luz
import projeto2Cover from "../Projetos/Projeto 2/Projeto 2.png";
import projeto2g2 from "../Projetos/Projeto 2/Projeto 2 (2).png";
import projeto2g3 from "../Projetos/Projeto 2/Projeto 2 (3).png";
import projeto2g4 from "../Projetos/Projeto 2/Projeto 2 (4).png";

// Projeto 3 — Banheiro Compacto Natural
import projeto3Cover from "../Projetos/Projeto 3/Projeto 3.png";
import projeto3g2 from "../Projetos/Projeto 3/Projeto 3 (2).png";
import projeto3g3 from "../Projetos/Projeto 3/Projeto 3 (3).png";
import projeto3g4 from "../Projetos/Projeto 3/Projeto 3 (4).png";

// Projeto 4 — White Smile Clinic
import projeto4Cover from "../Projetos/Projeto 4/Projeto 4.png";
import projeto4g2 from "../Projetos/Projeto 4/Projeto 4 (2).png";
import projeto4g3 from "../Projetos/Projeto 4/Projeto 4 (3).png";
import projeto4g4 from "../Projetos/Projeto 4/Projeto 4 (4).png";

// Projeto 5 — Escritório Linear Operacional
import projeto5Cover from "../Projetos/Projeto 5/Projeto 5.png";
import projeto5g2 from "../Projetos/Projeto 5/Projeto 5 (2).png";
import projeto5g3 from "../Projetos/Projeto 5/Projeto 5 (3).png";
import projeto5g4 from "../Projetos/Projeto 5/Projeto 5 (4).png";

// Projeto 6 — Casa Horizonte Branco
import projeto6Cover from "../Projetos/Projetos 6/Projeto 6.png";
import projeto6g2 from "../Projetos/Projetos 6/Projeto 6 (2).png";
import projeto6g3 from "../Projetos/Projetos 6/Projeto 6 (3).png";
import projeto6g4 from "../Projetos/Projetos 6/Projeto 6 (4).png";

// Projeto 7 — Honda Motolife
import projeto7Cover from "../Projetos/Projeto 7 HONDA/Projeto 7 Capa, imagem 1.png";
import projeto7g2 from "../Projetos/Projeto 7 HONDA/Projeto 7.png";
import projeto7g3 from "../Projetos/Projeto 7 HONDA/Projeto 7 (2).png";
import projeto7g4 from "../Projetos/Projeto 7 HONDA/Projeto 7 (3).png";

// Projeto 8 — Apê Centro
import projeto8Cover from "../Projetos/Projeto 8 APÊ completo/Capa Apê completo.png";
import projeto8g2 from "../Projetos/Projeto 8 APÊ completo/Projeto 8 (2).png";
import projeto8g3 from "../Projetos/Projeto 8 APÊ completo/Projeto 8 (5).png";
import projeto8g4 from "../Projetos/Projeto 8 APÊ completo/Projeto 8 (7).png";

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

export const PROJECTS: Project[] = [
  {
    slug: "casa-aurum",
    title: "CASA AURUM",
    subtitle: "Reforma de Cozinha Gourmet Integrada",
    location: "Lago Sul · Brasília",
    city: "Lago Sul, DF",
    year: "2024",
    category: "interiores",
    client: "Casal de empresários",
    area: "48 m²",
    status: "Concluído",
    description: [
      "A Casa Aurum é um projeto de reforma pensado para transformar a cozinha no verdadeiro centro da residência. Localizada no Lago Sul, em Brasília, a proposta nasceu para atender um casal jovem de empresários que valoriza praticidade, elegância e momentos de convivência dentro de casa.",
      "A reforma foi desenvolvida para ir além da função tradicional de uma cozinha. A ideia era transformar o ambiente em um espaço gourmet acolhedor, sofisticado e funcional, capaz de atender tanto à rotina diária quanto aos encontros com amigos e familiares.",
      "A paleta de tons neutros (bege, taupe, madeira natural e preto) cria uma atmosfera contemporânea. A grande ilha central é o elemento protagonista, com acabamento em pedra clara e três banquetas. Armários planejados com acabamento fosco, painel ripado de madeira no backsplash, iluminação LED quente, geladeira inox e torre de madeira com fornos completam a composição.",
    ],
    cover: projeto1Cover,
    gallery: [projeto1g2, projeto1g3, projeto1g4],
  },
  {
    slug: "sala-jardim-de-luz",
    title: "APÊ JARDIM DE LUZ",
    subtitle: "Living Contemporâneo",
    location: "São Paulo · SP",
    city: "São Paulo, SP",
    year: "2026",
    category: "interiores",
    area: "32 m²",
    status: "Concluído",
    description: [
      "O Apê Jardim de Luz nasceu da ideia de transformar uma sala comum em um espaço de pausa dentro da rotina urbana. O projeto foi pensado para um casal que valoriza conforto, estética limpa e uma atmosfera de hotel boutique, sem perder a sensação de lar.",
      "A base trabalha com tons de bege, off-white, cinza quente e madeira natural, criando um cenário calmo e atemporal. O contraste aparece nos elementos em preto fosco: mesa de centro, lustre, TV, mesa lateral e moldura do quadro. O painel ripado de madeira marca a parede da TV, aquece o ambiente e cria verticalidade.",
      "O piso em espinha de peixe traz movimento ao espaço. A iluminação foi pensada em camadas: LED embutido no perímetro do teto, luz indireta atrás e abaixo do rack, abajur esférico sobre o rack e um lustre central preto com lâmpadas globo âmbar. Temperatura entre 2700K e 3000K mantém o efeito quente e residencial.",
    ],
    cover: projeto2Cover,
    gallery: [projeto2g2, projeto2g3, projeto2g4],
  },
  {
    slug: "honda-motolife",
    title: "HONDA MOTOLIFE",
    subtitle: "Reforma de Concessionária Comercial",
    location: "Bento Gonçalves · Serra Gaúcha · RS",
    city: "Bento Gonçalves, RS",
    year: "2025",
    category: "comercial",
    client: "Concessionária Honda",
    status: "Concluído",
    description: [
      "A Motolife é uma concessionária Honda em Bento Gonçalves, na Serra Gaúcha, que precisava reposicionar sua imagem para atrair um público mais exigente e reforçar a solidez da marca em uma das principais avenidas da cidade. A reforma trabalhou fachada e showroom como uma única peça de comunicação visual, transformando o ponto comercial em vitrine 24 horas.",
      "A fachada ganhou volumes brancos com curvatura suave no topo, sinalização Honda e Motolife em destaque sobre fundo neutro, e grandes panos de vidro que abrem o interior para a rua. A iluminação noturna foi pensada para que a loja chame atenção mesmo com a avenida vazia — spots embutidos sob a marquise, luz fria interna e detalhes em vermelho que reforçam a identidade da marca.",
      "Internamente, o showroom foi reorganizado em dois níveis para ampliar a exposição. O piso porcelanato claro reflete a iluminação e amplia visualmente o espaço; o mezanino com escada metálica branca adiciona uma camada extra de produtos; nichos para capacetes e acessórios receberam destaque próprio com prateleiras em madeira clara. O resultado é uma loja que comunica modernidade, organização e confiança antes mesmo do cliente entrar.",
    ],
    cover: projeto7Cover,
    gallery: [projeto7g2, projeto7g3, projeto7g4],
  },
  {
    slug: "ape-centro-poa",
    title: "APÊ CENTRO",
    subtitle: "Reforma Completa de Apartamento",
    location: "Edifício Catedral · Centro Histórico · Porto Alegre · RS",
    city: "Porto Alegre, RS",
    year: "2025",
    category: "interiores",
    client: "Família residente",
    status: "Concluído",
    description: [
      "O Apê Centro é a reforma completa de um apartamento no Edifício Catedral, um prédio tradicional do centro histórico de Porto Alegre. O ponto de partida foi um imóvel com bom potencial mas linguagem datada — o desafio era ressignificar cada ambiente sem perder a alma do edifício, preservando o piso original em parquet onde fazia sentido e modernizando o restante com uma identidade contemporânea unificada.",
      "A paleta combina três camadas que dialogam em todos os ambientes: madeira natural (tanto o parquet original restaurado quanto ripados verticais novos), branco off-white na marcenaria de armários e closet, e mármore preto Saint Laurent na bancada do lavabo. Detalhes em metal dourado nas torneiras, luminárias e puxadores trazem o luxo discreto que o cliente buscava, sem cair no exagero.",
      "Os destaques são três. O lavabo, com espelho redondo retroiluminado sobre painel ripado de madeira e bancada em pedra escura, virou o ambiente mais fotografado da casa. O closet planejado, com iluminação LED embutida nas gavetas e nichos abertos para coleções, organiza a rotina sem esconder identidade. E a sala íntima, com painel cenográfico de nichos iluminados que serve como porta de acesso a outro ambiente, é a prova de que marcenaria bem pensada substitui qualquer obra de arte.",
    ],
    cover: projeto8Cover,
    gallery: [projeto8g2, projeto8g3, projeto8g4],
  },
  {
    slug: "banheiro-compacto-natural",
    title: "BANHEIRO COMPACTO NATURAL",
    subtitle: "Banheiro Social de Uso Diário",
    location: "São Paulo · SP",
    city: "São Paulo, SP",
    year: "2026",
    category: "interiores",
    area: "5 m²",
    status: "Concluído",
    description: [
      "O Banheiro Compacto Natural foi pensado como um ambiente funcional, elegante e fácil de manter no dia a dia. A proposta não é criar um banheiro exagerado, mas um espaço realista, bem resolvido e com aparência de spa urbano.",
      "A paleta combina revestimentos bege, madeira ripada e metais pretos. O bege deixa o banheiro claro e amplo, a madeira traz calor e naturalidade, e o preto fosco adiciona modernidade aos detalhes. O espelho redondo retroiluminado é o ponto focal, valorizando a bancada e ampliando visualmente o espaço.",
      "O layout é linear: box ao fundo com vidro transparente e perfis pretos, vaso sanitário central e bancada lateral com cuba branca de apoio sobre tampo bege claro. O gabinete em madeira ripada vertical aquece o ambiente, e o pendente cilíndrico dourado ao lado do espelho adiciona um detalhe elegante e discreto.",
    ],
    cover: projeto3Cover,
    gallery: [projeto3g2, projeto3g3, projeto3g4],
  },
  {
    slug: "white-smile-clinic",
    title: "WHITE SMILE CLINIC",
    subtitle: "Recepção de Clínica Odontológica",
    location: "Porto Alegre · RS",
    city: "Porto Alegre, RS",
    year: "2026",
    category: "comercial",
    client: "Clínica odontológica",
    area: "45 m²",
    status: "Concluído",
    description: [
      "A White Smile Clinic foi pensada como um ambiente de boas-vindas. A proposta une a sensação de limpeza esperada em uma clínica odontológica com uma atmosfera mais humana, leve e acolhedora, reduzindo a ansiedade típica de ambientes hospitalares.",
      "A base clara em tons de branco, cinza claro e off-white se combina com painéis de madeira natural que aquecem o espaço. O balcão em mármore branco reforça a sensação de higiene e sofisticação, enquanto as poltronas em azul claro acinzentado trazem calma e confiança. O logotipo iluminado sobre o painel amadeirado posiciona a marca de forma memorável.",
      "O layout retangular separa recepção e sala de espera, com divisória ripada de madeira ao fundo. O piso em porcelanato cinza claro de grande formato reforça a continuidade visual. A iluminação mistura sancas de luz indireta, spots embutidos e LEDs no balcão, com temperatura entre 3000K e 4000K para manter o ambiente claro sem parecer frio.",
    ],
    cover: projeto4Cover,
    gallery: [projeto4g2, projeto4g3, projeto4g4],
  },
  {
    slug: "escritorio-linear-operacional",
    title: "ESCRITÓRIO LINEAR OPERACIONAL",
    subtitle: "Sala Operacional Corporativa",
    location: "Porto Alegre · RS",
    city: "Porto Alegre, RS",
    year: "2026",
    category: "comercial",
    client: "Empresa de serviços",
    area: "35 m²",
    status: "Concluído",
    description: [
      "O Escritório Linear Operacional foi pensado para empresas que precisam de um ambiente produtivo, limpo e bem aproveitado. A proposta organiza várias estações de trabalho em uma única parede longa, mantendo a circulação livre e criando uma imagem corporativa moderna.",
      "A marcenaria ocupa a parede principal de forma planejada, integrando armazenamento, decoração e estações de trabalho. Armários superiores fechados sem puxadores aparentes, nichos pretos que quebram a repetição e prateleira linear escura abaixo dos armários reforçam o desenho horizontal do projeto.",
      "A linguagem visual é neutra: madeira clara, armários off-white, nichos pretos e cadeiras ergonômicas escuras. O rasgo linear de LED no teto acompanha o comprimento da sala e reforça a sensação de organização. A temperatura entre 3500K e 4500K mantém a luz funcional sem deixar o espaço excessivamente frio.",
    ],
    cover: projeto5Cover,
    gallery: [projeto5g2, projeto5g3, projeto5g4],
  },
  {
    slug: "casa-horizonte-branco",
    title: "CASA HORIZONTE BRANCO",
    subtitle: "Residência Unifamiliar Contemporânea",
    location: "Porto Alegre · RS",
    city: "Porto Alegre, RS",
    year: "2026",
    category: "residencial",
    area: "220 m²",
    status: "Concluído",
    description: [
      "A Casa Horizonte Branco é uma residência contemporânea de linhas retas, visual limpo e atmosfera elegante. O projeto valoriza a imponência da entrada principal, a transparência das grandes esquadrias e a leveza dos volumes brancos sobrepostos.",
      "A fachada trabalha com poucos materiais, todos muito bem definidos: branco, vidro, alumínio preto, madeira natural, concreto claro e vegetação verde. A porta alta em madeira aquece a composição e contrasta com a base branca; o vidro traz transparência; as esquadrias pretas desenham a fachada com linhas finas; o jardim suaviza a arquitetura.",
      "A volumetria possui dois pavimentos com blocos retangulares sobrepostos e cobertura escondida por platibanda. O pavimento superior avança sobre parte da fachada, criando uma marquise sobre a garagem. A varanda superior tem guarda-corpo de vidro, e o paisagismo tropical minimalista (palmeira, cica, arbustos baixos e gramado aparado) complementa os volumes sem competir.",
    ],
    cover: projeto6Cover,
    gallery: [projeto6g2, projeto6g3, projeto6g4],
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
