"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SEO from "@/app/components/shared/seo";
import {
  Trophy,
  Users,
  Star,
  ChevronDown,
  ChevronUp,
  Shield,
  Zap,
  Heart,
  Crown,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Coach {
  id: string;
  name: string;
  role: string;
  specialRole?: string;
  image?: string;
  credentials: string[];
  bioShort: string;
  bioFull: string;
  achievements?: string[];
  experience: string;
  focus: string[];
  gradient: string;
  iconColor: string;
}

const coaches: Coach[] = [
  {
    id: "luc-tremblay",
    name: "Luc Tremblay",
    role: "Head Coach & Founder",
    specialRole: "Coaching Academy Director",
    credentials: [
      "30+ Years Coaching Experience",
      "NCCP Master Coach Developer",
      "Vision Elite Founder",
    ],
    bioShort:
      "Founder of Volleyball Winnipeg and VISION Elite Volleyball Club, Luc has been coaching for over 30 years—shaping athletes and building programs.",
    bioFull:
      "Since launching Volleyball Winnipeg in 1999 (originally WMVA), Luc's teams have earned an incredible 27 Provincial Championship medals, captured a National title in 2007, and secured multiple top-five finishes at Nationals. His track record of success on the court is matched by his commitment to developing the next generation of coaches. Luc pioneered many of the training methods now used across VISION programs and continues to lead the Coach Development Program, ensuring every athlete receives high-quality, consistent instruction. Now based in Calgary, Luc is partnering with local coaches to create a community-focused training model outside the traditional club system—making volleyball more accessible while keeping it competitive, fun, and player-centered.",
    achievements: [
      "27 Provincial Championships",
      "2007 National Champion",
      "Multiple Top 5 National Finishes",
    ],
    experience: "30+ Years",
    focus: ["Elite Performance", "Coach Development", "Program Building"],
    gradient: "from-yellow-500/10 to-orange-500/10",
    iconColor: "text-yellow-600",
  },
  {
    id: "nancy-xu",
    name: "Nancy Xu",
    role: "Technical Skills Coach",
    image: "/coaches/nancy_xu.webp",
    credentials: [
      "30+ Years Playing & Coaching Experience",
      "Former University-Level Player (China)",
      "NCCP Certified",
    ],
    bioShort:
      "Brings over 30 years of volleyball experience as both player and coach, including 6+ years coaching in Canada. Known for her supportive, high-energy approach.",
    bioFull:
      "Coach Nancy brings over 30 years of volleyball experience as both a player and coach, including 6+ years coaching in Canada. A former competitive university-level player in China, she is NCCP-certified and has worked with athletes ages 10–18, guiding teams to success at regional and provincial tournaments. Known for her supportive, high-energy approach, Coach Nancy emphasizes strong fundamentals, teamwork, and confidence—helping players grow both on and off the court.",
    achievements: [
      "Former University Player (China)",
      "Regional & Provincial Success",
      "Youth Development Specialist",
    ],
    experience: "30+ Years",
    focus: [
      "Fundamentals & Technique",
      "Teamwork Building",
      "Confidence Development",
    ],
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600",
  },
  {
    id: "drew-webber",
    name: "Drew Webber",
    role: "Head Assistant Coach & Mentor",
    image: "/coaches/drew_webber.webp",
    credentials: [
      "BC Summer Games Competitor",
      "Provincial Team Training",
      "NCCP Certified",
    ],
    bioShort:
      "From Coquitlam, BC, Drew fell in love with volleyball during grade 10 and competed at BC Summer Games, bringing deep relationship-focused coaching philosophy.",
    bioFull:
      "I fell in love with the game of volleyball during the summer after grade 10, before grade 11. I spent the summer competing in the BC Summer Games in Victoria, and training with the Provincial Team in Kelowna. Since that time, I&apos;ve ridden the highs, and the lows, of competitive sport. Over the years, I&apos;ve learned to embody the principles that both success and failure can yield to any competitor. For competition, sometimes the old ways were best: I believe that excellence is predicated on hard work, discipline, teamwork, resilience, and performing under pressure. But at my core, there is one very clear insight that governs any principle that I embody: I believe that any outcome, whether win/loss/make the team/cut from the team, all of these events are held within the crucible of our coach-player relationships. My hero, former NBA coach Greg Popovich, would often say: &apos;Ya, I love winning...but really what this is all about is the relationships we make along the way.&apos; This, in essence, is my coaching philosophy: that there&apos;s no success or failure that&apos;s worth more to me than the value of my relationships with kids and coaches. On a personal note, I&apos;m a husband and father of three. We&apos;re a resilient family who has been through much. I like to think we&apos;re a quietly confident family of 5 who take care of their own, embody kindness, and love hitting the pool, lake, or any kind of swimmable water whenever we can.",
    achievements: [
      "BC Summer Games Competitor",
      "Provincial Team Training",
      "Relationship-Focused Leadership",
    ],
    experience: "15+ Years",
    focus: ["Relationship Building", "Mental Training", "Team Chemistry"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
  },
  {
    id: "cass-field",
    name: "Cass Field",
    role: "Youth Development Coach",
    image: "/coaches/cass_field.webp",
    credentials: [
      "Youth Specialist",
      "NCCP Development Coach",
      "Community Program Leader",
    ],
    bioShort:
      "I have over three years of coaching experience working with both girls' and boys' teams at the high school and club level.",
    bioFull:
      "I have over three years of coaching experience working with both girls' and boys' teams at the high school and club level. I also played volleyball all throughout high school and club, competing in multiple positions including left side, right side, setter, and middle. Playing in so many roles has given me a well-rounded perspective of the game that I bring into my coaching. My coaching style focuses on developing strong individual skills and technical precision, while also building confidence and a love for the sport. I'm passionate about helping athletes grow not only in their abilities on the court, but also in their teamwork, communication, and overall approach to the game. I have three years of coaching experience in both high school and club teams, and I've played every position from left side to setter. My coaching style focuses on building strong individual skills and technical precision while keeping the game fun and confidence boosting.",
    achievements: [
      "Youth Program Excellence",
      "Community Impact Award",
      "Player Development Specialist",
    ],
    experience: "3+ Years",
    focus: ["Youth Engagement", "Skill Building", "Confidence Development"],
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600",
  },
];

export default function CoachesPage() {
  const [expandedBios, setExpandedBios] = useState<Set<string>>(new Set());

  const toggleBio = (coachId: string) => {
    setExpandedBios((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(coachId)) {
        newSet.delete(coachId);
      } else {
        newSet.add(coachId);
      }
      return newSet;
    });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    "name": "Volleyball Fraser Valley Coaching Staff",
    "description": "Meet our experienced volleyball coaches including Emily Chen, Sarah Williams, Cass Field, and more.",
    "coach": coaches.map(coach => ({
      "@type": "Person",
      "name": coach.name,
      "jobTitle": coach.role
    }))
  };

  return (
    <div className="relative">
      <SEO 
        title="Coach Bios"
        description="Meet Volleyball Fraser Valley's expert coaching team. Experienced youth volleyball coaches with NCCP certification, leading programs in Surrey, Langley & Abbotsford."
        keywords="volleyball coaches volleyball fraser valley, youth volleyball coaches surrey, nccp certified coaches, volleyball instructors langley, coaching staff bios"
        canonicalUrl="https://www.volleyballfraservalley.ca/coaches"
        jsonLd={jsonLd}
      />
      {/* Single Continuous Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-background dark:to-gray-950" />
      </div>

      {/* Animated Grid Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
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

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8.5rem)] pt-8 lg:pt-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8.5rem)] flex items-start">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex mb-6"
              >
                <Badge className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800">
                  <Trophy className="h-4 w-4 mr-2" />
                  Meet Our Coaching Team
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              >
                <span className="block text-gray-900 dark:text-gray-100">
                  BETTER COACHES,
                </span>
                <span
                  className={cn(
                    "block mt-2",
                    "bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600",
                    "dark:from-amber-200 dark:via-yellow-400 dark:to-amber-600",
                    "bg-clip-text text-transparent",
                    "bg-[length:200%_100%]",
                    "animate-gradient",
                    "drop-shadow-sm dark:drop-shadow-[0_0_35px_rgba(236,186,88,0.5)]",
                    "[text-shadow:_0_2px_12px_rgba(236,186,88,0.25)]"
                  )}
                >
                  BETTER ATHLETES, BETTER RESULTS
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Our system develops players and coaches. We invest in our
                coaches through a unique Coaching Academy guided by our Head
                Coach, delivering consistent, quality instruction that compounds
                year after year.
              </motion.p>
            </motion.div>

            {/* Head Coach Feature - Enhanced 10/10 Version */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/8 via-yellow-500/8 to-orange-500/8 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-2 border-primary/30 dark:border-primary/40 hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/10">
                {/* Animated shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] animate-shimmer" />

                {/* Static volleyball watermark */}
                <div className="absolute top-1/2 right-10 -translate-y-1/2 pointer-events-none">
                  <div className="relative">
                    <Image
                      src="/volleyball.webp"
                      alt="Volleyball"
                      width={200}
                      height={200}
                      className="h-48 w-48 lg:h-56 lg:w-56 opacity-[0.06] dark:opacity-[0.04] grayscale contrast-200 sepia-[0.3] hue-rotate-180 saturate-[3]"
                    />
                  </div>
                </div>

                <div className="relative p-10 lg:p-14">
                  <div className="flex flex-col lg:flex-row gap-10 items-center">
                    <div className="relative group">
                      {/* Enhanced photo placeholder with professional frame */}
                      <div className="relative w-52 h-64 lg:w-60 lg:h-80">
                        {/* Outer glow ring */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-yellow-500 to-orange-500 p-1">
                          <div className="w-full h-full rounded-2xl overflow-hidden">
                            <Image
                              src="/coaches/luc_tremblay.webp"
                              alt="Luc Tremblay - Head Coach & Founder"
                              width={240}
                              height={320}
                              className="w-full h-full object-cover object-top"
                              priority
                            />
                          </div>
                        </div>

                        {/* Enhanced founder badge with animation */}
                        <motion.div
                          className="absolute -bottom-3 -right-3"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Badge className="px-4 py-2 bg-gradient-to-r from-primary to-yellow-500 text-black font-bold text-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <Crown className="h-4 w-4 mr-1" />
                            Founder
                          </Badge>
                        </motion.div>
                      </div>
                    </div>

                    <div className="flex-1 text-center lg:text-left">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <h2 className="text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent">
                          {coaches[0].name}
                        </h2>
                        <p className="text-2xl lg:text-3xl bg-gradient-to-r from-secondary to-blue-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent font-black mb-6 tracking-tight">
                          {coaches[0].role}
                        </p>
                      </motion.div>

                      {/* Enhanced floating achievements with stagger animation */}
                      <motion.div
                        className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.1,
                            },
                          },
                        }}
                      >
                        {coaches[0].achievements?.map((achievement, index) => {
                          const Icon =
                            index === 0 ? Trophy : index === 1 ? Crown : Star;
                          return (
                            <motion.div
                              key={index}
                              variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                              }}
                            >
                              <Badge
                                variant="outline"
                                className="border-2 border-primary/90 text-gray-900 bg-gradient-to-br from-primary/30 to-yellow-500/20 hover:from-primary/40 hover:to-yellow-500/30 transition-all duration-300 px-4 py-2 font-bold shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 dark:border-primary/70 dark:bg-gradient-to-br dark:from-primary/35 dark:to-yellow-500/25 dark:hover:from-primary/45 dark:hover:to-yellow-500/35 dark:text-gray-100"
                              >
                                <Icon className="h-5 w-5 mr-2 text-secondary dark:text-primary drop-shadow-sm" />
                                {achievement}
                              </Badge>
                            </motion.div>
                          );
                        })}
                      </motion.div>

                      <motion.p
                        className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {coaches[0].bioShort}
                      </motion.p>

                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedBios.has(coaches[0].id) ? "auto" : 0,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed pb-6 text-base">
                          {coaches[0].bioFull}
                        </p>
                      </motion.div>

                      <Button
                        variant="outline"
                        onClick={() => toggleBio(coaches[0].id)}
                        className="group relative border-2 border-primary/40 dark:border-primary/50 text-gray-800 dark:text-gray-200 font-bold hover:text-black dark:hover:text-black hover:bg-gradient-to-r hover:from-primary hover:to-yellow-500 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-105 overflow-hidden px-6"
                      >
                        <span className="relative z-10 flex items-center">
                          {expandedBios.has(coaches[0].id) ? (
                            <>
                              Show Less
                              <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                            </>
                          ) : (
                            <>
                              Read Full Bio
                              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                            </>
                          )}
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Coaches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {coaches.slice(1).map((coach, index) => (
                <motion.div
                  key={coach.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-2xl bg-white/90 dark:bg-gray-900/60 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700/50 hover:border-primary/40 dark:hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/15 hover:-translate-y-1.5 hover:bg-white dark:hover:bg-gray-900/70 transition-all duration-300 group">
                    {/* Coach Header */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                      {coach.image ? (
                        <div className="relative w-24 h-24 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0">
                          <div
                            className={cn(
                              "absolute inset-0 rounded-xl p-[2px]",
                              coach.id === "drew-webber"
                                ? "bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500"
                                : coach.id === "nancy-xu"
                                  ? "bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500"
                                  : "bg-gradient-to-br from-green-500 via-emerald-600 to-teal-500"
                            )}
                          >
                            <div className="w-full h-full rounded-xl overflow-hidden bg-white dark:bg-gray-900">
                              <Image
                                src={coach.image}
                                alt={coach.name}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover object-top"
                                priority
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <motion.div
                          className={cn(
                            "w-24 h-24 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg",
                            coach.gradient
                          )}
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          <Users
                            className={cn(
                              "h-10 w-10 sm:h-9 sm:w-9 lg:h-10 lg:w-10 transition-transform duration-300 group-hover:scale-110",
                              coach.iconColor
                            )}
                          />
                        </motion.div>
                      )}

                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">
                          {coach.name}
                        </h3>
                        <p className="text-sm lg:text-base font-semibold bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                          {coach.role}
                        </p>
                        {coach.specialRole && (
                          <Badge
                            className="mt-3 text-xs lg:text-sm px-3 py-1 bg-gradient-to-r from-secondary/10 to-blue-600/10 dark:from-secondary/20 dark:to-blue-600/20 border-secondary/30 dark:border-secondary/40"
                            variant="outline"
                          >
                            <Star className="h-3 w-3 lg:h-4 lg:w-4 mr-1.5 text-secondary" />
                            {coach.specialRole}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Credentials */}
                    <div className="space-y-2.5 mb-5">
                      {coach.credentials.map((credential, credIndex) => (
                        <div
                          key={credIndex}
                          className="flex items-center gap-2.5 text-sm lg:text-base text-gray-700 dark:text-gray-300"
                        >
                          <Shield className="h-4 w-4 lg:h-5 lg:w-5 text-primary/70 dark:text-primary/60 flex-shrink-0" />
                          <span className="font-medium">{credential}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bio */}
                    <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-base leading-relaxed mb-5 font-normal">
                      {coach.bioShort}
                    </p>

                    {/* Expanded Bio */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedBios.has(coach.id) ? "auto" : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pb-4">
                        {coach.bioFull}
                      </p>

                      {coach.achievements && (
                        <div className="pb-4">
                          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Achievements:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {coach.achievements.map((achievement, achIndex) => (
                              <Badge
                                key={achIndex}
                                variant="outline"
                                className="text-xs font-semibold shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border-primary/60 text-gray-900 bg-gradient-to-br from-primary/20 to-yellow-500/15 hover:from-primary/25 hover:to-yellow-500/20 dark:border-primary/50 dark:text-gray-100 dark:bg-gradient-to-br dark:from-primary/25 dark:to-yellow-500/15 dark:hover:from-primary/30 dark:hover:to-yellow-500/20"
                              >
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>

                    {/* Experience & Focus */}
                    <div className="flex items-center justify-between pt-5 border-t-2 border-gray-200 dark:border-gray-700/50">
                      <div className="flex items-center gap-2.5 text-sm lg:text-base">
                        <Zap className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-500 drop-shadow-sm" />
                        <span className="font-bold text-gray-800 dark:text-gray-200">
                          {coach.experience}
                        </span>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleBio(coach.id)}
                        className="group text-gray-700 hover:text-primary font-medium hover:bg-primary/15 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-primary/20 transition-all duration-300 hover:scale-105"
                      >
                        {expandedBios.has(coach.id) ? (
                          <>
                            Less
                            <ChevronUp className="ml-1 h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
                          </>
                        ) : (
                          <>
                            More
                            <ChevronDown className="ml-1 h-3 w-3 transition-transform group-hover:translate-y-0.5" />
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Focus Areas */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {coach.focus.map((area, areaIndex) => (
                        <span
                          key={areaIndex}
                          className="text-xs lg:text-sm px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-20 text-center"
            >
              <div className="relative p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-yellow-500/10 to-orange-500/10 dark:from-gray-900 dark:to-gray-800 border-2 border-primary/20 dark:border-primary/30 overflow-hidden hover:border-primary/30 dark:hover:border-primary/40 transition-colors duration-300">
                {/* Subtle shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -skew-x-12 translate-x-[-200%] animate-shimmer" />

                <div className="relative">
                  <h3 className="text-3xl font-bold mb-4">
                    Join Our Coaching Team
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                    Are you passionate about volleyball and developing young
                    athletes? We&apos;re always looking for dedicated coaches to
                    join our team.
                  </p>
                  <Button
                    size="lg"
                    className={cn(
                      "group relative",
                      "bg-gradient-to-r from-primary to-yellow-500",
                      "hover:from-primary/90 hover:to-yellow-500/90",
                      "text-black font-bold text-lg px-10 h-14",
                      "shadow-lg hover:shadow-2xl hover:scale-105",
                      "transition-all duration-300",
                      "cursor-pointer overflow-hidden",
                      "before:absolute before:w-[0.5rem] before:h-[25rem] before:top-0 before:translate-x-[-15rem]",
                      "hover:before:translate-x-[25rem] before:duration-[0.8s] before:-skew-x-[10deg]",
                      "before:transition-all before:bg-white before:blur-[10px] before:opacity-60"
                    )}
                  >
                    <span className="relative flex items-center gap-2">
                      Apply to Coach
                      <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
