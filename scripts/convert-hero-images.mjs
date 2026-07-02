import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, dirname, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "src", "assets");
const QUALITY = 88;

const HERO_PATTERN = /^Hero - Imagem [1-3] (desktop|mobile)\.png$/;

async function main() {
  const files = await readdir(ASSETS_DIR);
  const targets = files.filter((f) => HERO_PATTERN.test(f));

  if (targets.length === 0) {
    console.log("No hero PNGs found matching pattern.");
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of targets) {
    const input = join(ASSETS_DIR, file);
    const output = join(ASSETS_DIR, basename(file, extname(file)) + ".webp");

    const before = (await stat(input)).size;
    await sharp(input)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(output);
    const after = (await stat(output)).size;

    totalBefore += before;
    totalAfter += after;

    const pct = ((1 - after / before) * 100).toFixed(1);
    console.log(
      `${file.padEnd(38)} ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB  (-${pct}%)`
    );
  }

  const totalPct = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB  (-${totalPct}%)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
