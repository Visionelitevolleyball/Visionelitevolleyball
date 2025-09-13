"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "@/app/components/ui/animated-counter";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8.5rem)] flex justify-center overflow-hidden pt-8 lg:pt-12">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            2025 Season Registration Open
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-3xl sm:text-4xl md:text-5xl font-medium text-gray-600 dark:text-gray-400 mb-2">
            WELCOME TO
          </span>
          <span
            className={cn(
              "inline-block",
              "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]",
              "dark:from-[#e2e8f0] dark:via-[#cbd5e1] dark:to-[#94a3b8]",
              "bg-clip-text text-transparent",
              "drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            )}
          >
            VOLLEYBALL
          </span>
          <br />
          <span
            className={cn(
              "inline-block",
              "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600",
              "dark:from-amber-200 dark:via-yellow-400 dark:to-amber-600",
              "bg-clip-text text-transparent",
              "drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(236,186,88,0.35)]"
            )}
          >
            FRASER VALLEY
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10"
        >
          Where passion meets excellence. Transform your game with elite
          coaching and world-class training for athletes of all ages.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => window.open("https://visioneliteacademy.com/program-search/", "_blank")}
            className={cn(
              "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
              "text-black font-semibold text-lg px-8 h-14",
              "hover:shadow-lg hover:scale-105",
              "transition-all duration-300",
              "cursor-pointer overflow-hidden",
              "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
              "hover:before:translate-x-[20rem] before:duration-[0.8s] before:-skew-x-[10deg]",
              "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
            )}
          >
            <span className="relative flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => window.location.href = "/programs"}
            className={cn(
              "group font-medium text-lg px-8 h-14",
              "border-2 hover:bg-accent/50",
              "transition-all duration-300"
            )}
          >
            Explore Programs
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-8"
        >
          {[
            { value: 10000, suffix: "+", label: "Happy Athletes" },
            { value: 45, suffix: "+", label: "Expert Coaches" },
            { value: 26, suffix: "+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  delay={0.8 + index * 0.2}
                  duration={2.5}
                />
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
