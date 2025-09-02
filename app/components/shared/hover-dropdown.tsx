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
  sideOffset = 6,
  className,
  contentClassName,
}: HoverDropdownProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className={className}>
      <DropdownMenu 
        modal={false}
        open={open} 
        onOpenChange={setOpen}
      >
        <DropdownMenuTrigger asChild>
          <div>
            {trigger}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align={align}
          side={side}
          sideOffset={sideOffset}
          className={contentClassName}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          {content}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}