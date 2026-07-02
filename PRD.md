# PRD — Site Sandra Arquitetura & Design de Interiores

**Versão:** 2.0
**Data:** 2026-07-02
**Produto:** Site institucional + portfólio (React SPA)
**Status:** Em produção

---

## 1. Visão do Produto

Site institucional para Sandra da Rocha, arquiteta formada pela UNISINOS/RS em 1998, com 28+ anos atuando em reformas residenciais, projetos arquitetônicos e obras comerciais. Base em Porto Alegre / RS, com especialidade declarada em **apartamentos do Centro Histórico de POA** e atendimento em todo o Brasil.

O objetivo é converter visitantes em conversas via WhatsApp, transmitindo autoridade técnica, sensibilidade estética e a promessa de acompanhamento integral ("do sonho à entrega, sem dor de cabeça").

**Posicionamento:** "Arquitetura autoral, atemporal e presente — quem contrata a Sandra não contrata um projeto, contrata uma obra sem dor de cabeça."

**Voz da marca:** Sóbria, confiante, direta. Sem jargão. Frases curtas. Terracota como acento único sobre paleta neutra.

---

## 2. Stack Técnica

- **Framework:** React 18 + TypeScript + Vite
- **Roteamento:** react-router-dom (SPA multi-rota)
- **Estilo:** Tailwind CSS com design tokens custom (`primary-container`, `on-surface`, `outline-variant`, `container-max`, `margin-mobile/desktop`, `gutter`, `font-display-lg`, `font-body-lg`, `font-label-caps`, `font-headline-md`)
- **Ícones:** Material Symbols Outlined (font)
- **Persistência local:** `localStorage` via `useLocalStorage` (último projeto visitado, tracking de visita)
- **Hooks custom:** `useInView` (animações fade-up/fade-in ao entrar no viewport), `useScrolled` (troca de estado da navbar), `useVisitTracker`
- **Assets:** PNG/JPG servidos como imports Vite; vídeo `antes-depois.mp4` embutido
- **Deploy:** repositório na raiz `Site/`, publicado via GitHub

---

## 3. Rotas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `Home` | Landing completa (todas as seções abaixo) |
| `/sobre` | `Home` | Home + scroll automático para âncora `#sobre` |
| `/manifesto` | `Home` | Home + scroll para `#manifesto` |
| `/servicos` | `Home` | Home + scroll para `#servicos` |
| `/contato` | `Home` | Home + scroll para `#contato` (FinalCTA) |
| `/projetos` | `ProjectsList` | Grade de projetos com filtro por categoria |
| `/projetos/:slug` | `ProjectDetail` | Página individual do projeto |
| `*` | Redirect para `/` | 404 → home |

---

## 4. Estrutura da Home (ordem de renderização)

1. **Navbar** (fixed)
2. **Hero**
3. **About** — âncora `#sobre`
4. **Manifesto** — âncora `#manifesto`
5. **Services** — âncora `#servicos`
6. **Banner** (full-bleed)
7. **Projects** — âncora `#projetos` (carrossel)
8. **Reforma** — âncora `#reforma` (split vídeo antes/depois)
9. **Atuacao** — âncora `#atuacao` (residencial × comercial + banda de acompanhamento)
10. **Testimonials** — âncora `#depoimentos`
11. **FinalCTA** — âncora `#contato`
12. **Footer** — âncora `#rodape`

---

## 5. Seções — Especificação Detalhada

### 5.1 Navbar
- Fixed, transparente sobre o hero, muda para `bg-background` após 80px de scroll (`useScrolled`)
- Logo esquerda (aparece somente quando scrollado)
- Links centro: **SOBRE · PROJETOS · SERVIÇOS · CONTATO** (react-router `<Link>`)
- Telefone direita (desktop): `+55 51 81 14 9971`
- Mobile: hamburger que expande menu vertical com telefone abaixo
- Estado ativo destacado em terracota (`text-primary-container`)

