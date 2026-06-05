import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Crown, Zap, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { InternalLinks } from "@/components/InternalLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import pricingHero from "@/assets/pricing-hero.png";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Perfect for trying out AI Free Text Pro",
      icon: Zap,
      iconColor: "text-primary",
      features: [
        "1,000 words per month",
        "Basic AI detection",
        "Basic humanization",
        "Email support"
      ],
      cta: "Get Started",
      ctaLink: "https://app.aifreetextpro.com/",
      highlighted: false
    },
    {
      name: "Starter",
      price: "4.99",
      period: "month",
      description: "Great for occasional users",
      icon: Zap,
      iconColor: "text-primary",
      features: [
        "5,000 words per month",
        "Advanced AI detection",
        "Advanced humanization",
        "Priority email support",
        "Export reports (PDF)"
      ],
      cta: "Subscribe Now",
      ctaLink: "https://app.aifreetextpro.com/",
      highlighted: false
    },
    {
      name: "Lite",
      price: "9.99",
      period: "month",
      description: "Perfect for regular content creators",
      icon: Zap,
      iconColor: "text-primary",
      features: [
        "10,000 words per month",
        "Advanced AI detection",
        "Advanced humanization",
        "Priority email support",
        "Export reports (PDF)"
      ],
      cta: "Subscribe Now",
      ctaLink: "https://app.aifreetextpro.com/",
      highlighted: false
    },
    {
      name: "Pro Writer",
      price: "24.99",
      period: "month",
      description: "Best for students, writers & professionals",
      icon: Sparkles,
      iconColor: "text-primary",
      features: [
        "50,000 words per month",
        "Premium AI detection",
        "Premium humanization",
        "Priority support",
        "Export reports (PDF)",
        "Advanced analytics",
        "REST API access"
      ],
      cta: "Subscribe Now",
      ctaLink: "https://app.aifreetextpro.com/",
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Unlimited Creator",
      price: "59.99",
      period: "month",
      description: "For high-volume users and teams",
      icon: Crown,
      iconColor: "text-primary",
      features: [
        "Unlimited words",
        "Premium AI detection",
        "Premium humanization",
        "24/7 Priority support",
        "Export reports (PDF)",
        "Advanced analytics",
        "Dedicated account manager",
        "REST API access (higher limits)"
      ],
      cta: "Subscribe Now",
      ctaLink: "https://app.aifreetextpro.com/",
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Pricing: Free Forever Plan + Paid From $4.99/mo</title>
        <meta name="description" content="Free forever: 1,000 words/month, no credit card. Paid plans from $4.99/mo with unlimited AI detection and humanization. 100% money-back guarantee." />
        <meta name="keywords" content="ai detector pricing, ai humanizer pricing, free ai detector, ai text humanizer cost, chatgpt detector price" />
        <link rel="canonical" href="https://aifreetextpro.com/pricing" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="AI Humanizer Pricing: Free Plan + Plans From $4.99" />
        <meta property="og:description" content="Free plan with 1,000 words/month. Paid from $4.99. Money-back guarantee." />
        <meta property="og:url" content="https://aifreetextpro.com/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aifreetextpro" />
        <meta name="twitter:title" content="AI Humanizer Pricing: Free Plan + Plans From $4.99" />
        <meta name="twitter:description" content="Free plan with 1,000 words/month. Paid from $4.99. Money-back guarantee." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can I change plans anytime?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of your next billing cycle."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if I exceed my word limit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You'll receive a notification when you approach your limit. You can either upgrade to a higher plan or wait for your limit to reset at the start of your next billing cycle."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer refunds?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We offer a 100% money-back guarantee. If our humanizer is flagged by any AI detector, we'll refund you - no questions asked."
                }
              }
            ]
          })}
        </script>

        {/* Product Schema with pricing tiers */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "AI Free Text Pro",
            "description": "AI detection and humanization tool with plans from free to unlimited.",
            "brand": { "@type": "Brand", "name": "AI Free Text Pro" },
            "url": "https://aifreetextpro.com/pricing",
            "image": "https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG",
            "offers": [
              {
                "@type": "Offer",
                "name": "Free Plan",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "description": "1,000 words/month with basic AI detection and humanization",
                "url": "https://app.aifreetextpro.com/"
              },
              {
                "@type": "Offer",
                "name": "Starter Plan",
                "price": "4.99",
                "priceCurrency": "USD",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "description": "5,000 words/month with advanced features and PDF export",
                "url": "https://app.aifreetextpro.com/"
              },
              {
                "@type": "Offer",
                "name": "Lite Plan",
                "price": "9.99",
                "priceCurrency": "USD",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "description": "10,000 words/month with advanced detection and humanization",
                "url": "https://app.aifreetextpro.com/"
              },
              {
                "@type": "Offer",
                "name": "Pro Writer",
                "price": "24.99",
                "priceCurrency": "USD",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "description": "50,000 words/month with premium features and API access",
                "url": "https://app.aifreetextpro.com/"
              },
              {
                "@type": "Offer",
                "name": "Unlimited Creator",
                "price": "59.99",
                "priceCurrency": "USD",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "description": "Unlimited words with dedicated account manager and full API access",
                "url": "https://app.aifreetextpro.com/"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1247",
              "bestRating": "5"
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Pricing" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Choose the perfect plan for your needs. All plans include our powerful AI detector and humanizer.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">All plans billed monthly. Cancel anytime.</span>
              </div>
              
              {/* Pricing Hero Image */}
              <div className="mt-10">
                <img 
                  src={pricingHero} 
                  alt="Pricing tiers visualization showing value progression" 
                  className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Choose Your Plan</h2>
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">

              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <Card 
                    key={plan.name}
                    className={`relative p-8 ${
                      plan.highlighted 
                        ? 'border-2 border-primary shadow-xl shadow-primary/20 scale-105' 
                        : 'border border-border'
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                          {plan.badge}
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                        plan.highlighted ? 'from-primary to-secondary' : 'from-muted to-muted/50'
                      } flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`w-8 h-8 ${plan.highlighted ? 'text-white' : plan.iconColor}`} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                      
                      <div className="mb-2">
                        <span className="text-5xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a href={plan.ctaLink} className="block">
                      <Button 
                        className={`w-full ${
                          plan.highlighted 
                            ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                            : ''
                        }`}
                        variant={plan.highlighted ? 'default' : 'outline'}
                        size="lg"
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* Comparison Table */}
            <div className="mt-20 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Compare Plans</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-4 px-4 font-semibold">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold">Free</th>
                      <th className="text-center py-4 px-4 font-semibold">Starter</th>
                      <th className="text-center py-4 px-4 font-semibold">Lite</th>
                      <th className="text-center py-4 px-4 font-semibold bg-primary/5">Pro Writer</th>
                      <th className="text-center py-4 px-4 font-semibold">Unlimited</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-4 px-4">Monthly word limit</td>
                      <td className="text-center py-4 px-4">1,000</td>
                      <td className="text-center py-4 px-4">5,000</td>
                      <td className="text-center py-4 px-4">10,000</td>
                      <td className="text-center py-4 px-4 bg-primary/5 font-semibold">50,000</td>
                      <td className="text-center py-4 px-4">Unlimited</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">AI detection</td>
                      <td className="text-center py-4 px-4">Basic</td>
                      <td className="text-center py-4 px-4">Advanced</td>
                      <td className="text-center py-4 px-4">Advanced</td>
                      <td className="text-center py-4 px-4 bg-primary/5 font-semibold">Premium</td>
                      <td className="text-center py-4 px-4">Premium</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Humanization</td>
                      <td className="text-center py-4 px-4">Basic</td>
                      <td className="text-center py-4 px-4">Advanced</td>
                      <td className="text-center py-4 px-4">Advanced</td>
                      <td className="text-center py-4 px-4 bg-primary/5 font-semibold">Premium</td>
                      <td className="text-center py-4 px-4">Premium</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">PDF Export</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-primary mx-auto" /></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-primary mx-auto" /></td>
                      <td className="text-center py-4 px-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-primary mx-auto" /></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-primary mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Analytics</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4 bg-primary/5"><CheckCircle className="w-5 h-5 text-primary mx-auto" /></td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-primary mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Support</td>
                      <td className="text-center py-4 px-4">Email</td>
                      <td className="text-center py-4 px-4">Priority</td>
                      <td className="text-center py-4 px-4">Priority</td>
                      <td className="text-center py-4 px-4 bg-primary/5">Priority</td>
                      <td className="text-center py-4 px-4">24/7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-20 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Pricing FAQs</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
                  <p className="text-muted-foreground text-sm">Yes! You can upgrade, downgrade, or cancel your subscription at any time. To cancel, go to Settings, then Manage Subscription, and select Cancel Subscription. Changes take effect at the start of your next billing cycle.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">What happens if I exceed my word limit?</h3>
                  <p className="text-muted-foreground text-sm">You'll receive a notification when you approach your limit. You can either upgrade to a higher plan or wait for your limit to reset at the start of your next billing cycle.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
                  <p className="text-muted-foreground text-sm">Refunds are generally not provided. In exceptional circumstances, refunds may be considered at our discretion after review. You can cancel your subscription anytime from Settings &gt; Manage Subscription &gt; Cancel Subscription.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground text-sm">We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. All payments are securely processed.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <InternalLinks variant="full" currentPage="/pricing" />
      <Footer />
    </div>
  );
};

export default Pricing;
