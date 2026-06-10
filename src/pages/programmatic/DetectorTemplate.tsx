import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { AuthorSchema } from "@/components/AuthorSchema";
import { FAQSection } from "@/components/FAQSection";
import { PillarHubLinks } from "@/components/PillarHubLinks";
import { detectors } from "@/data/detectors";
import { ArrowRight, AlertTriangle, Lightbulb } from "lucide-react";

const DetectorTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? detectors[slug] : undefined;

  if (!data) return <Navigate to="/bypass-turnitin-ai-detection" replace />;

  const canonical = `/detector/${data.slug}`;
  const title = `${data.name}: How It Works, Accuracy & False Flags [2026]`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={title}
        description={data.metaDescription}
        canonicalUrl={canonical}
        keywords={`${data.name.toLowerCase()}, how does ${data.name.toLowerCase()} work, ${data.name.toLowerCase()} accuracy, ${data.name.toLowerCase()} false positives`}
        ogType="article"
        modifiedTime="2026-06-09"
      />
      <AuthorSchema
        articleTitle={title}
        articleDescription={data.metaDescription}
        articleUrl={`https://aifreetextpro.com${canonical}`}
        datePublished="2026-06-10"
      />

      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "AI Detectors", href: "/ai-checker" },
          { label: data.name },
        ]} />

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {data.name}: How It Works, Accuracy & False Flags
          </h1>
          <p className="text-lg text-muted-foreground">
            {data.intro}
          </p>
        </header>

        <section className="prose prose-slate dark:prose-invert max-w-none mb-10">
          <h2>How {data.name} works</h2>
          <p>{data.howItWorks}</p>

          <h2>Accuracy in 2026</h2>
          <p><strong>Vendor claim:</strong> {data.accuracyClaim}</p>
          <p><strong>Independent test results:</strong> {data.realAccuracy}</p>
          <p><strong>False positive rate:</strong> {data.falsePositiveRate}</p>
        </section>

        <Card className="p-6 mb-10 border-amber-500/40 bg-amber-500/5">
          <div className="flex items-start gap-3 mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <h2 className="text-xl font-bold m-0">Known weaknesses</h2>
          </div>
          <ul className="space-y-2 text-sm">
            {data.weaknesses.map((w, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 mb-10 border-primary/40 bg-primary/5">
          <div className="flex items-start gap-3 mb-3">
            <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <h2 className="text-xl font-bold m-0">How to reduce false flags from {data.name}</h2>
          </div>
          <ol className="space-y-2 text-sm list-decimal pl-5">
            {data.reduceFlagsTips.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ol>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild>
              <a href="https://app.aifreetextpro.com" target="_blank" rel="noopener noreferrer">
                Humanize free <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link to={data.bypassLink}>
                Full bypass guide
              </Link>
            </Button>
          </div>
        </Card>

        <FAQSection
          title={`${data.name} FAQ`}
          faqs={data.faq}
        />

        <PillarHubLinks hub="detection" currentPage={canonical} limit={9} title="More on AI detection" />
      </main>

      <Footer />
    </div>
  );
};

export default DetectorTemplate;
