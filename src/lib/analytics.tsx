import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// TODO: Add your Google Analytics 4 Measurement ID here
// Get it from: https://analytics.google.com/analytics/web/ -> Admin -> Data Streams
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 ID

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// ===== CONVERSION TRACKING EVENTS =====

// AI Checker Events
export const trackAICheckerStart = (wordCount: number) => {
  trackEvent('ai_check_started', 'AI_Checker', 'word_count', wordCount);
};

export const trackAICheckerComplete = (aiProbability: number, processingTime: number) => {
  trackEvent('ai_check_completed', 'AI_Checker', `ai_prob_${Math.round(aiProbability)}`, Math.round(processingTime * 1000));
};

export const trackAICheckerSample = (sampleType: 'ai' | 'human') => {
  trackEvent('sample_text_loaded', 'AI_Checker', sampleType);
};

export const trackAICheckerCopyReport = () => {
  trackEvent('copy_analysis_report', 'AI_Checker', 'report_copied');
};

// Humanizer Events
export const trackHumanizerStart = (wordCount: number, style: string, strength: number) => {
  trackEvent('humanize_started', 'Humanizer', `${style}_strength_${strength}`, wordCount);
};

export const trackHumanizerComplete = (
  undetectabilityScore: number, 
  processingTime: number,
  wordsChanged: number
) => {
  trackEvent('humanize_completed', 'Humanizer', `score_${Math.round(undetectabilityScore)}`, Math.round(processingTime * 1000));
  trackEvent('humanize_words_changed', 'Humanizer', 'words_modified', wordsChanged);
};

export const trackHumanizerCopy = () => {
  trackEvent('copy_humanized_text', 'Humanizer', 'text_copied');
};

export const trackHumanizerDownload = () => {
  trackEvent('download_humanized_text', 'Humanizer', 'text_downloaded');
};

export const trackHumanizerRegenerate = () => {
  trackEvent('regenerate_text', 'Humanizer', 'regenerated');
};

export const trackHumanizerSample = () => {
  trackEvent('sample_text_loaded', 'Humanizer', 'sample_loaded');
};

export const trackHumanizerRecheck = (aiProbability: number) => {
  trackEvent('auto_recheck_completed', 'Humanizer', `ai_prob_${Math.round(aiProbability)}`);
};

// Demo Section Events
export const trackDemoDetect = () => {
  trackEvent('demo_detect_clicked', 'Demo', 'detect_button');
};

export const trackDemoHumanize = () => {
  trackEvent('demo_humanize_clicked', 'Demo', 'humanize_button');
};

export const trackDemoTabSwitch = (tab: 'detect' | 'humanize') => {
  trackEvent('demo_tab_switched', 'Demo', tab);
};

// Navigation & Engagement Events
export const trackCTAClick = (location: string, destination: string) => {
  trackEvent('cta_clicked', 'Navigation', `${location}_to_${destination}`);
};

export const trackBlogPostView = (postTitle: string) => {
  trackEvent('blog_post_viewed', 'Content', postTitle);
};

export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submitted', 'Conversion', 'form_submitted');
};

// Error Tracking
export const trackError = (errorType: string, errorMessage: string) => {
  trackEvent('error_occurred', 'Error', errorType, 0);
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'exception', {
      description: `${errorType}: ${errorMessage}`,
      fatal: false
    });
  }
};
