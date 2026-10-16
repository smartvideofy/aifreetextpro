import { useEffect } from 'react';
import { observeConsent, readPreferences } from './consent';
import { startMarketingTracking, trackMarketingPageView } from './marketingTracking';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    [key: `ga-disable-${string}`]: boolean;
  }
}

const GA_MEASUREMENT_ID = 'G-G1YR6ZJWZE';
let lastAnalyticsPage = '';

function safeLocation() { return window.location.origin + window.location.pathname; }

function initializeAnalytics() {
  if (!readPreferences().analytics || window.__PRERENDER_INJECT__) {
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
    lastAnalyticsPage = '';
    return;
  }
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  if (!document.getElementById('aftp-ga4')) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer?.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false, page_location: safeLocation(), page_referrer: '' });
    const script = document.createElement('script');
    script.id = 'aftp-ga4'; script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }
  trackPageView(window.location.pathname);
}

export const GoogleAnalytics = () => {
  useEffect(() => {
    initializeAnalytics();
    const stopAnalytics = observeConsent(initializeAnalytics);
    const stopMarketing = startMarketingTracking();
    return () => { stopAnalytics(); stopMarketing(); };
  }, []);

  return null;
};

// Track page views
export const trackPageView = (url: string) => {
  trackMarketingPageView(url);
  const path = url.split(/[?#]/)[0];
  if (readPreferences().analytics && window.gtag && lastAnalyticsPage !== path) {
    lastAnalyticsPage = path;
    window.gtag('event', 'page_view', { page_path: path, page_location: window.location.origin + path, page_referrer: '' });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (readPreferences().analytics && typeof window.gtag !== 'undefined') {
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
  if (readPreferences().analytics && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'exception', {
      description: `${errorType}: ${errorMessage}`,
      fatal: false
    });
  }
};
