"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { posts as sharedPosts } from "./posts";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorShort?: string;
  dateDisplay: string;
  dateShort?: string;
  readTime: string;
  readTimeShort?: string;
  category: string;
  image: string;
  featured?: boolean;
  publishedAt: number;
}

const blogPosts: BlogPost[] = sharedPosts.map((p) => ({
  id: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  author: p.author,
  authorShort: p.authorShort,
  dateDisplay: p.dateDisplay,
  dateShort: p.dateShort,
  readTime: p.readTime,
  readTimeShort: p.readTimeShort,
  category: p.category,
  image: p.image,
  featured: p.featured,
  publishedAt: p.publishedAt,
}));

// Show immediate visual feedback while images stream in
const BLUR_DATA_URL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

export default function BlogPage() {
  return (
    <div className="relative">
      {/* Single Continuous Background for ENTIRE Page */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-background dark:to-gray-950" />
      </div>

      {/* Single Grid Pattern for ENTIRE Page */}
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
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
      <section className="relative pt-10 pb-4 sm:pt-12 sm:pb-6">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6 lg:mb-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex mb-3"
              >
                <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Knowledge Hub
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-3"
              >
                <span className="block text-gray-900 dark:text-gray-100">
                  INSIGHTS & STORIES FROM
                </span>
                <span
                  className={cn(
                    "block mt-2",
                    "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600",
                    "dark:from-amber-200 dark:via-yellow-400 dark:to-amber-600",
                    "bg-clip-text text-transparent",
                    "bg-[length:200%_100%]",
                    "animate-gradient",
                    "drop-shadow-sm dark:drop-shadow-[0_0_35px_rgba(236,186,88,0.5)]"
                  )}
                >
                  OUR BLOG
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Expert coaching insights, international stories, and mindset
                tools to elevate your game
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="relative pb-16 lg:pb-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid layout mirrors homepage blog section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Featured Post */}
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <article key={post.id} className="lg:col-span-2 group">
                  <Link href={`/blog/${post.id}`} className="block" prefetch>
                    <div
                      className={cn(
                        "relative h-full overflow-hidden rounded-2xl",
                        "border border-gray-200 dark:border-gray-800",
                        "transform transition-all duration-500",
                        "hover:scale-[1.01] hover:shadow-2xl",
                        "bg-white dark:bg-gray-900"
                      )}
                    >
                      <div className="grid lg:grid-cols-2 h-full">
                        {/* Image */}
                        <div className="relative h-64 lg:h-full overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={800}
                            height={600}
                            priority
                            fetchPriority="high"
                            placeholder="blur"
                            blurDataURL={BLUR_DATA_URL}
                            sizes="(min-width: 1024px) 50vw, 100vw"
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

                          {/* Meta & Read more */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                              <div className="flex items-center gap-1.5">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Calendar className="h-4 w-4" />
                                <span className="whitespace-nowrap">
                                  {post.dateDisplay}
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>

                            <span className="inline-flex items-center gap-1 text-primary font-semibold">
                              Read more
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}

            {/* Regular Posts */}
            {blogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/blog/${post.id}`} className="block" prefetch>
                    <div
                      className={cn(
                        "relative h-full overflow-hidden rounded-xl",
                        "border border-gray-200 dark:border-gray-800",
                        "transform transition-all duration-500",
                        "hover:scale-[1.02] hover:shadow-xl",
                        "bg-white dark:bg-gray-900"
                      )}
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={600}
                          height={400}
                          placeholder="blur"
                          blurDataURL={BLUR_DATA_URL}
                          sizes="(min-width: 1024px) 50vw, 100vw"
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
                            <div className="flex items-center gap-2 text-[12px] sm:text-sm text-gray-500 dark:text-gray-500">
                              <div className="flex items-center gap-1">
                                <User className="h-3.5 w-3.5" />
                                <span className="truncate max-w-[120px] sm:max-w-none">
                                  <span className="sm:hidden">
                                    {post.authorShort || post.author}
                                  </span>
                                  <span className="hidden sm:inline">
                                    {post.author}
                                  </span>
                                </span>
                              </div>
                              <span className="text-gray-400">·</span>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                <span className="whitespace-nowrap">
                                  {post.dateDisplay}
                                </span>
                              </div>
                              <span className="text-gray-400">·</span>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                <span className="whitespace-nowrap">
                                  {post.readTime}
                                </span>
                              </div>
                            </div>

                            <span className="inline-flex items-center gap-1 text-primary font-semibold">
                              Read more
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="relative inline-flex flex-col items-center gap-4 p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/10">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
                Register for our newsletter and don’t miss upcoming Blogs and
                DISCOUNTS & SPECIAL OFFERS.
              </p>
              <Button
                size="lg"
                className={cn(
                  "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
                  "text-black font-semibold text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14",
                  "hover:shadow-lg hover:scale-105",
                  "transition-all duration-300",
                  "cursor-pointer overflow-hidden",
                  "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
                  "hover:before:translate-x-[20rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                  "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
                )}
              >
                <span className="relative flex items-center gap-2">
                  REGISTER FOR OUR NEWSLETTER TODAY
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
