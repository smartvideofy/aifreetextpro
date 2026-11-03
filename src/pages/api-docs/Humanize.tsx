import { Link } from "react-router-dom";
import { DocsLayout } from "@/components/api-docs/DocsLayout";
import { Callout, CodeBlock, CodeTabs, Endpoint, FieldTable, H2, H3, List, P, SimpleTable, type Field } from "@/components/api-docs/DocsBlocks";
import { humanizeExamples, humanizeResponseExample } from "@/components/api-docs/snippets";
import { API_BASE_URL, MAX_HUMANIZE_WORDS, formatNumber } from "@/lib/developerApi";

const params: Field[] = [
  { name: "text", type: "string", required: true, desc: <>The text to humanize, up to {formatNumber(MAX_HUMANIZE_WORDS)} words. Line breaks are kept; each line is treated as a paragraph.</> },
  { name: "style", type: "string", desc: <><code>professional</code> (default), <code>academic</code>, <code>casual</code>, <code>creative</code> or <code>simple</code>. See <a href="#styles" className="text-primary hover:underline">styles</a>.</> },
  { name: "strength", type: "string | number", desc: <><code>"light"</code> (25), <code>"balanced"</code> (50), <code>"strong"</code> (90, default), or any number from 0 to 100.</> },
  { name: "language", type: "string", desc: <><code>en</code>, <code>es</code>, <code>fr</code>, <code>de</code>, <code>nl</code>, <code>pt</code> or <code>it</code>. Detected from the text when left out (or when the value isn't one of these). The rewrite stays in the same language.</> },
  { name: "return_versions", type: "boolean", desc: <>Also return the text of every version. Default <code>false</code>: versions carry only their scores.</> },
];

const response: Field[] = [
  { name: "id", type: "string", desc: "Request id. It matches the request in the console's Logs; quote it if you contact support." },
  { name: "humanized_text", type: "string", desc: "The version with the lowest AI score. Every sentence of the input is there, in order." },
  { name: "unchanged", type: "boolean", desc: <>True when every version scored higher than the original, so the original text comes back. See <a href="#unchanged" className="text-primary hover:underline">unchanged results</a>.</> },
  { name: "ai_score", type: "object | null", desc: <>AI-detector score (0–100) of the original and of the returned text: <code>{"{ \"before\": 100, \"after\": 42.4 }"}</code>. Null if the detector didn't answer.</> },
  { name: "versions", type: "array", desc: <>One entry per round: <code>{"{ \"version\": 1, \"ai_score\": 65.2 }"}</code>, plus <code>text</code> when <code>return_versions</code> is true. Empty when unchanged.</> },
  { name: "best_version", type: "integer | null", desc: "Which version is in humanized_text (1-based). Null when unchanged." },
  { name: "word_count", type: "integer", desc: "Words in the input." },
  { name: "tokens_used", type: "integer", desc: "Tokens charged: 1 per word of input." },
  { name: "tokens_remaining", type: "integer", desc: "Your balance after this request." },
  { name: "style, strength, language", type: "string / number", desc: "The settings that were applied (strength as a number)." },
];

const ApiDocsHumanize = () => (
  <DocsLayout
    metaTitle="POST /v1/humanize: AI Humanizer API Reference"
    description="Reference for POST /v1/humanize: request fields (text, style, strength, language, return_versions), the response, versions and AI scores, timing and how unchanged results work."
    title="POST /v1/humanize"
    lead="Rewrite AI-generated text so it reads as written by a person, checked with an AI detector."
  >
    <Endpoint path={`${API_BASE_URL}/humanize`} />

    <H2 id="request">Request body</H2>
    <FieldTable rows={params} withRequired />

    <H2 id="example">Example</H2>
    <CodeTabs examples={humanizeExamples.filter((e) => ["curl", "python", "node"].includes(e.id))} />
    <P>More languages on the <Link to="/api/docs/examples">code examples</Link> page.</P>

    <H2 id="response">Response</H2>
    <FieldTable rows={response} />
    <CodeBlock code={humanizeResponseExample} label="200 OK" />

    <H2 id="process">What happens to your text</H2>
    <List ordered>
      <li>The text is split into paragraphs (one per line) and sentences. Headings, reference lists and list markers are kept exactly as written; see <Link to="/api/docs/best-practices#formatting" className="text-primary hover:underline">formatting</Link>.</li>
      <li>Each sentence is rewritten one for one. A rewrite is rejected (and the original sentence kept) if it drops a number or a run-in label, turns into two sentences, or changes length too much. The whole text can't grow by more than about 10%.</li>
      <li>The result (version 1) is scored by an AI detector. While the score is above 20%, the sentences it flags are rewritten again from their originals, for up to four versions.</li>
      <li>If a version still scores 85% or more, the next round escalates: a different model rewrites the flagged paragraphs in a looser, more conversational voice (a plain student voice for <code>academic</code>). Two escalated rounds that don't help end the run early.</li>
      <li>The lowest-scoring version is returned.</li>
    </List>

    <H2 id="styles">Styles</H2>
    <SimpleTable
      head={["style", "Reads like"]}
      rows={[
        ["professional", "Plain-spoken and direct, like an experienced professional explaining it to a colleague. Contractions are fine; no slang. The default."],
        ["academic", "Formal, for coursework: no slang, no contractions, no first person unless the original uses it. Lowers AI scores less than the other styles."],
        ["casual", "Conversational, like talking to a friend."],
        ["creative", "Vivid, varied phrasing with personality."],
        ["simple", "Plain, common words and easy sentences."],
      ]}
    />

    <H2 id="strength">Strength</H2>
    <P>
      Strength sets how much each sentence changes: up to 30 is a light edit (only machine-sounding wording changes), 31–70 rewrites most
      sentences, and above 70 rewrites every sentence with a new opening and structure. <code>"strong"</code> (90) gives the lowest scores and is the default.
    </P>

    <H2 id="versions">Versions</H2>
    <P>
      Every round that gets a detector score is a version: V1 is the first rewrite, V2 and later are retries. <code>humanized_text</code> is the
      lowest-scoring one. If you'd rather choose yourself (for example, prefer a version that reads better at a slightly higher score), send
      <code> "return_versions": true</code> and pick from <code>versions[].text</code>.
    </P>

    <H2 id="unchanged">Unchanged results</H2>
    <P>
      The API never hands back text that scores higher than what you sent. If every version scored higher than the original, you get the
      original back with <code>"unchanged": true</code>. A version that ties with the original is returned. The request is still charged,
      because the rewriting and detector checks ran. This mostly happens with text that already scores low, or with very short text.
    </P>

    <H3>Timing</H3>
    <P>
      A request usually takes 20–90 seconds, depending on length and how many rounds run. Set your client timeout to at least 150 seconds.
      For long documents, see <Link to="/api/docs/best-practices#long-documents">splitting long documents</Link>.
    </P>

    <Callout>
      Results vary with the text. Generic, textbook-style prose is the hardest to move; in one of our tests a 118-word essay paragraph went from
      100% to 42.4%. The scores in the response come from the detector the API uses; other detectors may score the same text differently.
    </Callout>
  </DocsLayout>
);

export default ApiDocsHumanize;
