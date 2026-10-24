// Finds and removes the invisible and look-alike characters that travel with
// AI chatbot output when it's copied: zero-width characters, unusual spaces,
// bidirectional controls and Unicode "tag" characters. Runs in the browser.
// Statistical watermarks such as SynthID live in the word choices themselves
// and are not affected by this; they need a rewrite.

export type CharKind = "zero-width" | "space" | "control" | "tag";

type CharInfo = { name: string; kind: CharKind; /** What to put back: "" deletes it. */ replacement: string };

const CHARS: Record<number, CharInfo> = {
  0x200b: { name: "Zero-width space", kind: "zero-width", replacement: "" },
  0x200c: { name: "Zero-width non-joiner", kind: "zero-width", replacement: "" },
  0x200d: { name: "Zero-width joiner", kind: "zero-width", replacement: "" },
  0x2060: { name: "Word joiner", kind: "zero-width", replacement: "" },
  0xfeff: { name: "Zero-width no-break space (BOM)", kind: "zero-width", replacement: "" },
  0x00ad: { name: "Soft hyphen", kind: "zero-width", replacement: "" },
  0x180e: { name: "Mongolian vowel separator", kind: "zero-width", replacement: "" },
  0x2061: { name: "Invisible function application", kind: "zero-width", replacement: "" },
  0x2062: { name: "Invisible times", kind: "zero-width", replacement: "" },
  0x2063: { name: "Invisible separator", kind: "zero-width", replacement: "" },
  0x2064: { name: "Invisible plus", kind: "zero-width", replacement: "" },
  0x00a0: { name: "No-break space", kind: "space", replacement: " " },
  0x202f: { name: "Narrow no-break space", kind: "space", replacement: " " },
  0x2002: { name: "En space", kind: "space", replacement: " " },
  0x2003: { name: "Em space", kind: "space", replacement: " " },
  0x2004: { name: "Three-per-em space", kind: "space", replacement: " " },
  0x2005: { name: "Four-per-em space", kind: "space", replacement: " " },
  0x2006: { name: "Six-per-em space", kind: "space", replacement: " " },
  0x2007: { name: "Figure space", kind: "space", replacement: " " },
  0x2008: { name: "Punctuation space", kind: "space", replacement: " " },
  0x2009: { name: "Thin space", kind: "space", replacement: " " },
  0x200a: { name: "Hair space", kind: "space", replacement: " " },
  0x205f: { name: "Medium mathematical space", kind: "space", replacement: " " },
  0x3000: { name: "Ideographic space", kind: "space", replacement: " " },
  0x202a: { name: "Left-to-right embedding", kind: "control", replacement: "" },
  0x202b: { name: "Right-to-left embedding", kind: "control", replacement: "" },
  0x202c: { name: "Pop directional formatting", kind: "control", replacement: "" },
  0x202d: { name: "Left-to-right override", kind: "control", replacement: "" },
  0x202e: { name: "Right-to-left override", kind: "control", replacement: "" },
  0x2066: { name: "Left-to-right isolate", kind: "control", replacement: "" },
  0x2067: { name: "Right-to-left isolate", kind: "control", replacement: "" },
  0x2068: { name: "First strong isolate", kind: "control", replacement: "" },
  0x2069: { name: "Pop directional isolate", kind: "control", replacement: "" },
  0x200e: { name: "Left-to-right mark", kind: "control", replacement: "" },
  0x200f: { name: "Right-to-left mark", kind: "control", replacement: "" },
};

const isTag = (cp: number) => cp >= 0xe0000 && cp <= 0xe007f;

function info(cp: number): CharInfo | null {
  if (CHARS[cp]) return CHARS[cp];
  if (isTag(cp)) return { name: "Unicode tag character", kind: "tag", replacement: "" };
  return null;
}

export type Finding = { code: string; name: string; kind: CharKind; count: number };

export type CleanOptions = {
  /** Turn em and en dashes used as punctuation into a comma or hyphen. */
  dashes?: boolean;
  /** Turn curly quotes and apostrophes into straight ones. */
  quotes?: boolean;
};

export type CleanResult = { text: string; findings: Finding[]; removed: number; dashes: number; quotes: number };

const hex = (cp: number) => `U+${cp.toString(16).toUpperCase().padStart(4, "0")}`;

/** Lists the hidden characters in the text, most frequent first. */
export function scanText(text: string): Finding[] {
  const counts = new Map<number, number>();
  for (const ch of text) {
    const cp = ch.codePointAt(0)!;
    if (info(cp)) counts.set(cp, (counts.get(cp) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([cp, count]) => ({ code: hex(cp), count, ...info(cp)! }))
    .map(({ code, count, name, kind }) => ({ code, name, kind, count }))
    .sort((a, b) => b.count - a.count);
}

export function cleanText(text: string, opts: CleanOptions = {}): CleanResult {
  const findings = scanText(text);
  let removed = 0;
  let out = "";
  for (const ch of text) {
    const i = info(ch.codePointAt(0)!);
    if (i) {
      removed++;
      out += i.replacement;
    } else out += ch;
  }
  // Emoji sequences rely on the zero-width joiner; deleting it splits them into
  // separate emoji, which is acceptable for prose.
  let dashes = 0;
  if (opts.dashes) {
    out = out
      .replace(/\s*—\s*/g, () => (dashes++, ", "))
      .replace(/\s+–\s+/g, () => (dashes++, " - "));
  }
  let quotes = 0;
  if (opts.quotes) {
    out = out.replace(/[“”]/g, () => (quotes++, '"')).replace(/[‘’]/g, () => (quotes++, "'"));
  }
  // Collapse doubled spaces the replacements can leave behind.
  out = out.replace(/ {2,}/g, " ").replace(/ +([,.;:!?])/g, "$1");
  return { text: out, findings, removed, dashes, quotes };
}