### 5.2 Hero
- Altura: `100vh` (min 600px)
- Carrossel automático de 3 imagens (5s cada), com versões desktop e mobile separadas (`Hero - Imagem 1/2/3 desktop|mobile.png`)
- Gradiente escuro no topo para legibilidade da navbar
- Logo Hero grande no canto superior esquerdo
- Headline: **"ARQUITETURA / AUTORAL"** (display-lg, uppercase, tracking amplo)
- Meta desktop bottom-right: **"EST. 1997"**

### 5.3 About (`#sobre`)
- Layout: split 50/50 (retrato à esquerda, texto à direita)
- Marca d'água "S" gigante ao fundo (opacity 0.05)
- Retrato profissional de Sandra em moldura outline
- Título: **"ARQUITETURA QUE NASCE DE QUEM USA O ESPAÇO"**
- 3 parágrafos de biografia:
  1. UNISINOS/RS 1998, especialidade em reformas + comercial, também atua como corretora
  2. 28 anos costurando projeto/interiores/execução em um único fio condutor
  3. Filosofia: ambientes que envelhecem com elegância
- Ficha: **Sandra da Rocha · Arquiteta · UNISINOS/RS 1998**
- Stats textuais (não animadas): **28+ anos · 150+ projetos · 100% clientes satisfeitos**
- CTA: **"VAMOS CONVERSAR"** → âncora `#servicos`

### 5.4 Manifesto (`#manifesto`)
- Layout: split 60/40 (texto esquerda, imagem direita full-bleed em desktop)
- Headline: **"PROJETO BOM É AQUELE QUE VOCÊ NÃO PRECISA EXPLICAR."**
- Parágrafo sobre arquitetura falar por si
- 3 pilares em colunas: **AUTORAL · ATEMPORAL · PRESENTE**
- CTA: **"QUERO ENTENDER MELHOR"**

### 5.5 Services (`#servicos`)
- Fundo `bg-primary-container` (terracota)
- Título: **"COMO POSSO TRANSFORMAR SEU ESPAÇO?"**
- Grid de 6 serviços (3 colunas em desktop, 2 em tablet, 1 em mobile):
  | # | Ícone (Material) | Título | Descrição |
  |---|---|---|---|
  | 01 | `architecture` | PROJETO DE REFORMA | Plantas, técnico e documentação para reformar apto/casa/clínica/escritório com RT |
  | 02 | `domain` | PROJETO ARQUITETÔNICO | Construção do zero, do partido à entrega das chaves com RT |
  | 03 | `chair` | DESIGN DE INTERIORES | Cor, textura, mobiliário e luz como um só |
  | 04 | `engineering` | ACOMPANHAMENTO DE OBRA | Visitas técnicas e gestão para o projeto sair como desenhado |
  | 05 | `home_work` | CONSULTORIA DE IMÓVEL | Avaliação técnica antes da compra; olho duplo arquiteta + corretora |
  | 06 | `assignment` | GERENCIAMENTO DE OBRA | Coordenação de equipes, prazos, materiais e orçamento |
- Card de diferencial regional (full-width, `bg-on-surface`): **"ESPECIALISTA EM APARTAMENTOS DO CENTRO DE POA"** com watermark do ícone `apartment` e nota "atuação presencial em POA / projetos atendidos em todo o Brasil"

### 5.6 Banner
- Full-bleed com imagem `Banner.png` + gradiente escuro
- Eyebrow: **"O QUE VOCÊ GANHA COMIGO"**
- Headline: **"VOCÊ NÃO CONTRATA UM PROJETO. CONTRATA UMA OBRA SEM DOR DE CABEÇA."**
- Subheadline sobre acompanhamento do diagnóstico à última almofada

### 5.7 Projects (`#projetos`) — Carrossel
- Faixa terracota horizontal cruzando o meio da seção
- Título: **"OBRAS QUE FALAM POR SI."**
- Contador: **"08 PROJETOS"**
- Carrossel horizontal com snap, cards `280×373px` (aspect 3/4)
- Cada card: capa + badge de índice + título + moldura branca animada no hover
- Controles prev/next + link **"VER PORTFÓLIO COMPLETO"** → `/projetos`

