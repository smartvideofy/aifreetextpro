import { Link } from "react-router-dom";
import { DocsLayout } from "@/components/api-docs/DocsLayout";
import { Callout, CodeTabs, H2, List, P } from "@/components/api-docs/DocsBlocks";
import { API_BASE_URL, DEVELOPER_CONSOLE } from "@/lib/developerApi";

const chunkPython = `import os
import requests

API_KEY = os.environ["AIFREETEXT_API_KEY"]
MAX_WORDS = 4500  # stay under the 5,000-word limit

def chunks(text, max_words=MAX_WORDS):
    """Split at line breaks (paragraphs) into parts of at most max_words."""
    part, count = [], 0
    for paragraph in text.split("\\n"):
        words = len(paragraph.split())
        if part and count + words > max_words:
            yield "\\n".join(part)
            part, count = [], 0
        part.append(paragraph)
        count += words
    if part:
        yield "\\n".join(part)

def humanize_document(text, style="professional"):
    results = []
    for part in chunks(text):
        r = requests.post(
            "${API_BASE_URL}/humanize",
            headers={"Authorization": f"Bearer {API_KEY}"},
            json={"text": part, "style": style},
            timeout=150,
        )
        r.raise_for_status()
        results.append(r.json()["humanized_text"])
    return "\\n".join(results)`;

const chunkNode = `const MAX_WORDS = 4500; // stay under the 5,000-word limit

function* chunks(text, maxWords = MAX_WORDS) {
  let part = [], count = 0;
  for (const paragraph of text.split("\\n")) {
    const words = paragraph.split(/\\s+/).filter(Boolean).length;
    if (part.length && count + words > maxWords) {
      yield part.join("\\n");
      part = []; count = 0;
    }
    part.push(paragraph);
    count += words;
  }
  if (part.length) yield part.join("\\n");
}

async function humanizeDocument(text, style = "professional") {
  const results = [];
  for (const part of chunks(text)) {
    const res = await fetch("${API_BASE_URL}/humanize", {
      method: "POST",
      headers: { Authorization: \`Bearer \${process.env.AIFREETEXT_API_KEY}\`, "Content-Type": "application/json" },
      body: JSON.stringify({ text: part, style }),
      signal: AbortSignal.timeout(150_000),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(\`\${data.error.code}: \${data.error.message}\`);
    results.push(data.humanized_text);
  }
  return results.join("\\n");
}`;

const retryPython = `import time
import requests

RETRYABLE = {429, 500, 503}

def post_with_retries(url, payload, api_key, attempts=4, timeout=150):
    for attempt in range(attempts):
        r = requests.post(url, json=payload, timeout=timeout,
                          headers={"Authorization": f"Bearer {api_key}"})
        if r.status_code not in RETRYABLE or attempt == attempts - 1:
            return r
        # Honour Retry-After when the API sends it, otherwise back off exponentially.
        wait = int(r.headers.get("Retry-After", 2 ** attempt * 5))
        time.sleep(wait)`;

const retryNode = `const RETRYABLE = new Set([429, 500, 503]);

async function postWithRetries(url, payload, apiKey, attempts = 4) {
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(url, {
      method: "POST",
      headers: { Authorization: \`Bearer \${apiKey}\`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(150_000),
    });
    if (!RETRYABLE.has(res.status) || attempt === attempts - 1) return res;
    // Honour Retry-After when the API sends it, otherwise back off exponentially.
    const wait = Number(res.headers.get("Retry-After")) || 2 ** attempt * 5;
    await new Promise((r) => setTimeout(r, wait * 1000));
  }
}`;

const ApiDocsBestPractices = () => (
  <DocsLayout
    metaTitle="AI Humanizer API Best Practices: Long Documents, Retries, Timeouts"
    description="Best practices for the AI Free Text Pro API: split long documents at paragraphs, set 150-second timeouts, retry 429 and 503 safely, keep formatting, pick a style and save tokens."
    title="Best practices"
    lead="How to get good results, reliably and without wasting tokens."
  >
    <H2 id="timeouts">Use long timeouts</H2>
    <P>
      A humanize request rewrites the text and checks it with an AI detector several times, so it usually takes 20–90 seconds. Set your HTTP
      client timeout to at least 150 seconds (60 for detect). Many clients default to 30 seconds and would cut the request off.
    </P>
    <Callout kind="warning">
      If your client times out but the request reached us, it may still finish and be charged. Before resending the same text, check the
      console's <a href={`${DEVELOPER_CONSOLE}/logs`} className="text-primary hover:underline">Logs</a>: a 200 there means it completed.
    </Callout>

    <H2 id="long-documents">Split long documents</H2>
    <P>
      Each request takes up to 5,000 words. For longer documents, split at line breaks, send the parts one after another, and join the
      results with line breaks. Splitting between paragraphs keeps each paragraph's sentences together, which the rewriter uses for context.
    </P>
    <CodeTabs examples={[{ id: "python", label: "Python", code: chunkPython }, { id: "node", label: "Node.js", code: chunkNode }]} />

    <H2 id="retries">Retry the right errors</H2>
    <P>
      Retry <code>429 rate_limited</code> and <code>503 service_unavailable</code> after the <code>Retry-After</code> delay; neither is charged.
      Don't retry other 400-range errors without fixing the request. <Link to="/api/docs/errors">All error codes</Link>.
    </P>
    <CodeTabs examples={[{ id: "python", label: "Python", code: retryPython }, { id: "node", label: "Node.js", code: retryNode }]} />

    <H2 id="formatting">Keep your formatting</H2>
    <List>
      <li>Line breaks are kept. Each line is treated as one paragraph, so keep a paragraph on a single line and separate paragraphs with a line break (a blank line is fine too).</li>
      <li>Headings are left as written: lines of 12 words or fewer that don't end in punctuation.</li>
      <li>List items keep their marker (<code>-</code>, <code>*</code>, <code>1.</code>) and their text is rewritten.</li>
      <li>Everything after a "References", "Bibliography", "Works Cited" or "Sources" heading is left as written, and so are lines that look like reference entries.</li>
      <li>Send plain text. Markdown and HTML tags may be treated as words.</li>
    </List>

    <H2 id="style">Choose a style and strength</H2>
    <List>
      <li><code>professional</code> (the default) and <code>casual</code> lower AI scores the most.</li>
      <li><code>academic</code> keeps a formal register for coursework, which lowers scores less. Use it when tone matters more than the score.</li>
      <li>Keep <code>strength</code> at <code>"strong"</code> unless you only want light edits; lower strength changes less and scores higher.</li>
    </List>

    <H2 id="save-tokens">Save tokens</H2>
    <List>
      <li>Check text with <code>/v1/detect</code> first (5 times cheaper) and only humanize what scores high.</li>
      <li>Don't send the same text twice in a row: the response already holds every version's score, and <code>return_versions</code> gives you their text.</li>
      <li>Turn on auto-recharge or a low-balance email in Billing so production traffic doesn't stop on <code>402 insufficient_tokens</code>.</li>
    </List>

    <H2 id="security">Keep keys server-side</H2>
    <P>Call the API from your backend and keep keys in environment variables. See <Link to="/api/docs/authentication">Authentication</Link>.</P>
  </DocsLayout>
);

export default ApiDocsBestPractices;
