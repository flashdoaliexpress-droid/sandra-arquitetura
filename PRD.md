# PRD — Site Sandra Arquitetura & Design de Interiores

**Versão:** 1.0  
**Data:** 2026-06-21  
**Produto:** Site institucional de apresentação (MVP — 3 seções)

---

## 1. Visão do Produto

Site institucional minimalista e sofisticado para Sandra, arquiteta e designer de interiores com 28 anos de experiência, formada pela UNISINOS/RS. O objetivo principal é converter visitantes em leads qualificados, transmitindo autoridade, sensibilidade estética e confiança antes do primeiro contato.

**Posicionamento:** "Do sonho ao projeto realizado — com quem tem 28 anos fazendo isso acontecer."

**Premissas:**
- Site de uma única página (single-page) com scroll suave entre seções
- Visual limpo, tipografia elegante, paleta neutra com acentos sofisticados
- Sem backend — estado gerenciado via `localStorage` onde necessário
- Mobile-first, responsivo
- Sem frameworks pesados — HTML, CSS e JS vanilla (ou React mínimo, a definir)

---

## 2. Personas

### Persona 1 — Camila, 34 anos (Primário)
- **Perfil:** Casada, renda familiar ~R$15k/mês, acabou de comprar apartamento na planta
- **Dor:** Não sabe por onde começar o projeto; tem referências no Pinterest mas não sabe aplicar
- **Objetivo:** Contratar alguém que "cuide de tudo" e entregue um resultado bonito e funcional
- **Comportamento:** Pesquisa no Instagram e Google, consulta indicações de amigos
- **Momento no site:** Chega pela bio do Instagram ou por indicação; quer sentir que "essa é a arquiteta certa"

### Persona 2 — Roberto, 52 anos (Secundário)
- **Perfil:** Empresário, quer reformar escritório ou casa de campo
- **Dor:** Já foi lesado por construtora anterior; quer acompanhamento próximo
- **Objetivo:** Alguém experiente que supervisione e coordene tudo, inclusive compra de materiais
- **Comportamento:** Pesquisa no Google, valoriza currículum e anos de experiência
- **Momento no site:** Lê a seção "Sobre" com atenção; quer ver credenciais

### Persona 3 — Letícia, 28 anos (Terciário)
- **Perfil:** Alugou primeiro apartamento, orçamento limitado
- **Dor:** Quer decoração bonita mas não sabe como escolher móveis e acabamentos com o dinheiro que tem
- **Objetivo:** Consultoria pontual sem necessidade de contratar projeto completo
- **Comportamento:** Consome conteúdo no TikTok/Instagram, preço é fator
- **Momento no site:** Seção "Como posso realizar seu sonho" — descobre que consultoria é uma opção

---

## 3. Funcionalidades Detalhadas por Tela

---

### Tela 1 — Hero Section

**Objetivo:** Impacto visual imediato + identidade da marca + acesso rápido ao contato.

#### Componentes:

| Componente | Descrição |
|---|---|
| Background | Foto de projeto real (alta resolução, ocupação de 100vh). Overlay escuro sutil (rgba 0,0,0,0.35) para legibilidade |
| Navbar | Posição: `fixed`, transparente sobre o hero. Logo à esquerda (sem fundo, formato SVG/PNG com transparência). Links à direita: Sobre, Serviços, Contato. Navbar muda para fundo sólido (branco ou dark) ao scrollar 80px |
| Logo | Nome "Sandra [Sobrenome]" em tipografia serif elegante ou logotipo customizado. Cor branca no hero, cor da marca após scroll |
| Headline | Tagline principal centralizada sobre a imagem. Ex: "Arquitetura que transforma espaços em experiências" |
| Subheadline | Frase de suporte curta. Ex: "28 anos realizando projetos com excelência" |
| CTA primário | Botão "Fale comigo" — ancora para seção Contato ou abre WhatsApp direto |
| Scroll indicator | Ícone animado de seta/chevron no rodapé do hero indicando scroll |

#### Regras:
- Logo deve ser visível tanto sobre imagem escura quanto sobre fundo branco (duas versões ou SVG adaptável)
- Navbar em mobile colapsa em hamburguer menu
- Imagem de fundo é substituível via variável CSS ou atributo `data-hero-image` (fácil troca sem tocar JS)
- CTA do WhatsApp usa número formatado: `https://wa.me/55XXXXXXXXXXX?text=...`

