"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  CheckCircle,
  Users,
  Calendar,
  DollarSign,
  ArrowRight,
  Target,
} from "lucide-react";

export default function VisionVBCPage() {
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
          <div className="inline-flex mb-4">
            <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 text-emerald-900 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800">
              VISION VBC
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            <span className="block text-gray-900 dark:text-gray-100">
              AFFORDABLE CLUB VOLLEYBALL THAT
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
              DELIVERS
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The VISION VBC program gives athletes the full club experience —
            without the high cost or time commitment. January tryouts. Two
            practices weekly. Local tournaments. Built for Fraser Valley
            families.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="relative pb-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6 lg:gap-8">
          <SpotlightCard
            className="lg:col-span-2 p-8 bg-gradient-to-br from-primary/5 to-yellow-500/5 dark:from-primary/10 dark:to-yellow-500/10"
            spotlightColor="rgba(236, 186, 88, 0.15)"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-yellow-500 flex-shrink-0">
                <Calendar className="h-6 w-6 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  Program Overview
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Tryouts are held in January, after the main club season — a
                  perfect fit for athletes who missed other opportunities or
                  want a more balanced, budget-friendly path to compete. Teams
                  train twice per week and compete in local tournaments that
                  welcome both club and school teams.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Season runs February through April
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Experienced coaches with a supportive approach
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Local/regional tournaments in a welcoming environment
                  </li>
                </ul>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="p-8 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-500/10"
            spotlightColor="rgba(52, 211, 153, 0.15)"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex-shrink-0">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  Why Choose VISION VBC?
                </h4>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Accessible and budget-friendly
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Great for multi-sport athletes
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Keeps athletes developing without burnout
                  </li>
                </ul>
                <div className="mt-4">
                  <Button className="bg-gradient-to-r from-primary to-yellow-500 text-black cursor-pointer h-12">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Program Details */}
      <section className="relative pb-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 lg:gap-8">
          <SpotlightCard
            className="p-8 bg-gradient-to-br from-secondary/5 to-blue-500/5 dark:from-secondary/10 dark:to-blue-500/10"
            spotlightColor="rgba(45, 52, 142, 0.15)"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-blue-500 flex-shrink-0">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  Key Details
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Tryouts in January, after traditional club window
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Two practices per week
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Local/regional tournaments
                  </li>
                </ul>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="p-8 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10"
            spotlightColor="rgba(168, 85, 247, 0.15)"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  Who Is It For?
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Athletes seeking a low-cost, high-impact club option,
                  including newcomers to club volleyball and multi-sport
                  athletes balancing schedules.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Newcomers to club volleyball
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Multi-sport athletes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Budget-conscious families
                  </li>
                </ul>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex mb-4">
            <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 text-emerald-900 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800">
              January Tryouts
            </Badge>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Find Your Team with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">
              VISION VBC
            </span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className={cn(
                "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                "text-black font-bold text-lg px-10 h-14 cursor-pointer overflow-hidden"
              )}
              onClick={() => (window.location.href = "/club/tryouts")}
            >
              <span className="relative flex items-center gap-2">
                View Tryouts <ArrowRight className="h-5 w-5" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-medium text-lg px-10 h-14 border-2"
              onClick={() => (window.location.href = "/contact/get-in-touch")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
