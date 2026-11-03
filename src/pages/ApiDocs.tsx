import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { AlertTriangle, Check, Coins, Copy, FileJson, Gauge, Lock, Plug, ScanSearch, Terminal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  API_BASE_URL, DETECT_WORDS_PER_TOKEN, DEVELOPER_CONSOLE, FREE_TRIAL_TOKENS, MAX_DETECT_CHARACTERS, MAX_HUMANIZE_WORDS,
  TOKEN_PACKS, formatNumber, pricePer1kWords,
} from "@/lib/developerApi";

const HUMANIZE_URL = `${API_BASE_URL}/humanize`;
const DETECT_URL = `${API_BASE_URL}/detect`;

const codeExamples: Record<string, string> = {
  curl: `curl -X POST ${HUMANIZE_URL} \\
  --max-time 150 \\
  -H "Authorization: Bearer sk_live_YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your AI-generated text here...",
    "style": "professional",
    "strength": "strong"
  }'`,
  python: `import requests

response = requests.post(
    "${HUMANIZE_URL}",
    headers={"Authorization": "Bearer sk_live_YOUR_KEY"},
    json={
        "text": "Your AI-generated text here...",
        "style": "professional",
        "strength": "strong",
    },
    timeout=150,  # rewriting and checking can take up to ~2 minutes
)
response.raise_for_status()
data = response.json()
print(data["ai_score"], data["humanized_text"])`,
  javascript: `const response = await fetch("${HUMANIZE_URL}", {
  method: "POST",
  headers: {
    "Authorization": "Bearer sk_live_YOUR_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    text: "Your AI-generated text here...",
    style: "professional",
    strength: "strong",
  }),
  signal: AbortSignal.timeout(150_000),
});

const data = await response.json();
if (!response.ok) throw new Error(data.error.message);
console.log(data.ai_score, data.humanized_text);`,
  detect: `curl -X POST ${DETECT_URL} \\
  -H "Authorization: Bearer sk_live_YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Text to check..."}'`,
};

type Field = { name: string; type: string; desc: string; required?: boolean };

const humanizeParams: Field[] = [
  { name: "text", type: "string", required: true, desc: `The text to humanize, up to ${formatNumber(MAX_HUMANIZE_WORDS)} words. Keep paragraphs separated by blank lines; headings and reference lists are kept as written.` },
  { name: "style", type: "string", desc: "professional (default), academic, casual, creative or simple." },
  { name: "strength", type: "string | number", desc: '"light", "balanced", "strong" (default) or a number from 0 to 100.' },
  { name: "language", type: "string", desc: '"auto" (default), or en, es, fr, de, nl, pt, it. The rewrite stays in the same language.' },
  { name: "return_versions", type: "boolean", desc: "Also return the text of every version (V1, V2, ...). Default false: versions carry only their scores." },
];

const humanizeResponse: Field[] = [
  { name: "id", type: "string", desc: "Request id. Quote it if you contact support." },
  { name: "humanized_text", type: "string", desc: "The lowest-scoring version. Every sentence of the input is still there, in order." },
  { name: "unchanged", type: "boolean", desc: "True when every version scored higher than the original, so the original comes back. The request is still charged." },
  { name: "ai_score", type: "object | null", desc: 'AI-detector score (0–100) before and after: { "before": 59.7, "after": 30.9 }.' },
  { name: "versions", type: "array", desc: 'One entry per rewrite round: { "version": 1, "ai_score": 65.2 }, plus "text" with return_versions.' },
  { name: "best_version", type: "integer | null", desc: "The version returned in humanized_text." },
  { name: "word_count", type: "integer", desc: "Words in the input." },
  { name: "tokens_used", type: "integer", desc: "Tokens charged: 1 per word." },
  { name: "tokens_remaining", type: "integer", desc: "Your balance after this request." },
  { name: "style, strength, language", type: "string / number", desc: "The settings that were applied." },
];

