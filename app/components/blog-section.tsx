"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { BookOpen, Calendar, Clock, ArrowRight, User, TrendingUp } from "lucide-react"
import Image from "next/image"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  authorShort?: string
  date: string
  dateShort?: string
  readTime: string
  readTimeShort?: string
  category: string
  image: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Mastering the Perfect Serve: A Complete Guide",
    excerpt: "Learn the biomechanics behind a powerful serve and discover drills that will transform your game from the service line.",
    author: "Luc Tremblay",
    authorShort: "Luc T.",
    date: "Dec 28, 2024",
    dateShort: "Dec 28",
    readTime: "5 min read",
    readTimeShort: "5 min",
    category: "Technique",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2000&auto=format&fit=crop",
    featured: true
  },
  {
    id: "2",
    title: "Building Mental Toughness in Young Athletes",
    excerpt: "Discover proven strategies to help your child develop resilience, confidence, and a winning mindset on and off the court.",
    author: "Luc Tremblay",
    authorShort: "Luc T.",
    date: "Dec 25, 2024",
    dateShort: "Dec 25",
    readTime: "7 min read",
    readTimeShort: "7 min",
    category: "Psychology",
    image: "https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Nutrition Tips for Peak Volleyball Performance",
    excerpt: "Fuel your game with expert nutrition advice tailored specifically for volleyball players at every level.",
    author: "Luc Tremblay",
    authorShort: "Luc T.",
    date: "Dec 22, 2024",
    dateShort: "Dec 22",
    readTime: "6 min read",
    readTimeShort: "6 min",
    category: "Health",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "From Rec League to University: A Parent's Journey",
    excerpt: "Follow one parent's inspiring story of supporting their daughter's volleyball dreams from grassroots to collegiate success.",
    author: "Luc Tremblay",
    authorShort: "Luc T.",
    date: "Dec 20, 2024",
    dateShort: "Dec 20",
    readTime: "8 min read",
    readTimeShort: "8 min",
    category: "Stories",
    image: "https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=2000&auto=format&fit=crop"
  }
]

export function BlogSection() {
  return (
    <section className={cn(
      "relative pt-12 pb-20 sm:pt-16 sm:pb-28 md:pt-20 md:pb-32 overflow-hidden",
      "bg-gradient-to-b from-background via-gray-50/20 to-background",
      "dark:from-background dark:via-gray-900/10 dark:to-background"
    )}>
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[350px] h-[350px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Header Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Knowledge Hub
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-bold mb-6"
        >
          <span className={cn(
            "block text-xl sm:text-3xl lg:text-4xl font-medium mb-1",
            "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600",
            "dark:from-gray-100 dark:via-gray-200 dark:to-gray-400",
            "bg-clip-text text-transparent",
            "leading-tight"
          )}>
            INSIGHTS & STORIES FROM
          </span>
          <span className={cn(
            "block text-4xl sm:text-5xl lg:text-6xl",
            "bg-gradient-to-r from-primary via-primary/80 to-yellow-600",
            "dark:from-primary dark:via-primary dark:to-yellow-500",
            "bg-clip-text text-transparent",
            "leading-tight",
            "drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(236,186,88,0.2)]"
          )}>
            OUR BLOG
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400"
        >
          Expert coaching tips, athlete stories, and the latest volleyball insights 
          to elevate your game and inspire your journey.
        </motion.p>
      </div>

      {/* Blog Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured Post - Spans 2 columns on large screens */}
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="lg:col-span-2 group cursor-pointer"
            >
              <div className={cn(
                "relative h-full overflow-hidden rounded-2xl",
                "border border-gray-200 dark:border-gray-800",
                "transform transition-all duration-500",
                "hover:scale-[1.01] hover:shadow-2xl",
                "bg-white dark:bg-gray-900"
              )}>
                <div className="grid lg:grid-cols-2 h-full">
                  {/* Image */}
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-yellow-500 text-black text-xs font-bold shadow-lg">
                        Featured Article
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Category */}
                      <div className="inline-flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Meta - Responsive */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <User className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="max-w-[100px] sm:max-w-none truncate">
                            <span className="sm:hidden">{post.authorShort || post.author}</span>
                            <span className="hidden sm:inline">{post.author}</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="whitespace-nowrap">
                            <span className="sm:hidden">{post.dateShort || post.date}</span>
                            <span className="hidden sm:inline">{post.date}</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="whitespace-nowrap">
                            <span className="sm:hidden">{post.readTimeShort || post.readTime}</span>
                            <span className="hidden sm:inline">{post.readTime}</span>
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Regular Posts */}
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={cn(
                "relative h-full overflow-hidden rounded-xl",
                "border border-gray-200 dark:border-gray-800",
                "transform transition-all duration-500",
                "hover:scale-[1.02] hover:shadow-xl",
                "bg-white dark:bg-gray-900"
              )}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta - Compact single line */}
                  <div className="pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-gray-500 dark:text-gray-500">
                        {/* Author - abbreviated on mobile */}
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          <User className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
                          <span className="max-w-[80px] sm:max-w-none truncate">
                            <span className="sm:hidden">{post.authorShort || post.author.split(' ')[0]}</span>
                            <span className="hidden sm:inline">{post.author}</span>
                          </span>
                        </div>
                        
                        {/* Separator */}
                        <span className="text-gray-400">·</span>
                        
                        {/* Date - short on mobile */}
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          <Calendar className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
                          <span className="whitespace-nowrap">
                            <span className="sm:hidden">{post.dateShort || post.date}</span>
                            <span className="hidden sm:inline">{post.date}</span>
                          </span>
                        </div>
                        
                        {/* Separator */}
                        <span className="text-gray-400">·</span>
                        
                        {/* Read Time - short on mobile */}
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          <Clock className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
                          <span className="whitespace-nowrap">
                            <span className="sm:hidden">{post.readTimeShort || post.readTime}</span>
                            <span className="hidden sm:inline">{post.readTime}</span>
                          </span>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <a
            href="/blog"
            className={cn(
              "group relative inline-flex items-center gap-2 px-8 py-4",
              "bg-gradient-to-r from-primary to-yellow-500 text-black",
              "rounded-full font-semibold text-lg",
              "transform transition-all duration-300",
              "hover:scale-105 hover:shadow-xl",
              "dark:from-primary dark:to-yellow-500"
            )}
          >
            <span>View All Blog Posts</span>
            <TrendingUp className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            
            {/* Animated shine effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}