import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { GoogleAnalytics, trackPageView } from "@/lib/analytics";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Guarantee from "./pages/Guarantee";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import HowToDetectAI from "./pages/blog/HowToDetectAI";
import BestAIHumanizers from "./pages/blog/BestAIHumanizers";
import BypassAIDetection from "./pages/blog/BypassAIDetection";
import AIDetectionComparison from "./pages/blog/AIDetectionComparison";
import HumanizeAIText from "./pages/blog/HumanizeAIText";
import AIWritingStudents from "./pages/blog/AIWritingStudents";
import ZeroGPTComparison from "./pages/blog/ZeroGPTComparison";
import Top10AIHumanizers from "./pages/blog/Top10AIHumanizers";
import HowAIDetectorsWork from "./pages/blog/HowAIDetectorsWork";
import WhyAIContentFails from "./pages/blog/WhyAIContentFails";
import AIToolsForWriters from "./pages/blog/AIToolsForWriters";
import AICreativityOriginality from "./pages/blog/AICreativityOriginality";
import AIDetectionPublishing from "./pages/blog/AIDetectionPublishing";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";

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
          <GoogleAnalytics />
          <Toaster />
          <Sonner />
          <RouteTracker />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/guarantee" element={<Guarantee />} />
            <Route path="/privacy-policy" element={<><Navbar /><PrivacyPolicy /></>} />
            <Route path="/terms-of-service" element={<><Navbar /><TermsOfService /></>} />
            <Route path="/contact" element={<><Navbar /><Contact /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/ai-detection-tools-compared-2025" element={<AIDetectionComparison />} />
            <Route path="/blog/humanize-ai-text-without-losing-voice" element={<HumanizeAIText />} />
            <Route path="/blog/ai-writing-students-avoid-plagiarism" element={<AIWritingStudents />} />
            <Route path="/blog/how-to-detect-ai-generated-text" element={<HowToDetectAI />} />
            <Route path="/blog/best-free-ai-humanizer-tools-2025" element={<BestAIHumanizers />} />
            <Route path="/blog/bypass-ai-detection-ethical-tips" element={<BypassAIDetection />} />
            <Route path="/blog/zerogpt-vs-ai-free-text-pro-2025" element={<ZeroGPTComparison />} />
            <Route path="/blog/top-10-ai-humanizer-tools-2025" element={<Top10AIHumanizers />} />
            <Route path="/blog/how-ai-detectors-work" element={<HowAIDetectorsWork />} />
            <Route path="/blog/why-ai-content-fails-human-review" element={<WhyAIContentFails />} />
            <Route path="/blog/ai-tools-for-writers-2025" element={<AIToolsForWriters />} />
            <Route path="/blog/can-ai-writing-be-original" element={<AICreativityOriginality />} />
            <Route path="/blog/ai-detection-in-publishing-2025" element={<AIDetectionPublishing />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<><Navbar /><NotFound /></>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
