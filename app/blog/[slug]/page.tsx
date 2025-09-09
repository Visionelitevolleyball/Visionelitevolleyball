"use client";

import { use, useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  // DB post
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

  function formatUtcDate(input: string | number | Date) {
    const d = new Date(input)
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
    }).format(d)
  }
  const [loaded, setLoaded] = useState(false);
  const [nextPost, setNextPost] = useState<null | {
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    category: string;
    image: string;
    dateDisplay: string;
    readTime: string;
  }>(null);

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`, { cache: "no-store" });
        if (!res.ok) {
          setLoaded(true);
          return;
        }
        const b = await res.json();
        const date = new Date(b.publishedDate || b.createdAt || Date.now());
        const mapped = {
          title: b.title as string,
          excerpt: (b.excerpt as string) || null,
          author: (b.author as string) || "Admin",
          category: (b.category as string) || "Blog",
          image: (b.featuredImage as string) || null,
          content: (b.content as string) || "",
          dateDisplay: formatUtcDate(date),
          contentFormat: (b.contentFormat as string) || 'markdown',
        };
        if (!ignore) setDbPost(mapped);
        setLoaded(true);
      } catch {}
    })();
    return () => {
      ignore = true;
    };
  }, [slug]);

  // Load a simple next post suggestion
  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const res = await fetch(`/api/blogs?pageSize=50`, { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        const items = Array.isArray(data.items) ? data.items : [];
        const pick = items.find((it: { slug?: string }) => it.slug !== slug) as {
          slug: string;
          title: string;
          excerpt?: string;
          author?: string;
          category?: string;
          featuredImage?: string;
          publishedDate?: string;
          createdAt?: string;
          content?: string;
        } | undefined;
        if (pick && !ignore) {
          const rd = estimateReadTime(pick.content || "");
          setNextPost({
            slug: pick.slug,
            title: pick.title,
            excerpt: pick.excerpt || "",
            author: pick.author || "Admin",
            category: pick.category || "Blog",
            image: pick.featuredImage || "/volleyball.png",
            dateDisplay: formatUtcDate(pick.publishedDate || pick.createdAt || new Date()),
            readTime: rd,
          });
        }
      } catch {}
    })();
    return () => { ignore = true };
  }, [slug]);

  if (!dbPost) {
    if (loaded) return notFound();
    
    // Beautiful loading skeleton
    return (
      <div className="relative min-h-screen">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-background dark:to-gray-950" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header Skeleton */}
          <div className="space-y-6 animate-pulse">
            {/* Title */}
            <div className="space-y-3">
              <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg animate-shimmer" />
              <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg w-3/4 animate-shimmer" />
            </div>
            
            {/* Meta info */}
            <div className="flex gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
                  <div className="h-4 w-20 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded animate-shimmer" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Featured Image Skeleton */}
          <div className="mt-12 relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 animate-shimmer">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-slide" />
          </div>
          
          {/* Content Skeleton */}
          <div className="mt-12 space-y-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className={`h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded animate-shimmer ${
                  i % 3 === 2 ? 'w-4/5' : 'w-full'
                }`} style={{ animationDelay: `${i * 0.1}s` }} />
                {i % 4 === 0 && (
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded w-2/3 animate-shimmer" 
                    style={{ animationDelay: `${i * 0.1 + 0.05}s` }} />
                )}
              </div>
            ))}
          </div>
          
          {/* Loading message */}
          <div className="flex items-center justify-center mt-12 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          @keyframes shimmer-slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 2s ease-in-out infinite;
            background-size: 200% 100%;
          }
          .animate-shimmer-slide {
            animation: shimmer-slide 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  const isDb = !!dbPost;
  const post = dbPost;

  function estimateReadTime(content: string) {
    let text = content.replace(/<[^>]*>/g, ' ')
    text = text
      .replace(/!\[[^\]]*\]\([^\)]*\)/g, ' ')
      .replace(/\[[^\]]*\]\([^\)]*\)/g, ' ')
      .replace(/[>#*_`~\-]+/g, ' ')
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const minutes = Math.max(1, Math.ceil(words / 200))
    return `${minutes} min read`
  }

  function DbImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
    if (isDb) {
      return (
        <Image 
          src={src} 
          alt={alt} 
          width={1024} 
          height={576} 
          className={className} 
          unoptimized 
        />
      );
    }
    return <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 1024px" className={className} />;
  }

  // Next blog loaded from API above

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
            {isDb && (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" /> {estimateReadTime(post.content)}
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
                  ul: (props) => <ul className="my-6 list-disc pl-6" {...props} />,
                  ol: (props) => <ol className="my-6 list-decimal pl-6" {...props} />,
                  li: (props) => <li className="my-1" {...props} />,
                  blockquote: (props) => <blockquote className="border-l-4 pl-4 italic my-6" {...props} />,
                  a: (props) => <a className="text-primary underline" {...props} />,
                  img: ({ alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="my-8 rounded-xl mx-auto max-w-full h-auto" alt={alt} {...props} />
                  ),
                  code: ({ children, ...props }) => {
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
            {nextPost && (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">Continue Reading</h3>
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
                            <User className="h-3.5 w-3.5" /> {nextPost.author}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" /> {nextPost.dateDisplay}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" /> {nextPost.readTime}
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
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
