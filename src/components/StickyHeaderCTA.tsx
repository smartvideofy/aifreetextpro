import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const StickyHeaderCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (roughly 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary to-secondary text-primary-foreground py-2 px-4 animate-in slide-in-from-top duration-300">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm font-medium hidden sm:block">
          Transform your AI content to 100% human-written text
        </p>
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <a href="https://app.aifreetextpro.com/" className="flex-1 sm:flex-none">
            <Button 
              size="sm" 
              variant="secondary" 
              className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90"
            >
              Try Free Now <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </a>
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsDismissed(true)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyHeaderCTA;
