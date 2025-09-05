"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { VideoPlayer } from "@/components/ui/video-thumbnail-player";
import { motion } from "motion/react";
import { PlayCircle, Sparkles, TrendingUp } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category?: string;
  featured?: boolean;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Serving Fundamentals",
    description:
      "Master the perfect serve technique with our step-by-step guide",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2000&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/ZU8rhOI8h7o?autoplay=1",
    category: "Technique",
    featured: true,
  },
  {
    id: "2",
    title: "Spike Training Drills",
    description: "Develop explosive power and timing for devastating spikes",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?q=80&w=2000&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/ZU8rhOI8h7o?autoplay=1",
    category: "Training",
  },
  {
    id: "3",
    title: "Defensive Positioning",
    description: "Learn court awareness and defensive strategies from the pros",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=2000&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/ZU8rhOI8h7o?autoplay=1",
    category: "Strategy",
  },
  {
    id: "4",
    title: "Setting Techniques",
    description: "Perfect your setting skills with professional coaching tips",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2000&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/ZU8rhOI8h7o?autoplay=1",
    category: "Technique",
  },
  {
    id: "5",
    title: "Team Communication",
    description: "Build chemistry and improve on-court communication",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=2000&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/ZU8rhOI8h7o?autoplay=1",
    category: "Teamwork",
  },
  {
    id: "6",
    title: "Conditioning Workout",
    description: "Volleyball-specific fitness training for peak performance",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1585314540237-408b0456e2ed?q=80&w=2000&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/ZU8rhOI8h7o?autoplay=1",
    category: "Fitness",
  },
];

export function VideosSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter videos based on selected category
  const filteredVideos =
    selectedCategory === "All"
      ? videos
      : videos.filter((video) => video.category === selectedCategory);

  return (
    <section
      className={cn(
        "relative pt-12 pb-20 sm:pt-16 sm:pb-28 md:pt-20 md:pb-32 overflow-hidden",
        "bg-gradient-to-b from-background via-gray-50/30 to-background",
        "dark:from-background dark:via-gray-900/20 dark:to-background"
      )}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8"
        >
          <PlayCircle className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Training Resources
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-bold mb-6"
        >
          <span
            className={cn(
              "block text-xl sm:text-3xl lg:text-4xl font-medium mb-1",
              "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600",
              "dark:from-gray-100 dark:via-gray-200 dark:to-gray-400",
              "bg-clip-text text-transparent",
              "leading-tight"
            )}
          >
            WATCH & LEARN FROM
          </span>
          <span
            className={cn(
              "block text-4xl sm:text-5xl lg:text-6xl",
              "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600",
              "dark:from-amber-200 dark:via-yellow-400 dark:to-amber-600",
              "bg-clip-text text-transparent",
              "leading-tight",
              "drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(236,186,88,0.3)]"
            )}
          >
            LATEST VIDEOS
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400"
        >
          Access exclusive training content, technique breakdowns, and match
          analysis from our professional coaching staff.
        </motion.p>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {[
            "All",
            "Technique",
            "Training",
            "Strategy",
            "Fitness",
            "Teamwork",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                "border border-gray-200 dark:border-gray-700",
                "hover:bg-primary hover:text-black hover:border-primary",
                "dark:hover:bg-primary dark:hover:text-black dark:hover:border-primary",
                category === selectedCategory &&
                  "bg-primary text-black border-primary"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Video Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="relative group"
            >
              {/* Featured Badge */}
              {video.featured && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-yellow-500 text-black text-xs font-semibold shadow-lg">
                    <Sparkles className="h-3 w-3" />
                    Featured
                  </div>
                </div>
              )}

              {/* Category Badge */}
              {video.category && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                    {video.category}
                  </div>
                </div>
              )}

              <div
                className={cn(
                  "relative overflow-hidden rounded-xl",
                  "transform transition-all duration-300",
                  "hover:scale-[1.02] hover:shadow-2xl",
                  "ring-1 ring-gray-200 dark:ring-gray-800",
                  video.featured &&
                    "ring-2 ring-primary/50 dark:ring-primary/30"
                )}
              >
                <VideoPlayer
                  thumbnailUrl={video.thumbnailUrl}
                  videoUrl={video.videoUrl}
                  title={video.title}
                  description={video.description}
                  className="!shadow-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <button
            className={cn(
              "group relative inline-flex items-center gap-2 px-8 py-4",
              "bg-gradient-to-r from-primary to-yellow-500",
              "text-black rounded-full font-semibold text-lg",
              "transform transition-all duration-300",
              "hover:scale-105 hover:shadow-xl",
              "hover:from-primary/90 hover:to-yellow-500/90",
              "cursor-pointer overflow-hidden",
              "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
              "hover:before:translate-x-[20rem] before:duration-[0.8s] before:-skew-x-[10deg]",
              "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
            )}
          >
            <span>View All Videos</span>
            <TrendingUp className="h-5 w-5 transition-transform group-hover:translate-x-1" />

            {/* Animated shine effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
