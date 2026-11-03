import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight, BarChart3, BookOpen, Bot, CheckCircle, Code2, Coins, FileText, FlaskConical, Gauge, GraduationCap, Globe, Key,
  Layers, ListChecks, Plug, Puzzle, RefreshCw, ScanSearch, ShieldCheck, Split, Terminal, Undo2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock, CodeTabs } from "@/components/api-docs/DocsBlocks";
import { humanizeExamples, humanizeResponseExample } from "@/components/api-docs/snippets";
import {
  API_BASE_URL, DETECT_WORDS_PER_TOKEN, DEVELOPER_CONSOLE, FREE_TRIAL_TOKENS, MAX_DETECT_CHARACTERS, MAX_HUMANIZE_WORDS,
  TOKEN_PACKS, formatNumber, pricePer1kWords,
} from "@/lib/developerApi";

const SIGNUP = `${DEVELOPER_CONSOLE}/signup`;

// A real run of /v1/humanize (3 Nov 2026, professional style, strong).
const exampleBefore = "Social media has fundamentally reshaped the way young people communicate and form relationships. … However, research suggests that excessive use can contribute to anxiety, poor sleep, and reduced academic performance. … At the same time, social media provides valuable opportunities for creativity, activism, and access to information. Schools and parents therefore play a crucial role in teaching responsible digital habits.";
const exampleAfter = "The way young people talk and build relationships has been turned on its head by social media. … But research says using it way too much can feed into anxiety and bad sleep, and grades can drop too. … And social media's also got real upsides for being creative, for activism, and just for getting information. So schools and parents have a big part to play in teaching kids good habits online.";

const steps = [
  { icon: Split, title: "Split", text: "Your text is split into paragraphs and sentences. Headings, reference lists and list markers stay as they are." },
  { icon: RefreshCw, title: "Rewrite", text: "Every sentence is rewritten one for one. Nothing is dropped, merged or added; names, numbers and citations are kept." },
  { icon: ScanSearch, title: "Check", text: "An AI detector scores the result. Flagged sentences are rewritten again, and stubborn text is escalated to a second model." },
  { icon: ListChecks, title: "Return", text: "You get the lowest-scoring version, the score before and after, and the score of every version." },
];

const benefits = [
  { icon: ShieldCheck, title: "Every sentence kept", text: "Sentence-for-sentence rewriting means the output has the same sentences in the same order. It can't balloon into extra filler." },
  { icon: BarChart3, title: "Scores in every response", text: "Each response carries the AI score before and after and the score of every version, so you can show results to your users." },
  { icon: Undo2, title: "Never worse than the input", text: "If every version scores higher than the original, you get the original back, flagged as unchanged." },
  { icon: Layers, title: "Up to four versions", text: "Ask for return_versions and pick the version that reads best, not just the one that scores lowest." },
  { icon: Globe, title: "7 languages, 5 styles", text: "English, Spanish, French, German, Dutch, Portuguese and Italian; professional, academic, casual, creative or simple." },
  { icon: Coins, title: "Pay per word", text: "Prepaid tokens, no subscription. Failed requests are refunded automatically, and every response reports your balance." },
];

const consoleFeatures = [
  { icon: Key, title: "API keys", text: "Create, name and revoke keys. Requests and tokens per key." },
  { icon: FlaskConical, title: "Playground", text: "Run real requests in the browser and copy the matching code." },
  { icon: Gauge, title: "Usage and logs", text: "Requests, tokens, errors and latency per day, endpoint and key. CSV export." },
  { icon: Coins, title: "Billing", text: "Add credits, auto-recharge, low-balance emails and printable receipts." },
];

const useCases = [
  { icon: FileText, title: "Content platforms and CMSs", text: "Humanize drafts inside your publishing workflow, with the AI score saved next to each article." },
  { icon: Puzzle, title: "Writing tools and plugins", text: "Power a browser extension, a Google Docs add-on or an editor plugin with two endpoints." },
  { icon: Bot, title: "AI assistants and chatbots", text: "Post-process LLM output so replies read naturally, sentence for sentence." },
  { icon: Layers, title: "Agencies and batch work", text: "Run client content through your own pipeline and meter tokens per client with separate keys." },
  { icon: GraduationCap, title: "EdTech", text: "Help students see which sentences read as AI-written with /v1/detect, and revise them." },
  { icon: ScanSearch, title: "Screening and moderation", text: "Score submissions for AI writing at 1 token per 5 words and flag the sentences that give it away." },
];

