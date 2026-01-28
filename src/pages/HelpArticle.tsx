import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowLeft, ThumbsUp, ThumbsDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { articleContent, collectionNames } from "@/data/helpArticles";

const HelpArticle = () => {
  const { collectionId, articleSlug } = useParams<{ collectionId: string; articleSlug: string }>();
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);

  if (!collectionId || !articleSlug) {
    return <Navigate to="/help-center" replace />;
  }

  const collectionContent = articleContent[collectionId];
  if (!collectionContent) {
    return <Navigate to="/help-center" replace />;
  }

  const article = collectionContent[articleSlug];
  if (!article) {
    return <Navigate to={`/help-center/${collectionId}`} replace />;
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Help Center", href: "/help-center" },
    { label: collectionNames[collectionId] || collectionId, href: `/help-center/${collectionId}` },
    { label: article.title, href: `/help-center/${collectionId}/${articleSlug}` },
  ];

  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedbackGiven(type);
    toast.success(type === "helpful" ? "Thanks for your feedback!" : "Sorry to hear that. We'll work on improving this article.");
  };

  return (
    <>
      <Helmet>
        <title>{article.title} - Help Center | AI Free Text Pro</title>
        <meta name="description" content={`Learn about ${article.title.toLowerCase()} in AI Free Text Pro. Step-by-step guide and troubleshooting tips.`} />
        <link rel="canonical" href={`https://aifreetextpro.com/help-center/${collectionId}/${articleSlug}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Back Button */}
          <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
            <Link to={`/help-center/${collectionId}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {collectionNames[collectionId]}
            </Link>
          </Button>

          {/* Article Header */}
          <h1 className="text-2xl md:text-3xl font-bold mb-8">{article.title}</h1>

          {/* Article Content */}
          <div className="mb-12">
            {article.content}
          </div>

          {/* Feedback Section */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-4">Was this article helpful?</p>
            <div className="flex gap-3">
              <Button
                variant={feedbackGiven === "helpful" ? "default" : "outline"}
                size="sm"
                onClick={() => handleFeedback("helpful")}
                disabled={feedbackGiven !== null}
              >
                <ThumbsUp className="w-4 h-4 mr-2" />
                Yes
              </Button>
              <Button
                variant={feedbackGiven === "not-helpful" ? "default" : "outline"}
                size="sm"
                onClick={() => handleFeedback("not-helpful")}
                disabled={feedbackGiven !== null}
              >
                <ThumbsDown className="w-4 h-4 mr-2" />
                No
              </Button>
            </div>
          </div>

          {/* Contact Support CTA */}
          <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border/50">
            <h3 className="font-semibold mb-2">Still need help?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Our support team is available to assist you with any questions.
            </p>
            <Button asChild size="sm">
              <Link to="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HelpArticle;
