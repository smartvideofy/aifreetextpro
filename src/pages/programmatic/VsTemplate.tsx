import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { AuthorSchema } from "@/components/AuthorSchema";
import { FAQSection } from "@/components/FAQSection";
import { PillarHubLinks } from "@/components/PillarHubLinks";
import { competitors } from "@/data/competitors";
import { ArrowRight, CheckCircle2, XCircle, Star } from "lucide-react";

const VsTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? competitors[slug] : undefined;

  if (!data) return <Navigate to="/blog/best-free-ai-humanizer-2026" replace />;

  const canonical = `/vs/${data.slug}`;
  const title = `${data.name} Alternative: AI Free Text Pro vs ${data.name} [2026]`;
  const freeWords = typeof data.freeWords === "number" ? `${data.freeWords} free words / month` : data.freeWords;
  const others = Object.values(competitors).filter((c) => c.slug !== data.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={title}
        description={data.metaDescription}
        canonicalUrl={canonical}
        keywords={`${data.name.toLowerCase()} alternative, ${data.name.toLowerCase()} vs ai free text pro, best ${data.name.toLowerCase()} alternative 2026`}
        ogType="article"
        modifiedTime="2026-10-24"
      />
      <AuthorSchema
        headline={title}
        description={data.metaDescription}
        articleUrl={`https://aifreetextpro.com${canonical}`}
        datePublished="2026-06-10"
        dateModified="2026-10-24"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ComparisonTable",
          "name": `AI Free Text Pro vs ${data.name}`,
          "url": `https://aifreetextpro.com${canonical}`,
        })}</script>
      </Helmet>

      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Compare", href: "/blog/best-free-ai-humanizer-2026" },
          { label: `vs ${data.name}` },
        ]} />

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {data.name} Alternative: <span className="text-primary">AI Free Text Pro</span> vs {data.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {data.tagline} Here is how it stacks up against AI Free Text Pro on free word allowance, included AI detector, monthly price and fit in 2026.
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span>4.8/5 from 1,247 reviews · Updated October 2026</span>
          </div>
        </header>

        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 border-primary/40 bg-primary/5">
            <h2 className="text-xl font-bold mb-3">AI Free Text Pro</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> 250 free words / month</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Starts at $4.99/mo</li>
              {data.ourBypassRate && (
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {data.ourBypassRate} bypass rate</li>
              )}
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> Free AI detector included</li>
              {data.ourAdvantages.slice(0, 3).map((a, i) => (
                <li key={i} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {a}</li>
              ))}
            </ul>
            <Button asChild className="mt-4 w-full">
              <a href="https://app.aifreetextpro.com" target="_blank" rel="noopener noreferrer">
                Try Free <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-3">{data.name}</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" /> {freeWords}</li>
              <li className="flex gap-2"><XCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" /> Starts at {data.startingPrice}</li>
              {data.bypassRate && (
                <li className="flex gap-2"><XCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" /> {data.bypassRate} bypass rate</li>
              )}
              {data.weaknesses.map((w, i) => (
                <li key={i} className="flex gap-2"><XCircle className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" /> {w}</li>
              ))}
            </ul>
          </Card>
        </section>

        <section className="mb-12 prose prose-slate dark:prose-invert max-w-none">
          <h2>The verdict</h2>
          <p>{data.verdict}</p>
          <p>
            If you are evaluating {data.name} for student essays, marketing copy, or freelance writing in 2026, the most important questions are bypass quality on the detector your audience uses, the cost per humanized word, and whether a built-in AI detector saves you a second subscription.
          </p>
          {data.ourBypassRate ? (
            <p>
              AI Free Text Pro answers all three: a {data.ourBypassRate} bypass rate against Turnitin, GPTZero, Originality.AI, Copyleaks, and Winston AI; a starting price of $4.99 per month; and a free AI detector that runs the same accuracy benchmark as the paid competition. {data.name} is a credible tool, but its higher monthly price and smaller free allowance leave money on the table for most users.
            </p>
          ) : (
            <p>
              AI Free Text Pro answers all three in one place: a humanizer and an AI detector in the same workspace, so you can check, rewrite and re-check without a second subscription; a starting price of $4.99 per month; and 250 free words every month with no card. Prices and free allowances for {data.name} change often, so confirm them on its pricing page before you buy.
            </p>
          )}
          <h2>Other {data.name} alternatives</h2>
          <p>
            Comparing more than two tools? See the{" "}
            <Link to="/blog/best-free-ai-humanizer-2026">best free AI humanizers in 2026</Link>, check any draft with the{" "}
            <Link to="/ai-checker">free AI detector</Link>, or compare AI Free Text Pro with{" "}
            {others.map((c, i) => (
              <span key={c.slug}>
                <Link to={`/vs/${c.slug}`}>{c.name}</Link>
                {i < others.length - 2 ? ", " : i === others.length - 2 ? " and " : ""}
              </span>
            ))}
            .
          </p>
        </section>

        <FAQSection
          title={`${data.name} alternative FAQ`}
          faqs={data.faq.map(f => ({ question: f.q, answer: f.a }))}
        />

        <section className="my-12 text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-3">Try the {data.name} alternative free</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            250 free words, no card required. Test the humanizer on your own essay or blog draft before paying anything.
          </p>
          <Button asChild size="lg">
            <a href="https://app.aifreetextpro.com" target="_blank" rel="noopener noreferrer">
              Start humanizing free <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </Button>
        </section>

        <PillarHubLinks hub="comparison" currentPage={canonical} limit={6} title="More humanizer comparisons" />
      </main>

      <Footer />
    </div>
  );
};

export default VsTemplate;
