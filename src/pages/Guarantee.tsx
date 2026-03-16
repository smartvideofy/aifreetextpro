import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, CheckCircle, ArrowRight, Settings, Mail, HelpCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

const Guarantee = () => {
  const steps = [
    {
      icon: Settings,
      title: "Cancel Your Subscription",
      description: "Go to Settings, then Manage Subscription, and select Cancel Subscription. Your access continues until the end of your current billing period."
    },
    {
      icon: HelpCircle,
      title: "Need Help? Contact Support",
      description: "If you are experiencing a specific issue with our service, reach out to support@aifreetextpro.com and our team will review your case."
    },
    {
      icon: Mail,
      title: "Resolution Review",
      description: "Our team will review your inquiry and work with you to find the best resolution. Refunds may be issued at our discretion in exceptional circumstances."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>100% Money-Back Guarantee | AI Free Text Pro</title>
        <meta name="description" content="If our AI humanizer gets flagged, you get a full refund. No questions asked. Learn about our guarantee, cancellation, and 24h support." />
        <meta name="keywords" content="satisfaction guarantee, cancellation policy, ai humanizer support, service guarantee" />
        <link rel="canonical" href="https://aifreetextpro.com/guarantee" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="Satisfaction Guarantee - AI Free Text Pro" />
        <meta property="og:description" content="We stand behind our AI humanization technology. Learn about our satisfaction guarantee and support options." />
        <meta property="og:url" content="https://aifreetextpro.com/guarantee" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aifreetextpro" />
        <meta name="twitter:title" content="Satisfaction Guarantee - AI Free Text Pro" />
        <meta name="twitter:description" content="We stand behind our AI humanization technology. Learn about our satisfaction guarantee and support options." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I cancel my subscription?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go to Settings, then Manage Subscription, and select Cancel Subscription. Your access continues until the end of your current billing period."
                }
              },
              {
                "@type": "Question",
                "name": "Are refunds available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Refunds are generally not provided. In exceptional circumstances, refunds may be issued at the sole discretion of AI Free Text Pro after a review of your specific situation. Contact support@aifreetextpro.com to discuss."
                }
              },
              {
                "@type": "Question",
                "name": "What happens when I cancel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You retain full access to your paid plan features until the end of your current billing period. After that, your account reverts to the Free plan. You keep your account and history."
                }
              },
              {
                "@type": "Question",
                "name": "Can I re-subscribe after canceling?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can re-subscribe to any paid plan at any time from your account settings."
                }
              },
              {
                "@type": "Question",
                "name": "How do I contact support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Email us at support@aifreetextpro.com or use our contact form. We respond within 24 hours on business days."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Satisfaction Guarantee" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-lg font-bold">Satisfaction Guarantee</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                We Stand Behind Our Technology
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                AI Free Text Pro is built with confidence in our humanization technology. If you experience any issues, our dedicated support team is here to help find the best resolution.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Easy Cancellation</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Dedicated Support</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>24-Hour Response</span>
                </div>
              </div>
            </div>

            {/* The Guarantee */}
            <Card className="p-8 md:p-12 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed">
                  We are confident in the quality of our AI humanization technology and continuously work to deliver the best results. If you encounter any issues with our service, our support team is available to assist you and work toward a resolution.
                </p>
                <p className="text-lg leading-relaxed">
                  You can cancel your subscription at any time directly from your account settings. If you believe there is a specific issue that warrants further review, our team is happy to look into it on a case-by-case basis.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* How to Cancel or Get Support */}
        <section className="py-20 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Cancel or Request Support</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Managing your subscription is simple and straightforward
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="p-6 relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                      {index + 1}
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mt-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Policy Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Policy Details</h2>
              
              <Card className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Settings className="w-6 h-6 text-primary" />
                      Cancellation
                    </h3>
                    <ul className="space-y-2 text-muted-foreground ml-8">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">-</span>
                        <span>Cancel anytime from <strong>Settings &gt; Manage Subscription &gt; Cancel Subscription</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">-</span>
                        <span>You retain access to paid features until the end of your current billing period</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">-</span>
                        <span>After your billing period ends, your account reverts to the Free plan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">-</span>
                        <span>You can re-subscribe at any time</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-primary" />
                      Refund Policy
                    </h3>
                    <ul className="space-y-2 text-muted-foreground ml-8">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">-</span>
                        <span>Refunds are generally not provided</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">-</span>
                        <span>In exceptional circumstances, refunds may be issued at the sole discretion of AI Free Text Pro after review</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">-</span>
                        <span>To request a review, contact <strong>support@aifreetextpro.com</strong> with details about your issue</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">-</span>
                        <span>Billing errors or duplicate charges will be corrected promptly</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HelpCircle className="w-6 h-6 text-primary" />
                      Support
                    </h3>
                    <ul className="space-y-2 text-muted-foreground ml-8">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">-</span>
                        <span>Email: <strong>support@aifreetextpro.com</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">-</span>
                        <span>Response time: Within 24 hours on business days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">-</span>
                        <span>We are committed to resolving any concerns you may have</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-bold mb-2">How do I cancel my subscription?</h3>
                  <p className="text-muted-foreground text-sm">
                    Go to Settings, then Manage Subscription, and select Cancel Subscription. Your paid features remain active until the end of your current billing period.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold mb-2">Are refunds available?</h3>
                  <p className="text-muted-foreground text-sm">
                    Refunds are generally not provided. In exceptional circumstances, refunds may be considered at the sole discretion of AI Free Text Pro. Contact support@aifreetextpro.com if you have a specific concern.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold mb-2">What happens when I cancel?</h3>
                  <p className="text-muted-foreground text-sm">
                    You retain full access to your paid plan features until the end of your current billing period. After that, your account reverts to the Free plan. Your account and history are preserved.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold mb-2">Can I re-subscribe after canceling?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, you can re-subscribe to any paid plan at any time from your account settings.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold mb-2">How do I contact support?</h3>
                  <p className="text-muted-foreground text-sm">
                    Email us at support@aifreetextpro.com or use our <Link to="/contact" className="text-primary hover:underline">contact form</Link>. We respond within 24 hours on business days.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience our advanced AI humanization technology today. Cancel anytime from your account settings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.aifreetextpro.com/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                    View Pricing Plans
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Questions? Email us at <a href="mailto:support@aifreetextpro.com" className="text-primary hover:underline">support@aifreetextpro.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Guarantee;
