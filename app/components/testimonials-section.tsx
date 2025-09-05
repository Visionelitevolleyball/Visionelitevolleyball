"use client";

import { cn } from "@/lib/utils";
import {
  TestimonialCard,
  TestimonialAuthor,
} from "@/components/ui/testimonial-card";
import { motion } from "motion/react";
import { Trophy, Users, Heart } from "lucide-react";

interface Testimonial {
  author: TestimonialAuthor;
  text: string;
  rating?: number;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    author: {
      name: "Laura Anderson",
      role: "Athlete",
      initials: "LA",
    },
    text: "Great coaching and skill development. The drills were excellent, my daughter loved this camp. The time of day was also perfect.",
    rating: 5,
  },
  {
    author: {
      name: "Chris Abramson",
      role: "Parent",
      initials: "CA",
    },
    text: "These classes have truly been life-changing for my daughter. She didn't just enjoy them—she's grown in confidence, built lasting friendships, and discovered a real passion for volleyball. The group sizes made sure she felt included, the coaches inspired her every step of the way, and the drills and games turned learning into something she looks forward to all week. We've seen such a positive difference in her, both on and off the court.",
    rating: 5,
  },
  {
    author: {
      name: "Danielle Duprat",
      role: "Parent",
      initials: "DD",
    },
    text: "My daughter had a great time at the camp. She enjoyed the warmups and drills and felt they enhanced her skills while having fun. The coaches were friendly and welcoming, and made an effort to work with all players. She looks forward to participating again next summer!",
    rating: 5,
  },
  {
    author: {
      name: "Elizabeth Kravets",
      role: "Parent",
      initials: "EK",
    },
    text: "Great summer camp! My daughter 13 y.o. enjoyed it so much! She was exhausted after the training but so glad to learn new techniques. The coaches were great! I definitely recommend Vision as a great volleyball club with lots of opportunities to develop your kids' skills.",
    rating: 5,
  },
  {
    author: {
      name: "Aiden Smith",
      role: "Parent",
      initials: "AS",
    },
    text: "My daughter learned more in one season here than two years anywhere else. She finally believes in herself and can't wait for the next camp. The coaching is consistent, clear, and focused. My son's confidence skyrocketed.",
    rating: 5,
  },
  {
    author: {
      name: "Karen D.",
      role: "Parent",
      initials: "KD",
    },
    text: "My daughter went from shy and unsure to confident and excited to play. The coaches gave her the tools and encouragement she needed, and now she can't wait for every session.",
    rating: 5,
  },
  {
    author: {
      name: "Michael S.",
      role: "Parent",
      initials: "MS",
    },
    text: "We've tried other programs, but this one stands out for its structure and energy. The coaches don't just keep the kids busy—they actually teach them skills that stick.",
    rating: 5,
  },
  {
    author: {
      name: "Sandra L.",
      role: "Parent",
      initials: "SL",
    },
    text: "What impressed me most was how welcoming the environment was. My son is new to volleyball, but the coaches made him feel like he belonged right away.",
    rating: 5,
  },
  {
    author: {
      name: "Alyssa P., Age 13",
      role: "Athlete",
      initials: "AP",
    },
    text: "The drills are fast and fun, and I've learned more here in a few weeks than I did all last season at school. I feel way more confident on the court now.",
    rating: 5,
  },
  {
    author: {
      name: "Jordan M., Age 15",
      role: "Athlete",
      initials: "JM",
    },
    text: "At first I joined just to stay active, but I've found a real love for volleyball. The coaches challenge us, but they also make it a blast.",
    rating: 5,
  },
  {
    author: {
      name: "Ethan R., Age 14",
      role: "Athlete",
      initials: "ER",
    },
    text: "I used to get nervous about serving in games. After working with the coaches here, I finally feel confident stepping to the line. That's been huge for me.",
    rating: 5,
  },
  {
    author: {
      name: "Coach Melissa",
      role: "Coach",
      initials: "CM",
    },
    text: "The best part is seeing athletes grow in confidence week by week. They start unsure, but with the right training and encouragement, they surprise even themselves.",
    rating: 5,
  },
  {
    author: {
      name: "Coach Daniel",
      role: "Coach",
      initials: "CD",
    },
    text: "This program doesn't just build athletes—it builds teammates and leaders. The community here is something special.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section
      className={cn(
        "relative py-20 sm:py-28 md:py-32 overflow-hidden",
        "bg-gradient-to-b from-background via-gray-50/50 to-background",
        "dark:from-background dark:via-gray-900/30 dark:to-background"
      )}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <Heart className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Trusted by Athletes & Parents
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
            REAL STORIES FROM
          </span>
          <span
            className={cn(
              "block text-4xl sm:text-5xl lg:text-6xl",
              "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600",
              "dark:from-amber-200 dark:via-yellow-400 dark:to-amber-600",
              "bg-clip-text text-transparent",
              "leading-tight",
              "drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(236,186,88,0.2)]"
            )}
          >
            OUR COMMUNITY
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400"
        >
          Join thousands of athletes who have transformed their game with VISION
          Elite Academy and Volleyball Fraser Valley&apos;s world-class training
          programs.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12"
        >
          {[
            { icon: Trophy, number: "98%", label: "Satisfaction Rate" },
            { icon: Users, number: "10,000+", label: "Happy Athletes" },
            { icon: Heart, number: "4.9/5", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                {stat.number}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials Marquee */}
      <div className="relative">
        {/* Single Row Marquee */}
        <div className="flex overflow-hidden py-3 [--gap:1.5rem] [--duration:60s]">
          <div className="flex shrink-0 justify-around gap-6 animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <TestimonialCard key={`testimonial-${i}`} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
