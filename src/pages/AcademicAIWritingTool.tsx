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

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic AI Writing Tool</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Transform AI-generated academic content into scholarly writing that passes Turnitin with 97% success rate.
              </p>
              <a href="https://app.aifreetextpro.com/">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AcademicAIWritingTool;
