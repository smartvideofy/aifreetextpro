import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Linkedin, Twitter, BookOpen, Award, GraduationCap, Code, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Founder & CEO",
    slug: "sarah-chen",
    initials: "SC",
    bio: "Former computational linguistics researcher at MIT with 12+ years in NLP and AI. Sarah pioneered early work on stylometric analysis and authored 15+ peer-reviewed papers on machine learning applications in text analysis. She founded AI Free Text Pro to democratize access to advanced AI writing tools.",
    credentials: ["Ph.D. Computational Linguistics, MIT", "Former Research Lead at Google AI", "15+ Published Papers in NLP"],
    specialties: ["Natural Language Processing", "Machine Learning", "Stylometric Analysis"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Marcus Williams",
    role: "Chief Technology Officer",
    slug: "marcus-williams",
    initials: "MW",
    bio: "15 years in software engineering with expertise in distributed systems and AI infrastructure. Marcus previously led engineering teams at Grammarly and built scalable NLP pipelines processing billions of documents. His architecture ensures our platform handles peak loads with sub-second response times.",
    credentials: ["M.S. Computer Science, Stanford", "Former Engineering Lead at Grammarly", "AWS Certified Solutions Architect"],
    specialties: ["Distributed Systems", "AI Infrastructure", "Scalable Architecture"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Head of AI Research",
    slug: "emily-rodriguez",
    initials: "ER",
    bio: "AI researcher specializing in transformer models and text generation. Emily's doctoral work focused on detecting synthetic text patterns, giving her unique insight into both AI detection and humanization. She leads our R&D team in developing next-generation rewriting algorithms.",
    credentials: ["Ph.D. Artificial Intelligence, Carnegie Mellon", "Former Researcher at OpenAI", "10+ Papers on Text Generation"],
    specialties: ["Transformer Models", "Text Generation", "AI Detection"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "James Okonkwo",
    role: "Lead Content Strategist",
    slug: "james-okonkwo",
    initials: "JO",
    bio: "Award-winning journalist and content strategist with 10+ years in digital publishing. James brings real-world writing expertise to our product development, ensuring our humanization algorithms produce content that meets professional editorial standards.",
    credentials: ["M.A. Journalism, Columbia University", "Former Senior Editor at Forbes", "PRSA Award Winner"],
    specialties: ["Content Strategy", "Editorial Standards", "Digital Publishing"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Dr. Anika Patel",
    role: "Lead Data Scientist",
    slug: "anika-patel",
    initials: "AP",
    bio: "Specialist in statistical modeling and linguistic pattern recognition. Anika's research on writing style fingerprinting forms the foundation of our detection bypass technology. She continuously refines our models based on the latest AI detector developments.",
    credentials: ["Ph.D. Statistics, UC Berkeley", "Former Data Scientist at Amazon", "Expert in Linguistic Modeling"],
    specialties: ["Statistical Modeling", "Pattern Recognition", "Writing Style Analysis"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Thomas Müller",
    role: "Head of Customer Success",
    slug: "thomas-mueller",
    initials: "TM",
    bio: "Customer experience leader with deep expertise in SaaS products and educational technology. Thomas ensures our users get maximum value from AI Free Text Pro, gathering feedback that directly influences product development.",
    credentials: ["MBA, INSEAD", "Former VP at Coursera", "Customer Success Specialist"],
    specialties: ["Customer Experience", "EdTech", "Product Feedback"],
    linkedin: "#",
    twitter: "#"
  }
];

const advisors = [
  {
    name: "Prof. Robert Lancaster",
    role: "Academic Advisor",
    affiliation: "Professor of Digital Humanities, Oxford University",
    expertise: "Academic integrity and AI in education"
  },
  {
    name: "Dr. Lisa Chang",
    role: "AI Ethics Advisor",
    affiliation: "Former Google AI Ethics Board Member",
    expertise: "Responsible AI development and deployment"
  },
  {
    name: "Michael Torres",
    role: "Industry Advisor",
    affiliation: "Former VP of Product, Grammarly",
    expertise: "AI writing tools and market strategy"
  }
];

const Team = () => {
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Free Text Pro",
    "url": "https://aifreetextpro.com",
    "description": "AI detection and humanization tools built by experts in NLP, machine learning, and content strategy.",
    "foundingDate": "2023",
    "founder": {
      "@type": "Person",
      "name": "Dr. Sarah Chen",
      "jobTitle": "Founder & CEO"
    },
    "employee": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Our Team - Meet the Experts Behind AI Free Text Pro</title>
        <meta name="description" content="Meet the team of AI researchers, linguists, and content experts building AI Free Text Pro. Our experts bring decades of experience in NLP, machine learning, and digital publishing." />
        <meta name="keywords" content="AI Free Text Pro team, AI experts, NLP researchers, content strategists, AI humanizer developers" />
        <link rel="canonical" href="https://aifreetextpro.com/team" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Team - Meet the Experts Behind AI Free Text Pro" />
        <meta property="og:description" content="Meet our team of AI researchers, linguists, and content experts building the most advanced AI humanization tools." />
        <meta property="og:url" content="https://aifreetextpro.com/team" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(teamSchema)}
        </script>
      </Helmet>

      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 pt-6">
          <Breadcrumbs 
            items={[
              { label: "Home", href: "/" },
              { label: "Team" }
            ]} 
          />
        </div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Built by Experts, For Everyone
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our team combines decades of experience in AI research, computational linguistics, and professional content creation to build the most effective humanization tools available.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the people shaping the future of AI content tools
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} id={member.slug} className="p-6 hover:shadow-xl transition-all border-border/50 bg-gradient-to-br from-card to-card/80 scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1">
                        <Award className="w-3 h-3" /> Credentials
                      </h4>
                      <ul className="text-xs space-y-1">
                        {member.credentials.map((cred, i) => (
                          <li key={i} className="text-muted-foreground">• {cred}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1">
                        <Code className="w-3 h-3" /> Specialties
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-3 border-t border-border/50">
                    <a href={member.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advisory Board</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Industry leaders and academics guiding our strategic direction
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {advisors.map((advisor, index) => (
                <Card key={index} className="p-6 text-center border-border/50">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{advisor.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{advisor.role}</p>
                  <p className="text-muted-foreground text-sm mb-2">{advisor.affiliation}</p>
                  <p className="text-xs text-muted-foreground italic">{advisor.expertise}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Learn More About Us</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/technology" className="group">
                  <Card className="p-6 h-full hover:shadow-lg transition-all border-border/50">
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Our Technology</h3>
                    <p className="text-sm text-muted-foreground mb-3">Discover how our AI humanization algorithms work.</p>
                    <span className="text-primary text-sm flex items-center gap-1">
                      Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/case-studies" className="group">
                  <Card className="p-6 h-full hover:shadow-lg transition-all border-border/50">
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Case Studies</h3>
                    <p className="text-sm text-muted-foreground mb-3">See real results from our customers.</p>
                    <span className="text-primary text-sm flex items-center gap-1">
                      View results <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/editorial-guidelines" className="group">
                  <Card className="p-6 h-full hover:shadow-lg transition-all border-border/50">
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Editorial Standards</h3>
                    <p className="text-sm text-muted-foreground mb-3">Our commitment to quality content.</p>
                    <span className="text-primary text-sm flex items-center gap-1">
                      Read guidelines <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-10 text-center bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-border/50">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals passionate about AI, writing, and making technology accessible to everyone.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </Link>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;