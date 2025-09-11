"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/app/components/shared/seo";

export default function AboutUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Volleyball Fraser Valley",
    "description": "Learn about Volleyball Fraser Valley's mission, founded by Luc Tremblay in 2025, building on 25+ years of volleyball development experience.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Volleyball Fraser Valley",
      "founder": {
        "@type": "Person",
        "name": "Luc Tremblay"
      },
      "foundingDate": "2025"
    }
  };

  return (
    <div className="relative">
      <SEO 
        title="About Us"
        description="Learn about Volleyball Fraser Valley - founded by Luc Tremblay in 2025. Community-focused, affordable volleyball programs serving 3,200+ athletes annually."
        keywords="about volleyball fraser valley, luc tremblay volleyball, volleyball winnipeg founder, community volleyball programs, affordable volleyball surrey"
        canonicalUrl="https://www.volleyballfraservalley.ca/contact/about-us"
        jsonLd={jsonLd}
      />
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

      {/* Hero */}
      <section className="relative pt-10 sm:pt-12 pb-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex mb-4">
              <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800">
                Our Story
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              <span className="block text-gray-900 dark:text-gray-100">
                WELCOME TO
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
                VOLLEYBALL FRASER VALLEY
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Affiliate of VISION Elite Academy, building a clear pathway from
              beginner to university-level volleyball in the Fraser Valley.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 lg:p-12 border border-gray-200 dark:border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Volleyball Fraser Valley was created to provide a
                community-focused, accessible pathway for young athletes.
                Inspired by the proven success of Volleyball Winnipeg and
                aligned with VISION Elite Academy, our mission is to deliver
                high-quality, fast-paced training led by certified
                coaches—without the barriers often found in traditional club
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="relative py-6">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-1">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Build a clear athlete pathway in Fraser Valley—from first serve
                to university-ready—through elite coaching, inclusive programs,
                and a positive culture.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Heart,
                  title: "Positive Culture",
                  text: "Supportive, inclusive environment that celebrates growth.",
                },
                {
                  icon: Sparkles,
                  title: "Elite Coaching",
                  text: "Certified VISION coaches and proven methods.",
                },
                {
                  icon: Users,
                  title: "Accessible Pathways",
                  text: "Programs for every age and level with clear progression.",
                },
                {
                  icon: Trophy,
                  title: "Excellence & Fun",
                  text: "High-energy sessions, technical detail, lasting confidence.",
                },
              ].map((v, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  <v.icon className="h-6 w-6 mb-3 text-primary" />
                  <p className="font-semibold mb-1">{v.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { number: "10,000+", label: "Happy Athletes" },
              { number: "26+", label: "Years Experience" },
              { number: "45+", label: "Expert Coaches" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-b from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                  {s.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Join the Movement</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Be part of a growing volleyball community built on excellence and
            inclusion.
          </p>
          <Button
            size="lg"
            className={cn(
              "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
              "text-black font-semibold text-lg px-8 h-14",
              "hover:shadow-lg hover:scale-105",
              "transition-all duration-300",
              "cursor-pointer overflow-hidden",
              "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
              "hover:before:translate-x-[20rem] before:duration-[0.8s] before:-skew-x-[10deg]",
              "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
            )}
          >
            <span className="relative flex items-center gap-2">
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </section>
    </div>
  );
}
