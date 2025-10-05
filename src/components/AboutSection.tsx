import { Card } from "@/components/ui/card";
import { Shield, Zap, Target } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get results in seconds with our optimized AI detection and humanization algorithms."
    },
    {
      icon: Target,
      title: "98% Accurate",
      description: "Industry-leading accuracy tested on thousands of text samples across multiple domains."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your text is never stored. All processing happens securely and is deleted immediately after."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        {/* About Text */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Free Text Pro</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            AI Free Text Pro is a powerful, free tool that helps you detect AI-generated content and transform it into natural, 
            human-like writing. Whether you're a student, writer, marketer, or professional, our advanced AI technology ensures 
            your content sounds authentic and passes AI detection systems.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Us?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={idx} 
                  className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Testimonial Placeholder */}
        <Card className="p-8 bg-gradient-to-br from-card to-card/80 backdrop-blur border-primary/20 mt-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p className="text-lg italic text-muted-foreground">
              "AI Free Text Pro has been a game-changer for my content workflow. The humanization feature is incredibly 
              natural, and the AI detector gives me confidence in my work. Highly recommended!"
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
              <div className="text-left">
                <p className="font-semibold text-sm">Sarah Mitchell</p>
                <p className="text-xs text-muted-foreground">Content Marketing Manager</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
