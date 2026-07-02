import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const SITE_URL = "https://www.arqsandra.com.br";
const DEFAULT_OG = `${SITE_URL}/og-image.jpg`;

const STATIC_ROUTES = [
  {
    path: "/sobre",
    title: "Sobre Sandra da Rocha · Arquiteta UNISINOS/RS 1998",
    description:
      "Arquiteta formada pela UNISINOS/RS em 1998, com 28 anos de trajetória em reformas residenciais e projetos comerciais em Porto Alegre e todo o Brasil.",
  },
  {
    path: "/manifesto",
    title: "Manifesto · Arquitetura Autoral, Atemporal e Presente",
    description:
      "Projeto bom é aquele que você não precisa explicar. Três pilares — autoral, atemporal, presente — guiam cada projeto assinado por Sandra da Rocha.",
  },
  {
    path: "/servicos",
    title: "Serviços de Arquitetura e Reforma em Porto Alegre",
    description:
      "Projeto de reforma, projeto arquitetônico, design de interiores, acompanhamento de obra, consultoria de imóvel e gerenciamento de obra em Porto Alegre / RS.",
  },
  {
    path: "/contato",
    title: "Contato · Sandra da Rocha Arquitetura",
    description:
      "Fale com Sandra pelo WhatsApp para conversar sobre seu projeto de reforma, arquitetura ou design de interiores. Primeira conversa gratuita, sem compromisso.",
  },
  {
    path: "/projetos",
    title: "Projetos · Sandra da Rocha Arquitetura",
    description:
      "Portfólio completo de projetos de arquitetura e interiores de Sandra da Rocha — reformas residenciais, projetos comerciais e obras autorais em Porto Alegre e todo o Brasil.",
  },
];

function extractProjects(src) {
  // Naive but effective: extract each project object as a substring
  const projects = [];
  const start = src.indexOf("export const PROJECTS");
  if (start === -1) return projects;

  const objRegex = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",[\s\S]*?city:\s*"([^"]+)",[\s\S]*?description:\s*\[\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = objRegex.exec(src)) !== null) {
    if (m.index < start) continue;
    projects.push({
      slug: m[1],
      title: m[2],
      city: m[3],
      description: m[4].replace(/\\"/g, '"').replace(/\\n/g, " "),
    });
  }
  return projects;
}

function truncate(str, max = 155) {
  if (str.length <= max) return str;
  return str.slice(0, max - 3).trimEnd() + "...";
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildMetaBlock({
  title,
  description,
  canonical,
  ogImage,
  type = "website",
  jsonLd,
}) {
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  const c = escapeHtml(canonical);
  const img = escapeHtml(ogImage);
  const jsonLdStr = jsonLd
    ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
    : "";
  return `
    <link rel="canonical" href="${c}" data-prerender />
    <meta property="og:url" content="${c}" data-prerender />
    <meta property="og:title" content="${t}" data-prerender />
    <meta property="og:description" content="${d}" data-prerender />
    <meta property="og:type" content="${type}" data-prerender />
    <meta property="og:image" content="${img}" data-prerender />
    <meta name="twitter:title" content="${t}" data-prerender />
    <meta name="twitter:description" content="${d}" data-prerender />
    <meta name="twitter:image" content="${img}" data-prerender />
    ${jsonLdStr}
  `;
}

function rewriteHtml(shell, { title, description, canonical, ogImage, type, jsonLd }) {
  let html = shell;

  // Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);

  // Replace description
  html = html.replace(
    /<meta\s+name="description"[^>]*\/>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );

  // Remove default canonical + og/twitter tags that will be overridden
  html = html.replace(/<link rel="canonical"[^>]*\/>\s*/g, "");
  html = html.replace(/<meta property="og:url"[^>]*\/>\s*/g, "");
  html = html.replace(/<meta property="og:title"[^>]*\/>\s*/g, "");
  html = html.replace(/<meta property="og:description"[^>]*\/>\s*/g, "");
  html = html.replace(/<meta property="og:type"[^>]*\/>\s*/g, "");
  html = html.replace(/<meta property="og:image" content="[^"]*"\s*\/>\s*/g, "");
  html = html.replace(/<meta name="twitter:title"[^>]*\/>\s*/g, "");
  html = html.replace(/<meta name="twitter:description"[^>]*\/>\s*/g, "");
  html = html.replace(/<meta name="twitter:image"[^>]*\/>\s*/g, "");

  // Inject new tags just before </head>
  const block = buildMetaBlock({ title, description, canonical, ogImage, type, jsonLd });
  html = html.replace("</head>", `${block}</head>`);

  return html;
}

async function writeRoute(shell, route) {
  const canonical = `${SITE_URL}${route.path}`;
  const html = rewriteHtml(shell, {
    title: route.title,
    description: route.description,
    canonical,
    ogImage: route.ogImage ?? DEFAULT_OG,
    type: route.type ?? "website",
    jsonLd: route.jsonLd,
  });
  const outDir = join(DIST, route.path.replace(/^\//, ""));
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "index.html"), html, "utf8");
}

async function main() {
  const shellPath = join(DIST, "index.html");
  const shell = await readFile(shellPath, "utf8");

  const dataFile = join(ROOT, "src", "projects", "data.ts");
  const dataSrc = await readFile(dataFile, "utf8");
  const projects = extractProjects(dataSrc);

  let count = 0;

  for (const route of STATIC_ROUTES) {
    await writeRoute(shell, route);
    count++;
  }

  for (const p of projects) {
    const description = truncate(p.description);
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: p.title,
      description: p.description,
      author: { "@id": `${SITE_URL}/#sandra` },
      locationCreated: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: p.city,
          addressCountry: "BR",
        },
      },
      url: `${SITE_URL}/projetos/${p.slug}`,
    };
    await writeRoute(shell, {
      path: `/projetos/${p.slug}`,
      title: `${p.title} · ${p.city} · Sandra da Rocha Arquitetura`,
      description,
      type: "article",
      jsonLd,
    });
    count++;
  }

  console.log(
    `Prerendered ${count} routes (${STATIC_ROUTES.length} static + ${projects.length} projects)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
