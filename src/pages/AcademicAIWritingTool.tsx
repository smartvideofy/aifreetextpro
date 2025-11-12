import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, BookOpen, GraduationCap, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const AcademicAIWritingTool = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Academic AI Writing Tool - Research Papers & Essays (Pass Turnitin 2025)</title>
        <meta name="description" content="Academic AI writing tool for research papers, essays, and thesis work. 97% Turnitin bypass rate. Academic writing mode preserves scholarly tone. Citations support. Used by 20,000+ students and researchers." />
        <meta name="keywords" content="academic ai writing tool, research paper ai, thesis writing ai, turnitin bypass, scholarly writing ai" />
        <link rel="canonical" href="https://aifreetextpro.com/academic-ai-writing-tool" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Academic AI Writing Tool" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-semibold">97% Turnitin Bypass Rate</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic AI Writing Tool</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Transform AI-generated academic content into scholarly writing that passes Turnitin, GPTZero, and Originality.AI with 97% success rate.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a href="https://app.aifreetextpro.com/">
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
                  Automatically maintains all citations, references, and bibliography formatting (APA, MLA, Chicago, Harvard) while humanizing your content.
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
                <h3 className="text-xl font-bold mb-3">Turnitin Tested</h3>
                <p className="text-muted-foreground">
                  Specifically optimized to bypass Turnitin's AI detection algorithm with 97% success rate. Tested against all major detection systems.
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
                  Convert AI drafts into natural academic essays that pass Turnitin while keeping your original arguments and structure.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2">Dissertation Chapters</h3>
                <p className="text-muted-foreground text-sm">
                  Refine AI-generated dissertation content to meet institutional standards and bypass detection systems used by universities.
                </p>
              </Card>
            </div>
          </div>
        </section>

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
              <a href="https://app.aifreetextpro.com/">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                  Try Free - 1,000 Words/Month
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                100% Money-Back Guarantee • No Credit Card Required
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AcademicAIWritingTool;
