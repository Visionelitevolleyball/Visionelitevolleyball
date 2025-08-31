"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
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
  SheetHeader,
  SheetTitle,
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
                "flex items-center justify-end transition-all duration-300",
                isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-20 opacity-100"
              )}>
                <div className="flex items-center space-x-8">
                  <a href="tel:403-510-1784" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    <Phone className="h-5 w-5" />
                    <span className="text-[17.5px] font-medium">403-510-1784</span>
                  </a>
                  <Button className="relative bg-primary hover:bg-primary/90 text-black text-lg font-semibold px-8 h-12 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 cursor-pointer overflow-hidden before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-5rem] hover:before:translate-x-[5rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-70">
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
                              "inline-flex h-[60px] items-center justify-center transition-all duration-200 text-[17.5px] font-medium px-6 rounded-md",
                              "text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-secondary dark:hover:bg-primary/20 dark:hover:text-primary",
                              "data-[state=open]:bg-primary/10 data-[state=open]:text-secondary dark:data-[state=open]:bg-primary/20 dark:data-[state=open]:text-primary"
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
                                        className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                      >
                                        <div className="text-base font-medium leading-none">{subItem.name}</div>
                                        <p className="line-clamp-2 text-base leading-snug text-muted-foreground">
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
              className="hidden sm:inline-flex relative bg-primary hover:bg-primary/90 text-black text-lg font-semibold px-4 h-11 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 cursor-pointer overflow-hidden before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-5rem] hover:before:translate-x-[5rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-70"
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
                {/* Sheet Header */}
                <div className="p-8 pb-5 border-b">
                  <SheetHeader>
                    <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                  </SheetHeader>
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col h-[calc(100vh-6rem)]">
                  <div className="flex-1 overflow-y-auto py-5">
                    {navItems.map((item) => (
                      <div key={item.name} className="border-b border-gray-100 last:border-0">
                        {item.subItems ? (
                          <Accordion type="single" collapsible>
                            <AccordionItem value={item.name} className="border-0">
                              <AccordionTrigger className="px-8 py-5 text-lg font-medium hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-800 data-[state=open]:bg-gray-50 dark:data-[state=open]:bg-gray-800">
                                <span className="text-left">{item.name}</span>
                              </AccordionTrigger>
                              <AccordionContent className="pb-5">
                                <div className="space-y-1">
                                  {item.subItems.map((subItem) => (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block px-8 py-4 pl-12 text-base text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
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
                            className="block px-8 py-5 text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            {item.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Section */}
                  <div className="border-t bg-gray-50 dark:bg-gray-900 p-8 space-y-5">
                    <a 
                      href="tel:403-510-1784" 
                      className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <Phone className="h-6 w-6" />
                      <span className="text-lg font-medium">403-510-1784</span>
                    </a>
                    <Button className="w-full relative bg-primary hover:bg-primary/90 text-black font-semibold h-14 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 cursor-pointer overflow-hidden before:absolute before:w-[0.4rem] before:h-[20rem] before:top-0 before:translate-x-[-5rem] hover:before:translate-x-[15rem] before:duration-[0.8s] before:-skew-x-[10deg] before:transition-all before:bg-white before:blur-[10px] before:opacity-70">
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