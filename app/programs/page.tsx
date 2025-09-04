"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { 
  Trophy, Star, Users, CheckCircle, ArrowRight, 
  Target, Zap, Award, MapPin, Calendar,
  Sparkles, Shield, ChevronRight, Sun, Snowflake, GraduationCap,
  Heart, DollarSign, UserCheck, Eye, Handshake
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
          ease: "linear"
        }}
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Hero Section - BUILD CHAMPIONS */}
      <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8.5rem)] pt-8 lg:pt-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            {/* Centered Hero Content */}
            <div className="text-center space-y-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex"
              >
                <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800">
                  <Target className="h-4 w-4 mr-2" />
                  BUILD CHAMPIONS
                </Badge>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
                  <span className="block text-gray-900 dark:text-gray-100">
                    ELEVATE YOUR
                  </span>
                  <span className={cn(
                    "block mt-2",
                    "bg-gradient-to-r from-primary via-yellow-500 to-primary",
                    "bg-clip-text text-transparent",
                    "bg-[length:200%_100%]",
                    "animate-gradient",
                    "drop-shadow-sm dark:drop-shadow-[0_0_35px_rgba(236,186,88,0.3)]"
                  )}>
                    GAME
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                  From first serve to championship match. Expert coaching for every 
                  level of play.
                </p>
              </motion.div>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {[
                  { icon: Trophy, text: "Championship Training" },
                  { icon: Shield, text: "Certified Coaches" },
                  { icon: Users, text: "Small Group Sizes" },
                  { icon: CheckCircle, text: "All Skill Levels" }
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
                className="flex flex-col sm:flex-row gap-4 justify-center"
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
                  onClick={() => window.open('https://visioneliteacademy.com/program-search/', '_blank')}
                >
                  <span className="relative flex items-center gap-2">
                    View All Programs
                    <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="group font-medium text-lg px-10 h-14 border-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <MapPin className="h-5 w-5" />
                  </span>
                </Button>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Welcome to Volleyball Fraser Valley Section */}
      <section className="relative py-20 lg:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex mb-8"
            >
              <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800">
                <Sparkles className="h-4 w-4 mr-2" />
                Established 2025
              </Badge>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="block text-gray-900 dark:text-gray-100">
                WELCOME TO
              </span>
              <span className={cn(
                "block mt-2",
                "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600",
                "bg-clip-text text-transparent",
                "bg-[length:200%_100%]",
                "animate-gradient",
                "drop-shadow-sm dark:drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]"
              )}>
                VOLLEYBALL FRASER VALLEY
              </span>
            </h2>
          </motion.div>

          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 lg:p-12 border border-gray-200 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              <div className="relative">
                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Volleyball Fraser Valley was established in 2025 to provide an accessible and community-focused alternative to the high-cost, high-stress environment often associated with traditional club volleyball. Founded by <span className="font-semibold text-gray-900 dark:text-gray-100">Luc Tremblay</span>, a seasoned leader in grassroots volleyball development, Volleyball Fraser Valley builds on the success of the Winnipeg Minor Volleyball Association (WMVA), which he launched in 1999 and later rebranded as Volleyball Winnipeg in 2018. With over <span className="font-semibold text-primary">3,200 athletes</span> participating in the 2023-2024 season in Winnipeg, Luc is eager to bring his proven approach to the Fraser Valley volleyball community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision and Values Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* Our Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-full rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10 dark:from-primary/20 dark:to-yellow-500/20">
                    <Eye className="h-6 w-6 text-primary dark:text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Our Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Volleyball Fraser Valley is a volunteer-driven, non-profit organization dedicated to creating sustainable, high-quality youth volleyball programs. Our focus is on fostering a positive, inclusive, and low-pressure environment where athletes can develop their skills, grow their confidence, and fall in love with the game. By emphasizing fun, personal development, and teamwork over intense competition, we aim to make volleyball accessible to everyone—regardless of experience or skill level.
                </p>
              </div>
            </motion.div>

            {/* What Sets Us Apart Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-full rounded-2xl bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/10 to-blue-500/10 dark:from-secondary/20 dark:to-blue-500/20">
                    <Star className="h-6 w-6 text-secondary dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">What Sets Us Apart?</h3>
                </div>
                
                <div className="space-y-4">
                  {/* Affordability */}
                  <div className="flex gap-3">
                    <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        Affordability Without Compromise
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Our programs deliver top-notch training at a fraction of the cost of traditional club volleyball, ensuring more families can participate.
                      </p>
                    </div>
                  </div>

                  {/* Community */}
                  <div className="flex gap-3">
                    <Heart className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        Community First
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        We believe in the power of volleyball to bring people together. By nurturing local talent and fostering strong connections, we aim to build a vibrant volleyball community in Fraser Valley.
                      </p>
                    </div>
                  </div>

                  {/* Volunteer-Driven */}
                  <div className="flex gap-3">
                    <UserCheck className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        Volunteer-Driven Excellence
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        The dedication of our volunteers makes our programs special. Their passion and commitment create an environment where athletes can thrive both on and off the court.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Our Commitment Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
              {/* Subtle gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent" />
              
              {/* Blue accent bar at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
              
              {/* Content */}
              <div className="relative p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20">
                    <Handshake className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Our Commitment to Fraser Valley</h3>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  As we embark on this new chapter, Volleyball Fraser Valley is committed to delivering the same level of program excellence and community engagement that has made Volleyball Winnipeg a cornerstone of Manitoba&apos;s volleyball scene. Whether you&apos;re looking for your first introduction to the sport or a place to develop skills in a supportive environment, Volleyball Fraser Valley is here to help every athlete reach their full potential.
                </p>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Join us as we build a brighter future for youth volleyball in Fraser Valley, one athlete, one program, and one game at a time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Programs Overview - Clean Grid */}
      <section className="relative py-16 lg:py-20">
        
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
              onClick={() => window.open('https://visioneliteacademy.com/program-search/', '_blank')}
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
              onClick={() => window.open('https://visioneliteacademy.com/program-search/', '_blank')}
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
              onClick={() => window.open('https://visioneliteacademy.com/program-search/', '_blank')}
            >
              <div className="h-full p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:bg-white dark:hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-4">
                  <Snowflake className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-bold text-xl mb-2">Holiday Camps</h3>
                <p className="text-sm text-gray-500 mb-3">School Breaks</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  School&apos;s out—game on! Stay active during Christmas, Spring Break, and PD Days.
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
              onClick={() => window.open('https://visioneliteacademy.com/program-search/', '_blank')}
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
              onClick={() => window.open('https://visioneliteacademy.com/program-search/', '_blank')}
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
              onClick={() => window.open('https://visioneliteacademy.com/program-search/', '_blank')}
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
              onClick={() => window.open('https://visioneliteacademy.com/program-search/', '_blank')}
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
              onClick={() => window.open('https://visioneliteacademy.com/program-search/', '_blank')}
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
              onClick={() => window.open('https://visioneliteacademy.com/program-search/', '_blank')}
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
                    Men&apos;s, Women&apos;s, and Co-ed
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
                onClick={() => window.open('https://visioneliteacademy.com/program-search/', '_blank')}
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
    </div>
  )
}