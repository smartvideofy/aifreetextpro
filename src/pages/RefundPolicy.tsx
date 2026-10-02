import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <Helmet>
        <title>Refund Policy | AI Free Text Pro</title>
        <meta name="description" content="When AI Free Text Pro subscription payments are refundable: a full refund if no features have been used since the payment. How to request a refund." />
        <meta name="keywords" content="refund policy, refunds, subscription refund, cancellation" />
        <link rel="canonical" href="https://aifreetextpro.com/refund-policy" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Refund Policy - AI Free Text Pro" />
        <meta property="og:description" content="Full refund of a subscription payment if no features have been used since the payment." />
        <meta property="og:url" content="https://aifreetextpro.com/refund-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Refund Policy - AI Free Text Pro" />
      </Helmet>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Refund Policy" }]} />
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: October 2, 2026</p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Refund Policy explains when payments for an AI Free Text Pro subscription can be refunded. In short: you can get a full refund of a subscription payment as long as you haven't used any of our features since that payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">When You Can Get a Refund</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A subscription payment, whether it's your first payment or a renewal, is fully refundable if none of the following features have been used on your account since that payment:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>AI Humanizer</li>
                <li>AI Detector</li>
                <li>Plagiarism Checker</li>
                <li>Sentence rehumanizing</li>
                <li>File (document) humanizing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">When Refunds Are Not Available</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Once any of the features above has been used in a billing period, the payment for that period is non-refundable</li>
                <li>We don't give partial or prorated refunds for unused time or unused words</li>
                <li>Accounts suspended or terminated for violating our{" "}
                  <Link to="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Billing Errors</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you were charged by mistake, for example charged twice for the same subscription, the extra charge is always refunded, whether or not you've used the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">How to Request a Refund</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Email <strong>support@aifreetextpro.com</strong> from the email address on your account and include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>The date and amount of the payment you'd like refunded</li>
                <li>The reason for your request (optional, but it helps us improve)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                We check your account's usage for that billing period and reply to every request. Approved refunds are sent back to the original payment method; how long they take to appear depends on your bank or card provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Cancelling Your Subscription</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cancelling stops future renewals so you won't be charged again. Cancelling does not by itself refund a payment that has already been made; that is covered by the rules above. To cancel, email support@aifreetextpro.com from the email address on your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Refund Policy from time to time. Changes are posted on this page with a new "Last updated" date and apply to payments made after that date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Refund Policy, email support@aifreetextpro.com or reach us through our{" "}
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

export default RefundPolicy;
