import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, Gift, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !hasTriggered) {
      // Check if already dismissed in this session
      const dismissed = sessionStorage.getItem('exitPopupDismissed');
      if (!dismissed) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    }
  }, [hasTriggered]);

  useEffect(() => {
    // Only add listener on desktop
    if (window.innerWidth < 768) return;
    
    // Delay before enabling exit intent
    const timeout = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('exitPopupDismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In production, this would submit to an email service
      setIsSubmitted(true);
      setTimeout(() => {
        handleDismiss();
      }, 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
      <Card className="relative max-w-lg w-full p-8 shadow-2xl border-primary/20">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 h-8 w-8"
          onClick={handleDismiss}
          aria-label="Close popup"
        >
          <X className="h-4 w-4" />
        </Button>

        {!isSubmitted ? (
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto">
              <Gift className="w-8 h-8 text-primary" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Wait! Don't Leave Empty-Handed</h2>
              <p className="text-muted-foreground">
                Get our exclusive guide: <span className="font-semibold text-foreground">"10 Secrets to Make AI Content Undetectable"</span> — absolutely free!
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Bypass Turnitin, GPTZero & more</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Step-by-step humanization techniques</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Pro tips from AI detection experts</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-center"
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary font-semibold group">
                <Sparkles className="mr-2 h-4 w-4" />
                Get Free Guide
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <p className="text-xs text-muted-foreground">
              No spam. Unsubscribe anytime. By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        ) : (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-primary">Check Your Inbox!</h2>
              <p className="text-muted-foreground">
                Your free guide is on its way. Check your email to access "10 Secrets to Make AI Content Undetectable".
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ExitIntentPopup;
