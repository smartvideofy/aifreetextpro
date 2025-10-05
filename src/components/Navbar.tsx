import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo & Brand - Centered on mobile */}
          <Link to="/" className="flex items-center gap-4 group mx-auto md:mx-0">
            <img 
              src={logo} 
              alt="Text Reborn Logo" 
              className="w-14 h-14 md:w-16 md:h-16 transition-transform group-hover:scale-110"
            />
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Text Reborn
            </span>
          </Link>
          
          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                className="transition-colors text-base"
              >
                Home
              </Button>
            </Link>
            <Link to="/ai-checker">
              <Button 
                variant={isActive("/ai-checker") ? "default" : "ghost"}
                className="transition-colors text-base"
              >
                AI Checker
              </Button>
            </Link>
            <Link to="/humanizer">
              <Button 
                variant={isActive("/humanizer") ? "default" : "ghost"}
                className="transition-colors text-base"
              >
                Humanizer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
