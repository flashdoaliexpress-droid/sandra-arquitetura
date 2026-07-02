import { writeFile, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const SITE_URL = "https://www.arqsandra.com.br";

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/sobre", priority: "0.8", changefreq: "yearly" },
  { path: "/manifesto", priority: "0.6", changefreq: "yearly" },
  { path: "/servicos", priority: "0.9", changefreq: "monthly" },
  { path: "/contato", priority: "0.7", changefreq: "yearly" },
  { path: "/projetos", priority: "0.9", changefreq: "monthly" },
];

async function readProjectSlugs() {
  const dataFile = join(ROOT, "src", "projects", "data.ts");
  const src = await readFile(dataFile, "utf8");
  const slugs = [];
  const re = /slug:\s*"([^"]+)"/g;
  let match;
  while ((match = re.exec(src)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

function urlEntry(loc, lastmod, priority, changefreq) {
  return `  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function main() {
  const today = new Date().toISOString().slice(0, 10);
  const slugs = await readProjectSlugs();

  const entries = [
    ...STATIC_ROUTES.map((r) =>
      urlEntry(r.path, today, r.priority, r.changefreq)
    ),
    ...slugs.map((s) =>
      urlEntry(`/projetos/${s}`, today, "0.7", "monthly")
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

  const outPath = join(DIST, "sitemap.xml");
  await writeFile(outPath, xml, "utf8");
  console.log(
    `sitemap.xml generated with ${STATIC_ROUTES.length + slugs.length} URLs`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
