"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import {
  GA_MEASUREMENT_ID,
  initializeGA,
  trackPageView,
  resetScrollDepth,
  trackScrollDepth,
  trackTimeOnPage,
} from "@/lib/analytics/gtag";

// Component to handle page view tracking
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    // Track page view when route changes
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    trackPageView(url);
    resetScrollDepth();

    // Set up scroll tracking
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        trackScrollDepth();
      }, 500); // Debounce scroll tracking
    };

    // Set up visibility change tracking for time on page
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        trackTimeOnPage();
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    // Track time on page when navigating away
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      trackTimeOnPage();
      clearTimeout(scrollTimer);
    };
  }, [pathname, searchParams]);

  return null;
}

export function GoogleAnalytics() {
  // Only load in production
  if (!GA_MEASUREMENT_ID || process.env.NODE_ENV !== "production") {
    if (process.env.NODE_ENV === "development") {
      console.log("📊 Google Analytics disabled in development mode");
    }
    return null;
  }

  return (
    <>
      {/* Load the Google Analytics script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          initializeGA();
          console.log("📊 Google Analytics initialized");
        }}
      />
      
      {/* Initialize gtag */}
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: false
            });
          `,
        }}
      />
      
      {/* Page view tracker with Suspense boundary */}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}