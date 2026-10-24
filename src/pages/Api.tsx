import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight, Code2, Zap, Shield, Key, Globe, Layers, Terminal, BarChart3, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { Link } from "react-router-dom";

// Keys are issued by support for now; there is no self-serve developer portal yet.
const API_KEY_REQUEST = "mailto:support@aifreetextpro.com?subject=API%20key%20request";
const ENDPOINT = "https://uvprbzcxajreafjwbvrs.supabase.co/functions/v1/api-humanize";

const codeExamples = {
  curl: `curl -X POST ${ENDPOINT} \\
  -H "Authorization: Bearer sk_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{"text": "AI-generated text to humanize...", "style": "academic", "strength": 60}'`,
  python: `import requests

response = requests.post(
    "${ENDPOINT}",
    headers={"Authorization": "Bearer sk_live_your_api_key"},
    json={"text": "AI-generated text to humanize...", "style": "academic", "strength": 60},
    timeout=120,
)
response.raise_for_status()
print(response.json()["humanized_text"])`,
  javascript: `const response = await fetch("${ENDPOINT}", {
  method: "POST",
  headers: {
    Authorization: "Bearer sk_live_your_api_key",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ text: "AI-generated text to humanize...", style: "academic", strength: 60 }),
});

const result = await response.json();
console.log(result.humanized_text);`,
};

const responseExample = `{
  "humanized_text": "Your naturally rewritten text...",
  "word_count": 142,
  "tokens_used": 185,
  "tokens_remaining": 48315,
  "style_used": "academic"
}`;

const params = [
  ["text", "string, required", "The text to humanize. Up to 5,000 words per request."],
  ["style", "string", "academic, professional (default), casual, creative or simple."],
  ["strength", "number 0-100", "How far to move from the original wording. Default 50."],
  ["language", "string", "en, es, fr, de or nl. Detected from the text when omitted."],
];

const errors = [
  ["400", "Missing text, more than 5,000 words, or strength outside 0-100"],
  ["401", "Missing, malformed or revoked API key"],
  ["402", "Not enough API tokens left (code INSUFFICIENT_TOKENS)"],
  ["429", "More than 10 requests a minute; retry after the Retry-After header"],
  ["503", "Rewrite service temporarily unavailable; safe to retry"],
];

const benefits = [
  {
    icon: Zap, title: "Up to 5,000 Words", description: "Send a full article or essay in one request; long texts are rewritten in sections and returned whole.", }, {
    icon: Shield, title: "98% Bypass Rate", description: "Same industry-leading accuracy as our web app, now available programmatically.", }, {
    icon: Key, title: "Simple Auth", description: "One Bearer token per account. Keys are hashed on our side and can be revoked at any time.", }, {
    icon: Globe, title: "RESTful Design", description: "Standard REST API with JSON payloads. Integrate with any language or framework.", }, {
    icon: BarChart3, title: "Token Balance in Every Response", description: "Each response reports tokens used and remaining, so you can meter usage in your own product.", }, {
    icon: Layers, title: "5 Styles, 5 Languages", description: "Academic, professional, casual, creative and simple, in English, Spanish, French, German and Dutch.", },
];

const useCases = [
  {
    title: "Content Platforms", description: "Integrate humanization directly into your CMS or publishing workflow. Auto-process drafts before publication.", icon: Globe, }, {
    title: "Writing Tools & Plugins", description: "Build browser extensions, Google Docs add-ons, or VS Code plugins powered by our API.", icon: Code2, }, {
    title: "Agency Automation", description: "Process client content at scale. Batch humanize hundreds of articles through your existing pipeline.", icon: Layers, }, {
    title: "EdTech Products", description: "Help students improve AI-assisted writing while maintaining academic integrity standards.", icon: Terminal, },
];

const faqs = [
  {
    question: "Is there an AI humanizer API?", answer: "Yes. AI Free Text Pro's AI humanizer API rewrites AI-generated text into natural, human-sounding writing with one POST request: send the text, a style and a strength, and get the humanized text back as JSON.", }, {
    question: "What are the API rate limits?", answer: "10 requests per minute per account and up to 5,000 words per request. Usage is metered in API tokens (about 1.3 tokens per word), and every response reports the tokens used and remaining.", }, {
    question: "Which plans include API access?", answer: "API access is available on Pro Writer ($24.99/mo) and Unlimited Creator ($59.99/mo) plans. Email support@aifreetextpro.com from your account email to get a key.", }, {
    question: "How do I authenticate API requests?", answer: "Send your key as a Bearer token in the Authorization header. Keys start with sk_live_. We store only a hash of the key, and can revoke and reissue it at any time.", }, {
    question: "Is there an AI detection API?", answer: "The public API currently covers humanizing. AI detection is available in the web app; contact us if you need detection programmatically.", }, {
    question: "Which languages does the humanizer API support?", answer: "English, Spanish, French, German and Dutch. Pass a language code, or leave it out and the API detects the language from the text.", },
];

