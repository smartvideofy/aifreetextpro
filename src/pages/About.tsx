import { Target, Zap, Shield, Users, Heart, Cpu, Globe, Star, CheckCircle, TrendingUp, Award, Lock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { InternalLinks } from "@/components/InternalLinks";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import aboutTeam from "@/assets/about-team.png";
import technologyAbstract from "@/assets/technology-abstract.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About AI Free Text Pro - Trusted by 50K+ Writers</title>
        <meta name="description" content="The team building the free AI humanizer & detector trusted by 50,000+ students, writers and professionals. Our mission, story and 98% accuracy promise." />
        <meta name="keywords" content="about ai detector, ai text tools, free ai detection, ai humanizer company, text analysis tools" />
        <link rel="canonical" href="https://aifreetextpro.com/about" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="About AI Free Text Pro - 50K+ Writers Trust Us" />
        <meta property="og:description" content="Meet the team behind AI Free Text Pro. 50,000+ writers use our free AI humanizer and detector." />
        <meta property="og:url" content="https://aifreetextpro.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aifreetextpro" />
        <meta name="twitter:title" content="About AI Free Text Pro - 50K+ Writers Trust Us" />
        <meta name="twitter:description" content="Meet the team behind AI Free Text Pro. 50,000+ writers use our free AI humanizer and detector." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
      </Helmet>
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs 
            items={[
              { label: "Home", href: "/" },
              { label: "About" }
            ]} 
          />
        </div>

        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)]" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Trusted by 50,000+ Users Worldwide</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
                About AI Free Text Pro
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-foreground/80">
                Human Words in an AI World
              </p>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We empower creators, students, and professionals to transform AI-generated text into authentic, natural writing that preserves your unique voice.
              </p>

              {/* Hero Image */}
              <div className="mt-12">
                <img 
                  src={aboutTeam} 
                  alt="AI Free Text Pro team collaborating in modern office" 
                  className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl shadow-primary/10 border border-border/50"
                  width={1024}
                  height={576}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Built by writers, for writers
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="p-8 text-center bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">2023</h3>
                  <p className="text-muted-foreground">Founded with a mission to democratize AI text tools</p>
                </Card>
                
                <Card className="p-8 text-center bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">50K+</h3>
                  <p className="text-muted-foreground">Active users trusting our platform daily</p>
                </Card>
                
                <Card className="p-8 text-center bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">98%</h3>
                  <p className="text-muted-foreground">Accuracy rate in humanization & detection</p>
                </Card>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  AI Free Text Pro was born from a simple observation: as AI writing tools became ubiquitous, there was a growing gap between machine-generated content and authentic human expression. Writers, students, and professionals needed reliable tools that were both accurate and accessible.
                </p>
                <p>
                  We built AI Free Text Pro to bridge that gap, combining cutting-edge AI technology with a human-first philosophy. Our platform doesn't just detect AI patterns; it transforms robotic text into natural, engaging writing that feels uniquely yours.
                </p>
                <p>
                  Today, we're proud to serve a global community of creators who trust us to help them maintain authenticity in an increasingly automated world. As AI continues to evolve, so do we, constantly refining our algorithms to stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission & Values</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  To bridge the gap between artificial intelligence and authentic expression, empowering you to write freely, confidently, and naturally in the age of AI.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-border/50 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Integrity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transparency builds trust. We never manipulate your data, compromise on privacy, or sacrifice ethical AI use. Your content belongs to you, always.
                  </p>
                </Card>
                
                <Card className="p-8 bg-gradient-to-br from-card via-card to-secondary/5 border-border/50 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Community</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We grow by listening. Our users guide every improvement through honest feedback and collaboration. You shape the future of this platform.
                  </p>
                </Card>
                
                <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-border/50 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We constantly refine our models to stay ahead of AI detection systems—ensuring you always lead the curve, not follow it.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features That Set Us Apart */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose AI Free Text Pro</h2>
                <p className="text-xl text-muted-foreground">
                  Powerful features designed for real people with real needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6 hover:shadow-lg transition-all border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
                  <p className="text-muted-foreground">
                    Generate humanized content in seconds. No waiting, no queues, just instant transformation.
                  </p>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-all border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Unmatched Precision</h3>
                  <p className="text-muted-foreground">
                    98% accuracy in rewriting and detection avoidance. Your text stays genuine and credible, every single time.
                  </p>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-all border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Privacy First</h3>
                  <p className="text-muted-foreground">
                    Zero data retention. Your content is processed securely and never stored, logged, or shared.
                  </p>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-all border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Smart AI Technology</h3>
                  <p className="text-muted-foreground">
                    Advanced linguistic models that understand context, tone, and natural human writing patterns.
                  </p>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-all border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Global-Ready</h3>
                  <p className="text-muted-foreground">
                    Built to understand diverse linguistic cues and writing standards—perfect for international users.
                  </p>
                </Card>
                
                <Card className="p-6 hover:shadow-lg transition-all border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">100% Free Core Features</h3>
                  <p className="text-muted-foreground">
                    Essential detection and humanization tools remain free forever. No hidden fees, no paywalls.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Powered by Advanced AI</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our proprietary algorithms are trained on diverse linguistic patterns, allowing us to distinguish subtle human nuances in tone, rhythm, and structure. We learn from style, not content, ensuring complete data security.
                </p>
              </div>

              {/* Technology Image */}
              <div className="mb-16">
                <img 
                  src={technologyAbstract} 
                  alt="Neural network and AI technology visualization" 
                  className="w-full rounded-2xl shadow-xl"
                  width={1024}
                  height={576}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-card border-border/50 hover:shadow-xl transition-all">
                  <Cpu className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">Context-Aware Rewriting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our models mimic authentic writing styles using intelligent paraphrasing and sentence restructuring that preserves meaning.
                  </p>
                </Card>
                
                <Card className="p-8 text-center bg-gradient-to-br from-secondary/5 to-card border-border/50 hover:shadow-xl transition-all">
                  <Globe className="w-12 h-12 text-secondary mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">Adaptive Learning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Continuously improving algorithms that adapt to evolving AI detection systems and writing standards.
                  </p>
                </Card>
                
                <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-card border-border/50 hover:shadow-xl transition-all">
                  <Lock className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4">Zero-Knowledge Architecture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your data never touches a database. Once processed, it's gone, permanently. Complete privacy guaranteed.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-10 md:p-14 bg-gradient-to-br from-primary/5 via-card to-secondary/5 border-border/50 shadow-xl">
                <div className="flex gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
                  "AI Free Text Pro transformed how our content team works. The rewritten text feels so natural, our QA department couldn't tell the difference. It's become an indispensable tool for modern content creation."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    SM
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Sarah Martinez</p>
                    <p className="text-muted-foreground">Senior Content Strategist</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="relative overflow-hidden p-12 md:p-16 text-center bg-gradient-to-br from-primary via-primary to-secondary border-0 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="relative">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Ready to Transform Your Writing?
                  </h2>
                  <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join 50,000+ creators who trust AI Free Text Pro to make their words sound naturally human. Start for free today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      asChild 
                      size="lg" 
                      className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 shadow-lg"
                    >
                      <a href="/">Get Started Free</a>
                    </Button>
                    <Button 
                      asChild 
                      size="lg" 
                      variant="outline" 
                      className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-semibold text-lg px-8 py-6 backdrop-blur-sm"
                    >
                      <a href="/contact">Contact Us</a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <InternalLinks variant="full" currentPage="/about" />
      <Footer />
    </div>
  );
};

export default About;
