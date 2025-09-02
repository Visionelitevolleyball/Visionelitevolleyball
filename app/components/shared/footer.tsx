"use client"

import React from "react"
import Image from "next/image"
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

export function Footer() {
  return (
    <footer className={cn(
      "w-full bg-gray-50 dark:bg-gray-950",
      "border-t border-gray-200 dark:border-gray-800",
      "overflow-x-hidden"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 mb-8">
          {/* Left Section - Logo, Contact, Social */}
          <div className="lg:col-span-2 space-y-4">
            <Image
              src="/Volleyball-Fraser Valley.png"
              alt="Volleyball Fraser Valley"
              width={240}
              height={78}
              className="mb-3"
              priority
            />
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-3.5 w-3.5" />
                <span>Fraser Valley, BC</span>
              </div>
              <a 
                href="tel:403-510-1784" 
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>403-510-1784</span>
              </a>
              <a 
                href="mailto:info@volleyballfraser.ca" 
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>info@volleyballfraser.ca</span>
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                className={cn(
                  "p-2 rounded-full",
                  "bg-gray-200 dark:bg-gray-800",
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
                  "bg-gray-200 dark:bg-gray-800",
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
                  "bg-gray-200 dark:bg-gray-800",
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
                  "bg-gray-200 dark:bg-gray-800",
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

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/programs/coaches"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Coach Bios
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/programs"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="/club"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Club Teams
                </a>
              </li>
              <li>
                <a
                  href="/programs/league"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Leagues
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Get the latest news, insights and product updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={cn(
                  "flex-1 px-4 py-2.5 rounded-lg",
                  "bg-white dark:bg-gray-900",
                  "border border-gray-300 dark:border-gray-700",
                  "text-gray-900 dark:text-gray-100",
                  "placeholder:text-gray-500 dark:placeholder:text-gray-500",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                  "transition-all duration-200",
                  "text-sm"
                )}
              />
              <button className={cn(
                "px-4 sm:px-6 py-2.5 rounded-lg",
                "bg-gradient-to-r from-primary to-yellow-500",
                "hover:from-primary/90 hover:to-yellow-500/90",
                "text-black font-semibold text-sm",
                "transition-all duration-200",
                "hover:shadow-lg",
                "flex items-center gap-2 justify-center",
                "w-full sm:w-auto"
              )}>
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} Volleyball Fraser Valley. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-xs text-gray-500 dark:text-gray-500 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-xs text-gray-500 dark:text-gray-500 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}