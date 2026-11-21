import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowLeft, ExternalLink, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ReviewedBy from "@/components/ReviewedBy";
import KeyTakeaways from "@/components/KeyTakeaways";
import { RelatedArticles } from "@/components/RelatedArticles";
import InternalLinks from "@/components/InternalLinks";
import { FAQSection } from "@/components/FAQSection";
import { QuickAnswer } from "@/components/QuickAnswer";
import { AuthorSchema } from "@/components/AuthorSchema";
import { SpeakableSchema } from "@/components/SpeakableSchema";
import { trackCTAClick } from "@/lib/analytics";

const OG_IMAGE = "https://aifreetextpro.com/og-image.png";

export const ext = (url: string, label: string) => (
  <a href={url} target="_blank" rel="noopener noreferrer nofollow">{label}</a>
);

export type GuideMeta = {
  path: string;
  campaign: string;
  title: string;
  h1: string;
  description: string;
  social: string;
  keywords: string;
  crumb: string;
  date: string;
  dateLabel: string;
  readTime: string;
  category: string;
  quickQuestion: string;
  quickAnswer: string;
  takeaways: string[];
  faqs: { question: string; answer: string }[];
  related: { title: string; description: string; href: string; category: string }[];
  sources: ReactNode[];
};

export const makeCta = (campaign: string) => {
  const app = `https://app.aifreetextpro.com?utm_source=blog&utm_medium=organic&utm_campaign=${campaign}`;
  return ({ heading, text, label, position }: { heading: string; text: string; label: string; position: string }) => (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center not-prose">
      <h3 className="text-xl font-bold mb-2 text-foreground">{heading}</h3>
      <p className="text-muted-foreground mb-5">{text}</p>
      <a
        href={app}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCTAClick(`${campaign}_${position}`, "app")}
        className="inline-flex items-center justify-center gap-2 bg-primary !text-primary-foreground px-7 py-3.5 rounded-lg font-semibold no-underline shadow-sm hover:bg-primary/90 hover:shadow-md transition-all"
      >
        <span>{label}</span>
        <ExternalLink className="w-4 h-4" aria-hidden="true" />
      </a>
      <p className="text-xs text-muted-foreground mt-3">1,000 words free. No credit card needed.</p>
    </div>
  );
};

export const GuideArticle = ({ meta, children }: { meta: GuideMeta; children: ReactNode }) => {
  const url = `https://aifreetextpro.com${meta.path}`;
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.social} />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={meta.date} />
        <meta property="article:modified_time" content={meta.date} />
        <meta property="article:author" content="Dr. Sarah Chen" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aifreetextpro" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.social} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>
      <AuthorSchema articleUrl={url} headline={meta.title} description={meta.description} datePublished={meta.date} dateModified={meta.date} image={OG_IMAGE} />
      <SpeakableSchema pageUrl={url} pageName={meta.crumb} />

      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: meta.crumb }]} />
          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>
          <article className="prose prose-lg max-w-none">
            <header className="mb-8 not-prose">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{meta.h1}</h1>
              <QuickAnswer question={meta.quickQuestion} answer={meta.quickAnswer} />
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1"><User className="w-4 h-4" /><Link to="/team#sarah-chen" className="hover:text-primary">Dr. Sarah Chen</Link></div>
                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><time dateTime={meta.date}>{meta.dateLabel}</time></div>
                <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{meta.readTime}</div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">{meta.category}</span>
              </div>
              <ReviewedBy name="Dr. Sarah Chen" role="AI Research Lead" slug="sarah-chen" />
            </header>
            <KeyTakeaways points={meta.takeaways} />
            {children}
            <h2>Sources</h2>
            <ul>{meta.sources.map((s, i) => <li key={i}>{s}</li>)}</ul>
            <FAQSection faqs={meta.faqs} />
            <RelatedArticles articles={meta.related} />
            <InternalLinks currentPage={meta.path} />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};
