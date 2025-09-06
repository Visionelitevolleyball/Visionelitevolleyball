"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  Trophy,
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  Info,
  Target,
  Heart,
  Sparkles,
} from "lucide-react";

export default function ClubOverviewPage() {
  return (
    <div className="relative">
      {/* Page Background & Grid Pattern */}
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
            <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800">
              Club Volleyball
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            <span className="block text-gray-900 dark:text-gray-100">
              WELCOME TO
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
              CLUB VOLLEYBALL — FRASER VALLEY
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A complete guide to elite youth volleyball in Fraser Valley: what
            club volleyball is, who it’s for, and the paths available through
            Sky High VBC and VISION VBC.
          </p>
        </div>
      </section>

      {/* Intro Cards: Sky High & VISION */}
      <section className="relative pb-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 lg:gap-8">
          <SpotlightCard
            className="p-8 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 dark:from-purple-500/10 dark:to-indigo-500/10"
            spotlightColor="rgba(168, 85, 247, 0.15)"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex-shrink-0">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    SKY HIGH Volleyball Club
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    An Alberta Volleyball–affiliated program aiming to field multiple
                    teams for the 2025–26 season. Built for competitive athletes
                    seeking a pathway to Provincials and Nationals.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                <Badge className="bg-purple-100 dark:bg-purple-900/20 text-purple-900 dark:text-purple-200 border-purple-200 dark:border-purple-800">
                  Open Gyms Available
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/20 text-purple-900 dark:text-purple-200 border-purple-200 dark:border-purple-800">
                  Competitive Teams
                </Badge>
              </div>
              <Button
                className={cn(
                  "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                  "text-black font-semibold h-12 px-6 cursor-pointer overflow-hidden"
                )}
                onClick={() => (window.location.href = "/club/sky-high")}
              >
                <span className="relative flex items-center gap-2">
                  Explore Sky High <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="p-8 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-500/10"
            spotlightColor="rgba(52, 211, 153, 0.15)"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">VISION VBC</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    A regional, affordable program not affiliated with VA. Tryouts are
                    held in January after the main club window, with teams training
                    twice per week and competing in local events.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                <Badge className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800">
                  Budget-Friendly
                </Badge>
                <Badge className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800">
                  January Tryouts
                </Badge>
              </div>
              <Button
                className={cn(
                  "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                  "text-black font-semibold h-12 px-6 cursor-pointer overflow-hidden"
                )}
                onClick={() => (window.location.href = "/club/vision")}
              >
                <span className="relative flex items-center gap-2">
                  Explore VISION VBC <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* What is Club Volleyball? */}
      <section className="relative pb-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-yellow-500/5 dark:from-primary/10 dark:to-yellow-500/10 border border-primary/10 dark:border-primary/20 p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center">
                <Info className="h-5 w-5 text-white" />
              </div>
              <Badge className="bg-primary/10 text-gray-900 dark:bg-primary/20 dark:text-primary border-0 font-semibold">
                Overview
              </Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              What is
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600">
                Club Volleyball?
              </span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              In volleyball, “club volleyball” refers to elite-level teams
              focused on training athletes to compete at the highest levels.
              It’s a development pathway introduced by Volleyball Canada for
              athletes who aspire to play at the college or university level.
            </p>
          </div>
        </div>
      </section>

      {/* Is Club Right For You? */}
      <section className="relative pb-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6 lg:gap-8">
          <SpotlightCard
            className="lg:col-span-2 p-8 bg-gradient-to-br from-secondary/5 to-blue-500/5 dark:from-secondary/10 dark:to-blue-500/10"
            spotlightColor="rgba(45, 52, 142, 0.15)"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-blue-500 flex-shrink-0">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  Is Club Volleyball Right for You?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Club volleyball is a demanding, competitive environment designed
                  for athletes who love the game. The journey from tryouts to
                  Nationals includes ups and downs—reduced playing time,
                  disagreements, and intense competition. Athletes who embrace these
                  challenges build resilience, confidence, and maturity.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> 
                    Growth through challenge and commitment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Opportunity to elevate skills and team IQ
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Pathway to post-secondary volleyball
                  </li>
                </ul>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="p-8 bg-gradient-to-br from-rose-500/5 to-pink-500/5 dark:from-rose-500/10 dark:to-pink-500/10"
            spotlightColor="rgba(244, 63, 94, 0.15)"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex-shrink-0">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Parents Matter</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Parents shape the experience—encouragement and a growth mindset
                  often define whether the season is a positive journey or a
                  frustrating one.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Cost & Commitment */}
      <section className="relative pb-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <SpotlightCard
            className="p-8 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-500/10"
            spotlightColor="rgba(52, 211, 153, 0.15)"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex-shrink-0">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  The Cost of Club Volleyball
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Club volleyball is a significant financial investment. Typical
                  costs include coach honorariums, administration and overhead, team
                  merchandise, and tournament travel.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-white/60 dark:bg-gray-900/40 border border-emerald-200/30 dark:border-emerald-700/30 p-3 text-gray-700 dark:text-gray-300">
                    Coach honorariums
                  </div>
                  <div className="rounded-lg bg-white/60 dark:bg-gray-900/40 border border-emerald-200/30 dark:border-emerald-700/30 p-3 text-gray-700 dark:text-gray-300">
                    Club administration
                  </div>
                  <div className="rounded-lg bg-white/60 dark:bg-gray-900/40 border border-emerald-200/30 dark:border-emerald-700/30 p-3 text-gray-700 dark:text-gray-300">
                    Team merchandise
                  </div>
                  <div className="rounded-lg bg-white/60 dark:bg-gray-900/40 border border-emerald-200/30 dark:border-emerald-700/30 p-3 text-gray-700 dark:text-gray-300">
                    Travel & tournaments
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
          <SpotlightCard
            className="p-8 bg-gradient-to-br from-primary/5 to-yellow-500/5 dark:from-primary/10 dark:to-yellow-500/10"
            spotlightColor="rgba(236, 186, 88, 0.15)"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-yellow-500 flex-shrink-0">
                <Calendar className="h-6 w-6 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  Competitive Environment & Tryouts
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Tryouts begin in December. Tournament season runs March through
                  May, with events nearly every weekend. Every game matters. If
                  you're preparing for club, understand the high-performance,
                  tournament-driven nature of the season.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Selection Process */}
      <section className="relative pb-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpotlightCard
            className="p-8 bg-gradient-to-br from-orange-500/5 to-amber-500/5 dark:from-orange-500/10 dark:to-amber-500/10"
            spotlightColor="rgba(251, 146, 60, 0.15)"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex-shrink-0">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  Selection Process & Tryouts
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Coaches assess technical skills, game IQ, work ethic, and
                  attitude. Height and reach may matter for elite teams, but
                  fundamentals and a positive mindset are key. Certification
                  requirements typically include Technical One for 14U, Technical
                  Two for 16U, and Level Two for 18U coaches.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Passing, serving, hitting fundamentals
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Positioning, systems, and strategy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Effort, coachability, and team-first attitude
                  </li>
                </ul>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* CTA Row */}
      <section className="relative pb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-primary/5 to-yellow-500/5 border border-primary/10">
              <h4 className="font-bold text-lg mb-1">Explore Sky High VBC</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Competitive VA-affiliated program
              </p>
              <Button
                className="bg-gradient-to-r from-primary to-yellow-500 text-black cursor-pointer"
                onClick={() => (window.location.href = "/club/sky-high")}
              >
                Learn More
              </Button>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-br from-secondary/5 to-purple-500/5 border border-secondary/10">
              <h4 className="font-bold text-lg mb-1">Explore VISION VBC</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Affordable regional program
              </p>
              <Button
                className="bg-gradient-to-r from-primary to-yellow-500 text-black cursor-pointer"
                onClick={() => (window.location.href = "/club/vision")}
              >
                Learn More
              </Button>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/10">
              <h4 className="font-bold text-lg mb-1">Tryouts & Open Gyms</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Key dates and process
              </p>
              <Button
                className="bg-gradient-to-r from-primary to-yellow-500 text-black cursor-pointer"
                onClick={() => (window.location.href = "/club/tryouts")}
              >
                View Dates
              </Button>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button
              size="lg"
              className={cn(
                "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                "text-black font-bold text-lg px-10 h-14 cursor-pointer overflow-hidden"
              )}
              onClick={() => (window.location.href = "/contact/get-in-touch")}
            >
              <span className="relative flex items-center gap-2">
                Contact Us <ArrowRight className="h-5 w-5" />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
