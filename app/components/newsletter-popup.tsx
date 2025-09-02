"use client"

import React, { useState, useEffect } from "react"
import { X, Trophy, Star, Users, CheckCircle, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: ""
  })

  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate email
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address")
      return
    }
    
    // Clear error and show thank you
    setEmailError("")
    console.log("Newsletter signup:", formData)
    setShowThankYou(true)
    
    // Auto close after 3 seconds
    setTimeout(() => {
      setIsVisible(false)
      setShowThankYou(false)
    }, 3000)
  }

  const handleClose = () => {
    setIsVisible(false)
    setShowThankYou(false)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value })
    if (emailError) setEmailError("")
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop with blur */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-all duration-300"
        onClick={handleClose}
      />
      
      {/* Popup Container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className={cn(
          "bg-background border border-border rounded-xl shadow-2xl",
          "p-8 max-w-md w-full relative",
          "transform transition-all duration-300"
        )}>
          {/* Close Button */}
          <button
            onClick={handleClose}
            className={cn(
              "absolute top-4 right-4 p-2 rounded-lg",
              "hover:bg-muted transition-colors",
              "text-muted-foreground hover:text-foreground"
            )}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          {showThankYou ? (
            // Thank You Message
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Welcome to Volleyball Fraser Valley
              </h2>
              
              <p className="text-muted-foreground">
                You&apos;re all set! We&apos;ll send exclusive volleyball training content straight to your inbox.
              </p>
              
              <p className="text-sm text-muted-foreground mt-4">
                Closing in a moment...
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>

                {/* Headline */}
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Join our weekly VISION e-blast
                </h2>
                
                {/* Subheadline */}
                <p className="text-muted-foreground">
                  Get discounts, special offers, and notifications on upcoming special events!
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-primary" />
                  <span>Enjoy Member-Only Savings</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span>Be the First to Know About New Events</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Get Expert Tips on Training, Health, and Nutrition</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-card border border-border",
                      "text-foreground placeholder:text-muted-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                      "transition-all duration-200"
                    )}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-card border",
                      emailError ? "border-red-500" : "border-border",
                      "text-foreground placeholder:text-muted-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                      "transition-all duration-200"
                    )}
                  />
                  {emailError && (
                    <p className="text-xs text-red-500 mt-1">{emailError}</p>
                  )}
                </div>

                {/* Location Dropdown */}
                <div>
                  <Select
                    value={formData.location}
                    onValueChange={(value) => setFormData({ ...formData, location: value })}
                    required
                  >
                    <SelectTrigger className={cn(
                      "w-full !px-4 !py-3 rounded-lg !h-auto",
                      "bg-card border border-border",
                      "text-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                      "transition-all duration-200",
                      "flex items-center justify-between gap-2"
                    )}>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <SelectValue placeholder="Select your location" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border">
                      <SelectItem value="alberta">Alberta</SelectItem>
                      <SelectItem value="british-columbia">British Columbia</SelectItem>
                      <SelectItem value="manitoba">Manitoba</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="outside-canada">Outside Canada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button with shine effect */}
                <button
                  type="submit"
                  className={cn(
                    "w-full px-6 py-3 rounded-lg",
                    "bg-primary hover:bg-primary/90",
                    "text-black font-semibold text-sm",
                    "transition-all duration-300",
                    "hover:scale-[1.02] hover:shadow-lg",
                    "relative cursor-pointer overflow-hidden",
                    "before:absolute before:w-[0.4rem] before:h-[20rem]",
                    "before:top-0 before:translate-x-[-10rem]",
                    "hover:before:translate-x-[30rem]",
                    "before:duration-[0.8s] before:-skew-x-[10deg]",
                    "before:transition-all before:bg-white",
                    "before:blur-[10px] before:opacity-70"
                  )}
                >
                  Unlock exclusive savings and never miss an event!
                </button>
              </form>

              {/* Privacy Notice */}
              <p className="text-xs text-muted-foreground text-center mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  )
}