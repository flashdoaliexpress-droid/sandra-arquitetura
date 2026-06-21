# Prompts otimizados para Google Stitch — Site Sandra Arquitetura (v3)

**Estilo global:** Premium institucional, tema claro (off-white quente), zero arredondamento de bordas (cantos vivos 90°), acento único em **#A0604C** (terracota). Tipografia clássica monumental para títulos e neutra para corpo. Sensibilidade editorial-art-book + inscrição romana.

**Paleta a usar em todas as telas:**
- Background claro: `#F5F1EC` (off-white quente)
- Background branco: `#FFFFFF`
- Background terracota: `#A0604C` (dominante na seção de serviços)
- Texto primário: `#1F1A17`
- Texto secundário: `#6B5F58`
- Acento sobre claro: `#A0604C`
- Acento sobre terracota: `#F5F1EC`
- Linhas/divisores: `#D9D2CB`

**Fontes:**
- Títulos: **Cinzel** (serif capital romana clássica, monumental, inspirada em inscrições de Trajano — usar sempre em UPPERCASE, peso 400 regular e 500 medium, letter-spacing 0.04em a 0.08em)
- Corpo e UI: **Inter** (sans-serif neutra, peso 400 e 500)

> ⚠️ **Observação sobre Cinzel:** A fonte não possui variante itálica. Portanto, ênfases em palavras específicas serão feitas com **cor** (terracota sobre fundo claro, off-white sobre fundo terracota) ou com **peso** maior — nunca com itálico.

---

## Prompt 1 — Hero Section (limpa, image-first)

```
Design a premium architect's hero section that feels like the opening page of an art book — image-first, almost silent. Full viewport. Sharp 90-degree corners on every element. No rounded borders anywhere.

CANVAS
- Desktop 1440x900. Single section, occupies full viewport (100vh).

BACKGROUND
- A single large atmospheric interior photograph fills the entire viewport (object-fit: cover). The image shows a sophisticated, sunlit interior: tall arched windows, warm wooden floors, soft linen curtains gently moving, a sculptural lounge chair in the foreground, and a vase with eucalyptus branches. Light is golden-hour, natural, with deep but soft shadows. Color palette of the photo: warm beiges, soft creams, muted browns.
- A very subtle dark gradient overlay ONLY at the top 25% (rgba(31,26,23,0.35) fading to fully transparent by 25% from top) — just enough to make the navbar legible. The rest of the image is untouched.

NAVBAR (fixed at top, completely transparent)
- Padding: 40px horizontal, 36px vertical.
- LEFT — Wordmark logo (two lines, tight stack):
  - Line 1: "SANDRA" in Cinzel serif, 22px, weight 500, color #FFFFFF, letter-spacing 0.18em, uppercase. (Cinzel is already capital — this is its native form.)
  - Line 2 (6px below): "ARQUITETURA" in Inter 9px weight 400 letter-spacing 0.5em uppercase color #FFFFFF at 75% opacity.
- CENTER (absolutely centered horizontally) — Nav links in a horizontal row, 48px gap:
  - "SOBRE" · "SERVIÇOS" · "CONTATO"
  - All in Inter 11px weight 400 uppercase letter-spacing 0.32em color #FFFFFF.
  - No active state, no underlines.
- RIGHT — Phone number meta:
  - A 1px horizontal line, 20px wide, in #A0604C.
  - 12px gap.
  - "+55 51 9 9999 9999" in Inter 11px color #FFFFFF letter-spacing 0.1em.

HERO BODY (this is the key — almost empty)
The hero contains EXACTLY ONE textual element besides the navbar. No CTA, no button, no subheadline, no paragraph, no scroll indicator with text, no meta block. Just image and a single whisper of a headline.

THE SINGLE HEADLINE
- Positioned at bottom-left of the viewport: 96px from the left edge, 96px from the bottom edge.
- Just ABOVE the headline (16px gap above): a single vertical 1px line, 40px tall, in #A0604C.
- Headline text: "ARQUITETURA AUTORAL"
- Font: Cinzel, 68px, weight 400, color #FFFFFF, line-height 1.0, letter-spacing 0.06em, uppercase (native to Cinzel).
- The word "AUTORAL" is in color #A0604C (terracota) — this is how emphasis is done since Cinzel has no italic. The word "ARQUITETURA" stays #FFFFFF.
- Nothing else under or beside the headline.

BOTTOM-RIGHT — a tiny restrained meta
- 40px from the right edge, 96px from the bottom edge.
- Just the text "EST. 1997" in Inter 10px uppercase letter-spacing 0.5em color #FFFFFF at 70% opacity. No line, no decoration.

THAT IS ALL. The hero is photograph + navbar + one short two-word headline (with the second word in terracota) + tiny "EST. 1997" footnote. Nothing else exists in this composition. Negative space is the protagonist. The photograph speaks loudly; the typography whispers monumentally — Cinzel's classical capitals evoke architectural inscription, as if engraved.

The feeling should be: the user opens an exhibition catalog and lands on the opening spread. Calm, confident, breathing. Roman gravitas in the lettering, Brazilian warmth in the image.
```

