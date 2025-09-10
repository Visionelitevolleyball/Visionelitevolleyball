"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "motion/react";
import { Home, Trophy, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnalytics } from "@/lib/analytics/use-analytics";

export default function NotFound() {
  const analytics = useAnalytics();

  useEffect(() => {
    // Track 404 error in analytics
    if (typeof window !== "undefined") {
      analytics.track404Page(window.location.pathname);
    }
  }, [analytics]);

  const quickLinks = [
    { name: "Programs", href: "/programs", icon: Trophy },
    { name: "Summer Camps", href: "/summercamps", icon: Calendar },
    { name: "Contact Us", href: "/contact/get-in-touch", icon: Mail },
  ];

  return (
    <div className="h-[calc(100vh-4rem)] lg:h-[calc(100vh-7rem)] flex items-center justify-center relative overflow-hidden">
      {/* Clean white background */}
      <div className="absolute inset-0 bg-white dark:bg-background" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {/* 404 Text - Simple yellow gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl lg:text-9xl font-bold mb-2 text-primary">
            404
          </h1>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
            Out of Bounds!
          </h2>
          
          <p className="text-base lg:text-lg text-muted-foreground mb-6 max-w-md mx-auto">
            Looks like this ball went way outside the court. The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6"
        >
          <Link href="/">
            <Button 
              size="lg" 
              className="bg-primary text-gray-900 hover:bg-primary/90 shadow-lg transition-all hover:shadow-xl"
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home Court
            </Button>
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground mb-3">Or try these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link href={link.href}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <link.icon className="h-4 w-4 mr-1.5" />
                    {link.name}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun volleyball fact - more compact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
            <span className="text-lg">🏐</span>
            <p className="text-xs text-muted-foreground">
              Fun fact: A volleyball can reach speeds up to 130 km/h when spiked!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}