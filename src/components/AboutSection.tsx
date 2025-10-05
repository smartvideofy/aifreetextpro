import { Card } from "@/components/ui/card";
import { Zap, Target, Shield, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About AI Free Text Pro
          </h2>
          <p className="text-lg text-muted-foreground">
            AI Free Text Pro helps you detect and rewrite AI-generated text into human-like content 
            with unmatched accuracy and privacy. Our advanced algorithms ensure your content feels 
            natural, authentic, and passes all AI detection tests.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Get results in seconds. No waiting, no hassle.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">98% Accurate</h3>
            <p className="text-muted-foreground">
              Industry-leading detection and humanization accuracy.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
            <p className="text-muted-foreground">
              Your content is never stored or shared. Ever.
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg italic mb-2">
                "AI Free Text Pro has been a game-changer for our content team. The humanization 
                is so natural that even we can't tell the difference. Highly recommended!"
              </p>
              <p className="text-sm text-muted-foreground">
                — Sarah M., Content Manager
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
