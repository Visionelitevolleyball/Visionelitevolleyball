"use client";

import { use, useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../posts";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const staticPost = posts.find((p) => p.slug === slug);

  // Optional DB post
  const [dbPost, setDbPost] = useState<null | {
    title: string;
    excerpt?: string | null;
    author: string;
    category?: string | null;
    image?: string | null;
    content: string;
    dateDisplay: string;
    contentFormat?: 'markdown' | 'html' | string;
  }>(null);

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`, { cache: "no-store" });
        if (!res.ok) return;
        const b = await res.json();
        const date = new Date(b.publishedDate || b.createdAt || Date.now());
        const mapped = {
          title: b.title as string,
          excerpt: (b.excerpt as string) || null,
          author: (b.author as string) || "Admin",
          category: (b.category as string) || "Blog",
          image: (b.featuredImage as string) || null,
          content: (b.content as string) || "",
          dateDisplay: date.toLocaleDateString(),
          contentFormat: (b.contentFormat as string) || 'markdown',
        };
        if (!ignore) setDbPost(mapped);
      } catch {}
    })();
    return () => {
      ignore = true;
    };
  }, [slug]);

  if (!staticPost && !dbPost) return notFound();

  const isDb = !!dbPost;
  const post = dbPost || {
    title: staticPost!.title,
    excerpt: staticPost!.excerpt,
    author: staticPost!.author,
    category: staticPost!.category,
    image: staticPost!.image,
    content: staticPost!.content,
    dateDisplay: staticPost!.dateDisplay,
  };

  function DbImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
    if (isDb) {
      return <img src={src} alt={alt} className={className} />;
    }
    return <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 1024px" className={className} />;
  }

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
                "block pb-2",
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
            {!isDb && (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" /> {staticPost?.readTime}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="relative pb-10">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="relative h-56 sm:h-80 md:h-[420px]">
              {post.image && (
                <DbImage
                  src={post.image}
                  alt={post.title}
                  className="object-cover object-top"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-16 lg:pb-20">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-neutral dark:prose-invert prose-lg max-w-3xl mx-auto prose-headings:scroll-mt-24 prose-headings:font-black prose-p:leading-relaxed prose-li:leading-relaxed">
            {isDb && dbPost?.contentFormat === 'markdown' ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: (props) => <h1 className="mt-10 mb-6 font-extrabold" {...props} />,
                  h2: (props) => <h2 className="mt-10 mb-4 font-bold" {...props} />,
                  h3: (props) => <h3 className="mt-8 mb-3 font-semibold" {...props} />,
                  p: (props) => <p className="my-4 leading-7" {...props} />,
                  ul: ({ node, ...props }) => <ul className="my-6 list-disc pl-6" {...props} />,
                  ol: ({ node, ...props }) => <ol className="my-6 list-decimal pl-6" {...props} />,
                  li: (props) => <li className="my-1" {...props} />,
                  blockquote: (props) => <blockquote className="border-l-4 pl-4 italic my-6" {...props} />,
                  a: (props) => <a className="text-primary underline" {...props} />,
                  img: ({ node, ...props }) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="my-8 rounded-xl mx-auto max-w-full h-auto" {...props} />
                  ),
                  code: ({ className, children, ...props }) => {
                    const content = String(children ?? '')
                    const isBlock = content.includes('\n')
                    return isBlock ? (
                      <pre className="my-6 rounded-lg bg-muted overflow-x-auto"><code {...props}>{children}</code></pre>
                    ) : (
                      <code className="px-1.5 py-0.5 rounded bg-muted" {...props}>{children}</code>
                    )
                  },
                }}
              >
                {post.content as string}
              </ReactMarkdown>
            ) : (
              isDb ? (
                <div dangerouslySetInnerHTML={{ __html: post.content as string }} />
              ) : (
                post.content
              )
            )}
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