const Api = () => {
  return (
    <>
      <Helmet>
        <title>AI Humanizer API: Humanize AI Text With One REST Call</title>
        <meta name="description" content="AI humanizer API: rewrite AI-generated text into natural writing with one POST request. 5 styles, 5 languages, up to 5,000 words per call, bearer auth, JSON in and out. Docs and code samples." />
        <meta name="keywords" content="ai humanizer api, humanize ai text api, ai text humanizer api, ai rewriter api, ai detection api" />
        <link rel="canonical" href="https://aifreetextpro.com/api" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Humanizer API: Humanize AI Text With One REST Call" />
        <meta property="og:description" content="Humanize AI-generated text from your own product with one POST request." />
        <meta property="og:url" content="https://aifreetextpro.com/api" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Humanizer API: Humanize AI Text With One REST Call" />
        <meta name="twitter:description" content="Programmatic access to AI text humanization and detection. REST API with simple auth." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "AI Free Text Pro API", "applicationCategory": "DeveloperApplication", "operatingSystem": "Web", "description": "REST API that humanizes AI-generated text: 5 styles, 5 languages, up to 5,000 words per request", "url": "https://aifreetextpro.com/api", "offers": {
              "@type": "Offer", "price": "24.99", "priceCurrency": "USD", "description": "API access included with Pro Writer plan"
            }, "provider": {
              "@type": "Organization", "name": "AI Free Text Pro", "url": "https://aifreetextpro.com"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifreetextpro.com/" }, { "@type": "ListItem", "position": 2, "name": "API", "item": "https://aifreetextpro.com/api" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({
              "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
          })}
        </script>
      </Helmet>

      <Navbar />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "API", href: "/api" }]} />
        </div>

        {/* Hero */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6">
              <Terminal className="h-4 w-4" />
              Developer API
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI Humanizer{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">API</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Humanize AI-generated text from your own product with one POST request. Five styles, five languages, up to 5,000 words per call, and the same rewriting engine as the web app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={API_KEY_REQUEST}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8">
                  Request an API Key <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#code-examples">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Code2 className="mr-2 h-5 w-5" /> View Examples
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> RESTful</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> 5,000 words per call</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> 10 requests/min</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> JSON I/O</span>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section id="code-examples" className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrate in Minutes</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A single POST request is all you need. Choose your language and start humanizing.
              </p>
              <p className="mt-3 font-mono text-xs text-muted-foreground break-all">POST {ENDPOINT}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Request */}
              <div>
                <Tabs defaultValue="curl">
                  <TabsList className="mb-3">
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  </TabsList>
                  <TabsContent value="curl">
                    <pre className="bg-card border border-border rounded-lg p-5 overflow-x-auto text-sm font-mono text-foreground leading-relaxed">
                      <code>{codeExamples.curl}</code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="python">
                    <pre className="bg-card border border-border rounded-lg p-5 overflow-x-auto text-sm font-mono text-foreground leading-relaxed">
                      <code>{codeExamples.python}</code>
                    </pre>
                  </TabsContent>
                  <TabsContent value="javascript">
                    <pre className="bg-card border border-border rounded-lg p-5 overflow-x-auto text-sm font-mono text-foreground leading-relaxed">
                      <code>{codeExamples.javascript}</code>
                    </pre>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Response */}
              <div>
                <div className="flex items-center gap-2 mb-3 h-10 px-1">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-muted-foreground">200 OK, Response</span>
                </div>
                <pre className="bg-card border border-border rounded-lg p-5 overflow-x-auto text-sm font-mono text-foreground leading-relaxed">
                  <code>{responseExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Reference */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">API Reference</h2>
            <h3 className="font-bold text-lg mb-3">Request body</h3>
            <div className="overflow-x-auto rounded-lg border border-border mb-10">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-left">
                  <tr><th className="p-3">Field</th><th className="p-3">Type</th><th className="p-3">Description</th></tr>
                </thead>
                <tbody>
                  {params.map(([field, type, desc]) => (
                    <tr key={field} className="border-t border-border">
                      <td className="p-3 font-mono">{field}</td>
                      <td className="p-3 text-muted-foreground">{type}</td>
                      <td className="p-3">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="font-bold text-lg mb-3">Errors</h3>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-left">
                  <tr><th className="p-3">Status</th><th className="p-3">Meaning</th></tr>
                </thead>
                <tbody>
                  {errors.map(([code, meaning]) => (
                    <tr key={code} className="border-t border-border">
                      <td className="p-3 font-mono">{code}</td>
                      <td className="p-3">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Errors return JSON with an <code>error</code> message. Want to try the rewriting before integrating? Use
              the <Link to="/" className="text-primary hover:underline">free AI detector and humanizer</Link> in the browser.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Developers</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything you need to integrate AI humanization into your product.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <Card key={b.title} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg">{b.title}</h3>
                      <p className="text-muted-foreground text-sm">{b.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Can You Build?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From CMS plugins to full SaaS products, our API powers the next generation of writing tools.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {useCases.map((uc) => {
                const Icon = uc.icon;
                return (
                  <Card key={uc.title} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{uc.title}</h3>
                        <p className="text-muted-foreground text-sm">{uc.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Reference */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">API Access Included</h2>
            <p className="text-muted-foreground text-lg mb-8">
              API access is available on <strong>Pro Writer</strong> ($24.99/mo) and <strong>Unlimited Creator</strong> ($59.99/mo) plans. Email us from your account address and we'll issue your key.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View All Plans
                </Button>
              </Link>
              <a href={API_KEY_REQUEST}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8">
                  Request an API Key <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Developer FAQs</h2>
            </div>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Integrate?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Email support@aifreetextpro.com from your account address with a line about what you're building, and we'll send your key.
            </p>
            <a href={API_KEY_REQUEST}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-12 py-6">
                Request an API Key <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>
              <InternalLinks variant="full" currentPage="/api" />
      </main>
      <Footer />
    </>
  );
};

export default Api;
