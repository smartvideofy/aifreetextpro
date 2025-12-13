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
    <section className="py-16 md:py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 via-card to-secondary/5 border-primary/20">
          {!isSubmitted ? (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Free Resource
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Master AI Content Detection
                </h2>
                <p className="text-muted-foreground">
                  Get our exclusive weekly newsletter with expert tips, new detector updates, and humanization strategies delivered straight to your inbox.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Weekly AI detection updates
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Exclusive bypass techniques
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Early access to new features
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 py-6"
                    />
                  </div>
                  <Button type="submit" className="w-full py-6 bg-gradient-to-r from-primary to-secondary font-semibold group">
                    Subscribe Free
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
                <p className="text-xs text-center text-muted-foreground">
                  Join 15,000+ writers. No spam, unsubscribe anytime.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">You're In!</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
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
