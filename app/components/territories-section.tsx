"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  Globe,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";

const availableTerritories = [
  { id: 1, name: "Edmonton", status: "limited" },
  { id: 2, name: "Vancouver", status: "available" },
  { id: 3, name: "Saskatoon", status: "available" },
  { id: 4, name: "Regina", status: "available" },
  { id: 5, name: "Kelowna", status: "available" },
  { id: 6, name: "Toronto", status: "available" },
  { id: 7, name: "Mississauga", status: "available" },
  { id: 8, name: "Montreal", status: "available" },
  { id: 9, name: "Halifax", status: "available" },
];

const benefits = [
  "Proven business model with 26+ years of success",
  "Comprehensive training and ongoing support",
  "Exclusive territory rights",
  "Marketing and brand recognition",
];

export function TerritoriesSection() {
  return (
    <section
      className={cn(
        "relative pt-16 pb-20 sm:pt-20 sm:pb-28 md:pt-24 md:pb-32 overflow-hidden",
        "bg-gradient-to-b from-background via-gray-50/40 to-background",
        "dark:from-background dark:via-gray-900/30 dark:to-background"
      )}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8"
          >
            <Globe className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Franchise Opportunities
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
              START AN AFFILIATE NEAR YOU
            </span>
            <span
              className={cn(
                "block text-4xl sm:text-5xl lg:text-6xl",
                "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600",
                "dark:from-amber-200 dark:via-yellow-400 dark:to-amber-600",
                "bg-clip-text text-transparent",
                "leading-tight",
                "drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(236,186,88,0.25)]"
              )}
            >
              TERRITORIES AVAILABLE
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400"
          >
            Join Canada&apos;s premier volleyball training network. Exclusive
            territories available nationwide with proven success models.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-2 lg:order-1"
          >
            <SpotlightCard
              className="h-full p-6 sm:p-8 flex flex-col"
              spotlightColor="rgba(45, 52, 142, 0.1)"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Available Territories
                  </h3>
                  <Badge variant="secondary" className="gap-1">
                    <Sparkles className="h-3 w-3" />
                    {availableTerritories.length} Open
                  </Badge>
                </div>

                {/* Territory Table */}
                <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 flex-1 flex flex-col">
                  {/* Table Header - Visible on all devices */}
                  <div className="bg-gray-50 dark:bg-gray-800/50 px-3 sm:px-6 py-2 sm:py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-12 gap-2 sm:gap-4 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                      <div className="col-span-8">
                        <span>Territory</span>
                      </div>
                      <div className="col-span-4 text-center">
                        <span>Status</span>
                      </div>
                    </div>
                  </div>

                  {/* Table Body */}
                  <div className="divide-y divide-gray-200 dark:divide-gray-700 flex-1 flex flex-col">
                    {availableTerritories.map((territory, index) => (
                      <motion.div
                        key={territory.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="px-3 sm:px-6 py-3 sm:py-4 lg:flex-1 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                      >
                        <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center">
                          {/* Territory Name */}
                          <div className="col-span-8">
                            <span className="font-semibold text-gray-900 dark:text-gray-100">
                              {territory.name}
                            </span>
                          </div>

                          {/* Status */}
                          <div className="col-span-4 flex justify-center">
                            <span
                              className={cn(
                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                                territory.status === "available"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                              )}
                            >
                              <span
                                className={cn(
                                  "w-1.5 h-1.5 rounded-full mr-1.5",
                                  territory.status === "available"
                                    ? "bg-green-500"
                                    : "bg-yellow-500"
                                )}
                              />
                              {territory.status.charAt(0).toUpperCase() +
                                territory.status.slice(1)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2 space-y-6"
          >
            {/* Opportunity Card */}
            <SpotlightCard
              className="p-6 sm:p-8"
              spotlightColor="rgba(236, 186, 88, 0.15)"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-yellow-500/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    Join Our Growing Network
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Become part of Canada&apos;s fastest-growing volleyball
                    training franchise with over 50,000 families served since
                    1999.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">26+</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">9</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        Locations
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        Success Rate
                      </div>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Investment Info Card */}
            <SpotlightCard
              className="p-6 sm:p-8"
              spotlightColor="rgba(45, 52, 142, 0.1)"
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 dark:bg-blue-500/20 text-secondary dark:text-blue-400 text-xs font-semibold mb-4">
                  <Sparkles className="h-3 w-3" />
                  Limited Time Offer
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Territories are being claimed quickly. Secure your exclusive
                  area today.
                </p>

                {/* CTA Button */}
                <a
                  href="/affiliate"
                  className={cn(
                    "group relative inline-flex items-center gap-2 px-8 py-4",
                    "bg-gradient-to-r from-primary to-yellow-500",
                    "text-black rounded-full font-semibold text-lg w-full sm:w-auto justify-center",
                    "transform transition-all duration-300",
                    "hover:scale-105 hover:shadow-xl",
                    "hover:from-primary/90 hover:to-yellow-500/90",
                    "cursor-pointer overflow-hidden",
                    "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
                    "hover:before:translate-x-[20rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                    "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
                  )}
                >
                  <span>View Territories</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

                  {/* Animated shine effect */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                </a>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Questions? Call us at{" "}
                    <a
                      href="tel:403-510-1784"
                      className="text-primary font-semibold hover:underline"
                    >
                      403-510-1784
                    </a>
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
