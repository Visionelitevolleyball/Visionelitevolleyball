"use client";

import { useEffect } from "react";
import { trackError, trackWebVitals } from "@/lib/analytics/gtag";

// Define LayoutShift interface for TypeScript
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

/**
 * Analytics Provider Component
 * Handles global error tracking and web vitals reporting
 */
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Track unhandled errors
    const handleError = (event: ErrorEvent) => {
      trackError(
        event.message,
        event.error?.stack,
        true // Mark as fatal since it's unhandled
      );
    };

    // Track unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      trackError(
        `Unhandled Promise Rejection: ${event.reason}`,
        event.reason?.stack || String(event.reason),
        true
      );
    };

    // Add error listeners
    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    // Track Web Vitals if available
    if (typeof window !== "undefined" && "web-vital" in window) {
      // This would be implemented with the web-vitals library
      // For now, we'll use Performance Observer API for basic metrics
      try {
        // Track Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
            renderTime?: number;
            loadTime?: number;
            id?: string;
          };
          trackWebVitals({
            name: "LCP",
            value: lastEntry.renderTime || lastEntry.loadTime || 0,
            id: lastEntry.id || "lcp-" + Date.now(),
          });
        });
        lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });

        // Track First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEventTiming & {
              processingStart?: number;
              id?: string;
            };
            trackWebVitals({
              name: "FID",
              value: fidEntry.processingStart ? fidEntry.processingStart - entry.startTime : 0,
              id: fidEntry.id || "fid-" + Date.now(),
            });
          });
        });
        fidObserver.observe({ type: "first-input", buffered: true });

        // Track Cumulative Layout Shift
        let clsValue = 0;
        let clsEntries: LayoutShift[] = [];
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShift = entry as LayoutShift;
            if (!layoutShift.hadRecentInput) {
              const firstSessionEntry = clsEntries[0];
              const lastSessionEntry = clsEntries[clsEntries.length - 1];
              
              if (
                layoutShift.startTime - lastSessionEntry?.startTime < 1000 &&
                layoutShift.startTime - firstSessionEntry?.startTime < 5000
              ) {
                clsValue += layoutShift.value;
                clsEntries.push(layoutShift);
              } else {
                clsValue = layoutShift.value;
                clsEntries = [layoutShift];
              }
            }
          }
          
          // Report CLS when it stabilizes
          if (clsEntries.length > 0) {
            trackWebVitals({
              name: "CLS",
              value: clsValue,
              id: "cls-" + Date.now(),
            });
          }
        });
        clsObserver.observe({ type: "layout-shift", buffered: true });

        // Clean up observers on unmount
        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch {
        // Performance Observer not supported
        console.log("Performance Observer not supported");
      }
    }

    // Cleanup
    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  return <>{children}</>;
}