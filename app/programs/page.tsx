"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Trophy,
  Star,
  Users,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Award,
  Sparkles,
  Sun,
  Snowflake,
  GraduationCap,
  Heart,
  DollarSign,
  UserCheck,
  Eye,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProgramsPage() {
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

      {/* Welcome to Volleyball Fraser Valley Section - NOW AT TOP */}
      <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8.5rem)] pt-8 lg:pt-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8.5rem)] flex items-start">
          <div className="w-full">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              {/* Welcome Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex mb-6"
              >
                <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Established 2025
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              >
                <span className="block text-gray-900 dark:text-gray-100">
                  WELCOME TO
                </span>
                <span
                  className={cn(
                    "block mt-2",
                    "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600",
                    "bg-clip-text text-transparent",
                    "bg-[length:200%_100%]",
                    "animate-gradient",
                    "drop-shadow-sm dark:drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]"
                  )}
                >
                  VOLLEYBALL FRASER VALLEY
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Your destination for inclusive, community-focused volleyball
                programs designed for players of all levels
              </motion.p>
            </motion.div>

            {/* Introduction Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-12"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 lg:p-12 border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                <div className="relative">
                  <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    Volleyball Fraser Valley was established in 2025 to provide
                    an accessible and community-focused alternative to the
                    high-cost, high-stress environment often associated with
                    traditional club volleyball. Founded by{" "}
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      Luc Tremblay
                    </span>
                    , a seasoned leader in grassroots volleyball development,
                    Volleyball Fraser Valley builds on the success of the
                    Winnipeg Minor Volleyball Association (WMVA), which he
                    launched in 1999 and later rebranded as Volleyball Winnipeg
                    in 2018. With over{" "}
                    <span className="font-semibold text-primary">
                      3,200 participants
                    </span>{" "}
                    in our programs last year alone, and more than{" "}
                    <span className="font-semibold text-primary">
                      50,000 families
                    </span>{" "}
                    served since 1999, Luc is eager to bring his proven approach
                    to the Fraser Valley volleyball community.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision and Values - Modern Bento Grid */}
            <div className="grid lg:grid-cols-3 gap-4 mb-12">
              {/* Our Vision - Large Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="lg:col-span-2 group"
              >
                <div className="relative h-full rounded-3xl bg-gradient-to-br from-primary/5 to-yellow-500/5 dark:from-primary/10 dark:to-yellow-500/10 border border-primary/10 dark:border-primary/20 hover:border-primary/20 dark:hover:border-primary/30 transition-all duration-300">
                  {/* Gradient mesh background */}
                  <div className="absolute inset-0 rounded-3xl opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
                  </div>

                  <div className="relative p-8 lg:p-10">
                    {/* Header with modern icon treatment */}
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-yellow-500 rounded-2xl blur-lg opacity-20" />
                          <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-yellow-500">
                            <Eye
                              className="h-6 w-6 text-white"
                              strokeWidth={2}
                            />
                          </div>
                        </div>
                        <Badge className="bg-primary/10 text-gray-900 dark:bg-primary/20 dark:text-primary border-0 font-semibold">
                          Vision
                        </Badge>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Building Futures Through
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">
                          Volleyball Excellence
                        </span>
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        Our commitment to developing young athletes
                      </p>
                    </div>

                    {/* Vision points with better design */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        {
                          icon: Users,
                          text: "Volunteer-driven, non-profit organization",
                          metric: "100%",
                        },
                        {
                          icon: Trophy,
                          text: "High-quality youth volleyball programs",
                          metric: "3200+",
                        },
                        {
                          icon: Heart,
                          text: "Positive, inclusive environment",
                          metric: "Since 1999",
                        },
                        {
                          icon: Sparkles,
                          text: "Accessible to all skill levels",
                          metric: "All Ages",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * index }}
                          className="group/item relative p-4 rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10 group-hover/item:from-primary/20 group-hover/item:to-yellow-500/20 transition-colors">
                              <item.icon
                                className="h-4 w-4 text-gray-700 dark:text-primary"
                                strokeWidth={2}
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-baseline justify-between mb-1">
                                <p className="text-lg font-bold tabular-nums text-gray-900 dark:text-gray-100">
                                  {item.metric}
                                </p>
                              </div>
                              <p className="text-xs font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* What Sets Us Apart - Vertical Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                className="flex flex-col gap-4"
              >
                {/* Header Card */}
                <div className="rounded-3xl bg-gradient-to-br from-secondary/5 to-blue-500/5 dark:from-secondary/10 dark:to-blue-500/10 border border-secondary/10 dark:border-secondary/20 p-6">
                  <div className="inline-flex items-center gap-3 mb-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-blue-500 rounded-xl blur-lg opacity-20" />
                      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-blue-500">
                        <Star className="h-5 w-5 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <Badge className="bg-secondary/10 text-gray-900 dark:bg-secondary/20 dark:text-blue-400 border-0 font-semibold">
                      Unique
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    What Sets Us Apart
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Three pillars of excellence
                  </p>
                </div>

                {/* Feature Cards - Compact */}
                {[
                  {
                    icon: DollarSign,
                    title: "Affordable",
                    text: "Premium training at fraction of the cost",
                    gradient: "from-emerald-500 to-teal-500",
                    bg: "from-emerald-500/5 to-teal-500/5",
                    border: "border-emerald-500/10",
                  },
                  {
                    icon: Heart,
                    title: "Community",
                    text: "Local talent building strong connections",
                    gradient: "from-rose-500 to-pink-500",
                    bg: "from-rose-500/5 to-pink-500/5",
                    border: "border-rose-500/10",
                  },
                  {
                    icon: UserCheck,
                    title: "Excellence",
                    text: "Passionate volunteers, thriving athletes",
                    gradient: "from-violet-500 to-purple-500",
                    bg: "from-violet-500/5 to-purple-500/5",
                    border: "border-violet-500/10",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className={cn(
                      "relative rounded-2xl p-5 transition-all duration-200",
                      "bg-gradient-to-br",
                      item.bg,
                      "dark:from-gray-900/50 dark:to-gray-800/50",
                      "border",
                      item.border,
                      "dark:border-gray-700/50",
                      "hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20",
                      "group/card cursor-pointer"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "flex items-center justify-center w-9 h-9 rounded-xl",
                          "bg-gradient-to-br",
                          item.gradient,
                          "shadow-sm"
                        )}
                      >
                        <item.icon
                          className="h-4 w-4 text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 dark:text-gray-100 mb-0.5">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>

                    {/* Hover accent */}
                    <div
                      className={cn(
                        "absolute inset-0 rounded-2xl bg-gradient-to-br",
                        item.gradient,
                        "opacity-0 group-hover/card:opacity-5 transition-opacity duration-300"
                      )}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Our Commitment Card - Premium 10/10 Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 80,
              }}
              className="mb-12"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/[0.08] via-cyan-500/[0.06] to-indigo-500/[0.04] dark:from-blue-500/15 dark:via-cyan-500/10 dark:to-indigo-500/5 border-2 border-blue-500/20 dark:border-blue-500/30 hover:border-blue-500/30 dark:hover:border-blue-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 hover:scale-[1.01]">
                {/* Premium gradient mesh background */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent" />
                  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-blue-400/10 to-transparent blur-3xl" />
                </div>

                {/* Content with enhanced design */}
                <div className="relative p-10 lg:p-14">
                  <motion.div
                    className="flex items-center gap-4 mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {/* Premium animated icon */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                      <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20">
                        <Handshake
                          className="h-7 w-7 text-white"
                          strokeWidth={2}
                        />
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-gray-100 mb-1">
                        Our Commitment to
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient bg-[length:200%_100%]">
                          Fraser Valley
                        </span>
                      </h3>
                    </div>

                    <Badge className="hidden lg:flex px-5 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-900 dark:text-blue-300 border-0 font-bold text-sm shadow-lg">
                      <Heart className="h-4 w-4 mr-2 text-red-500" />
                      Since 2025
                    </Badge>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="space-y-6"
                  >
                    <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                      As we embark on this new chapter,{" "}
                      <span className="font-semibold text-gray-900 dark:text-gray-100">
                        Volleyball Fraser Valley
                      </span>{" "}
                      is committed to delivering the same level of program
                      excellence and community engagement that has made{" "}
                      <span className="font-semibold text-gray-900 dark:text-gray-100">
                        Volleyball Winnipeg
                      </span>{" "}
                      a cornerstone of Manitoba&apos;s volleyball scene. Whether
                      you&apos;re looking for your first introduction to the
                      sport or a place to develop skills in a supportive
                      environment, Volleyball Fraser Valley is here to help{" "}
                      <span className="text-primary font-semibold">
                        every athlete reach their full potential
                      </span>
                      .
                    </p>

                    {/* Stats row for credibility */}
                    <div className="grid grid-cols-3 gap-6 py-6">
                      {[
                        {
                          number: "10,000+",
                          label: "Happy Athletes",
                          icon: Users,
                        },
                        {
                          number: "Since 1999",
                          label: "Established",
                          icon: Trophy,
                        },
                        { number: "100%", label: "Commitment", icon: Heart },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          className="text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                        >
                          <stat.icon className="h-5 w-5 mx-auto mb-2 text-blue-500" />
                          <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            {stat.number}
                          </div>
                          <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="pt-6 border-t-2 border-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-800"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <p className="text-xl lg:text-2xl font-black leading-tight">
                        <span className="text-gray-900 dark:text-gray-100">
                          Join us as we build a
                        </span>
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 animate-gradient bg-[length:200%_100%]">
                          brighter future for youth volleyball
                        </span>
                        <span className="text-gray-900 dark:text-gray-100">
                          in Fraser Valley, one athlete, one{" "}
                        </span>
                        <span className="text-gray-900 dark:text-gray-100">
                          program, and one game at a time.
                        </span>
                      </p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Subtle animated shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:animate-shimmer pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Overview - 2 Column Grid with Flexbox */}
      <section className="relative py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Programs
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From beginner to elite, we offer comprehensive volleyball training
              for every age and skill level.
            </p>
          </div>

          {/* Programs Grid - 2 Columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* VISION Volleyball Academy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="h-full min-h-[520px] flex flex-col p-8 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:border-primary/40 dark:hover:border-primary/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-2xl mb-3">
                  VISION Volleyball Academy
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  Where young athletes build their game from the ground up. Fun,
                  fast-paced training for Grades 2–10, with every season ending
                  in a high-energy Championship Tournament.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    10-week Seasonal Programs available in Fall, Winter & Spring
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Weekly Training Sessions: 90–120 minute
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Week-end Training: Most sessions run on weekends
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Each Season ends with a Championship Tournament
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    City-Wide Program: offered in every quadrant of the city
                  </li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-semibold cursor-pointer overflow-hidden relative before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[22rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-60 mt-6"
                  onClick={() =>
                    window.open(
                      "https://visioneliteacademy.com/program-search/",
                      "_blank"
                    )
                  }
                >
                  <span className="relative">FIND A PROGRAM</span>
                </Button>
              </div>
            </motion.div>

            {/* VISION Summer Day Camps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="h-full min-h-[520px] flex flex-col p-8 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-yellow-500/5 dark:hover:shadow-yellow-500/10 hover:border-yellow-500/40 dark:hover:border-yellow-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <Sun className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-bold text-2xl mb-3">
                  VISION Summer Day Camps
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  Train together. Win together. All week long. Athletes are
                  placed on a team Monday morning and train with their coach all
                  week—building skills, strategy, and team chemistry before
                  Friday&apos;s Championship Tournament.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Full-Week Programs: Camps run Monday–Friday throughout July
                    & August
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Daily Training & Team Play: Skill development and scrimmages
                    every day
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Championship Friday: End the week with tournament play,
                    prizes, and awards
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    All Skill Levels Welcome: Beginners to advanced athletes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Fun + Development: High-energy drills keep athletes engaged
                  </li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-semibold cursor-pointer overflow-hidden relative before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[22rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-60 mt-6"
                  onClick={() =>
                    window.open(
                      "https://visioneliteacademy.com/program-search/",
                      "_blank"
                    )
                  }
                >
                  <span className="relative">FIND A PROGRAM</span>
                </Button>
              </div>
            </motion.div>

            {/* Holiday Camps & Tournaments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="h-full min-h-[520px] flex flex-col p-8 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <Snowflake className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-bold text-2xl mb-3">
                  Holiday Camps & Tournaments
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  School&apos;s out—game on! Stay active over Christmas, Spring
                  Break, and PD Days with fast-paced volleyball, fun team play,
                  and friendly competition.
                </p>
                <div className="flex-grow space-y-3">
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      2-Day Holiday Camps during Christmas & Spring Break
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Daily training sessions with team play and scrimmages
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Single-day and PD Day tournaments
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Prizes & Awards for effort and achievement
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      Grades 3-10, all skill levels welcome
                    </li>
                  </ul>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-semibold cursor-pointer overflow-hidden relative before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[22rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-60 mt-6"
                  onClick={() =>
                    window.open(
                      "https://visioneliteacademy.com/program-search/",
                      "_blank"
                    )
                  }
                >
                  <span className="relative">FIND A PROGRAM</span>
                </Button>
              </div>
            </motion.div>

            {/* VISION Premier League */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <div className="h-full min-h-[520px] flex flex-col p-8 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-secondary/5 dark:hover:shadow-secondary/10 hover:border-secondary/40 dark:hover:border-secondary/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-purple-500/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <Trophy className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold text-2xl mb-3">
                  VISION Premier League
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  Where training meets competition—the perfect program for
                  intermediate to advanced athletes ready to take their game to
                  the next level.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    8-Week Seasons: Offered in Fall, Winter & Spring
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Team Experience: Weekly practices combined with competitive
                    league matches
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Game-Day Atmosphere: Play with referees and real match flow
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Season Finale: Mini Tournament and Championship Event
                  </li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-semibold cursor-pointer overflow-hidden relative before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[22rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-60 mt-6"
                  onClick={() =>
                    window.open(
                      "https://visioneliteacademy.com/program-search/",
                      "_blank"
                    )
                  }
                >
                  <span className="relative">FIND A PROGRAM</span>
                </Button>
              </div>
            </motion.div>

            {/* VISION Volleyball Club */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group"
            >
              <div className="h-full min-h-[520px] flex flex-col p-8 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-red-500/5 dark:hover:shadow-red-500/10 hover:border-red-500/40 dark:hover:border-red-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <Award className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="font-bold text-2xl mb-3">
                  VISION Volleyball Club (VBC)
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  Club volleyball made simple — and affordable. Athletes get the
                  full team experience with quality coaching, regular practices,
                  and local tournaments, all without the heavy costs or
                  demanding travel.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Accessible Club Option: Benefits of club play without
                    overwhelming commitment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Balanced Season: Runs February–April, with practices twice a
                    week
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Tryouts in January: After traditional club season for
                    maximum opportunity
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Competitive & Supportive: Experienced coaches foster skill
                    development
                  </li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-semibold cursor-pointer overflow-hidden relative before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[22rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-60 mt-6"
                  onClick={() =>
                    window.open(
                      "https://visioneliteacademy.com/program-search/",
                      "_blank"
                    )
                  }
                >
                  <span className="relative">FIND A PROGRAM</span>
                </Button>
              </div>
            </motion.div>

            {/* Sky High Volleyball Club */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group"
            >
              <div className="h-full min-h-[520px] flex flex-col p-8 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-purple-500/5 dark:hover:shadow-purple-500/10 hover:border-purple-500/40 dark:hover:border-purple-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-2xl mb-3">
                  SKY HIGH Volleyball CLUB
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  Take your game higher with Fraser Valley&apos;s newest
                  competitive volleyball experience. Sky High offers players the
                  chance to develop their skills in a supportive yet competitive
                  environment.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Age Groups: 13U–15U divisions (expanding to 16U in the
                    future)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    High-Level Competition: Train toward Provincials and
                    Nationals
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Expert Coaching through our Skyline Coaching Academy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Player Development Pathway from skills camps to club-level
                    competition
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Open Gyms: Tryouts begin with open gym sessions
                  </li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-semibold cursor-pointer overflow-hidden relative before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[22rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-60 mt-6"
                  onClick={() =>
                    window.open(
                      "https://visioneliteacademy.com/program-search/",
                      "_blank"
                    )
                  }
                >
                  <span className="relative">REGISTER TODAY</span>
                </Button>
              </div>
            </motion.div>

            {/* Volleyball Skills Camps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group"
            >
              <div className="h-full min-h-[520px] flex flex-col p-8 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-green-500/5 dark:hover:shadow-green-500/10 hover:border-green-500/40 dark:hover:border-green-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-2xl mb-3">
                  Volleyball Skills Camps
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  Focused training. Faster results. For athletes who want to go
                  beyond general practice, our Skills Camps provide targeted
                  training to strengthen specific skills or positions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Year-Round Training: Offered throughout the season for
                    Grades 6–12
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Flexible Options: One-time specialty sessions or
                    multi-session blocks
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Skill-Specific Clinics: Serving, hitting, blocking, passing,
                    and defence
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Positional Camps: Setter, middle, outside hitter, or
                    libero-focused
                  </li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-semibold cursor-pointer overflow-hidden relative before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[22rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-60 mt-6"
                  onClick={() =>
                    window.open(
                      "https://visioneliteacademy.com/program-search/",
                      "_blank"
                    )
                  }
                >
                  <span className="relative">FIND A PROGRAM</span>
                </Button>
              </div>
            </motion.div>

            {/* Elite Volleyball Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group"
            >
              <div className="h-full min-h-[520px] flex flex-col p-8 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-purple-500/5 dark:hover:shadow-purple-500/10 hover:border-purple-500/40 dark:hover:border-purple-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-2xl mb-3">
                  Elite Volleyball Training: Grades 7–12
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  Summer Elite Camps and Fall Club Prep Camps for intermediate
                  to advanced athletes ready to raise their game. Fast-paced
                  training, advanced techniques, and team tactics—led by
                  certified club coaches.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Ideal for athletes with strong volleyball experience
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Focus on skill refinement and game strategy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Great preparation for club volleyball
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Available in the Summer & Fall
                  </li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-semibold cursor-pointer overflow-hidden relative before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[22rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-60 mt-6"
                  onClick={() =>
                    window.open(
                      "https://visioneliteacademy.com/program-search/",
                      "_blank"
                    )
                  }
                >
                  <span className="relative">FIND A PROGRAM</span>
                </Button>
              </div>
            </motion.div>

            {/* Adult Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group"
            >
              <div className="h-full min-h-[520px] flex flex-col p-8 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-gray-500/5 dark:hover:shadow-gray-500/10 hover:border-gray-500/40 dark:hover:border-gray-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-500/10 to-slate-500/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="font-bold text-2xl mb-3">Adult Programs</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  Drop in, play hard, and build community. Competitive yet
                  friendly games for men, women, and co-ed players—no team or
                  commitment required.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Drop-ins offered year-round
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    All skill levels welcome
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Future goal: full adult leagues in each category
                  </li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-semibold cursor-pointer overflow-hidden relative before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[22rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-60 mt-6"
                  onClick={() =>
                    window.open(
                      "https://visioneliteacademy.com/program-search/",
                      "_blank"
                    )
                  }
                >
                  <span className="relative">FIND A PROGRAM</span>
                </Button>
              </div>
            </motion.div>

            {/* Private Lessons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="group"
            >
              <div className="h-full min-h-[520px] flex flex-col p-8 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 flex items-center justify-center mb-4 flex-shrink-0">
                  <Star className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-2xl mb-3">Private Lessons</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  Customized Coaching. Faster Progress. Real Results. Our
                  Private Lessons are ideal for athletes who want focused,
                  individualized training to sharpen specific skills, build
                  confidence, and accelerate their development.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    1-on-1 or Small Group Options
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Custom Skill Focus (Serving, Passing, Setting, etc.)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Position-Specific Coaching
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Flexible Scheduling
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Ideal for All Ages & Levels
                  </li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-semibold cursor-pointer overflow-hidden relative before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[22rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-60 mt-6"
                  onClick={() =>
                    window.open(
                      "https://visioneliteacademy.com/program-search/",
                      "_blank"
                    )
                  }
                >
                  <span className="relative">FIND A PROGRAM</span>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Ready to join the VISION family? Find your perfect program today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className={cn(
                  "group relative bg-gradient-to-r from-primary to-yellow-500",
                  "hover:from-primary/90 hover:to-yellow-500/90",
                  "text-black font-bold text-lg px-10 h-14",
                  "hover:shadow-lg hover:scale-105",
                  "transition-all duration-300",
                  "cursor-pointer overflow-hidden",
                  "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
                  "hover:before:translate-x-[20rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                  "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
                )}
                onClick={() =>
                  window.open(
                    "https://visioneliteacademy.com/program-search/",
                    "_blank"
                  )
                }
              >
                <span className="relative flex items-center gap-2">
                  Register Today
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="font-medium text-lg px-10 h-14 border-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
