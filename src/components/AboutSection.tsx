import { Card } from "@/components/ui/card";
import { Zap, Target, Shield, Star, Globe, Cpu, Heart, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 space-y-24">
        {/* ====== 1. INTRODUCTION / BRAND STORY ====== */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About AI Free Text Pro</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong>AI Free Text Pro</strong> was born from a simple idea:
            <em> powerful AI should enhance human creativity, not replace it.</em>
            We built a platform that transforms AI-generated text into natural, engaging writing that feels uniquely
            human — without compromising integrity or privacy. Whether you’re a student, researcher, marketer, or
            creator, AI Free Text Pro helps your words regain their human touch.
          </p>
        </div>

        {/* ====== 2. MISSION SECTION ====== */}
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To bridge the gap between artificial intelligence and authentic expression — empowering individuals to write
            freely, confidently, and undetected in an increasingly automated world. We believe in responsible AI use,
            digital privacy, and helping humans reclaim their voice in the age of algorithms.
          </p>
        </div>

        {/* ====== 3. CORE FEATURES ====== */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12">Why Writers Choose AI Free Text Pro</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Generate humanized content in seconds. No waiting, no queues — just instant transformation.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unmatched Precision</h3>
              <p className="text-muted-foreground">
                With <strong>98% rewriting accuracy</strong> and advanced detection avoidance, your text stays genuine
                and credible — every single time.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <p className="text-muted-foreground">
                We never store, log, or share your content. Your words belong to you — and no one else.
              </p>
            </Card>
          </div>
        </div>

        {/* ====== 4. TECHNOLOGY SECTION ====== */}
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Powered by Advanced AI Technology</h3>
          <p className="text-lg text-muted-foreground mb-10">
            AI Free Text Pro uses proprietary algorithms trained on diverse linguistic patterns, allowing it to
            distinguish subtle human nuances in tone, rhythm, and structure. Our adaptive model learns from style, not
            content — ensuring data security while continuously improving.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <Cpu className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Smart Linguistic Rewriting</h4>
              <p className="text-muted-foreground">
                Mimics authentic writing styles using context-aware paraphrasing and sentence restructuring.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Global-Ready Design</h4>
              <p className="text-muted-foreground">
                Built to understand diverse linguistic cues and writing standards — perfect for international users.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Zero Data Retention</h4>
              <p className="text-muted-foreground">
                Your data never touches a database. Once processed, it’s gone — permanently.
              </p>
            </Card>
          </div>
        </div>

        {/* ====== 5. BRAND VALUES ====== */}
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Heart className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h4 className="text-lg font-semibold mb-2">Integrity</h4>
              <p className="text-muted-foreground">
                We believe transparency builds trust. That’s why we never manipulate your data or compromise ethical AI
                use.
              </p>
            </Card>

            <Card className="p-6">
              <Users className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h4 className="text-lg font-semibold mb-2">Community</h4>
              <p className="text-muted-foreground">
                We grow by listening. Our users guide every major improvement and feature through honest feedback and
                collaboration.
              </p>
            </Card>

            <Card className="p-6">
              <Target className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h4 className="text-lg font-semibold mb-2">Innovation</h4>
              <p className="text-muted-foreground">
                We constantly refine our models to stay ahead of AI detection systems — ensuring our users always lead
                the curve.
              </p>
            </Card>
          </div>
        </div>

        {/* ====== 6. TESTIMONIAL ====== */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg italic mb-2 leading-relaxed">
                "AI Free Text Pro transformed how our team works. The rewritten content feels so natural, our QA
                department couldn’t tell the difference. It’s an indispensable tool for modern writing."
              </p>
              <p className="text-sm text-muted-foreground">— Sarah M., Senior Content Strategist</p>
            </div>
          </div>
        </Card>

        {/* ====== 7. CALL TO ACTION ====== */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Experience Humanized AI Writing?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Try AI Free Text Pro today and see why thousands of creators trust us to make their words sound naturally
            human.
          </p>
          <a
            href="https://app.aifreetextpro.com/"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition shadow-lg"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
