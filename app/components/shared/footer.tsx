"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { openNewsletterPopup } from "@/app/components/newsletter-popup";
import { newsletterStorage } from "@/lib/newsletter-storage";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Check if user is already subscribed
    setIsSubscribed(newsletterStorage.isSubscribed());
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setIsSubmitting(true);

    try {
      // Submit email only to API
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          source: 'footer' 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.requiresMoreInfo) {
          // Open popup with email pre-filled to collect name and city
          openNewsletterPopup(email);
        } else {
          // Already subscribed
          alert("You're already subscribed!");
        }
        setEmail("");
      } else {
        if (response.status === 409) {
          alert("You're already subscribed!");
        } else {
          alert(data.error || "Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer
      className={cn(
        "w-full bg-background",
        "border-t border-border",
        "overflow-x-hidden"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 mb-8">
          {/* Left Section - Logo, Contact, Social */}
          <div className="lg:col-span-2 space-y-3">
            {/* Logo and Contact Info Container - Side by side on mobile */}
            <div className="flex flex-row gap-4 sm:block">
              {/* Logo */}
              <div className="w-1/2 sm:w-auto flex-shrink-0">
                <Image
                  src="/Volleyball-Fraser Valley.png"
                  alt="Volleyball Fraser Valley"
                  width={240}
                  height={78}
                  className="w-full h-auto sm:w-[240px] sm:h-[78px] object-contain"
                  priority
                />
              </div>

              {/* Contact Info */}
              <div className="flex-1 space-y-1 sm:space-y-2 sm:mt-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <MapPin className="h-3 sm:h-3.5 w-3 sm:w-3.5 flex-shrink-0" />
                  <span>Fraser Valley, BC</span>
                </div>
                <a
                  href="tel:403-510-1784"
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-3 sm:h-3.5 w-3 sm:w-3.5 flex-shrink-0" />
                  <span>403-510-1784</span>
                </a>
                <a
                  href="mailto:hello@volleyballfraservalley.ca"
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  <Mail className="h-3 sm:h-3.5 w-3 sm:w-3.5 flex-shrink-0" />
                  <span>hello@volleyballfraservalley.ca</span>
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                className={cn(
                  "p-2 rounded-full",
                  "bg-muted",
                  "hover:bg-primary hover:text-black",
                  "dark:hover:bg-primary dark:hover:text-black",
                  "transition-all duration-200"
                )}
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                className={cn(
                  "p-2 rounded-full",
                  "bg-muted",
                  "hover:bg-primary hover:text-black",
                  "dark:hover:bg-primary dark:hover:text-black",
                  "transition-all duration-200"
                )}
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                className={cn(
                  "p-2 rounded-full",
                  "bg-muted",
                  "hover:bg-primary hover:text-black",
                  "dark:hover:bg-primary dark:hover:text-black",
                  "transition-all duration-200"
                )}
                aria-label="Youtube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                className={cn(
                  "p-2 rounded-full",
                  "bg-muted",
                  "hover:bg-primary hover:text-black",
                  "dark:hover:bg-primary dark:hover:text-black",
                  "transition-all duration-200"
                )}
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Company and Quick Links - Side by side on mobile */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-6 lg:gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/programs/coaches"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Coach Bios
                  </a>
                </li>
                <li>
                  <a
                    href="/testimonials"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/programs"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="/club"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Club Teams
                  </a>
                </li>
                <li>
                  <a
                    href="/programs/league"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Leagues
                  </a>
                </li>
                <li>
                  <a
                    href="/resources"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Stay Updated
            </h3>
            {isSubscribed ? (
              // Already subscribed message
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">You&apos;re subscribed!</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Thank you for subscribing to our newsletter. You&apos;ll receive updates on upcoming events and special offers.
                </p>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground mb-4">
                  Get discounts, special offers, and notifications of upcoming events!
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className={cn(
                      "flex-1 px-4 py-2.5 rounded-lg",
                      "bg-card",
                      "border border-border",
                      "text-foreground",
                      "placeholder:text-muted-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                      "transition-all duration-200",
                      "text-sm",
                      "disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "px-4 sm:px-6 py-2.5 rounded-lg",
                      "bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                      "text-black font-semibold text-sm",
                      "transition-all duration-300",
                      "hover:scale-105 hover:shadow-lg",
                      "flex items-center gap-2 justify-center",
                      "w-full sm:w-auto",
                      "relative cursor-pointer overflow-hidden",
                      "before:absolute before:w-[0.4rem] before:h-[20rem]",
                      "before:top-0 before:translate-x-[-10rem]",
                      "hover:before:translate-x-[15rem]",
                      "before:duration-[0.8s] before:-skew-x-[10deg]",
                      "before:transition-all before:bg-white",
                      "before:blur-[10px] before:opacity-70",
                      "disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Volleyball Fraser Valley. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
