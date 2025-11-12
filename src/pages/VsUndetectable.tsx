import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, X, ArrowRight, Zap, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

const VsUndetectable = () => {
  const comparisonFeatures = [
    {
      category: "Core Features",
      features: [
        { name: "AI Detection", aiFreePro: "✓ Included Free", undetectable: "✗ Paid Add-On" },
        { name: "AI Humanizer", aiFreePro: "✓ Included", undetectable: "✓ Included" },
        { name: "Writing Styles", aiFreePro: "4 Styles", undetectable: "3 Styles" },
        { name: "File Upload (PDF, DOCX)", aiFreePro: "✓ Yes", undetectable: "✗ No" },
      ]
    },
    {
      category: "Pricing & Value",
      features: [
        { name: "Free Plan Words", aiFreePro: "1,000 words/mo", undetectable: "375 words/mo" },
        { name: "Starter Price", aiFreePro: "$4.99/mo", undetectable: "$9.99/mo" },
        { name: "Pro Plan Value", aiFreePro: "$24.99 (50K words)", undetectable: "$49.99 (90K words)" },
        { name: "Best Value Ratio", aiFreePro: "2,000 words/$1", undetectable: "1,802 words/$1" },
      ]
    },
    {
      category: "Detection Bypass Rates",
      features: [
        { name: "GPTZero", aiFreePro: "98%", undetectable: "95%" },
        { name: "Turnitin", aiFreePro: "97%", undetectable: "94%" },
        { name: "Originality.AI", aiFreePro: "96%", undetectable: "93%" },
        { name: "Average Success", aiFreePro: "97%", undetectable: "94%" },
      ]
    },
    {
      category: "Support & Reliability",
      features: [
        { name: "Money-Back Guarantee", aiFreePro: "✓ 100%", undetectable: "✓ 7-Day Only" },
        { name: "Response Time", aiFreePro: "< 24 hours", undetectable: "48 hours" },
        { name: "Uptime SLA", aiFreePro: "99.9%", undetectable: "99.5%" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Free Text Pro vs Undetectable AI: Which Tool is Better? (2025)</title>
        <meta name="description" content="Compare AI Free Text Pro vs Undetectable AI. See pricing, bypass rates, features, and value. AI Free Text Pro: $4.99 starter, 1,000 free words, 98% bypass rate. Undetectable AI: $9.99 starter, 375 free words, paid detector." />
        <meta name="keywords" content="ai free text pro vs undetectable ai, undetectable ai alternative, best ai humanizer, undetectable ai comparison" />
        <link rel="canonical" href="https://aifreetextpro.com/vs-undetectable-ai" />
        <meta property="og:title" content="AI Free Text Pro vs Undetectable AI - Honest Comparison" />
        <meta property="og:description" content="Side-by-side: AI Free Text Pro offers better value ($4.99 vs $9.99), free detector, and 98% bypass rate. See full comparison." />
        <meta property="og:url" content="https://aifreetextpro.com/vs-undetectable-ai" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "vs Undetectable AI" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Free Text Pro vs Undetectable AI
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Detailed comparison of features, pricing, bypass rates, and value. See which AI humanizer gives you more for less.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-12 bg-gradient-to-b from-card/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Winner: AI Free Text Pro</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-8 border-2 border-primary shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Why AI Free Text Pro Wins</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">50% Lower Entry Price</p>
                        <p className="text-sm text-muted-foreground">$4.99/mo vs $9.99/mo starter plan</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">2.7x More Free Words</p>
                        <p className="text-sm text-muted-foreground">1,000 vs 375 words per month</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Free Built-In Detector</p>
                        <p className="text-sm text-muted-foreground">No extra cost like Undetectable AI</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Higher Bypass Rates</p>
                        <p className="text-sm text-muted-foreground">98% vs 95% on GPTZero</p>
                      </div>
                    </li>
                  </ul>
                  <a href="https://app.aifreetextpro.com/" className="block mt-6">
                    <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary">
                      Try Free — 1,000 Words <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </Card>

                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Undetectable AI</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <X className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Higher Starting Cost</p>
                        <p className="text-sm">$9.99/mo minimum (double AI Free Text Pro)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Limited Free Plan</p>
                        <p className="text-sm">Only 375 words/month (vs 1,000)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Detector Costs Extra</p>
                        <p className="text-sm">Paid add-on feature, not included</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">No File Uploads</p>
                        <p className="text-sm">Cannot upload PDF or DOCX files</p>
                      </div>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Complete Feature Comparison
              </h2>
              
              {comparisonFeatures.map((section, idx) => (
                <div key={idx} className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">{idx + 1}</span>
                    </div>
                    {section.category}
                  </h3>
                  <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="text-left py-4 px-6 font-semibold">Feature</th>
                            <th className="text-center py-4 px-6 font-semibold bg-primary/5">AI Free Text Pro</th>
                            <th className="text-center py-4 px-6 font-semibold">Undetectable AI</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {section.features.map((feature, featureIdx) => (
                            <tr key={featureIdx} className="hover:bg-muted/30 transition-colors">
                              <td className="py-4 px-6 font-medium">{feature.name}</td>
                              <td className="text-center py-4 px-6 bg-primary/5">
                                <span className="font-semibold text-primary">{feature.aiFreePro}</span>
                              </td>
                              <td className="text-center py-4 px-6">
                                <span className="text-muted-foreground">{feature.undetectable}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Get More Value with AI Free Text Pro
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Better pricing. Free detector. Higher bypass rates. Join 50,000+ smart users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.aifreetextpro.com/" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6">
                    <Zap className="mr-2 h-5 w-5" />
                    Start Free — 1,000 Words
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link to="/pricing" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full text-lg px-8 py-6">
                    Compare Plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VsUndetectable;