---

### Tela 2 — About Section

**Objetivo:** Construir confiança e conexão pessoal com Sandra.

#### Layout:
- **Desktop:** Grid de 2 colunas — esquerda: foto de Sandra; direita: texto + credenciais
- **Mobile:** Coluna única — foto > texto > credenciais

#### Componentes:

| Componente | Descrição |
|---|---|
| Foto de Sandra | Imagem profissional, retrato ou 3/4 corpo. Border-radius sutil ou recorte criativo |
| Título da seção | "Quem sou eu" ou "Sobre Sandra [Sobrenome]" |
| Texto biográfico | 2–3 parágrafos: apresentação pessoal, filosofia de trabalho, o que a diferencia |
| Credenciais (Stats) | 3–4 itens em linha: ícone + número em destaque + label. Ver detalhes abaixo |
| Formação | "Formada pela UNISINOS/RS" — pode aparecer como badge ou texto inline |

#### Credenciais (Stats):

```
┌─────────────────┬─────────────────┬─────────────────┬─────────────────┐
│      28+        │      150+       │        3        │      100%       │
│  Anos de        │  Projetos       │  Prêmios        │  Clientes       │
│  Experiência    │  Realizados     │  [a confirmar]  │  Satisfeitos    │
└─────────────────┴─────────────────┴─────────────────┴─────────────────┘
```
> **Nota:** Números a serem confirmados com Sandra antes da publicação. Placeholder no PRD.

#### Regras:
- Stats animam (counter de 0 até o valor final) quando a seção entra no viewport — via `IntersectionObserver`
- Texto biográfico deve ser editável via `data-` attributes ou variável JS centralizada (não hardcoded inline)
- Foto deve ter `alt` descritivo para acessibilidade e SEO

---

### Tela 3 — Como posso realizar seu sonho?

**Objetivo:** Educar o visitante sobre o processo de trabalho e serviços oferecidos, reduzindo fricção para o contato.

#### Conceito:
Seção didática que mostra a jornada do cliente do zero até o projeto concluído. Cada serviço é um card ou step visual com ícone, título e descrição curta.

#### Layout:
- Título da seção centralizado com subtítulo explicativo
- Grid de cards ou timeline horizontal/vertical responsiva
- Cada card tem: ícone SVG + título + descrição 2–3 linhas
- CTA ao final: "Qual etapa é a sua? Me conta." → abre formulário ou WhatsApp

#### Serviços / Steps:

| # | Ícone | Título | Descrição |
|---|---|---|---|
| 1 | 📐 | Projeto Arquitetônico | Plantas, fachadas, volumetria e documentação técnica para aprovação e execução |
| 2 | 🛋️ | Design de Interiores | Definição de ambientes, paleta de cores, mobiliário, texturas e iluminação |
| 3 | 🔨 | Acompanhamento na Execução | Visitas técnicas em obra para garantir que o projeto saia exatamente como planejado |
| 4 | 🏠 | Consultoria para Compra de Imóvel | Avaliação técnica antes da compra: potencial, problemas estruturais, possibilidades |
| 5 | 🧱 | Seleção de Materiais | Orientação na escolha de porcelanatos, revestimentos e acabamentos com melhor custo-benefício |
| 6 | 🪑 | Curadoria de Móveis | Indicação de fornecedores e peças que combinam estética e durabilidade com o orçamento |
| 7 | 💡 | Projeto de Iluminação | Planejamento de pontos de luz, tipos de lâmpada e efeitos que transformam o ambiente |
| 8 | 🔍 | Consultoria Pontual | Para quem tem dúvidas específicas — orientação objetiva por hora/sessão sem contrato completo |

> **Nota editorial:** Ícones SVG serão utilizados no lugar dos emojis na implementação final.

#### Regras:
- Cards revelam-se com animação fade-in-up staggered quando entram no viewport
- Em mobile: grid de 1 coluna (cards empilhados)
- Em tablet: grid de 2 colunas
- Em desktop: grid de 3 ou 4 colunas (máx. 4)
- Card ativo (hover/focus) eleva com `box-shadow` e bordas sutis
- CTA final é fixo — não rola junto com os cards

---

## 4. Estrutura de Dados — localStorage

