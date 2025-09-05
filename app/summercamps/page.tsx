"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Trophy,
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  Target,
  Clock,
  Sun,
  Shield,
  Info,
  UserCheck,
  Gift,
  GraduationCap,
  Zap,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SummerCampsPage() {
  return (
    <div className="relative">
      {/* Single Continuous Background for ENTIRE Page */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-background dark:to-gray-950" />
      </div>

      {/* Single Grid Pattern for ENTIRE Page */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
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

      {/* Hero Section - Dynamic Summer Camps Landing */}
      <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8.5rem)] pt-8 lg:pt-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8.5rem)] flex items-start">
          <div className="w-full">
            {/* Main Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex mb-6"
              >
                <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 text-orange-900 dark:text-orange-200 border-orange-200 dark:border-orange-800">
                  <Sun className="h-4 w-4 mr-2" />
                  August 2026 Camp Registration Open!
                </Badge>
              </motion.div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="block text-gray-900 dark:text-gray-100">
                  VISION
                </span>
                <span
                  className={cn(
                    "block mt-2",
                    "bg-gradient-to-r from-yellow-500 via-orange-500 to-primary",
                    "bg-clip-text text-transparent",
                    "bg-[length:200%_100%]",
                    "animate-gradient",
                    "drop-shadow-sm dark:drop-shadow-[0_0_35px_rgba(251,146,60,0.3)]"
                  )}
                >
                  SUMMER CAMPS
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
                Train together, play hard, make friends! Each camp ends with a
                Championship Tournament
              </p>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {[
                  { icon: Trophy, text: "Championship Friday" },
                  { icon: Shield, text: "Certified Coaches" },
                  { icon: Users, text: "Team Training" },
                  { icon: Gift, text: "Prizes & T-Shirts" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                  >
                    <feature.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              >
                <Button
                  size="lg"
                  className={cn(
                    "group relative",
                    "bg-gradient-to-r from-primary to-yellow-500",
                    "hover:from-primary/90 hover:to-yellow-500/90",
                    "text-black font-bold text-lg px-10 h-14",
                    "shadow-lg hover:shadow-2xl hover:scale-105",
                    "transition-all duration-300",
                    "cursor-pointer overflow-hidden",
                    "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
                    "hover:before:translate-x-[25rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                    "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
                  )}
                >
                  <span className="relative flex items-center gap-2">
                    Register Today
                    <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="group font-medium text-lg px-10 h-14 border-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  View Schedule
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12"
              >
                {[
                  { number: "Aug 17-21", label: "2026 Camp" },
                  { number: "9am-4pm", label: "Full Day" },
                  { number: "Grades 6-9+", label: "All Levels" },
                  { number: "400", label: "Full Week", prefix: "$" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={cn(
                      "text-center",
                      index === 3 && "min-w-[100px] sm:min-w-0" // Fix $400 alignment on mobile
                    )}
                  >
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                      {stat.prefix ? (
                        <span className="relative inline-block">
                          <span className="absolute right-full pr-0.5 sm:pr-1">
                            $
                          </span>
                          <span>{stat.number}</span>
                        </span>
                      ) : (
                        stat.number
                      )}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Philosophy & Details Section */}
      <section className="relative py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              More Than a Game: Growth, Friendship, and Fun!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Building Skills, Confidence, and Team Spirit! Athletes learn from
              experienced coaches, improve their game, and develop teamwork and
              leadership skills that last a lifetime.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Team Experience",
                description:
                  "Play on a team - Teams formed on Monday mornings. Train with your assigned coach all week.",
                color: "from-blue-500/10 to-cyan-500/10",
              },
              {
                icon: Trophy,
                title: "Championship Friday",
                description:
                  "Friday afternoon Championship Tournament with awards and prizes. Parents welcome to watch!",
                color: "from-yellow-500/10 to-orange-500/10",
              },
              {
                icon: Target,
                title: "Skills Development",
                description:
                  "Some of the best technical development in the province. Learn team tactics & systems of play.",
                color: "from-green-500/10 to-emerald-500/10",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 hover:border-primary/40 dark:hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4",
                      feature.color
                    )}
                  >
                    <feature.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Program Format Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {/* Weekly Day Camps Format */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-yellow-500/5 dark:from-primary/10 dark:to-yellow-500/10 border border-primary/20 hover:border-primary/40 dark:hover:border-primary/40 hover:shadow-lg hover:shadow-yellow-500/5 dark:hover:shadow-yellow-500/10 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  Program Format
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Available weekly during July-August</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Beginners to Intermediate level</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Ages 12-14 & 15+</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Open to boys & girls</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Daily Schedule */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-secondary/5 to-purple-500/5 dark:from-secondary/10 dark:to-purple-500/10 border border-secondary/20 hover:border-secondary/40 dark:hover:border-secondary/40 hover:shadow-lg hover:shadow-purple-500/5 dark:hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Clock className="h-8 w-8 text-secondary" />
                  Daily Schedule
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>9:00am - 4:00pm Daily</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>12-1:00pm Lunch break</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>10:30am & 2:30pm: 15 min breaks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Venues open at 8:30am</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Coaches stay until all athletes picked up</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Camp Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 text-white"
          >
            <h3 className="text-3xl font-bold mb-6">
              Vision Summer Day Camp Philosophy
            </h3>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
              {[
                {
                  title: "Attendance Matters",
                  desc: "Roll call at the start of each session",
                },
                {
                  title: "Arrive Ready",
                  desc: "Come 5-10 minutes early in proper volleyball attire",
                },
                {
                  title: "Every Athlete Counts",
                  desc: "Skill development for all experience levels",
                },
                {
                  title: "Positive Coaching",
                  desc: "Motivate, encourage, and support every athlete",
                },
                {
                  title: "High-Repetition Training",
                  desc: "Fast-paced drills for consistency",
                },
                {
                  title: "Stay Hydrated & Energized",
                  desc: "Water and snack breaks as needed",
                },
                {
                  title: "Open Communication",
                  desc: "Athletes encouraged to speak with coaches",
                },
                {
                  title: "Prizes & Giveaways",
                  desc: "Win prizes and awesome door gifts!",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <span className="text-gray-200 block">
                      <span className="font-semibold">{item.title}</span>
                      <span className="hidden sm:inline"> – </span>
                      <span className="block sm:inline text-sm sm:text-base text-gray-300">
                        {item.desc}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Components Section */}
      <section className="relative py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              What You Can Expect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Every training session consists of the following components
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                number: "01",
                title: "Warm-up Games",
                description:
                  "Designed to ensure athletes get to meet each other in an inviting and competitive environment",
                icon: Heart,
                gradient: "from-pink-500 to-red-500",
              },
              {
                number: "02",
                title: "Skill Development",
                description:
                  "Drills with a focus on high-repetition and technical correction",
                icon: Zap,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                number: "03",
                title: "Team Play",
                description:
                  "Every session concludes with team drills designed to teach systems of play",
                icon: Users,
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="h-full p-8 rounded-2xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 hover:border-primary/40 dark:hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                  <div
                    className={cn(
                      "absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg",
                      step.gradient
                    )}
                  >
                    {step.number}
                  </div>
                  <step.icon className="h-10 w-10 text-gray-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Register Section */}
      <section className="relative py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              How to Register
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Simple online registration process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: UserCheck,
                title: "Online Registration",
                description:
                  "All registrations are online - Simply click our Registration button",
              },
              {
                icon: Calendar,
                title: "No Deadline",
                description:
                  "Space is limited - registration closes once camp is filled",
              },
              {
                icon: Users,
                title: "Family Discount",
                description:
                  "25% discount on additional children when registered together",
              },
              {
                icon: Shield,
                title: "Refund Policy",
                description: "Complete refund policy available on our website",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 hover:border-primary/40 dark:hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-yellow-500/10 to-orange-500/10 dark:from-gray-900 dark:to-gray-800 border-2 border-primary/20 dark:border-primary/30"
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Maximize your Potential this Summer!
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether preparing for the next school season or just playing for
              fun, our summer camps help athletes refine their game and take it
              to the next level!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={cn(
                  "group relative",
                  "bg-gradient-to-r from-primary to-yellow-500",
                  "hover:from-primary/90 hover:to-yellow-500/90",
                  "text-black font-bold text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14",
                  "shadow-lg hover:shadow-2xl hover:scale-105",
                  "transition-all duration-300",
                  "cursor-pointer overflow-hidden",
                  "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
                  "hover:before:translate-x-[25rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                  "before:transition-all before:bg-white before:blur-[10px] before:opacity-60",
                  "whitespace-nowrap"
                )}
              >
                <span className="relative flex items-center gap-2">
                  Register for Summer Camps
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="font-medium text-lg px-10 h-14 border-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
              >
                <Info className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
