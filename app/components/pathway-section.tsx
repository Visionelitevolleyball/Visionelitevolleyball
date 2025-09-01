"use client"

import React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Award, Star, Trophy, Target, Sun, Users, Medal, ArrowRight, Calendar, Clock } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export function PathwaySection() {
  const programs = [
    {
      icon: Calendar,
      title: "Year-Round Camps",
      description: "Weekly skill development for grades 3-9 with certified VISION Elite coaches",
      highlight: "Foundation Building",
      spotlightColor: "rgba(236, 186, 88, 0.18)",
      delay: 0.1
    },
    {
      icon: Sun,
      title: "Holiday Day Camps",
      description: "High-energy intensive training during summer, winter, and spring breaks",
      highlight: "Fast-Paced Learning",
      spotlightColor: "rgba(236, 186, 88, 0.18)",
      delay: 0.2
    },
    {
      icon: Users,
      title: "Premier League",
      description: "Team environment for intermediate players with tournament competition",
      highlight: "Competitive Edge",
      spotlightColor: "rgba(236, 186, 88, 0.18)",
      delay: 0.3
    },
    {
      icon: Medal,
      title: "Club Program",
      description: "Elite training for tournament-ready athletes pursuing university volleyball",
      highlight: "Elite Performance",
      spotlightColor: "rgba(236, 186, 88, 0.18)",
      delay: 0.4
    }
  ]

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-background via-background/98 to-background">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {[
              { icon: Award, label: "VEA Certified", color: "text-yellow-600" },
              { icon: Star, label: "Elite Training", color: "text-primary" },
              { icon: Trophy, label: "Championship Ready", color: "text-blue-600" },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <badge.icon className={cn("h-5 w-5", badge.color)} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
          >
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-600 dark:text-gray-400 mb-3">
              YOUR PATHWAY FROM
            </span>
            <span className="inline-flex items-center gap-3">
              <span className={cn(
                "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600",
                "dark:from-gray-100 dark:via-gray-200 dark:to-gray-400",
                "bg-clip-text text-transparent"
              )}>
                BEGINNER
              </span>
              <span className="text-gray-600 dark:text-gray-400">TO</span>
              <span className={cn(
                "bg-gradient-to-r from-primary via-primary/80 to-yellow-600",
                "dark:from-primary dark:via-primary dark:to-yellow-500",
                "bg-clip-text text-transparent"
              )}>
                UNIVERSITY ATHLETE
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            At Volleyball Fraser Valley, we provide a clear pathway for every player — from learning 
            the fundamentals to competing at the highest level. Whether you're just stepping onto 
            the court for the first time or training with dreams of university recruitment, our 
            programs are designed to guide and support athletes at every stage of their journey.
          </motion.p>
        </div>

        {/* Program Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: program.delay, ease: "easeOut" }}
            >
              <SpotlightCard 
                className="h-full p-6 lg:p-8 group cursor-pointer"
                spotlightColor={program.spotlightColor}
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center",
                      "bg-gradient-to-br from-primary/10 to-yellow-500/5",
                      "border border-primary/20 dark:border-primary/30",
                      "group-hover:scale-110 group-hover:border-primary/40",
                      "transition-all duration-300"
                    )}>
                      <program.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    
                    {/* Highlight Badge */}
                    <div className="mb-6">
                      <span className={cn(
                        "inline-flex items-center px-3 py-1 rounded-full",
                        "bg-primary/10 dark:bg-gradient-to-r dark:from-primary/10 dark:to-secondary/10",
                        "border border-primary/20",
                        "text-xs font-semibold text-primary"
                      )}>
                        {program.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-auto">
                    <span className={cn(
                      "inline-flex items-center gap-2 text-sm font-medium",
                      "text-gray-500 dark:text-gray-500 group-hover:text-primary",
                      "transition-colors duration-300"
                    )}>
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}