---

## Prompt 2 — About Section

```
Design a magazine-style "About" section for a premium Brazilian architect. Two-column editorial layout. Sharp 90-degree corners on every element. No border radius anywhere.

CANVAS
- Desktop 1440x900. Background #F5F1EC (warm off-white). Padding: 120px top and bottom, 120px horizontal.

LAYOUT
Two columns, 50/50 split with 80px horizontal gap.

LEFT COLUMN — Portrait
- Tall vertical photograph (aspect ratio 4:5) of a sophisticated mid-50s Brazilian woman architect. She stands in a softly lit studio wearing a neutral linen blouse and minimal jewelry, holding a rolled blueprint loosely in one hand. She looks directly at camera with a warm, confident expression. Background is blurred warm tones (creamy beige walls, soft wood furniture). Photo has SHARP rectangular corners — absolutely no rounding.
- Bottom-left overlay on the photo (the overlay block extends slightly outside the photo to the left by 24px, breaking the frame): a small block, background #F5F1EC (same as page background), padding 20px 28px, containing:
  - "SANDRA MENDES" in Cinzel 18px weight 500 color #1F1A17 letter-spacing 0.1em uppercase.
  - 6px gap.
  - "Arquiteta · CAU A12345-6" in Inter 11px uppercase letter-spacing 0.25em color #6B5F58.

RIGHT COLUMN — Content (vertically centered with the photo)

Eyebrow:
- Horizontal 1px line, 40px wide, in #A0604C.
- 16px gap.
- "SOBRE" in Inter 11px uppercase weight 500 letter-spacing 0.4em color #A0604C.

Section title (32px below eyebrow):
- "ARQUITETURA COMO LINGUAGEM DE QUEM HABITA"
- Font: Cinzel, 44px, weight 400, line-height 1.15, color #1F1A17, max-width 520px, letter-spacing 0.04em, uppercase.
- The word "HABITA" is in color #A0604C (terracota) — Cinzel's native emphasis substitute for italic. Below the word "HABITA" only, a thin 1px line in #A0604C sits 4px below the baseline, only as wide as the word.

Body paragraph (48px below title):
- Three short paragraphs, separated by 16px gaps, in Inter 16px weight 400 line-height 1.75 color #1F1A17 at 88% opacity, max-width 460px:
  - "Formada pela UNISINOS/RS em 1997, dediquei quase três décadas a uma convicção: cada projeto é a tradução fiel de quem vai viver nele."
  - "Trabalho do esboço inicial à última peça de mobiliário, costurando arquitetura, interiores e execução em um único fio condutor."
  - "Acredito em ambientes que envelhecem com elegância, que respeitam quem os usa, e que carregam histórias muito além da estética."

STATS ROW (64px below body, horizontal grid of 4 equal columns, 32px gap between them)
Each stat block is left-aligned with:
- A 1px horizontal line on top, 32px wide, in #A0604C.
- 16px gap.
- The big number.
- 12px gap.
- The label.

- Stat 1: "28" in Cinzel 48px weight 400 color #1F1A17, with a "+" superscript at 22px in #A0604C (raised baseline). Label: "ANOS DE EXPERIÊNCIA" in Inter 9px uppercase weight 500 letter-spacing 0.3em color #6B5F58.
- Stat 2: "150" in Cinzel 48px weight 400 color #1F1A17, with "+" in #A0604C 22px. Label: "PROJETOS ENTREGUES".
- Stat 3: "03" in Cinzel 48px weight 400 color #1F1A17. Label: "PRÊMIOS NACIONAIS".
- Stat 4: "100" in Cinzel 48px weight 400 color #1F1A17, with "%" at 26px in #A0604C. Label: "CLIENTES SATISFEITOS".

> Note: Cinzel handles numerals beautifully — they have the same classical proportions as the capital letters.

CTA (40px below stats):
- Horizontal text link: "CONHEÇA MEU MÉTODO" in Inter 12px uppercase weight 500 letter-spacing 0.3em color #1F1A17.
- 12px gap.
- A long horizontal arrow "→" in #A0604C, 18px wide.
- A 1px line in #A0604C, full width of the text + arrow, sits 6px below.

WATERMARK
- In the top-right corner of the right column, position a giant Cinzel uppercase letter "S" at 220px, weight 400, color #A0604C at 6% opacity. It sits behind all the content as a watermark — like a carved inscription faintly visible in stone. Subtle enough to read as texture, not as text.

TONE
- Restrained luxury with Roman gravitas. Editorial. Cinzel's classical capitals reinforce the architect's authority — typography that literally references inscriptions on ancient buildings. The terracotta #A0604C is used in exactly 5 places: eyebrow line, emphasized word "HABITA" and its underline, stat divider lines and "+"/"%" symbols, CTA arrow + line, watermark S. Everything else is warm neutral.
```

