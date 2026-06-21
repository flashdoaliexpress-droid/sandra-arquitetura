---
name: Sandra Arquitetura
colors:
  surface: '#fff8f6'
  surface-dim: '#e4d7d4'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fef1ed'
  surface-container: '#f8ebe8'
  surface-container-high: '#f2e5e2'
  surface-container-highest: '#ede0dc'
  on-surface: '#201a18'
  on-surface-variant: '#53433f'
  inverse-surface: '#362f2d'
  inverse-on-surface: '#fbeeea'
  outline: '#85736e'
  outline-variant: '#d8c2bc'
  surface-tint: '#8a4e3b'
  primary: '#834836'
  on-primary: '#ffffff'
  primary-container: '#a0604c'
  on-primary-container: '#fff4f1'
  inverse-primary: '#ffb59e'
  secondary: '#645d59'
  on-secondary: '#ffffff'
  secondary-container: '#e8ddd8'
  on-secondary-container: '#69615d'
  tertiary: '#17635b'
  on-tertiary: '#ffffff'
  tertiary-container: '#367c73'
  on-tertiary-container: '#d5fff7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#370e02'
  on-primary-fixed-variant: '#6e3726'
  secondary-fixed: '#ebe0db'
  secondary-fixed-dim: '#cfc4bf'
  on-secondary-fixed: '#201b18'
  on-secondary-fixed-variant: '#4c4542'
  tertiary-fixed: '#aaf0e4'
  tertiary-fixed-dim: '#8ed3c9'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005049'
  background: '#fff8f6'
  on-background: '#201a18'
  surface-variant: '#ede0dc'
typography:
  display-lg:
    fontFamily: Cinzel
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.06em
  display-lg-mobile:
    fontFamily: Cinzel
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.06em
  headline-lg:
    fontFamily: Cinzel
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.06em
  headline-md:
    fontFamily: Cinzel
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: 0.06em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.02em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system is anchored in an "Institutional Premium" aesthetic, drawing inspiration from high-end architectural monographs and editorial art books. The personality is disciplined, authoritative, and timeless, prioritizing structural integrity over decorative trends.

The visual language follows a strict **Minimalist-Brutalism** hybrid: it uses the generous whitespace and refined palettes of minimalism but adopts the raw, uncompromising geometry of brutalism. Every element is defined by sharp 90-degree intersections, evoking the precision of floor plans and the permanence of stone masonry. The emotional response is one of quiet confidence, heritage, and architectural rigor.

## Colors
The palette is rooted in natural, earthy materials. The primary background (#F5F1EC) mimics the warmth of unbleached paper or limestone, providing a softer foundation than pure white for long-form editorial reading. 

Pure White (#FFFFFF) is reserved for interactive surfaces and elevated containers to create subtle contrast. The accent color, Terracotta (#A0604C), serves as the primary call-to-action and focal point, representing kiln-fired clay and warmth within the structure. Text utilizes a deep obsidian (#1F1A17) for maximum legibility, while secondary metadata uses a muted stone grey (#6B5F58). Dividers and structural lines use #D9D2CB to remain present but unobtrusive.

## Typography
Typography is the primary driver of the "Art-Book" aesthetic. This design system pairs the Roman-inspired proportions of **Cinzel** with the neutral, functional clarity of **Inter**.

- **Cinzel:** Used exclusively for headlines and display text. It must always be set in **UPPERCASE**. Given that Cinzel lacks an italic variant, emphasis within headings should be achieved by switching between weight 400 and 500, or by introducing the Terracotta accent color.
- **Inter:** Used for all body copy, UI labels, and interface elements. It provides a technical, grounded counterpoint to the decorative serif.
- **Watermarks:** For atmospheric texture, large-scale Cinzel characters (300px+) can be used in the background with an opacity of 3-5%, acting as architectural ghost-markings.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop, centered within a 1440px container to mimic the margins of a printed book. 

- **Grid:** A 12-column system is used for desktop, while a 4-column system is used for mobile. 
- **Rhythm:** Spacing follows a strict 8px base unit. 
- **Dividers:** Hairline borders (1px) are the primary tool for spatial separation. Layouts should favor generous padding (top/bottom) to allow imagery and typography to breathe. 
- **Alignment:** Elements should adhere to a rigorous vertical axis. Text blocks should be left-aligned to maintain the structural "edge" of the layout.

## Elevation & Depth
In alignment with the architectural theme, this design system rejects shadows and blurs. Depth is communicated through **Tonal Layering** and **Structural Framing**.

- **Flat Depth:** Hierarchy is established by placing white (#FFFFFF) surfaces over the warm background (#F5F1EC). 
- **Framing:** Elements are contained by 1px solid dividers (#D9D2CB) rather than cast shadows. 
- **Z-Index:** The navigation bar is fixed and transparent, only gaining a solid background (#F5F1EC) upon scroll to maintain legibility without breaking the page's structural flow.

## Shapes
The shape language is strictly **Orthogonal**. 

Every element—including buttons, input fields, cards, and images—must have a **0px border radius**. There are no exceptions. This reinforces the concept of architectural blueprints and structural masonry. All containers use 1px solid strokes for definition.

## Components
Consistent styling across components ensures the institutional feel is maintained:

- **Buttons:** Use an `outlined` style with a 1px border. They feature wide horizontal padding (32px+) and increased letter-spacing to feel expansive. Hover states involve a solid fill of the Primary Text color with white text.
- **Cards:** Defined by hairline borders on all sides or just the bottom. Imagery within cards should be full-bleed to the top and sides, maintaining the sharp 90-degree corner.
- **Input Fields:** Minimalist underlines or full boxes with sharp corners. Labels should use the `label-caps` typography style, positioned above the field.
- **Lists:** Separated by horizontal 1px lines. Bullet points are replaced by small terracotta squares or omitted entirely in favor of indentation.
- **Navbar:** Minimal wordmark on the left, navigation links on the right using `label-caps`. No background color on initial load; it should feel like part of the hero imagery.
- **Chips/Tags:** Rectangular boxes with 1px borders, no rounding. Used sparingly for project categories.