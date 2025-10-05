import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Contact Us</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            We'd love to hear from you. Get in touch with our team for support, feedback, or inquiries.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">Email Support</h2>
              <p className="text-muted-foreground">
                For general inquiries, technical support, or partnership opportunities, reach out to us via email.
              </p>
              <a 
                href="mailto:support@aitexttools.com" 
                className="inline-block text-primary hover:underline font-medium"
              >
                support@aitexttools.com
              </a>
            </Card>

            <Card className="p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Response Time</h2>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
              <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Business Hours:</strong></p>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </Card>
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
