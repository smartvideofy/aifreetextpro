import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, CheckCircle, Handshake, Link2, QrCode, ShieldCheck, Wallet, XCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";

const JOIN_URL = "https://partner.aifreetextpro.com/join";
const SIGN_IN_URL = "https://partner.aifreetextpro.com/login";
const TERMS_URL = "https://partner.aifreetextpro.com/terms";

const steps = [
  {
    title: "Apply in two minutes",
    description: "Tell us where you post and link your profiles. We review every application, usually within a few days, and email you the result.",
  },
  {
    title: "Share your links",
    description: "You get a main link like aifreetextpro.com/r/yourname, plus a link for each platform and post, with QR codes for videos.",
  },
  {
    title: "Earn on every payment",
    description: "When someone you referred pays, you earn 20% of what they pay in their first 12 months. We pay monthly by PayPal or bank transfer.",
  },
];

const features = [
  { icon: Link2, title: "Links for every post", description: "A link per platform and per post, so you can see exactly which video or story brought each customer." },
  { icon: BarChart3, title: "Your own dashboard", description: "Clicks, sign-ups, who tried the tool and who paid, by day, platform and post." },
  { icon: Wallet, title: "Clear earnings", description: "What's on hold, what's ready to pay and what we've paid you, commission by commission." },
  { icon: QrCode, title: "QR codes", description: "Show your link on screen in videos and live streams; viewers scan it straight from the video." },
];

const terms = [
  ["Commission", "20% of what each referred customer pays in their first 12 months"],
  ["Who counts as yours", "New accounts created within 30 days of clicking your link (last creator link clicked)"],
  ["Holding period", "30 days after each payment, to allow for refunds"],
  ["Payouts", "Monthly, by the 15th, once you have US$25 or more"],
  ["How we pay", "PayPal or bank transfer, in US dollars"],
  ["Cost to join", "Free"],
];

const dos = [
  "Share your honest experience of checking and rewriting text",
  "Mention 250 free words a month, no card needed, and plans from $4.99/month",
  "Disclose the partnership clearly in the video or post itself (#ad, or the platform's paid-partnership label)",
];

const donts = [
  "Call it \"undetectable\" or \"guaranteed to pass Turnitin\"",
  "Promise refunds, unlimited free use or \"no signup\"",
  "Pay or reward people to click or sign up, or sign up through your own link",
];

const faqs = [
  {
    question: "When do commissions start?",
    answer:
      "Commissions start on a date we announce in the partner portal, and payments from that date earn commission. Until then your links already track clicks, sign-ups and paying customers, so you can apply now and have everything ready.",
  },
  {
    question: "Who can join?",
    answer:
      "Creators aged 18 or over who post about studying, writing, productivity or tech on TikTok, Instagram, YouTube, X, Facebook, Pinterest, Snapchat, Threads or elsewhere. We review every application.",
  },
  {
    question: "How do you know a customer came from me?",
    answer:
      "When someone clicks your link, our site remembers it for 30 days. If they create an account in that time, they're credited to you permanently. People who block or refuse the cookies we use for this, or switch device, may not be credited.",
  },
  {
    question: "Can I see who signed up through my link?",
    answer:
      "You see every sign-up and paying customer with a partly hidden email, the date, the link they used and their plan. Full emails and names stay private.",
  },
  {
    question: "How and when do I get paid?",
    answer:
      "Each commission is held for 30 days in case of a refund, then becomes payable. We pay by the 15th of each month once you have US$25 or more, by PayPal or bank transfer. You add your payout details in the portal.",
  },
  {
    question: "What happens if a customer gets a refund?",
    answer:
      "Refunded payments don't earn commission. If a refund happens after we've paid you for that payment, it's deducted from your next payout.",
  },
];

const Partners = () => {
  return (
    <>
      <Helmet>
        <title>Partner Programme: Earn 20% for 12 Months | AI Free Text Pro</title>
        <meta
          name="description"
          content="Share AI Free Text Pro with your audience and earn 20% of what each customer you refer pays in their first 12 months. Free to join, your own links and dashboard, paid monthly."
        />
        <link rel="canonical" href="https://aifreetextpro.com/partners" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Free Text Pro Partner Programme" />
        <meta property="og:description" content="Earn 20% of what each customer you refer pays in their first 12 months." />
        <meta property="og:url" content="https://aifreetextpro.com/partners" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aifreetextpro.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Free Text Pro Partner Programme" />
        <meta name="twitter:description" content="Earn 20% of what each customer you refer pays in their first 12 months." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
          })}
        </script>
      </Helmet>

      <Navbar />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Partner Programme", href: "/partners" }]} />
        </div>

        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6">
              <Handshake className="h-4 w-4" />
              Partner Programme
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Earn{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">20% for 12 months</span>{" "}
              by sharing AI Free Text Pro
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              For creators who help students and writers. Get your own links and a live dashboard, and earn on every payment from the people
              you bring for their first year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={JOIN_URL}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-8 w-full sm:w-auto">
                  Become a partner <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href={SIGN_IN_URL}>
                <Button size="lg" variant="outline" className="text-lg px-8 w-full sm:w-auto">
                  Partner sign in
                </Button>
              </a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Free to join. Commissions start on a date we announce in the partner portal; your links track results from day one.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">How it works</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <Card key={s.title} className="p-6">
                  <CardContent className="p-0 space-y-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{i + 1}</div>
                    <h3 className="font-bold text-lg">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">What you get</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <Card key={f.title} className="p-6">
                    <CardContent className="p-0 flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                        <p className="text-muted-foreground text-sm">{f.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* The deal */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The deal, in plain words</h2>
            <Card>
              <CardContent className="p-0 divide-y">
                {terms.map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <span className="font-medium">{k}</span>
                    <span className="text-muted-foreground sm:text-right">{v}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              The full rules are in the{" "}
              <a href={TERMS_URL} className="text-primary underline">
                Partner Terms
              </a>
              .
            </p>
          </div>
        </section>

        {/* Honest promotion */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Share it honestly</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Your audience trusts you. These rules keep it that way, and keep your partnership in good standing.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="flex items-center gap-2 font-bold text-lg mb-4">
                    <CheckCircle className="h-5 w-5 text-green-600" /> Do
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {dos.map((d) => (
                      <li key={d} className="flex gap-2">
                        <CheckCircle className="h-4 w-4 shrink-0 mt-0.5 text-green-600" /> {d}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="flex items-center gap-2 font-bold text-lg mb-4">
                    <XCircle className="h-5 w-5 text-destructive" /> Don't
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {donts.map((d) => (
                      <li key={d} className="flex gap-2">
                        <XCircle className="h-4 w-4 shrink-0 mt-0.5 text-destructive" /> {d}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" /> Your referrals' privacy is protected: you see results, never their full details.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner FAQs</h2>
            </div>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to share it?</h2>
            <p className="text-muted-foreground text-lg mb-8">Apply in two minutes. We'll email you as soon as you're approved.</p>
            <a href={JOIN_URL}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-12 py-6">
                Become a partner <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Partners;
