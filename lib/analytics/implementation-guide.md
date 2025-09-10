/**
 * Google Analytics Implementation Guide
 * Examples of how to add tracking to various components
 */

import { useAnalytics } from "@/lib/analytics/use-analytics";

// ============================================
// NAVBAR TRACKING EXAMPLE
// ============================================
export function NavbarExample() {
  const analytics = useAnalytics();

  return (
    <nav>
      <a
        href="/programs"
        onClick={() => {
          analytics.trackNav("Programs", undefined, false);
        }}
      >
        Programs
      </a>
      
      {/* Dropdown submenu item */}
      <a
        href="/programs/summer-camps"
        onClick={() => {
          analytics.trackNav("Programs", "Summer Camps", false);
        }}
      >
        Summer Camps
      </a>
    </nav>
  );
}

// ============================================
// HERO SECTION CTA TRACKING
// ============================================
export function HeroSectionExample() {
  const analytics = useAnalytics();

  return (
    <section>
      <button
        onClick={() => {
          analytics.trackCTA(
            "Get Started Today",
            "hero-section",
            "/registration"
          );
          // Navigate to registration...
        }}
      >
        Get Started Today
      </button>
    </section>
  );
}

// ============================================
// FORM SUBMISSION TRACKING
// ============================================
export function ContactFormExample() {
  const analytics = useAnalytics();
  
  const handleSubmit = async (formData: any) => {
    try {
      // Track form start (when user focuses first field)
      analytics.track("form_start", "Form", "Contact Form");
      
      // Submit form...
      const response = await submitForm(formData);
      
      // Track successful submission
      analytics.trackForm("Contact Form", "inquiry", true);
      
    } catch (error) {
      // Track form error
      analytics.trackForm("Contact Form", "inquiry", false);
      analytics.trackErr(error.message, error.stack);
    }
  };

  return <form onSubmit={handleSubmit}>...</form>;
}

// ============================================
// NEWSLETTER POPUP TRACKING
// ============================================
export function NewsletterExample() {
  const analytics = useAnalytics();

  const handleNewsletterSignup = (email: string) => {
    analytics.trackNewsletter(email, "popup");
    // Process signup...
  };

  return (
    <div>
      <button onClick={() => handleNewsletterSignup(email)}>
        Subscribe
      </button>
    </div>
  );
}

// ============================================
// VIDEO PLAYER TRACKING
// ============================================
export function VideoPlayerExample() {
  const analytics = useAnalytics();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      analytics.trackVideo("play", video.title, video.id, video.currentTime);
    };

    const handlePause = () => {
      analytics.trackVideo("pause", video.title, video.id, video.currentTime);
    };

    const handleComplete = () => {
      analytics.trackVideo("complete", video.title, video.id, video.duration);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleComplete);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleComplete);
    };
  }, [analytics]);

  return <video ref={videoRef} />;
}

// ============================================
// PROGRAM PAGE TRACKING
// ============================================
export function ProgramPageExample({ program }: { program: any }) {
  const analytics = useAnalytics();

  useEffect(() => {
    // Track program view when page loads
    analytics.trackProgram(
      program.name,
      program.type,
      program.id
    );
  }, [program, analytics]);

  const handleRegisterClick = () => {
    // Track registration start
    analytics.trackReg(
      "begin",
      program.name,
      program.type,
      program.price
    );
    
    // Track as e-commerce event
    analytics.trackCommerce(
      "add_to_cart",
      [{
        item_id: program.id,
        item_name: program.name,
        item_category: program.type,
        price: program.price,
        quantity: 1,
      }],
      program.price
    );
  };

  return (
    <div>
      <button onClick={handleRegisterClick}>
        Register for {program.name}
      </button>
    </div>
  );
}

// ============================================
// EXTERNAL LINK TRACKING
// ============================================
export function ExternalLinkExample() {
  const analytics = useAnalytics();

  return (
    <a
      href="https://volleyball.ca"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        analytics.trackExtLink(
          "https://volleyball.ca",
          "Volleyball Canada"
        );
      }}
    >
      Visit Volleyball Canada
    </a>
  );
}

// ============================================
// DOWNLOAD TRACKING
// ============================================
export function DownloadExample() {
  const analytics = useAnalytics();

  const handleDownload = (fileName: string, fileType: string) => {
    analytics.trackFileDownload(fileName, fileType);
    // Trigger download...
  };

  return (
    <button
      onClick={() => handleDownload("summer-camp-brochure.pdf", "pdf")}
    >
      Download Brochure
    </button>
  );
}

// ============================================
// 404 PAGE TRACKING
// ============================================
export function NotFoundPageExample() {
  const analytics = useAnalytics();
  const pathname = usePathname();

  useEffect(() => {
    analytics.track404Page(pathname);
  }, [pathname, analytics]);

  return <div>Page not found</div>;
}

// ============================================
// SEARCH TRACKING
// ============================================
export function SearchExample() {
  const analytics = useAnalytics();

  const handleSearch = (query: string, results: any[]) => {
    analytics.trackSiteSearch(query, results.length);
  };

  return (
    <input
      type="search"
      onChange={(e) => {
        const results = performSearch(e.target.value);
        handleSearch(e.target.value, results);
      }}
    />
  );
}

// ============================================
// SOCIAL SHARE TRACKING
// ============================================
export function SocialShareExample() {
  const analytics = useAnalytics();

  const handleShare = (platform: string) => {
    analytics.trackShare(
      platform,
      "blog-post",
      document.title
    );
    // Open share dialog...
  };

  return (
    <div>
      <button onClick={() => handleShare("facebook")}>
        Share on Facebook
      </button>
      <button onClick={() => handleShare("twitter")}>
        Share on Twitter
      </button>
    </div>
  );
}

// ============================================
// USER PROPERTIES EXAMPLE
// ============================================
export function UserPropertiesExample() {
  const analytics = useAnalytics();

  useEffect(() => {
    // Set user properties after login or user identification
    analytics.setUserProps({
      user_type: "parent",
      account_type: "free",
      preferred_language: "en",
      location_region: "fraser_valley",
    });
  }, [analytics]);

  return null;
}

// ============================================
// COMPLETE REGISTRATION TRACKING
// ============================================
export function RegistrationCompleteExample() {
  const analytics = useAnalytics();

  const handleRegistrationComplete = (registrationData: any) => {
    // Track registration completion
    analytics.trackReg(
      "complete",
      registrationData.programName,
      registrationData.programType,
      registrationData.totalAmount
    );

    // Track as e-commerce purchase
    analytics.trackCommerce(
      "purchase",
      registrationData.items,
      registrationData.totalAmount,
      registrationData.transactionId
    );

    // Set user properties
    analytics.setUserProps({
      customer_type: "registered",
      program_enrolled: registrationData.programType,
    });
  };

  return null;
}