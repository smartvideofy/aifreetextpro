import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <Helmet>
        <title>Contact Us - AI Free Text Pro | 24h Response</title>
        <meta name="description" content="Need help with AI detection or humanization? Our team responds within 24 hours. Email support, FAQs, and troubleshooting for all plans." />
        <meta name="keywords" content="contact ai detector, ai tool support, ai humanizer help, customer service, technical support" />
        <link rel="canonical" href="https://aifreetextpro.com/contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="Contact Us - AI Free Text Pro Support" />
        <meta property="og:description" content="Get help with AI detection and humanization. We respond within 24 hours." />
        <meta property="og:url" content="https://aifreetextpro.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aifreetextpro" />
        <meta name="twitter:title" content="Contact Us - AI Free Text Pro Support" />
        <meta name="twitter:description" content="Get help with AI detection and humanization. We respond within 24 hours." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How accurate is the AI detection?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI Checker provides probability scores based on advanced analysis. While highly accurate, results should be considered as guidance rather than absolute certainty."
                }
              },
              {
                "@type": "Question",
                "name": "Will humanized text always pass AI detectors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our humanization service significantly improves text naturalness and reduces AI detection probability, but we cannot guarantee 100% success across all detection systems due to their varying methodologies."
                }
              },
              {
                "@type": "Question",
                "name": "Do you store my submitted text?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, we process your text in real-time and do not permanently store submissions on our servers."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use this for academic work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our tools are designed to help you understand AI content patterns. Always ensure your use complies with your institution's academic integrity policies."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Breadcrumbs 
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" }
            ]} 
          />

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Contact Us</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            We'd love to hear from you. Get in touch with our team for support, feedback, or inquiries.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <p className="text-muted-foreground mb-6">
                Have questions or feedback? We'd love to hear from you. Send us an email at{" "}
                <a href="mailto:support@aifreetextpro.com" className="text-primary hover:underline font-medium">
                  support@aifreetextpro.com
                </a>
              </p>
              <a href="https://app.aifreetextpro.com/">
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary">
                  Start Writing Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </Card>

            <div className="space-y-6">
              <Card className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Email Support</h2>
                <p className="text-muted-foreground">
                  For general inquiries, technical support, or partnership opportunities, reach out to us via email.
                </p>
                <a 
                  href="mailto:support@aifreetextpro.com" 
                  className="inline-block text-primary hover:underline font-medium"
                >
                  support@aifreetextpro.com
                </a>
              </Card>

              <Card className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Response Time</h2>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24-48 hours during business days.
                </p>
                <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Business Hours:</strong></p>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </Card>
            </div>
          </div>

          <Card className="mt-8 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">How accurate is the AI detection?</h3>
                <p className="text-muted-foreground">
                  Our AI Checker provides probability scores based on advanced analysis. While highly accurate, results should be considered as guidance rather than absolute certainty.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Will humanized text always pass AI detectors?</h3>
                <p className="text-muted-foreground">
                  Our humanization service significantly improves text naturalness and reduces AI detection probability, but we cannot guarantee 100% success across all detection systems due to their varying methodologies.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Do you store my submitted text?</h3>
                <p className="text-muted-foreground">
                  No, we process your text in real-time and do not permanently store submissions on our servers. See our{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  for more details.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Can I use this for academic work?</h3>
                <p className="text-muted-foreground">
                  Our tools are designed to help you understand AI content patterns. Always ensure your use complies with your institution's academic integrity policies.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
