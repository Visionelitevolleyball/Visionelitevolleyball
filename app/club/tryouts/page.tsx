"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Award, Trophy, CheckCircle, ArrowRight } from "lucide-react";

export default function TryoutsPage() {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-background dark:to-gray-950" />
      </div>
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero */}
      <section className="relative pt-10 sm:pt-12 pb-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            <span className="block text-gray-900 dark:text-gray-100">
              REALIZE YOUR
            </span>
            <span
              className={cn(
                "block mt-2",
                "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600",
                "dark:from-amber-200 dark:via-yellow-400 dark:to-amber-600",
                "bg-clip-text text-transparent",
                "bg-[length:200%_100%]",
                "animate-gradient"
              )}
            >
              POTENTIAL
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            All VISION VBC Fraser Valley teams are trained under the direct
            supervision of Program Head Coach Luc Tremblay. Proven results at
            the highest levels.
          </p>
        </div>
      </section>

      {/* Achievements Banner */}
      <section className="relative pb-6">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-6 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200/50 dark:border-amber-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-amber-600" />
              <span className="font-semibold text-amber-900 dark:text-yellow-200">
                3 National Championships • 45 Provincial medals
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-amber-900/80 dark:text-yellow-200/80">
              <Trophy className="h-4 w-4" /> 12 Gold
              <Trophy className="h-4 w-4" /> 14 Silver
              <Trophy className="h-4 w-4" /> 19 Bronze
            </div>
          </div>
        </div>
      </section>

      {/* Schedules */}
      <section className="relative pb-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="rounded-2xl p-6 bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <Calendar className="h-4 w-4 text-primary" /> September Open Gyms
              — Sky High Pre-Selection
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Open Gyms will be hosted in September to pre-select athletes for
              Sky High VBC. Age classes will be finalized during this process.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <Calendar className="h-4 w-4 text-primary" /> December Tryouts —
              Sky High VBC
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Sky High Volleyball Club will host official club tryouts in
              December. Details announced by end of September.
            </p>
          </div>

          <div className="rounded-2xl p-6 bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <Calendar className="h-4 w-4 text-primary" /> January Tryouts —
              VISION VBC
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              VISION VBC will host tryouts in January 2026 following regular
              club tryouts. Details announced by end of September.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Our Vision Program */}
      <section className="relative pb-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-yellow-500/5 dark:from-primary/10 dark:to-yellow-500/10 border border-primary/10 dark:border-primary/20 p-8 lg:p-10">
            <h3 className="text-2xl font-bold mb-3">
              Understanding Our VISION Club Program
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              A developmental alternative to high-cost, high-stress club
              volleyball. Inspired by successful U.S. models, it prioritizes
              skill development, participation, and enjoyment.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-4 bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-1">Training Schedule</h4>
                <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> 3
                    sessions per week
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Fundamentals + skill progression
                  </li>
                </ul>
              </div>
              <div className="rounded-xl p-4 bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-1">Tournament Play</h4>
                <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Two
                    mini tournaments
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Two
                    one-day tournaments
                  </li>
                </ul>
              </div>
              <div className="rounded-xl p-4 bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-1">Age Groups</h4>
                <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                    U13–U14 combined
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                    U15–U16 combined
                  </li>
                </ul>
              </div>
              <div className="rounded-xl p-4 bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-1">Team Selection</h4>
                <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Tryouts in early–mid January
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Post
                    local club windows
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-500/10 border border-emerald-500/10 dark:border-emerald-500/20 p-8 lg:p-10">
            <h3 className="text-2xl font-bold mb-3">
              A Family-Oriented Alternative
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Affordable, quality coaching, limited travel. Balanced competitive
              experience without sacrificing enjoyment or well-being.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 flex-shrink-0">
                  <Trophy className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Lower Stress Environment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Focus on development over pressure-driven competition</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Budget-Friendly Program</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Quality training without the financial burden of elite clubs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 flex-shrink-0">
                  <Calendar className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Flexible Schedule</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Perfect for multi-sport athletes and busy families</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 flex-shrink-0">
                  <Award className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Experienced Coaching Staff</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn from certified coaches with proven track records</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className={cn(
                  "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                  "text-black font-bold text-lg px-10 h-12 cursor-pointer overflow-hidden"
                )}
                onClick={() => (window.location.href = "/club/vision")}
              >
                <span className="relative flex items-center gap-2">
                  Explore Vision VBC <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium text-lg px-10 h-12 border-2"
                onClick={() => (window.location.href = "/contact/get-in-touch")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative pb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Take the Next Step?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-yellow-500 text-black font-bold px-10 h-14 cursor-pointer"
              onClick={() => (window.location.href = "/club/tryouts")}
            >
              View Tryout Dates
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-medium px-10 h-14 border-2"
              onClick={() => (window.location.href = "/club/sky-high")}
            >
              Learn about Sky High
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
