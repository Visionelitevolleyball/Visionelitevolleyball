"use client";

import { useState, useEffect } from "react";
import { MapPin, UserCircle, Award, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProgramFinderBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={cn(
        "fixed left-0 right-0 z-40 bg-gradient-to-r from-background via-gray-100/70 to-background dark:from-background dark:via-gray-900/60 dark:to-background backdrop-blur-md border-b border-border transition-all duration-300",
        isScrolled ? "top-16 lg:top-[60px]" : "top-20 lg:top-[140px]"
      )}
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-[1600px] mx-auto px-5">
          <div className="flex items-center justify-between min-h-[48px] py-2">
            {/* Left Side - Find a Program */}
            <div className="flex items-center">
              <Button
                size="lg"
                onClick={() => window.open("https://visioneliteacademy.com/program-search/", "_blank")}
                className={cn(
                  "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                  "text-black font-semibold text-[14px] px-5 h-[36px]",
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

              {/* Affiliation text */}
              <span className="ml-4 text-gray-500 text-[12.5px] leading-[1.3] max-w-[500px] hidden xl:block">
                Volleyball Fraser Valley is an Affiliate of VISION Elite
                Academy,
                <br />
                and coaches must complete the VEA Coaching Academy to instruct
                athletes.
              </span>
            </div>

            {/* Right Side - Login & Affiliate */}
            <div className="flex items-center gap-4 flex-shrink-0">
              {/* Login/Sign up */}
              <Link
                href="/login"
                className={cn(
                  "group flex items-center gap-2.5 text-gray-700 dark:text-gray-400 hover:text-secondary dark:hover:text-primary",
                  "transition-all duration-200 text-[14px] font-medium",
                  "relative py-2"
                )}
              >
                <UserCircle className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span className="relative whitespace-nowrap">
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
                  "transition-all duration-200 text-[14px] font-medium",
                  "relative py-2"
                )}
              >
                <Award className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span className="relative whitespace-nowrap">
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
        <div className="px-4 py-3">
          {/* Find a Program - Full Width */}
          <Button
            size="lg"
            onClick={() => window.open("https://visioneliteacademy.com/program-search/", "_blank")}
            className={cn(
              "w-full group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
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
        </div>
      </div>
    </section>
  );
}
