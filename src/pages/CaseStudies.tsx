import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { InternalLinks } from "@/components/InternalLinks";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  CheckCircle, XCircle, ArrowRight, Star, TrendingUp, 
  GraduationCap, Briefcase, PenTool, BarChart3 
} from "lucide-react";

// Import testimonial profile images
import michaelRodriguez from "@/assets/testimonials/michael-rodriguez.jpg";
import jamesChen from "@/assets/testimonials/james-chen.jpg";
import davidKim from "@/assets/testimonials/david-kim.jpg";

const caseStudies = [
  {
    id: "academic-paper",
    title: "Graduate Thesis Passes Turnitin AI Check",
    category: "Academic",
    icon: GraduationCap,
    user: {
      name: "Michael R.",
      role: "Master's Student, Computer Science",
      initials: "MR",
      avatar: michaelRodriguez
    },
    problem: "Used ChatGPT to help structure and expand thesis sections. Initial Turnitin scan showed 78% AI probability.",
    solution: "Processed 12,000-word document through AI Free Text Pro using Academic mode with original meaning preservation.",
    results: [
      { metric: "Before", value: "78%", label: "AI Detection Score" },
      { metric: "After", value: "3%", label: "AI Detection Score" },
      { metric: "Time Saved", value: "15 hrs", label: "vs. manual rewriting" }
    ],
    testimonial: "I was devastated when my thesis flagged as AI-generated. AI Free Text Pro saved my degree. The rewritten version reads even better than my original and passed Turnitin completely.",
    beforeText: "The implementation of machine learning algorithms in healthcare diagnostics represents a significant advancement in medical technology. Furthermore, the integration of these systems enables more accurate and efficient patient care. Additionally, the utilization of neural networks facilitates pattern recognition in complex medical data.",
    afterText: "Machine learning is changing how doctors diagnose patients, and the results are striking. When hospitals integrate these AI systems, they're seeing real improvements in accuracy and efficiency. Neural networks, in particular, excel at spotting patterns in medical scans that human eyes might miss."
  },
  {
    id: "seo-content",
    title: "Marketing Agency Scales Content Production 5x",
    category: "Business",
    icon: Briefcase,
    user: {
      name: "Jennifer K.",
      role: "Content Director, Digital Marketing Agency",
      initials: "JK",
      avatar: jamesChen
    },
    problem: "Agency needed to produce 100+ blog posts monthly. AI-generated content was being rejected by client sites using Originality.AI.",
    solution: "Integrated AI Free Text Pro API into content workflow. All AI-drafted content processed through Professional mode before delivery.",
    results: [
      { metric: "Content Output", value: "5x", label: "Increase" },
      { metric: "Client Rejection Rate", value: "0%", label: "AI Detection Flags" },
      { metric: "Cost Savings", value: "$12K/mo", label: "vs. human writers" }
    ],
    testimonial: "We went from producing 20 articles monthly to 100+. Every single piece passes Originality.AI. Our clients are thrilled with the quality, and they have no idea we're using AI assistance.",
    beforeText: "In today's digital landscape, implementing effective SEO strategies is essential for business success. Moreover, companies that prioritize search engine optimization consistently outperform their competitors. It is important to note that content quality remains a crucial factor in ranking algorithms.",
    afterText: "SEO isn't optional anymore, it's survival. The businesses crushing it online? They're the ones who figured out search early. But here's the thing most people miss: Google's gotten smart. Keyword stuffing is dead. What works now is genuinely useful content that people actually want to read."
  },
  {
    id: "freelance-writer",
    title: "Freelancer Increases Earnings by 200%",
    category: "Freelance",
    icon: PenTool,
    user: {
      name: "David L.",
      role: "Freelance Tech Writer",
      initials: "DL",
      avatar: davidKim
    },
    problem: "Clients started requiring AI-free content verified by ZeroGPT. Writing speed couldn't keep up with demand without AI assistance.",
    solution: "Uses ChatGPT for initial drafts, then humanizes with AI Free Text Pro before submission. All content verified AI-free.",
    results: [
      { metric: "Projects Completed", value: "3x", label: "Per Month" },
      { metric: "Income Increase", value: "200%", label: "Year over Year" },
      { metric: "Detection Passes", value: "100%", label: "ZeroGPT Verified" }
    ],
    testimonial: "I was about to lose clients when they started checking for AI. Now I can take on triple the work, deliver faster, and everything passes their AI checks. It's completely changed my business.",
    beforeText: "Artificial intelligence has fundamentally transformed the technology sector. The implementation of AI solutions across various industries has led to increased efficiency and productivity. It is worth noting that companies investing in AI technologies are seeing substantial returns on their investments.",
    afterText: "AI didn't just change tech, it blew the doors off. Every industry from healthcare to finance is scrambling to figure out how to use it. And the early adopters? They're already seeing returns that make their competitors nervous."
  }
];

