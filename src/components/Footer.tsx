import { Link } from "react-router-dom";
import { Mail, BookOpen, MessageSquare, Shield, Check } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
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

          {/* Tools Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Tools</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/ai-checker" className="text-muted-foreground hover:text-primary transition-colors">
                AI Checker
              </Link>
              <Link to="/humanizer" className="text-muted-foreground hover:text-primary transition-colors">
                Text Humanizer
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
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <nav className="flex flex-col gap-2 text-sm">
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
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>Secure & Private</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
