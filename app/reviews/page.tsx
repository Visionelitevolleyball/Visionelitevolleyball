"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { 
  Star, Play, Quote, Trophy, Heart, Users, 
  TrendingUp, 
  MessageSquare, ThumbsUp, Video, Youtube
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { VideoPlayer } from "@/components/ui/video-thumbnail-player"

const videoReviews = [
  {
    id: 1,
    title: "Parent Review - Sarah's Journey",
    description: "How volleyball transformed my daughter's confidence",
    videoUrl: "https://www.youtube.com/embed/-jPGDhG3Vxk",
    thumbnailUrl: "https://img.youtube.com/vi/-jPGDhG3Vxk/maxresdefault.jpg",
    category: "Parent",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    title: "Athlete Success Story - Tournament Champions",
    description: "From beginner to provincial champion in 2 years",
    videoUrl: "https://www.youtube.com/embed/yMzWSsFHz3U",
    thumbnailUrl: "https://img.youtube.com/vi/yMzWSsFHz3U/maxresdefault.jpg",
    category: "Athlete",
    rating: 5,
    featured: true
  },
  {
    id: 3,
    title: "Coach Testimonial - Building Elite Athletes",
    description: "The VEA methodology that creates champions",
    videoUrl: "https://www.youtube.com/embed/amNne9b4A5s",
    thumbnailUrl: "https://img.youtube.com/vi/amNne9b4A5s/maxresdefault.jpg",
    category: "Coach",
    rating: 5
  },
  {
    id: 4,
    title: "Summer Camp Experience",
    description: "Best volleyball camp in Fraser Valley",
    videoUrl: "https://www.youtube.com/embed/dGSVfKCfS_A",
    thumbnailUrl: "https://img.youtube.com/vi/dGSVfKCfS_A/maxresdefault.jpg",
    category: "Camp",
    rating: 5
  },
  {
    id: 5,
    title: "Premier League Journey",
    description: "Competitive volleyball at its finest",
    videoUrl: "https://www.youtube.com/embed/ZkdRZpJ_H2s",
    thumbnailUrl: "https://img.youtube.com/vi/ZkdRZpJ_H2s/maxresdefault.jpg",
    category: "League",
    rating: 5
  },
  {
    id: 6,
    title: "Parent Perspective - Team Culture",
    description: "More than just volleyball skills",
    videoUrl: "https://www.youtube.com/embed/itZHeNbBmrs",
    thumbnailUrl: "https://img.youtube.com/vi/itZHeNbBmrs/maxresdefault.jpg",
    category: "Parent",
    rating: 5
  },
  {
    id: 7,
    title: "Athlete Development Program",
    description: "From recreational to elite level",
    videoUrl: "https://www.youtube.com/embed/2kNKJIizEDc",
    thumbnailUrl: "https://img.youtube.com/vi/2kNKJIizEDc/maxresdefault.jpg",
    category: "Athlete",
    rating: 5
  },
  {
    id: 8,
    title: "Coach Review - Training Excellence",
    description: "Why coaches choose Fraser Valley",
    videoUrl: "https://www.youtube.com/embed/g1KgTjYkNuU",
    thumbnailUrl: "https://img.youtube.com/vi/g1KgTjYkNuU/maxresdefault.jpg",
    category: "Coach",
    rating: 5
  },
  {
    id: 9,
    title: "Tournament Success Stories",
    description: "Championship moments and victories",
    videoUrl: "https://www.youtube.com/embed/SxipdudtzJs",
    thumbnailUrl: "https://img.youtube.com/vi/SxipdudtzJs/maxresdefault.jpg",
    category: "Tournament",
    rating: 5
  },
  {
    id: 10,
    title: "Day Camp Adventures",
    description: "Fun-filled volleyball learning experience",
    videoUrl: "https://www.youtube.com/embed/aq7Ocyl-VCM",
    thumbnailUrl: "https://img.youtube.com/vi/aq7Ocyl-VCM/maxresdefault.jpg",
    category: "Camp",
    rating: 5
  },
  {
    id: 11,
    title: "Parent Testimonial - Skills Growth",
    description: "Incredible improvement in just one season",
    videoUrl: "https://www.youtube.com/embed/VV3g2nH8JU4",
    thumbnailUrl: "https://img.youtube.com/vi/VV3g2nH8JU4/maxresdefault.jpg",
    category: "Parent",
    rating: 5
  },
  {
    id: 12,
    title: "Athlete Spotlight - University Prep",
    description: "Preparing for collegiate volleyball",
    videoUrl: "https://www.youtube.com/embed/aVf8eOhGk2s",
    thumbnailUrl: "https://img.youtube.com/vi/aVf8eOhGk2s/maxresdefault.jpg",
    category: "Athlete",
    rating: 5
  },
  {
    id: 13,
    title: "Club Team Experience",
    description: "Building lifelong friendships through volleyball",
    videoUrl: "https://www.youtube.com/embed/1C0ePzcMD9k",
    thumbnailUrl: "https://img.youtube.com/vi/1C0ePzcMD9k/maxresdefault.jpg",
    category: "Club",
    rating: 5
  },
  {
    id: 14,
    title: "Coach Insights - Training Philosophy",
    description: "Elite coaching methodology explained",
    videoUrl: "https://www.youtube.com/embed/7-a003ceRLc",
    thumbnailUrl: "https://img.youtube.com/vi/7-a003ceRLc/maxresdefault.jpg",
    category: "Coach",
    rating: 5
  }
]

