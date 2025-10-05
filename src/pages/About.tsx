import { Target, Zap, Shield, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-card/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About AI Free Text Pro
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Making AI text detection and humanization accessible to everyone
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At AI Free Text Pro, we believe in empowering writers, students, and professionals with powerful tools to navigate the evolving landscape of AI-generated content. Our mission is to provide accurate, fast, and privacy-focused solutions that help you detect AI patterns and transform robotic text into authentic human voice.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're a content creator ensuring originality, a student maintaining academic integrity, or a professional refining AI-assisted drafts, AI Free Text Pro gives you the confidence to produce genuine, human-like content.
                </p>
              </div>

              {/* Core Values */}
              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4 p-6 rounded-xl bg-card/50 border border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Accuracy First</h3>
                  <p className="text-muted-foreground">
                    We use advanced AI models to deliver 98% accuracy in detection and natural humanization that passes rigorous testing.
                  </p>
                </div>

                <div className="space-y-4 p-6 rounded-xl bg-card/50 border border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Speed & Simplicity</h3>
                  <p className="text-muted-foreground">
                    Get instant results with a clean, intuitive interface. No complicated setup or learning curve required.
                  </p>
                </div>

                <div className="space-y-4 p-6 rounded-xl bg-card/50 border border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Privacy Focused</h3>
                  <p className="text-muted-foreground">
                    Your text is processed securely and never stored. We respect your privacy and protect your content.
                  </p>
                </div>

                <div className="space-y-4 p-6 rounded-xl bg-card/50 border border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Free Forever</h3>
                  <p className="text-muted-foreground">
                    Core functionality remains free for everyone. We're committed to making these tools accessible to all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI Free Text Pro was born from a simple observation: as AI writing tools became more prevalent, there was a growing need for reliable detection and humanization services that were both accurate and accessible.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We built AI Free Text Pro to bridge this gap, combining cutting-edge AI technology with a user-first approach. Today, we're trusted by over 50,000 users worldwide who rely on our tools for their content needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As AI continues to evolve, so do we. We're constantly improving our detection algorithms and humanization quality to stay ahead of the curve and provide you with the best possible service.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6 p-8 md:p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a 
                  href="mailto:support@aifreetextpro.com"
                  className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
