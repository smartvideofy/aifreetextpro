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
import BypassTurnitin from "./pages/BypassTurnitin";
import BypassGPTZero from "./pages/BypassGPTZero";
import BypassOriginality from "./pages/BypassOriginality";
import VsWriteHuman from "./pages/VsWriteHuman";
import VsUndetectable from "./pages/VsUndetectable";
import VsHumanizeAIPro from "./pages/VsHumanizeAIPro";
import AIHumanizerForStudents from "./pages/AIHumanizerForStudents";
import AIHumanizerForWriters from "./pages/AIHumanizerForWriters";
import AcademicAIWritingTool from "./pages/AcademicAIWritingTool";
import HumanizeAIText from "./pages/blog/HumanizeAIText";
import AIWritingStudents from "./pages/blog/AIWritingStudents";
import ZeroGPTComparison from "./pages/blog/ZeroGPTComparison";
import Top10AIHumanizers from "./pages/blog/Top10AIHumanizers";
import HowAIDetectorsWork from "./pages/blog/HowAIDetectorsWork";
import WhyAIContentFails from "./pages/blog/WhyAIContentFails";
import AIToolsForWriters from "./pages/blog/AIToolsForWriters";
import AICreativityOriginality from "./pages/blog/AICreativityOriginality";
import AIDetectionPublishing from "./pages/blog/AIDetectionPublishing";
import MakeChatGPTUndetectable from "./pages/blog/MakeChatGPTUndetectable";
import AIDetectionPatterns from "./pages/blog/AIDetectionPatterns";
import ParaphrasingVsHumanizing from "./pages/blog/ParaphrasingVsHumanizing";
import GPTinfComparison from "./pages/blog/GPTinfComparison";
import OriginalityAIReview from "./pages/blog/OriginalityAIReview";
import PassAllDetectorsGuide from "./pages/blog/PassAllDetectorsGuide";
import AIContentSEO from "./pages/blog/AIContentSEO";
import AcademicAIWritingSafely from "./pages/blog/AcademicAIWritingSafely";
import NotFound from "./pages/NotFound";
import AIChecker from "./pages/AIChecker";
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
            <Route path="/blog/make-chatgpt-undetectable-2025" element={<MakeChatGPTUndetectable />} />
            <Route path="/blog/ai-detection-patterns-explained" element={<AIDetectionPatterns />} />
            <Route path="/blog/paraphrasing-vs-humanizing" element={<ParaphrasingVsHumanizing />} />
            <Route path="/blog/gptinf-vs-ai-free-text-pro" element={<GPTinfComparison />} />
            <Route path="/blog/originality-ai-review-how-to-beat" element={<OriginalityAIReview />} />
            <Route path="/blog/pass-all-ai-detectors-guide" element={<PassAllDetectorsGuide />} />
            <Route path="/blog/ai-content-seo-undetectable" element={<AIContentSEO />} />
            <Route path="/blog/academic-ai-writing-safely" element={<AcademicAIWritingSafely />} />
            <Route path="/bypass-turnitin-ai-detection" element={<BypassTurnitin />} />
            <Route path="/bypass-gptzero-detection" element={<BypassGPTZero />} />
            <Route path="/bypass-originality-ai" element={<BypassOriginality />} />
            <Route path="/vs-writehuman" element={<VsWriteHuman />} />
            <Route path="/vs-undetectable-ai" element={<VsUndetectable />} />
            <Route path="/vs-humanizeai-pro" element={<VsHumanizeAIPro />} />
            <Route path="/ai-humanizer-for-students" element={<AIHumanizerForStudents />} />
            <Route path="/ai-humanizer-for-writers" element={<AIHumanizerForWriters />} />
            <Route path="/academic-ai-writing-tool" element={<AcademicAIWritingTool />} />
            <Route path="/ai-checker" element={<AIChecker />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