---

## Prompt 3 — "Como posso realizar seu sonho?" (Serviços — terracota dominante)

```
Design a "Services" section where the terracotta color #A0604C is the DOMINANT color — it fills the entire section background, and the off-white #F5F1EC becomes the accent/detail color (inverted color logic from the rest of the site). Sharp 90-degree corners on every element. No border radius anywhere. The section should feel like a confident brand statement — a single saturated terracotta block in the middle of an otherwise neutral website.

CANVAS
- Desktop 1440x1200. Background fills FULL section with solid #A0604C (terracotta). Padding 140px top and bottom, 120px horizontal.

HEADER BLOCK (left-aligned, not centered — more editorial feel)

Eyebrow (top of section):
- Horizontal 1px line, 48px wide, in #F5F1EC.
- 16px gap.
- "SERVIÇOS" in Inter 11px uppercase weight 500 letter-spacing 0.45em color #F5F1EC.

Section title (32px below eyebrow):
- "COMO POSSO REALIZAR SEU SONHO"
- Font: Cinzel, 52px, weight 400, color #F5F1EC, line-height 1.15, max-width 780px, letter-spacing 0.045em, uppercase.
- The word "SONHO" is in a brighter pure white #FFFFFF (slight tonal lift against the terracota) and has a 1px underline in #FFFFFF sitting 4px below the baseline, only as wide as the word. This is Cinzel's emphasis substitute (no italic available).
- After "SONHO" there's no question mark in the heading — but a small standalone "?" in Cinzel 52px color #F5F1EC at 50% opacity sits as the next character after the underline.

Subtitle (24px below title):
- "Do primeiro esboço à última luminária instalada — cada etapa pensada para que o projeto saia exatamente como você imaginou (ou ainda nem sabia que queria)."
- Font: Inter 16px weight 400 line-height 1.7 color #F5F1EC at 80% opacity. Max-width 560px.

GRID OF SERVICE CARDS (80px below the header)
- Layout: 4 columns × 2 rows = 8 service cards.
- Gap between cards: ZERO. Instead, a thin 1px hairline divider in #F5F1EC at 25% opacity sits between adjacent cards (forming a museum-catalog grid).
- Each card: padding 40px, background fully #A0604C (same as section), color #F5F1EC for text. No borders on the cards besides the shared internal grid lines.
- One card (top-left, "01") shows an active/hover state visualization: background shifts to a slightly DARKER terracotta #8C4F3D, and a thin 2px vertical line in #F5F1EC appears flush against the card's left edge. This signals interactivity.

EACH CARD CONTAINS (top to bottom, left-aligned):
1. Index number "01" through "08" in Cinzel 14px weight 500 color #F5F1EC at 70% opacity, letter-spacing 0.1em, at the top-left.
2. 28px gap.
3. A minimal monoline icon, stroke 1.5px, no fill, sharp geometric edges, size 44x44px, color #F5F1EC.
4. 36px gap.
5. Service title in Cinzel 16px weight 500 color #F5F1EC, line-height 1.3, letter-spacing 0.08em, uppercase.
6. 16px gap.
7. Description in Inter 13px weight 400 line-height 1.7 color #F5F1EC at 75% opacity.
8. 28px gap.
9. Small link "EXPLORAR →" in Inter 10px uppercase weight 500 letter-spacing 0.35em color #F5F1EC, with the arrow → in pure white #FFFFFF.

THE 8 CARDS (UPPERCASE title in Cinzel + sentence-case description + icon concept):

01 — "PROJETO ARQUITETÔNICO" / "Plantas, fachadas e documentação técnica completa para aprovação e execução." / Icon: minimal floor plan square with internal partitions.

02 — "DESIGN DE INTERIORES" / "Ambientes pensados em camadas: cor, textura, mobiliário e luz como um só." / Icon: line drawing of an armchair in profile.

03 — "ACOMPANHAMENTO DE OBRA" / "Visitas técnicas e gestão para garantir que o projeto saia como foi desenhado." / Icon: line drawing of a hard hat with a faint ruler crossing it.

04 — "CONSULTORIA DE IMÓVEL" / "Avaliação técnica antes da compra: potencial, problemas estruturais, possibilidades." / Icon: magnifying glass over a small house outline.

05 — "SELEÇÃO DE MATERIAIS" / "Curadoria de porcelanatos, revestimentos e acabamentos com o melhor custo-benefício." / Icon: three stacked tile squares.

06 — "CURADORIA DE MÓVEIS" / "Indicação de fornecedores e peças que conciliam estética, durabilidade e orçamento." / Icon: minimal side table with a small lamp on top.

07 — "PROJETO LUMINOTÉCNICO" / "Planejamento de pontos de luz, temperatura e cenas que transformam o ambiente." / Icon: pendant lamp with three small light rays.

08 — "CONSULTORIA PONTUAL" / "Para dúvidas específicas — orientação objetiva por sessão, sem contrato completo." / Icon: speech bubble with small "?" inside.

BOTTOM CTA BLOCK (96px below the grid, full-width, centered)
- A 1px horizontal line, 80px wide, in #F5F1EC, centered.
- 32px below the line: headline in Cinzel 28px weight 400 color #F5F1EC letter-spacing 0.05em uppercase: "NÃO SABE POR ONDE COMEÇAR"
- 16px below: subtext in Inter 15px weight 400 color #F5F1EC at 80% opacity: "A primeira conversa é gratuita — me conta seu projeto e eu te oriento o próximo passo." Centered, max-width 520px.
- 40px below subtext: a single outlined button. Border 1.5px solid #F5F1EC, background transparent, sharp corners (zero radius), padding 22px 48px. Button text: "AGENDAR CONVERSA" in Inter 12px uppercase weight 500 letter-spacing 0.35em color #F5F1EC. After the text, 14px gap, then arrow "→" in #F5F1EC.

TONE
- Bold, confident, monumental. The entire section is bathed in terracotta — this is the visual peak of the site. Cinzel's classical capitals throughout feel like inscriptions on a Brazilian-Roman wall. Off-white #F5F1EC is now the accent (text, dividers, icons, button border). Pure white #FFFFFF appears only in micro-details (link arrows, the emphasized "SONHO") for hierarchy. The user should feel a strong color shift when entering this section after the off-white About section — like turning the page of a coffee-table book and landing on a full-bleed color spread carved in stone.

IMPORTANT
- Do NOT add any inner card backgrounds, borders, or shadows besides the shared hairline grid dividers and the single hover-state highlight on card "01".
- Do NOT lighten or tint the terracotta on most cards — they all share exactly #A0604C as the section.
- Cards must feel airy with generous internal padding (40px) — never cramped.
- ALL title-level typography uses Cinzel uppercase — no exceptions, no italic substitutes.
```

