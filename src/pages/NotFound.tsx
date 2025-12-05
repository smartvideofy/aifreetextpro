import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Home, Search, FileText, HelpCircle, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const suggestedPages = [
    {
      icon: Home,
      title: "Homepage",
      description: "Start with our AI detector and humanizer tools",
      href: "/"
    },
    {
      icon: Search,
      title: "AI Checker",
      description: "Detect AI-generated content with 98% accuracy",
      href: "/ai-checker"
    },
    {
      icon: FileText,
      title: "Blog",
      description: "Tips, guides, and resources for AI writing",
      href: "/blog"
    },
    {
      icon: HelpCircle,
      title: "Contact Us",
      description: "Get help from our support team",
      href: "/contact"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Page Not Found - AI Free Text Pro</title>
        <meta name="description" content="The page you're looking for doesn't exist. Browse our AI detection and humanization tools, blog, or contact support." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://aifreetextpro.com/" />
      </Helmet>

      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* 404 Display */}
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">404</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Sorry, we couldn't find the page you're looking for. It may have been moved, deleted, or never existed.
              </p>
              <Link to="/">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Homepage
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Suggested Pages */}
            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-6">Maybe you were looking for:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {suggestedPages.map((page, idx) => (
                  <Link key={idx} to={page.href}>
                    <Card className="p-4 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <page.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-semibold mb-1">{page.title}</h4>
                          <p className="text-sm text-muted-foreground">{page.description}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Tools */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">Or try our popular tools:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="https://app.aifreetextpro.com/detector">
                  <Button variant="outline" size="sm">AI Detector</Button>
                </a>
                <a href="https://app.aifreetextpro.com/humanizer">
                  <Button variant="outline" size="sm">AI Humanizer</Button>
                </a>
                <Link to="/bypass-turnitin-ai-detection">
                  <Button variant="outline" size="sm">Bypass Turnitin</Button>
                </Link>
                <Link to="/bypass-gptzero-detection">
                  <Button variant="outline" size="sm">Bypass GPTZero</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;