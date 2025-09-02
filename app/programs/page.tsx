"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { 
  Trophy, Star, Users, Heart, CheckCircle, ArrowRight, 
  Target, Zap, Award, MapPin,
  TrendingUp, Sparkles, Shield, Rocket, ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SpotlightCard } from "@/components/ui/spotlight-card"

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
                      "bg-white dark:bg-gray-900",
                      "border-4 border-primary",
                      "flex items-center justify-center",
                      "shadow-2xl"
                    )}>
                      <span className="text-2xl font-black text-primary">4</span>
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 whitespace-nowrap">
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

      {/* Development Path Section */}
      <section className={cn(
        "relative py-20 lg:py-24 overflow-hidden",
        "bg-gradient-to-b from-background via-gray-50/30 to-background",
        "dark:from-background dark:via-gray-900/20 dark:to-background"
      )}>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <TrendingUp className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Structured Development Path
              </span>
            </div>
            <h2 className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold mb-4",
              "bg-gradient-to-r from-gray-900 to-gray-600",
              "dark:from-gray-100 dark:to-gray-400",
              "bg-clip-text text-transparent"
            )}>
              Your Journey to Excellence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Many athletes start at VISION and go on to compete in our more advanced club programs, 
              including WARRIORS, STORM, and VISION ELITE. By following our structured development path, 
              athletes are always being challenged, always learning, and always improving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "VISION Youth Academy", level: "Grades 3-7", color: "from-primary/20 to-yellow-500/10" },
              { name: "WARRIORS", level: "Advanced", color: "from-red-500/20 to-orange-500/10" },
              { name: "STORM", level: "Elite", color: "from-blue-500/20 to-cyan-500/10" },
              { name: "VISION ELITE", level: "University Prep", color: "from-secondary/20 to-purple-500/10" }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SpotlightCard className="p-6 text-center h-full">
                  <div className={cn(
                    "w-16 h-16 rounded-full mx-auto mb-4",
                    "bg-gradient-to-br",
                    program.color,
                    "flex items-center justify-center"
                  )}>
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{program.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{program.level}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Academy Section */}
      <section className={cn(
        "relative py-20 lg:py-28 overflow-hidden",
        "bg-gradient-to-b from-background via-primary/5 to-background",
        "dark:from-background dark:via-primary/10 dark:to-background"
      )}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808004_1px,transparent_1px),linear-gradient(to_bottom,#80808004_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                For Grades 3-7
              </span>
            </div>

            <h2 className="font-bold mb-6">
              <span className={cn(
                "block text-xl sm:text-3xl lg:text-4xl font-medium mb-2",
                "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600",
                "dark:from-gray-100 dark:via-gray-200 dark:to-gray-400",
                "bg-clip-text text-transparent",
                "leading-tight"
              )}>
                VISION YOUTH ACADEMY
              </span>
              <span className={cn(
                "block text-3xl sm:text-4xl lg:text-5xl",
                "bg-gradient-to-r from-primary via-primary/80 to-yellow-600",
                "dark:from-primary dark:via-primary dark:to-yellow-500",
                "bg-clip-text text-transparent",
                "leading-tight",
                "drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(236,186,88,0.2)]"
              )}>
                FUN. ENGAGING. CONFIDENCE-BUILDING.
              </span>
            </h2>

            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Looking for the perfect way to introduce your child to volleyball? The VISION Youth Academy 
              is designed for young athletes in grades 3-4 & 5-7. It offers a fast-paced, game-oriented 
              experience that makes learning volleyball exciting!
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                A Program That Builds Success from Day One!
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our modified training format ensures quick progress, early success, and most importantly—confidence! 
                Your child will develop fundamental volleyball skills in a fun, supportive environment led by 
                certified VISION coaches. Whether your child is brand new to the sport or looking to improve, 
                this program is the perfect way to build a strong foundation.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Why Choose VISION Youth Academy?
                </h4>
                {[
                  { icon: CheckCircle, text: "Tried & Tested Since 1999 – A proven training system" },
                  { icon: Award, text: "Certified Coaches – Trained in the exclusive VISION program" },
                  { icon: Heart, text: "Fun & Engaging – Skill-building through exciting drills" },
                  { icon: Users, text: "Encouraging Environment – Perfect for beginners" },
                  { icon: Rocket, text: "Pathway to Competitive Play – Strong foundation for future" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <item.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
                  Parent Participation Encouraged!
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We believe in the power of community and family involvement—and what better way to 
                  support your child than by joining in on the action? Parents are welcome to participate, 
                  so bring your indoor shoes and get ready to toss, throw, and play alongside your athlete!
                </p>
              </div>
            </motion.div>

            {/* Right Content - Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { 
                  icon: Trophy, 
                  title: "Canada's Longest-Running", 
                  desc: "Youth Camps since 1999" 
                },
                { 
                  icon: Zap, 
                  title: "Game-Oriented", 
                  desc: "Fast-Paced Drills" 
                },
                { 
                  icon: Users, 
                  title: "Perfect for Beginners", 
                  desc: "Grades 3-7" 
                },
                { 
                  icon: Target, 
                  title: "Focus on Fundamentals", 
                  desc: "Build strong foundation" 
                },
                { 
                  icon: Heart, 
                  title: "Positive Environment", 
                  desc: "Encouraging atmosphere" 
                },
                { 
                  icon: Star, 
                  title: "Boost Confidence", 
                  desc: "Through sport achievement" 
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SpotlightCard className="p-5 h-full">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center",
                        "bg-gradient-to-br from-primary/10 to-yellow-500/5",
                        "border border-primary/20"
                      )}>
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-sm mb-1">{item.title}</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(
              "p-8 rounded-2xl text-center",
              "bg-gradient-to-r from-primary/10 via-yellow-500/5 to-primary/10",
              "border border-primary/20"
            )}
          >
            <h3 className="text-2xl font-bold mb-3">
              Give your child the best start in volleyball with VISION Volleyball!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Spots fill fast! Secure your child&apos;s place now.
            </p>
            <Button 
              size="lg"
              className={cn(
                "group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary",
                "text-black font-semibold px-8",
                "hover:shadow-lg hover:scale-105",
                "transition-all duration-300"
              )}
            >
              <span className="relative flex items-center gap-2">
                Register for Youth Academy
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Skills Camp Section */}
      <section className={cn(
        "relative py-20 lg:py-28 overflow-hidden",
        "bg-gradient-to-b from-background via-secondary/5 to-background",
        "dark:from-background dark:via-secondary/10 dark:to-background"
      )}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808004_1px,transparent_1px),linear-gradient(to_bottom,#80808004_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8">
              <Rocket className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                For Grades 8-12
              </span>
            </div>

            <h2 className="font-bold mb-6">
              <span className={cn(
                "block text-xl sm:text-3xl lg:text-4xl font-medium mb-2",
                "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600",
                "dark:from-gray-100 dark:via-gray-200 dark:to-gray-400",
                "bg-clip-text text-transparent",
                "leading-tight"
              )}>
                VISION SKILLS CAMP
              </span>
              <span className={cn(
                "block text-3xl sm:text-4xl lg:text-5xl",
                "bg-gradient-to-r from-secondary via-blue-600 to-secondary",
                "dark:from-secondary dark:via-blue-500 dark:to-secondary",
                "bg-clip-text text-transparent",
                "leading-tight",
                "drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(45,52,142,0.3)]"
              )}>
                INTENSE. FAST-PACED. GAME-CHANGING.
              </span>
            </h2>

            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Are you ready to take your volleyball skills to the next level? The VISION Skills Camp is 
              designed for athletes in grades 8-9 & 10-12 who are looking to sharpen their techniques, 
              build confidence, and compete at a higher level!
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Right Content - Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { 
                  icon: Zap, 
                  title: "Fun and Engaging", 
                  desc: "Format that keeps athletes motivated" 
                },
                { 
                  icon: Shield, 
                  title: "Positive Atmosphere", 
                  desc: "Supportive environment" 
                },
                { 
                  icon: Target, 
                  title: "Balanced Focus", 
                  desc: "Offense and Defense" 
                },
                { 
                  icon: TrendingUp, 
                  title: "Technical Development", 
                  desc: "Skill refinement" 
                },
                { 
                  icon: Users, 
                  title: "Stay Active & Social", 
                  desc: "Build friendships" 
                },
                { 
                  icon: Award, 
                  title: "Proven Success", 
                  desc: "25 years of excellence" 
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SpotlightCard className="p-5 h-full">
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center",
                        "bg-gradient-to-br from-secondary/10 to-blue-500/5",
                        "border border-secondary/20"
                      )}>
                        <item.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-sm mb-1">{item.title}</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                A Program with 25 Years of Proven Success!
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Led by certified VISION Volleyball coaches, these camps focus on high-repetition skill 
                training and competitive game play, ensuring that every athlete gets maximum touches on 
                the ball to develop strong fundamentals and improve their overall game.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Why Choose VISION Skills Camp?
                </h4>
                {[
                  { icon: CheckCircle, text: "Designed for Beginner to Intermediate Players" },
                  { icon: Zap, text: "High-Intensity Training – Fast-paced sessions" },
                  { icon: Target, text: "Skill-Focused Development – Proper technique" },
                  { icon: Award, text: "Guidance from Expert Coaches – Hands-on coaching" },
                  { icon: Trophy, text: "Competitive Edge – Real-game scenarios" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <item.icon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
                  Parents, We&apos;re Here for You Too!
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  We understand that choosing the right volleyball program is important. That&apos;s why our 
                  instructors are always available to answer questions and provide insights into your 
                  child&apos;s development. Whether you&apos;re looking for a beginner-friendly camp or a pathway 
                  to higher levels of play, we&apos;ll help you find the perfect fit.
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mt-6 font-medium">
                Since 1999, VISION Skills Camps have helped thousands of athletes build a strong foundation 
                for volleyball success. Join us and discover the best technical training in the province!
              </p>
            </motion.div>
          </div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(
              "p-8 rounded-2xl text-center",
              "bg-gradient-to-r from-secondary/10 via-blue-500/5 to-secondary/10",
              "border border-secondary/20"
            )}
          >
            <h3 className="text-2xl font-bold mb-3">
              Register today and watch them learn, grow, and thrive on the court!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Promote mental wellness through sport!
            </p>
            <Button 
              size="lg"
              className={cn(
                "group relative bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary",
                "text-white font-semibold px-8",
                "hover:shadow-lg hover:scale-105",
                "transition-all duration-300"
              )}
            >
              <span className="relative flex items-center gap-2">
                Register for Skills Camp
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={cn(
        "relative py-20 lg:py-28 overflow-hidden",
        "bg-gradient-to-b from-background via-gray-50/30 to-background",
        "dark:from-background dark:via-gray-900/20 dark:to-background"
      )}>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Success Stories
              </span>
            </div>

            <h2 className="font-bold mb-6">
              <span className={cn(
                "block text-xl sm:text-3xl lg:text-4xl font-medium mb-2",
                "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600",
                "dark:from-gray-100 dark:via-gray-200 dark:to-gray-400",
                "bg-clip-text text-transparent",
                "leading-tight"
              )}>
                WHAT OUR COMMUNITY
              </span>
              <span className={cn(
                "block text-3xl sm:text-4xl lg:text-5xl",
                "bg-gradient-to-r from-primary via-primary/80 to-yellow-600",
                "dark:from-primary dark:via-primary dark:to-yellow-500",
                "bg-clip-text text-transparent",
                "leading-tight",
                "drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(236,186,88,0.2)]"
              )}>
                HAS TO SAY
              </span>
            </h2>
          </motion.div>

          {/* Testimonials Tabs */}
          <div className="space-y-12">
            {/* Athletes Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">What Athletes Have to Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Sam", quote: "Vision is a great club. The coaches are good, and you have lots of fun" },
                  { name: "Lauren", quote: "I think all the coaches are amazing and they know the sport and what they are doing very well" },
                  { name: "Bianca", quote: "The coaches teach us well and tell us if we need to do something differently which helps us become better athletes" },
                  { name: "Janelle", quote: "I have learned so much since I started this camp. Thank You!" },
                  { name: "Hannah", quote: "Camp was fun! I learned so much. Thank you!" },
                  { name: "Mackenzie", quote: "This was an awesome camp! I really enjoyed it and improved my skills!" },
                  { name: "Rebecca", quote: "The coaches here are very patient & understanding. You work hard but have a lot of fun" },
                  { name: "Meghan", quote: "This camp was awesome. The coaches know a ton about the sport" }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <SpotlightCard className="p-6 h-full">
                      <div className="flex items-start gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">
                            {testimonial.name[0]}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-xs text-gray-500">Athlete</p>
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Parents Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">What Parents Have to Say</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  { 
                    name: "Bob", 
                    quote: "Coach Luc's training or Vision's training program in general is very good on a technical standpoint - very good at establishing/fixing mechanics specially if player started with Vision at a younger age, good at teaching proper positioning in the court, teaching making right decisions and having court instincts, etc." 
                  },
                  { 
                    name: "Ashley", 
                    quote: "The girls are getting high quality training. Coaches take time to help all girls improve. Very pleased with the club. We love being part of Vision and are thankful for all the work this organization puts into the girls!" 
                  },
                  { 
                    name: "Greg", 
                    quote: "Great camp, Luc. My daughter had a very good time and has gotten very interested in volleyball as her primary winter sport. Thanks again" 
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <SpotlightCard className="p-6 h-full">
                      <div className="flex items-start gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-secondary">
                            {testimonial.name[0]}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-xs text-gray-500">Parent</p>
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={cn(
        "relative py-20 lg:py-28 overflow-hidden",
        "bg-gradient-to-b from-background via-background/95 to-background"
      )}>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-bold mb-6",
              "bg-gradient-to-r from-primary via-primary/80 to-yellow-600",
              "dark:from-primary dark:via-primary dark:to-yellow-500",
              "bg-clip-text text-transparent"
            )}>
              Join the VISION Family Today!
            </h2>

            <div className="space-y-4 mb-8 text-lg text-gray-600 dark:text-gray-400">
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Find a program that fits your schedule
              </p>
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Give your child the best volleyball experience
              </p>
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Watch them grow, compete, and thrive!
              </p>
            </div>

            <p className="text-xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
              If your child is ready to get active, build skills, and fall in love with volleyball, 
              VISION Volleyball Club is the perfect place to start!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className={cn(
                  "group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary",
                  "text-black font-semibold text-lg px-10 h-14",
                  "hover:shadow-lg hover:scale-105",
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
                className="group font-medium text-lg px-10 h-14 border-2 hover:bg-accent/50 transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}