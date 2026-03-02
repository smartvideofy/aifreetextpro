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
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-[top] duration-300 [body[data-sticky-cta='visible']_&]:top-[44px]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img 
              src={logo} 
              alt="AI Free Text Pro Logo" 
              className="w-10 h-10 md:w-11 md:h-11 transition-transform duration-200 group-hover:scale-105"
              width={44}
              height={44}
            />
            <span className="text-lg md:text-xl font-bold text-foreground">
              AI Free Text Pro
            </span>
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-0.5">
            <Link to="/">
              <Button 
                variant="ghost"
                className={`text-muted-foreground hover:text-foreground font-medium ${isActive("/") ? "text-foreground" : ""}`}
              >
                Home
              </Button>
            </Link>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost"
                  className={`text-muted-foreground hover:text-foreground font-medium gap-1 ${isActiveGroup(["/blog", "/team", "/technology", "/case-studies"]) ? "text-foreground" : ""}`}
                >
                  Resources
                  <ChevronDown className="h-4 w-4 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
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
                  variant="ghost"
                  className={`text-muted-foreground hover:text-foreground font-medium gap-1 ${isActiveGroup(["/bypass-", "/ai-humanizer", "/ai-checker", "/academic"]) ? "text-foreground" : ""}`}
                >
                  Tools
                  <ChevronDown className="h-4 w-4 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem asChild>
                  <a href="https://app.aifreetextpro.com/detector" className="w-full cursor-pointer">AI Detector</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://app.aifreetextpro.com/humanizer" className="w-full cursor-pointer">AI Humanizer</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ai-checker" className="w-full cursor-pointer">AI Checker</Link>
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
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/ai-humanizer-for-students" className="w-full cursor-pointer">For Students</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ai-humanizer-for-writers" className="w-full cursor-pointer">For Writers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/academic-ai-writing-tool" className="w-full cursor-pointer">Academic Writing</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/compare-ai-humanizers" className="w-full cursor-pointer font-medium text-primary">Compare Tools</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/pricing">
              <Button 
                variant="ghost"
                className={`text-muted-foreground hover:text-foreground font-medium ${isActive("/pricing") ? "text-foreground" : ""}`}
              >
                Pricing
              </Button>
            </Link>

            <Link to="/about">
              <Button 
                variant="ghost"
                className={`text-muted-foreground hover:text-foreground font-medium ${isActive("/about") ? "text-foreground" : ""}`}
              >
                About
              </Button>
            </Link>

            {/* App Link - Premium CTA */}
            <a href="https://app.aifreetextpro.com/" target="_blank" rel="noopener noreferrer" className="ml-3">
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
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