---

# Prompts adicionais (v4) — Seções 4, 5 e 6

**Tokens reais do design system implementado** (ligeiramente diferentes do header v3 — usar estes como referência canônica para alinhar com o site live):

| Token | Hex | Uso |
|---|---|---|
| `background` | `#fff8f6` | Off-white quente principal |
| `surface-container-lowest` | `#ffffff` | Branco puro (cards elevados) |
| `surface-container-low` | `#fef1ed` | Container leve (faixas alternativas) |
| `on-surface` | `#201a18` | Texto primário |
| `on-surface-variant` | `#53433f` | Texto secundário |
| `primary` | `#834836` | Terracota escuro (logo, ênfases fortes) |
| `primary-container` | `#a0604c` | Terracota principal (fundos, acentos) |
| `terracota-hover` | `#8c4f3d` | Terracota mais escuro (hover/active) |
| `outline-variant` | `#d8c2bc` | Linhas hairline 1px |

**Regras globais (mesmas das telas 1-3):**
- Tipografia: Cinzel UPPERCASE em todos os títulos + Inter para corpo
- Border-radius: 0 em TUDO (cantos vivos 90°)
- Sem sombras — apenas hairlines 1px e tonal layering
- Espaçamento generoso, ritmo 8px, container max 1440px

---

