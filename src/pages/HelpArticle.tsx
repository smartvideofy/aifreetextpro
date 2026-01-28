import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowLeft, ThumbsUp, ThumbsDown, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

// Article content database
const articleContent: Record<string, Record<string, { title: string; content: React.ReactNode }>> = {
  "getting-started": {
    "create-account": {
      title: "How to Create an Account",
      content: (
        <div className="prose prose-invert max-w-none">
          <p>Creating an account with AI Free Text Pro is quick and easy. Follow these simple steps to get started:</p>
          
          <h2>Step 1: Visit the Sign Up Page</h2>
          <p>Navigate to <a href="https://app.aifreetextpro.com/auth" className="text-primary hover:underline">app.aifreetextpro.com/auth</a> or click the "Start Writing Free" button on our homepage.</p>
          
          <h2>Step 2: Enter Your Email</h2>
          <p>Provide a valid email address that you have access to. This will be your login credential.</p>
          
          <h2>Step 3: Create a Password</h2>
          <p>Choose a strong password with at least 8 characters, including uppercase, lowercase, and numbers.</p>
          
          <h2>Step 4: Verify Your Email</h2>
          <p>Check your inbox for a verification email and click the confirmation link.</p>
          
          <h2>Step 5: Start Humanizing!</h2>
          <p>Once verified, you'll have immediate access to your free 1,000 words per month.</p>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm m-0"><strong>Pro Tip:</strong> No credit card is required for the free tier. Start humanizing AI text immediately!</p>
          </div>
        </div>
      )
    },
    "first-humanization": {
      title: "Your First AI Humanization",
      content: (
        <div className="prose prose-invert max-w-none">
          <p>Ready to transform your AI-generated text? Here's how to humanize your first piece of content:</p>
          
          <h2>Step 1: Access the Humanizer</h2>
          <p>After logging in, you'll be taken directly to the AI Humanizer tool. You can also click "Humanizer" in the navigation.</p>
          
          <h2>Step 2: Paste Your AI Text</h2>
          <p>Copy your AI-generated content (from ChatGPT, Claude, etc.) and paste it into the input box.</p>
          
          <h2>Step 3: Choose Your Writing Style</h2>
          <ul>
            <li><strong>Academic:</strong> Perfect for essays, research papers, and scholarly work</li>
            <li><strong>Professional:</strong> Ideal for business emails, reports, and formal documents</li>
            <li><strong>Creative:</strong> Great for blog posts, stories, and marketing content</li>
            <li><strong>Casual:</strong> Best for social media, personal blogs, and informal writing</li>
          </ul>
          
          <h2>Step 4: Click "Humanize"</h2>
          <p>Hit the Humanize button and wait a few seconds. Your transformed text will appear in the output panel.</p>
          
          <h2>Step 5: Copy and Use</h2>
          <p>Review the humanized text, make any final adjustments, and copy it to your clipboard.</p>
        </div>
      )
    },
    "understanding-dashboard": {
      title: "Understanding Your Dashboard",
      content: (
        <div className="prose prose-invert max-w-none">
          <p>Your dashboard is your command center for all AI humanization activities. Here's what you'll find:</p>
          
          <h2>Word Count Tracker</h2>
          <p>See how many words you've used this month and how many remain in your quota.</p>
          
          <h2>Recent Activity</h2>
          <p>View your recent humanizations with quick access to re-edit or download.</p>
          
          <h2>Quick Actions</h2>
          <p>Jump straight to the Humanizer, Detector, or your account settings.</p>
          
          <h2>Usage Statistics</h2>
          <p>Track your success rate and see which writing styles you use most often.</p>
        </div>
      )
    },
    "choosing-writing-style": {
      title: "Choosing the Right Writing Style",
      content: (
        <div className="prose prose-invert max-w-none">
          <p>Selecting the right writing style is crucial for achieving natural-sounding results. Here's a guide:</p>
          
          <h2>Academic Style</h2>
          <p><strong>Best for:</strong> University essays, research papers, thesis work, scholarly articles</p>
          <p>This style maintains formal language, proper citations formatting, and academic conventions while removing AI patterns.</p>
          
          <h2>Professional Style</h2>
          <p><strong>Best for:</strong> Business emails, corporate reports, LinkedIn posts, cover letters</p>
          <p>Balances formality with readability, using industry-appropriate terminology.</p>
          
          <h2>Creative Style</h2>
          <p><strong>Best for:</strong> Blog posts, marketing copy, storytelling, website content</p>
          <p>Adds personality, varied sentence structures, and engaging language patterns.</p>
          
          <h2>Casual Style</h2>
          <p><strong>Best for:</strong> Social media, personal blogs, informal emails, community posts</p>
          <p>Creates a conversational, approachable tone that feels authentically human.</p>
        </div>
      )
    }
  },
  "ai-humanizer-guide": {
    "how-humanization-works": {
      title: "How AI Humanization Works",
      content: (
        <div className="prose prose-invert max-w-none">
          <p>Our AI humanization technology uses advanced natural language processing to transform AI-generated text into naturally-flowing human writing.</p>
          
          <h2>The Science Behind It</h2>
          <p>AI detectors look for specific patterns in text: uniform sentence lengths, predictable vocabulary, and consistent structure. Our humanizer introduces natural variations that match how humans actually write.</p>
          
          <h2>Key Techniques</h2>
          <ul>
            <li><strong>Perplexity Enhancement:</strong> Increases vocabulary diversity and word choice unpredictability</li>
            <li><strong>Burstiness Injection:</strong> Varies sentence lengths to mimic human writing patterns</li>
            <li><strong>Contextual Rewriting:</strong> Restructures content while preserving meaning</li>
            <li><strong>Style Adaptation:</strong> Matches the chosen writing style (Academic, Professional, etc.)</li>
          </ul>
          
          <h2>Why It Works</h2>
          <p>By analyzing millions of human-written texts, our system learned the subtle patterns that distinguish human writing from AI. It then applies these patterns to your content.</p>
        </div>
      )
    },
    "writing-style-modes": {
      title: "Writing Style Modes Explained",
      content: (
        <div className="prose prose-invert max-w-none">
          <p>Each writing style mode applies different transformation rules to match your intended audience and purpose.</p>
          
          <h2>Academic Mode</h2>
          <p>Optimized for educational contexts with formal vocabulary, longer sentences, and scholarly conventions. Works best with essays, papers, and research content.</p>
          
          <h2>Professional Mode</h2>
          <p>Balances clarity and authority for business contexts. Removes casual language while maintaining readability.</p>
          
          <h2>Creative Mode</h2>
          <p>Maximizes engagement with varied vocabulary, metaphors, and dynamic sentence structures. Perfect for content that needs to capture attention.</p>
          
          <h2>Casual Mode</h2>
          <p>Creates a relaxed, conversational tone with contractions, informal expressions, and approachable language.</p>
        </div>
      )
    },
    "tips-best-results": {
      title: "Tips for Best Results",
      content: (
        <div className="prose prose-invert max-w-none">
          <p>Maximize your humanization success rate with these expert tips:</p>
          
          <h2>1. Start with Quality Input</h2>
          <p>The better your original AI text, the better the humanized output. Use detailed prompts when generating content.</p>
          
          <h2>2. Choose the Right Style</h2>
          <p>Match your writing style to your audience. Academic for essays, Professional for business, Creative for blogs.</p>
          
          <h2>3. Review and Edit</h2>
          <p>Always review the humanized text. Add personal touches, specific examples, or industry terminology.</p>
          
          <h2>4. Test Before Submitting</h2>
          <p>Use our AI Detector to verify your text passes detection before final submission.</p>
          
          <h2>5. Keep Original Formatting</h2>
          <p>Maintain headings, bullet points, and paragraphs for best results.</p>
        </div>
      )
    },
    "bypassing-detectors": {
      title: "Bypassing AI Detectors",
      content: (
        <div className="prose prose-invert max-w-none">
          <p>Our humanizer is specifically designed to help your content pass major AI detection tools.</p>
          
          <h2>Supported Detectors</h2>
          <ul>
            <li><strong>Turnitin:</strong> 99.8% success rate</li>
            <li><strong>GPTZero:</strong> 98.5% success rate</li>
            <li><strong>Originality.AI:</strong> 97.5% success rate</li>
            <li><strong>Copyleaks:</strong> 97% success rate</li>
            <li><strong>Winston AI:</strong> 98% success rate</li>
          </ul>
          
          <h2>Best Practices</h2>
          <p>For highest success rates, always use the writing style that matches your content type and verify with our built-in detector before submission.</p>
        </div>
      )
    },
    "advanced-settings": {
      title: "Advanced Settings & Options",
      content: (
        <div className="prose prose-invert max-w-none">
          <p>Power users can fine-tune their humanization with advanced settings:</p>
          
          <h2>Intensity Level</h2>
          <p>Control how much the text is transformed. Higher intensity = more changes but potentially different meaning.</p>
          
          <h2>Preserve Keywords</h2>
          <p>Mark specific terms that should remain unchanged (brand names, technical terms, etc.).</p>
          
          <h2>Tone Adjustments</h2>
          <p>Fine-tune the formality level within your chosen writing style.</p>
        </div>
      )
    }
  },
  "billing-payments": {
    "subscription-plans": {
      title: "Subscription Plans Explained",
      content: (
        <div className="prose prose-invert max-w-none">
          <h2>Free Plan</h2>
          <ul>
            <li>1,000 words per month</li>
            <li>All 4 writing styles</li>
            <li>AI detector access</li>
            <li>No credit card required</li>
          </ul>
          
          <h2>Pro Plan - $19/month</h2>
          <ul>
            <li>Unlimited words</li>
            <li>Priority processing</li>
            <li>Advanced settings</li>
            <li>API access</li>
            <li>Priority support</li>
          </ul>
          
          <p>Visit our <a href="/pricing" className="text-primary hover:underline">Pricing page</a> for full details.</p>
        </div>
      )
    },
    "upgrade-downgrade": {
      title: "How to Upgrade or Downgrade",
      content: (
        <div className="prose prose-invert max-w-none">
          <h2>To Upgrade</h2>
          <ol>
            <li>Go to your Account Settings</li>
            <li>Click "Manage Subscription"</li>
            <li>Select your new plan</li>
            <li>Complete payment</li>
          </ol>
          
          <h2>To Downgrade</h2>
          <ol>
            <li>Go to your Account Settings</li>
            <li>Click "Manage Subscription"</li>
            <li>Select the Free plan</li>
            <li>Confirm the change</li>
          </ol>
          
          <p>Changes take effect at the end of your current billing period.</p>
        </div>
      )
    },
    "refund-policy": {
      title: "Refund Policy & Cancellations",
      content: (
        <div className="prose prose-invert max-w-none">
          <h2>7-Day Money-Back Guarantee</h2>
          <p>Not satisfied? Request a full refund within 7 days of your first payment. No questions asked.</p>
          
          <h2>How to Request a Refund</h2>
          <ol>
            <li>Contact support at support@aifreetextpro.com</li>
            <li>Include your account email</li>
            <li>Refunds processed within 3-5 business days</li>
          </ol>
          
          <h2>Cancellations</h2>
          <p>Cancel anytime. You'll retain access until the end of your billing period.</p>
        </div>
      )
    }
  },
  "privacy-security": {
    "data-protection": {
      title: "How We Protect Your Data",
      content: (
        <div className="prose prose-invert max-w-none">
          <h2>Text Processing</h2>
          <p>Your text is processed securely and <strong>never stored</strong> after humanization. We don't keep copies of your content.</p>
          
          <h2>Encryption</h2>
          <p>All data transmitted uses TLS 1.3 encryption. Your connection is always secure.</p>
          
          <h2>Account Data</h2>
          <p>We only store essential account information: email, usage statistics, and billing details (handled by Stripe).</p>
          
          <h2>Third Parties</h2>
          <p>We never sell or share your data with third parties for marketing purposes.</p>
          
          <p>Read our full <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for complete details.</p>
        </div>
      )
    },
    "account-security": {
      title: "Account Security Best Practices",
      content: (
        <div className="prose prose-invert max-w-none">
          <h2>Strong Passwords</h2>
          <p>Use a unique password with at least 12 characters, mixing letters, numbers, and symbols.</p>
          
          <h2>Don't Share Credentials</h2>
          <p>Never share your login details with others. Each user should have their own account.</p>
          
          <h2>Check Login Activity</h2>
          <p>Regularly review your account activity in Settings to spot unauthorized access.</p>
          
          <h2>Report Suspicious Activity</h2>
          <p>If you notice anything unusual, contact support immediately and change your password.</p>
        </div>
      )
    }
  },
  "troubleshooting": {
    "text-not-humanized": {
      title: "Why Isn't My Text Being Humanized?",
      content: (
        <div className="prose prose-invert max-w-none">
          <h2>Common Causes</h2>
          <ul>
            <li><strong>Text too short:</strong> Minimum 50 words required for effective humanization</li>
            <li><strong>Word limit reached:</strong> Check your remaining word quota in the dashboard</li>
            <li><strong>Special characters:</strong> Remove excessive formatting or special characters</li>
            <li><strong>Processing error:</strong> Try refreshing and submitting again</li>
          </ul>
          
          <h2>Quick Fixes</h2>
          <ol>
            <li>Verify your word count in the dashboard</li>
            <li>Remove any unusual formatting</li>
            <li>Try a smaller section first</li>
            <li>Clear browser cache and try again</li>
          </ol>
        </div>
      )
    },
    "login-issues": {
      title: "Login & Account Issues",
      content: (
        <div className="prose prose-invert max-w-none">
          <h2>Can't Log In?</h2>
          <ol>
            <li>Double-check your email address for typos</li>
            <li>Use the "Forgot Password" link to reset</li>
            <li>Check spam folder for verification emails</li>
            <li>Clear browser cookies and try again</li>
          </ol>
          
          <h2>Password Reset Not Working?</h2>
          <p>Reset emails can take up to 5 minutes. Check spam/junk folders. Still not arriving? Contact support.</p>
        </div>
      )
    },
    "payment-failed": {
      title: "Payment Failed - What To Do",
      content: (
        <div className="prose prose-invert max-w-none">
          <h2>Common Reasons</h2>
          <ul>
            <li>Insufficient funds</li>
            <li>Card expired</li>
            <li>Bank declined the transaction</li>
            <li>Incorrect card details</li>
          </ul>
          
          <h2>How to Fix</h2>
          <ol>
            <li>Check your card has sufficient funds</li>
            <li>Update your payment method in Account Settings</li>
            <li>Try a different card</li>
            <li>Contact your bank if declines persist</li>
          </ol>
        </div>
      )
    },
    "browser-compatibility": {
      title: "Browser Compatibility Issues",
      content: (
        <div className="prose prose-invert max-w-none">
          <h2>Supported Browsers</h2>
          <ul>
            <li>Chrome 90+</li>
            <li>Firefox 88+</li>
            <li>Safari 14+</li>
            <li>Edge 90+</li>
          </ul>
          
          <h2>Troubleshooting Steps</h2>
          <ol>
            <li>Update your browser to the latest version</li>
            <li>Disable browser extensions temporarily</li>
            <li>Clear cache and cookies</li>
            <li>Try incognito/private mode</li>
          </ol>
        </div>
      )
    },
    "word-count-issues": {
      title: "Word Count Not Updating",
      content: (
        <div className="prose prose-invert max-w-none">
          <h2>Word Count Refresh</h2>
          <p>Word counts update in real-time but may occasionally take a few seconds to sync. Refresh your dashboard to see the latest count.</p>
          
          <h2>Monthly Reset</h2>
          <p>Your word count resets on the same day each month as your signup date (for free users) or billing date (for Pro users).</p>
          
          <h2>Still Not Right?</h2>
          <p>If your word count seems incorrect, contact support with your account email and we'll investigate.</p>
        </div>
      )
    },
    "contact-support": {
      title: "Contact Support",
      content: (
        <div className="prose prose-invert max-w-none">
          <h2>Email Support</h2>
          <p>Reach us at <strong>support@aifreetextpro.com</strong></p>
          <p>Response time: Within 24 hours (usually faster!)</p>
          
          <h2>What to Include</h2>
          <ul>
            <li>Your account email</li>
            <li>Description of the issue</li>
            <li>Screenshots if applicable</li>
            <li>Browser and device you're using</li>
          </ul>
          
          <p>You can also use our <a href="/contact" className="text-primary hover:underline">Contact Form</a> for a quick response.</p>
        </div>
      )
    }
  }
};

