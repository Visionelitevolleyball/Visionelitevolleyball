"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { 
  Trophy, Users, Star, 
  ChevronDown, ChevronUp, Shield, 
  Zap, Heart, Medal, Crown, Award
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Coach {
  id: string
  name: string
  role: string
  specialRole?: string
  image?: string
  credentials: string[]
  bioShort: string
  bioFull: string
  achievements?: string[]
  experience: string
  focus: string[]
  gradient: string
  iconColor: string
}

const coaches: Coach[] = [
  {
    id: "luc-tremblay",
    name: "Luc Tremblay",
    role: "Head Coach & Founder",
    specialRole: "Coaching Academy Director",
    credentials: ["30+ Years Coaching Experience", "NCCP Master Coach Developer", "Vision Elite Founder"],
    bioShort: "Founder of Volleyball Winnipeg and VISION Elite Volleyball Club, Luc has been coaching for over 30 years—shaping athletes and building programs.",
    bioFull: "Since launching Volleyball Winnipeg in 1999 (originally WMVA), Luc's teams have earned an incredible 27 Provincial Championship medals, captured a National title in 2007, and secured multiple top-five finishes at Nationals. His track record of success on the court is matched by his commitment to developing the next generation of coaches. Luc pioneered many of the training methods now used across VISION programs and continues to lead the Coach Development Program, ensuring every athlete receives high-quality, consistent instruction. Now based in Calgary, Luc is partnering with local coaches to create a community-focused training model outside the traditional club system—making volleyball more accessible while keeping it competitive, fun, and player-centered.",
    achievements: ["27 Provincial Championships", "2007 National Champion", "Multiple Top 5 National Finishes"],
    experience: "30+ Years",
    focus: ["Elite Performance", "Coach Development", "Program Building"],
    gradient: "from-yellow-500/10 to-orange-500/10",
    iconColor: "text-yellow-600"
  },
  {
    id: "nancy-xu",
    name: "Nancy Xu",
    role: "Technical Skills Coach",
    credentials: ["NCCP Certified", "Technical Development Specialist", "10+ Years Coaching"],
    bioShort: "Specialized in fundamental technique development and player skill progression with focus on precision training methods.",
    bioFull: "Nancy brings over a decade of coaching experience with a specialized focus on technical skill development. Her methodical approach to teaching fundamentals helps players build a strong foundation that supports advanced play. She excels at breaking down complex techniques into manageable steps, ensuring every athlete develops proper form and muscle memory. Nancy&apos;s dedication to precision and attention to detail makes her invaluable for players looking to refine their technical abilities and reach their full potential.",
    achievements: ["Technical Excellence Award", "Skills Development Specialist", "Youth Program Director"],
    experience: "10+ Years",
    focus: ["Technical Skills", "Fundamental Development", "Precision Training"],
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600"
  },
  {
    id: "drew-webber",
    name: "Drew Webber",
    role: "Head Assistant Coach & Mentor",
    credentials: ["BC Summer Games Competitor", "Provincial Team Training", "NCCP Certified"],
    bioShort: "From Coquitlam, BC, Drew fell in love with volleyball during grade 10 and competed at BC Summer Games, bringing deep relationship-focused coaching philosophy.",
    bioFull: "I fell in love with the game of volleyball during the summer after grade 10, before grade 11. I spent the summer competing in the BC Summer Games in Victoria, and training with the Provincial Team in Kelowna. Since that time, I&apos;ve ridden the highs, and the lows, of competitive sport. Over the years, I&apos;ve learned to embody the principles that both success and failure can yield to any competitor. For competition, sometimes the old ways were best: I believe that excellence is predicated on hard work, discipline, teamwork, resilience, and performing under pressure. But at my core, there is one very clear insight that governs any principle that I embody: I believe that any outcome, whether win/loss/make the team/cut from the team, all of these events are held within the crucible of our coach-player relationships. My hero, former NBA coach Greg Popovich, would often say: &apos;Ya, I love winning...but really what this is all about is the relationships we make along the way.&apos; This, in essence, is my coaching philosophy: that there&apos;s no success or failure that&apos;s worth more to me than the value of my relationships with kids and coaches. On a personal note, I&apos;m a husband and father of three. We&apos;re a resilient family who has been through much. I like to think we&apos;re a quietly confident family of 5 who take care of their own, embody kindness, and love hitting the pool, lake, or any kind of swimmable water whenever we can.",
    achievements: ["BC Summer Games Competitor", "Provincial Team Training", "Relationship-Focused Leadership"],
    experience: "15+ Years",
    focus: ["Relationship Building", "Mental Training", "Team Chemistry"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600"
  },
  {
    id: "cass-field",
    name: "Cass Field",
    role: "Youth Development Coach",
    credentials: ["Youth Specialist", "NCCP Development Coach", "Community Program Leader"],
    bioShort: "Passionate about introducing young athletes to volleyball fundamentals while building confidence and love for the game.",
    bioFull: "Cass specializes in youth development and grassroots volleyball programs. With a natural ability to connect with young athletes, Cass creates an environment where beginners feel comfortable learning and more experienced players are challenged to grow. Known for making practices fun and engaging while maintaining high standards, Cass has helped countless young players discover their passion for volleyball. Their approach focuses on building not just athletic skills, but also confidence, teamwork, and a lifelong love for the sport.",
    achievements: ["Youth Program Excellence", "Community Impact Award", "Player Development Specialist"],
    experience: "8+ Years",
    focus: ["Youth Engagement", "Skill Building", "Confidence Development"],
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600"
  }
]

export default function CoachesPage() {
  const [expandedBios, setExpandedBios] = useState<Set<string>>(new Set())

  const toggleBio = (coachId: string) => {
    setExpandedBios(prev => {
      const newSet = new Set(prev)
      if (newSet.has(coachId)) {
        newSet.delete(coachId)
      } else {
        newSet.add(coachId)
      }
      return newSet
    })
  }

  return (
    <div className="relative">
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
          ease: "linear"
        }}
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Badge className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 text-blue-700 dark:text-blue-400 border-blue-500/20 dark:border-blue-400/30">
                <Trophy className="h-5 w-5 mr-2" />
                Meet Our Coaching Team
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="block text-gray-900 dark:text-gray-100">
                BETTER COACHES,
              </span>
              <span className={cn(
                "block mt-2",
                "bg-gradient-to-r from-primary via-yellow-500 to-primary",
                "bg-clip-text text-transparent",
                "bg-[length:200%_100%]",
                "animate-gradient",
                "drop-shadow-sm dark:drop-shadow-[0_0_35px_rgba(236,186,88,0.5)]",
                "[text-shadow:_0_2px_12px_rgba(236,186,88,0.25)]"
              )}>
                BETTER ATHLETES, BETTER RESULTS
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our system develops players and coaches. We invest in our coaches through a unique 
              Coaching Academy guided by our Head Coach, delivering consistent, quality instruction 
              that compounds year after year.
            </p>
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
              
              {/* Static volleyball with glow */}
              <div className="absolute top-6 right-6">
                <Image
                  src="/volleyball.webp"
                  alt="Volleyball"
                  width={80}
                  height={80}
                  className="h-20 w-20 opacity-60 dark:opacity-40 drop-shadow-[0_0_15px_rgba(236,186,88,0.4)]"
                />
              </div>
              
              <div className="relative p-10 lg:p-14">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="relative group">
                    {/* Enhanced photo placeholder with professional frame */}
                    <div className="relative w-52 h-52 lg:w-60 lg:h-60">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-yellow-500 to-orange-500 p-1">
                        <div className="w-full h-full rounded-2xl overflow-hidden">
                          <Image
                            src="/coaches/luc_tremblay.webp"
                            alt="Luc Tremblay - Head Coach & Founder"
                            width={240}
                            height={240}
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
                      <p className="text-2xl text-gray-700 dark:text-gray-300 font-bold mb-6">{coaches[0].role}</p>
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
                            staggerChildren: 0.1
                          }
                        }
                      }}
                    >
                      {coaches[0].achievements?.map((achievement, index) => {
                        const Icon = index === 0 ? Trophy : index === 1 ? Crown : Star;
                        return (
                          <motion.div
                            key={index}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0 }
                            }}
                          >
                            <Badge 
                              variant="outline" 
                              className="border-primary/80 text-gray-800 bg-primary/20 hover:bg-primary/25 transition-colors duration-300 px-3 py-1.5 font-semibold shadow-sm hover:shadow-md dark:border-primary/60 dark:bg-primary/25 dark:hover:bg-primary/30 dark:text-gray-100"
                            >
                              <Icon className="h-4 w-4 mr-1.5 text-primary" />
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
                      animate={{ height: expandedBios.has(coaches[0].id) ? "auto" : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed pb-6 text-base">
                        {coaches[0].bioFull}
                      </p>
                    </motion.div>

                    <Button
                      variant="ghost"
                      onClick={() => toggleBio(coaches[0].id)}
                      className="group relative text-gray-700 hover:text-white font-semibold hover:bg-gradient-to-r hover:from-primary hover:to-yellow-500 dark:text-gray-300 dark:hover:text-black transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.slice(1).map((coach, index) => (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-white/90 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:border-primary/40 dark:hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:-translate-y-1 hover:bg-white dark:hover:bg-gray-900/70 transition-all duration-300 group">
                  {/* Coach Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className={cn(
                        "w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md",
                        coach.gradient
                      )}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <Users className={cn("h-8 w-8 transition-transform duration-300 group-hover:scale-110", coach.iconColor)} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                      <p className="text-sm font-medium text-primary">{coach.role}</p>
                      {coach.specialRole && (
                        <Badge className="mt-2 text-xs" variant="outline">
                          <Star className="h-3 w-3 mr-1" />
                          {coach.specialRole}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Credentials */}
                  <div className="space-y-2 mb-4">
                    {coach.credentials.map((credential, credIndex) => (
                      <div key={credIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Shield className="h-3 w-3 text-primary/60 flex-shrink-0" />
                        <span>{credential}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {coach.bioShort}
                  </p>

                  {/* Expanded Bio */}
                  <motion.div
                    initial={false}
                    animate={{ height: expandedBios.has(coach.id) ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pb-4">
                      {coach.bioFull}
                    </p>

                    {coach.achievements && (
                      <div className="pb-4">
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Achievements:</p>
                        <div className="flex flex-wrap gap-1">
                          {coach.achievements.map((achievement, achIndex) => (
                            <Badge key={achIndex} variant="secondary" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>

                  {/* Experience & Focus */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700/50">
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium text-gray-700 dark:text-gray-300">
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
                  <div className="mt-4 flex flex-wrap gap-1">
                    {coach.focus.map((area, areaIndex) => (
                      <span 
                        key={areaIndex} 
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
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
                <h3 className="text-3xl font-bold mb-4">Join Our Coaching Team</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  Are you passionate about volleyball and developing young athletes? 
                  We&apos;re always looking for dedicated coaches to join our team.
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
      </section>
    </div>
  )
}