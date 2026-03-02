import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { 
  CheckCircle, FileCheck, Users, RefreshCw, Shield, 
  BookOpen, AlertCircle, Mail 
} from "lucide-react";

const EditorialGuidelines = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Editorial Guidelines | AI Free Text Pro</title>
        <meta name="description" content="How we ensure content accuracy: expert review, fact-checking, and regular updates. Every article is reviewed by AI researchers and content professionals." />
        <meta name="keywords" content="editorial guidelines, content standards, fact-checking, AI content quality, trusted content" />
        <link rel="canonical" href="https://aifreetextpro.com/editorial-guidelines" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="Editorial Guidelines - AI Free Text Pro Content Standards" />
        <meta property="og:description" content="Our commitment to accurate, expert-reviewed, and regularly updated content." />
        <meta property="og:url" content="https://aifreetextpro.com/editorial-guidelines" />
      </Helmet>

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs 
            items={[
              { label: "Home", href: "/" },
              { label: "Editorial Guidelines" }
            ]} 
          />
        </div>

        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <FileCheck className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Editorial Standards</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Editorial Guidelines</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our commitment to accuracy, transparency, and trustworthy content
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Our Commitment */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Commitment to Quality</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At AI Free Text Pro, we believe that trust is earned through consistent accuracy and transparency. Every piece of content on our website, from blog articles to product descriptions, undergoes a rigorous review process to ensure it meets our high standards.
                </p>
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Our Promise:</strong> All factual claims on this website are verified, all statistics are sourced, and all technical explanations are reviewed by subject matter experts before publication.
                  </p>
                </Card>
              </div>

              {/* Content Creation Process */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-7 h-7 text-primary" />
                  Content Creation Process
                </h2>
                
                <div className="space-y-6">
                  <Card className="p-6 border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Research & Drafting</h3>
                        <p className="text-muted-foreground">
                          Content begins with thorough research using primary sources, academic papers, industry reports, and expert interviews. Our writers have subject matter expertise in AI, NLP, content strategy, or academic writing.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Expert Review</h3>
                        <p className="text-muted-foreground">
                          Technical content is reviewed by our team of AI researchers and NLP specialists. Academic-focused content is reviewed by professionals with experience in educational institutions. Each reviewer has a <a href="/team" className="text-primary hover:underline">detailed bio on our team page</a>.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Fact-Checking</h3>
                        <p className="text-muted-foreground">
                          All statistics, claims, and technical statements are verified against original sources. We cite our sources and link to authoritative references wherever possible.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Publication & Monitoring</h3>
                        <p className="text-muted-foreground">
                          After publication, content is monitored for accuracy. As AI detection technology evolves rapidly, we regularly update articles to reflect the latest developments.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Update Policy */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                  <RefreshCw className="w-7 h-7 text-primary" />
                  Content Update Policy
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border-border/50">
                    <h3 className="text-lg font-bold mb-3">Regular Reviews</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>All product pages reviewed monthly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Blog articles updated quarterly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Comparison pages updated when competitors change</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6 border-border/50">
                    <h3 className="text-lg font-bold mb-3">Update Triggers</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Major AI detector algorithm changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>New research or data availability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>User feedback indicating inaccuracies</span>
                      </li>
                    </ul>
                  </Card>
                </div>

                <p className="text-muted-foreground mt-4">
                  Updated articles display a "Last Updated" date to ensure readers know the information is current.
                </p>
              </div>

              {/* Expert Reviewers */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                  <Users className="w-7 h-7 text-primary" />
                  Our Expert Reviewers
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Content is reviewed by team members with verified expertise. Each article displays "Reviewed by [Expert Name]" with a link to their bio. Our reviewers include:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 text-center border-border/50">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-primary">AI</span>
                    </div>
                    <h3 className="font-bold">AI Researchers</h3>
                    <p className="text-sm text-muted-foreground">Ph.D. holders in NLP & ML</p>
                  </Card>

                  <Card className="p-4 text-center border-border/50">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-secondary">ED</span>
                    </div>
                    <h3 className="font-bold">Educators</h3>
                    <p className="text-sm text-muted-foreground">Academic integrity specialists</p>
                  </Card>

                  <Card className="p-4 text-center border-border/50">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold text-primary">CW</span>
                    </div>
                    <h3 className="font-bold">Content Writers</h3>
                    <p className="text-sm text-muted-foreground">10+ years professional writing</p>
                  </Card>
                </div>
              </div>

              {/* Transparency */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-7 h-7 text-primary" />
                  Transparency Standards
                </h2>
                
                <div className="space-y-4">
                  <Card className="p-6 border-border/50">
                    <h3 className="font-bold mb-2">Affiliate Disclosure</h3>
                    <p className="text-muted-foreground">
                      We may earn commissions from some links on our site. This never influences our editorial content or recommendations. Our reviews are based on independent testing.
                    </p>
                  </Card>

                  <Card className="p-6 border-border/50">
                    <h3 className="font-bold mb-2">Sponsored Content</h3>
                    <p className="text-muted-foreground">
                      Any sponsored or paid content is clearly labeled. We do not accept payment for positive reviews.
                    </p>
                  </Card>

                  <Card className="p-6 border-border/50">
                    <h3 className="font-bold mb-2">Corrections Policy</h3>
                    <p className="text-muted-foreground">
                      If we publish incorrect information, we issue a correction at the top of the article and note what was changed. We take accuracy seriously.
                    </p>
                  </Card>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertCircle className="w-7 h-7 text-primary" />
                  Report an Issue
                </h2>
                
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <p className="text-muted-foreground mb-4">
                    Found an error or outdated information? We want to know. Our editorial team reviews all feedback within 48 hours.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Our Editorial Team
                  </a>
                </Card>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EditorialGuidelines;