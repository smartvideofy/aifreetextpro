import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Cookie, Shield, BarChart3, Target, Settings } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  functional: false,
};

const CookieSettings = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-preferences");
    if (saved) {
      try {
        setPreferences(JSON.parse(saved));
      } catch {
        setPreferences(defaultPreferences);
      }
    }
  }, []);

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === "essential") return; // Essential cookies cannot be disabled
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    localStorage.setItem("cookie-consent", "customized");
    toast({
      title: "Preferences Saved",
      description: "Your cookie preferences have been updated successfully.",
    });
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookie-preferences", JSON.stringify(allAccepted));
    localStorage.setItem("cookie-consent", "accepted");
    toast({
      title: "All Cookies Accepted",
      description: "You have accepted all cookies.",
    });
  };

  const handleRejectAll = () => {
    const allRejected: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(allRejected);
    localStorage.setItem("cookie-preferences", JSON.stringify(allRejected));
    localStorage.setItem("cookie-consent", "declined");
    toast({
      title: "Optional Cookies Rejected",
      description: "Only essential cookies will be used.",
    });
  };

  const cookieTypes = [
    {
      key: "essential" as const,
      title: "Essential Cookies",
      description:
        "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot disable these cookies.",
      icon: Shield,
      required: true,
    },
    {
      key: "analytics" as const,
      title: "Analytics Cookies",
      description:
        "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.",
      icon: BarChart3,
      required: false,
    },
    {
      key: "marketing" as const,
      title: "Marketing Cookies",
      description:
        "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users.",
      icon: Target,
      required: false,
    },
    {
      key: "functional" as const,
      title: "Functional Cookies",
      description:
        "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings. They may be set by us or by third-party providers.",
      icon: Settings,
      required: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Settings | AI Free Text Pro</title>
        <meta
          name="description"
          content="Manage your cookie preferences on AI Free Text Pro. Control which cookies are used to personalize your experience."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://aifreetextpro.com/cookie-settings" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container max-w-3xl mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            className="mb-6 gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Cookie className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Cookie Settings
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We use cookies to enhance your browsing experience. You can customize your
              preferences below. For more information, please read our{" "}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button onClick={handleAcceptAll} className="flex-1">
              Accept All Cookies
            </Button>
            <Button onClick={handleRejectAll} variant="outline" className="flex-1">
              Reject Optional Cookies
            </Button>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-4 mb-8">
            {cookieTypes.map((cookie) => (
              <Card key={cookie.key} className="border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <cookie.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{cookie.title}</CardTitle>
                        {cookie.required && (
                          <span className="text-xs text-muted-foreground">
                            Always active
                          </span>
                        )}
                      </div>
                    </div>
                    <Switch
                      checked={preferences[cookie.key]}
                      onCheckedChange={() => handleToggle(cookie.key)}
                      disabled={cookie.required}
                      aria-label={`Toggle ${cookie.title}`}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {cookie.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <Button onClick={handleSave} size="lg" className="px-8">
              Save Preferences
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-muted/50 rounded-xl">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              About Our Cookie Usage
            </h2>
            <div className="text-sm text-muted-foreground space-y-3">
              <p>
                Cookies are small text files that are stored on your device when you visit
                our website. They help us provide you with a better experience by
                remembering your preferences and understanding how you use our site.
              </p>
              <p>
                You can change your cookie preferences at any time by returning to this
                page. Please note that restricting cookies may impact your experience on
                our website.
              </p>
              <p>
                For questions about our cookie policy, please{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CookieSettings;
