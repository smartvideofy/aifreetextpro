import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChevronRight, ArrowLeft, FileText } from "lucide-react";
import { findHelpCollection } from "@/data/helpCollections";
import { Button } from "@/components/ui/button";

const HelpCollection = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  
  const collection = findHelpCollection(collectionId);

  if (!collection) {
    return <Navigate to="/help-center" replace />;
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Help Center", href: "/help-center" },
    { label: collection.title, href: `/help-center/${collection.id}` },
  ];

  const IconComponent = collection.icon;

  // Generate ItemList schema for articles
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${collection.title} - Help Center`,
    "description": collection.description,
    "url": `https://aifreetextpro.com/help-center/${collection.id}`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": collection.articles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": article.title,
        "description": article.description,
        "url": `https://aifreetextpro.com/help-center/${collection.id}/${article.slug}`
      }))
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Free Text Pro",
      "url": "https://aifreetextpro.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>{collection.title} - Help Center | AI Free Text Pro</title>
        <meta name="description" content={collection.description} />
        <link rel="canonical" href={`https://aifreetextpro.com/help-center/${collection.id}`} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />
        <meta name="bingbot" content="index, follow" />
        <meta property="og:title" content={`${collection.title} - Help Center | AI Free Text Pro`} />
        <meta property="og:description" content={collection.description} />
        <meta property="og:url" content={`https://aifreetextpro.com/help-center/${collection.id}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${collection.title} - Help Center`} />
        <meta name="twitter:description" content={collection.description} />
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Back Button */}
          <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
            <Link to="/help-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Link>
          </Button>

          {/* Header */}
          <div className="flex items-start gap-4 mb-10">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <IconComponent className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{collection.title}</h1>
              <p className="text-muted-foreground">{collection.description}</p>
            </div>
          </div>

          {/* Articles Count */}
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mb-6">
            {collection.articles.length} Articles
          </p>

          {/* Articles List */}
          <div className="space-y-3">
            {collection.articles.map((article, index) => (
              <Link
                key={article.slug}
                to={`/help-center/${collection.id}/${article.slug}`}
                className="group flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {article.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HelpCollection;
