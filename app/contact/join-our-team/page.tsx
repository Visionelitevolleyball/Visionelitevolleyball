"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, GraduationCap, ArrowRight } from "lucide-react";

const openings = [
  {
    id: "coach-dev",
    title: "Technical Skills Coach (Youth)",
    location: "Fraser Valley, BC",
    type: "Part-time",
    summary:
      "Lead high-energy sessions for Grades 3–10 focusing on fundamentals and confidence.",
  },
  {
    id: "league-coach",
    title: "Premier League Head Coach",
    location: "Fraser Valley, BC",
    type: "Seasonal",
    summary:
      "Coach intermediate athletes in a team environment with weekly training & league play.",
  },
];

export default function JoinOurTeamPage() {
  return (
    <div className="relative">
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
              Careers
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            <span className="block text-gray-900 dark:text-gray-100">
              JOIN OUR
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
              COACHING TEAM
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Be part of a positive, high-energy environment that develops
            athletes—and coaches.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative pb-6">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              icon: Heart,
              title: "Culture of Care",
              text: "Supportive team with shared commitment to youth development.",
            },
            {
              icon: Users,
              title: "Coaching Community",
              text: "Mentorship and growth through VEA Coaching Academy.",
            },
            {
              icon: GraduationCap,
              title: "Level Up",
              text: "Access to resources and progressive coaching methods.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700"
            >
              <f.icon className="h-6 w-6 text-primary mb-3" />
              <p className="font-semibold mb-1">{f.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Openings */}
      <section className="relative pb-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-4">Current Openings</h3>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {openings.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {job.type} · {job.location}
                </p>
                <h4 className="text-xl font-bold mb-2">{job.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {job.summary}
                </p>
                <Button
                  className={cn(
                    "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                    "text-black font-semibold px-6 h-12 transition-all"
                  )}
                >
                  <span className="relative flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