const aggregateStats = [
  { value: "50,000+", label: "Active Users" },
  { value: "98%", label: "Bypass Success Rate" },
  { value: "15+", label: "Detectors Bypassed" },
  { value: "4.9/5", label: "User Rating" }
];

const CaseStudies = () => {
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI Free Text Pro Case Studies",
    "description": "Real-world examples of how AI Free Text Pro helps students, businesses, and freelancers pass AI detection while maintaining content quality.",
    "url": "https://aifreetextpro.com/case-studies",
    "mainEntity": caseStudies.map(study => ({
      "@type": "Article",
      "headline": study.title,
      "description": study.problem
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Case Studies - Real AI Humanizer Results</title>
        <meta name="description" content="See how students reduced Turnitin scores from 78% to 3%, and agencies scaled content 5x. Real before/after comparisons with verified results." />
        <meta name="keywords" content="AI humanizer case studies, bypass AI detection examples, Turnitin bypass results, AI content success stories" />
        <link rel="canonical" href="https://aifreetextpro.com/case-studies" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="Case Studies - Real Results from AI Free Text Pro Users" />
        <meta property="og:description" content="Real examples showing before/after results of AI humanization passing major detectors." />
        <meta property="og:url" content="https://aifreetextpro.com/case-studies" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        <meta property="og:site_name" content="AI Free Text Pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aifreetextpro" />
        <meta name="twitter:title" content="Case Studies - Real Results from AI Free Text Pro Users" />
        <meta name="twitter:description" content="Real examples showing before/after results of AI humanization passing major detectors." />
        <meta name="twitter:image" content="https://storage.googleapis.com/gpt-engineer-file-uploads/pMRdXBn6dLVGnmBuHKJGJfIOYh42/social-images/social-1759692115249-Logo.PNG" />
        <script type="application/ld+json">
          {JSON.stringify(caseStudySchema)}
        </script>
      </Helmet>

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs 
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies" }
            ]} 
          />
        </div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Real Results</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Success Stories from Real Users
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See exactly how students, businesses, and freelancers use AI Free Text Pro to transform their AI content into undetectable, natural writing.
              </p>
            </div>
          </div>
        </section>

        {/* Aggregate Stats */}
        <section className="py-12 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {aggregateStats.map((stat, i) => (
                <Card key={i} className="p-6 text-center border-border/50">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-16">
              {caseStudies.map((study, index) => (
                <Card key={study.id} className="overflow-hidden border-border/50">
                  {/* Header */}
                  <div className="p-6 md:p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <study.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-primary">{study.category}</span>
                        <h2 className="text-2xl md:text-3xl font-bold">{study.title}</h2>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border-2 border-primary/30">
                        {study.user.avatar && (
                          <AvatarImage src={study.user.avatar} alt={study.user.name} className="object-cover" />
                        )}
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground font-semibold text-sm">
                          {study.user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{study.user.name}</p>
                        <p className="text-sm text-muted-foreground">{study.user.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Problem & Solution */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                          <XCircle className="w-5 h-5 text-destructive" />
                          The Challenge
                        </h3>
                        <p className="text-muted-foreground">{study.problem}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          The Solution
                        </h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.results.map((result, i) => (
                        <Card key={i} className="p-4 text-center bg-primary/5 border-primary/10">
                          <p className="text-sm text-muted-foreground mb-1">{result.metric}</p>
                          <p className="text-2xl font-bold text-primary">{result.value}</p>
                          <p className="text-xs text-muted-foreground">{result.label}</p>
                        </Card>
                      ))}
                    </div>

                    {/* Before/After */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Before & After Comparison
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                          <div className="flex items-center gap-2 mb-2">
                            <XCircle className="w-4 h-4 text-destructive" />
                            <span className="text-sm font-semibold text-destructive">Before (AI Detected)</span>
                          </div>
                          <p className="text-sm text-muted-foreground italic">"{study.beforeText}"</p>
                        </div>
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">After (Human-Like)</span>
                          </div>
                          <p className="text-sm text-muted-foreground italic">"{study.afterText}"</p>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="p-4 rounded-lg bg-gradient-to-r from-secondary/5 to-primary/5 border border-border/50">
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">"{study.testimonial}"</p>
                      <p className="text-sm font-medium mt-2">{study.user.name}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-10 text-center bg-gradient-to-br from-primary via-primary to-secondary border-0 text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join 50,000+ users who trust AI Free Text Pro to make their content undetectable.
              </p>
              <a 
                href="https://app.aifreetextpro.com/humanizer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-background text-foreground font-bold text-lg hover:bg-background/90 transition-colors"
              >
                Start Free Now <ArrowRight className="w-5 h-5" />
              </a>
            </Card>
          </div>
        </section>
      </main>

      <InternalLinks variant="full" currentPage="/case-studies" />
      <Footer />
    </div>
  );
};

export default CaseStudies;