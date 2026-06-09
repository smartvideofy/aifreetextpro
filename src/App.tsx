import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, lazy, Suspense } from "react";
import { GoogleAnalytics, trackPageView } from "@/lib/analytics";
import { SEORedirect } from "@/components/SEORedirect";
import { ExternalSEORedirect } from "@/components/ExternalSEORedirect";
import { ScrollToTop } from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import PageLoader from "./components/PageLoader";

// Eagerly loaded - critical pages for initial render
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy loaded pages for better code splitting
const Pricing = lazy(() => import("./pages/Pricing"));
const Guarantee = lazy(() => import("./pages/Guarantee"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogCategory = lazy(() => import("./pages/BlogCategory"));
const AIChecker = lazy(() => import("./pages/AIChecker"));
const Team = lazy(() => import("./pages/Team"));
const Technology = lazy(() => import("./pages/Technology"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const EditorialGuidelines = lazy(() => import("./pages/EditorialGuidelines"));
const CookieSettings = lazy(() => import("./pages/CookieSettings"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));
const HelpCollection = lazy(() => import("./pages/HelpCollection"));
const HelpArticle = lazy(() => import("./pages/HelpArticle"));

// Detector bypass pages
const BypassTurnitin = lazy(() => import("./pages/BypassTurnitin"));
const BypassGPTZero = lazy(() => import("./pages/BypassGPTZero"));
const BypassOriginality = lazy(() => import("./pages/BypassOriginality"));

// Comparison pages
const VsWriteHuman = lazy(() => import("./pages/VsWriteHuman"));
const VsUndetectable = lazy(() => import("./pages/VsUndetectable"));
const VsHumanizeAIPro = lazy(() => import("./pages/VsHumanizeAIPro"));
const CompareAIHumanizers = lazy(() => import("./pages/CompareAIHumanizers"));

// Use case pages
const AIHumanizerForStudents = lazy(() => import("./pages/AIHumanizerForStudents"));
const AIHumanizerForWriters = lazy(() => import("./pages/AIHumanizerForWriters"));
const AcademicAIWritingTool = lazy(() => import("./pages/AcademicAIWritingTool"));
const Api = lazy(() => import("./pages/Api"));


// Blog posts - all lazy loaded
const HowToDetectAI = lazy(() => import("./pages/blog/HowToDetectAI"));
const BestAIHumanizers = lazy(() => import("./pages/blog/BestAIHumanizers"));
const BypassAIDetection = lazy(() => import("./pages/blog/BypassAIDetection"));
const AIDetectionComparison = lazy(() => import("./pages/blog/AIDetectionComparison"));
const HumanizeAIText = lazy(() => import("./pages/blog/HumanizeAIText"));
const AIWritingStudents = lazy(() => import("./pages/blog/AIWritingStudents"));
const ZeroGPTComparison = lazy(() => import("./pages/blog/ZeroGPTComparison"));
const Top10AIHumanizers = lazy(() => import("./pages/blog/Top10AIHumanizers"));
const HowAIDetectorsWork = lazy(() => import("./pages/blog/HowAIDetectorsWork"));
const WhyAIContentFails = lazy(() => import("./pages/blog/WhyAIContentFails"));
const AIToolsForWriters = lazy(() => import("./pages/blog/AIToolsForWriters"));
const AICreativityOriginality = lazy(() => import("./pages/blog/AICreativityOriginality"));
const AIDetectionPublishing = lazy(() => import("./pages/blog/AIDetectionPublishing"));
const MakeChatGPTUndetectable = lazy(() => import("./pages/blog/MakeChatGPTUndetectable"));
const AIDetectionPatterns = lazy(() => import("./pages/blog/AIDetectionPatterns"));
const ParaphrasingVsHumanizing = lazy(() => import("./pages/blog/ParaphrasingVsHumanizing"));
const GPTinfComparison = lazy(() => import("./pages/blog/GPTinfComparison"));
const OriginalityAIReview = lazy(() => import("./pages/blog/OriginalityAIReview"));
const PassAllDetectorsGuide = lazy(() => import("./pages/blog/PassAllDetectorsGuide"));
const AIContentSEO = lazy(() => import("./pages/blog/AIContentSEO"));
const AcademicAIWritingSafely = lazy(() => import("./pages/blog/AcademicAIWritingSafely"));
const HowToWriteNaturallyWithAI = lazy(() => import("./pages/blog/HowToWriteNaturallyWithAI"));
const EditingAIDraftsHumanEditor = lazy(() => import("./pages/blog/EditingAIDraftsHumanEditor"));
const ToneVoiceFlowAIWriting = lazy(() => import("./pages/blog/ToneVoiceFlowAIWriting"));
const HowAIDetectorsScoreText = lazy(() => import("./pages/blog/HowAIDetectorsScoreText"));
const SignalVsNoiseHumanText = lazy(() => import("./pages/blog/SignalVsNoiseHumanText"));
const AIHumanizationPitfalls = lazy(() => import("./pages/blog/AIHumanizationPitfalls"));
const BypassCopyleaksDetection = lazy(() => import("./pages/blog/BypassCopyleaksDetection"));
const BypassWinstonAIDetection = lazy(() => import("./pages/blog/BypassWinstonAIDetection"));
const BypassZeroGPTDetection = lazy(() => import("./pages/blog/BypassZeroGPTDetection"));
const WriteAIResistantContent = lazy(() => import("./pages/blog/WriteAIResistantContent"));
const Top10AIWritingTools2026 = lazy(() => import("./pages/blog/Top10AIWritingTools2026"));
const BypassAIDetectionGuide = lazy(() => import("./pages/blog/BypassAIDetectionGuide"));
const MasteringAIPoweredEmailCampaigns2026 = lazy(() => import("./pages/blog/MasteringAIPoweredEmailCampaigns2026"));
const AIContentMarketingTrends2026 = lazy(() => import("./pages/blog/AIContentMarketingTrends2026"));
const HumanizeAITravelBlogs = lazy(() => import("./pages/blog/HumanizeAITravelBlogs"));
const ZeroClickSearchAI2026 = lazy(() => import("./pages/blog/ZeroClickSearchAI2026"));
const AIHumanizerTravelBlogs = lazy(() => import("./pages/blog/AIHumanizerTravelBlogs"));
const HumanizeAISocialMedia2026 = lazy(() => import("./pages/blog/HumanizeAISocialMedia2026"));
const HumanizeAILinkedIn2026 = lazy(() => import("./pages/blog/HumanizeAILinkedIn2026"));
const AIPoweredSEOContent2026 = lazy(() => import("./pages/blog/AIPoweredSEOContent2026"));
const AIHumanizersForEmailMarketing = lazy(() => import("./pages/blog/AIHumanizersForEmailMarketing"));
const AIWritingAcademia = lazy(() => import("./pages/blog/AIWritingAcademia"));
const HumanizeAIStories = lazy(() => import("./pages/blog/HumanizeAIStories"));
const AIYouTubeScripts = lazy(() => import("./pages/blog/AIYouTubeScripts"));
const AIProductDescriptions = lazy(() => import("./pages/blog/AIProductDescriptions"));
const CanTeachersDetectChatGPT = lazy(() => import("./pages/blog/CanTeachersDetectChatGPT"));
const CanTurnitinDetectDeepSeek = lazy(() => import("./pages/blog/CanTurnitinDetectDeepSeek"));
const BestChatGPTPromptsForEssays = lazy(() => import("./pages/blog/BestChatGPTPromptsForEssays"));
const AIHumanizerResumes = lazy(() => import("./pages/blog/AIHumanizerResumes"));
const AIDetectionFalsePositives = lazy(() => import("./pages/blog/AIDetectionFalsePositives"));
const GPTZeroVsTurnitin = lazy(() => import("./pages/blog/GPTZeroVsTurnitin"));
const DoesGrammarlyTriggerAIDetection = lazy(() => import("./pages/blog/DoesGrammarlyTriggerAIDetection"));
const HumanizeAITextFreeNoSignup = lazy(() => import("./pages/blog/HumanizeAITextFreeNoSignup"));
const UndetectableAIvsAIFreeTextPro = lazy(() => import("./pages/blog/UndetectableAIvsAIFreeTextPro"));
const AIDetectorsClaudeGeminiGPT5 = lazy(() => import("./pages/blog/AIDetectorsClaudeGeminiGPT5"));
const IsItIllegalToUseAIForSchool = lazy(() => import("./pages/blog/IsItIllegalToUseAIForSchool"));
const HowToCiteAIGeneratedContent = lazy(() => import("./pages/blog/HowToCiteAIGeneratedContent"));
const ChatGPTvsClaudevsGeminiDetection = lazy(() => import("./pages/blog/ChatGPTvsClaudevsGeminiDetection"));
const AIWritingHighSchoolStudents = lazy(() => import("./pages/blog/AIWritingHighSchoolStudents"));
const HowToCheckIfWrittenByAI = lazy(() => import("./pages/blog/HowToCheckIfWrittenByAI"));
const QuillbotVsAIFreeTextPro = lazy(() => import("./pages/blog/QuillbotVsAIFreeTextPro"));
const AIDisclosurePolicies2026 = lazy(() => import("./pages/blog/AIDisclosurePolicies2026"));
const TurnitinAIDetectionAccuracy = lazy(() => import("./pages/blog/TurnitinAIDetectionAccuracy"));
const AIWritingForFreelancers = lazy(() => import("./pages/blog/AIWritingForFreelancers"));
const AIHumanizerForBlogPosts = lazy(() => import("./pages/blog/AIHumanizerForBlogPosts"));
const OriginalityAIAccuracyFalsePositives = lazy(() => import("./pages/blog/OriginalityAIAccuracyFalsePositives"));
const AIForResearchPapers = lazy(() => import("./pages/blog/AIForResearchPapers"));
const AIWritingBusinessReports = lazy(() => import("./pages/blog/AIWritingBusinessReports"));
const BestAIDetectorForTeachers = lazy(() => import("./pages/blog/BestAIDetectorForTeachers"));
const RemoveAIDetection = lazy(() => import("./pages/blog/RemoveAIDetection"));
const UndetectableAIEssayWriter = lazy(() => import("./pages/blog/UndetectableAIEssayWriter"));
const AIParaphrasingToolPlagiarism = lazy(() => import("./pages/blog/AIParaphrasingToolPlagiarism"));
const AIHomeworkHelper = lazy(() => import("./pages/blog/AIHomeworkHelper"));
const RewriteAIText = lazy(() => import("./pages/blog/RewriteAIText"));
const BestAIDetector2026 = lazy(() => import("./pages/blog/BestAIDetector2026"));
const StealthwriterAlternative = lazy(() => import("./pages/blog/StealthwriterAlternative"));
const AIHumanizerForEssays = lazy(() => import("./pages/blog/AIHumanizerForEssays"));
const TurnitinAppeal = lazy(() => import("./pages/blog/TurnitinAppeal"));
const FreeAIContentDetector = lazy(() => import("./pages/blog/FreeAIContentDetector"));
const ChatGPTCollegeEssays = lazy(() => import("./pages/blog/ChatGPTCollegeEssays"));
const AITextConverter = lazy(() => import("./pages/blog/AITextConverter"));
const DoesTurnitinDetectGemini = lazy(() => import("./pages/blog/DoesTurnitinDetectGemini"));
const AIDetectorEmployers = lazy(() => import("./pages/blog/AIDetectorEmployers"));
const UndetectableAIAlternatives = lazy(() => import("./pages/blog/UndetectableAIAlternatives"));
const ClaudeAcademicWriting = lazy(() => import("./pages/blog/ClaudeAcademicWriting"));
const HumanizeChatGPTText = lazy(() => import("./pages/blog/HumanizeChatGPTText"));
const BestAIToolsForStudents = lazy(() => import("./pages/blog/BestAIToolsForStudents"));
const CanTurnitinDetectPerplexity = lazy(() => import("./pages/blog/CanTurnitinDetectPerplexity"));
const TurnitinSimilarityVsAIScore = lazy(() => import("./pages/blog/TurnitinSimilarityVsAIScore"));
const GPTZeroAccuracyReview = lazy(() => import("./pages/blog/GPTZeroAccuracyReview"));
const AIGhostwriter = lazy(() => import("./pages/blog/AIGhostwriter"));
const AIDissertationThesis = lazy(() => import("./pages/blog/AIDissertationThesis"));
const CopyleaksVsTurnitin = lazy(() => import("./pages/blog/CopyleaksVsTurnitin"));
const AIInstagramCaptions = lazy(() => import("./pages/blog/AIInstagramCaptions"));
const AICoverLetterGenerator = lazy(() => import("./pages/blog/AICoverLetterGenerator"));
const ChatGPTAlternativesEssays = lazy(() => import("./pages/blog/ChatGPTAlternativesEssays"));
const AIBlogPostGenerator = lazy(() => import("./pages/blog/AIBlogPostGenerator"));
const AIEssayChecker = lazy(() => import("./pages/blog/AIEssayChecker"));
const MakeAIWritingCreative = lazy(() => import("./pages/blog/MakeAIWritingCreative"));
const AIContentAtScale = lazy(() => import("./pages/blog/AIContentAtScale"));
const AIGrantWriting = lazy(() => import("./pages/blog/AIGrantWriting"));
const WordtuneComparison = lazy(() => import("./pages/blog/WordtuneComparison"));
const AIPressReleases = lazy(() => import("./pages/blog/AIPressReleases"));
const ChatGPTPlusDetection = lazy(() => import("./pages/blog/ChatGPTPlusDetection"));
const AIMedicalScientificWriting = lazy(() => import("./pages/blog/AIMedicalScientificWriting"));
const DoesTurnitinDetectChatGPT = lazy(() => import("./pages/blog/DoesTurnitinDetectChatGPT"));
const CheckMyEssayForAI = lazy(() => import("./pages/blog/CheckMyEssayForAI"));
const BestFreeAIHumanizer2026 = lazy(() => import("./pages/blog/BestFreeAIHumanizer2026"));
const AILegalWriting = lazy(() => import("./pages/blog/AILegalWriting"));
const TurnitinVsGPTZeroVsOriginalityAI = lazy(() => import("./pages/blog/TurnitinVsGPTZeroVsOriginalityAI"));
const AITwitterThreadGenerator = lazy(() => import("./pages/blog/AITwitterThreadGenerator"));
const AIWritingNursingHealthcare = lazy(() => import("./pages/blog/AIWritingNursingHealthcare"));
const AIContentGoogleAIOverviews = lazy(() => import("./pages/blog/AIContentGoogleAIOverviews"));
const AIWritingUpworkFiverr = lazy(() => import("./pages/blog/AIWritingUpworkFiverr"));
const AICollegeAdmissionsEssays = lazy(() => import("./pages/blog/AICollegeAdmissionsEssays"));
const AIWritingNonNativeEnglish = lazy(() => import("./pages/blog/AIWritingNonNativeEnglish"));
const CanDetectorsDetectGPT5 = lazy(() => import("./pages/blog/CanDetectorsDetectGPT5"));
const HumanizeClaudeOutput = lazy(() => import("./pages/blog/HumanizeClaudeOutput"));
const HumanizeGeminiOutput = lazy(() => import("./pages/blog/HumanizeGeminiOutput"));
const DoesCanvasDetectChatGPT = lazy(() => import("./pages/blog/DoesCanvasDetectChatGPT"));


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
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/api" element={<Api />} />
              
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/guarantee" element={<Guarantee />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/category/:slug" element={<BlogCategory />} />
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
              <Route path="/blog/can-teachers-detect-chatgpt" element={<CanTeachersDetectChatGPT />} />
              <Route path="/blog/can-turnitin-detect-deepseek" element={<CanTurnitinDetectDeepSeek />} />
              <Route path="/blog/best-chatgpt-prompts-for-essays" element={<BestChatGPTPromptsForEssays />} />
              <Route path="/blog/ai-humanizer-resumes-cover-letters" element={<AIHumanizerResumes />} />
              <Route path="/blog/ai-detection-false-positives" element={<AIDetectionFalsePositives />} />
              <Route path="/blog/gptzero-vs-turnitin-comparison" element={<GPTZeroVsTurnitin />} />
              <Route path="/blog/does-grammarly-trigger-ai-detection" element={<DoesGrammarlyTriggerAIDetection />} />
              <Route path="/blog/humanize-ai-text-free-no-signup" element={<HumanizeAITextFreeNoSignup />} />
              <Route path="/blog/undetectable-ai-vs-ai-free-text-pro" element={<UndetectableAIvsAIFreeTextPro />} />
              <Route path="/blog/ai-detectors-claude-gemini-gpt5-2026" element={<AIDetectorsClaudeGeminiGPT5 />} />
              <Route path="/blog/is-it-illegal-to-use-ai-for-school" element={<IsItIllegalToUseAIForSchool />} />
              <Route path="/blog/how-to-cite-ai-generated-content" element={<HowToCiteAIGeneratedContent />} />
              <Route path="/blog/chatgpt-vs-claude-vs-gemini-detection" element={<ChatGPTvsClaudevsGeminiDetection />} />
              <Route path="/blog/ai-writing-high-school-students" element={<AIWritingHighSchoolStudents />} />
              <Route path="/blog/how-to-check-if-written-by-ai" element={<HowToCheckIfWrittenByAI />} />
              <Route path="/blog/quillbot-vs-ai-free-text-pro" element={<QuillbotVsAIFreeTextPro />} />
              <Route path="/blog/ai-disclosure-policies-2026" element={<AIDisclosurePolicies2026 />} />
              <Route path="/blog/turnitin-ai-detection-accuracy" element={<TurnitinAIDetectionAccuracy />} />
              <Route path="/blog/ai-writing-for-freelancers" element={<AIWritingForFreelancers />} />
              <Route path="/blog/ai-humanizer-for-blog-posts" element={<AIHumanizerForBlogPosts />} />
              <Route path="/blog/originality-ai-accuracy-false-positives" element={<OriginalityAIAccuracyFalsePositives />} />
              <Route path="/blog/ai-for-research-papers" element={<AIForResearchPapers />} />
              <Route path="/blog/ai-writing-business-reports-emails" element={<AIWritingBusinessReports />} />
              <Route path="/blog/best-ai-detector-for-teachers" element={<BestAIDetectorForTeachers />} />
              <Route path="/blog/remove-ai-detection-from-text" element={<RemoveAIDetection />} />
              <Route path="/blog/best-ai-essay-writer-undetectable" element={<UndetectableAIEssayWriter />} />
              <Route path="/blog/ai-paraphrasing-tool-avoid-plagiarism" element={<AIParaphrasingToolPlagiarism />} />
              <Route path="/blog/ai-homework-helper-undetectable" element={<AIHomeworkHelper />} />
              <Route path="/blog/rewrite-ai-text-sound-human" element={<RewriteAIText />} />
              <Route path="/blog/best-ai-detector-2026" element={<BestAIDetector2026 />} />
              <Route path="/blog/stealthwriter-alternative" element={<StealthwriterAlternative />} />
              <Route path="/blog/ai-humanizer-for-essays" element={<AIHumanizerForEssays />} />
              <Route path="/blog/turnitin-appeal-ai-detection" element={<TurnitinAppeal />} />
              <Route path="/blog/free-ai-content-detector" element={<FreeAIContentDetector />} />
              <Route path="/blog/chatgpt-college-essays" element={<ChatGPTCollegeEssays />} />
              <Route path="/blog/ai-text-converter" element={<AITextConverter />} />
              <Route path="/blog/does-turnitin-detect-gemini" element={<DoesTurnitinDetectGemini />} />
              <Route path="/blog/ai-detector-employers" element={<AIDetectorEmployers />} />
              <Route path="/blog/undetectable-ai-alternatives" element={<UndetectableAIAlternatives />} />
              <Route path="/blog/claude-academic-writing" element={<ClaudeAcademicWriting />} />
              <Route path="/blog/humanize-chatgpt-text" element={<HumanizeChatGPTText />} />
              <Route path="/blog/best-ai-tools-for-students" element={<BestAIToolsForStudents />} />
              <Route path="/blog/can-turnitin-detect-perplexity" element={<CanTurnitinDetectPerplexity />} />
              <Route path="/blog/turnitin-similarity-vs-ai-score" element={<TurnitinSimilarityVsAIScore />} />
              <Route path="/blog/gptzero-accuracy-review" element={<GPTZeroAccuracyReview />} />
              <Route path="/blog/ai-ghostwriter" element={<AIGhostwriter />} />
              <Route path="/blog/ai-dissertation-thesis" element={<AIDissertationThesis />} />
              <Route path="/blog/copyleaks-vs-turnitin" element={<CopyleaksVsTurnitin />} />
              <Route path="/blog/ai-instagram-captions" element={<AIInstagramCaptions />} />
              <Route path="/blog/ai-cover-letter-generator" element={<AICoverLetterGenerator />} />
              <Route path="/blog/chatgpt-alternatives-essays" element={<ChatGPTAlternativesEssays />} />
              <Route path="/blog/ai-blog-post-generator" element={<AIBlogPostGenerator />} />
              <Route path="/blog/ai-essay-checker" element={<AIEssayChecker />} />
              <Route path="/blog/make-ai-writing-creative" element={<MakeAIWritingCreative />} />
              <Route path="/blog/ai-content-at-scale" element={<AIContentAtScale />} />
              <Route path="/blog/ai-grant-writing" element={<AIGrantWriting />} />
              <Route path="/blog/wordtune-vs-ai-free-text-pro" element={<WordtuneComparison />} />
              <Route path="/blog/ai-press-releases" element={<AIPressReleases />} />
              <Route path="/blog/chatgpt-plus-detection" element={<ChatGPTPlusDetection />} />
              <Route path="/blog/ai-medical-scientific-writing" element={<AIMedicalScientificWriting />} />
              <Route path="/bypass-turnitin-ai-detection" element={<BypassTurnitin />} />
              <Route path="/bypass-gptzero-detection" element={<BypassGPTZero />} />
              <Route path="/bypass-originality-ai" element={<BypassOriginality />} />
              <Route path="/vs-writehuman" element={<VsWriteHuman />} />
              <Route path="/vs-undetectable-ai" element={<VsUndetectable />} />
              <Route path="/vs-humanizeai-pro" element={<VsHumanizeAIPro />} />
              <Route path="/compare-ai-humanizers" element={<CompareAIHumanizers />} />
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
              <Route path="/blog/ai-content-seo" element={<SEORedirect to="/blog/ai-content-seo-undetectable" />} />
              <Route path="/blog/gptinf-vs-ai-free-text-pro-comparison" element={<SEORedirect to="/blog/gptinf-vs-ai-free-text-pro" />} />
              <Route path="/blog/originality-ai-review-pricing-bypass" element={<SEORedirect to="/blog/originality-ai-review-how-to-beat" />} />
              <Route path="/blog/paraphrasing-vs-humanizing-ai-text" element={<SEORedirect to="/blog/paraphrasing-vs-humanizing" />} />
              <Route path="/bypass-turnitin" element={<SEORedirect to="/bypass-turnitin-ai-detection" />} />
              
              <Route path="/blog/does-turnitin-detect-chatgpt" element={<DoesTurnitinDetectChatGPT />} />
              <Route path="/blog/check-my-essay-for-ai" element={<CheckMyEssayForAI />} />
              <Route path="/blog/best-free-ai-humanizer-2026" element={<BestFreeAIHumanizer2026 />} />
              <Route path="/blog/ai-legal-writing-law-school" element={<AILegalWriting />} />
              <Route path="/blog/turnitin-vs-gptzero-vs-originality-ai" element={<TurnitinVsGPTZeroVsOriginalityAI />} />
              <Route path="/blog/ai-twitter-thread-generator" element={<AITwitterThreadGenerator />} />
              <Route path="/blog/ai-writing-nursing-healthcare-students" element={<AIWritingNursingHealthcare />} />
              <Route path="/blog/ai-content-google-ai-overviews" element={<AIContentGoogleAIOverviews />} />
              <Route path="/blog/ai-writing-upwork-fiverr-freelancers" element={<AIWritingUpworkFiverr />} />
              <Route path="/blog/ai-college-admissions-essays-personal-statements" element={<AICollegeAdmissionsEssays />} />
              <Route path="/blog/ai-writing-non-native-english-speakers" element={<AIWritingNonNativeEnglish />} />
              <Route path="/blog/can-ai-detectors-detect-gpt5" element={<CanDetectorsDetectGPT5 />} />
              <Route path="/blog/humanize-claude-output" element={<HumanizeClaudeOutput />} />
              <Route path="/blog/humanize-gemini-output" element={<HumanizeGeminiOutput />} />
              <Route path="/blog/does-canvas-detect-chatgpt" element={<DoesCanvasDetectChatGPT />} />

              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
