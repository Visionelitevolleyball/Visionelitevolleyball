"use client";

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
  featured?: boolean;
}

const videos: Video[] = [
  {
    id: "EyBjO9vtx6Y",
    title: "Spiking Approach Fundamentals",
    description: "Perfect your spike approach with Calgary training tips",
    thumbnailUrl: "https://img.youtube.com/vi/EyBjO9vtx6Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/EyBjO9vtx6Y?autoplay=1",
    featured: true,
  },
  {
    id: "_TXebu9kw2g",
    title: "How to Set a Volleyball",
    description: "Step-by-step guide for beginners",
    thumbnailUrl: "https://img.youtube.com/vi/_TXebu9kw2g/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/_TXebu9kw2g?autoplay=1",
  },
  {
    id: "HEmDi7PEMfQ",
    title: "Mastering Tempo & Passing",
    description: "Learn different types of volleyball passes",
    thumbnailUrl: "https://img.youtube.com/vi/HEmDi7PEMfQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/HEmDi7PEMfQ?autoplay=1",
  },
  {
    id: "9OxARfjC97A",
    title: "How to Win in Volleyball",
    description: "Championship strategies from our elite athletes",
    thumbnailUrl: "https://img.youtube.com/vi/9OxARfjC97A/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/9OxARfjC97A?autoplay=1",
  },
  {
    id: "m2w5t5QrHqw",
    title: "Volleyball Blocking Tips",
    description: "Where to look when blocking at the net",
    thumbnailUrl: "https://img.youtube.com/vi/m2w5t5QrHqw/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/m2w5t5QrHqw?autoplay=1",
  },
  {
    id: "mV_7dN6KbeQ",
    title: "Blocking Footwork Mastery",
    description: "Perfect your block step-by-step",
    thumbnailUrl: "https://img.youtube.com/vi/mV_7dN6KbeQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/mV_7dN6KbeQ?autoplay=1",
  },
];

export function VideosSection() {
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
      </div>

      {/* Video Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video, index) => (
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
              {/* Card Container */}
              <div className={cn(
                "bg-white dark:bg-gray-900/50 rounded-xl overflow-hidden",
                "border border-gray-200 dark:border-gray-800",
                "transition-all duration-300",
                "hover:shadow-xl hover:scale-[1.02]",
                video.featured && "border-primary/30 dark:border-primary/20"
              )}>
                {/* Featured Badge */}
                {video.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-primary to-yellow-500 text-black text-xs font-semibold shadow-md">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <VideoPlayer
                    thumbnailUrl={video.thumbnailUrl}
                    videoUrl={video.videoUrl}
                    title={video.title}
                    description={video.description}
                    className="!rounded-none !shadow-none"
                  />
                </div>

                {/* Text Content */}
                <div className="p-4 space-y-2">
                  <h3 className={cn(
                    "font-semibold text-base line-clamp-2",
                    "text-gray-900 dark:text-gray-100",
                    "group-hover:text-primary transition-colors duration-200"
                  )}>
                    {video.title}
                  </h3>
                  <p className={cn(
                    "text-sm line-clamp-2",
                    "text-gray-600 dark:text-gray-400"
                  )}>
                    {video.description}
                  </p>
                </div>
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
            onClick={() => window.open("https://www.youtube.com/@VisionEliteInternational/videos", "_blank")}
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
