/**
 * Analytics Event Definitions
 * Centralized event naming and parameters for consistent tracking
 */

// Event Categories
export const EventCategories = {
  NAVIGATION: "Navigation",
  CTA: "CTA",
  FORM: "Form",
  VIDEO: "Video",
  PROGRAM: "Program",
  REGISTRATION: "Registration",
  ENGAGEMENT: "Engagement",
  ERROR: "Error",
  SOCIAL: "Social",
  DOWNLOAD: "Download",
} as const;

// Event Actions
export const EventActions = {
  // Navigation
  NAV_CLICK: "navigation_click",
  MOBILE_MENU_OPEN: "mobile_menu_open",
  MOBILE_MENU_CLOSE: "mobile_menu_close",
  
  // CTA
  CTA_CLICK: "cta_click",
  HERO_CTA_CLICK: "hero_cta_click",
  PROGRAM_CTA_CLICK: "program_cta_click",
  
  // Forms
  FORM_START: "form_start",
  FORM_SUBMIT: "form_submit",
  FORM_ERROR: "form_error",
  NEWSLETTER_SIGNUP: "newsletter_signup",
  CONTACT_SUBMIT: "contact_submit",
  
  // Videos
  VIDEO_PLAY: "video_play",
  VIDEO_PAUSE: "video_pause",
  VIDEO_COMPLETE: "video_complete",
  VIDEO_PROGRESS: "video_progress",
  
  // Programs
  VIEW_PROGRAM: "view_program",
  VIEW_CAMP: "view_camp",
  VIEW_LEAGUE: "view_league",
  VIEW_CLUB: "view_club",
  FILTER_PROGRAMS: "filter_programs",
  
  // Registration
  BEGIN_REGISTRATION: "begin_registration",
  COMPLETE_REGISTRATION: "complete_registration",
  ABANDON_REGISTRATION: "abandon_registration",
  
  // Engagement
  SCROLL_DEPTH: "scroll_depth",
  TIME_ON_PAGE: "time_on_page",
  SHARE_CONTENT: "share_content",
  PRINT_PAGE: "print_page",
  
  // Downloads
  DOWNLOAD_BROCHURE: "download_brochure",
  DOWNLOAD_SCHEDULE: "download_schedule",
  DOWNLOAD_FORM: "download_form",
} as const;

// Standard event parameters
export interface StandardEventParams {
  page_location?: string;
  page_title?: string;
  user_type?: "new" | "returning";
  device_type?: "mobile" | "desktop" | "tablet";
  timestamp?: string;
}

// Program-specific parameters
export interface ProgramEventParams extends StandardEventParams {
  program_id?: string;
  program_name?: string;
  program_type?: "camp" | "league" | "club" | "training";
  program_category?: string;
  program_price?: number;
  program_duration?: string;
  age_group?: string;
  skill_level?: string;
}

// Form-specific parameters
export interface FormEventParams extends StandardEventParams {
  form_id?: string;
  form_name?: string;
  form_type?: string;
  field_errors?: string[];
  submission_time?: number; // Time to complete in seconds
}

// Video-specific parameters
export interface VideoEventParams extends StandardEventParams {
  video_id?: string;
  video_title?: string;
  video_duration?: number;
  video_current_time?: number;
  video_percent?: number;
  video_provider?: "youtube" | "vimeo" | "custom";
}

// E-commerce parameters
export interface EcommerceEventParams extends StandardEventParams {
  transaction_id?: string;
  value?: number;
  currency?: string;
  items?: Array<{
    item_id: string;
    item_name: string;
    item_category?: string;
    item_variant?: string;
    price?: number;
    quantity?: number;
  }>;
  coupon?: string;
  payment_type?: string;
}

// Helper function to get standard params
export const getStandardParams = (): StandardEventParams => {
  return {
    page_location: typeof window !== "undefined" ? window.location.href : "",
    page_title: typeof document !== "undefined" ? document.title : "",
    timestamp: new Date().toISOString(),
    device_type: getDeviceType(),
  };
};

// Helper to determine device type
const getDeviceType = (): "mobile" | "desktop" | "tablet" => {
  if (typeof window === "undefined") return "desktop";
  
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
};

// Event builder helpers
export const buildProgramEvent = (
  action: string,
  programData: Partial<ProgramEventParams>
): [string, string, string | undefined, number | undefined, ProgramEventParams] => {
  return [
    action,
    EventCategories.PROGRAM,
    programData.program_name,
    programData.program_price,
    {
      ...getStandardParams(),
      ...programData,
    },
  ];
};

export const buildFormEvent = (
  action: string,
  formData: Partial<FormEventParams>
): [string, string, string | undefined, number | undefined, FormEventParams] => {
  return [
    action,
    EventCategories.FORM,
    formData.form_name,
    formData.submission_time,
    {
      ...getStandardParams(),
      ...formData,
    },
  ];
};

export const buildVideoEvent = (
  action: string,
  videoData: Partial<VideoEventParams>
): [string, string, string | undefined, number | undefined, VideoEventParams] => {
  return [
    action,
    EventCategories.VIDEO,
    videoData.video_title,
    videoData.video_current_time,
    {
      ...getStandardParams(),
      ...videoData,
    },
  ];
};