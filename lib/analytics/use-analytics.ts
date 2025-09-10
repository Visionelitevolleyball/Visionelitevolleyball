"use client";

import { useCallback } from "react";
import {
  trackEvent,
  trackNavigation,
  trackCTAClick,
  trackFormSubmit,
  trackNewsletterSignup,
  trackVideoEvent,
  trackProgramView,
  trackRegistration,
  trackEcommerce,
  trackError,
  track404,
  trackSearch,
  trackSocialShare,
  trackExternalLink,
  trackDownload,
  setUserProperties,
  EcommerceItem,
} from "./gtag";

/**
 * Custom hook for Google Analytics tracking
 * Provides easy-to-use methods for tracking events throughout the app
 */
export const useAnalytics = () => {
  // Generic event tracking
  const track = useCallback(
    (
      action: string,
      category: string,
      label?: string,
      value?: number,
      additionalParams?: Record<string, unknown>
    ) => {
      trackEvent(action, category, label, value, additionalParams);
    },
    []
  );

  // Navigation tracking
  const trackNav = useCallback(
    (menuItem: string, subItem?: string, isMobile: boolean = false) => {
      trackNavigation(menuItem, subItem, isMobile);
    },
    []
  );

  // CTA tracking
  const trackCTA = useCallback(
    (buttonText: string, location: string, destination?: string) => {
      trackCTAClick(buttonText, location, destination);
    },
    []
  );

  // Form tracking
  const trackForm = useCallback(
    (formName: string, formType: string, success: boolean = true) => {
      trackFormSubmit(formName, formType, success);
    },
    []
  );

  // Newsletter tracking
  const trackNewsletter = useCallback(
    (email: string, source: string = "popup") => {
      trackNewsletterSignup(email, source);
    },
    []
  );

  // Video tracking
  const trackVideo = useCallback(
    (
      action: "play" | "pause" | "complete",
      videoTitle: string,
      videoId?: string,
      currentTime?: number
    ) => {
      trackVideoEvent(action, videoTitle, videoId, currentTime);
    },
    []
  );

  // Program tracking
  const trackProgram = useCallback(
    (programName: string, programType: string, programId?: string) => {
      trackProgramView(programName, programType, programId);
    },
    []
  );

  // Registration tracking
  const trackReg = useCallback(
    (
      step: "begin" | "complete" | "abandon",
      programName: string,
      programType: string,
      value?: number
    ) => {
      trackRegistration(step, programName, programType, value);
    },
    []
  );

  // E-commerce tracking
  const trackCommerce = useCallback(
    (
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
      trackEcommerce(eventType, items, value, transactionId);
    },
    []
  );

  // Error tracking
  const trackErr = useCallback(
    (errorMessage: string, errorStack?: string, fatal: boolean = false) => {
      trackError(errorMessage, errorStack, fatal);
    },
    []
  );

  // 404 tracking
  const track404Page = useCallback((attemptedUrl: string) => {
    track404(attemptedUrl);
  }, []);

  // Search tracking
  const trackSiteSearch = useCallback(
    (searchTerm: string, resultsCount?: number) => {
      trackSearch(searchTerm, resultsCount);
    },
    []
  );

  // Social share tracking
  const trackShare = useCallback(
    (platform: string, contentType: string, contentTitle?: string) => {
      trackSocialShare(platform, contentType, contentTitle);
    },
    []
  );

  // External link tracking
  const trackExtLink = useCallback(
    (url: string, linkText?: string) => {
      trackExternalLink(url, linkText);
    },
    []
  );

  // Download tracking
  const trackFileDownload = useCallback(
    (fileName: string, fileType: string) => {
      trackDownload(fileName, fileType);
    },
    []
  );

  // User properties
  const setUserProps = useCallback((properties: Record<string, unknown>) => {
    setUserProperties(properties);
  }, []);

  return {
    // Generic tracking
    track,
    
    // Specific tracking methods
    trackNav,
    trackCTA,
    trackForm,
    trackNewsletter,
    trackVideo,
    trackProgram,
    trackReg,
    trackCommerce,
    trackErr,
    track404Page,
    trackSiteSearch,
    trackShare,
    trackExtLink,
    trackFileDownload,
    setUserProps,
  };
};

/**
 * Example usage in components:
 * 
 * const analytics = useAnalytics();
 * 
 * // Track button click
 * onClick={() => {
 *   analytics.trackCTA("Register Now", "hero-section", "/registration");
 *   // ... handle click
 * }}
 * 
 * // Track form submission
 * onSubmit={() => {
 *   analytics.trackForm("contact-form", "inquiry", true);
 *   // ... handle submit
 * }}
 * 
 * // Track program view
 * useEffect(() => {
 *   analytics.trackProgram("Summer Camp 2024", "camp", "camp-001");
 * }, []);
 */