"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { 
  Trophy, Users, Star, 
  ChevronDown, ChevronUp, Shield, 
  Zap, Heart, Medal, Crown
} from "lucide-react"
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
    id: "chris-wingfield",
    name: "Chris Wingfield",
    role: "Club Director",
    credentials: ["NCCP Advanced Development Coach", "28 Years Police Service", "12 Years Coaching"],
    bioShort: "Recently retired police officer with 28 years of service, bringing discipline and leadership to our volleyball programs.",
    bioFull: "Chris is a recently retired police officer of 28 years with the Winnipeg Police Service. He has been coaching for 12 years and is a NCCP Advanced Development Coach. Past coaching experience ranges from U13 through the ages of U17. Numerous nationals attended with various teams, with two gold medals attained. His leadership skills from law enforcement translate perfectly to developing young athletes both on and off the court. Hobbies include golfing, fishing and riding his Honda Goldwing in the summer months.",
    achievements: ["2x National Gold Medals", "Multiple National Championships", "U13-U17 Development Specialist"],
    experience: "12 Years",
    focus: ["Youth Development", "Leadership", "Character Building"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600"
  },
  {
    id: "arabella-mckim",
    name: "Arabella McKim",
    role: "Full-Time Coach",
    credentials: ["8 Years Competitive Playing", "4+ Years High-Level Coaching", "Vision Elite International Coach"],
    bioShort: "Former competitive player turned dedicated coach, passionate about developing athletes' skills and confidence.",
    bioFull: "Arabella has been coaching with Volleyball Calgary since January 2025. Her 8 years of competitive playing experience were cut short by a car accident, but her passion for the sport never faded. With over 4 years of high-level coaching experience, she now dedicates herself full-time to developing athletes. She works at all Volleyball Calgary locations alongside Head Coach Luc Tremblay. In the offseason, Arabella coaches with Vision Elite International during the summer and competes in beach volleyball. She is deeply committed to helping players grow both in skill and confidence, and is currently pursuing degrees in Sport Management and Sociology. Arabella's long-term goal is to continue building her career in sports, inspiring athletes on and off the court.",
    experience: "4+ Years",
    focus: ["Skill Development", "Confidence Building", "Beach Volleyball"],
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600"
  },
  {
    id: "zeel-mistry",
    name: "Zeel Mistry",
    role: "Coach & Personal Trainer",
    credentials: ["12+ Years Playing Experience", "National Level Setter", "Personal Training Specialist"],
    bioShort: "National-level setter from India, combining technical expertise with strength training for complete athlete development.",
    bioFull: "Coach Zeel joined Volleyball Calgary in May 2025, bringing over 12 years of playing experience to the court. As a setter, she has represented MSU and Gujarat in both the National University Volleyball Championship and the National Games of India. In the offseason, Zeel coaches with Vision Elite International and plays on her recreational volleyball team. She is currently pursuing a career in personal training and is passionate about building both strength and skill in every athlete she works with.",
    achievements: ["National University Championships", "National Games of India", "Elite Setter Specialist"],
    experience: "12+ Years Playing",
    focus: ["Setting Technique", "Strength Training", "Elite Performance"],
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600"
  },
  {
    id: "cindy-riemel",
    name: "Cindy Riemel",
    role: "Coach",
    credentials: ["10 Years Playing", "4 Years Coaching", "UofC Graduate"],
    bioShort: "Former BC Summer Games athlete bringing competitive experience and sports psychology expertise to coaching.",
    bioFull: "Coach Cindy has been with Volleyball Calgary since August 2025, bringing 10 years of playing and 4 years of coaching experience to the court. As an Outside Hitter, she represented her home region of the Kootenays at BC Summer Games. In the offseason, Cindy plays on League Teams across Calgary. She is a recent graduate of the University of Calgary, and is planning to pursue a career in Sports Psychology. She is passionate about athlete development and giving back to the volleyball community.",
    achievements: ["BC Summer Games Representative", "Outside Hitter Specialist", "Psychology Background"],
    experience: "4 Years",
    focus: ["Mental Performance", "Outside Hitting", "Youth Development"],
    gradient: "from-indigo-500/10 to-blue-500/10",
    iconColor: "text-indigo-600"
  },
  {
    id: "owen-croften",
    name: "Owen Croften",
    role: "Junior Coach",
    credentials: ["Current Club Player", "Ace Volleyball", "Youth Development Focus"],
    bioShort: "Active club player passionate about sharing knowledge while continuing his own athletic development.",
    bioFull: "Coach Owen joined Volleyball Calgary in April 2025. He currently plays club volleyball with Ace and has previously competed with the Dome Defenders. With over a year of coaching experience, Owen is passionate about sharing his knowledge of the game while continuing his own development as an athlete. He plans to keep coaching alongside his studies, inspiring the next generation of players.",
    experience: "1+ Year",
    focus: ["Youth Engagement", "Fundamentals", "Player Perspective"],
    gradient: "from-red-500/10 to-orange-500/10",
    iconColor: "text-red-600"
  },
  {
    id: "alex-skirukha",
    name: "Alex Skirukha",
    role: "Coach & Strongman Athlete",
    specialRole: "World's Strongest Teen",
    credentials: ["High School Volleyball", "2024 World's Strongest Teen", "Canadian Strongman Champion"],
    bioShort: "Unique athletic background combining volleyball with world-class strongman achievements.",
    bioFull: "Coach Alex joined Volleyball Calgary in May 2025 after three years of playing on his high school volleyball team. This season marks his first year as a coach, and he brings a unique athletic background to the court. Outside of volleyball, Alex competes in Strongman, earning titles such as 2024 SCC Strongman Canadian Champion, 2024 OSG World's Strongest Teen, and 2024 Alberta's Strongest Teen — with many more to come. Passionate about working with youth, Alex is excited to continue coaching during his gap year while inspiring players both on and off the court.",
    achievements: ["2024 World's Strongest Teen", "2024 Canadian Strongman Champion", "2024 Alberta's Strongest Teen"],
    experience: "First Year",
    focus: ["Strength Development", "Youth Motivation", "Athletic Excellence"],
    gradient: "from-gray-500/10 to-slate-500/10",
    iconColor: "text-gray-600"
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
              <Badge className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-primary/20 to-yellow-500/20 dark:from-primary/30 dark:to-yellow-500/30 text-primary dark:text-yellow-400 border-primary/30 dark:border-yellow-500/30">
                <Trophy className="h-5 w-5 mr-2" />
                Meet Our Coaching Team
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="block text-gray-900 dark:text-gray-100">
                Better Coaches,
              </span>
              <span className={cn(
                "block mt-2",
                "bg-gradient-to-r from-primary via-yellow-500 to-orange-500",
                "bg-clip-text text-transparent",
                "bg-[length:200%_100%]",
                "animate-gradient"
              )}>
                Better Athletes, Better Results
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our system develops players and coaches. We invest in our coaches through a unique 
              Coaching Academy guided by our Head Coach, delivering consistent, quality instruction 
              that compounds year after year.
            </p>
          </motion.div>

          {/* Head Coach Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 via-yellow-500/5 to-orange-500/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-2 border-primary/20 dark:border-primary/30">
              <div className="absolute top-0 right-0 p-6">
                <Crown className="h-16 w-16 text-primary/20" />
              </div>
              
              <div className="relative p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="relative">
                    <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl bg-gradient-to-br from-primary/20 to-yellow-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <Trophy className="h-20 w-20 text-primary mx-auto mb-2" />
                        <span className="text-3xl font-black text-primary">30+</span>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Years</p>
                      </div>
                    </div>
                    <Badge className="absolute -bottom-2 -right-2 px-3 py-1 bg-gradient-to-r from-primary to-yellow-500 text-black font-bold">
                      Founder
                    </Badge>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2">{coaches[0].name}</h2>
                    <p className="text-xl text-primary font-semibold mb-4">{coaches[0].role}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                      {coaches[0].achievements?.map((achievement, index) => (
                        <Badge key={index} variant="outline" className="border-primary/30 text-primary">
                          <Medal className="h-3 w-3 mr-1" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {coaches[0].bioShort}
                    </p>

                    <motion.div
                      initial={false}
                      animate={{ height: expandedBios.has(coaches[0].id) ? "auto" : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed pb-6">
                        {coaches[0].bioFull}
                      </p>
                    </motion.div>

                    <Button
                      variant="ghost"
                      onClick={() => toggleBio(coaches[0].id)}
                      className="group text-primary hover:text-primary/80"
                    >
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
                <div className="h-full p-6 rounded-2xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:border-primary/40 dark:hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
                  {/* Coach Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={cn(
                      "w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0",
                      coach.gradient
                    )}>
                      <Users className={cn("h-8 w-8", coach.iconColor)} />
                    </div>
                    
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
                      className="text-primary hover:text-primary/80"
                    >
                      {expandedBios.has(coach.id) ? (
                        <>
                          Less
                          <ChevronUp className="ml-1 h-3 w-3" />
                        </>
                      ) : (
                        <>
                          More
                          <ChevronDown className="ml-1 h-3 w-3" />
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
            <div className="p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-yellow-500/10 to-orange-500/10 dark:from-gray-900 dark:to-gray-800 border-2 border-primary/20 dark:border-primary/30">
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
                  "transition-all duration-300"
                )}
              >
                <span className="relative flex items-center gap-2">
                  Apply to Coach
                  <Heart className="h-5 w-5 transition-transform group-hover:scale-110" />
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}