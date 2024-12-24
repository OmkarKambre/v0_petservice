'use client'
import { useState } from 'react'
import { PawPrint, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between">
        <a onClick={() => handleNavigation('/')} className="flex items-center space-x-2 cursor-pointer">
          <PawPrint className="h-6 w-6 text-purple-400" />
          <span className="text-xl font-bold">PawPerfect</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <a onClick={() => handleNavigation('/')} className="text-sm font-medium hover:text-purple-400 transition-colors cursor-pointer">
            Home
          </a>
          <a onClick={() => handleNavigation('/services')} className="text-sm font-medium hover:text-purple-400 transition-colors cursor-pointer">
            Services
          </a>
          <a onClick={() => handleNavigation('/about')} className="text-sm font-medium hover:text-purple-400 transition-colors cursor-pointer">
            About
          </a>
          <a onClick={() => handleNavigation('/contact')} className="text-sm font-medium hover:text-purple-400 transition-colors cursor-pointer">
            Contact
          </a>
          <a onClick={() => handleNavigation('/book')} className="cursor-pointer">
            <Button variant="secondary" className="bg-purple-600 hover:bg-purple-700 transition-colors">
              Book Now
            </Button>
          </a>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="p-0 md:hidden" onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black border-l border-purple-800">
            <nav className="flex flex-col space-y-4">
              <a onClick={() => handleNavigation('/')} className="text-lg font-medium hover:text-purple-400 transition-colors cursor-pointer">
                Home
              </a>
              <a onClick={() => handleNavigation('/services')} className="text-lg font-medium hover:text-purple-400 transition-colors cursor-pointer">
                Services
              </a>
              <a onClick={() => handleNavigation('/about')} className="text-lg font-medium hover:text-purple-400 transition-colors cursor-pointer">
                About
              </a>
              <a onClick={() => handleNavigation('/contact')} className="text-lg font-medium hover:text-purple-400 transition-colors cursor-pointer">
                Contact
              </a>
              <a onClick={() => handleNavigation('/book')} className="cursor-pointer">
                <Button variant="secondary" className="w-full bg-purple-600 hover:bg-purple-700 transition-colors">
                  Book Now
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

