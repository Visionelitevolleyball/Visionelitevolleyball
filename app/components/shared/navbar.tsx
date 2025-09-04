"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, Phone, UserCircle, Award, ChevronDownIcon, Home, Calendar, Users, Star, Video, BookOpen, HelpCircle, Info, MapPin, Mail, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { AnimatedTagline } from "@/components/ui/animated-tagline"
import { HoverDropdown } from "@/app/components/shared/hover-dropdown"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import {
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { name: "Home", href: "/" },
  { 
    name: "Programs", 
    href: "/programs",
    subItems: [
      { name: "Program Overview", href: "/programs", icon: Home },
      { name: "Summer Camps", href: "/summercamps", icon: Calendar },
      { name: "Coach Bios", href: "/coaches", icon: Users },
      { name: "Reviews", href: "/programs/reviews", icon: Star },
    ]
  },
  { name: "Club", href: "/club" },
  { name: "Leagues", href: "/leagues" },
  { 
    name: "Resources", 
    href: "/resources",
    subItems: [
      { name: "Training Videos", href: "/resources/videos", icon: Video },
      { name: "Parent Guide", href: "/resources/parents", icon: BookOpen },
      { name: "FAQ", href: "/resources/faq", icon: HelpCircle },
    ]
  },
  { name: "Blog", href: "/blog" },
  { 
    name: "Contact Us", 
    href: "/contact",
    subItems: [
      { name: "About Us", href: "/about", icon: Info },
      { name: "Get in Touch", href: "/contact", icon: Mail },
      { name: "Location", href: "/contact#location", icon: MapPin },
      { name: "Join Our Team", href: "/careers", icon: Briefcase },
    ]
  }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navbar */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background border-b border-border hidden lg:block transition-all duration-300",
        isScrolled ? "h-[60px] overflow-hidden" : "overflow-visible"
      )}>
        <div className="max-w-[1600px] mx-auto px-5">
          <div className="flex items-stretch relative">
            {/* Logo - Vertically centered across both bars */}
            <div className={cn(
              "flex items-center pr-10 transition-all duration-300",
              isScrolled ? "opacity-0 -translate-x-10 pointer-events-none" : "opacity-100 translate-x-0"
            )}>
              <Image 
                src="/Volleyball-Fraser Valley.png" 
                alt="Volleyball Fraser Valley" 
                width={325} 
                height={106}
                className="object-contain"
                priority
              />
            </div>
            
            {/* Small Logo for scrolled state */}
            <div className={cn(
              "absolute left-0 flex items-center h-[60px] transition-all duration-300",
              isScrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"
            )}>
              <Image 
                src="/Volleyball-Fraser Valley.png" 
                alt="Volleyball Fraser Valley" 
                width={180} 
                height={60}
                className="object-contain"
                priority
              />
            </div>
            
            {/* Right side containing both bars */}
            <div className={cn(
              "flex-1 transition-all duration-300",
              isScrolled ? "ml-0 h-[60px] overflow-visible" : ""
            )}>
              {/* Top bar */}
              <div className={cn(
                "flex items-center justify-between transition-all duration-300",
                isScrolled ? "h-0 opacity-0 overflow-hidden pointer-events-none" : "h-20 opacity-100"
              )}>
                <AnimatedTagline className="ml-6" />
                <div className="flex items-center space-x-8">
                  <a href="tel:403-510-1784" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    <Phone className="h-5 w-5" />
                    <span className="text-[17.5px] font-medium">403-510-1784</span>
                  </a>
                  <Button className="relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black text-lg font-semibold px-8 h-12 transition-all duration-300 hover:scale-105 hover:shadow-sm cursor-pointer overflow-hidden before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[12rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-70">
                    <span className="relative">Register Today</span>
                  </Button>
                </div>
              </div>
              
              {/* Bottom navigation bar */}
              <div className={cn(
                "border-t transition-all duration-300 relative",
                isScrolled ? "border-transparent" : ""
              )}>
                <nav className={cn(
                  "flex items-center h-[60px] relative overflow-visible",
                  isScrolled ? "justify-between ml-[200px]" : "justify-between"
                )}>
                  {navItems.map((item) => (
                    item.subItems ? (
                      <HoverDropdown
                        key={item.name}
                        align={item.name === "Contact Us" ? "end" : "start"}
                        contentClassName="w-[240px]"
                        trigger={
                          <button
                            className={cn(
                              "inline-flex items-center justify-center gap-1 px-6 text-[17.5px] font-medium transition-all duration-200 focus:outline-none rounded-md cursor-pointer",
                              isScrolled ? "h-[48px]" : "h-[60px]",
                              "text-gray-700 dark:text-gray-300",
                              "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                            )}
                          >
                            <span>{item.name}</span>
                            <ChevronDownIcon className="h-[15px] w-[15px]" />
                          </button>
                        }
                        content={
                          <>
                            {item.subItems.map((subItem) => {
                              const Icon = subItem.icon
                              return (
                                <DropdownMenuItem asChild key={subItem.name}>
                                  <a
                                    href={subItem.href}
                                    className="group flex items-center gap-2.5 rounded-[6px] px-3 py-2.5 cursor-pointer"
                                  >
                                    <Icon className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-primary" />
                                    <span className="text-[15px] font-medium leading-none">{subItem.name}</span>
                                  </a>
                                </DropdownMenuItem>
                              )
                            })}
                          </>
                        }
                      />
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "inline-flex items-center justify-center px-6 text-[17.5px] font-medium transition-all duration-200 focus:outline-none rounded-md cursor-pointer",
                          isScrolled ? "h-[48px]" : "h-[60px]",
                          "text-gray-700 dark:text-gray-300",
                          "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                        )}
                      >
                        <span>{item.name}</span>
                      </a>
                    )
                  ))}
                  
                  {/* Theme Toggle */}
                  <div className={cn("flex items-center ml-4", isScrolled && "pointer-events-auto")}>
                    <ModeToggle />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background border-b border-border lg:hidden transition-all duration-300",
        isScrolled ? "h-16" : "h-20"
      )}>
        <div className={cn(
          "flex items-center justify-between px-5 transition-all duration-300",
          isScrolled ? "h-16" : "h-20"
        )}>
          {/* Logo */}
          <Image 
            src="/Volleyball-Fraser Valley.png" 
            alt="Volleyball Fraser Valley" 
            width={isScrolled ? 180 : 225} 
            height={isScrolled ? 50 : 63}
            className="object-contain transition-all duration-300"
            priority
          />

          {/* Right side with phone and menu */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:403-510-1784" 
              className="hidden sm:flex items-center justify-center p-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Call us"
            >
              <Phone className="h-6 w-6" />
            </a>
            
            <Button 
              size="sm" 
              className="hidden sm:inline-flex relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black text-lg font-semibold px-4 h-11 transition-all duration-300 hover:scale-105 hover:shadow-sm cursor-pointer overflow-hidden before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-8rem] hover:before:translate-x-[10rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-70"
            >
              <span className="relative">Register</span>
            </Button>

            {/* Theme Toggle for Mobile */}
            <ModeToggle />

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-12 w-12"
                  aria-label="Open menu"
                >
                  <Menu className="h-[30px] w-[30px]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-0">
                {/* Sheet Header with Menu title for accessibility */}
                <SheetHeader className="px-6 pt-12 pb-4 border-b">
                  <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                </SheetHeader>

                {/* Navigation Items */}
                <nav className="flex flex-col h-[calc(100vh-4.5rem)]">
                  <div className="flex-1 overflow-y-auto">
                    {navItems.map((item) => (
                      <div key={item.name} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                        {item.subItems ? (
                          <Accordion type="single" collapsible>
                            <AccordionItem value={item.name} className="border-0">
                              <AccordionTrigger className="px-6 py-3.5 text-base font-medium hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-800 data-[state=open]:bg-gray-50 dark:data-[state=open]:bg-gray-800">
                                <span className="text-left">{item.name}</span>
                              </AccordionTrigger>
                              <AccordionContent className="pb-2">
                                <div className="space-y-1">
                                  {item.subItems.map((subItem) => {
                                    const Icon = subItem.icon
                                    return (
                                      <a
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="flex items-center gap-2.5 px-6 py-3 pl-12 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                      >
                                        <Icon className="h-4 w-4" />
                                        <span>{subItem.name}</span>
                                      </a>
                                    )
                                  })}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <a 
                            href={item.href} 
                            className="block px-6 py-3.5 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            {item.name}
                          </a>
                        )}
                      </div>
                    ))}
                    
                    {/* Spacer to push account links to bottom */}
                    <div className="flex-grow" />

                    {/* Account Links */}
                    <div className="space-y-0 px-6 pb-4">
                      <a 
                        href="/login" 
                        className="flex items-center gap-3 py-3.5 text-base font-medium hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        <UserCircle className="h-5 w-5" />
                        <span>Login/Sign up</span>
                      </a>
                      <a 
                        href="/affiliate" 
                        className="flex items-center gap-3 py-3.5 text-base font-medium hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        <Award className="h-5 w-5" />
                        <span>Affiliate Program</span>
                      </a>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="border-t bg-secondary/10 dark:bg-secondary/20 p-6 space-y-4">
                    <a 
                      href="tel:403-510-1784" 
                      className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <Phone className="h-6 w-6" />
                      <span className="text-lg font-medium">403-510-1784</span>
                    </a>
                    <Button className="w-full relative bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90 text-black font-semibold h-14 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-sm cursor-pointer overflow-hidden before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[25rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-70">
                      <span className="relative">Register Today</span>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}