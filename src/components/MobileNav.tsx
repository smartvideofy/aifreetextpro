import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, User, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, profile, signOut } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleSignOut = async () => {
    await signOut();
    setOpen(false);
  };
  
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
          {/* Profile Section */}
          {isAuthenticated && profile && (
            <>
              <div className="px-2 py-3 bg-secondary/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium truncate">{profile.email}</span>
                </div>
                <Badge variant={profile.subscription_tier === 'premium' ? 'default' : 'secondary'}>
                  {profile.subscription_tier}
                </Badge>
              </div>
              <Separator />
            </>
          )}

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

          {/* Auth Actions */}
          {isAuthenticated ? (
            <>
              <Separator />
              <Link to="/dashboard" onClick={() => setOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-base gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                onClick={handleSignOut}
                className="w-full justify-start text-base gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Separator />
              <Link to="/auth" onClick={() => setOpen(false)}>
                <Button className="w-full">Sign In</Button>
              </Link>
            </>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
