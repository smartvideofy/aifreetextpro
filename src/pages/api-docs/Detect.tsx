import { Link } from "react-router-dom";
import { DocsLayout } from "@/components/api-docs/DocsLayout";
import { CodeBlock, CodeTabs, Endpoint, FieldTable, H2, P, SimpleTable, type Field } from "@/components/api-docs/DocsBlocks";
import { detectExamples, detectResponseExample } from "@/components/api-docs/snippets";
import { API_BASE_URL, DETECT_WORDS_PER_TOKEN, MAX_DETECT_CHARACTERS, formatNumber } from "@/lib/developerApi";

const params: Field[] = [
  { name: "text", type: "string", required: true, desc: <>The text to check, up to {formatNumber(MAX_DETECT_CHARACTERS)} characters.</> },
];

const response: Field[] = [
  { name: "id", type: "string", desc: "Request id, as shown in the console's Logs." },
  { name: "ai_score", type: "number", desc: "How likely the text is to be AI-written, from 0 to 100 (one decimal)." },
  { name: "verdict", type: "string", desc: <><code>"human"</code>, <code>"mixed"</code> or <code>"ai"</code>; see the table below.</> },
  { name: "flagged_sentences", type: "string[]", desc: "The sentences the detector marks as AI-written, as they appear in your text." },
  { name: "word_count", type: "integer", desc: "Words in the input." },
  { name: "tokens_used", type: "integer", desc: `1 token per ${DETECT_WORDS_PER_TOKEN} words, rounded up (at least 1).` },
  { name: "tokens_remaining", type: "integer", desc: "Your balance after this request." },
];

const ApiDocsDetect = () => (
  <DocsLayout
    metaTitle="POST /v1/detect: AI Detection API Reference"
    description="Reference for POST /v1/detect, the AI detection API: send text, get an AI score from 0 to 100, a human/mixed/ai verdict and the flagged sentences. 1 token per 5 words."
    title="POST /v1/detect"
    lead="Score text for AI writing and find out which sentences give it away."
  >
    <Endpoint path={`${API_BASE_URL}/detect`} />

    <H2 id="request">Request body</H2>
    <FieldTable rows={params} withRequired />

    <H2 id="example">Example</H2>
    <CodeTabs examples={detectExamples} />

    <H2 id="response">Response</H2>
    <FieldTable rows={response} />
    <CodeBlock code={detectResponseExample} label="200 OK" />

    <H2 id="verdict">Verdicts</H2>
    <SimpleTable
      head={["verdict", "ai_score"]}
      rows={[["human", "under 40"], ["mixed", "40 to 69.9"], ["ai", "70 and above"]]}
    />

    <H2 id="use">Using detection with humanizing</H2>
    <P>
      <code>/v1/humanize</code> already scores the text before and after, so you don't need a separate detect call around it. Detection is
      useful on its own: to screen submissions, to decide which texts need humanizing at all (skip the ones that already score low), or to
      show writers which sentences to revise using <code>flagged_sentences</code>.
    </P>
    <P>
      Detection usually answers in 2–10 seconds; a 60-second client timeout is plenty. A request that fails on our side is refunded and
      returns <code>503 service_unavailable</code>; see <Link to="/api/docs/errors">Errors</Link>.
    </P>
  </DocsLayout>
);

export default ApiDocsDetect;
