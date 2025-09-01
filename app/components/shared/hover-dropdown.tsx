"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface HoverDropdownProps {
  trigger: React.ReactNode
  content: React.ReactNode
  align?: "start" | "center" | "end"
  side?: "top" | "right" | "bottom" | "left"
  sideOffset?: number
  className?: string
  contentClassName?: string
}

export function HoverDropdown({
  trigger,
  content,
  align = "start",
  side = "bottom",
  sideOffset = 6, // Back to original gap
  className,
  contentClassName,
}: HoverDropdownProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div 
      onMouseLeave={() => setOpen(false)}
      className={className}
    >
      <DropdownMenu 
        modal={false}
        open={open} 
        onOpenChange={setOpen}
      >
        <DropdownMenuTrigger 
          asChild
          onMouseEnter={() => setOpen(true)}
        >
          <div>
            {trigger}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align={align}
          side={side}
          sideOffset={sideOffset}
          className={cn(
            contentClassName,
            // Invisible bridge to cover gap
            "before:absolute before:h-[10px] before:w-full before:top-[-10px] before:content-[''] before:z-50"
          )}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          {content}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}