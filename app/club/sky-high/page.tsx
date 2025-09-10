"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import SEO from "@/app/components/shared/seo";
import {
  Users,
  Trophy,
  Target,
  Heart,
  CheckCircle,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export default function SkyHighPage() {

  return (
    <div className="relative">
      <SEO 
        title="Sky High Volleyball Club"
        description="Join Sky High Volleyball Club in Fraser Valley. Competitive volleyball for ages 13U-15U. Expert coaching, provincial championships, and player development pathway."
        keywords="sky high volleyball, fraser valley volleyball club, competitive volleyball surrey, youth volleyball club, 13U volleyball, 15U volleyball"
        canonicalUrl="https://www.fraservalleyvolleyball.ca/club/sky-high"
      />
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
            <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 text-purple-900 dark:text-purple-200 border-purple-200 dark:border-purple-800">
              Sky High VBC
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            <span className="block text-gray-900 dark:text-gray-100">
              RAISING THE GAME IN
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
              FRASER VALLEY
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calgary → Fraser Valley: With the support of Volleyball Fraser
            Valley, Sky High VBC is a new competitive pathway built on proven
            systems — empowering athletes to train hard, compete, and grow.
          </p>
        </div>
      </section>


      {/* Program Introduction */}
      <section className="relative pb-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 border border-gray-200 dark:border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-2">Introduction</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Volleyball Fraser Valley is assisting in the launch of &quot;Sky
                High Volleyball Club&quot;, a new club for athletes in the
                Fraser Valley area. We’ve recognized several athletes in our
                camps who can transition to more competitive training, and many
                parents and coaches have asked for club options.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Our Head Coach has trained athletes at this level since 1999. To
                assess interest in offering club teams within the Volleyball
                Alberta system, we are hosting Open Gyms in August and
                September.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                  Evaluate athletes, coaches, and volunteers
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Meet
                  families and share our training philosophy
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Build
                  teams in multiple age categories
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl p-8 bg-gradient-to-br from-primary/5 to-yellow-500/5 dark:from-primary/10 dark:to-yellow-500/10 border border-primary/10 dark:border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Coaching Excellence</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              All Sky High coaches complete the VISION Elite Coaching Academy
              Course and receive mentorship from Program Head Coach Luc Tremblay
              (30+ years, 27 Provincial medals, National Champion).
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                Consistent, high-quality instruction
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                Age-appropriate training and systems of play
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                Athlete-first environment and positive culture
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Sky High */}
      <section className="relative pb-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">
                Sky High VBC
              </span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Trophy,
                title: "Elite Coaching Standards",
                text: "Structured, proven curriculum across all teams.",
              },
              {
                icon: Heart,
                title: "Mentorship from Luc Tremblay",
                text: "Guidance from one of Canada’s most accomplished youth coaches.",
              },
              {
                icon: Target,
                title: "Athlete Development Focus",
                text: "Skill-building, game IQ, and mental toughness.",
              },
              {
                icon: Users,
                title: "Community Culture",
                text: "Teamwork and sportsmanship as much as winning.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10 flex items-center justify-center mb-3">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-1">{f.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Model */}
      <section className="relative pb-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 rounded-2xl p-8 bg-white/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-2">
              Coaching: A Challenging and Crucial Role
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-2">The Practice Coach</h4>
                <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Master seasonal training principles
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Teach fundamentals with precision
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Introduce advanced technical training
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Implement systems of play
                  </li>
                </ul>
              </div>
              <div className="rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-2">The Bench Coach</h4>
                <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Communicate under pressure
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Manage emotions in competition
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Prepare athletes mentally
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Foster unity and focus
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-8 bg-gradient-to-br from-secondary/5 to-purple-500/5 border border-secondary/10">
            <h4 className="text-xl font-semibold mb-2">Our Coaching Model</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              After 25 years, we learned to separate roles for the best athlete
              experience:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                Instructors focus on long-term development
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Bench
                coaches lead competition and mindset
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Neutral
                support ensures athlete advocacy
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Learn to Compete */}
      <section className="relative pb-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <SpotlightCard
            className="p-8 bg-gradient-to-br from-primary/5 to-yellow-500/5 dark:from-primary/10 dark:to-yellow-500/10"
            spotlightColor="rgba(236, 186, 88, 0.2)"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-yellow-500 flex-shrink-0">
                <Trophy className="h-6 w-6 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  Tournament Play
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  All club teams are tournament teams. Season kicks off in
                  March, with events most weekends through May. Unlike
                  recreational leagues, tournaments bring high-pressure,
                  winner-crowned days.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    High-intensity competition experience
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Mental and emotional preparation required
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Weekend tournaments March through May
                  </li>
                </ul>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="p-8 bg-gradient-to-br from-secondary/5 to-blue-500/5 dark:from-secondary/10 dark:to-blue-500/10"
            spotlightColor="rgba(45, 52, 142, 0.15)"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-blue-500 flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  Why Club Volleyball?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Club is the primary feeder to university and college programs.
                  It provides training, exposure, and high-level competition
                  needed to stand out.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Direct pathway to university programs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Elite training and skill development
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    College recruitment exposure
                  </li>
                </ul>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Athlete Selection & Experience */}
      <section className="relative pb-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="rounded-2xl p-8 bg-gradient-to-br from-primary/5 to-yellow-500/5 border border-primary/10">
            <h4 className="text-xl font-semibold mb-2">Athlete Selection</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                Tryouts/ID camps held in early December
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                Fundamentals, game IQ, and attitude are key
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Coaches
                notice hustle and sportsmanship
              </li>
            </ul>
          </div>
          <div className="rounded-2xl p-8 bg-gradient-to-br from-secondary/5 to-blue-500/5 border border-secondary/10">
            <h4 className="text-xl font-semibold mb-2">The Club Experience</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" />{" "}
                Discipline, teamwork, and resilience
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Build
                confidence and lasting friendships
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Grow
                athletically and academically
              </li>
            </ul>
          </div>
          <div className="rounded-2xl p-8 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/10">
            <h4 className="text-xl font-semibold mb-2">The Key to Success</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Personal
                commitment and consistency
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Strong
                work ethic
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5" /> Quality
                coaching and environment
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Program Information Redirect */}
      <section className="relative pb-16">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpotlightCard
            className="p-10 bg-gradient-to-br from-primary/5 via-yellow-500/5 to-orange-500/5 dark:from-primary/10 dark:via-yellow-500/10 dark:to-orange-500/10 border-2 border-primary/20"
            spotlightColor="rgba(236, 186, 88, 0.15)"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary to-yellow-500 shadow-lg shadow-primary/25">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                  Ready to Take the Next Step?
                </span>
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Explore our comprehensive volleyball programs designed to develop athletes at every level. 
                From beginners to elite competitors, find the perfect program for your journey.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="flex flex-col items-center">
                  <Trophy className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Elite Training</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Team Development</span>
                </div>
                <div className="flex flex-col items-center">
                  <Target className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Skills Mastery</span>
                </div>
              </div>
              
              <Button
                size="lg"
                onClick={() => window.open("https://visioneliteacademy.com/program-search", "_blank")}
                className={cn(
                  "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                  "text-black font-bold text-lg px-12 h-14 shadow-lg hover:shadow-2xl hover:scale-105",
                  "transition-all duration-300 cursor-pointer overflow-hidden",
                  "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
                  "hover:before:translate-x-[25rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                  "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
                )}
              >
                <span className="relative flex items-center gap-2">
                  View All Programs <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </SpotlightCard>
        </div>
      </section>
    </div>
  );
}