## Prompt 4 — Sessão Complementar (Manifesto + Imagem ancorada à direita)

```
Design a "Manifesto / Value Proposition" section for a premium architect's website. Strong editorial typography on the left, a tall architectural image anchored to the right edge of the viewport (bleeding past the container's right margin). The section sits between the About and Services sections. Sharp 90-degree corners on every element. No border radius anywhere.

CANVAS
- Desktop 1440x720. Background #fff8f6 (warm off-white). Container max-width 1440px, but the image bleeds beyond the right edge of the container (it touches the right side of the viewport, extending past container padding).
- Top/bottom padding: 100px. Left padding (margin-desktop): 64px.

LAYOUT
Two columns asymmetric: LEFT column ~60% (text), RIGHT column ~40% (image bleeding off the right edge).

LEFT COLUMN — Text Content
Vertically centered with the image.

1. EYEBROW (top):
   - Horizontal 1px line, 48px wide, in #a0604c (primary-container).
   - 16px gap.
   - Inline label "MANIFESTO" in Inter 11px uppercase, weight 500, letter-spacing 0.4em, color #a0604c.

2. HEADLINE (32px below eyebrow):
   - "PROJETO BOM É AQUELE QUE VOCÊ NÃO PRECISA EXPLICAR."
   - Font: Cinzel, 56px desktop / 36px mobile, weight 400, line-height 1.1, color #201a18 (on-surface), letter-spacing 0.04em, uppercase. Max-width 580px.
   - The word "EXPLICAR" must be in color #a0604c (primary-container) with a 1px underline in #a0604c sitting 4px below the baseline, only as wide as the word.

3. SUPPORTING PARAGRAPH (40px below headline):
   - "Não acredito em projetos que precisam de manual. O bom projeto fala por si — a luz entra na hora certa, o piso pede pé descalço, o sofá convida a sentar. Tudo no lugar, sem barulho."
   - Font: Inter 18px (body-lg), weight 400, line-height 1.65, color #201a18 at 85% opacity. Max-width 520px.

4. THREE MICRO-PILLARS (40px below paragraph, horizontal row, gap 32px):
   Each pillar block contains:
   - A 1px vertical line on the left, 32px tall, in #a0604c.
   - 12px gap.
   - Pillar text in two lines:
     - Top: short word in Cinzel 14px weight 500 uppercase letter-spacing 0.1em color #201a18.
     - Bottom (4px gap): supporting phrase in Inter 12px color #53433f.

   Pillars:
   - "AUTORAL" / "Um único fio condutor, do esboço ao último parafuso."
   - "ATEMPORAL" / "Projetos que envelhecem com elegância."
   - "PRESENTE" / "Acompanhamento próximo, sem terceirização."

5. CTA LINK (40px below pillars):
   - Inline text link "QUERO ENTENDER MELHOR" in Inter 12px uppercase weight 500 letter-spacing 0.32em color #201a18.
   - 12px gap, then arrow "→" in #a0604c.
   - A 1px horizontal line in #a0604c sits 6px below the entire link (text + arrow).

RIGHT COLUMN — Image (anchored to viewport right edge)
- A tall vertical architectural photograph (aspect ratio 3:5 or 4:6), height equal to the LEFT column's total height (matches the text block top to bottom).
- The image bleeds OFF the right edge of the viewport (no padding/margin on the right side — image extends until the screen edge).
- Image content: a stunning detail of a finished interior — a close-up of a sunlit corner with a sculptural chair, woven texture, a sliver of warm wood floor, and golden hour light slanting across a textured wall. NO people. Mood: serene, sophisticated, monastic warmth.
- A subtle 1px vertical border on the LEFT edge of the image only, in #d8c2bc, to delineate where the image meets the off-white background.

DECORATIVE DETAIL (subtle)
- In the far top-left of the LEFT column (above the eyebrow), a very small index marker: "II / VI" in Cinzel 12px italic-emulated (use weight 400 with reduced opacity) color #a0604c at 60% opacity — implying this is "chapter 2 of 6" in an editorial sequence. This is OPTIONAL and very small.

TONE
- Editorial, manifesto-like, confident. The asymmetry creates visual tension — heavy on the left, breathing image on the right. Typography is the protagonist. The image is the "rest" — a place for the eye to land. Terracotta #a0604c appears in: eyebrow line, emphasized word "EXPLICAR" + underline, vertical lines on pillars, CTA arrow + line, optional chapter marker. Nothing else.
```