### 5.8 Reforma (`#reforma`)
- Split desktop: texto esquerda / vídeo direita (aspect 804×1144)
- Headline: **"RECOMEÇAR, SEM APAGAR."**
- Vídeo `antes-depois.mp4` autoplay muted quando entra no viewport
- Badge sobre o vídeo: **"Antes, Depois"**

### 5.9 Atuacao (`#atuacao`)
- Título: **"RESIDENCIAL & COMERCIAL."**
- Tabela em 2 colunas:
  - **Residencial:** Reforma de aptos no Centro de POA · Cozinhas e banheiros · Casas novas · Design de interiores residencial
  - **Comercial:** Clínicas e consultórios · Escritórios (advocacia, contabilidade, odontologia) · Salas comerciais · Comercial do zero
- Banda inferior full-bleed terracota — **"EU CUIDO DE TUDO, DO PROJETO À ENTREGA"**
- 4 itens de acompanhamento com ícones: obra do início ao fim · prazos · elétrica/hidráulica · móveis+luz+decor
- Fecho: **"VOCÊ TEM ZERO ESTRESSE. EU RESOLVO TUDO."**

### 5.10 Testimonials (`#depoimentos`)
- Fundo neutro com aspas gigantes decorativas
- Carrossel fade com 8 depoimentos reais (Hélio, Patricia Santos, Alexandre Pinto, Antonio Severo, Rodrigo Kalife, Inez Aso, Patrícia Inglez de Souza, Claudio Maciel)
- Autoplay 3s, pausa em hover
- Controles prev/next + dots
- Link: **"Ver todas as avaliações no Google"** → `https://share.google/8XzOKPDnlV2CzNHmb`

### 5.11 FinalCTA (`#contato`)
- Split 50/50: imagem esquerda / bloco terracota direita
- Headline: **"SEU PRÓXIMO PROJETO COMEÇA COM UMA CONVERSA."**
- Texto: primeira conversa gratuita e sem compromisso
- CTA branco: **"ME CHAME NO WHATSAPP"** → `https://wa.me/555181149971` com mensagem pré-preenchida
- Rodapé de contato: **TELEFONE +55 51 81 14 9971 · LOCALIZAÇÃO Porto Alegre · RS · Brasil**

### 5.12 Footer (`#rodape`)
- Logo + links (Instagram `@arqsandradarocha`, LinkedIn, Pinterest, Privacidade) + copyright dinâmico

---

## 6. Página `/projetos` — ProjectsList

- Tabs de filtro (via query `?categoria=`):
  - **TODOS · RESIDENCIAL · INTERIORES · COMERCIAL**
- Grid responsivo (3/2/1 colunas)
- Card com hover: overlay escuro deslizando de baixo com categoria + subtítulo + CTA "VER PROJETO"
- Estado vazio para categorias sem projetos ("EM BREVE")

---

## 7. Página `/projetos/:slug` — ProjectDetail

- Layout split: sidebar sticky à esquerda + galeria vertical à direita
- Sidebar contém: chip de categoria, título, subtítulo, ficha técnica (Localização, Ano, Área, Cliente, Status, Categoria), descrição em parágrafos, navegação Prev/Next
- Galeria: capa + `gallery[]` empilhadas
- `useLocalStorage` grava último projeto visto
- Slug inválido → redirect para `/projetos`

---

## 8. Catálogo de Projetos (8 publicados)

