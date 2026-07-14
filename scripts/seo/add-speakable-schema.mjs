#!/usr/bin/env node
// Bulk-adds SpeakableSchema to blog posts that already have AuthorSchema
// but no SpeakableSchema. Extracts articleUrl + headline from AuthorSchema
// and injects a matching <SpeakableSchema ... /> block right after it.
// Idempotent: skips files that already import SpeakableSchema.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/pages/blog";
const files = readdirSync(DIR).filter((f) => f.endsWith(".tsx"));

let added = 0, skipped = 0, failed = [];

for (const f of files) {
  const path = join(DIR, f);
  const src = readFileSync(path, "utf8");
  if (src.includes("SpeakableSchema")) { skipped++; continue; }

  // Find AuthorSchema block and capture articleUrl + headline
  const authorMatch = src.match(
    /(<AuthorSchema\b[\s\S]*?articleUrl=(?:"([^"]+)"|\{`([^`]+)`\})[\s\S]*?headline=(?:"([^"]+)"|\{`([^`]+)`\})[\s\S]*?\/>)/
  );
  if (!authorMatch) { failed.push(f + " (no AuthorSchema)"); continue; }

  const url = authorMatch[2] || authorMatch[3];
  const headline = authorMatch[4] || authorMatch[5];
  const authorBlock = authorMatch[1];

  const speakable = `\n      <SpeakableSchema\n        pageUrl="${url}"\n        pageName=${JSON.stringify(headline)}\n      />`;

  let out = src.replace(authorBlock, authorBlock + speakable);

  // Add import after AuthorSchema import if present, else after last @/components import
  if (!/from ["']@\/components\/SpeakableSchema["']/.test(out)) {
    const importLine = `import { SpeakableSchema } from "@/components/SpeakableSchema";\n`;
    if (/import\s*\{\s*AuthorSchema\s*\}\s*from\s*["']@\/components\/AuthorSchema["'];?\n/.test(out)) {
      out = out.replace(
        /(import\s*\{\s*AuthorSchema\s*\}\s*from\s*["']@\/components\/AuthorSchema["'];?\n)/,
        `$1${importLine}`
      );
    } else {
      // fallback: prepend at top
      out = importLine + out;
    }
  }

  writeFileSync(path, out);
  added++;
}

console.log(`SpeakableSchema: added=${added}, skipped=${skipped}, failed=${failed.length}`);
if (failed.length) { for (const x of failed) console.log("  - " + x); process.exit(1); }
