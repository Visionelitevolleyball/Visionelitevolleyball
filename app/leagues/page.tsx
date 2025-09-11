"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VideoPlayer } from "@/components/ui/video-thumbnail-player";
import SEO from "@/app/components/shared/seo";
import {
  ArrowRight,
  Calendar,
  Trophy,
  Users,
  Star,
  Clock,
  MapPin,
  Award,
  Target,
  Heart,
  Zap,
  ChevronRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";

// Video testimonial data - using same structure as reviews page
const leagueTestimonials = [
  {
    id: 1,
    title: "Premier League Success Story",
    description: "How the league helped my daughter develop confidence",
    videoUrl: "https://www.youtube.com/embed/-jPGDhG3Vxk",
    thumbnailUrl: "https://img.youtube.com/vi/-jPGDhG3Vxk/maxresdefault.jpg",
    category: "Parent",
    rating: 5,
  },
  {
    id: 2,
    title: "From Beginner to Champion",
    description: "My journey through VISION Premier League",
    videoUrl: "https://www.youtube.com/embed/uC6B_XLdu5E",
    thumbnailUrl: "https://img.youtube.com/vi/uC6B_XLdu5E/maxresdefault.jpg",
    category: "Athlete",
    rating: 5,
  },
  {
    id: 3,
    title: "Building Team Spirit",
    description: "The friendships that last beyond the court",
    videoUrl: "https://www.youtube.com/embed/1C0ePzcMD9k",
    thumbnailUrl: "https://img.youtube.com/vi/1C0ePzcMD9k/maxresdefault.jpg",
    category: "Team",
    rating: 5,
  },
];

export default function LeaguesPage() {
  const router = useRouter();
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Volleyball Fraser Valley Leagues",
    "description": "Premier volleyball leagues for intermediate to advanced athletes. 8-week seasons with weekly practices and competitive matches.",
    "sport": "Volleyball"
  };

  return (
    <div className="relative">
      <SEO 
        title="Leagues"
        description="Join Fraser Valley Premier Volleyball League - 8-week seasons with weekly practices, competitive matches, and championship tournaments. For intermediate to advanced players."
        keywords="volleyball leagues volleyball fraser valley, premier volleyball league surrey, competitive volleyball langley, youth volleyball leagues, volleyball tournaments bc"
        canonicalUrl="https://www.volleyballfraservalley.ca/leagues"
        jsonLd={jsonLd}
      />
      {/* Background Pattern - Consistent with reviews page */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-background dark:to-gray-950" />
      </div>

      {/* Animated Grid Pattern */}
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

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8.5rem)] flex justify-center overflow-hidden pt-8 lg:pt-12">
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              2026 Winter Season Registration Opens Soon
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl font-medium text-gray-600 dark:text-gray-400 mb-2">
              VISION
            </span>
            <span
              className={cn(
                "inline-block",
                "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600",
                "dark:from-amber-200 dark:via-yellow-400 dark:to-amber-600",
                "bg-clip-text text-transparent",
                "drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(236,186,88,0.35)]"
              )}
            >
              PREMIER LEAGUE
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-4"
          >
            Give Your Child a Fun, Team-Oriented Volleyball Experience!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10"
          >
            The VISION Premier League is designed to help young athletes grow,
            learn, and compete in an exciting and positive setting. If your
            child is ready to build confidence, develop game-changing skills,
            and make lifelong friends, this is the program for them!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className={cn(
                "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                "text-black font-semibold text-lg px-8 h-14",
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
                Register Now
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12"
          >
            {[
              { icon: Users, value: "13-18", label: "Age Groups" },
              {
                icon: Trophy,
                value: "90+60",
                label: "Minutes Training + Games",
              },
              { icon: Star, value: "100%", label: "Playing Time" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-primary/20 to-yellow-500/20 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-b from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pathway Section */}
      <section className="relative py-12 sm:py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-primary/10 text-gray-900 dark:text-primary border-0">
              <Sparkles className="h-4 w-4 mr-2" />
              Pathway to Excellence
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 dark:from-amber-200 dark:via-yellow-400 dark:to-amber-600 bg-clip-text text-transparent">
                A Pathway to More Competitive Volleyball!
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              VISION Premier League is a stepping stone to club volleyball,
              giving athletes the technical skills and game knowledge to advance
              to higher levels of play.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="relative py-8">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20 border-2 border-orange-200 dark:border-orange-800 p-8 lg:p-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-primary to-yellow-500 shadow-lg">
                <Calendar className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                IMPORTANT: 2025 Fall Season Update
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                This program will not be offered during the 2025 Fall Season.
              </p>
              <p className="text-lg font-semibold text-orange-700 dark:text-orange-300">
                It will be launched during the 2026 Winter Season.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Format Section */}
      <section className="relative py-20 sm:py-28">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gray-900 dark:text-gray-100">
                Program Format
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Structured training and competitive gameplay every week
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              {
                icon: Clock,
                title: "Once-a-week Training",
                description: "Games on Saturdays",
                highlight: "Weekly",
                iconGradient: "from-blue-500 to-cyan-500",
                cardGradient: "from-blue-50/80 to-cyan-50/80 dark:from-blue-950/20 dark:to-cyan-950/20",
                badgeGradient: "from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30",
                badgeText: "text-blue-900 dark:text-blue-200",
                glowColor: "from-blue-500/10 via-transparent to-cyan-500/10",
              },
              {
                icon: Trophy,
                title: "Season Championship",
                description: "Season-ending tournament",
                highlight: "Tournament",
                iconGradient: "from-purple-500 to-pink-500",
                cardGradient: "from-purple-50/80 to-pink-50/80 dark:from-purple-950/20 dark:to-pink-950/20",
                badgeGradient: "from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30",
                badgeText: "text-purple-900 dark:text-purple-200",
                glowColor: "from-purple-500/10 via-transparent to-pink-500/10",
              },
              {
                icon: Calendar,
                title: "Seasonal Camps",
                description: "8-9 weeks long",
                highlight: "8-9 Weeks",
                iconGradient: "from-green-500 to-emerald-500",
                cardGradient: "from-green-50/80 to-emerald-50/80 dark:from-green-950/20 dark:to-emerald-950/20",
                badgeGradient: "from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30",
                badgeText: "text-green-900 dark:text-green-200",
                glowColor: "from-green-500/10 via-transparent to-emerald-500/10",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={cn(
                  "relative h-full rounded-2xl p-8",
                  "bg-gradient-to-br",
                  item.cardGradient,
                  "backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/40",
                  "hover:shadow-2xl hover:-translate-y-2 hover:border-gray-300 dark:hover:border-gray-600",
                  "transition-all duration-300 overflow-hidden"
                )}>
                  {/* Decorative gradient overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-tr opacity-40",
                    item.glowColor
                  )} />
                  
                  <div className="relative z-10">
                    <div className={cn(
                      "inline-flex items-center justify-center w-16 h-16 mb-5 rounded-2xl",
                      "bg-gradient-to-br",
                      item.iconGradient,
                      "shadow-xl group-hover:scale-110 group-hover:shadow-2xl",
                      "transition-all duration-300",
                      "ring-4 ring-white/50 dark:ring-gray-800/50"
                    )}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>
                    <Badge className={cn(
                      "px-3 py-1.5 text-sm font-semibold",
                      "bg-gradient-to-r",
                      item.badgeGradient,
                      item.badgeText,
                      "border-0 shadow-sm"
                    )}>
                      {item.highlight}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Format Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-primary/5 via-yellow-50/50 to-orange-50/50 dark:from-primary/10 dark:via-yellow-950/20 dark:to-orange-950/20 backdrop-blur-md border border-primary/20 dark:border-yellow-800/30 p-8 lg:p-10 shadow-xl overflow-hidden">
              {/* Decorative gradient orb */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-yellow-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 bg-clip-text text-transparent mb-8 text-center">
                  Weekly Training & League Play
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      number: "90",
                      unit: "minutes",
                      label: "Training Session",
                      icon: Target,
                      gradient: "from-orange-400 to-amber-500",
                      bgGradient: "from-orange-100/50 to-amber-100/50 dark:from-orange-900/20 dark:to-amber-900/20",
                    },
                    {
                      number: "60",
                      unit: "minutes",
                      label: "League Play",
                      icon: Users,
                      gradient: "from-yellow-400 to-amber-500",
                      bgGradient: "from-yellow-100/50 to-amber-100/50 dark:from-yellow-900/20 dark:to-amber-900/20",
                    },
                    {
                      number: "1",
                      unit: "tournament",
                      label: "Championship",
                      icon: Trophy,
                      gradient: "from-amber-400 to-yellow-500",
                      bgGradient: "from-amber-100/50 to-yellow-100/50 dark:from-amber-900/20 dark:to-yellow-900/20",
                    },
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center group cursor-pointer relative p-4 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-gray-800/40"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={cn(
                        "inline-flex items-center justify-center w-14 h-14 mb-4 rounded-2xl",
                        "bg-gradient-to-br",
                        item.gradient,
                        "shadow-lg group-hover:shadow-xl group-hover:scale-110",
                        "transition-all duration-300",
                        "ring-2 ring-white/30 dark:ring-gray-800/30"
                      )}>
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className={cn(
                        "text-4xl font-bold mb-1",
                        "bg-gradient-to-r",
                        item.gradient,
                        "bg-clip-text text-transparent",
                        "drop-shadow-sm"
                      )}>
                        {item.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {item.unit}
                      </div>
                      <div className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-primary/10 dark:border-yellow-800/20">
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400 font-medium">
                    Note: Team rankings used to create Tournament draw.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Can Expect Section */}
      <section className="relative py-20 sm:py-28">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-primary/10 text-gray-900 dark:text-primary border-0">
              <Star className="h-4 w-4 mr-2" />
              Excellence in Every Session
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gray-900 dark:text-gray-100">
                What You Can Expect
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Skill Development Prioritized",
                description:
                  "Every session focuses on building fundamental skills and advanced techniques",
                icon: TrendingUp,
              },
              {
                title: "Games Follow Training Session",
                description:
                  "Apply what you've learned immediately in competitive gameplay",
                icon: Zap,
              },
              {
                title: "Fair-Play Environment",
                description:
                  "Every athlete gets quality playing time and opportunity to grow",
                icon: Heart,
              },
              {
                title: "Championship Intensity",
                description:
                  "Coach may adjust play time during League Championship for competitive success",
                icon: Award,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-yellow-500/20 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Teamwork Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="relative rounded-2xl bg-gradient-to-r from-primary/5 to-yellow-500/5 backdrop-blur-sm border border-primary/20 p-8 lg:p-10 text-center overflow-hidden">
              {/* Subtle accent overlay */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent mb-4">
                  Teamwork makes the dream work!
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Players learn the value of communicating, cooperation, and
                  sportsmanship, all while forming lifelong friendships and
                  teammates!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Season Information Section */}
      <section className="relative py-20 sm:py-28">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 dark:from-amber-200 dark:via-yellow-400 dark:to-amber-600 bg-clip-text text-transparent">
                2026 Season Schedule
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the season that works best for your schedule
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Winter Season Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-200 dark:border-blue-800 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    2026 Winter Season
                  </h3>
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                    January - March
                  </Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        SESSION 1: Boys & Girls Grades 7-8
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        12:00 PM - 2:30 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        SESSION 2: Boys & Girls Grades 9+
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        3:00 PM - 5:30 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Saturdays: January 17 - March 21, 2026
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Calgary French & International School (CFIS)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Championship: March 21, &ldquo;Winter Challenge&rdquo;
                    </p>
                  </div>
                </div>

                <div className="border-t border-blue-200 dark:border-blue-800 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        $432
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        13 weeks program
                      </p>
                    </div>
                    <Badge variant="secondary">Includes camp t-shirt</Badge>
                  </div>
                  <Button
                    size="lg"
                    className={cn(
                      "w-full relative overflow-hidden",
                      "bg-gradient-to-r from-blue-500 to-cyan-500",
                      "hover:from-blue-600 hover:to-cyan-600",
                      "text-white font-semibold",
                      "before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem]",
                      "hover:before:translate-x-[15rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                      "before:transition-all before:bg-white before:blur-[10px] before:opacity-50"
                    )}
                    onClick={() =>
                      window.open(
                        "https://visioneliteacademy.com/program-search/",
                        "_blank"
                      )
                    }
                  >
                    Register for Winter 2026
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Spring Season Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-800 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    2026 Spring Season
                  </h3>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                    April - June
                  </Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        SESSION 1: Boys & Girls Grades 7-8
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        12:00 PM - 2:30 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        SESSION 2: Boys & Girls Grades 9+
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        3:00 PM - 5:30 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Saturdays: April 11 - June 20, 2026
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Calgary French & International School (CFIS)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Championship: June 20, &ldquo;Spring Challenge&rdquo;
                    </p>
                  </div>
                </div>

                <div className="border-t border-green-200 dark:border-green-800 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        $360
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        12 weeks program
                      </p>
                    </div>
                    <Badge variant="secondary">Includes camp t-shirt</Badge>
                  </div>
                  <Button
                    size="lg"
                    className={cn(
                      "w-full relative overflow-hidden",
                      "bg-gradient-to-r from-green-500 to-emerald-500",
                      "hover:from-green-600 hover:to-emerald-600",
                      "text-white font-semibold",
                      "before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem]",
                      "hover:before:translate-x-[15rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                      "before:transition-all before:bg-white before:blur-[10px] before:opacity-50"
                    )}
                    onClick={() =>
                      window.open(
                        "https://visioneliteacademy.com/program-search/",
                        "_blank"
                      )
                    }
                  >
                    Register for Spring 2026
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Video Testimonials Section - Exact copy from reviews page */}
      <section className="relative py-20 sm:py-28">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-primary/10 text-gray-900 dark:text-primary border-0">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Real Success Stories
              <Star className="h-4 w-4 ml-2 fill-current" />
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gray-900 dark:text-gray-100">
                What Parents & Athletes Say
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Watch authentic testimonials from our Premier League community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {leagueTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative rounded-xl overflow-hidden bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <VideoPlayer
                    thumbnailUrl={video.thumbnailUrl}
                    videoUrl={video.videoUrl}
                    title={video.title}
                    description={video.description}
                    aspectRatio="16/9"
                    className="w-full"
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {video.category}
                      </Badge>
                      <div className="flex items-center gap-0.5">
                        {[...Array(video.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-primary transition-colors line-clamp-1">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 sm:py-28">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-r from-primary/90 to-yellow-500/90 dark:from-primary/80 dark:to-yellow-500/80 backdrop-blur-sm p-12 lg:p-16 text-center overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                The Ultimate Recreational Volleyball Experience!
              </h2>
              <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto mb-8">
                Give your child the opportunity to build confidence, develop
                game-changing skills, and unlock their full potential!
              </p>
              <p className="text-xl font-semibold text-black mb-8">
                Spots are limited - Register now and take your game to the next
                level!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className={cn(
                    "bg-black hover:bg-gray-900",
                    "text-white font-semibold text-lg px-8 h-14",
                    "hover:shadow-2xl hover:scale-105",
                    "transition-all duration-300"
                  )}
                  onClick={() =>
                    window.open(
                      "https://visioneliteacademy.com/program-search/",
                      "_blank"
                    )
                  }
                >
                  <span className="flex items-center gap-2">
                    Register Now
                    <ChevronRight className="h-5 w-5" />
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    "bg-white/90 hover:bg-white",
                    "text-black font-semibold text-lg px-8 h-14 border-2 border-black",
                    "hover:shadow-lg",
                    "transition-all duration-300"
                  )}
                  onClick={() => router.push('/contact/get-in-touch')}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
