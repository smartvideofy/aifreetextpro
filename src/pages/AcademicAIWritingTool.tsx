import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, BookOpen, GraduationCap, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { HubBackLink } from "@/components/PillarHubLinks";
import { USAcademicGuidance, AcademicComparisonLinks } from '@/components/USAcademicGuidance';
import { trackCTAClick } from '@/lib/analytics';

const AcademicAIWritingTool = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Academic AI Writing Tool: APA, MLA and Responsible Editing</title>
        <meta name="description" content="Refine academic drafts with a policy-first workflow. Understand US university AI rules, APA/MLA citations and Turnitin reports. Try 1,000 words free." />
        <meta name="keywords" content="academic ai writing tool, academic ai editing, APA AI citation, MLA AI citation, US university AI policy" />
        <link rel="canonical" href="https://aifreetextpro.com/academic-ai-writing-tool" />
        <meta property="og:title" content="Academic AI Writing Tool: APA, MLA and Responsible Editing" />
        <meta property="og:description" content="Refine academic drafts, verify citations and follow US university AI policies. Understand Turnitin reports without chasing a score." />
        <meta property="og:url" content="https://aifreetextpro.com/academic-ai-writing-tool" />
        <meta property="og:type" content="website" />
        
        
        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://aifreetextpro.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Academic AI Writing Tool"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best AI writing tool for academic papers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choose an academic writing tool according to your assignment policy, citation needs and editing workflow. AI Free Text Pro helps refine drafts, but no tool can guarantee academic permission or a detector result."
                }
              },
              {
                "@type": "Question",
                "name": "Does AI Free Text Pro preserve citations in academic papers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The Academic mode specifically preserves in-text citations, footnotes, endnotes, and reference lists in APA, MLA, Chicago, and Harvard formats while humanizing the surrounding text."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use AI Free Text Pro for my thesis or dissertation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. AI Free Text Pro supports large document uploads (PDF, DOCX up to 10MB) and provides consistent humanization across long-form academic writing including theses, dissertations, and research papers."
                }
              },
              {
                "@type": "Question",
                "name": "How does the Academic writing mode differ from other modes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Academic mode focuses on formal tone and scholarly structure while refining wording. Review all revisions and citations yourself, and use it only where your assignment permits AI assistance."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Academic AI Writing Tool" }
          ]} />
          <HubBackLink currentPath="/academic-ai-writing-tool" />
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-semibold">Policy-first academic editing</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic AI Writing Tool</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Refine your academic draft, check its sources and keep your own argument central. Follow your instructor's AI policy before using any writing tool.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="https://app.aifreetextpro.com/" target="_blank" rel="noopener noreferrer" onClick={() => trackCTAClick('academic_hero', 'app')}>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Preserves Citations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Maintains Academic Tone</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>20,000+ Researchers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Academics Choose Us */}
        <section className="py-20 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Academics Choose AI Free Text Pro</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Designed specifically for academic writing with features that preserve scholarly integrity
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Citation Preservation</h3>
                <p className="text-muted-foreground">
                  Review APA, MLA, Chicago or Harvard references alongside your revised text. Verify every quotation, author, date and source against the original.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Academic Tone Mode</h3>
                <p className="text-muted-foreground">
                  Specialized "Academic" writing mode preserves scholarly language, formal tone, and disciplinary conventions required for research papers.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Understand Detection Reports</h3>
                <p className="text-muted-foreground">
                  Use detection indicators as a prompt for review, not proof of authorship. Preserve drafts and follow your institution's review process if a false flag occurs.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For All Academic Writing</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Research Papers & Theses</h3>
                <p className="text-muted-foreground text-sm">
                  Transform AI-generated research content into authentic scholarly writing while preserving citations, methodology, and academic rigor.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Literature Reviews</h3>
                <p className="text-muted-foreground text-sm">
                  Humanize AI-assisted literature summaries while maintaining proper source attribution and critical analysis tone.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Essay Writing</h3>
                <p className="text-muted-foreground text-sm">
                  Improve clarity in permitted AI-assisted drafts while keeping your original arguments, source attribution and structure.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Dissertation Chapters</h3>
                <p className="text-muted-foreground text-sm">
                  Refine permitted AI-assisted dissertation content while following your supervisor's requirements for attribution and disclosure.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl">
          <USAcademicGuidance />
          <AcademicComparisonLinks />
        </div>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Academic Writing Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join 20,000+ students and researchers who trust AI Free Text Pro for their academic writing needs.
              </p>
              <a href="https://app.aifreetextpro.com/" target="_blank" rel="noopener noreferrer" onClick={() => trackCTAClick('academic_bottom', 'app')}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                  Try Free - 1,000 Words/Month
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                1,000 free words per month. Check your course policy first.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <RelatedArticles articles={[
            {
              title: "AI Humanizer for Students: Complete Academic Success Guide",
              description: "Refine permitted AI-assisted drafts while retaining your argument and reviewing source attribution.",
              href: "/ai-humanizer-for-students",
              category: "Student Tools"
            },
            {
              title: "Turnitin AI Detection: Understand and Review False Flags",
              description: "Understand detection limitations, keep authorship evidence and follow academic review procedures.",
              href: "/bypass-turnitin-ai-detection",
              category: "Detection Guide"
            },
            {
              title: "How AI Detectors Work: Technical Breakdown 2025",
              description: "Understand the algorithms and methods Turnitin, GPTZero, and other AI detection tools use to identify AI content.",
              href: "/blog/how-ai-detectors-work",
              category: "Technical Guide"
            }
          ]} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AcademicAIWritingTool;
