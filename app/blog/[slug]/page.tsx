"use client";

import { use } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../posts";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  // Find next blog
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const nextPost = posts[currentIndex + 1] || posts[0]; // Loop to first if at end

  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-background dark:to-gray-950" />
      </div>
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

      {/* Header/hero */}
      <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-8">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary group"
            >
              <ArrowLeft className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-0.5" />{" "}
              Back to Blog
            </Link>
          </div>

          <div className="mb-4">
            <Badge className="bg-primary/10 text-primary border-0">
              {post.category}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            <span
              className={cn(
                "block",
                "bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600 dark:from-gray-100 dark:via-gray-200 dark:to-gray-400",
                "bg-clip-text text-transparent"
              )}
            >
              {post.title}
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="inline-flex items-center gap-1">
              <User className="h-4 w-4" /> {post.author}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {post.dateDisplay}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="relative pb-10">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="relative h-56 sm:h-80 md:h-[420px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-16 lg:pb-20">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-neutral dark:prose-invert prose-lg max-w-3xl mx-auto prose-headings:scroll-mt-24 prose-headings:font-black prose-p:leading-relaxed prose-li:leading-relaxed">
            {post.content}
          </article>

          {/* Next Blog Section */}
          <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">
                Continue Reading
              </h3>
            </div>

            <Link href={`/blog/${nextPost.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Image Section */}
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={nextPost.image}
                      alt={nextPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="mb-3">
                      <Badge className="bg-primary/10 text-primary border-0">
                        {nextPost.category}
                      </Badge>
                    </div>

                    <h4 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {nextPost.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {nextPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />{" "}
                        {nextPost.authorShort || nextPost.author}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />{" "}
                        {nextPost.dateShort || nextPost.dateDisplay}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />{" "}
                        {nextPost.readTimeShort || nextPost.readTime}
                      </span>
                    </div>

                    <div className="mt-4 inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                      Read Next{" "}
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <Link href="/blog">
              <Button variant="outline" className="font-medium">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to all posts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
