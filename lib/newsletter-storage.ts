// Newsletter localStorage management with best practices

const STORAGE_KEYS = {
  SUBSCRIBED: 'vfv_newsletter_subscribed',
  DISMISSED: 'vfv_newsletter_dismissed',
  LAST_SHOWN: 'vfv_newsletter_last_shown',
  EMAIL: 'vfv_newsletter_email',
} as const;

// Helper to check if localStorage is available
const isLocalStorageAvailable = (): boolean => {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
};

// Safe localStorage operations
const safeStorage = {
  getItem: (key: string): string | null => {
    if (!isLocalStorageAvailable()) return null;
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  
  setItem: (key: string, value: string): void => {
    if (!isLocalStorageAvailable()) return;
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn('Failed to save to localStorage:', e);
    }
  },
  
  removeItem: (key: string): void => {
    if (!isLocalStorageAvailable()) return;
    try {
      localStorage.removeItem(key);
    } catch {
      // Silent fail
    }
  }
};

export const newsletterStorage = {
  // Check if user has already subscribed
  isSubscribed: (): boolean => {
    const subscribed = safeStorage.getItem(STORAGE_KEYS.SUBSCRIBED);
    if (!subscribed) return false;
    
    try {
      const data = JSON.parse(subscribed);
      // Check if subscription is still valid (optional expiry after 1 year)
      const oneYear = 365 * 24 * 60 * 60 * 1000;
      if (data.timestamp && Date.now() - data.timestamp > oneYear) {
        safeStorage.removeItem(STORAGE_KEYS.SUBSCRIBED);
        return false;
      }
      return true;
    } catch {
      return false;
    }
  },

  // Mark user as subscribed
  setSubscribed: (email: string): void => {
    const data = {
      email,
      timestamp: Date.now(),
      subscribed: true
    };
    safeStorage.setItem(STORAGE_KEYS.SUBSCRIBED, JSON.stringify(data));
    // Clear dismissed status if exists
    safeStorage.removeItem(STORAGE_KEYS.DISMISSED);
  },

  // Check if popup was dismissed recently
  isDismissedRecently: (): boolean => {
    const dismissed = safeStorage.getItem(STORAGE_KEYS.DISMISSED);
    if (!dismissed) return false;
    
    try {
      const timestamp = parseInt(dismissed, 10);
      const sevenDays = 7 * 24 * 60 * 60 * 1000; // Show again after 7 days
      return Date.now() - timestamp < sevenDays;
    } catch {
      return false;
    }
  },

  // Mark popup as dismissed
  setDismissed: (): void => {
    safeStorage.setItem(STORAGE_KEYS.DISMISSED, Date.now().toString());
  },

  // Check if popup should be shown automatically
  shouldShowAutomatically: (): boolean => {
    // Don't show if user is subscribed
    if (newsletterStorage.isSubscribed()) return false;
    
    // Don't show if dismissed recently
    if (newsletterStorage.isDismissedRecently()) return false;
    
    // Check last shown time (prevent showing too frequently in same session)
    const lastShown = safeStorage.getItem(STORAGE_KEYS.LAST_SHOWN);
    if (lastShown) {
      const oneHour = 60 * 60 * 1000;
      const timestamp = parseInt(lastShown, 10);
      if (!isNaN(timestamp) && Date.now() - timestamp < oneHour) {
        return false; // Don't show if shown within last hour
      }
    }
    
    return true;
  },

  // Update last shown timestamp
  updateLastShown: (): void => {
    safeStorage.setItem(STORAGE_KEYS.LAST_SHOWN, Date.now().toString());
  },

  // Save email temporarily (for footer flow)
  saveTemporaryEmail: (email: string): void => {
    safeStorage.setItem(STORAGE_KEYS.EMAIL, email);
  },

  // Get saved email
  getSavedEmail: (): string | null => {
    return safeStorage.getItem(STORAGE_KEYS.EMAIL);
  },

  // Clear saved email
  clearSavedEmail: (): void => {
    safeStorage.removeItem(STORAGE_KEYS.EMAIL);
  },

  // Clear all newsletter data (for testing/debugging)
  clearAll: (): void => {
    Object.values(STORAGE_KEYS).forEach(key => {
      safeStorage.removeItem(key);
    });
  },

  // Check subscription status with email
  checkSubscriptionStatus: async (email: string): Promise<boolean> => {
    try {
      const response = await fetch(`/api/newsletter?email=${encodeURIComponent(email)}`);
      if (response.ok) {
        const data = await response.json();
        if (data.subscribed) {
          newsletterStorage.setSubscribed(email);
          return true;
        }
      }
    } catch {
      // Silent fail, rely on localStorage
    }
    return false;
  }
};