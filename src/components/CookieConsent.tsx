import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Never render during the Puppeteer prerender snapshot. The 1.5s timer
    // would otherwise bake the banner into the static HTML, and the client's
    // first (hydration) render shows nothing — a hydration mismatch that makes
    // React re-render the whole root (visible jank + layout shift). The
    // prerenderer injects window.__PRERENDER_INJECT__; the real client never has it.
    if (typeof window !== "undefined" && (window as Window & { __PRERENDER_INJECT__?: unknown }).__PRERENDER_INJECT__) return;
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay before showing for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-preferences", JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    }));
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    localStorage.setItem("cookie-preferences", JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div role="region" aria-label="Cookie consent" className="fixed bottom-0 left-0 right-0 z-50 p-3 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl shadow-2xl px-4 py-3">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          {/* Icon */}
          <div className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 flex-shrink-0">
            <Cookie className="w-5 h-5 text-primary" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">We value your privacy</h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience and analyze site traffic.{" "}
              <Link to="/privacy-policy" className="text-primary underline">
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 w-full md:w-auto flex-shrink-0">
            <Link to="/cookie-settings">
              <Button variant="ghost" size="sm" className="gap-1">
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Customize</span>
              </Button>
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-primary hover:bg-primary/90"
            >
              Accept All
            </Button>
          </div>

          {/* Close button */}
          <button
            onClick={handleDecline}
            className="absolute top-2 right-2 md:static p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
