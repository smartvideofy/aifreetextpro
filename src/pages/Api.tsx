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

const API_PORTAL_URL = "https://api.aifreetextpro.com/";

const codeExamples = {
  curl: `curl -X POST https://api.aifreetextpro.com/v1/humanize \\
  -H "Authorization: Bearer sk_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "AI-generated text to humanize...",
    "style": "academic",
    "strength": "balanced"
  }'`,
  python: `import requests

response = requests.post(
    "https://api.aifreetextpro.com/v1/humanize",
    headers={
        "Authorization": "Bearer sk_live_your_api_key",
        "Content-Type": "application/json"
    },
    json={
        "text": "AI-generated text to humanize...",
        "style": "academic",
        "strength": "balanced"
    }
)

result = response.json()
print(result["humanized_text"])`,
  javascript: `const response = await fetch(
  "https://api.aifreetextpro.com/v1/humanize",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer sk_live_your_api_key",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: "AI-generated text to humanize...",
      style: "academic",
      strength: "balanced"
    })
  }
);

const result = await response.json();
console.log(result.humanized_text);`,
};

const responseExample = `{
  "humanized_text": "Your naturally rewritten text...",
  "confidence_score": 0.97,
  "word_count": 142,
  "detection_risk": "low",
  "credits_remaining": 48500
}`;

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Average response time under 2 seconds. Process thousands of words in a single request.",
  },
  {
    icon: Shield,
    title: "98% Bypass Rate",
    description: "Same industry-leading accuracy as our web app, now available programmatically.",
  },
  {
    icon: Key,
    title: "Simple Auth",
    description: "Bearer token authentication. Generate and manage API keys from your developer portal.",
  },
  {
    icon: Globe,
    title: "RESTful Design",
    description: "Standard REST API with JSON payloads. Integrate with any language or framework.",
  },
  {
    icon: BarChart3,
    title: "Usage Analytics",
    description: "Real-time dashboard tracking requests, word counts, and error rates per key.",
  },
  {
    icon: Layers,
    title: "Multiple Styles",
    description: "Academic, casual, professional, and creative humanization modes via a single parameter.",
  },
];

const useCases = [
  {
    title: "Content Platforms",
    description: "Integrate humanization directly into your CMS or publishing workflow. Auto-process drafts before publication.",
    icon: Globe,
  },
  {
    title: "Writing Tools & Plugins",
    description: "Build browser extensions, Google Docs add-ons, or VS Code plugins powered by our API.",
    icon: Code2,
  },
  {
    title: "Agency Automation",
    description: "Process client content at scale. Batch humanize hundreds of articles through your existing pipeline.",
    icon: Layers,
  },
  {
    title: "EdTech Products",
    description: "Help students improve AI-assisted writing while maintaining academic integrity standards.",
    icon: Terminal,
  },
];

const faqs = [
  {
    question: "What are the API rate limits?",
    answer: "Pro Writer plans include 1,000 API requests per day with up to 5,000 words per request. Unlimited Creator plans have 10,000 requests per day. Need higher limits? Contact us for enterprise plans.",
  },
  {
    question: "Which plans include API access?",
    answer: "API access is available on Pro Writer ($24.99/mo) and Unlimited Creator ($59.99/mo) plans. Free and Starter plans do not include API access. Visit our pricing page for full plan details.",
  },
  {
    question: "How do I authenticate API requests?",
    answer: "Generate an API key from the developer portal. Include it as a Bearer token in the Authorization header of every request. Keys can be revoked and regenerated at any time.",
  },
  {
    question: "What endpoints are available?",
    answer: "Currently we offer POST /v1/humanize for text humanization and POST /v1/detect for AI detection. Both accept JSON payloads with configurable style and strength parameters.",
  },
  {
    question: "Is there a sandbox or test environment?",
    answer: "Yes. Your API key works in both test and production modes. Test requests are free and don't count against your quota — just prefix your key with sk_test_ instead of sk_live_.",
  },
];

const Api = () => {
  return (
    <>
      <Helmet>
        <title>AI Free Text Pro API: Humanize & Detect AI Text</title>
        <meta name="description" content="Integrate AI text humanization and detection into your app with the AI Free Text Pro REST API. Simple authentication, 98% accuracy, and developer-friendly docs." />
        <meta name="keywords" content="AI humanizer API, AI detection API, text humanization API, REST API, developer API, AI writing API" />
        <link rel="canonical" href="https://aifreetextpro.com/api" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Free Text Pro API: Humanize & Detect AI Text" />
        <meta property="og:description" content="RESTful API for AI text humanization and detection. Integrate 98% bypass accuracy into your product." />
        <meta property="og:url" content="https://aifreetextpro.com/api" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Free Text Pro API – Developer Documentation" />
        <meta name="twitter:description" content="Programmatic access to AI text humanization and detection. REST API with simple auth." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Free Text Pro API",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web",
            "description": "REST API for AI text humanization and detection with 98% accuracy",
            "url": "https://aifreetextpro.com/api",
            "offers": {
              "@type": "Offer",
              "price": "24.99",
              "priceCurrency": "USD",
              "description": "API access included with Pro Writer plan"
            },
            "provider": {
              "@type": "Organization",
              "name": "AI Free Text Pro",
              "url": "https://aifreetextpro.com"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifreetextpro.com/" },
              { "@type": "ListItem", "position": 2, "name": "API", "item": "https://aifreetextpro.com/api" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": { "@type": "Answer", "text": f.answer }
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
              Build with AI Free Text Pro{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">API</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Programmatic access to industry-leading AI humanization and detection. Simple REST endpoints, 98% accuracy, and real-time usage analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={API_PORTAL_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8">
                  Get Your API Key <ArrowRight className="ml-2 h-5 w-5" />
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
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> 99.9% Uptime</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> &lt;2s Response</span>
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
                  <span className="text-sm font-medium text-muted-foreground">200 OK — Response</span>
                </div>
                <pre className="bg-card border border-border rounded-lg p-5 overflow-x-auto text-sm font-mono text-foreground leading-relaxed">
                  <code>{responseExample}</code>
                </pre>
              </div>
            </div>
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
                From CMS plugins to full SaaS products — our API powers the next generation of writing tools.
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
              API access is available on <strong>Pro Writer</strong> ($24.99/mo) and <strong>Unlimited Creator</strong> ($59.99/mo) plans. All plans include the developer portal, usage analytics, and key management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View All Plans
                </Button>
              </Link>
              <a href={API_PORTAL_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8">
                  Start Building <ArrowRight className="ml-2 h-5 w-5" />
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
              Get your API key in under 60 seconds. Start with the free sandbox — no credit card required.
            </p>
            <a href={API_PORTAL_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-12 py-6">
                Get Your API Key <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <InternalLinks variant="full" currentPage="/api" />
      <Footer />
    </>
  );
};

export default Api;
