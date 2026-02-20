import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Shield } from "lucide-react";

const STICKY_CTA_HEIGHT = 44; // Height in pixels for navbar offset

const StickyHeaderCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Notify navbar about visibility state and adjust body padding
  useEffect(() => {
    const isActive = isVisible && !isDismissed;
    document.body.setAttribute('data-sticky-cta', isActive ? 'visible' : 'hidden');
    
    // Add top padding to body to prevent content jump
    if (isActive) {
      document.body.style.paddingTop = `${STICKY_CTA_HEIGHT}px`;
    } else {
      document.body.style.paddingTop = '0px';
    }
    
    return () => {
      document.body.removeAttribute('data-sticky-cta');
      document.body.style.paddingTop = '0px';
    };
  }, [isVisible, isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary to-secondary text-primary-foreground py-2 px-3 md:px-4 animate-in slide-in-from-top duration-300 shadow-lg"
      style={{ height: `${STICKY_CTA_HEIGHT}px` }}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden md:flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">100% Money-Back Guarantee</span>
          </div>
          <span className="hidden lg:inline text-sm opacity-90">•</span>
          <p className="text-xs md:text-sm font-medium">
            <span className="hidden sm:inline">Transform AI content to 100% human text</span>
            <span className="sm:hidden">AI to human text</span>
          </p>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <a href="https://app.aifreetextpro.com/">
            <Button 
              size="sm" 
              variant="secondary" 
              className="bg-background text-foreground hover:bg-background/90 font-semibold shadow-md text-xs md:text-sm px-3 md:px-4 min-h-[44px] min-w-[44px]"
            >
              <span className="hidden sm:inline">Try Free Now</span>
              <span className="sm:hidden">Try Free</span>
              <ArrowRight className="ml-1 md:ml-2 h-3 w-3" />
            </Button>
          </a>
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8 min-h-[44px] min-w-[44px] text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyHeaderCTA;