---

## Prompt 5 — Prévia de Projetos (Carrossel sobre faixa terracota)

```
Design a "Projects Preview" carousel section for a premium architect's website. The section is visually distinct from the rest of the site thanks to a bold horizontal terracotta band that crosses the section behind the cards, creating an editorial magazine-cover effect. Sharp 90-degree corners on every element. No border radius anywhere.

CANVAS
- Desktop 1440x880. Background top half: #fff8f6 (warm off-white). Background bottom: a SOLID HORIZONTAL TERRACOTTA BAND of color #a0604c (primary-container), approximately 360px tall, positioned vertically so it sits behind the carousel — the cards float ON TOP of this band, with approximately the top 50% of each card on the off-white area and the bottom 50% on the terracotta band.
- This creates a "split background" — top section off-white, middle section terracotta band (~360px), bottom section off-white again (~80px below the band).
- Container max-width 1440px, padding 64px horizontal, 100px top, 100px bottom.

HEADER BLOCK (above the carousel, on the off-white area)

1. EYEBROW (top-left):
   - 1px line 48px wide in #a0604c.
   - 16px gap.
   - "PROJETOS SELECIONADOS" in Inter 11px uppercase, weight 500, letter-spacing 0.4em, color #a0604c.

2. HEADLINE (24px below eyebrow):
   - "OBRAS QUE FALAM POR SI."
   - Cinzel 56px, weight 400, color #201a18, line-height 1.1, letter-spacing 0.04em, uppercase. Max-width 720px.
   - The word "FALAM" in #a0604c with a 1px underline below it (only width of the word).

3. RIGHT-SIDE META (aligned to the right edge of the eyebrow row, vertically aligned with the headline):
   - A small counter "06 PROJETOS" in Inter 11px uppercase letter-spacing 0.3em color #53433f, with a thin 1px line 24px wide in #a0604c directly below it.

DECORATIVE BACKGROUND DETAIL
- Behind the OFF-WHITE portion (top half) of the section, place a VERY FAINT blueprint grid: thin 1px lines in #d8c2bc at 30% opacity, forming a horizontal-and-vertical grid every 80px. This grid should NOT appear over the terracotta band — only on the off-white areas. It evokes architectural drafting paper.

CARROSSEL OF PROJECT CARDS (centered horizontally, sitting on top of the terracotta band)
- Display 4 cards visible at once, plus a partial 5th card peeking off the right edge (signaling more content).
- Each card: aspect ratio 3:4 (portrait), approximately 280px wide × 380px tall.
- Cards are equally spaced with a 24px gap between them.
- Each card has its top ~50% on the off-white background and bottom ~50% on the terracotta band — they "straddle" the band, creating a magazine-cover overlap effect.

EACH PROJECT CARD CONTAINS:

1. Image (full-bleed within the card, 280×320px, aspect 7:8): a high-quality architectural photograph — could be a living room, kitchen, bathroom, facade, or interior detail. Each card image should be visually distinct.

2. Below the image (32px area), white background #ffffff (NOT the terracotta band — the card has a white footer block that sits over the terracotta), with hairline 1px border #d8c2bc top:
   - Project name in Cinzel 14px weight 500 uppercase letter-spacing 0.08em color #201a18.
   - 4px gap.
   - Location + Year in Inter 10px uppercase letter-spacing 0.2em color #53433f. Example: "PORTO ALEGRE · 2024".

3. A small index "01" through "06" in Cinzel italic-style (use Cinzel weight 400 with terracotta color #a0604c) at 12px, positioned at the top-left INSIDE the image (8px from top-left corner of the image), with a tiny 1px square white background plate behind it (8x8px padding 4px) so the number reads against any image.

THE 5 VISIBLE CARDS (titles + location):
- Card 01: "RESIDÊNCIA MONTE BELO" / "GRAMADO · 2024"
- Card 02: "APARTAMENTO MOINHOS" / "PORTO ALEGRE · 2024"
- Card 03: "CASA DE CAMPO IBIRAÇU" / "CANELA · 2023"
- Card 04: "LOFT INDUSTRIAL HARMONIA" / "PORTO ALEGRE · 2023"
- Card 05 (peeking off right edge, only ~50% visible): "ATELIÊ VILA FLORES" / "PORTO ALEGRE · 2023"

CAROUSEL CONTROLS (below the cards, on the terracotta band, centered)
- Left arrow icon (chevron_left, Material Symbols Outlined, 24px) in color #fff8f6 with a 1px outlined square 40×40px frame in #fff8f6 around it.
- 16px gap.
- Pagination indicator in the middle: "01 — 06" in Cinzel 16px weight 400 color #fff8f6 letter-spacing 0.1em. The "01" is at full opacity; "— 06" is at 60% opacity to suggest current/total.
- 16px gap.
- Right arrow icon (chevron_right) — same outlined-square treatment in #fff8f6.

BOTTOM "VIEW ALL" LINK (below the carousel, on the off-white area, right-aligned)
- "VER PORTFÓLIO COMPLETO" in Inter 12px uppercase weight 500 letter-spacing 0.32em color #201a18.
- 12px gap, arrow "→" in #a0604c.
- 1px line in #a0604c below the full link.

TONE
- Bold, editorial, almost like spreads from a "Architectural Digest" feature. The terracotta band makes the section visually punch through the page — it's a chromatic event, but the cards remain restrained (white footers, sharp images, classical typography). The faint blueprint grid on the off-white half adds a layer of technical drafting reference without competing for attention.

IMPORTANT
- The terracotta band must be EXACTLY #a0604c (the design system's primary-container color).
- Cards have WHITE footer blocks (#ffffff) — do NOT make the footers terracotta or off-white. They must be pure white to "pop" against the terracotta band.
- The peek of the 5th card on the right edge is essential — it signals "there's more, swipe to see".
- The grid pattern is VERY faint (30% opacity) — barely perceptible, just enough to feel "architectural".
```

