/**
 * Google Analytics 4 Core Module
 * Comprehensive tracking for Volleyball Fraser Valley
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Check if we're in production and GA is configured
export const isGAEnabled = (): boolean => {
  return (
    typeof window !== "undefined" &&
    process.env.NODE_ENV === "production" &&
    !!GA_MEASUREMENT_ID
  );
};

// Type definitions for gtag
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

// Initialize gtag - called once when GA loads
export const initializeGA = () => {
  if (!isGAEnabled()) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date() as unknown as string);
  window.gtag("config", GA_MEASUREMENT_ID!, {
    send_page_view: false, // We'll handle this manually for better control
  });
};

// Page view tracking
export const trackPageView = (url: string) => {
  if (!isGAEnabled()) return;

  window.gtag("event", "page_view", {
    page_path: url,
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Enhanced e-commerce event types
export interface EcommerceItem {
  item_id: string;
  item_name: string;
  item_category?: string;
  item_variant?: string;
  price?: number;
  quantity?: number;
}

// Custom event tracking with strong typing
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
  additionalParams?: Record<string, unknown>
) => {
  if (!isGAEnabled()) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
    ...additionalParams,
  });
};

// Specific event tracking functions

// Track navbar navigation
export const trackNavigation = (
  menuItem: string,
  subItem?: string,
  isMobile: boolean = false
) => {
  trackEvent("navigation_click", "Navigation", menuItem, undefined, {
    sub_item: subItem,
    device_type: isMobile ? "mobile" : "desktop",
  });
};

// Track CTA button clicks
export const trackCTAClick = (
  buttonText: string,
  location: string,
  destination?: string
) => {
  trackEvent("cta_click", "CTA", buttonText, undefined, {
    button_location: location,
    destination_url: destination,
  });
};

// Track form submissions
export const trackFormSubmit = (
  formName: string,
  formType: string,
  success: boolean = true
) => {
  trackEvent(
    success ? "form_submit" : "form_error",
    "Form",
    formName,
    undefined,
    {
      form_type: formType,
      success: success,
    }
  );
};

// Track newsletter signup
export const trackNewsletterSignup = (
  email: string,
  source: string = "popup"
) => {
  trackEvent("newsletter_signup", "Newsletter", source, undefined, {
    email_domain: email.split("@")[1],
  });
};

// Track video interactions
export const trackVideoEvent = (
  action: "play" | "pause" | "complete",
  videoTitle: string,
  videoId?: string,
  currentTime?: number
) => {
  trackEvent(`video_${action}`, "Video", videoTitle, currentTime, {
    video_id: videoId,
    video_percent: currentTime ? Math.round((currentTime / 100) * 100) : 0,
  });
};

// Track program/camp views
export const trackProgramView = (
  programName: string,
  programType: string,
  programId?: string
) => {
  trackEvent("view_program", "Programs", programName, undefined, {
    program_type: programType,
    program_id: programId,
  });
};

// Track registration process
export const trackRegistration = (
  step: "begin" | "complete" | "abandon",
  programName: string,
  programType: string,
  value?: number
) => {
  const eventName =
    step === "begin"
      ? "begin_registration"
      : step === "complete"
      ? "complete_registration"
      : "abandon_registration";

  trackEvent(eventName, "Registration", programName, value, {
    program_type: programType,
    currency: "CAD",
  });
};

// Enhanced e-commerce tracking
export const trackEcommerce = (
  eventType:
    | "view_item"
    | "add_to_cart"
    | "begin_checkout"
    | "purchase"
    | "remove_from_cart",
  items: EcommerceItem[],
  value?: number,
  transactionId?: string
) => {
  if (!isGAEnabled()) return;

  const eventData: Record<string, unknown> = {
    currency: "CAD",
    value: value,
    items: items,
  };

  if (transactionId) {
    eventData.transaction_id = transactionId;
  }

  window.gtag("event", eventType, eventData);
};

// Track scroll depth
const scrollDepthMarks = new Set<number>();
export const trackScrollDepth = () => {
  if (!isGAEnabled()) return;

  const scrollPercent = Math.round(
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
      100
  );

  const depths = [25, 50, 75, 100];
  depths.forEach((depth) => {
    if (scrollPercent >= depth && !scrollDepthMarks.has(depth)) {
      scrollDepthMarks.add(depth);
      trackEvent("scroll_depth", "Engagement", `${depth}%`, depth);
    }
  });
};

// Track time on page
let pageStartTime = Date.now();
export const trackTimeOnPage = () => {
  if (!isGAEnabled()) return;

  const timeOnPage = Math.round((Date.now() - pageStartTime) / 1000);
  trackEvent("time_on_page", "Engagement", document.title, timeOnPage);
};

// Track errors
export const trackError = (
  errorMessage: string,
  errorStack?: string,
  fatal: boolean = false
) => {
  if (!isGAEnabled()) return;

  trackEvent(
    fatal ? "fatal_error" : "error",
    "Error",
    errorMessage,
    undefined,
    {
      error_stack: errorStack?.substring(0, 500), // Limit stack trace length
      page_url: window.location.href,
    }
  );
};

// Track 404 pages
export const track404 = (attemptedUrl: string) => {
  trackEvent("404_error", "Error", attemptedUrl, undefined, {
    referrer: document.referrer,
  });
};

// Track search
export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  trackEvent("search", "Site Search", searchTerm, resultsCount, {
    search_term: searchTerm,
    results_count: resultsCount,
  });
};

// Track social share
export const trackSocialShare = (
  platform: string,
  contentType: string,
  contentTitle?: string
) => {
  trackEvent("share", "Social", platform, undefined, {
    content_type: contentType,
    content_title: contentTitle,
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent("external_link", "Outbound", url, undefined, {
    link_text: linkText,
    link_domain: new URL(url).hostname,
  });
};

// Track file downloads
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent("file_download", "Download", fileName, undefined, {
    file_type: fileType,
  });
};

// Set user properties
export const setUserProperties = (properties: Record<string, unknown>) => {
  if (!isGAEnabled()) return;

  window.gtag("set", "user_properties", properties);
};

// Track user timing (performance)
export const trackTiming = (
  category: string,
  variable: string,
  value: number,
  label?: string
) => {
  if (!isGAEnabled()) return;

  window.gtag("event", "timing_complete", {
    event_category: category,
    name: variable,
    value: value,
    event_label: label,
  });
};

// Track web vitals
export const trackWebVitals = (metric: {
  name: string;
  value: number;
  id: string;
}) => {
  if (!isGAEnabled()) return;

  trackEvent("web_vitals", metric.name, metric.id, Math.round(metric.value), {
    metric_value: metric.value,
    metric_id: metric.id,
  });
};

// Reset scroll depth marks when navigating
export const resetScrollDepth = () => {
  scrollDepthMarks.clear();
  pageStartTime = Date.now();
};