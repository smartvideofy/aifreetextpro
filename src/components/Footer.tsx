import { Link } from "react-router-dom";
import { Mail, BookOpen, MessageSquare, Shield, Check, Target, Users, FileText, Sparkles, GraduationCap, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";

type FooterSection = {
  title: string;
  icon?: React.ReactNode;
  links: { href: string; label: string; external?: boolean; icon?: React.ReactNode }[];
};

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { href: "https://app.aifreetextpro.com/detector", label: "AI Detector", external: true },
      { href: "https://app.aifreetextpro.com/humanizer", label: "AI Humanizer", external: true },
      { href: "/ai-checker", label: "AI Checker" },
      { href: "https://app.aifreetextpro.com/plagiarism", label: "Plagiarism Checker", external: true },
      { href: "https://app.getstudily.com", label: "Create Flashcard", external: true },
      { href: "https://getstudily.com", label: "AI Study Notes", external: true },
    ],
  },
  {
    title: "Bypass Guides",
    icon: <Target className="w-4 h-4" />,
    links: [
      { href: "/bypass-turnitin-ai-detection", label: "Bypass Turnitin" },
      { href: "/bypass-gptzero-detection", label: "Bypass GPTZero" },
      { href: "/bypass-originality-ai", label: "Bypass Originality.AI" },
      { href: "/blog/bypass-copyleaks-ai-detection", label: "Bypass Copyleaks" },
      { href: "/blog/bypass-winston-ai-detection", label: "Bypass Winston AI" },
      { href: "/blog/bypass-zerogpt-ai-detection", label: "Bypass ZeroGPT" },
    ],
  },
  {
    title: "Compare Tools",
    icon: <Sparkles className="w-4 h-4" />,
    links: [
      { href: "/vs-writehuman", label: "vs WriteHuman" },
      { href: "/vs-undetectable-ai", label: "vs Undetectable AI" },
      { href: "/vs-humanizeai-pro", label: "vs HumanizeAI.pro" },
      { href: "/blog/gptinf-vs-ai-free-text-pro", label: "vs GPTinf" },
      { href: "/blog/zerogpt-vs-ai-free-text-pro-2025", label: "vs ZeroGPT" },
    ],
  },
  {
    title: "Use Cases",
    icon: <Users className="w-4 h-4" />,
    links: [
      { href: "/ai-humanizer-for-students", label: "For Students" },
      { href: "/ai-humanizer-for-writers", label: "For Writers" },
      { href: "/academic-ai-writing-tool", label: "Academic Writing" },
    ],
  },
  {
    title: "Popular Guides",
    icon: <GraduationCap className="w-4 h-4" />,
    links: [
      { href: "/blog/how-ai-detectors-work", label: "How AI Detectors Work" },
      { href: "/blog/humanize-ai-text-without-losing-voice", label: "Humanize AI Text" },
      { href: "/blog/pass-all-ai-detectors-guide", label: "Pass All AI Detectors" },
      { href: "/blog/ai-content-seo-undetectable", label: "AI Content for SEO" },
      { href: "/blog/top-10-ai-humanizer-tools-2025", label: "Top 10 AI Humanizers" },
      { href: "/blog/academic-ai-writing-safely", label: "Academic AI Writing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog", icon: <BookOpen className="w-4 h-4" /> },
      { href: "/pricing", label: "Pricing" },
      { href: "/guarantee", label: "Money-Back Guarantee", icon: <Shield className="w-4 h-4" /> },
      { href: "/about", label: "About Us" },
      { href: "/team", label: "Our Team" },
      { href: "/technology", label: "Our Technology" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/editorial-guidelines", label: "Editorial Guidelines" },
      { href: "/contact", label: "Contact Us", icon: <MessageSquare className="w-4 h-4" /> },
    ],
  },
];

const FooterAccordionItem = ({ section, isOpen, onToggle }: { section: FooterSection; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="border-b border-border/30 last:border-b-0 md:border-b-0">
      {/* Mobile: Collapsible */}
      <button
        onClick={onToggle}
        className="md:hidden flex items-center justify-between w-full py-4 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          {section.icon}
          {section.title}
        </h3>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {/* Desktop: Always visible title */}
      <h3 className="hidden md:flex font-semibold text-foreground items-center gap-2 mb-4">
        {section.icon}
        {section.title}
      </h3>
      
      {/* Links - collapsible on mobile */}
      <nav className={`flex flex-col gap-2 text-sm overflow-hidden transition-all duration-300 md:overflow-visible ${
        isOpen ? 'max-h-96 pb-4' : 'max-h-0 md:max-h-none'
      }`}>
        {section.links.map((link, index) => (
          link.external ? (
            <a 
              key={index}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors py-1 md:py-0 flex items-center gap-2"
            >
              {link.icon}
              {link.label}
            </a>
          ) : (
            <Link 
              key={index}
              to={link.href} 
              className="text-muted-foreground hover:text-primary transition-colors py-1 md:py-0 flex items-center gap-2"
            >
              {link.icon}
              {link.label}
            </Link>
          )
        ))}
      </nav>
    </div>
  );
};

const Footer = () => {
  const [openSections, setOpenSections] = useState<Set<number>>(new Set());

  const toggleSection = (index: number) => {
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0 md:gap-8 mb-8">
          {/* Brand Column - Always visible */}
          <div className="space-y-4 lg:col-span-1 pb-6 md:pb-0 border-b border-border/30 md:border-b-0">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="AI Free Text Pro" className="w-8 h-8" />
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Free Text Pro
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Detect and humanize AI text with 98% accuracy. Fast, free, and privacy-focused.
            </p>
            
            {/* Trust Badges - Visible on mobile too */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>98% Accuracy Rate</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>50,000+ Users</span>
              </div>
            </div>
          </div>

          {/* Accordion Sections */}
          {footerSections.map((section, index) => (
            <FooterAccordionItem
              key={index}
              section={section}
              isOpen={openSections.has(index)}
              onToggle={() => toggleSection(index)}
            />
          ))}
        </div>

        {/* Email Support - Mobile friendly */}
        <div className="py-4 border-t border-border/30 md:hidden">
          <a href="mailto:support@aifreetextpro.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2">
            <Mail className="w-4 h-4" />
            support@aifreetextpro.com
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2026 AI Free Text Pro. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors py-2">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors py-2">
              Terms of Service
            </Link>
            <Link to="/cookie-settings" className="hover:text-primary transition-colors py-2">
              Cookie Settings
            </Link>
            <div className="hidden md:flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Secure & Private</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;