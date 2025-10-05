import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Text Reborn Logo" 
              className="w-10 h-10 transition-transform group-hover:scale-110"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Text Reborn
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-2">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
