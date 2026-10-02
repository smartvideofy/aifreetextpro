import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SUPPORT_EMAIL = "support@aifreetextpro.com";

const Email = () => (
  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
    {SUPPORT_EMAIL}
  </a>
);

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <Helmet>
        <title>Refund Policy | AI Free Text Pro</title>
        <meta name="description" content="When AI Free Text Pro subscription payments are refundable: a full refund if no paid features have been used in that subscription period. How to request a refund." />
        <meta name="keywords" content="refund policy, refunds, subscription refund, cancellation" />
        <link rel="canonical" href="https://aifreetextpro.com/refund-policy" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Refund Policy - AI Free Text Pro" />
        <meta property="og:description" content="Full refund of a subscription payment if no paid features have been used in that subscription period." />
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
              <p className="text-muted-foreground leading-relaxed">
                At AI Free Text Pro, we aim to provide clear subscription terms and a fair, consistent refund process. This Refund Policy explains when a subscription payment can be refunded, what counts as using a paid feature, and how refund requests are handled.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                By purchasing a paid subscription, you acknowledge that you have read and understood this Refund Policy, subject to any rights that cannot legally be waived or restricted.
              </p>
              <div className="mt-4 rounded-lg border border-border p-4">
                <p className="font-semibold text-foreground mb-2">In short</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>If you haven't used any paid feature since a payment, that payment is refundable in full.</li>
                  <li>Once a paid feature has been used in a subscription period, the payment for that period is not refundable.</li>
                  <li>Duplicate charges, billing errors and unauthorized payments are reviewed separately.</li>
                  <li>Cancelling stops future renewals; it does not by itself refund a past payment.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. General Refund Rule</h2>
              <p className="text-muted-foreground leading-relaxed">
                A subscription payment is refundable only if no paid feature included in that subscription has been used during the subscription period the payment covers. Each request is checked against the account's payment and usage records before a decision is made.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Paid Features Covered by This Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">For refund eligibility, paid features include, but are not limited to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>AI Humanizer:</strong> submitting text for humanization, rewriting or processing.</li>
                <li><strong>Sentence rehumanizing:</strong> rehumanizing individual sentences of a result.</li>
                <li><strong>File humanizing:</strong> uploading a document for humanization.</li>
                <li><strong>AI Detector:</strong> submitting text for AI-content detection, analysis or probability scoring.</li>
                <li><strong>Plagiarism Checker:</strong> submitting text for plagiarism or similarity checking.</li>
                <li><strong>Other paid tools and benefits:</strong> any other premium text-processing, analysis or writing feature, or other paid functionality included in your plan.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                This includes features added to paid plans after this policy takes effect. A paid feature counts as used when you submit content for processing or start a feature operation, even if you don't save, download or keep the result. If a feature failed before delivering its result, we will review the technical records (see section 7).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Eligibility for a Refund</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">A payment is refunded in full when all of the following are true:</p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>The request relates to an identifiable AI Free Text Pro subscription payment that we can verify in our billing records.</li>
                <li>No paid feature has been used during the subscription period that payment covers.</li>
                <li>The request is made through an official support channel (see section 8).</li>
                <li>The refund is not prevented by applicable law.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. After Paid Features Have Been Used</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Once any paid feature has been used during a subscription period, the payment for that period does not qualify for a refund under this policy. This applies even if:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Only one paid feature was used, or only a small part of the word allowance</li>
                <li>The service was used for a short time</li>
                <li>The results were not what you expected</li>
                <li>You later decided you didn't need the subscription</li>
                <li>The purchase was accidental but paid features were used after it</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Unused time or unused words remaining in a subscription period are not refunded. Duplicate charges, billing errors, unauthorized transactions and verified service failures are handled separately (see section 7).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Accidental Purchases and Renewals</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you bought a subscription by mistake or chose the wrong plan, contact us. The same rule applies: if no paid features have been used since the payment, it is refundable in full.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Renewal payments follow the same rule, assessed against the subscription period the renewal covers. If you don't want to continue, cancel before your next renewal date. If a renewal was charged after you had cancelled, contact us and we will review it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Cancellation Is Separate From a Refund</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cancelling a subscription and requesting a refund are two separate actions. Cancelling stops future renewals; unless required by law or confirmed by us, it does not refund a payment that has already been made. Likewise, an approved refund does not by itself cancel your subscription.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                To cancel, email <Email /> from the email address on your account. We will confirm by email once the cancellation is complete; please keep that confirmation for your records.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Duplicate Payments, Billing Errors and Service Failures</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you were charged more than once for the same subscription, charged the wrong amount, charged after a valid cancellation, charged without your authorization, or charged because of a technical or payment-processing error, contact us promptly. These cases are investigated separately from ordinary change-of-mind requests, and charges made in error are refunded.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                If you could not use a paid feature because of a verified service failure on our side, we will review the technical records and decide on an appropriate remedy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. How to Request a Refund</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Email <Email /> from the email address on your account and include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>The date and amount of the payment</li>
                <li>The subscription plan purchased</li>
                <li>The payment reference or transaction ID, if you have it</li>
                <li>The reason for your request</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                To decide a request we may review subscription and payment records, feature-usage logs, cancellation history and relevant technical records. We may contact you if we need more information, and we will tell you the outcome once the review is complete.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Refund Processing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Approved refunds are returned to the original payment method where the payment provider supports it. How long the funds take to appear depends on your payment provider and bank.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Your Legal Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nothing in this Refund Policy excludes, restricts or overrides any consumer rights, statutory refund entitlements or other remedies that cannot legally be excluded or restricted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Refund Policy from time to time. Changes are published on this page with a new "Last updated" date and do not retroactively remove rights that subscribers have already acquired.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about this Refund Policy or to submit a refund request, email <Email /> or use our{" "}
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
