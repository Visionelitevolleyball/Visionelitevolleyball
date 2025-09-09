"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Gift, ShoppingCart, CalendarCheck, ArrowRight, Info } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/constants";

function GlareButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "group relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90",
        "text-black font-semibold px-6 h-12",
        "hover:shadow-lg hover:scale-105",
        "transition-all duration-300",
        "cursor-pointer overflow-hidden",
        "before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem]",
        "hover:before:translate-x-[22rem] before:duration-[0.8s] before:-skew-x-[10deg]",
        "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
      )}
    >
      <span className="relative flex items-center gap-2">{children}</span>
    </Button>
  );
}

 

export default function MembershipPage() {
  const tiers = [
    {
      name: "SINGLE YOUTH Membership",
      price: "$71.95/month",
      highlights: [
        "Weekly Training: Choose one activity from Camps or Leagues",
        "Guaranteed Spots: Priority Registration for sought-after camps",
        "Exclusive Discounts: Save on gear, group training, and private lessons",
        "Buddy Passes: Three (3) passes every 12 months",
        "Start-up Fee: $30 (one-time)",
      ],
    },
    {
      name: "DOUBLE YOUTH Membership",
      price: "$121.95/month",
      highlights: [
        "Weekly Training: Choose two activities from Camps or Leagues",
        "Guaranteed Spots: Priority Registration for sought-after camps",
        "Exclusive Discounts: Save on gear, group training, and private lessons",
        "Buddy Passes: Three (3) passes every 12 months",
        "Start-up Fee: $30 (one-time)",
      ],
    },
    {
      name: "ADULT Membership",
      price: "COMING SOON",
      highlights: [
        "Details coming this fall",
        "Designed for those who want to stay in the game",
      ],
    },
  ];

  const benefits = [
    { icon: CalendarCheck, label: "Priority Registration" },
    { icon: ShoppingCart, label: "Exclusive Discounts" },
    { icon: Users, label: "Community Access" },
    { icon: Gift, label: "Buddy Passes" },
  ];

  const reasons = [
    "Affordable monthly payments instead of large seasonal fees",
    "Year-round volleyball development",
    "Priority registration beats the rush",
    "Significant savings for multi-sport families",
    "Professional coaching from VEA-certified instructors",
    "Flexible scheduling options",
    "Community of dedicated athletes",
    "Pathway to competitive volleyball",
    "Buddy passes to share the experience",
    "Supporting accessible sport for all",
  ];

  return (
    <div className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-background dark:to-gray-950" />
      </div>

      {/* Animated grid pattern */}
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero */}
      <section className="relative pt-10 sm:pt-12 pb-6">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex mb-4">
            <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800">
              Where Champions Are Made Since 1999
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            <span className="block text-gray-900 dark:text-gray-100">Fraser Valley Volleyball</span>
            <span
              className={cn(
                "block mt-2",
                "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600",
                "dark:from-amber-200 dark:via-yellow-400 dark:to-amber-600",
                "bg-clip-text text-transparent",
                "bg-[length:200%_100%]",
                "animate-gradient"
              )}
            >
              Membership Program
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join thousands of young athletes developing their skills through our comprehensive programs.
            We’ve been the catalyst for countless British Columbians advancing to college and university scholarships.
          </p>

          {/* Optional Hero Notice (removed as requested) */}
        </div>
      </section>

      {/* Tiers */}
      <section className="relative pb-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={cn(
                  "rounded-2xl border bg-white dark:bg-gray-900/60 border-gray-200 dark:border-gray-700 p-6",
                  "transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <Badge className="bg-primary/10 text-gray-900 dark:bg-primary/20 dark:text-primary border-0 font-semibold">
                    {tier.price}
                  </Badge>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {tier.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                {tier.price !== "COMING SOON" ? (
                  <div className="mt-6">
                    <GlareButton onClick={() => window.open(EXTERNAL_LINKS.register, "_blank")}>
                      Register Now <ArrowRight className="h-5 w-5" />
                    </GlareButton>
                  </div>
                ) : (
                  <div className="mt-6 text-sm text-gray-500 flex items-center gap-2">
                    <Info className="h-4 w-4" /> Details coming this fall
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative pb-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Membership Benefits</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, idx) => (
              <div key={idx} className="rounded-xl border bg-white dark:bg-gray-900/60 border-gray-200 dark:border-gray-700 p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-yellow-500/10 flex items-center justify-center">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-semibold">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Programs */}
      <section className="relative pb-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Seasonal Programs Include</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {[
              "Summer Weeknight/Half-day Skills Camp",
              "Fall Skills Camp & Saturday League",
              "Winter Skills Camp & Saturday League",
              "Spring Skills Camp & Saturday League",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 p-4 rounded-xl border bg-white dark:bg-gray-900/60 border-gray-200 dark:border-gray-700">
                <CalendarCheck className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="relative pb-10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">10 Reasons Parents Should Subscribe</h2>
          <ol className="grid grid-cols-1 lg:grid-cols-2 gap-3 list-decimal pl-5 text-gray-700 dark:text-gray-300">
            {reasons.map((r, idx) => (
              <li key={idx} className="p-4 rounded-xl border bg-white dark:bg-gray-900/60 border-gray-200 dark:border-gray-700">
                {r}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Background & CTA */}
      <section className="relative pb-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-white dark:bg-gray-900/60 border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-bold mb-2">Background</h3>
            <p className="text-gray-700 dark:text-gray-300">
              With thousands of young athletes in Fraser Valley volleyball programs annually, we recognize the challenge of rising sports costs. Our Monthly Membership Program provides families an affordable way to budget for year-round volleyball participation, offering significant savings compared to seasonal registrations.
            </p>
          </div>

          <div className="text-center mt-8">
            <h3 className="text-2xl font-black mb-2">Get Started Today!</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to transform your volleyball experience? Join Fraser Valley&apos;s Membership Program and become part of our legacy of excellence. Limited spots available - they fill up fast!
            </p>
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
              <GlareButton onClick={() => window.open(EXTERNAL_LINKS.register, "_blank")}>
                Register Now <ArrowRight className="h-5 w-5" />
              </GlareButton>
              <GlareButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Learn More <ArrowRight className="h-5 w-5" />
              </GlareButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
