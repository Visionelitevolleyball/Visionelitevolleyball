"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { 
  Trophy, Star, Users, Heart, CheckCircle, ArrowRight, 
  Target, Zap, Award, MapPin, TrendingUp, Calendar, 
  Sparkles, Shield, Rocket, ChevronRight, Sun, Snowflake, GraduationCap
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section - Immersive Program Journey */}
      <section className="relative min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8.5rem)] overflow-hidden">
        {/* Diagonal Split Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-background dark:to-gray-950" />
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(236, 186, 88)" stopOpacity="0.03" />
                <stop offset="100%" stopColor="rgb(45, 52, 142)" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <polygon points="0,0 100,0 100,100" fill="url(#diagonalGradient)" />
          </svg>
        </div>

        {/* Animated Background Pattern */}
        <motion.div 
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8.5rem)] flex items-center justify-center">
          <div className="w-full">
            
            {/* Main Content - Properly Aligned */}
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center lg:items-start">
              
              {/* Left Content - Bold Typography */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-5"
              >
                {/* Main Title */}
                <div className="space-y-0">
                  <motion.h1
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.85] tracking-tight"
                  >
                    <span className="block text-gray-900 dark:text-gray-100">
                      BUILD
                    </span>
                    <span className={cn(
                      "block",
                      "bg-gradient-to-r from-primary via-yellow-500 to-primary",
                      "bg-clip-text text-transparent",
                      "bg-[length:200%_100%]",
                      "animate-gradient",
                      "drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(236,186,88,0.3)]"
                    )}>
                      CHAMPIONS
                    </span>
                    <span className="block text-gray-900 dark:text-gray-100">
                      FROM DAY ONE
                    </span>
                  </motion.h1>
                </div>

                {/* Subtitle */}
                <div className="space-y-2">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed"
                  >
                    Where passion meets excellence. Transform raw talent into refined skill 
                    through our proven development pathway.
                  </motion.p>
                  
                  {/* Trust Indicators */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex items-center gap-1.5">
                      <Shield className="h-4 w-4 text-primary/60" />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Certified Coaches</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-primary/60" />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Small Groups</span>
                    </div>
                  </motion.div>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button 
                    size="lg"
                    className={cn(
                      "group relative",
                      "bg-gradient-to-r from-primary to-yellow-500",
                      "hover:from-primary/90 hover:to-yellow-500/90",
                      "text-black font-bold text-lg px-8 h-14",
                      "shadow-lg hover:shadow-xl hover:scale-105",
                      "transition-all duration-300",
                      "cursor-pointer overflow-hidden",
                      "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
                      "hover:before:translate-x-[20rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                      "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
                    )}
                  >
                    <span className="relative flex items-center gap-2">
                      Explore Programs
                      <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="group font-medium text-lg px-8 h-14 border-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                    Find a Location
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Content - Interactive Program Journey */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Program Path Visualization */}
                <div className="relative">
                  {/* Program Cards */}
                  <div className="grid grid-cols-2 gap-4 relative">
                    {[
                      { 
                        name: "Youth Academy",
                        age: "Grades 3-7",
                        icon: Sparkles,
                        color: "from-primary/20 to-yellow-500/10",
                        borderColor: "border-primary/30",
                        delay: 0.8
                      },
                      { 
                        name: "WARRIORS",
                        age: "Grades 8-12",
                        icon: Zap,
                        color: "from-blue-500/20 to-cyan-500/10",
                        borderColor: "border-blue-500/30",
                        delay: 0.9
                      },
                      { 
                        name: "STORM",
                        age: "Advanced",
                        icon: Award,
                        color: "from-red-500/20 to-orange-500/10",
                        borderColor: "border-red-500/30",
                        delay: 1.0
                      },
                      { 
                        name: "VISION ELITE",
                        age: "University Prep",
                        icon: Trophy,
                        color: "from-secondary/20 to-purple-500/10",
                        borderColor: "border-secondary/30",
                        delay: 1.1
                      }
                    ].map((program, index) => (
                      <div
                        key={index}
                        className="group cursor-pointer"
                      >
                        <div className={cn(
                          "relative p-6 rounded-2xl",
                          "bg-white dark:bg-gray-900",
                          "border-2 transition-all duration-300",
                          program.borderColor,
                          "hover:shadow-xl hover:border-opacity-60",
                          "overflow-hidden"
                        )}>
                          {/* Background Gradient */}
                          <div className={cn(
                            "absolute inset-0 bg-gradient-to-br opacity-50",
                            program.color,
                            "group-hover:opacity-100 transition-opacity duration-300"
                          )} />
                          
                          {/* Content */}
                          <div className="relative">
                            <program.icon className={cn(
                              "h-8 w-8 mb-3",
                              index === 0 ? "text-primary" : 
                              index === 1 ? "text-blue-500" :
                              index === 2 ? "text-red-500" : "text-secondary"
                            )} />
                            <h3 className="font-bold text-lg mb-1">{program.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{program.age}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Center Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className={cn(
                      "w-20 h-20 rounded-full",
                      "bg-gradient-to-br from-gray-50/90 to-white/90 dark:from-gray-900 dark:to-gray-800",
                      "backdrop-blur-sm",
                      "border-4 border-primary",
                      "flex items-center justify-center",
                      "shadow-2xl shadow-primary/20"
                    )}>
                      <span className="text-2xl font-black text-primary">4</span>
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-700 dark:text-white whitespace-nowrap">
                      Programs
                    </span>
                  </div>
                </div>

                {/* Bottom CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className={cn(
                    "mt-6 p-5 rounded-2xl",
                    "bg-gradient-to-r from-gray-900 to-gray-800",
                    "dark:from-gray-800 dark:to-gray-900",
                    "text-white relative overflow-hidden"
                  )}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] animate-shimmer" />
                  
                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Starting at any age</p>
                      <p className="text-lg font-bold">Find Your Perfect Program</p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-400" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview - Clean Grid */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        {/* Background matching hero section */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-background dark:to-gray-950" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" preserveAspectRatio="none">
            <defs>
              <linearGradient id="diagonalGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(45, 52, 142)" stopOpacity="0.05" />
                <stop offset="100%" stopColor="rgb(236, 186, 88)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <polygon points="0,50 100,0 100,100 0,100" fill="url(#diagonalGradient2)" />
          </svg>
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
              backgroundSize: "40px 40px"
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Programs
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From beginner to elite, we offer comprehensive volleyball training for every age and skill level.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Youth Academy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:border-primary/40 dark:hover:border-primary/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-yellow-500/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">VISION Youth Academy</h3>
                <p className="text-sm text-gray-500 mb-3">Grades 2-10</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Fun, fast-paced training where young athletes build their game from the ground up.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    9-week programs (Fall, Winter, Spring)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    90-120 minute weekly sessions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Championship Tournament finale
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Summer Day Camps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-yellow-500/5 dark:hover:shadow-yellow-500/10 hover:border-yellow-500/40 dark:hover:border-yellow-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/10 flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">Summer Day Camps</h3>
                <p className="text-sm text-gray-500 mb-3">All Summer Long</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Train together, win together. Athletes train with their team all week.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Full-week camps all summer
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Daily training & team strategy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Championship Friday with prizes
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Holiday Camps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-4">
                  <Snowflake className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-bold text-xl mb-2">Holiday Camps</h3>
                <p className="text-sm text-gray-500 mb-3">School Breaks</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  School's out—game on! Stay active during Christmas, Spring Break, and PD Days.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Single or multi-day options
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Grades 3-10, all skill levels
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Prizes & team-building activities
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Premier League */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-secondary/5 dark:hover:shadow-secondary/10 hover:border-secondary/40 dark:hover:border-secondary/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/10 to-purple-500/10 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold text-xl mb-2">VISION Premier League</h3>
                <p className="text-sm text-gray-500 mb-3">Intermediate to Advanced</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Where training meets competition. Join a team for a full season of competitive volleyball.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    8-week seasons (Fall, Winter, Spring)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Weekly practices + matches
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Championship in final week
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Club Volleyball */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-red-500/5 dark:hover:shadow-red-500/10 hover:border-red-500/40 dark:hover:border-red-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="font-bold text-xl mb-2">VISION Volleyball Club</h3>
                <p className="text-sm text-gray-500 mb-3">February - April</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Affordable club volleyball that delivers. All benefits of club—without the high cost.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Tryouts in January
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Two practices weekly
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Local tournaments included
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Elite Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-purple-500/5 dark:hover:shadow-purple-500/10 hover:border-purple-500/40 dark:hover:border-purple-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">Elite Training</h3>
                <p className="text-sm text-gray-500 mb-3">Grades 7-12</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Summer Elite & Fall Club Prep for athletes ready to raise their game.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Advanced techniques & tactics
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Skill refinement & strategy
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Club volleyball preparation
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Additional Programs */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Skills Camps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-green-500/5 dark:hover:shadow-green-500/10 hover:border-green-500/40 dark:hover:border-green-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">Skills Camps</h3>
                <p className="text-sm text-gray-500 mb-3">Year-round, Grades 6-12</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Targeted training for faster progress. Sharpen specific positions or skills.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Position-specific training
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Serving, hitting, passing camps
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    One-time or multi-session blocks
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Private Lessons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/10 to-blue-500/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">Private Lessons</h3>
                <p className="text-sm text-gray-500 mb-3">All Ages & Levels</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Customized coaching for faster progress. 1-on-1 or small group options.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Personalized skill focus
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Position-specific coaching
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Flexible scheduling
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Adult Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-gray-500/5 dark:hover:shadow-gray-500/10 hover:border-gray-500/40 dark:hover:border-gray-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-500/10 to-slate-500/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">Adult Programs</h3>
                <p className="text-sm text-gray-500 mb-3">Drop-in Available</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Drop in, play hard, build community. Competitive yet friendly games.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    Men's, Women's, and Co-ed
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    All skill levels welcome
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    No team commitment required
                  </li>
                </ul>
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
                  "text-black font-bold text-lg px-8 h-14",
                  "hover:shadow-lg hover:scale-105",
                  "transition-all duration-300",
                  "cursor-pointer overflow-hidden",
                  "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
                  "hover:before:translate-x-[20rem] before:duration-[0.8s] before:-skew-x-[10deg]",
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
                className="font-medium text-lg px-8 h-14 border-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}