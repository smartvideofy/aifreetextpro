import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const links = [
    { to: "/", label: "Home" },
    { to: "/ai-checker", label: "AI Checker" },
    { to: "/humanizer", label: "Humanizer" },
    { to: "/about", label: "About" },
  ];
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64">
        <nav className="flex flex-col gap-4 mt-8">
          {/* Navigation Links */}
          {links.map((link) => (
            <Link 
              key={link.to} 
              to={link.to}
              onClick={() => setOpen(false)}
            >
              <Button 
                variant={isActive(link.to) ? "default" : "ghost"}
                className="w-full justify-start text-base"
              >
                {link.label}
              </Button>
            </Link>
          ))}

          {/* Dashboard Link */}
          <Separator />
          <a 
            href="https://app.aifreetextpro.com/auth" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <Button className="w-full">Sign In</Button>
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