| # | Slug | Título | Cidade | Categoria |
|---|---|---|---|---|
| 1 | `casa-aurum` | CASA AURUM | Lago Sul, DF | interiores |
| 2 | `sala-jardim-de-luz` | APÊ JARDIM DE LUZ | São Paulo, SP | interiores |
| 3 | `honda-motolife` | HONDA MOTOLIFE | Bento Gonçalves, RS | comercial |
| 4 | `ape-centro-poa` | APÊ CENTRO (Edifício Catedral) | Porto Alegre, RS | interiores |
| 5 | `banheiro-compacto-natural` | BANHEIRO COMPACTO NATURAL | São Paulo, SP | interiores |
| 6 | `white-smile-clinic` | WHITE SMILE CLINIC | Porto Alegre, RS | comercial |
| 7 | `escritorio-linear-operacional` | ESCRITÓRIO LINEAR OPERACIONAL | Porto Alegre, RS | comercial |
| 8 | `casa-horizonte-branco` | CASA HORIZONTE BRANCO | Porto Alegre, RS | residencial |

Dados centralizados em `Site/src/projects/data.ts`. Slugs são estáveis (não alterar sem redirecionar).

---

## 9. Contato & Marca

- **Telefone / WhatsApp:** +55 51 81 14 9971 (`555181149971`)
- **Instagram:** [@arqsandradarocha](https://instagram.com/arqsandradarocha)
- **Google Reviews:** https://share.google/8XzOKPDnlV2CzNHmb
- **Base:** Porto Alegre / RS · atendimento em todo o Brasil
- **Assinatura:** Sandra da Rocha · Arquiteta · UNISINOS/RS 1998

---

## 10. Regras Gerais

### Design
- Paleta: neutros (background off-white, on-surface escuro) + acento único **terracota** (`primary-container`)
- Tipografia: display serif em uppercase com tracking amplo (~0.04em); body em sans-serif com leading generoso; labels em uppercase com tracking `0.3em`
- Nenhuma sombra pesada; molduras finas e linhas divisórias em `outline-variant`
- Imagens sempre com filtro sutil (grayscale 15-40%) que se desfaz em hover
- Espaçamento generoso (`py-24 md:py-32` como padrão de seção)

### Animações
- Entrada de seções via `useInView` (fade-up ou fade-in)
- Nenhuma animação pesada (sem Lottie/GSAP)
- Vídeo `antes-depois` só toca 1x quando entra no viewport

### Acessibilidade
- `alt` descritivo em todas as imagens
- `aria-label` em ícones e controles
- Semântica correta (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Estados `focus-visible` preservados nos cards de projeto

### Performance
- Assets como imports Vite (hashed, cache-friendly)
- `loading="lazy"` em imagens fora do fold; `loading="eager"` nas capas
- Nenhum framework pesado além de React + Tailwind

---

## 11. Estrutura de Diretórios

```
Site/
├── src/
│   ├── App.tsx              # Roteamento
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ProjectsList.tsx
│   │   └── ProjectDetail.tsx
│   ├── components/          # Navbar, Hero, About, Manifesto,
│   │                        # Services, Banner, Projects, Reforma,
│   │                        # Atuacao, Testimonials, FinalCTA, Footer
│   ├── projects/
│   │   └── data.ts          # Fonte única dos 8 projetos
│   ├── hooks/               # useInView, useScrolled,
│   │                        # useLocalStorage, useVisitTracker
│   ├── lib/storage.ts       # Chaves de localStorage
│   ├── assets/              # Imagens de seções + vídeo
│   ├── Logo/                # Variantes de logo (Hero, Cabeçário, Fivecom)
│   └── Projetos/            # Assets de projetos (por pasta numerada)
├── public/
├── index.html
├── package.json
└── vite.config.ts
```

---

## 12. Fora de Escopo (atual)

- Blog / conteúdo editorial
- Formulário de contato com backend (contato hoje é 100% WhatsApp)
- Área administrativa / CMS (conteúdo hardcoded em `data.ts` e componentes)
- Versão em outros idiomas
- Integração com CRM

---

## 13. Próximas Iterações Possíveis

- Novos projetos no portfólio (mantendo estrutura de `data.ts`)
- Página de serviços dedicada (`/servicos` deixaria de ser âncora)
- Meta tags OG por projeto individual
- Sitemap.xml e melhorias de SEO técnico
- Analytics (GA4 / Meta Pixel) se decidido
