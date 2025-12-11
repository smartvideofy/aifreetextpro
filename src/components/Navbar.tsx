import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import MobileNav from "./MobileNav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  const isActiveGroup = (paths: string[]) => paths.some(p => location.pathname.startsWith(p));
  
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
          <div className="hidden md:flex items-center gap-1">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                className="transition-colors"
              >
                Home
              </Button>
            </Link>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant={isActiveGroup(["/blog", "/team", "/technology", "/case-studies"]) ? "default" : "ghost"}
                  className="transition-colors gap-1"
                >
                  Resources
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48 bg-background border border-border">
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="w-full cursor-pointer">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/team" className="w-full cursor-pointer">Our Team</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technology" className="w-full cursor-pointer">Technology</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/case-studies" className="w-full cursor-pointer">Case Studies</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/editorial-guidelines" className="w-full cursor-pointer">Editorial Guidelines</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant={isActiveGroup(["/bypass-", "/ai-humanizer", "/ai-checker"]) ? "default" : "ghost"}
                  className="transition-colors gap-1"
                >
                  Tools
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-52 bg-background border border-border">
                <DropdownMenuItem asChild>
                  <a href="https://app.aifreetextpro.com/detector" className="w-full cursor-pointer">AI Detector</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://app.aifreetextpro.com/humanizer" className="w-full cursor-pointer">AI Humanizer</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/bypass-turnitin-ai-detection" className="w-full cursor-pointer">Bypass Turnitin</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/bypass-gptzero-detection" className="w-full cursor-pointer">Bypass GPTZero</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/bypass-originality-ai" className="w-full cursor-pointer">Bypass Originality.AI</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/pricing">
              <Button 
                variant={isActive("/pricing") ? "default" : "ghost"}
                className="transition-colors"
              >
                Pricing
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

            {/* App Link */}
            <a href="https://app.aifreetextpro.com/" target="_blank" rel="noopener noreferrer" className="ml-2">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Start Writing Free
              </Button>
            </a>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