O site é estático, mas o `localStorage` pode ser usado para:

### `sandra_site_prefs`
```json
{
  "theme": "light",
  "cookiesAccepted": true,
  "lastVisit": "2026-06-21T14:30:00Z"
}
```

### `sandra_site_lead` *(se houver formulário inline futuramente)*
```json
{
  "name": "",
  "whatsapp": "",
  "serviceInterest": "",
  "submittedAt": ""
}
```

> **Regra:** Dados em `localStorage` não substituem integração com CRM/backend — são apenas para UX (ex: não mostrar banner de cookies novamente, lembrar preferência de tema). Nenhum dado sensível persiste no client.

---

## 5. Regras do Projeto

### Design
- Paleta principal: tons neutros (off-white, cinza, preto) + 1 cor de acento sofisticada (ex: terracota, sage green, ou dourado) — a definir com Sandra
- Tipografia: serif para headings (ex: Playfair Display, Cormorant Garamond), sans-serif para corpo (ex: Inter, DM Sans)
- Espaçamento generoso — "o espaço em branco é luxo"
- Sem bordas pesadas, sem sombras exageradas
- Imagens sempre de alta qualidade; nenhuma foto de stock genérica

### Código
- Nenhum framework CSS externo obrigatório (Tailwind aceitável se decidido)
- CSS custom properties para paleta e tipografia (fácil troca de tema)
- JavaScript sem dependências externas onde possível
- Sem `console.log` em produção
- Imagens otimizadas (WebP, lazy loading nativo)
- Meta tags de SEO básicas + Open Graph para compartilhamento

### Performance
- Lighthouse Score mínimo: 90 em Performance, 95 em Acessibilidade
- First Contentful Paint < 1.5s
- Imagem hero com `loading="eager"` e `fetchpriority="high"`

### Acessibilidade
- Contraste mínimo 4.5:1 em texto corrido
- Todos os elementos interativos com `focus-visible`
- `aria-label` em ícones sem texto
- Estrutura semântica: `<header>`, `<main>`, `<section>`, `<footer>`

---

## 6. Critérios de Aceite

### Hero Section
- [ ] Imagem de fundo ocupa 100% da viewport height
- [ ] Navbar é visível e legível sobre a imagem
- [ ] Logo aparece sem fundo e com contraste adequado sobre a foto
- [ ] Navbar muda visual ao scrollar
- [ ] Hamburguer funcional em mobile
- [ ] CTA abre WhatsApp no número correto com mensagem pré-definida
- [ ] Scroll indicator presente e animado

### About Section
- [ ] Foto de Sandra exibida com qualidade e dimensão adequada
- [ ] Texto biográfico completo e revisado
- [ ] Stats com os 4 indicadores corretos
- [ ] Animação de contador funciona ao scrollar até a seção
- [ ] Layout 2 colunas em desktop, 1 coluna em mobile
- [ ] "Formada pela UNISINOS/RS" visível

### Seção "Como posso realizar seu sonho?"
- [ ] Todos os 8 cards de serviço presentes com ícone + título + descrição
- [ ] Grid responsivo: 4 cols desktop / 2 cols tablet / 1 col mobile
- [ ] Animação de entrada dos cards ao scroll
- [ ] Hover state visível nos cards
- [ ] CTA ao final da seção presente e funcional
- [ ] Nenhum emoji no HTML final (todos substituídos por SVG ou icon font)

### Geral
- [ ] Site responsivo em 320px, 768px, 1024px, 1440px
- [ ] Scroll suave entre seções via `scroll-behavior: smooth`
- [ ] Sem erros no console em produção
- [ ] Meta title, description e OG tags configuradas
- [ ] Favicon presente

---

## 7. Fora de Escopo (MVP)

- Galeria de projetos
- Blog
- Formulário com backend
- Área de depoimentos/testimonials
- Integração com CRM
- Chat bot
- Animações complexas (Lottie, GSAP)
- Versão em outro idioma

---

## 8. Próximos Passos

1. Confirmar com Sandra: sobrenome, números das stats, prêmios recebidos, cor de acento preferida
2. Receber assets: logo (SVG), foto de Sandra, foto(s) para o hero, ícones
3. Aprovação do PRD → início da implementação
4. Wireframe de baixa fidelidade → aprovação → desenvolvimento
5. Review visual com Sandra antes do deploy
