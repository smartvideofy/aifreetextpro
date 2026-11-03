import { Link } from "react-router-dom";
import { BookOpen, Code2, Coins, FileJson, Key, Plug, ScanSearch, ShieldAlert } from "lucide-react";
import { DocsLayout } from "@/components/api-docs/DocsLayout";
import { CodeBlock, H2, P, SimpleTable } from "@/components/api-docs/DocsBlocks";
import { API_BASE_URL, DEVELOPER_CONSOLE, FREE_TRIAL_TOKENS, MAX_HUMANIZE_WORDS, formatNumber } from "@/lib/developerApi";

const cards = [
  { to: "/api/docs/quickstart", icon: BookOpen, title: "Quickstart", text: "From sign-up to your first humanized text in five minutes." },
  { to: "/api/docs/humanize", icon: FileJson, title: "POST /v1/humanize", text: "Every field, the versions, the scores and how long a request takes." },
  { to: "/api/docs/detect", icon: ScanSearch, title: "POST /v1/detect", text: "An AI score, a verdict and the sentences a detector flags." },
  { to: "/api/docs/authentication", icon: Key, title: "Authentication", text: "API keys, where to keep them, and how to rotate them." },
  { to: "/api/docs/errors", icon: ShieldAlert, title: "Errors", text: "Every error code, whether you were charged, and what to do." },
  { to: "/api/docs/pricing", icon: Coins, title: "Pricing and billing", text: "Token packs, the free trial, auto-recharge and receipts." },
  { to: "/api/docs/examples", icon: Code2, title: "Code examples", text: "cURL, Python, Node.js, PHP, Go and Ruby, ready to paste." },
  { to: "/api/mcp", icon: Plug, title: "MCP server", text: "Use AI Free Text Pro inside Claude, ChatGPT and Claude Code." },
];

const ApiDocsOverview = () => (
  <DocsLayout
    metaTitle="AI Humanizer API Documentation | AI Free Text Pro"
    description="Documentation for the AI Free Text Pro API: humanize AI-generated text and detect AI writing over REST. Quickstart, authentication, endpoint reference, errors, rate limits, pricing and code examples."
    title="API documentation"
    lead="Humanize AI-generated text and check text for AI writing from your own code, with two JSON endpoints and one API key."
  >
    <div className="grid gap-3 sm:grid-cols-2">
      {cards.map(({ to, icon: Icon, title, text }) => (
        <Link key={to} to={to} className="rounded-lg border border-border p-4 transition-colors hover:border-primary/40 hover:bg-muted/30">
          <span className="flex items-center gap-2 font-medium"><Icon className="h-4 w-4 text-primary" /> {title}</span>
          <span className="mt-1 block text-sm text-muted-foreground">{text}</span>
        </Link>
      ))}
    </div>

    <H2 id="base-url">Base URL</H2>
    <CodeBlock code={API_BASE_URL} label="base url" />
    <P>All requests are <code>POST</code> with a JSON body and <code>Content-Type: application/json</code>. Responses are JSON too, including errors.</P>

    <H2 id="endpoints">Endpoints</H2>
    <SimpleTable
      head={["Endpoint", "What it does", "Cost"]}
      rows={[
        ["POST /v1/humanize", <>Rewrites text sentence by sentence so it reads as human-written, checks it with an AI detector and returns the lowest-scoring version. <Link className="text-primary hover:underline" to="/api/docs/humanize">Reference</Link></>, "1 token per word"],
        ["POST /v1/detect", <>Scores text for AI writing (0–100), gives a verdict and lists the flagged sentences. <Link className="text-primary hover:underline" to="/api/docs/detect">Reference</Link></>, "1 token per 5 words"],
      ]}
    />

    <H2 id="how-it-works">How humanizing works</H2>
    <P>The API runs the same engine as the AI Free Text Pro web app:</P>
    <ol className="list-decimal space-y-1.5 pl-5 leading-relaxed text-muted-foreground">
      <li>The text is split into paragraphs and sentences. Headings and reference lists are left as written, and list markers stay in place.</li>
      <li>Every sentence is rewritten one for one, so nothing is dropped, merged or added. Names, numbers and citations stay as they are, and the text can't grow by more than about 10%.</li>
      <li>The result is checked with an AI detector. Sentences it still flags are rewritten again, up to four versions in total. If the text stays stuck at a high score, a different model rewrites it in a looser, more natural voice.</li>
      <li>You get the lowest-scoring version, the score before and after, and the score of every version.</li>
    </ol>

    <H2 id="get-started">Get started</H2>
    <P>
      <a href={`${DEVELOPER_CONSOLE}/signup`}>Create an account</a> in the developer console (it's the same account as the web app). New accounts get {FREE_TRIAL_TOKENS} free tokens.
      Then create an API key and follow the <Link to="/api/docs/quickstart">quickstart</Link>. Each humanize request takes up to {formatNumber(MAX_HUMANIZE_WORDS)} words.
    </P>
  </DocsLayout>
);

export default ApiDocsOverview;
