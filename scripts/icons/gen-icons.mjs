// Generates the AI Free Text Pro logo and icon set from the brand mark: the
// lucide "Brain" in purple #9767E4. This is the master for every app (site,
// app, admin, partner portal); copy the outputs there when the logo changes.
//
// On screen the brain has no background, so it sits on light and dark themes.
// Where an icon must be opaque (home screen, app launcher, search results) it
// sits on the near-black #09090B square, as in the original logo.
//
//   Outputs: src/assets/logo.svg, public/logo.svg, public/logo-tile.svg (for
//   coloured backgrounds and avatars), public/favicon.svg,
//   public/favicon-16/32/48.png, public/favicon-192.png, public/favicon-512.png,
//   public/logo.png (512), public/apple-touch-icon.png (180),
//   public/icon-maskable-512.png. Then run build-ico.py for favicon.ico.
import puppeteer from "puppeteer";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "../..");
const PUBLIC = resolve(ROOT, "public");

const PURPLE = "#9767E4";
const TILE = "#09090B";

// lucide Brain (viewBox 0 0 24 24, stroke 2, round caps and joins)
const BRAIN = [
  "M12 18V5",
  "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",
  "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",
  "M17.997 5.125a4 4 0 0 1 2.526 5.77",
  "M18 18a4 4 0 0 0 2-7.464",
  "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",
  "M6 18a4 4 0 0 1-2-7.464",
  "M6.003 5.125a4 4 0 0 0-2.526 5.77",
].map((d) => `<path d="${d}"/>`).join("");

const stroke = (width) =>
  `fill="none" stroke="${PURPLE}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"`;

/** The brain alone. A tighter box and heavier stroke keep it legible at favicon sizes. */
const mark = ({ width = 2, box = "0 0 24 24" } = {}) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${box}" ${stroke(width)}>${BRAIN}</svg>\n`;

/** The brain on the dark square; scale 0.88 matches the original logo. */
const tile = (scale) => {
  const off = +(12 * (1 - scale)).toFixed(3);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" fill="${TILE}"/><g transform="translate(${off} ${off}) scale(${scale})" ${stroke(2)}>${BRAIN}</g></svg>\n`;
};

writeFileSync(resolve(ROOT, "src/assets/logo.svg"), mark());
writeFileSync(resolve(PUBLIC, "logo.svg"), mark());
writeFileSync(resolve(PUBLIC, "logo-tile.svg"), tile(0.88));
writeFileSync(resolve(PUBLIC, "favicon.svg"), mark({ width: 2.25, box: "1 1 22 22" }));

const small = mark({ width: 2.5, box: "1 1 22 22" });
const targets = [
  { name: "favicon-16.png", size: 16, svg: small, opaque: false },
  { name: "favicon-32.png", size: 32, svg: small, opaque: false },
  { name: "favicon-48.png", size: 48, svg: small, opaque: false },
  { name: "favicon-192.png", size: 192, svg: tile(0.88), opaque: true },
  { name: "favicon-512.png", size: 512, svg: tile(0.88), opaque: true },
  { name: "logo.png", size: 512, svg: tile(0.88), opaque: true },
  { name: "apple-touch-icon.png", size: 180, svg: tile(0.88), opaque: true },
  // Android crops maskable icons to a circle, so the brain needs more room.
  { name: "icon-maskable-512.png", size: 512, svg: tile(0.66), opaque: true },
];

const browser = await puppeteer.launch({ headless: "new" });
try {
  const page = await browser.newPage();
  for (const t of targets) {
    await page.setViewport({ width: t.size, height: t.size, deviceScaleFactor: 1 });
    await page.setContent(
      `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;background:transparent}svg{display:block;width:${t.size}px;height:${t.size}px}</style>${t.svg}`,
      { waitUntil: "load" },
    );
    const el = await page.$("svg");
    await el.screenshot({ path: resolve(PUBLIC, t.name), omitBackground: !t.opaque });
    console.log("wrote", t.name, `${t.size}x${t.size}`);
  }
} finally {
  await browser.close();
}
console.log("done");
