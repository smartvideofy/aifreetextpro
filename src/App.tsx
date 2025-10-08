import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { GoogleAnalytics, trackPageView } from "@/lib/analytics";
import Index from "./pages/Index";
import AIChecker from "./pages/AIChecker";
import Humanizer from "./pages/Humanizer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import HowToDetectAI from "./pages/blog/HowToDetectAI";
import BestAIHumanizers from "./pages/blog/BestAIHumanizers";
import BypassAIDetection from "./pages/blog/BypassAIDetection";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

// Component to track route changes
const RouteTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  
  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AuthProvider>
            <GoogleAnalytics />
            <Toaster />
            <Sonner />
            <RouteTracker />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ai-checker" element={<><Navbar /><AIChecker /></>} />
              <Route path="/humanizer" element={<><Navbar /><Humanizer /></>} />
              <Route path="/privacy-policy" element={<><Navbar /><PrivacyPolicy /></>} />
              <Route path="/terms-of-service" element={<><Navbar /><TermsOfService /></>} />
              <Route path="/contact" element={<><Navbar /><Contact /></>} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/how-to-detect-ai-generated-text" element={<HowToDetectAI />} />
              <Route path="/blog/best-free-ai-humanizer-tools-2025" element={<BestAIHumanizers />} />
              <Route path="/blog/bypass-ai-detection-ethical-tips" element={<BypassAIDetection />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<><Navbar /><NotFound /></>} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
