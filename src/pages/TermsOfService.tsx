import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <Helmet>
        <title>Terms of Service - AI Free Text Pro | Usage Terms & Conditions</title>
        <meta name="description" content="Read AI Free Text Pro's terms of service to understand acceptable use, user responsibilities, and service limitations for our AI detection and humanization tools." />
        <meta name="keywords" content="terms of service, usage terms, terms and conditions, service agreement" />
        <link rel="canonical" href="https://aifreetextpro.com/terms-of-service" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using AI Text Tools, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                AI Text Tools provides AI-powered text analysis and humanization services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
                <li>AI content detection and probability analysis</li>
                <li>Text humanization to convert AI-generated content to natural language</li>
                <li>Text quality and authenticity assessment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">You agree to use our services only for lawful purposes. You must not:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use our services to create or distribute misleading, fraudulent, or harmful content</li>
                <li>Attempt to circumvent academic integrity policies or plagiarism detection</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Use automated systems to access our services without permission</li>
                <li>Reverse engineer or attempt to extract source code from our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                You retain all rights to the content you submit to our services. By submitting content, you grant us a limited license to process your text through our AI models solely for the purpose of providing our services. We do not claim ownership of your content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Service Limitations and Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">Our services are provided "as is" without warranties of any kind. We do not guarantee:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>100% accuracy in AI detection or humanization results</li>
                <li>That humanized text will pass all AI detection systems</li>
                <li>Uninterrupted or error-free service operation</li>
                <li>That our services will meet all your specific requirements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Results may vary based on input quality, text complexity, and other factors beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, AI Text Tools shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. This includes any loss of data, revenue, or business opportunities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">You are solely responsible for:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>The content you submit to our services</li>
                <li>Ensuring your use complies with applicable laws and regulations</li>
                <li>Any consequences of using our humanization services</li>
                <li>Maintaining the confidentiality of any account credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services utilize third-party AI models and infrastructure (including OpenAI). Your use of our services is also subject to these third-party providers' terms of service. We are not responsible for any third-party service interruptions or policy changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your access to our services at any time, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  contact page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
