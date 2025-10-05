import { Link } from "react-router-dom";
import { Brain, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-primary" />
              <Sparkles className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-bold text-lg text-foreground">AI Text Tools</h3>
            <p className="text-sm text-muted-foreground">
              Advanced AI detection and humanization powered by cutting-edge language models.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/ai-checker" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Checker
                </Link>
              </li>
              <li>
                <Link to="/humanizer" className="text-muted-foreground hover:text-primary transition-colors">
                  Text Humanizer
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Text Tools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
