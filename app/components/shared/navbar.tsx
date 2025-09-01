"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, Phone, UserCircle, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { AnimatedTagline } from "@/components/ui/animated-tagline"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { 
    name: "Programs", 
    href: "/programs",
    subItems: [
      { name: "Program Overview", href: "/programs", description: "Explore all our volleyball programs" },
      { name: "Summer Camps", href: "/programs/camps", description: "Fun-filled summer training sessions" },
      { name: "Coach Bios", href: "/programs/coaches", description: "Meet our experienced coaching team" },
      { name: "Reviews", href: "/programs/reviews", description: "What parents and athletes are saying" },
    ]
  },
  { name: "Club", href: "/club" },
  { name: "Leagues", href: "/leagues" },
  { 
    name: "Resources", 
    href: "/resources",
    subItems: [
      { name: "Training Videos", href: "/resources/videos", description: "Learn from the best" },
      { name: "Parent Guide", href: "/resources/parents", description: "Support your athlete" },
      { name: "FAQ", href: "/resources/faq", description: "Get your questions answered" },
    ]
  },
  { 
    name: "Contact Us", 
    href: "/contact",
    subItems: [
      { name: "About Us", href: "/about", description: "Learn about our mission and values" },
      { name: "Get in Touch", href: "/contact", description: "Send us a message" },
      { name: "Location", href: "/contact#location", description: "Find our training facilities" },
      { name: "Join Our Team", href: "/careers", description: "Coaching opportunities" },
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
        isScrolled ? "h-[60px]" : ""
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
              isScrolled ? "ml-0" : ""
            )}>
              {/* Top bar */}
              <div className={cn(
                "flex items-center justify-between transition-all duration-300",
                isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-20 opacity-100"
              )}>
                <AnimatedTagline className="ml-6" />
                <div className="flex items-center space-x-8">
                  <a href="tel:403-510-1784" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    <Phone className="h-5 w-5" />
                    <span className="text-[17.5px] font-medium">403-510-1784</span>
                  </a>
                  <Button className="relative bg-primary hover:bg-primary/90 text-black text-lg font-semibold px-8 h-12 transition-all duration-300 hover:scale-105 hover:shadow-sm cursor-pointer overflow-hidden before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[12rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-70">
                    <span className="relative">Register Today</span>
                  </Button>
                </div>
              </div>
              
              {/* Bottom navigation bar */}
              <div className={cn(
                "border-t transition-all duration-300",
                isScrolled ? "border-transparent" : ""
              )}>
                <nav className={cn(
                  "flex items-center h-[60px]",
                  isScrolled ? "justify-center ml-[200px]" : "justify-between"
                )}>
                  {navItems.map((item) => (
                    item.subItems ? (
                      <NavigationMenu key={item.name} viewport={item.name === "Contact Us" ? false : true}>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger className={cn(
                              "inline-flex h-[60px] items-center justify-center transition-all duration-200 text-[17.5px] font-medium px-6 rounded-md cursor-pointer",
                              "text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-secondary dark:hover:bg-primary/20 dark:hover:text-primary",
                              "data-[state=open]:text-secondary dark:data-[state=open]:text-primary"
                            )}>
                              <span>{item.name}</span>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent
                              {...(item.name === "Contact Us" ? { align: "end" } : {})}
                              className={item.name === "Contact Us" ? "left-auto right-0 max-w-[calc(100vw-20px)]" : undefined}
                            >
                              <ul
                                className={cn(
                                  "grid gap-3 p-5",
                                  item.name === "Contact Us"
                                    ? "w-[min(500px,calc(100vw-20px))]"
                                    : "w-[500px]"
                                )}
                              >
                                {item.subItems.map((subItem) => (
                                  <li key={subItem.name}>
                                    <NavigationMenuLink asChild>
                                      <a
                                        href={subItem.href}
                                        className="group/item block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                      >
                                        <div className="text-base font-medium leading-none">{subItem.name}</div>
                                        <p className={cn(
                                          "line-clamp-2 text-base leading-snug text-muted-foreground group-hover/item:!text-accent-foreground group-focus/item:!text-accent-foreground",
                                          item.name === "Contact Us" && "!text-muted-foreground"
                                        )}>
                                          {subItem.description}
                                        </p>
                                      </a>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "inline-flex h-[60px] items-center justify-center px-6 text-[17.5px] font-medium transition-all duration-200 focus:outline-none rounded-md",
                          "text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-secondary dark:hover:bg-primary/20 dark:hover:text-primary"
                        )}
                      >
                        <span>{item.name}</span>
                      </a>
                    )
                  ))}
                  
                  {/* Theme Toggle */}
                  <div className="flex items-center ml-4">
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
              className="hidden sm:inline-flex relative bg-primary hover:bg-primary/90 text-black text-lg font-semibold px-4 h-11 transition-all duration-300 hover:scale-105 hover:shadow-sm cursor-pointer overflow-hidden before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-8rem] hover:before:translate-x-[10rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-70"
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
                {/* Sheet Header with Menu title - simplified */}
                <div className="px-6 pt-12 pb-4 border-b">
                  <h2 className="text-2xl font-bold">Menu</h2>
                </div>

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
                                  {item.subItems.map((subItem) => (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block px-6 py-3 pl-12 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                    >
                                      {subItem.name}
                                    </a>
                                  ))}
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
                    
                    {/* Divider */}
                    <div className="my-4 border-t border-gray-200 dark:border-gray-700" />

                    {/* Account Links */}
                    <div className="space-y-0 px-6">
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
                  <div className="border-t bg-gray-50 dark:bg-gray-900 p-6 space-y-4">
                    <a 
                      href="tel:403-510-1784" 
                      className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <Phone className="h-6 w-6" />
                      <span className="text-lg font-medium">403-510-1784</span>
                    </a>
                    <Button className="w-full relative bg-primary hover:bg-primary/90 text-black font-semibold h-14 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-sm cursor-pointer overflow-hidden before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-10rem] hover:before:translate-x-[25rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-70">
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