const HelpArticle = () => {
  const { collectionId, articleSlug } = useParams<{ collectionId: string; articleSlug: string }>();
  const [feedbackGiven, setFeedbackGiven] = useState<"helpful" | "not-helpful" | null>(null);

  if (!collectionId || !articleSlug) {
    return <Navigate to="/help-center" replace />;
  }

  const collectionContent = articleContent[collectionId];
  if (!collectionContent) {
    return <Navigate to="/help-center" replace />;
  }

  const article = collectionContent[articleSlug];
  if (!article) {
    return <Navigate to={`/help-center/${collectionId}`} replace />;
  }

  // Get collection info for breadcrumbs
  const collectionNames: Record<string, string> = {
    "getting-started": "Getting Started",
    "ai-humanizer-guide": "AI Humanizer Guide",
    "billing-payments": "Billing & Payments",
    "privacy-security": "Privacy & Security",
    "troubleshooting": "Troubleshooting"
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Help Center", href: "/help-center" },
    { label: collectionNames[collectionId] || collectionId, href: `/help-center/${collectionId}` },
    { label: article.title, href: `/help-center/${collectionId}/${articleSlug}` },
  ];

  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedbackGiven(type);
    toast.success(type === "helpful" ? "Thanks for your feedback!" : "Sorry to hear that. We'll work on improving this article.");
  };

  return (
    <>
      <Helmet>
        <title>{article.title} - Help Center | AI Free Text Pro</title>
        <meta name="description" content={`Learn about ${article.title.toLowerCase()} in AI Free Text Pro.`} />
        <link rel="canonical" href={`https://aifreetextpro.com/help-center/${collectionId}/${articleSlug}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Back Button */}
          <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
            <Link to={`/help-center/${collectionId}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {collectionNames[collectionId]}
            </Link>
          </Button>

          {/* Article Header */}
          <h1 className="text-2xl md:text-3xl font-bold mb-8">{article.title}</h1>

          {/* Article Content */}
          <div className="mb-12">
            {article.content}
          </div>

          {/* Feedback Section */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-4">Was this article helpful?</p>
            <div className="flex gap-3">
              <Button
                variant={feedbackGiven === "helpful" ? "default" : "outline"}
                size="sm"
                onClick={() => handleFeedback("helpful")}
                disabled={feedbackGiven !== null}
              >
                <ThumbsUp className="w-4 h-4 mr-2" />
                Yes
              </Button>
              <Button
                variant={feedbackGiven === "not-helpful" ? "default" : "outline"}
                size="sm"
                onClick={() => handleFeedback("not-helpful")}
                disabled={feedbackGiven !== null}
              >
                <ThumbsDown className="w-4 h-4 mr-2" />
                No
              </Button>
            </div>
          </div>

          {/* Contact Support CTA */}
          <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border/50">
            <h3 className="font-semibold mb-2">Still need help?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Our support team is available to assist you with any questions.
            </p>
            <Button asChild size="sm">
              <Link to="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HelpArticle;
