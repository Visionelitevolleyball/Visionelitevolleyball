"use client"

import { motion } from "motion/react"
import { WordRotate } from "./word-rotate"
import { cn } from "@/lib/utils"

interface AnimatedTaglineProps {
  className?: string
}

export function AnimatedTagline({ className }: AnimatedTaglineProps) {
  const rotatingWords = ["Champions", "Leaders", "Winners", "Elite"]
  
  return (
    <motion.div 
      className={cn("flex items-baseline gap-1", className)}
      initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="text-[17px] font-medium text-gray-600 dark:text-gray-400">
        Where Young Athletes Become
      </span>
      <WordRotate
        words={rotatingWords}
        duration={3000}
        className="text-[17px] font-extrabold text-primary"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 20 },
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      />
    </motion.div>
  )
}