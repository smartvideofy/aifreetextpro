import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { GoogleAnalytics, trackPageView } from "@/lib/analytics";
import { SEORedirect } from "@/components/SEORedirect";
import { ExternalSEORedirect } from "@/components/ExternalSEORedirect";
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
import HowToWriteNaturallyWithAI from "./pages/blog/HowToWriteNaturallyWithAI";
import EditingAIDraftsHumanEditor from "./pages/blog/EditingAIDraftsHumanEditor";
import ToneVoiceFlowAIWriting from "./pages/blog/ToneVoiceFlowAIWriting";
import HowAIDetectorsScoreText from "./pages/blog/HowAIDetectorsScoreText";
import SignalVsNoiseHumanText from "./pages/blog/SignalVsNoiseHumanText";
import AIHumanizationPitfalls from "./pages/blog/AIHumanizationPitfalls";
import BypassCopyleaksDetection from "./pages/blog/BypassCopyleaksDetection";
import BypassWinstonAIDetection from "./pages/blog/BypassWinstonAIDetection";
import BypassZeroGPTDetection from "./pages/blog/BypassZeroGPTDetection";
import WriteAIResistantContent from "./pages/blog/WriteAIResistantContent";
import Top10AIWritingTools2026 from "./pages/blog/Top10AIWritingTools2026";
import BypassAIDetectionGuide from "./pages/blog/BypassAIDetectionGuide";
import MasteringAIPoweredEmailCampaigns2026 from "./pages/blog/MasteringAIPoweredEmailCampaigns2026";
import AIContentMarketingTrends2026 from "./pages/blog/AIContentMarketingTrends2026";
import HumanizeAITravelBlogs from "./pages/blog/HumanizeAITravelBlogs";
import ZeroClickSearchAI2026 from "./pages/blog/ZeroClickSearchAI2026";
import AIHumanizerTravelBlogs from "./pages/blog/AIHumanizerTravelBlogs";
import HumanizeAISocialMedia2026 from "./pages/blog/HumanizeAISocialMedia2026";
import HumanizeAILinkedIn2026 from "./pages/blog/HumanizeAILinkedIn2026";
import AIPoweredSEOContent2026 from "./pages/blog/AIPoweredSEOContent2026";
import AIHumanizersForEmailMarketing from "./pages/blog/AIHumanizersForEmailMarketing";
import AIWritingAcademia from "./pages/blog/AIWritingAcademia";
import HumanizeAIStories from "./pages/blog/HumanizeAIStories";
import AIYouTubeScripts from "./pages/blog/AIYouTubeScripts";
import AIProductDescriptions from "./pages/blog/AIProductDescriptions";
import NotFound from "./pages/NotFound";
import AIChecker from "./pages/AIChecker";
import Team from "./pages/Team";
import Technology from "./pages/Technology";
import CaseStudies from "./pages/CaseStudies";
import EditorialGuidelines from "./pages/EditorialGuidelines";
import CookieSettings from "./pages/CookieSettings";
import HelpCenter from "./pages/HelpCenter";
import HelpCollection from "./pages/HelpCollection";
import HelpArticle from "./pages/HelpArticle";
import Navbar from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";

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
          <CookieConsent />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/guarantee" element={<Guarantee />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
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
            <Route path="/blog/how-to-write-naturally-with-ai" element={<HowToWriteNaturallyWithAI />} />
            <Route path="/blog/editing-ai-drafts-human-editor" element={<EditingAIDraftsHumanEditor />} />
            <Route path="/blog/tone-voice-flow-ai-writing" element={<ToneVoiceFlowAIWriting />} />
            <Route path="/blog/how-ai-detectors-score-text" element={<HowAIDetectorsScoreText />} />
            <Route path="/blog/signal-vs-noise-human-text" element={<SignalVsNoiseHumanText />} />
            <Route path="/blog/ai-humanization-pitfalls" element={<AIHumanizationPitfalls />} />
            <Route path="/blog/bypass-copyleaks-ai-detection" element={<BypassCopyleaksDetection />} />
            <Route path="/blog/bypass-winston-ai-detection" element={<BypassWinstonAIDetection />} />
            <Route path="/blog/bypass-zerogpt-ai-detection" element={<BypassZeroGPTDetection />} />
            <Route path="/blog/write-ai-resistant-content" element={<WriteAIResistantContent />} />
            <Route path="/blog/top-10-ai-writing-tools-2026" element={<Top10AIWritingTools2026 />} />
            <Route path="/blog/bypass-ai-detection-guide" element={<BypassAIDetectionGuide />} />
            <Route path="/blog/mastering-ai-powered-email-campaigns-2026" element={<MasteringAIPoweredEmailCampaigns2026 />} />
            <Route path="/blog/ai-content-marketing-trends-2026" element={<AIContentMarketingTrends2026 />} />
            <Route path="/blog/humanize-ai-travel-blogs" element={<HumanizeAITravelBlogs />} />
            <Route path="/blog/zero-click-search-ai-2026" element={<ZeroClickSearchAI2026 />} />
            <Route path="/blog/ai-humanizer-travel-blogs" element={<AIHumanizerTravelBlogs />} />
            <Route path="/blog/humanize-ai-social-media-2026" element={<HumanizeAISocialMedia2026 />} />
            <Route path="/blog/humanize-ai-linkedin-2026" element={<HumanizeAILinkedIn2026 />} />
            <Route path="/blog/ai-powered-seo-content-2026" element={<AIPoweredSEOContent2026 />} />
            <Route path="/blog/ai-humanizers-for-email-marketing" element={<AIHumanizersForEmailMarketing />} />
            <Route path="/blog/ai-writing-academia" element={<AIWritingAcademia />} />
            <Route path="/blog/humanize-ai-generated-stories-fiction" element={<HumanizeAIStories />} />
            <Route path="/blog/ai-youtube-scripts" element={<AIYouTubeScripts />} />
            <Route path="/blog/ai-product-descriptions" element={<AIProductDescriptions />} />
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
            <Route path="/team" element={<Team />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/editorial-guidelines" element={<EditorialGuidelines />} />
            <Route path="/cookie-settings" element={<CookieSettings />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/help-center/:collectionId" element={<HelpCollection />} />
            <Route path="/help-center/:collectionId/:articleSlug" element={<HelpArticle />} />
            
            {/* SEO-friendly redirects for external app subdomain URLs */}
            <Route path="/humanizer" element={<ExternalSEORedirect to="https://app.aifreetextpro.com/humanizer" />} />
            <Route path="/detector" element={<ExternalSEORedirect to="https://app.aifreetextpro.com/detector" />} />
            <Route path="/auth" element={<ExternalSEORedirect to="https://app.aifreetextpro.com/auth" />} />
            <Route path="/plagiarism" element={<ExternalSEORedirect to="https://app.aifreetextpro.com/plagiarism" />} />
            
            {/* SEO-friendly redirects for old blog URL slugs */}
            <Route path="/blog/make-chatgpt-undetectable-guide-2025" element={<SEORedirect to="/blog/make-chatgpt-undetectable-2025" />} />
            <Route path="/blog/ai-detection-patterns-perplexity-burstiness" element={<SEORedirect to="/blog/ai-detection-patterns-explained" />} />
            <Route path="/blog/academic-ai-writing-thesis-essays-safely" element={<SEORedirect to="/blog/academic-ai-writing-safely" />} />
            <Route path="/blog/ai-content-seo-undetectable-articles" element={<SEORedirect to="/blog/ai-content-seo-undetectable" />} />
            <Route path="/blog/gptinf-vs-ai-free-text-pro-comparison" element={<SEORedirect to="/blog/gptinf-vs-ai-free-text-pro" />} />
            <Route path="/blog/originality-ai-review-pricing-bypass" element={<SEORedirect to="/blog/originality-ai-review-how-to-beat" />} />
            <Route path="/blog/paraphrasing-vs-humanizing-ai-text" element={<SEORedirect to="/blog/paraphrasing-vs-humanizing" />} />
            <Route path="/bypass-turnitin" element={<SEORedirect to="/bypass-turnitin-ai-detection" />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
