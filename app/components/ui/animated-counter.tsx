"use client";

import { useCountAnimation } from "@/app/hooks/useCountAnimation";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 2.5,
  delay = 0,
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const countRef = useCountAnimation({
    value,
    duration,
    delay,
    decimals,
  });

  return (
    <span className={cn("tabular-nums", className)}>
      <span ref={countRef}>0</span>
      {suffix}
    </span>
  );
}