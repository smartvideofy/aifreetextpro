import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Home, Info, DollarSign, BookOpen, Mail, ArrowRight, Users, Cpu, FileText, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/logo.png";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const mainLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/pricing", label: "Pricing", icon: DollarSign },
    { to: "/about", label: "About", icon: Info },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  const resourceLinks = [
    { to: "/blog", label: "Blog", icon: BookOpen },
    { to: "/team", label: "Our Team", icon: Users },
    { to: "/technology", label: "Technology", icon: Cpu },
    { to: "/case-studies", label: "Case Studies", icon: FileText },
  ];

  const toolLinks = [
    { to: "/bypass-turnitin-ai-detection", label: "Bypass Turnitin", icon: Shield },
    { to: "/bypass-gptzero-detection", label: "Bypass GPTZero", icon: Shield },
    { to: "/bypass-originality-ai", label: "Bypass Originality.AI", icon: Shield },
  ];
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 p-0">
        <SheetHeader className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border/50">
          <SheetTitle className="flex items-center gap-2">
            <img src={logo} alt="AI Free Text Pro" className="w-8 h-8" />
            <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Free Text Pro
            </span>
          </SheetTitle>
        </SheetHeader>
        
        <nav className="flex flex-col gap-1 p-4">
          {/* Main Navigation Links */}
          {mainLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.to} 
                to={link.to}
                onClick={() => setOpen(false)}
              >
                <Button 
                  variant={isActive(link.to) ? "default" : "ghost"}
                  className={`w-full justify-start text-base gap-3 ${
                    isActive(link.to) 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-muted"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {link.label}
                  {isActive(link.to) && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-primary-foreground" />
                  )}
                </Button>
              </Link>
            );
          })}

          {/* Resources Section */}
          <Separator className="my-3" />
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">Resources</p>
          {resourceLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.to} 
                to={link.to}
                onClick={() => setOpen(false)}
              >
                <Button 
                  variant={isActive(link.to) ? "default" : "ghost"}
                  className={`w-full justify-start text-sm gap-3 ${
                    isActive(link.to) 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                  <ChevronRight className="h-4 w-4 ml-auto opacity-50" />
                </Button>
              </Link>
            );
          })}

          {/* Tools Section */}
          <Separator className="my-3" />
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">Bypass Tools</p>
          {toolLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.to} 
                to={link.to}
                onClick={() => setOpen(false)}
              >
                <Button 
                  variant={isActive(link.to) ? "default" : "ghost"}
                  className={`w-full justify-start text-sm gap-3 ${
                    isActive(link.to) 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                  <ChevronRight className="h-4 w-4 ml-auto opacity-50" />
                </Button>
              </Link>
            );
          })}

          {/* App Access Link */}
          <Separator className="my-4" />
          <a 
            href="https://app.aifreetextpro.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 gap-2">
              Start Writing Free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            Free forever · No credit card required
          </p>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
