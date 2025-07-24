"use client"

import { useState } from "react"
import { Menu, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileNavigationProps {
  activeSection: string
  onNavClick: (sectionId: string) => void
}

export function MobileNavigation({ activeSection, onNavClick }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact me" },
  ]

  const handleNavClick = (sectionId: string) => {
    onNavClick(sectionId)
    setIsOpen(false) // Close menu after clicking
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="md:hidden bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          {/* Menu Panel - Full height with solid background */}
          <div className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-900 border-r shadow-lg flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-900 flex-shrink-0">
              <span className="font-bold text-lg text-gray-900 dark:text-white">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Social Links at Top */}
            <div className="p-4 border-b bg-white dark:bg-gray-900 flex-shrink-0">
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/akila-piumal-3b7040229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e05d4f] hover:text-[#c04a3e] transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Akila-Piuma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e05d4f] hover:text-[#c04a3e] transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/783223485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e05d4f] hover:text-[#c04a3e] transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Navigation Items - Takes remaining space */}
            <div className="flex-1 bg-white dark:bg-gray-900 p-4">
              <nav>
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          activeSection === item.id
                            ? "bg-[#e05d4f] text-white"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
