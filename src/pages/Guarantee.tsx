import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, CheckCircle, ArrowRight, Clock, FileText, Mail, Star, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Import testimonial profile images
import sarahPatel from "@/assets/testimonials/sarah-patel.jpg";
import jamesChen from "@/assets/testimonials/james-chen.jpg";
import emilyWatson from "@/assets/testimonials/emily-watson.jpg";

const Guarantee = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Graduate Student",
      rating: 5,
      text: "I was skeptical at first, but when Turnitin flagged my humanized content, I reached out for a refund. The team processed it within 24 hours - no questions asked. They even helped me understand what went wrong. Incredible customer service!",
      date: "February 2026",
      avatar: sarahPatel
    },
    {
      name: "James Rodriguez",
      role: "Content Writer",
      rating: 5,
      text: "Used the Pro plan for a month. The humanizer worked flawlessly on 99% of my content, but one piece got flagged by Originality.AI. Submitted the refund request with screenshots and got my money back the same day. This guarantee is legit!",
      date: "December 2024",
      avatar: jamesChen
    },
    {
      name: "Emily Chen",
      role: "Marketing Manager",
      rating: 5,
      text: "Our team processes hundreds of articles monthly. When we had an issue with detection, the refund process was straightforward and fast. They honored their guarantee completely. This is the kind of transparency that builds long-term trust.",
      date: "November 2024",
      avatar: emilyWatson
    }
  ];

  const steps = [
    {
      icon: FileText,
      title: "Document the Issue",
      description: "Take screenshots showing your humanized text being flagged by any AI detector (GPTZero, Turnitin, Originality.AI, ZeroGPT, Copyleaks, etc.)"
    },
    {
      icon: Mail,
      title: "Submit Your Claim",
      description: "Email support@aifreetextpro.com with your screenshots, order ID, and the text that was flagged. Include the detector name and detection score."
    },
    {
      icon: Clock,
      title: "Get Refunded Fast",
      description: "We review claims within 24 hours on business days. Valid claims are refunded immediately to your original payment method."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>100% Money-Back Guarantee | AI Free Text Pro</title>
        <meta name="description" content="Flagged by any AI detector? Get a full refund, no questions asked. 24-hour claim processing. See real refund stories from students and writers." />
        <meta name="keywords" content="ai humanizer guarantee, money back guarantee, refund policy, ai detector bypass guarantee, risk-free ai humanizer" />
        <link rel="canonical" href="https://aifreetextpro.com/guarantee" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="100% Money-Back Guarantee - AI Free Text Pro" />
        <meta property="og:description" content="If our humanizer is flagged by any AI detector, we refund 100% - no questions asked. Fast 24-hour processing." />
        <meta property="og:url" content="https://aifreetextpro.com/guarantee" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aifreetextpro" />
        <meta name="twitter:title" content="100% Money-Back Guarantee - AI Free Text Pro" />
        <meta name="twitter:description" content="If our humanizer is flagged by any AI detector, we refund 100% - no questions asked. Fast 24-hour processing." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does the refund process take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We review claims within 24 hours on business days. Once approved, refunds are processed immediately. Depending on your payment provider, it may take 3-5 business days for the refund to appear in your account."
                }
              },
              {
                "@type": "Question",
                "name": "What if I lost my order ID?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No problem! You can provide the email address you used to sign up or make the purchase. We'll locate your account and process your refund request."
                }
              },
              {
                "@type": "Question",
                "name": "Does this guarantee apply to the free plan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The money-back guarantee applies only to paid plans (Starter, Lite, Pro Writer, and Unlimited Creator) since there is no payment to refund on the free plan. However, we're constantly working to improve our technology for all users."
                }
              },
              {
                "@type": "Question",
                "name": "Can I get a partial refund if only some content was detected?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our guarantee is all-or-nothing. If any content humanized with our tool is flagged by an AI detector during your billing period, you're eligible for a full 100% refund of that period's payment."
                }
              },
              {
                "@type": "Question",
                "name": "What AI detectors are covered?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All major AI detectors are covered including GPTZero, Turnitin, Originality.AI, ZeroGPT, Copyleaks, Winston AI, and any other recognized AI detection tool. If it's a legitimate AI detector and it flags your humanized content, you're covered."
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
            { label: "Guarantee" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-lg font-bold">100% Money-Back Guarantee</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Risk-Free AI Humanization
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                If our humanizer is flagged by <span className="font-semibold text-foreground">ANY</span> AI detector, we refund <span className="font-semibold text-foreground">100%</span> of your payment. No questions asked. No hassle. No fine print.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>24-Hour Processing</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>No Questions Asked</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Full Refund</span>
                </div>
              </div>
            </div>

            {/* The Guarantee */}
            <Card className="p-8 md:p-12 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Promise to You</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed">
                  We stand behind our AI humanization technology with complete confidence. If you use AI Free Text Pro to humanize your content and it gets flagged as AI-generated by <strong>any major AI detector</strong> including GPTZero, Turnitin, Originality.AI, ZeroGPT, Copyleaks, or any other detection tool, we will refund your entire payment.
                </p>
                <p className="text-lg leading-relaxed">
                  This guarantee applies to all paid plans (Starter, Lite, Pro Writer, and Unlimited Creator) for the current billing period in which the detection occurred.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* How to Claim */}
        <section className="py-20 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Claim Your Refund</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our simple 3-step process ensures you get your money back quickly
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="p-6 relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
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

            <Card className="mt-12 p-6 max-w-3xl mx-auto bg-secondary/5 border-secondary/20">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-secondary" />
                Refund Request Email Template
              </h3>
              <div className="bg-background p-4 rounded-lg font-mono text-sm">
                <p className="mb-2"><strong>To:</strong> support@aifreetextpro.com</p>
                <p className="mb-2"><strong>Subject:</strong> Refund Request - AI Detection Issue</p>
                <p className="mb-4"><strong>Body:</strong></p>
                <div className="pl-4 border-l-2 border-border">
                  <p>Hello AI Free Text Pro Team,</p>
                  <p className="mt-2">I am requesting a refund under your 100% money-back guarantee.</p>
                  <p className="mt-2">Order ID: [Your Order ID]</p>
                  <p>Plan: [Your Plan Name]</p>
                  <p>AI Detector: [e.g., Turnitin, GPTZero, etc.]</p>
                  <p>Detection Score: [e.g., 85% AI-generated]</p>
                  <p className="mt-2">I have attached screenshots showing the detection results.</p>
                  <p className="mt-2">Thank you,</p>
                  <p>[Your Name]</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Guarantee Terms & Conditions</h2>
              
              <Card className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-primary" />
                      Eligibility Requirements
                    </h3>
                    <ul className="space-y-2 text-muted-foreground ml-8">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Valid for all paid plans (Starter, Lite, Pro Writer, Unlimited Creator)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Applies to content humanized using our standard humanization settings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Detection must occur within your current billing period</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Must provide clear evidence (screenshots) of AI detection showing your humanized text</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Detection must be from a recognized AI detector (GPTZero, Turnitin, Originality.AI, ZeroGPT, Copyleaks, etc.)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Clock className="w-6 h-6 text-primary" />
                      Processing Timeline
                    </h3>
                    <ul className="space-y-2 text-muted-foreground ml-8">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Within 24 hours:</strong> We review your claim on business days (Monday-Friday)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>Immediate refund:</strong> Valid claims are processed immediately after approval</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>3-5 business days:</strong> Time for refund to appear in your account (depends on your payment provider)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <FileText className="w-6 h-6 text-primary" />
                      What We Need From You
                    </h3>
                    <ul className="space-y-2 text-muted-foreground ml-8">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Screenshot of the AI detector showing the flagged content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Your order ID or email address used for purchase</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Name of the AI detector that flagged your content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>The detection score or confidence level shown</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-primary" />
                      Important Notes
                    </h3>
                    <ul className="space-y-2 text-muted-foreground ml-8">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Refunds are issued to the original payment method used for purchase</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>One refund per customer per billing period</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Free plan users are not eligible (no payment to refund)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>This guarantee does not cover content that was not processed through our humanizer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>We reserve the right to investigate fraudulent claims</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 bg-gradient-to-b from-card/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Customers, Real Refunds</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from customers who have successfully claimed refunds
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <Avatar className="w-10 h-10 border-2 border-primary/20">
                      {testimonial.avatar && (
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                      )}
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20 text-primary font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-bold mb-2">How long does the refund process take?</h3>
                  <p className="text-muted-foreground text-sm">
                    We review claims within 24 hours on business days. Once approved, refunds are processed immediately. Depending on your payment provider, it may take 3-5 business days for the refund to appear in your account.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold mb-2">What if I lost my order ID?</h3>
                  <p className="text-muted-foreground text-sm">
                    No problem! Just provide the email address you used to purchase, and we can look up your account. You can also find your order ID in your purchase confirmation email.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold mb-2">Can I get a partial refund if only some content was flagged?</h3>
                  <p className="text-muted-foreground text-sm">
                    We provide full refunds for the current billing period if any humanized content is flagged. We believe in making this completely risk-free for you.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold mb-2">Do you offer refunds for reasons other than AI detection?</h3>
                  <p className="text-muted-foreground text-sm">
                    Our 100% money-back guarantee specifically covers cases where humanized content is flagged by AI detectors. For other issues, please contact our support team at support@aifreetextpro.com and we'll work with you on a case-by-case basis.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold mb-2">What happens to my account after I get a refund?</h3>
                  <p className="text-muted-foreground text-sm">
                    Your account remains active until the end of your current billing period. You won't be charged again unless you choose to resubscribe. You're welcome to use the free plan anytime.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold mb-2">Is this guarantee available for annual subscriptions?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes! The guarantee applies to all paid plans including annual subscriptions. If you experience detection issues, you'll receive a full refund for the entire year.
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
                Try AI Free Text Pro Risk-Free Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With our 100% money-back guarantee, you have nothing to lose. Transform your AI content with complete confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.aifreetextpro.com/">
                  <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary">
                    Start Free Trial
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
