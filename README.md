# Sandra Arquitetura

Site institucional de Sandra Mendes — arquitetura autoral, design de interiores e curadoria completa.

## Stack

- **Vite 5** + **React 18** + **TypeScript 5.6**
- **Tailwind CSS 3.4** (tokens do design system Stitch)
- **React Router 6** (single page com rotas)
- **Cinzel** (display) + **Inter** (body) + **Material Symbols Outlined**

## Estrutura

```
src/
├── components/          # Navbar, Hero, About, Manifesto, Projects (carrossel), Services, FinalCTA, Footer
├── pages/               # Home, ProjectsList, ProjectDetail
├── projects/data.ts     # Fonte de verdade dos projetos do portfólio
├── hooks/               # useLocalStorage, useScrolled, useVisitTracker
├── lib/storage.ts       # Chaves e tipos de localStorage
├── assets/              # Imagens (Hero, Sobre, CTA)
├── Logo/                # Variantes do logotipo
└── Projetos/            # Pastas de projetos (texto + imagens)
```

## Documentação de design

- `DESIGN.md` — sistema de design completo (cores, tipografia, espaçamento, componentes) extraído do Stitch
- `PRD.md` — especificação de produto, personas e critérios de aceite
- `STITCH-PROMPTS.md` — prompts utilizados no Google Stitch para gerar as telas
- `Agent.md` — instruções para agentes de IA operando neste repositório

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Home (Hero + Sobre + Manifesto + Serviços + Projetos preview + CTA Final) |
| `/sobre`, `/manifesto`, `/servicos`, `/contato` | Home + scroll automático para a seção |
| `/projetos` | Lista de projetos com filtros por categoria |
| `/projetos/:slug` | Detalhe de um projeto (split sticky: texto + galeria) |

## Scripts

```bash
npm install       # instala dependências
npm run dev       # dev server em http://localhost:5173
npm run build     # build de produção em dist/
npm run preview   # serve o dist/ localmente
npm run lint      # type-check com tsc
```

## Deploy

Configurado para Vercel — `vercel.json` define rewrites SPA e headers de segurança (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`).

```bash
vercel --prod
```
