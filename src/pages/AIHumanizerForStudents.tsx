import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, BookOpen, Shield, Clock, Award, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Link } from "react-router-dom";

const AIHumanizerForStudents = () => {
  const painPoints = [
    {
      icon: Shield,
      title: "Academic Integrity Concerns",
      problem: "AI-generated content gets flagged by Turnitin, GPTZero, and other detectors, risking academic penalties.",
      solution: "Humanize AI text with 97% bypass rate on Turnitin. Pass detection checks while maintaining your original ideas."
    },
    {
      icon: Clock,
      title: "Time Pressure & Deadlines",
      problem: "Multiple assignments, exams, and projects leave little time for extensive editing and rewriting.",
      solution: "Transform AI drafts to human-quality writing in 3 seconds. Cut editing time by 80% while improving quality."
    },
    {
      icon: BookOpen,
      title: "Writing Quality Standards",
      problem: "AI text sounds robotic and generic, failing to meet academic writing standards and professor expectations.",
      solution: "Academic writing mode preserves formal tone, proper citations, and scholarly language while adding natural variation."
    },
    {
      icon: Award,
      title: "Grade Point Average Anxiety",
      problem: "Fear of AI detection leading to zero grades, academic probation, or worse affects mental health and performance.",
      solution: "100% money-back guarantee if flagged. Study stress-free knowing your work passes all detection tools."
    }
  ];

  const useCases = [
    {
      title: "Research Papers & Essays",
      description: "Use AI for research and drafting, then humanize to meet academic standards. Perfect for 5-20 page papers.",
      features: ["Literature reviews", "Thesis statements", "Citations formatting", "Argument development"]
    },
    {
      title: "Lab Reports & Case Studies",
      description: "Technical writing that passes Turnitin while maintaining scientific accuracy and formal tone.",
      features: ["Methodology sections", "Results analysis", "Discussion sections", "Abstract writing"]
    },
    {
      title: "Homework & Discussion Posts",
      description: "Quick turnaround for weekly assignments, online discussions, and short-answer questions.",
      features: ["Forum responses", "Reflection papers", "Reading summaries", "Quick assignments"]
    },
    {
      title: "Thesis & Dissertations",
      description: "Large document support (PDF/DOCX upload) for graduate-level work with consistent humanization.",
      features: ["Chapter editing", "Literature review", "Methodology", "Full document processing"]
    }
  ];

  const testimonials = [
    {
      name: "Jessica Park",
      school: "UC Berkeley",
      major: "Computer Science",
      text: "Used AI Free Text Pro for my entire senior thesis. Passed Turnitin with 0% AI detection. My professor praised the 'natural writing style.' Saved my GPA and my sanity.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      school: "University of Texas",
      major: "Business Administration",
      text: "Weekly case studies were killing me. This tool cut my writing time from 6 hours to 2 hours per assignment. Still got A's. Game-changer for busy students.",
      rating: 5
    },
    {
      name: "Sophia Chen",
      school: "MIT",
      major: "Biology",
      text: "Lab reports require perfect technical writing. AI Free Text Pro maintains scientific accuracy while making it sound human. My TA can't tell the difference. Worth every penny.",
      rating: 5
    }
  ];

  const pricingRecommendation = [
    {
      plan: "Free Plan",
      best: "Testing & Small Assignments",
      description: "1,000 words/month is enough for 2-3 short discussion posts or one essay. Great for trying the tool.",
      price: "$0"
    },
    {
      plan: "Lite Plan",
      best: "Most Students (Recommended)",
      description: "10,000 words/month covers 2-3 essays or 5-6 lab reports. Perfect for typical undergraduate workload.",
      price: "$9.99/mo",
      highlighted: true
    },
    {
      plan: "Pro Writer",
      best: "Heavy Coursework & Grad Students",
      description: "50,000 words/month handles thesis chapters, multiple research papers, and comprehensive exams.",
      price: "$24.99/mo"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AI Humanizer for Students [Dec 2025] - Pass Turnitin 97% Free</title>
        <meta name="description" content="Student AI humanizer bypasses Turnitin, GPTZero with 97% success. Transform AI essays to human writing in seconds. Academic mode + PDF upload. Free tier. 25,000+ students." />
        <meta name="keywords" content="ai humanizer for students, bypass turnitin, student ai writing tool, academic ai humanizer, pass turnitin ai detection" />
        <link rel="canonical" href="https://aifreetextpro.com/ai-humanizer-for-students" />
        <meta property="og:title" content="AI Humanizer for Students [Dec 2025] - Pass Turnitin 97%" />
        <meta property="og:description" content="97% bypass rate on Turnitin. Transform AI essays to human writing. Academic mode. PDF upload. 25,000+ students." />
        <meta property="og:url" content="https://aifreetextpro.com/ai-humanizer-for-students" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifreetextpro.com/" },
              { "@type": "ListItem", "position": 2, "name": "AI Humanizer for Students", "item": "https://aifreetextpro.com/ai-humanizer-for-students" }
            ]
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "AI Humanizer for Students" }
          ]} />
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold">Trusted by 25,000+ Students</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Humanizer Built for Students
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Transform AI-generated essays and research papers into natural, human-quality academic writing. Bypass Turnitin, GPTZero, and university detectors with 97% success rate.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Pass Turnitin</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Academic Writing Mode</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>PDF Upload Support</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>100% Money-Back</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.aifreetextpro.com/" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Start Free — 1,000 Words
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link to="/bypass-turnitin-ai-detection" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full text-lg px-8 py-6">
                    See Turnitin Test Results
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Student Pain Points */}
        <section className="py-20 bg-gradient-to-b from-card/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Built to Solve Real Student Challenges
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {painPoints.map((point, idx) => {
                  const Icon = point.icon;
                  return (
                    <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{point.problem}</p>
                          <p className="text-sm font-semibold text-primary">{point.solution}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Perfect for Every Assignment Type
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {useCases.map((useCase, idx) => (
                  <Card key={idx} className="p-6">
                    <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Student Testimonials */}
        <section className="py-20 bg-gradient-to-b from-background to-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Real Students, Real Results
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                See how students use AI Free Text Pro to maintain their GPA
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-primary text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic text-sm">"{testimonial.text}"</p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.school}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.major}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Recommendation */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Student-Friendly Pricing
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Choose the plan that fits your coursework volume
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {pricingRecommendation.map((plan, idx) => (
                  <Card key={idx} className={`p-6 ${plan.highlighted ? 'border-2 border-primary shadow-lg' : ''}`}>
                    {plan.highlighted && (
                      <div className="text-center mb-4">
                        <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold mb-2">{plan.plan}</h3>
                      <p className="text-3xl font-bold text-primary mb-2">{plan.price}</p>
                      <p className="text-sm font-semibold text-secondary mb-2">{plan.best}</p>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                    <a href="https://app.aifreetextpro.com/" className="block">
                      <Button 
                        className={`w-full ${plan.highlighted ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}
                        variant={plan.highlighted ? 'default' : 'outline'}
                      >
                        Get Started
                      </Button>
                    </a>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/pricing">
                  <Button variant="link">View all plans and features →</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Pass Detection. Protect Your GPA.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join 25,000+ students who trust AI Free Text Pro for academic success.
              </p>
              <a href="https://app.aifreetextpro.com/" className="inline-block">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-lg px-10 py-6">
                  Start Writing — 100% Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="mt-6 text-sm text-muted-foreground">
                1,000 free words/month. No credit card required. 100% money-back guarantee.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <RelatedArticles articles={[
            {
              title: "AI Writing for Students: How to Avoid Plagiarism Issues",
              description: "Complete guide for students using AI writing tools responsibly while maintaining academic integrity and avoiding detection.",
              href: "/blog/ai-writing-students-avoid-plagiarism",
              category: "Student Guide"
            },
            {
              title: "Bypass Turnitin AI Detection in 2025",
              description: "Advanced strategies specifically designed to bypass Turnitin's AI detection algorithm with 97% success rate.",
              href: "/bypass-turnitin-ai-detection",
              category: "Detection Guide"
            },
            {
              title: "Academic AI Writing Tool: Research Papers & Essays",
              description: "Specialized AI writing tool for academic content that passes Turnitin with citation preservation and scholarly tone.",
              href: "/academic-ai-writing-tool",
              category: "Academic Tools"
            }
          ]} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIHumanizerForStudents;
