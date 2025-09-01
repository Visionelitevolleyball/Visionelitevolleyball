import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  role?: string
  avatar?: string
  initials?: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  rating?: number
  featured?: boolean
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  rating = 5,
  featured = false,
  className
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl",
        "bg-gradient-to-br from-white to-gray-50/80",
        "dark:from-gray-900/90 dark:to-gray-800/80",
        "border border-gray-200/60 dark:border-gray-700/40",
        "backdrop-blur-sm",
        "p-6 sm:p-8",
        "hover:border-primary/30 dark:hover:border-primary/40",
        "hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-primary/20",
        "hover:-translate-y-1",
        "transition-all duration-500",
        "min-w-[340px] max-w-[380px]",
        featured && "border-primary/20 dark:border-primary/30 shadow-xl shadow-primary/10",
        className
      )}
    >
      {/* Quote Icon - Decorative */}
      <Quote className={cn(
        "absolute top-6 right-6 h-8 w-8",
        "text-primary/20 dark:text-primary/30",
        "rotate-180"
      )} />
      
      {/* Rating Stars */}
      {rating > 0 && (
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4 transition-all duration-300",
                i < rating 
                  ? "fill-primary text-primary" 
                  : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
              )}
            />
          ))}
        </div>
      )}

      {/* Testimonial Text */}
      <blockquote className={cn(
        "text-sm sm:text-base leading-relaxed",
        "text-gray-700 dark:text-gray-300",
        "flex-1 mb-6",
        "relative z-10"
      )}>
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <Avatar className={cn(
          "h-12 w-12 ring-2 ring-white dark:ring-gray-800",
          "shadow-lg",
          featured && "ring-primary/20"
        )}>
          {author.avatar ? (
            <AvatarImage src={author.avatar} alt={author.name} />
          ) : (
            <AvatarFallback className={cn(
              "bg-gradient-to-br from-primary to-primary/80",
              "text-black font-semibold text-sm"
            )}>
              {author.initials || author.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          )}
        </Avatar>
        
        <div className="flex flex-col">
          <h3 className={cn(
            "font-semibold text-gray-900 dark:text-gray-100",
            "text-sm sm:text-base"
          )}>
            {author.name}
          </h3>
          {author.role && (
            <p className={cn(
              "text-xs sm:text-sm",
              "text-gray-500 dark:text-gray-400"
            )}>
              {author.role}
            </p>
          )}
        </div>
      </div>

      {/* Decorative gradient background effect */}
      <div className={cn(
        "absolute inset-0 rounded-2xl opacity-0",
        "bg-gradient-to-br from-primary/5 via-transparent to-secondary/5",
        "group-hover:opacity-100 transition-opacity duration-500",
        "pointer-events-none"
      )} />
    </div>
  )
}