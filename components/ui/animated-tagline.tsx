"use client"

import { BlurText } from "./blur-text"
import { WordRotate } from "./word-rotate"
import { cn } from "@/lib/utils"

interface AnimatedTaglineProps {
  className?: string
}

export function AnimatedTagline({ className }: AnimatedTaglineProps) {
  const rotatingWords = ["Champions", "Leaders", "Winners", "Elite"]
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <BlurText
        text="Where Young Athletes Become"
        delay={100}
        animateBy="words"
        direction="top"
        className="text-sm font-medium text-gray-600 dark:text-gray-400"
      />
      <WordRotate
        words={rotatingWords}
        duration={3000}
        className="text-sm font-bold text-primary"
        motionProps={{
          initial: { opacity: 0, filter: "blur(8px)", y: -20 },
          animate: { opacity: 1, filter: "blur(0px)", y: 0 },
          exit: { opacity: 0, filter: "blur(8px)", y: 20 },
          transition: { duration: 0.35, ease: "easeInOut" },
        }}
      />
    </div>
  )
}