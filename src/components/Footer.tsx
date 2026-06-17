import { Link } from "react-router-dom";
import { Mail, BookOpen, MessageSquare, Shield, Check, Target, Users, Sparkles, GraduationCap, ChevronDown, HelpCircle } from "lucide-react";
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
      { href: "/api", label: "API" },
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
      { href: "/vs/stealthwriter", label: "vs StealthWriter" },
      { href: "/vs/phrasly", label: "vs Phrasly" },
      { href: "/vs/bypassgpt", label: "vs BypassGPT" },
      { href: "/vs/humbot", label: "vs Humbot" },
      { href: "/compare-ai-humanizers", label: "All comparisons" },
    ],
  },
  {
    title: "AI Detectors",
    icon: <Shield className="w-4 h-4" />,
    links: [
      { href: "/detector/turnitin", label: "Turnitin" },
      { href: "/detector/gptzero", label: "GPTZero" },
      { href: "/detector/originality", label: "Originality.AI" },
      { href: "/detector/copyleaks", label: "Copyleaks" },
      { href: "/detector/winston", label: "Winston AI" },
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
      { href: "/blog", label: "Blog" },
      { href: "/pricing", label: "Pricing" },
      { href: "/guarantee", label: "Money-Back Guarantee" },
      { href: "/help-center", label: "Help Center" },
      { href: "/about", label: "About Us" },
      { href: "/team", label: "Our Team" },
      { href: "/technology", label: "Our Technology" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/editorial-guidelines", label: "Editorial Guidelines" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];

const FooterAccordionItem = ({ section, isOpen, onToggle }: { section: FooterSection; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="border-b border-border/20 last:border-b-0 md:border-b-0">
      {/* Mobile: Collapsible */}
      <button
        onClick={onToggle}
        className="md:hidden flex items-center justify-between w-full py-4 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-foreground flex items-center gap-2 text-sm">
          {section.icon}
          {section.title}
        </h3>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {/* Desktop: Always visible title */}
      <h3 className="hidden md:flex font-medium text-foreground items-center gap-2 mb-4 text-sm">
        {section.icon}
        {section.title}
      </h3>
      
      {/* Links */}
      <nav aria-label={section.title} className={`flex flex-col gap-2.5 text-sm overflow-hidden transition-all duration-300 md:overflow-visible ${
        isOpen ? 'max-h-96 pb-4' : 'max-h-0 md:max-h-none'
      }`}>
        {section.links.map((link, index) => (
          link.external ? (
            <a 
              key={index}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors py-0.5 flex items-center gap-2"
            >
              {link.icon}
              {link.label}
            </a>
          ) : (
            <Link 
              key={index}
              to={link.href} 
              className="text-muted-foreground hover:text-foreground transition-colors py-0.5 flex items-center gap-2"
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
    <footer className="border-t bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-0 md:gap-8 mb-10">
          {/* Brand Column */}
          <div className="space-y-4 lg:col-span-1 pb-6 md:pb-0 border-b border-border/20 md:border-b-0">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="AI Free Text Pro" className="w-8 h-8" width={32} height={32} />
              <span className="font-semibold text-base text-foreground">
                AI Free Text Pro
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Detect and humanize AI text with 98% accuracy. Fast, free, and privacy-focused.
            </p>
            
            {/* Trust Badges */}
            <div className="pt-3 space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>98% Accuracy Rate</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
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

        {/* Email Support - Mobile */}
        <div className="py-4 border-t border-border/20 md:hidden">
          <a href="mailto:support@aifreetextpro.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
            <Mail className="w-4 h-4" />
            support@aifreetextpro.com
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-muted-foreground text-center md:text-left">
            © 2026 AI Free Text Pro. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie-settings" className="hover:text-foreground transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
