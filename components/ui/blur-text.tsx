"use client"

import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface BlurTextProps {
  text: string
  delay?: number
  className?: string
  animateBy?: "words" | "letters"
  direction?: "top" | "bottom"
}

export function BlurText({
  text,
  delay = 150,
  className,
  animateBy = "words",
  direction = "top",
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("")
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current as Element)
        }
      },
      { threshold: 0.1 }
    )
    
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const fromAnimation = {
    filter: "blur(10px)",
    opacity: 0,
    y: direction === "top" ? -20 : 20,
  }

  const toAnimation = {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
  }

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap", className)}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          initial={fromAnimation}
          animate={inView ? toAnimation : fromAnimation}
          transition={{
            duration: 0.5,
            delay: (index * delay) / 1000,
            ease: "easeOut",
          }}
          style={{
            display: "inline-block",
          }}
        >
          {segment === " " ? "\u00A0" : segment}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </span>
  )
}