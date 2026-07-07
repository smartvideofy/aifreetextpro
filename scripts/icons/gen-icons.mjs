// Generates a crisp favicon/app-icon set from the brand brain mark.
// Vector source (lucide "Brain") rendered via Puppeteer at each size — no upscaling blur.
//   Outputs (to public/): favicon-16/32/48.png, favicon-192.png, favicon-512.png,
//   apple-touch-icon.png (180, full-bleed/opaque). favicon.ico is assembled separately
//   from the 16/32/48 PNGs by build-ico.py.
import puppeteer from "puppeteer";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = resolve(__dirname, "../../public");

// lucide Brain paths (viewBox 0 0 24 24, stroke 2, round caps/joins)
const BRAIN = [
  "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
  "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
  "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
  "M17.599 6.5a3 3 0 0 0 .399-1.375",
  "M6.003 5.125A3 3 0 0 0 6.401 6.5",
  "M3.477 10.896a4 4 0 0 1 .585-.396",
  "M19.938 10.5a4 4 0 0 1 .585.396",
  "M6 18a4 4 0 0 1-1.967-.516",
  "M19.967 17.484A4 4 0 0 1 18 18",
];

// Brand purple (sampled from logo.png = rgb(151,103,228) #9767E4)
function svg({ size, rounded }) {
  const rx = rounded ? 112 : 0;
  const paths = BRAIN.map((d) => `<path d="${d}" />`).join("");
  // brain scaled to ~300px and centered on a 512 canvas
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#A87BF0"/>
      <stop offset="1" stop-color="#6D3FC4"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="512" height="512" rx="${rx}" ry="${rx}" fill="url(#g)"/>
  <g transform="translate(106 106) scale(12.5)" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    ${paths}
  </g>
</svg>`;
}

const targets = [
  { name: "favicon-16.png", size: 16, rounded: true, omit: true },
  { name: "favicon-32.png", size: 32, rounded: true, omit: true },
  { name: "favicon-48.png", size: 48, rounded: true, omit: true },
  { name: "favicon-192.png", size: 192, rounded: true, omit: true },
  { name: "favicon-512.png", size: 512, rounded: true, omit: true },
  { name: "apple-touch-icon.png", size: 180, rounded: false, omit: false }, // opaque, iOS masks
];

const browser = await puppeteer.launch({ headless: "new" });
try {
  const page = await browser.newPage();
  for (const t of targets) {
    const markup = svg({ size: t.size, rounded: t.rounded });
    await page.setViewport({ width: t.size, height: t.size, deviceScaleFactor: 1 });
    await page.setContent(
      `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;padding:0;background:transparent}</style>${markup}`,
      { waitUntil: "load" }
    );
    const el = await page.$("svg");
    await el.screenshot({ path: resolve(PUBLIC, t.name), omitBackground: t.omit });
    console.log("wrote", t.name, `${t.size}x${t.size}`);
  }
} finally {
  await browser.close();
}
console.log("done");