---

## Prompt 6 — CTA Final (Split com imagem + terracota)

```
Design a final "Call to Action" section that closes a premium architect's homepage. It must feel like the powerful last page of an art monograph — confident, generous, and decisive. Two-column 50/50 split: LEFT column is a large architectural photograph (image-first); RIGHT column is a solid terracotta block with the closing pitch and CTAs. Sharp 90-degree corners. No border radius anywhere.

CANVAS
- Desktop 1440x720. The section is FULL-BLEED — both columns extend from the left edge of the viewport to the right edge (NO container padding on the outside of the split). The two columns each occupy 50% of the viewport width.

LEFT COLUMN (50% width) — IMAGE
- A single large architectural interior photograph fills the entire left half of the section (100% of the half's width × 100% of the section height).
- Image content: a warm, finished interior bathed in late afternoon light. A long wooden dining table with a single ceramic vase, soft linen drapes filtering golden light, a low sculptural pendant lamp above. The composition shows depth — foreground, midground, background. NO people. Mood: completed, lived-in serenity, the kind of space that ends a day well.
- A subtle 1px hairline border on the RIGHT edge of the image (in #fff8f6 at 30% opacity), creating a clean division between image and the terracotta block on its right.

RIGHT COLUMN (50% width) — TERRACOTTA BLOCK
- Solid background #a0604c (primary-container) fills the entire right half.
- Generous internal padding: 96px left, 96px right, 80px top, 80px bottom.
- Content vertically centered.

INSIDE THE RIGHT COLUMN (top to bottom):

1. EYEBROW (top-left of column content area):
   - 1px horizontal line, 48px wide, in #fff8f6 (off-white).
   - 16px gap below.
   - "VAMOS COMEÇAR" in Inter 11px uppercase weight 500 letter-spacing 0.4em color #fff8f6.

2. MAIN HEADLINE (32px below eyebrow):
   - "SEU PRÓXIMO LAR COMEÇA COM UMA CONVERSA."
   - Cinzel 52px desktop / 32px mobile, weight 400, color #fff8f6, line-height 1.1, letter-spacing 0.04em, uppercase. Max-width 460px.
   - The word "CONVERSA" in pure white #ffffff (slight tonal lift against the off-white) with a 1px underline in #ffffff sitting 4px below the baseline (only width of the word).

3. SUPPORTING PARAGRAPH (32px below headline):
   - "Não importa se você tem só uma planta na mão ou um sonho ainda sem forma. A primeira conversa é gratuita, sem compromisso e — sinceramente — onde tudo de bom começa."
   - Inter 17px weight 400 color #fff8f6 at 85% opacity, line-height 1.65. Max-width 440px.

4. CTA BUTTONS (40px below paragraph, horizontal stack with 16px gap):

   PRIMARY BUTTON:
   - Solid fill #fff8f6 (off-white), no border, sharp corners, padding 22px 44px.
   - Text "AGENDAR CONVERSA" in Inter 12px uppercase weight 500 letter-spacing 0.32em color #a0604c (terracotta — text becomes the brand color over the off-white fill).
   - 14px gap, then arrow "→" in #a0604c.

   SECONDARY LINK:
   - Inline text "WHATSAPP DIRETO" in Inter 12px uppercase weight 500 letter-spacing 0.32em color #fff8f6.
   - 12px gap, arrow "→" in #fff8f6.
   - 1px line in #fff8f6 below the link.

5. CONTACT META BLOCK (48px below buttons, bottom of column):
   - A thin 1px horizontal line 80px wide in #fff8f6 at 40% opacity.
   - 16px gap.
   - Two metadata rows, stacked, each in Inter 11px uppercase letter-spacing 0.25em color #fff8f6 at 80% opacity:
     - Row 1: "+55 51 81 14 9971"
     - Row 2: "PORTO ALEGRE · RS · BRASIL"

DECORATIVE DETAIL (top-right corner of the right column)
- A small "VI / VI" chapter marker in Cinzel 14px weight 400 color #fff8f6 at 50% opacity, positioned at the top-right of the right column (40px from top, 40px from right). Below it, a 1px line 32px wide in #fff8f6 at 50% opacity. This signals "final chapter" — closing the editorial sequence.

DECORATIVE DETAIL (bottom-left of left column / image side)
- An overlay block sitting at the bottom-left of the image (32px from bottom, 32px from left): a small text block with background #fff8f6 (off-white), padding 16px 20px, no border radius. Contains:
  - "PROJETO ENTREGUE 2024" in Inter 10px uppercase letter-spacing 0.3em color #201a18.
  - 4px gap.
  - "RESIDÊNCIA PRIVADA · GRAMADO/RS" in Inter 9px uppercase letter-spacing 0.2em color #53433f at 80% opacity.
- This caption grounds the image as REAL work, not stock photography — adding credibility to the closing CTA.

TONE
- Confident final statement. The split creates a clear duality: "here is what's possible" (the image) and "here is how we begin" (the terracotta pitch). The terracotta block matches the energy of the Services section (visual rhyme), closing the homepage with chromatic symmetry. Typography in white over terracotta carves the message in stone. The primary button inverts the color logic (off-white fill, terracotta text) to feel like a "key to enter" — distinct from any other button in the site.

IMPORTANT
- The split must be EXACTLY 50/50 with no container padding on the outside — full bleed to viewport edges.
- The primary button is SOLID off-white (not outlined like the Services section's button) — this is intentional, marking the FINAL CTA as more decisive and inviting than all previous CTAs.
- Image must NOT have any color overlay or gradient — it stays untouched, warm and inviting.
- The terracotta block must use exactly #a0604c, matching the Services section, NOT a lighter or darker variant.
```

