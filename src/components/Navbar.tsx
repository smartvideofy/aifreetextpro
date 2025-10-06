import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-18 items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="AI Free Text Pro Logo" 
              className="w-12 h-12 md:w-14 md:h-14 transition-transform group-hover:scale-110"
            />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Free Text Pro
            </span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                className="transition-colors"
              >
                Home
              </Button>
            </Link>
            <Link to="/ai-checker">
              <Button 
                variant={isActive("/ai-checker") ? "default" : "ghost"}
                className="transition-colors"
              >
                AI Checker
              </Button>
            </Link>
            <Link to="/humanizer">
              <Button 
                variant={isActive("/humanizer") ? "default" : "ghost"}
                className="transition-colors"
              >
                Humanizer
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant={isActive("/about") ? "default" : "ghost"}
                className="transition-colors"
              >
                About
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
