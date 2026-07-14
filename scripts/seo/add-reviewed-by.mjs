#!/usr/bin/env node
// Adds <ReviewedBy /> before <KeyTakeaways ... /> on any blog post missing it.
// Idempotent; skips files that already import ReviewedBy.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/pages/blog";
const files = readdirSync(DIR).filter((f) => f.endsWith(".tsx"));

let added = 0, skipped = 0, failed = [];

for (const f of files) {
  const path = join(DIR, f);
  const src = readFileSync(path, "utf8");
  if (/ReviewedBy/.test(src)) { skipped++; continue; }

  // Find first <KeyTakeaways occurrence
  const idx = src.indexOf("<KeyTakeaways");
  if (idx < 0) { failed.push(f + " (no KeyTakeaways)"); continue; }

  // Preserve indentation of that line
  const lineStart = src.lastIndexOf("\n", idx) + 1;
  const indent = src.slice(lineStart, idx);

  const block = `<ReviewedBy name="Dr. Sarah Chen" role="AI & Academic Integrity Researcher" slug="dr-sarah-chen" />\n\n${indent}`;
  let out = src.slice(0, idx) + block + src.slice(idx);

  // Add import: after last existing @/components import, else at top
  const importLine = `import ReviewedBy from "@/components/ReviewedBy";\n`;
  const importsRe = /(import[^\n]*from ["']@\/components\/[^"']+["'];?\n)(?![\s\S]*import[^\n]*from ["']@\/components\/)/;
  if (importsRe.test(out)) {
    out = out.replace(importsRe, `$1${importLine}`);
  } else {
    out = importLine + out;
  }

  writeFileSync(path, out);
  added++;
}

console.log(`ReviewedBy: added=${added}, skipped=${skipped}, failed=${failed.length}`);
if (failed.length) for (const x of failed) console.log("  - " + x);
