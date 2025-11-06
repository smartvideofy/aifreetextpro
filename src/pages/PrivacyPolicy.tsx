import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <Helmet>
        <title>Privacy Policy - AI Free Text Pro | Your Data Privacy & Security</title>
        <meta name="description" content="Read AI Free Text Pro's privacy policy to understand how we protect your data. We do not store or share your text submissions. Your privacy is our priority." />
        <meta name="keywords" content="privacy policy, data protection, user privacy, secure ai detector" />
        <link rel="canonical" href="https://aifreetextpro.com/privacy-policy" />
        <meta name="robots" content="noindex, follow" />
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

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                AI Text Tools ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI text analysis and humanization services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Text content you submit for AI detection or humanization</li>
                <li>Usage data and preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-4 text-foreground">Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Device information (browser type, operating system)</li>
                <li>Usage statistics and analytics</li>
                <li>IP address and general location data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide and improve our AI text analysis and humanization services</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Detect and prevent fraudulent or abusive activity</li>
                <li>Communicate with you about service updates</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Processing and AI Models</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your submitted text is processed through third-party AI models (OpenAI GPT-4o-mini) to perform detection and humanization. We do not use your content to train AI models. Text submissions are processed in real-time and are not permanently stored on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your information only as long as necessary to provide our services and comply with legal obligations. Text submissions are processed in real-time and are not stored permanently. Analytics and usage data may be retained for up to 90 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We use the following third-party services:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>OpenAI API for AI text processing</li>
                <li>Analytics services for usage tracking (Google Analytics)</li>
                <li>Hosting and infrastructure providers</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">Advertising Partners</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may partner with third-party advertising networks (such as Google AdSense) to display advertisements on our website. These advertising partners may use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Serve ads based on your prior visits to our website or other websites</li>
                <li>Measure ad performance and user engagement</li>
                <li>Prevent fraudulent ad clicks</li>
                <li>Provide aggregated analytics to advertisers</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a> or <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NAI Opt-Out</a>.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">Google Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use Google Analytics to understand how visitors use our site. Google Analytics collects information anonymously and reports website trends without identifying individual visitors. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use cookies and similar tracking technologies to improve your experience on our website. These may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site (Google Analytics)</li>
                <li><strong>Advertising Cookies:</strong> Used by our advertising partners to show relevant ads</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of certain data collection practices</li>
                <li>Opt-out of personalized advertising</li>
                <li>Object to automated decision-making</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for users under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us through our{" "}
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

export default PrivacyPolicy;
