import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Zap, Shield, FileText, Sparkles, Brain, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import DemoSection from "@/components/DemoSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <AnimatedBackground />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-700">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_8s_linear_infinite]">
                  Detect AI. Rewrite Human.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Instantly identify AI-generated text and transform it into natural, human tone.
              </p>

              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>50K+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>98% Accuracy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Free Forever</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/ai-checker" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="text-lg px-10 py-6 bg-gradient-to-r from-primary via-primary/90 to-secondary hover:opacity-90 shadow-xl hover:shadow-2xl shadow-primary/20 group w-full transition-all"
                  >
                    <Brain className="mr-2 h-5 w-5" />
                    Try AI Checker
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/humanizer" className="w-full sm:w-auto">
                  <Button 
                    size="lg"
                    className="text-lg px-10 py-6 bg-gradient-to-r from-secondary via-secondary/90 to-primary hover:opacity-90 shadow-xl hover:shadow-2xl shadow-secondary/20 group w-full transition-all"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Try Humanizer
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
              How AI Free Text Pro Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4 group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold">Paste Your Text</h3>
                <p className="text-muted-foreground">
                  Simply paste the text you want to analyze or transform into our interface.
                </p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Brain className="w-10 h-10 text-secondary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-semibold">Detect AI Patterns Instantly</h3>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes your text and identifies AI-generated patterns with precision.
                </p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold">Humanize in One Click</h3>
                <p className="text-muted-foreground">
                  Transform robotic text into natural, engaging content that sounds authentically human.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Core Features
            </h2>
            <p className="text-center text-muted-foreground text-lg md:text-xl mb-20 max-w-2xl mx-auto">
              Two powerful tools working together to help you create authentic, human-like content.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* AI Checker Card */}
              <Card className="p-8 space-y-6 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold">AI Checker</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced AI detection system that analyzes text and provides probability scores for AI-generated vs. human-written content.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Accurate AI probability analysis with detailed breakdown</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Instant results with highlighted AI patterns</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Powered by GPT-4o Mini for precision</span>
                    </div>
                  </div>
                </div>

                <Link to="/ai-checker" className="block">
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-all group">
                    Try AI Checker
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>

              {/* Humanizer Card */}
              <Card className="p-8 space-y-6 bg-gradient-to-br from-card to-card/80 backdrop-blur border-border/50 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-secondary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold">Text Humanizer</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Transform AI-generated or robotic text into natural, engaging content with improved flow, vocabulary, and authenticity.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Natural, human-like writing style with personality</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Varied sentence structure and authentic flow</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Maintains original meaning and intent</span>
                    </div>
                  </div>
                </div>

                <Link to="/humanizer" className="block">
                  <Button className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:opacity-90 transition-all group">
                    Try Humanizer
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust & Credibility */}
        <section className="py-12 md:py-16 bg-card/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                <span className="text-primary font-bold">98% accuracy</span> tested on thousands of samples • Trusted by writers, students, and professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold">
                      MR
                    </div>
                    <div>
                      <p className="font-semibold">Maria Rodriguez</p>
                      <p className="text-sm text-muted-foreground">Content Writer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "AI Free Text Pro saved me hours of editing. The humanizer makes AI drafts sound natural and authentic."
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-xl font-bold">
                      JC
                    </div>
                    <div>
                      <p className="font-semibold">James Chen</p>
                      <p className="text-sm text-muted-foreground">Graduate Student</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "The AI checker is incredibly accurate. Helps me ensure my academic writing maintains authenticity."
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold">
                      SP
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Patel</p>
                      <p className="text-sm text-muted-foreground">Marketing Manager</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "Perfect for refining AI-assisted content. The results sound genuinely human every time."
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Use AI Free Text Pro */}
        <section className="py-20 md:py-28 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
              Why Use AI Free Text Pro
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Detect AI with Confidence</h3>
                <p className="text-sm text-muted-foreground">
                  Accurately identify AI-generated content with advanced detection algorithms.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold">Sound Genuinely Human</h3>
                <p className="text-sm text-muted-foreground">
                  Rewrite content to sound natural, engaging, and authentically human.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Improve Readability</h3>
                <p className="text-sm text-muted-foreground">
                  Enhance text flow, structure, and overall readability instantly.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold">Free to Use</h3>
                <p className="text-sm text-muted-foreground">
                  Full access to both tools with premium upgrades coming soon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <DemoSection />

        {/* About Section */}
        <AboutSection />

        {/* FAQ Section with Schema */}
        <section className="py-20 md:py-28 bg-card/20" itemScope itemType="https://schema.org/FAQPage">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-card border border-border/50 rounded-lg px-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <AccordionTrigger className="text-left hover:no-underline" itemProp="name">
                    How accurate is AI Free Text Pro's AI detection?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                      AI Free Text Pro uses advanced AI models (GPT-4o Mini) to analyze text patterns, vocabulary, and structure. Our detection system provides probability scores with detailed breakdowns, achieving high accuracy in identifying AI-generated content. However, no AI detector is 100% accurate, so we provide detailed analysis to help you make informed decisions.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-card border border-border/50 rounded-lg px-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <AccordionTrigger className="text-left hover:no-underline" itemProp="name">
                    Is my text stored or shared?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                      No. Your privacy is our priority. AI Free Text Pro processes your content in real-time and does not store, log, or share your text with third parties. All analysis happens on-demand, and your content is immediately discarded after processing.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-card border border-border/50 rounded-lg px-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <AccordionTrigger className="text-left hover:no-underline" itemProp="name">
                    Can I use it for academic writing?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                      AI Free Text Pro can be used to check and improve academic writing. However, we encourage ethical use - our humanizer is designed to help refine AI-assisted drafts and improve readability, not to deceive academic integrity systems. Always follow your institution's guidelines regarding AI usage in academic work.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-card border border-border/50 rounded-lg px-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <AccordionTrigger className="text-left hover:no-underline" itemProp="name">
                    What's the difference between AI Checker and Humanizer?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                      AI Checker analyzes and detects whether text is AI-generated, providing probability scores and highlighting suspicious patterns. Humanizer transforms robotic or AI-generated text into natural, human-like writing by improving flow, variety, and authenticity. Use them together for best results!
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-card border border-border/50 rounded-lg px-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <AccordionTrigger className="text-left hover:no-underline" itemProp="name">
                    Is AI Free Text Pro free to use?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                      Yes! AI Free Text Pro currently offers full access to both AI Checker and Humanizer tools for free. We're working on premium features and upgrades that will be available in the future, but core functionality will always remain accessible.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-10 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-16 border border-border/50">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Transform Your Text?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Join thousands using AI Free Text Pro to create authentic, human-like content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/ai-checker">
                  <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 shadow-lg w-full sm:w-auto">
                    Start Checking
                  </Button>
                </Link>
                <Link to="/humanizer">
                  <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-secondary to-secondary/80 hover:opacity-90 shadow-lg w-full sm:w-auto">
                    Start Humanizing
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

export default Index;
