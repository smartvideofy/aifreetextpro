import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Crown, Zap, Rocket } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

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
        "1,000 words/month",
        "Basic AI detection",
        "Standard humanization",
        "4 writing styles",
        "PDF export",
        "File upload (PDF, DOCX, TXT)",
        "Community support"
      ],
      cta: "Start Free",
      ctaLink: "https://app.aifreetextpro.com/",
      highlighted: false
    },
    {
      name: "Pro",
      price: "19",
      period: "month",
      annualPrice: "15.20",
      description: "Best for students, writers & professionals",
      icon: Rocket,
      iconColor: "text-secondary",
      features: [
        "30,000 words/month",
        "Advanced AI detection",
        "All humanization modes",
        "4 premium writing styles",
        "Priority processing",
        "PDF export with branding",
        "Batch processing (up to 10 files)",
        "Email support (24h response)",
        "No ads",
        "Usage analytics"
      ],
      cta: "Upgrade to Pro",
      ctaLink: "https://app.aifreetextpro.com/",
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Business",
      price: "49",
      period: "month",
      annualPrice: "39.20",
      description: "For teams and high-volume users",
      icon: Crown,
      iconColor: "text-accent",
      features: [
        "150,000 words/month",
        "Enterprise AI detection",
        "All humanization modes",
        "Custom writing styles",
        "Priority processing",
        "White-label PDF reports",
        "Unlimited batch processing",
        "API access (1,000 requests/day)",
        "Team collaboration (5 users)",
        "Priority support (2h response)",
        "Custom integrations",
        "Usage analytics & reporting"
      ],
      cta: "Upgrade to Business",
      ctaLink: "https://app.aifreetextpro.com/",
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Pricing Plans - AI Free Text Pro | Free AI Detector & Humanizer</title>
        <meta name="description" content="Choose the perfect plan for your needs. Start free with 1,000 words/month. Pro at $19/mo for 30,000 words. Business at $49/mo for 150,000 words + API access." />
        <meta name="keywords" content="ai detector pricing, ai humanizer pricing, free ai detector, ai text humanizer cost, chatgpt detector price" />
        <link rel="canonical" href="https://aifreetextpro.com/pricing" />
        <meta property="og:title" content="Pricing Plans - AI Free Text Pro" />
        <meta property="og:description" content="Start free with 1,000 words/month. Upgrade to Pro for $19/mo or Business for $49/mo." />
        <meta property="og:url" content="https://aifreetextpro.com/pricing" />
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
                <span className="text-sm font-medium">Save 20% with annual billing</span>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                      
                      {plan.annualPrice && (
                        <p className="text-sm text-primary font-medium">
                          ${plan.annualPrice}/mo billed annually
                        </p>
                      )}
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
            <div className="mt-20 max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Compare Plans</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-4 px-4 font-semibold">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold">Free</th>
                      <th className="text-center py-4 px-4 font-semibold bg-primary/5">Pro</th>
                      <th className="text-center py-4 px-4 font-semibold">Business</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-4 px-4">Monthly word limit</td>
                      <td className="text-center py-4 px-4">1,000</td>
                      <td className="text-center py-4 px-4 bg-primary/5 font-semibold">30,000</td>
                      <td className="text-center py-4 px-4">150,000</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">AI detection accuracy</td>
                      <td className="text-center py-4 px-4">Basic (95%)</td>
                      <td className="text-center py-4 px-4 bg-primary/5 font-semibold">Advanced (98%)</td>
                      <td className="text-center py-4 px-4">Enterprise (99%)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Batch processing</td>
                      <td className="text-center py-4 px-4">1 file</td>
                      <td className="text-center py-4 px-4 bg-primary/5">10 files</td>
                      <td className="text-center py-4 px-4">Unlimited</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">API access</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4 bg-primary/5">-</td>
                      <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-primary mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Team collaboration</td>
                      <td className="text-center py-4 px-4">-</td>
                      <td className="text-center py-4 px-4 bg-primary/5">-</td>
                      <td className="text-center py-4 px-4">5 users</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Support response time</td>
                      <td className="text-center py-4 px-4">Community</td>
                      <td className="text-center py-4 px-4 bg-primary/5">24 hours</td>
                      <td className="text-center py-4 px-4">2 hours</td>
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
                  <p className="text-muted-foreground text-sm">Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of your next billing cycle.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">What happens if I exceed my word limit?</h3>
                  <p className="text-muted-foreground text-sm">You'll receive a notification when you approach your limit. You can either upgrade to a higher plan or wait for your limit to reset at the start of your next billing cycle.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
                  <p className="text-muted-foreground text-sm">Yes! We offer a 100% money-back guarantee. If our humanizer is flagged by any AI detector, we'll refund you - no questions asked.</p>
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
      
      <Footer />
    </div>
  );
};

export default Pricing;