const faqs = [
  { question: "Is there an AI humanizer API?", answer: "Yes. The AI Free Text Pro API rewrites AI-generated text so it reads as written by a person: POST the text to /v1/humanize and get the humanized text back as JSON, with AI-detector scores before and after." },
  { question: "How does the humanizer API work?", answer: "It rewrites your text sentence by sentence, keeping every sentence, name, number and citation, then checks the result with an AI detector. Sentences that are still flagged are rewritten again, up to four versions, and the lowest-scoring version is returned." },
  { question: "Is there an AI detection API?", answer: `Yes. POST /v1/detect returns an AI score from 0 to 100, a verdict (human, mixed or ai) and the sentences the detector flags. It costs 1 token per ${DETECT_WORDS_PER_TOKEN} words and takes up to ${formatNumber(MAX_DETECT_CHARACTERS)} characters per request.` },
  { question: "How is the API priced?", answer: `With prepaid token packs, separate from the web app plans: $9.99 for 15,000 tokens, $24.99 for 45,000, $49.99 for 100,000 or $99.99 for 225,000. 1 token = 1 word humanized; detection costs 1 token per ${DETECT_WORDS_PER_TOKEN} words. New accounts get ${FREE_TRIAL_TOKENS} free tokens, and you are not charged for a request that fails.` },
  { question: "Is there a free trial?", answer: `Yes. Every account gets ${FREE_TRIAL_TOKENS} free tokens, enough to humanize about ${FREE_TRIAL_TOKENS} words, with no card required. You can also try requests in the Playground of the developer console.` },
  { question: "How long does a request take?", answer: "Humanizing usually takes 20 to 90 seconds, because each version is checked with an AI detector; set a client timeout of 150 seconds. Detection usually answers in 2 to 10 seconds." },
  { question: "What are the rate limits?", answer: `10 humanize requests and 30 detect requests per minute per account, ${formatNumber(MAX_HUMANIZE_WORDS)} words per humanize request and ${formatNumber(MAX_DETECT_CHARACTERS)} characters per detect request. Longer documents can be split at paragraph breaks.` },
  { question: "How do I authenticate API requests?", answer: "Create a key in the developer console at developer.aifreetextpro.com and send it as a Bearer token in the Authorization header (or an X-API-Key header). Keys start with sk_live_; we store only a hash and you can revoke a key at any time." },
  { question: "Which languages does the humanizer API support?", answer: "English, Spanish, French, German, Dutch, Portuguese and Italian. Pass a language code, or leave it out and the API detects the language from the text. The rewrite stays in the same language." },
  { question: "What happens if the text can't be improved?", answer: "The API never returns text that scores higher than what you sent. If every version scores higher than the original, the original comes back with unchanged set to true. The request is still charged, because the rewriting and checks ran." },
  { question: "Can I use it in Claude or ChatGPT?", answer: "Yes. Our MCP server connects AI Free Text Pro to Claude, ChatGPT, Claude Code and other MCP clients, and uses your web app plan instead of API tokens. Setup steps are at aifreetextpro.com/api/mcp." },
  { question: "Do you offer SDKs?", answer: "The API is two JSON endpoints, so any HTTP client works. The documentation has ready-to-paste examples for cURL, Python, Node.js, PHP, Go and Ruby." },
];

const Section = ({ id, title, lead, muted, children }: { id?: string; title: string; lead?: string; muted?: boolean; children: React.ReactNode }) => (
  <section id={id} className={`py-16 md:py-20 ${muted ? "bg-muted/30" : ""}`}>
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">{title}</h2>
        {lead && <p className="text-lg text-muted-foreground">{lead}</p>}
      </div>
      {children}
    </div>
  </section>
);

