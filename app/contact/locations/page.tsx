"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail } from "lucide-react";

interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  contact?: string;
  phone?: string;
  email?: string;
  features?: string[];
}

const locations: Location[] = [
  {
    id: "pacific-academy",
    name: "Pacific Academy",
    address: "Pacific Academy (IS GYM), 10238 168th St.",
    city: "Surrey, BC",
    phone: "403-510-1784",
    email: "info@volleyballfraser.ca",
    features: ["IS GYM", "Multiple courts", "Ample parking", "Spectator seating"],
  },
];

export default function LocationsPage() {
  return (
    <div className="relative">
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
          <div className="inline-flex mb-4">
            <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800">
              Locations
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3">
            <span className="block text-gray-900 dark:text-gray-100">
              WHERE WE
            </span>
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
              TRAIN
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find a training location near you in the Fraser Valley region.
          </p>
        </div>
      </section>

      {/* Location Cards */}
      <section className="relative pb-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="max-w-xl w-full p-6 rounded-2xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold mb-1">{loc.name}</h3>
              <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div>{loc.address}</div>
                  <div>{loc.city}</div>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                {loc.phone && (
                  <span className="inline-flex items-center gap-1">
                    <Phone className="h-4 w-4" /> {loc.phone}
                  </span>
                )}
                {loc.email && (
                  <span className="inline-flex items-center gap-1">
                    <Mail className="h-4 w-4" /> {loc.email}
                  </span>
                )}
              </div>
              {loc.features && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {loc.features.map((f, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
