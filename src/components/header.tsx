"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

const navItems = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "Lectures", href: "#lectures" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
      )}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={72}
              height={30}
              style={{
                height: "auto",
                width: "auto",
                maxHeight: "30px",
                objectFit: "contain",
              }}
              priority
            />
          </Link>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

