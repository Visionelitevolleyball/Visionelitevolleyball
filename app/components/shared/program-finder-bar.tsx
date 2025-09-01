"use client"

import { useState, useEffect } from "react"
import { MapPin, UserCircle, Award, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ProgramFinderBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className={cn(
      "fixed left-0 right-0 z-40 bg-background border-b border-border transition-all duration-300",
      isScrolled ? "top-16 lg:top-[60px]" : "top-20 lg:top-[140px]"
    )}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-[1600px] mx-auto px-5">
          <div className="flex items-center justify-between h-[48px]">
            {/* Left Side - Find a Program */}
            <div className="flex items-center">
              <Button 
                size="lg"
                className={cn(
                  "group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary",
                  "text-black font-semibold text-[15px] px-6 h-[38px]",
                  "hover:shadow-sm",
                  "transition-all duration-300 hover:scale-[1.02]",
                  "cursor-pointer overflow-hidden",
                  "before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-12rem]",
                  "hover:before:translate-x-[20rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                  "before:transition-all before:bg-white before:blur-[10px] before:opacity-70"
                )}
              >
                <span className="relative flex items-center gap-2.5">
                  <MapPin className="h-5 w-5" />
                  <span>Find a Program Near You</span>
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Button>

              {/* Optional search hint text */}
              <span className="ml-5 text-gray-500 text-[14px] hidden xl:block">
                Discover volleyball programs in Fraser Valley
              </span>
            </div>

            {/* Right Side - Login & Affiliate */}
            <div className="flex items-center gap-8">
              {/* Login/Sign up */}
              <Link 
                href="/login"
                className={cn(
                  "group flex items-center gap-2.5 text-gray-700 dark:text-gray-400 hover:text-secondary dark:hover:text-primary",
                  "transition-all duration-200 text-[15px] font-medium",
                  "relative py-2"
                )}
              >
                <UserCircle className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span className="relative">
                  Login/Sign up
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-200 group-hover:w-full" />
                </span>
              </Link>

              <div className="h-5 w-px bg-gray-300" />

              {/* Affiliate Program */}
              <Link 
                href="/affiliate"
                className={cn(
                  "group flex items-center gap-2.5 text-gray-700 dark:text-gray-400 hover:text-secondary dark:hover:text-primary",
                  "transition-all duration-200 text-[15px] font-medium",
                  "relative py-2"
                )}
              >
                <Award className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span className="relative">
                  Affiliate Program
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-200 group-hover:w-full" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-4 space-y-4">
          {/* Find a Program - Full Width */}
          <Button 
            size="lg"
            className={cn(
              "w-full group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary",
              "text-black font-semibold text-[16px] h-[48px]",
              "hover:shadow-sm",
              "transition-all duration-300 hover:scale-[1.01]",
              "cursor-pointer overflow-hidden",
              "before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-12rem]",
              "hover:before:translate-x-[15rem] before:duration-[0.8s] before:-skew-x-[10deg]",
              "before:transition-all before:bg-white before:blur-[10px] before:opacity-70"
            )}
          >
            <span className="relative flex items-center justify-center gap-2.5">
              <MapPin className="h-5 w-5" />
              <span>Find a Program Near You</span>
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>

          {/* Login & Affiliate Links */}
          <div className="flex items-center justify-around py-1">
            <Link 
              href="/login"
              className={cn(
                "flex items-center gap-2 text-gray-700 dark:text-gray-400 hover:text-secondary dark:hover:text-primary",
                "transition-colors duration-300 text-[15px] font-medium",
                "py-2 px-3"
              )}
            >
              <UserCircle className="h-4 w-4" />
              <span>Login/Sign up</span>
            </Link>

            <div className="h-5 w-px bg-gray-300" />

            <Link 
              href="/affiliate"
              className={cn(
                "flex items-center gap-2 text-gray-700 dark:text-gray-400 hover:text-secondary dark:hover:text-primary",
                "transition-colors duration-300 text-[15px] font-medium",
                "py-2 px-3"
              )}
            >
              <Award className="h-4 w-4" />
              <span>Affiliate Program</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}