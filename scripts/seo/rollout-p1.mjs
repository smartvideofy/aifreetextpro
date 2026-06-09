#!/usr/bin/env node
// P1 SEO rollout: dateModified on every AuthorSchema + SpeakableSchema on top informational posts.
import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = "src/pages/blog";
const TODAY = "2026-06-09";

const SPEAKABLE_TARGETS = [
  "CanDetectorsDetectGPT5.tsx",
  "CanTeachersDetectChatGPT.tsx",
  "CanTurnitinDetectDeepSeek.tsx",
  "CanTurnitinDetectPerplexity.tsx",
  "DoesGrammarlyTriggerAIDetection.tsx",
  "DoesTurnitinDetectChatGPT.tsx",
  "DoesTurnitinDetectGemini.tsx",
  "HowAIDetectorsScoreText.tsx",
  "HowAIDetectorsWork.tsx",
  "HowToCheckIfWrittenByAI.tsx",
  "HowToCiteAIGeneratedContent.tsx",
  "HowToDetectAI.tsx",
  "HowToWriteNaturallyWithAI.tsx",
  "IsItIllegalToUseAIForSchool.tsx",
  "WhyAIContentFails.tsx",
  "BestAIDetector2026.tsx",
  "BestAIDetectorForTeachers.tsx",
  "BestAIHumanizers.tsx",
  "BestAIToolsForStudents.tsx",
  "BestFreeAIHumanizer2026.tsx",
  "BypassAIDetection.tsx",
  "BypassAIDetectionGuide.tsx",
  "BypassCopyleaksDetection.tsx",
  "BypassWinstonAIDetection.tsx",
  "BypassZeroGPTDetection.tsx",
  "HumanizeAIText.tsx",
  "HumanizeAITextFreeNoSignup.tsx",
  "HumanizeChatGPTText.tsx",
  "Top10AIHumanizers.tsx",
  "Top10AIWritingTools2026.tsx",
];

let dmAdded = 0, dmSkipped = 0, spAdded = 0, spSkipped = 0;

for (const file of fs.readdirSync(BLOG_DIR)) {
  if (!file.endsWith(".tsx")) continue;
  const full = path.join(BLOG_DIR, file);
  let src = fs.readFileSync(full, "utf8");
  const orig = src;

  // 1) Inject dateModified on AuthorSchema if missing
  src = src.replace(
    /<AuthorSchema\b([\s\S]*?)\/>/g,
    (m, props) => {
      if (/dateModified=/.test(props)) return m;
      const dpMatch = props.match(/datePublished="([^"]+)"/);
      if (!dpMatch) return m;
      // insert dateModified right after datePublished
      const updated = props.replace(
        /datePublished="([^"]+)"/,
        `datePublished="$1"\n        dateModified="${TODAY}"`
      );
      dmAdded++;
      return `<AuthorSchema${updated}/>`;
    }
  );
  if (src === orig) dmSkipped++;

  // 2) Inject SpeakableSchema on targets
  if (SPEAKABLE_TARGETS.includes(file)) {
    if (/SpeakableSchema/.test(src)) {
      spSkipped++;
    } else {
      // Need URL + headline. Try to grab from AuthorSchema invocation.
      const asMatch = src.match(/<AuthorSchema\b([\s\S]*?)\/>/);
      if (asMatch) {
        const props = asMatch[1];
        const url = (props.match(/articleUrl="([^"]+)"/) || [])[1];
        const headline = (props.match(/headline="([^"]+)"/) || [])[1];
        if (url && headline) {
          // Add import
          if (!/from "@\/components\/SpeakableSchema"/.test(src)) {
            src = src.replace(
              /import\s+\{\s*AuthorSchema\s*\}\s+from\s+"@\/components\/AuthorSchema";/,
              (m) => `${m}\nimport { SpeakableSchema } from "@/components/SpeakableSchema";`
            );
          }
          // Insert SpeakableSchema right after AuthorSchema closing
          const escHeadline = headline.replace(/"/g, '\\"');
          const tag = `\n      <SpeakableSchema\n        pageUrl="${url}"\n        pageName="${escHeadline}"\n      />`;
          src = src.replace(/<AuthorSchema\b[\s\S]*?\/>/, (m) => m + tag);
          spAdded++;
        }
      }
    }
  }

  if (src !== orig) fs.writeFileSync(full, src);
}

console.log(`dateModified added: ${dmAdded}, no-change files: ${dmSkipped}`);
console.log(`SpeakableSchema added: ${spAdded}, already present: ${spSkipped}`);
