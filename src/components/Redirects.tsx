import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Map old URLs to new URLs for proper redirects
const redirectMap: Record<string, string> = {
  // Old blog slugs to new ones
  "/humanizer": "https://app.aifreetextpro.com/humanizer",
  "/detector": "https://app.aifreetextpro.com/detector",
  "/plagiarism": "https://app.aifreetextpro.com/plagiarism",
  "/auth": "https://app.aifreetextpro.com/auth",
  
  // Old blog URLs - map to correct slugs
  "/blog/make-chatgpt-undetectable-guide-2025": "/blog/make-chatgpt-undetectable-2025",
  "/blog/ai-detection-patterns-perplexity-burstiness": "/blog/ai-detection-patterns-explained",
  "/blog/academic-ai-writing-thesis-essays-safely": "/blog/academic-ai-writing-safely",
  "/blog/ai-content-seo-undetectable-articles": "/blog/ai-content-seo-undetectable",
  "/blog/gptinf-vs-ai-free-text-pro-comparison": "/blog/gptinf-vs-ai-free-text-pro",
  "/blog/originality-ai-review-pricing-bypass": "/blog/originality-ai-review-how-to-beat",
  "/blog/paraphrasing-vs-humanizing-ai-text": "/blog/paraphrasing-vs-humanizing",
  
  // Bypass Turnitin old URLs
  "/bypass-turnitin": "/bypass-turnitin-ai-detection",
};

export const Redirects = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const targetUrl = redirectMap[location.pathname];
    
    if (targetUrl) {
      // If it's an external URL, redirect there
      if (targetUrl.startsWith("http")) {
        window.location.href = targetUrl;
      } else {
        // Internal redirect
        navigate(targetUrl, { replace: true });
      }
    }
  }, [location.pathname, navigate]);

  return null;
};

export default Redirects;