const detectResponse: Field[] = [
  { name: "id", type: "string", desc: "Request id." },
  { name: "ai_score", type: "number", desc: "Likelihood the text is AI-written, 0–100." },
  { name: "verdict", type: "string", desc: '"human" (under 40), "mixed" (40–69) or "ai" (70+).' },
  { name: "flagged_sentences", type: "string[]", desc: "The sentences the detector marks as AI-written." },
  { name: "word_count", type: "integer", desc: "Words in the input." },
  { name: "tokens_used", type: "integer", desc: `1 token per ${DETECT_WORDS_PER_TOKEN} words, rounded up.` },
  { name: "tokens_remaining", type: "integer", desc: "Your balance after this request." },
];

const errorCodes = [
  { status: 400, code: "invalid_request / text_too_long", desc: "A parameter is missing or invalid, or the text is over the limit." },
  { status: 401, code: "invalid_api_key", desc: "The key is missing, invalid or revoked." },
  { status: 402, code: "insufficient_tokens", desc: "Not enough tokens for this request. tokens_needed says how many." },
  { status: 405, code: "method_not_allowed", desc: "Use POST." },
  { status: 429, code: "rate_limited", desc: "Too many requests. Wait for Retry-After seconds." },
  { status: 503, code: "service_unavailable", desc: "Temporarily unavailable. You were not charged; retry shortly." },
];

const exampleResponse = {
  id: "6f1c2b8e-…",
  humanized_text: "Your humanized text…",
  unchanged: false,
  ai_score: { before: 59.7, after: 30.9 },
  versions: [{ version: 1, ai_score: 65.2 }, { version: 2, ai_score: 30.9 }, { version: 3, ai_score: 36.4 }],
  best_version: 2,
  word_count: 681,
  tokens_used: 681,
  tokens_remaining: 19319,
  style: "professional",
  strength: 90,
  language: "en",
};

const sections = [
  { id: "endpoints", label: "Endpoints" },
  { id: "auth", label: "Authentication" },
  { id: "humanize", label: "Humanize" },
  { id: "detect", label: "Detect" },
  { id: "examples", label: "Examples" },
  { id: "errors", label: "Errors" },
  { id: "limits", label: "Limits" },
  { id: "pricing", label: "Pricing" },
];

function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative rounded-lg border border-border bg-muted/40">
      <div className="flex items-center justify-between border-b border-border px-4 py-1.5">
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label ?? "code"}</span>
        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={copy} aria-label="Copy code">
          {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] font-mono leading-relaxed"><code>{code}</code></pre>
    </div>
  );
}

