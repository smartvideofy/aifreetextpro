import { Link } from "react-router-dom";
import { Mail, Github, Twitter } from "lucide-react";
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

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <nav className="flex flex-col gap-2 text-sm">
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

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <a href="mailto:support@aifreetextpro.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                support@aifreetextpro.com
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQs
              </a>
            </nav>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground leading-relaxed">
                AI Free Text Pro helps you detect and humanize AI-generated content with 98% accuracy. Fast, free, and privacy-focused.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 AI Free Text Pro. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
