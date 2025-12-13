import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In production, this would submit to an email service
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-10 md:py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-5 md:p-12 bg-gradient-to-br from-primary/5 via-card to-secondary/5 border-primary/20">
          {!isSubmitted ? (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-3 md:space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                  Free Resource
                </div>
                <h2 className="text-xl md:text-3xl font-bold">
                  Master AI Content Detection
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Get our exclusive weekly newsletter with expert tips and humanization strategies.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    Weekly AI detection updates
                  </li>
                  <li className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    Exclusive bypass techniques
                  </li>
                  <li className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                    Early access to new features
                  </li>
                </ul>
              </div>

              <div className="space-y-3 md:space-y-4">
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-9 md:pl-10 py-5 md:py-6 text-sm"
                    />
                  </div>
                  <Button type="submit" className="w-full py-5 md:py-6 bg-gradient-to-r from-primary to-secondary font-semibold group text-sm md:text-base">
                    Subscribe Free
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
                <p className="text-[10px] md:text-xs text-center text-muted-foreground">
                  Join 15,000+ writers. No spam, unsubscribe anytime.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 md:py-8 space-y-3 md:space-y-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary">You're In!</h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
                Check your inbox for a confirmation email. Your first newsletter with exclusive AI tips will arrive soon!
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSignup;
