"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { MapPin, Globe, TrendingUp, Users, Sparkles, ArrowRight, CheckCircle } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Badge } from "@/components/ui/badge"

const availableTerritories = [
  { id: 1, name: "Vancouver", status: "available", growth: "45%", teams: 12 },
  { id: 2, name: "Surrey", status: "available", growth: "38%", teams: 8 },
  { id: 3, name: "Burnaby", status: "limited", growth: "52%", teams: 15 },
  { id: 4, name: "Richmond", status: "available", growth: "41%", teams: 10 },
  { id: 5, name: "Coquitlam", status: "available", growth: "33%", teams: 7 },
  { id: 6, name: "Langley", status: "available", growth: "48%", teams: 9 },
  { id: 7, name: "Abbotsford", status: "available", growth: "36%", teams: 6 },
  { id: 8, name: "Chilliwack", status: "available", growth: "42%", teams: 5 },
]

const benefits = [
  "Proven business model with 26+ years of success",
  "Comprehensive training and ongoing support",
  "Exclusive territory rights",
  "Marketing and brand recognition",
]

export function TerritoriesSection() {
  return (
    <section className={cn(
      "relative pt-16 pb-20 sm:pt-20 sm:pb-28 md:pt-24 md:pb-32 overflow-hidden",
      "bg-gradient-to-b from-background via-gray-50/40 to-background",
      "dark:from-background dark:via-gray-900/30 dark:to-background"
    )}>
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808004_1px,transparent_1px),linear-gradient(to_bottom,#80808004_1px,transparent_1px)] bg-[size:48px_48px]" />
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
            <span className={cn(
              "block text-xl sm:text-3xl lg:text-4xl font-medium mb-1",
              "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600",
              "dark:from-gray-100 dark:via-gray-200 dark:to-gray-400",
              "bg-clip-text text-transparent",
              "leading-tight"
            )}>
              START AN AFFILIATE NEAR YOU
            </span>
            <span className={cn(
              "block text-4xl sm:text-5xl lg:text-6xl",
              "bg-gradient-to-r from-secondary via-blue-600 to-secondary",
              "dark:from-secondary dark:via-blue-500 dark:to-secondary",
              "bg-clip-text text-transparent",
              "leading-tight",
              "drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(45,52,142,0.25)]"
            )}>
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
            Join Canada's premier volleyball training network. 
            Exclusive territories available nationwide with proven success models.
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
              className="h-full p-6 sm:p-8"
              spotlightColor="rgba(45, 52, 142, 0.1)"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Available Territories
                  </h3>
                  <Badge variant="secondary" className="gap-1">
                    <Sparkles className="h-3 w-3" />
                    {availableTerritories.filter(t => t.status === "available").length} Open
                  </Badge>
                </div>
                
                {/* Interactive Map Placeholder */}
                <div className="relative h-[300px] sm:h-[400px] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                  {/* Map Background Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="map-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                          <circle cx="1" cy="1" r="1" fill="currentColor" className="text-gray-400" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#map-pattern)" />
                    </svg>
                  </div>
                  
                  {/* Map Pins */}
                  {availableTerritories.map((territory, index) => (
                    <motion.div
                      key={territory.id}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                      className="absolute"
                      style={{
                        top: `${20 + (index % 3) * 30}%`,
                        left: `${15 + (index % 4) * 20}%`,
                      }}
                    >
                      <div className="relative group">
                        <div className={cn(
                          "absolute -inset-2 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity",
                          territory.status === "available" 
                            ? "bg-primary" 
                            : "bg-yellow-500"
                        )} />
                        <MapPin className={cn(
                          "h-6 w-6 relative transition-transform group-hover:scale-125",
                          territory.status === "available" 
                            ? "text-primary fill-primary/20" 
                            : "text-yellow-500 fill-yellow-500/20"
                        )} />
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                            <div className="font-semibold">{territory.name}</div>
                            <div className="text-[10px] text-gray-300">
                              {territory.teams} teams • {territory.growth} growth
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Map Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-gray-700 dark:text-gray-300">Available</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <span className="text-gray-700 dark:text-gray-300">Limited</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Territory List */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                  Quick Overview
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {availableTerritories.slice(0, 6).map((territory) => (
                    <div
                      key={territory.id}
                      className={cn(
                        "flex items-center justify-between px-3 py-2 rounded-lg",
                        "border transition-all duration-300",
                        "hover:scale-[1.02] hover:shadow-md",
                        territory.status === "available"
                          ? "bg-primary/5 border-primary/20 hover:bg-primary/10"
                          : "bg-yellow-500/5 border-yellow-500/20 hover:bg-yellow-500/10"
                      )}
                    >
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {territory.name}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <TrendingUp className="h-3 w-3" />
                        <span>{territory.growth}</span>
                      </div>
                    </div>
                  ))}
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
            <SpotlightCard className="p-6 sm:p-8" spotlightColor="rgba(236, 186, 88, 0.15)">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-yellow-500/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    Join Our Growing Network
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Become part of Canada's fastest-growing volleyball training franchise 
                    with over 10,000 athletes trained annually.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">26+</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">45+</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">Locations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">Success Rate</div>
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
            <SpotlightCard className="p-6 sm:p-8" spotlightColor="rgba(45, 52, 142, 0.1)">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-4">
                  <Sparkles className="h-3 w-3" />
                  Limited Time Offer
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Territories are being claimed quickly. Secure your exclusive area today.
                </p>
                
                {/* CTA Button */}
                <a
                  href="/affiliate"
                  className={cn(
                    "group relative inline-flex items-center gap-2 px-8 py-4",
                    "bg-gradient-to-r from-secondary to-blue-600 text-white",
                    "rounded-full font-semibold text-lg w-full sm:w-auto justify-center",
                    "transform transition-all duration-300",
                    "hover:scale-105 hover:shadow-xl",
                    "dark:from-secondary dark:to-blue-500"
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
                    <a href="tel:403-510-1784" className="text-primary font-semibold hover:underline">
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
  )
}