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
    <div className={cn("flex items-baseline gap-1", className)}>
      <BlurText
        text="Where Young Athletes Become"
        delay={100}
        animateBy="words"
        direction="top"
        className="text-[17px] font-medium text-gray-600 dark:text-gray-400"
      />
      <WordRotate
        words={rotatingWords}
        duration={3000}
        className="text-[17px] font-extrabold text-primary"
        motionProps={{
          initial: { opacity: 0, filter: "blur(10px)", y: -25 },
          animate: { opacity: 1, filter: "blur(0px)", y: 0 },
          exit: { opacity: 0, filter: "blur(10px)", y: 25 },
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
      />
    </div>
  )
}