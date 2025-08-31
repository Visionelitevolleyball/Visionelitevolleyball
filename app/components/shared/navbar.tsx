"use client"

import Image from "next/image"
import { Menu, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
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
  },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" }
]

export function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-50 shadow-md hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-stretch">
            {/* Logo - Vertically centered across both bars */}
            <div className="flex items-center pr-8">
              <Image 
                src="/Volleyball-Fraser Valley.png" 
                alt="Volleyball Fraser Valley" 
                width={260} 
                height={85}
                className="object-contain"
                priority
              />
            </div>
            
            {/* Right side containing both bars */}
            <div className="flex-1">
              {/* Top bar */}
              <div className="flex items-center justify-end h-16">
                <div className="flex items-center space-x-6">
                  <a href="tel:403-510-1784" className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">403-510-1784</span>
                  </a>
                  <Button className="bg-primary hover:bg-primary/90 text-black font-semibold px-6">
                    Start Today
                  </Button>
                </div>
              </div>
              
              {/* Bottom navigation bar */}
              <div className="border-t">
                <nav className="flex items-center justify-between h-12">
                  {navItems.map((item) => (
                    item.subItems ? (
                      <NavigationMenu key={item.name}>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger className={cn(
                              "inline-flex h-12 items-center justify-center transition-all text-sm font-medium px-5",
                              "text-gray-700 hover:text-primary bg-transparent hover:bg-transparent data-[state=open]:bg-transparent"
                            )}>
                              <span>{item.name}</span>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid w-[400px] gap-3 p-4">
                                {item.subItems.map((subItem) => (
                                  <li key={subItem.name}>
                                    <NavigationMenuLink asChild>
                                      <a
                                        href={subItem.href}
                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                      >
                                        <div className="text-sm font-medium leading-none">{subItem.name}</div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
                          "inline-flex h-12 items-center justify-center px-5 text-sm font-medium transition-colors focus:outline-none",
                          "text-gray-700 hover:text-primary hover:bg-gray-100/50"
                        )}
                      >
                        <span>{item.name}</span>
                      </a>
                    )
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md lg:hidden">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Image 
            src="/Volleyball-Fraser Valley.png" 
            alt="Volleyball Fraser Valley" 
            width={180} 
            height={50}
            className="object-contain"
            priority
          />

          {/* Right side with phone and menu */}
          <div className="flex items-center gap-2">
            <a 
              href="tel:403-510-1784" 
              className="hidden sm:flex items-center justify-center p-2 text-gray-700 hover:text-primary transition-colors"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            
            <Button 
              size="sm" 
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-black font-semibold px-3 h-9"
            >
              Register
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-0">
                {/* Sheet Header */}
                <div className="p-6 pb-4 border-b">
                  <SheetHeader>
                    <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
                  </SheetHeader>
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col h-[calc(100vh-5rem)]">
                  <div className="flex-1 overflow-y-auto py-4">
                    {navItems.map((item) => (
                      <div key={item.name} className="border-b border-gray-100 last:border-0">
                        {item.subItems ? (
                          <Accordion type="single" collapsible>
                            <AccordionItem value={item.name} className="border-0">
                              <AccordionTrigger className="px-6 py-4 text-base font-medium hover:no-underline hover:bg-gray-50 data-[state=open]:bg-gray-50">
                                <span className="text-left">{item.name}</span>
                              </AccordionTrigger>
                              <AccordionContent className="pb-4">
                                <div className="space-y-1">
                                  {item.subItems.map((subItem) => (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block px-6 py-3 pl-10 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
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
                            className="block px-6 py-4 text-base font-medium hover:bg-gray-50 transition-colors"
                          >
                            {item.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Section */}
                  <div className="border-t bg-gray-50 p-6 space-y-4">
                    <a 
                      href="tel:403-510-1784" 
                      className="flex items-center justify-center space-x-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-medium">403-510-1784</span>
                    </a>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold h-12 text-base">
                      Start Today
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