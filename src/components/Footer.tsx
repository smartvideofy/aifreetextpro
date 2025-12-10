import { Link } from "react-router-dom";
import { Mail, BookOpen, MessageSquare, Shield, Check, Target, Users, FileText } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="AI Free Text Pro" className="w-8 h-8" />
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Free Text Pro
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Detect and humanize AI text with 98% accuracy. Fast, free, and privacy-focused.
            </p>
          </div>

          {/* Product Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="https://app.aifreetextpro.com/detector" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                AI Detector
              </a>
              <a href="https://app.aifreetextpro.com/humanizer" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                AI Humanizer
              </a>
              <Link to="/ai-checker" className="text-muted-foreground hover:text-primary transition-colors">
                AI Checker
              </Link>
              <a href="https://app.aifreetextpro.com/plagiarism" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Plagiarism Checker
              </a>
            </nav>
          </div>

          {/* Bypass Guides Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Target className="w-4 h-4" />
              Bypass Guides
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/bypass-turnitin-ai-detection" className="text-muted-foreground hover:text-primary transition-colors">
                Bypass Turnitin
              </Link>
              <Link to="/bypass-gptzero-detection" className="text-muted-foreground hover:text-primary transition-colors">
                Bypass GPTZero
              </Link>
              <Link to="/bypass-originality-ai" className="text-muted-foreground hover:text-primary transition-colors">
                Bypass Originality.AI
              </Link>
            </nav>
          </div>

          {/* Compare Tools Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Compare Tools
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/vs-writehuman" className="text-muted-foreground hover:text-primary transition-colors">
                vs WriteHuman
              </Link>
              <Link to="/vs-undetectable-ai" className="text-muted-foreground hover:text-primary transition-colors">
                vs Undetectable AI
              </Link>
              <Link to="/vs-humanizeai-pro" className="text-muted-foreground hover:text-primary transition-colors">
                vs HumanizeAI.pro
              </Link>
            </nav>
            
            <h3 className="font-semibold text-foreground flex items-center gap-2 pt-2">
              <Users className="w-4 h-4" />
              Use Cases
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/ai-humanizer-for-students" className="text-muted-foreground hover:text-primary transition-colors">
                For Students
              </Link>
              <Link to="/ai-humanizer-for-writers" className="text-muted-foreground hover:text-primary transition-colors">
                For Writers
              </Link>
              <Link to="/academic-ai-writing-tool" className="text-muted-foreground hover:text-primary transition-colors">
                Academic Writing
              </Link>
            </nav>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Blog
              </Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link to="/guarantee" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Money-Back Guarantee
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">
                Our Team
              </Link>
              <Link to="/technology" className="text-muted-foreground hover:text-primary transition-colors">
                Our Technology
              </Link>
              <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                Case Studies
              </Link>
              <Link to="/editorial-guidelines" className="text-muted-foreground hover:text-primary transition-colors">
                Editorial Guidelines
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Contact Us
              </Link>
              <a href="mailto:support@aifreetextpro.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Support
              </a>
            </nav>
            
            {/* Trust Badges */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="w-4 h-4 text-green-600" />
                <span>98% Accuracy Rate</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="w-4 h-4 text-green-600" />
                <span>50,000+ Users</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 AI Free Text Pro. All rights reserved. | Free AI Detection & Humanization Tools
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <div className="flex items-center gap-2">
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