function Section({ id, icon: Icon, title, children }: { id: string; icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <Card id={id} className="scroll-mt-24 overflow-hidden">
      <CardHeader className="pb-4">
        <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-4 w-4 text-primary" />
          </span>
          {title}
        </h2>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
}

function FieldTable({ rows, withRequired }: { rows: Field[]; withRequired?: boolean }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/40 hover:bg-muted/40">
            <TableHead>Field</TableHead>
            <TableHead>Type</TableHead>
            {withRequired && <TableHead>Required</TableHead>}
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((p) => (
            <TableRow key={p.name}>
              <TableCell className="font-mono text-sm text-primary">{p.name}</TableCell>
              <TableCell><Badge variant="outline" className="font-mono text-[11px] whitespace-nowrap">{p.type}</Badge></TableCell>
              {withRequired && <TableCell className="text-sm">{p.required ? "Yes" : "No"}</TableCell>}
              <TableCell className="text-sm text-muted-foreground">{p.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const ApiDocs = () => {
  return (
    <>
      <Helmet>
        <title>AI Humanizer API Docs: Endpoints, Auth, Errors and Pricing</title>
        <meta name="description" content="API reference for the AI Free Text Pro humanizer and AI detector API: POST /v1/humanize and /v1/detect, API key authentication, request and response fields, errors, limits and token pricing." />
        <link rel="canonical" href="https://aifreetextpro.com/api/docs" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Humanizer API Docs" />
        <meta property="og:description" content="Endpoints, authentication, fields, errors, limits and pricing for the AI Free Text Pro API." />
        <meta property="og:url" content="https://aifreetextpro.com/api/docs" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "TechArticle", "headline": "AI Free Text Pro API documentation",
            "description": "Reference for POST /v1/humanize and POST /v1/detect.", "url": "https://aifreetextpro.com/api/docs",
            "publisher": { "@type": "Organization", "name": "AI Free Text Pro", "url": "https://aifreetextpro.com" },
          })}
        </script>
      </Helmet>

      <Navbar />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "API", href: "/api" }, { label: "Docs", href: "/api/docs" }]} />
        </div>

        <div className="container mx-auto px-4 py-10 lg:py-14">
          <div className="mb-10 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">API Documentation</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Humanize AI text and check it for AI writing from your own code. Want it inside Claude or ChatGPT instead?{" "}
              <Link to="/api/mcp" className="text-primary hover:underline">Use the MCP server</Link>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`${DEVELOPER_CONSOLE}/signup`}>
                <Button className="bg-gradient-to-r from-primary to-secondary">Get an API key</Button>
              </a>
              <a href={`${DEVELOPER_CONSOLE}/playground`}>
                <Button variant="outline">Try it in the Playground</Button>
              </a>
            </div>
          </div>

          <div className="flex gap-12">
            <nav className="hidden w-48 shrink-0 lg:block" aria-label="On this page">
              <div className="sticky top-24 space-y-0.5">
                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">On this page</p>
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                    {s.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="min-w-0 max-w-3xl flex-1 space-y-8">
              <Section id="endpoints" icon={Terminal} title="Endpoints">
                <div className="space-y-3">
                  {[
                    { path: "/v1/humanize", desc: "Rewrite text so it reads as human-written, checked with an AI detector." },
                    { path: "/v1/detect", desc: "Score text for AI writing and list the flagged sentences." },
                  ].map((e) => (
                    <div key={e.path} className="flex flex-wrap items-start gap-3">
                      <Badge className="font-mono text-xs">POST</Badge>
                      <div>
                        <code className="font-mono text-sm">{e.path}</code>
                        <p className="text-sm text-muted-foreground">{e.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Base URL</p>
                  <div className="overflow-x-auto rounded-lg border border-border bg-muted/30 px-4 py-2.5">
                    <code className="font-mono text-sm">{API_BASE_URL}</code>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Requests and responses are JSON. Send <code className="font-mono text-xs">Content-Type: application/json</code>.</p>
              </Section>

              <Section id="auth" icon={Lock} title="Authentication">
                <p className="text-sm text-muted-foreground">
                  Create a key on the <a href={`${DEVELOPER_CONSOLE}/keys`} className="text-primary hover:underline">API keys</a> page of the
                  developer console and send it in the <code className="font-mono text-xs">Authorization</code> header
                  (or as <code className="font-mono text-xs">X-API-Key</code>):
                </p>
                <CodeBlock code="Authorization: Bearer sk_live_your_key_here" label="header" />
                <p className="text-sm text-muted-foreground">
                  Keys are stored as SHA-256 hashes and shown only once. Keep them on your server, never in browser or app code.
                </p>
              </Section>

              <Section id="humanize" icon={FileJson} title="POST /v1/humanize">
                <p className="text-sm text-muted-foreground">
                  Each sentence is rewritten one for one, so nothing is dropped, merged or added, and names, numbers and citations stay as written.
                  The result is scored with an AI detector, sentences it still flags are rewritten again (up to 4 versions), and the lowest-scoring
                  version is returned. A request usually takes 20–90 seconds: set your client timeout to at least 150 seconds.
                </p>
                <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Request body</h3>
                <FieldTable rows={humanizeParams} withRequired />
                <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Response</h3>
                <FieldTable rows={humanizeResponse} />
                <CodeBlock code={JSON.stringify(exampleResponse, null, 2)} label="json" />
              </Section>

              <Section id="detect" icon={ScanSearch} title="POST /v1/detect">
                <p className="text-sm text-muted-foreground">
                  Send <code className="font-mono text-xs">{'{ "text": "..." }'}</code> with up to {formatNumber(MAX_DETECT_CHARACTERS)} characters.
                </p>
                <FieldTable rows={detectResponse} />
                <CodeBlock code={codeExamples.detect} label="curl" />
              </Section>

              <Section id="examples" icon={Terminal} title="Code examples">
                <Tabs defaultValue="curl" className="w-full">
                  <TabsList>
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  </TabsList>
                  {(["curl", "python", "javascript"] as const).map((lang) => (
                    <TabsContent key={lang} value={lang} className="mt-4">
                      <CodeBlock code={codeExamples[lang]} label={lang} />
                    </TabsContent>
                  ))}
                </Tabs>
              </Section>

              <Section id="errors" icon={AlertTriangle} title="Errors">
                <p className="text-sm text-muted-foreground">
                  Errors return <code className="font-mono text-xs">{'{ "error": { "code": "...", "message": "..." } }'}</code>.
                  A request that fails after it was charged is refunded automatically.
                </p>
                <div className="overflow-x-auto rounded-lg border border-border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/40 hover:bg-muted/40">
                        <TableHead>Status</TableHead>
                        <TableHead>Code</TableHead>
                        <TableHead>Meaning</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {errorCodes.map((e) => (
                        <TableRow key={e.status}>
                          <TableCell>
                            <Badge variant="outline" className={cn("font-mono text-xs", e.status >= 500 ? "border-destructive/40 text-destructive" : "")}>{e.status}</Badge>
                          </TableCell>
                          <TableCell className="font-mono text-xs">{e.code}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{e.desc}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Section>

              <Section id="limits" icon={Gauge} title="Limits">
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                  <li>/v1/humanize: up to {formatNumber(MAX_HUMANIZE_WORDS)} words per request, 10 requests per minute per account.</li>
                  <li>/v1/detect: up to {formatNumber(MAX_DETECT_CHARACTERS)} characters per request, 30 requests per minute per account.</li>
                  <li>Longer documents: split them at paragraph breaks and send the parts separately.</li>
                </ul>
              </Section>

              <Section id="pricing" icon={Coins} title="Pricing">
                <p className="text-sm text-muted-foreground">
                  1 token = 1 word humanized. Detection costs 1 token per {DETECT_WORDS_PER_TOKEN} words. You are not charged for a
                  request that fails. New accounts get {FREE_TRIAL_TOKENS} free tokens.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {TOKEN_PACKS.map((t) => (
                    <div key={t.name} className={cn("rounded-lg border border-border p-5", t.popular && "border-primary/40 bg-primary/5")}>
                      <p className="text-sm font-semibold">{t.name}{t.popular && <span className="ml-2 text-xs font-normal text-primary">Most popular</span>}</p>
                      <p className="mt-2 text-2xl font-bold">${t.priceUsd.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">USD</span></p>
                      <p className="mt-2 font-mono text-sm text-muted-foreground">{formatNumber(t.tokens)} tokens</p>
                      <p className="text-xs text-muted-foreground">{pricePer1kWords(t)} per 1,000 words</p>
                    </div>
                  ))}
                </div>
                <a href={`${DEVELOPER_CONSOLE}/billing`}>
                  <Button className="bg-gradient-to-r from-primary to-secondary">Add Credits</Button>
                </a>
                <p className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Plug className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    The <Link to="/api/mcp" className="text-primary hover:underline">MCP server</Link> for Claude and ChatGPT uses your
                    AI Free Text Pro plan instead of tokens.
                  </span>
                </p>
              </Section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ApiDocs;