---

## Notas de uso no Stitch

1. **Cole um prompt por vez.** Stitch responde melhor a prompts isolados.
2. **Cinzel é uma fonte capital** — todos os títulos devem ficar em CAIXA ALTA. Letter-spacing entre 0.04em e 0.1em deixa a fonte respirar (capitais romanas precisam de espaço entre letras).
3. **Sem itálico:** Cinzel não tem variante itálica. Toda ênfase é feita por **cor** (terracota nos fundos claros, off-white/branco no fundo terracota) ou **peso** (500 vs 400).
4. **Hero deve ficar quase vazia.** Se o Stitch tentar adicionar botão, parágrafo ou indicador de scroll, remova manualmente.
5. **Sessão de serviços é o pico cromático.** Se o Stitch suavizar o terracota ou colocar fundo branco nos cards, force background `#a0604c` em todos.
6. **Caso o Stitch não tenha Cinzel disponível** (improvável — Cinzel está no Google Fonts), peça substituição por "Trajan Pro" ou "Marcellus" (ambas mantêm o caráter de capital romana).
7. **Sem arredondamento:** repita "border-radius: 0" em cada componente se necessário.
8. **Para as seções 4-6:** se o Stitch suavizar o sangramento (bleed) das imagens — onde a imagem ultrapassa o container ou ocupa 50% full-bleed — force isso manualmente. É o que dá o caráter editorial às novas seções.
9. **Ordem na página:** Hero (1) → Sobre (2) → Manifesto (4) → Projetos (5) → Serviços (3) → CTA Final (6) → Footer. A seção 4 entra logo após Sobre para "vender" o método antes de listar serviços, e a 6 fecha a homepage antes do footer.