const categories = ["All", "Parent", "Athlete", "Coach", "Camp", "League", "Tournament", "Club"]

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  
  const filteredVideos = selectedCategory === "All" 
    ? videoReviews 
    : videoReviews.filter(video => video.category === selectedCategory)

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

      {/* Hero Section - Reviews & Testimonials */}
      <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8.5rem)] pt-8 lg:pt-12">
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8.5rem)] flex items-center justify-center">
          <div className="w-full">
            
            {/* Main Hero Content */}
            <div className="text-center space-y-8">
              
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex"
              >
                <Badge className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 text-orange-900 dark:text-orange-200 border-orange-200 dark:border-orange-800">
                  <Star className="h-4 w-4 mr-2 fill-current" />
                  500+ Happy Athletes & Parents
                  <Star className="h-4 w-4 ml-2 fill-current" />
                </Badge>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
                  <span className="block text-gray-900 dark:text-gray-100">
                    REAL STORIES,
                  </span>
                  <span className={cn(
                    "block mt-2",
                    "bg-gradient-to-r from-primary via-yellow-500 to-primary",
                    "bg-clip-text text-transparent",
                    "bg-[length:200%_100%]",
                    "animate-gradient",
                    "drop-shadow-sm dark:drop-shadow-[0_0_35px_rgba(236,186,88,0.3)]"
                  )}>
                    REAL SUCCESS
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Hear from our athletes, parents, and coaches about their 
                  transformative volleyball journey with Fraser Valley
                </p>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
              >
                {[
                  { label: "Video Reviews", value: "14+", icon: Video },
                  { label: "5-Star Ratings", value: "98%", icon: Star },
                  { label: "Happy Families", value: "500+", icon: Heart },
                  { label: "Championships", value: "50+", icon: Trophy }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 mb-3 rounded-2xl bg-gradient-to-br from-primary/10 to-yellow-500/10 dark:from-primary/20 dark:to-yellow-500/20 group-hover:scale-110 transition-transform">
                      <stat.icon className="h-7 w-7 text-primary dark:text-yellow-400" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-6"
              >
                <Button 
                  size="lg"
                  className={cn(
                    "relative overflow-hidden",
                    "px-8 py-6 text-lg font-bold",
                    "bg-gradient-to-r from-primary to-yellow-500",
                    "hover:shadow-2xl hover:scale-105",
                    "transition-all duration-300",
                    "text-black",
                    "before:absolute before:inset-0",
                    "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
                    "before:translate-x-[-200%] hover:before:translate-x-[200%]",
                    "before:transition-transform before:duration-700"
                  )}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Share Your Story
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="relative py-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-2.5 rounded-full font-medium transition-all duration-300",
                  "border-2",
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-yellow-500 text-black border-transparent shadow-lg scale-105"
                    : "bg-white/80 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 hover:border-primary/40 hover:shadow-md"
                )}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-2 text-xs opacity-70">
                    ({videoReviews.filter(v => category === "All" || v.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Videos Grid Section */}
      <section className="relative py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              All Video Reviews
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Watch authentic testimonials from our volleyball community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
                          <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
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

      {/* YouTube Channel Section - Modern Minimalist */}
      <section className="relative py-8">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Modern Card Design */}
            <div className="relative rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200 dark:border-gray-700 p-6 lg:p-8 overflow-hidden">
              {/* Subtle accent gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5" />
              
              {/* Content Grid */}
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Left: Text Content */}
                <div className="flex items-center gap-4 flex-1">
                  {/* YouTube Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                      <Youtube className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                      Follow us on YouTube
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5 leading-tight">
                      Training tips & success stories
                    </p>
                  </div>
                </div>

                {/* Center: Stats */}
                <div className="hidden lg:flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-gray-100">2.5K</div>
                    <div className="text-xs text-gray-500">likes</div>
                  </div>
                  <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-gray-100">1.2K</div>
                    <div className="text-xs text-gray-500">subscribers</div>
                  </div>
                  <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-gray-100">150+</div>
                    <div className="text-xs text-gray-500">videos</div>
                  </div>
                </div>

                {/* Right: CTA Button */}
                <div className="flex gap-2">
                  <a href="https://www.youtube.com/@VisionEliteInternational" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 h-auto shadow-sm hover:shadow-md transition-all"
                    >
                      <Youtube className="mr-1.5 h-3.5 w-3.5" />
                      Subscribe
                    </Button>
                  </a>
                  <a href="https://www.youtube.com/@VisionEliteInternational/videos" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-medium px-3 py-2 h-auto"
                    >
                      <Play className="h-3.5 w-3.5" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Mobile Stats */}
              <div className="flex lg:hidden items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1.5 text-sm">
                  <ThumbsUp className="h-3.5 w-3.5 text-gray-500" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">2.5K</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <Users className="h-3.5 w-3.5 text-gray-500" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">1.2K</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <Video className="h-3.5 w-3.5 text-gray-500" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">150+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Text Testimonials Section */}
      <section className="relative py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              What People Are Saying
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Recent testimonials from our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Jennifer M.",
                role: "Parent",
                content: "My daughter has grown so much, not just as a player but as a person. The coaches truly care about each athlete's development.",
                rating: 5
              },
              {
                name: "Alex T.",
                role: "U16 Athlete",
                content: "Best decision I ever made was joining Fraser Valley. The training is intense but fun, and I've made friends for life!",
                rating: 5
              },
              {
                name: "Coach David",
                role: "Assistant Coach",
                content: "The VEA coaching methodology is revolutionary. I've learned so much that has made me a better coach and mentor.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-24">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-primary/20 to-yellow-500/20">
              <Heart className="h-8 w-8 text-primary" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              <span className="block text-gray-900 dark:text-gray-100">
                Start Your
              </span>
              <span className={cn(
                "block mt-2",
                "bg-gradient-to-r from-primary via-yellow-500 to-primary",
                "bg-clip-text text-transparent",
                "bg-[length:200%_100%]",
                "animate-gradient"
              )}>
                TRANSFORMATION TODAY
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Start your volleyball journey today and become part of our growing community of champions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                className={cn(
                  "relative overflow-hidden",
                  "px-8 py-6 text-lg font-bold",
                  "bg-gradient-to-r from-primary to-yellow-500",
                  "hover:shadow-2xl hover:scale-105",
                  "transition-all duration-300",
                  "text-black",
                  "before:absolute before:inset-0",
                  "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
                  "before:translate-x-[-200%] hover:before:translate-x-[200%]",
                  "before:transition-transform before:duration-700"
                )}
              >
                Register Now
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-bold border-2 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                Contact Us
                <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}