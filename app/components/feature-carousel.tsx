"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronRight, Play, Users } from "lucide-react"

const features = [
  {
    title: "Don't Just Play –",
    highlight: "Train like a Hero",
    description: "Transform your game with elite training methods and personalized coaching that brings out the champion in you.",
    image: "/image1-1.jpg",
    buttonText: "Start Your Transformation",
    buttonIcon: <Play className="h-5 w-5" />,
    href: "/programs"
  },
  {
    title: "Beware of the",
    highlight: "Daycare Program",
    description: "Our programs go beyond basic supervision. We focus on skill development, strategy, and building confident athletes.",
    image: "/image1-2.png",
    buttonText: "Explore Programs",
    buttonIcon: <ChevronRight className="h-5 w-5" />,
    href: "/programs"
  },
  {
    title: "Train with",
    highlight: "Experienced Coaches",
    description: "Learn from VEA certified coaches who have years of competitive experience and a passion for developing young talent.",
    image: "/image1-3.jpg",
    buttonText: "Meet Our Coaches",
    buttonIcon: <Users className="h-5 w-5" />,
    href: "/programs/coaches"
  }
]

export function FeatureCarousel() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoPlayInterval = 5000

  useEffect(() => {
    if (isPaused) return
    
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, isPaused])

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index)
    setProgress(0)
  }

  return (
    <section 
      className="relative py-20 lg:py-24 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Our Training Philosophy
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-gray-100 dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
              Excellence in Every
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-yellow-600 dark:from-primary dark:via-primary dark:to-yellow-500 bg-clip-text text-transparent">
              Training Session
            </span>
          </motion.h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Feature Steps */}
          <div className="order-2 lg:order-1 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={cn(
                  "group relative flex gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-300",
                  index === currentFeature 
                    ? "bg-gradient-to-r from-primary/15 to-primary/5 border-2 border-primary/30 shadow-lg dark:from-primary/10 dark:to-primary/5 dark:border-primary/20" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
                )}
                onClick={() => handleFeatureClick(index)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Indicator */}
                <div className="relative">
                  <motion.div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                      index === currentFeature
                        ? "bg-primary border-primary text-black scale-110 shadow-lg shadow-primary/30"
                        : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                    )}
                    animate={{ scale: index === currentFeature ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-lg font-bold">{index + 1}</span>
                  </motion.div>
                  
                  {/* Progress Ring for Active */}
                  {index === currentFeature && (
                    <svg className="absolute inset-0 w-12 h-12 -rotate-90">
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-primary/20"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 22}`}
                        strokeDashoffset={`${2 * Math.PI * 22 * (1 - progress / 100)}`}
                        className="text-primary transition-all duration-100"
                      />
                    </svg>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                    <span className={cn(
                      "transition-colors duration-300",
                      index === currentFeature ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-500"
                    )}>
                      {feature.title}
                    </span>{" "}
                    <span className={cn(
                      "transition-colors duration-300",
                      index === currentFeature 
                        ? "text-primary font-bold" 
                        : "text-gray-500 dark:text-gray-500"
                    )}>
                      {feature.highlight}
                    </span>
                  </h3>
                  <p className={cn(
                    "text-sm lg:text-base transition-all duration-300",
                    index === currentFeature 
                      ? "text-gray-700 dark:text-gray-300" 
                      : "text-gray-400 dark:text-gray-600"
                  )}>
                    {feature.description}
                  </p>
                  
                  {/* Button for Active Feature */}
                  <AnimatePresence>
                    {index === currentFeature && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <Button
                          className={cn(
                            "group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary",
                            "text-black font-semibold",
                            "hover:shadow-lg hover:scale-105",
                            "transition-all duration-300",
                            "cursor-pointer overflow-hidden",
                            "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
                            "hover:before:translate-x-[15rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                            "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
                          )}
                        >
                          <span className="relative flex items-center gap-2">
                            {feature.buttonIcon}
                            {feature.buttonText}
                          </span>
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Image Carousel */}
          <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-900">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <motion.div
                        className="relative w-full h-full"
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 8, ease: "easeOut" }}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.highlight}
                          fill
                          className="object-cover"
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </motion.div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            {/* Manual Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentFeature 
                      ? "w-8 bg-primary" 
                      : "bg-white/50 hover:bg-white/70"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Carousel Container */}
          <div className="relative">
            {/* Active Feature Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipeThreshold = 50
                  if (offset.x > swipeThreshold && currentFeature > 0) {
                    handleFeatureClick(currentFeature - 1)
                  } else if (offset.x < -swipeThreshold && currentFeature < features.length - 1) {
                    handleFeatureClick(currentFeature + 1)
                  }
                }}
              >
                {/* Image Section */}
                <div className="relative h-[180px] sm:h-[220px]">
                  <Image
                    src={features[currentFeature].image}
                    alt={features[currentFeature].highlight}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
                  
                  {/* Step Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-primary text-black rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {currentFeature + 1}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    <span className="text-gray-900 dark:text-gray-100">
                      {features[currentFeature].title}
                    </span>{" "}
                    <span className="text-primary">
                      {features[currentFeature].highlight}
                    </span>
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {features[currentFeature].description}
                  </p>

                  <Button
                    className={cn(
                      "w-full group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary",
                      "text-black font-semibold",
                      "hover:shadow-lg hover:scale-105",
                      "transition-all duration-300",
                      "cursor-pointer overflow-hidden",
                      "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
                      "hover:before:translate-x-[20rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                      "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
                    )}
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      {features[currentFeature].buttonIcon}
                      {features[currentFeature].buttonText}
                    </span>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Progress Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleFeatureClick(index)}
                  className="relative"
                  aria-label={`Go to feature ${index + 1}`}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    index === currentFeature
                      ? "bg-primary border-primary text-black scale-110"
                      : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                  )}>
                    {index + 1}
                  </div>
                  
                  {/* Progress Ring for Active */}
                  {index === currentFeature && (
                    <svg className="absolute inset-0 w-12 h-12 -rotate-90">
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-primary/20"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="22"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 22}`}
                        strokeDashoffset={`${2 * Math.PI * 22 * (1 - progress / 100)}`}
                        className="text-primary transition-all duration-100"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Swipe Hint */}
            <motion.p 
              className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Swipe or tap numbers to explore
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}