const Api = () => {
  return (
    <>
      <Helmet>
        <title>AI Humanizer API: Humanize and Detect AI Text With One REST Call</title>
        <meta name="description" content="AI humanizer API and AI detection API: rewrite AI-generated text sentence by sentence, checked with an AI detector, with scores in every response. 7 languages, 5 styles, 5,000 words per call, 500 free tokens." />
        <meta name="keywords" content="ai humanizer api, humanize ai text api, ai detection api, ai detector api, ai text humanizer api, ai rewriter api, undetectable ai api" />
        <link rel="canonical" href="https://aifreetextpro.com/api" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Humanizer API: Humanize and Detect AI Text With One REST Call" />
        <meta property="og:description" content="Humanize AI-generated text from your own product with one POST request, with AI-detector scores in every response." />
        <meta property="og:url" content="https://aifreetextpro.com/api" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Humanizer API: Humanize and Detect AI Text" />
        <meta name="twitter:description" content="Two JSON endpoints: /v1/humanize and /v1/detect. Pay per word, 500 free tokens." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "AI Free Text Pro API",
            "applicationCategory": "DeveloperApplication", "operatingSystem": "Web",
            "description": "REST API that humanizes AI-generated text sentence by sentence and detects AI writing, with AI-detector scores in every response.",
            "url": "https://aifreetextpro.com/api",
            "offers": { "@type": "AggregateOffer", "priceCurrency": "USD", "lowPrice": "9.99", "highPrice": "99.99", "offerCount": TOKEN_PACKS.length },
            "provider": { "@type": "Organization", "name": "AI Free Text Pro", "url": "https://aifreetextpro.com" },
          })}
        </script>
      </Helmet>

      <Navbar />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "API", href: "/api" }]} />
        </div>

        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <Terminal className="h-4 w-4" /> Developer API
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              AI Humanizer{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">API</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Humanize AI-generated text and detect AI writing from your own product. Every sentence is rewritten one for one, checked with an
              AI detector, and returned with its scores.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href={SIGNUP}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary px-8 text-lg">
                  Get an API Key <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/api/docs">
                <Button size="lg" variant="outline" className="px-8 text-lg">
                  <BookOpen className="mr-2 h-5 w-5" /> Read the Docs
                </Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> {FREE_TRIAL_TOKENS} free tokens</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> {formatNumber(MAX_HUMANIZE_WORDS)} words per call</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> Scores in every response</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> No subscription</span>
            </div>
          </div>
        </section>

        {/* Example */}
        <Section title="Before and After" lead="An essay paragraph that scored 100% AI, run through /v1/humanize with the default settings." muted>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <Card className="p-6">
              <CardContent className="space-y-3 p-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">Input</span>
                  <span className="rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">AI score 100%</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{exampleBefore}</p>
              </CardContent>
            </Card>
            <Card className="border-primary/40 p-6">
              <CardContent className="space-y-3 p-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">Output (version 3 of 4)</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">AI score 42.4%</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{exampleAfter}</p>
              </CardContent>
            </Card>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-muted-foreground">
            Excerpts from one real request (118 words, 18 seconds, 7 of 7 sentences kept). Results vary with the text; scores come from the detector the API uses.
          </p>
        </Section>

        {/* How it works */}
        <Section title="How It Works" lead="The same engine as the AI Free Text Pro web app, behind two JSON endpoints.">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <Card key={title} className="p-6">
                <CardContent className="space-y-3 p-0">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><Icon className="h-5 w-5 text-primary" /></span>
                    <span className="text-sm font-semibold text-muted-foreground">Step {i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Endpoints */}
        <Section title="Two Endpoints" lead={`Base URL ${API_BASE_URL}. JSON in, JSON out, one API key.`} muted>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <Card className="p-6">
              <CardContent className="space-y-3 p-0">
                <p className="font-mono text-sm"><span className="mr-2 rounded bg-primary px-2 py-0.5 text-xs text-primary-foreground">POST</span>/v1/humanize</p>
                <p className="text-sm text-muted-foreground">Send <code className="font-mono">text</code> and optionally <code className="font-mono">style</code>, <code className="font-mono">strength</code> and <code className="font-mono">language</code>. Get the humanized text, the AI score before and after, and every version's score.</p>
                <p className="text-sm"><strong>1 token per word</strong> · up to {formatNumber(MAX_HUMANIZE_WORDS)} words · 20–90 s</p>
                <Link to="/api/docs/humanize" className="inline-flex items-center text-sm text-primary hover:underline">Humanize reference <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="space-y-3 p-0">
                <p className="font-mono text-sm"><span className="mr-2 rounded bg-primary px-2 py-0.5 text-xs text-primary-foreground">POST</span>/v1/detect</p>
                <p className="text-sm text-muted-foreground">Send <code className="font-mono">text</code>. Get an AI score from 0 to 100, a verdict (human, mixed or ai) and the sentences the detector flags.</p>
                <p className="text-sm"><strong>1 token per {DETECT_WORDS_PER_TOKEN} words</strong> · up to {formatNumber(MAX_DETECT_CHARACTERS)} characters · 2–10 s</p>
                <Link to="/api/docs/detect" className="inline-flex items-center text-sm text-primary hover:underline">Detect reference <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Code */}
        <Section id="code-examples" title="Integrate in Minutes" lead="Copy a request in your language. Every example handles errors and waits long enough for the detector checks.">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 [&>*]:min-w-0">
            <CodeTabs examples={humanizeExamples} />
            <div>
              <div className="mb-3 flex h-10 items-center gap-2 px-1">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-sm font-medium text-muted-foreground">200 OK</span>
              </div>
              <CodeBlock code={humanizeResponseExample} label="response" />
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Six languages on the <Link to="/api/docs/examples" className="text-primary hover:underline">code examples</Link> page, or start with the <Link to="/api/docs/quickstart" className="text-primary hover:underline">quickstart</Link>.
          </p>
        </Section>

        {/* Benefits */}
        <Section title="Built for Developers" lead="What you get beyond a paraphrasing endpoint." muted>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="p-6">
                <CardContent className="space-y-3 p-0">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><Icon className="h-6 w-6 text-primary" /></span>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Console */}
        <Section title="A Developer Console Included" lead="Everything to run the API in production, at developer.aifreetextpro.com.">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {consoleFeatures.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-lg border border-border p-5">
                <Icon className="mb-3 h-6 w-6 text-primary" />
                <h3 className="mb-1 font-bold">{title}</h3>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={`${DEVELOPER_CONSOLE}/playground`}>
              <Button variant="outline" size="lg"><FlaskConical className="mr-2 h-5 w-5" /> Try the Playground</Button>
            </a>
          </div>
        </Section>

        {/* Pricing */}
        <Section id="pricing" title="Pay Per Word" lead={`Prepaid token packs, no subscription. 1 token = 1 word humanized; detection is 1 token per ${DETECT_WORDS_PER_TOKEN} words. ${FREE_TRIAL_TOKENS} tokens free to start.`} muted>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TOKEN_PACKS.map((p) => (
              <Card key={p.name} className={`p-6 ${p.popular ? "border-primary shadow-lg" : ""}`}>
                <CardContent className="space-y-2 p-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold">{p.name}</h3>
                    {p.popular && <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">Most popular</span>}
                  </div>
                  <p className="text-3xl font-bold">${p.priceUsd.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">{formatNumber(p.tokens)} tokens</p>
                  <p className="text-xs text-muted-foreground">{pricePer1kWords(p)} per 1,000 words</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={SIGNUP}><Button size="lg" className="bg-gradient-to-r from-primary to-secondary px-8">Start With {FREE_TRIAL_TOKENS} Free Tokens</Button></a>
            <Link to="/api/docs/pricing"><Button size="lg" variant="outline" className="px-8">Pricing Details</Button></Link>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">Failed requests are refunded automatically. Auto-recharge keeps production traffic running.</p>
        </Section>

        {/* Use cases */}
        <Section title="What Can You Build?" lead="Two endpoints, a lot of products.">
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="p-6">
                <CardContent className="flex gap-4 p-0">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10"><Icon className="h-6 w-6 text-secondary" /></span>
                  <div>
                    <h3 className="mb-1 font-bold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* MCP */}
        <Section title="Prefer Claude or ChatGPT?" lead="Our MCP server puts the humanizer and detector inside your AI assistant, using your web app plan." muted>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <Plug className="h-10 w-10 text-primary" />
            <p className="text-muted-foreground">Works with Claude (web and desktop), ChatGPT, Claude Code, Cursor, VS Code and other MCP clients. Sign in with your account; no API key needed.</p>
            <Link to="/api/mcp"><Button variant="outline" size="lg">Set Up MCP <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </Section>

        {/* Limits */}
        <Section title="Limits at a Glance">
          <div className="mx-auto max-w-3xl overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left">
                <tr><th className="p-3">Endpoint</th><th className="p-3">Per minute</th><th className="p-3">Per request</th><th className="p-3">Cost</th></tr>
              </thead>
              <tbody>
                <tr className="border-t border-border"><td className="p-3 font-mono">/v1/humanize</td><td className="p-3">10</td><td className="p-3">{formatNumber(MAX_HUMANIZE_WORDS)} words</td><td className="p-3">1 token / word</td></tr>
                <tr className="border-t border-border"><td className="p-3 font-mono">/v1/detect</td><td className="p-3">30</td><td className="p-3">{formatNumber(MAX_DETECT_CHARACTERS)} characters</td><td className="p-3">1 token / {DETECT_WORDS_PER_TOKEN} words</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Details on <Link to="/api/docs/rate-limits" className="text-primary hover:underline">rate limits</Link> and <Link to="/api/docs/errors" className="text-primary hover:underline">errors</Link>.
            Want to try the rewriting first? Use the <Link to="/" className="text-primary hover:underline">free AI detector and humanizer</Link> in the browser.
          </p>
        </Section>

        {/* FAQ (FAQSection adds the heading and the FAQPage structured data) */}
        <div className="bg-muted/30">
          <div className="container mx-auto max-w-3xl px-4 py-8">
            <FAQSection faqs={faqs} title="Developer FAQs" />
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <Code2 className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Integrate?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Create your API key in the developer console in under a minute. New accounts get {FREE_TRIAL_TOKENS} tokens free, no card required.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href={SIGNUP}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary px-10 text-lg">
                  Get an API Key <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/api/docs/quickstart"><Button size="lg" variant="outline" className="px-10 text-lg">Quickstart</Button></Link>
            </div>
          </div>
        </section>
        <InternalLinks variant="full" currentPage="/api" />
      </main>
      <Footer />
    </>
  );
};

export default Api;
