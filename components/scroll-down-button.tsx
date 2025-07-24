"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export function ScrollDownButton() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide the button when user scrolls past the hero section
      const heroSection = document.getElementById("home")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight

        // Hide button when scrolled past hero section
        setIsVisible(scrollPosition <= heroBottom + 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  if (!isVisible) return null

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <button
        onClick={scrollToAbout}
        className="flex flex-col items-center text-muted-foreground hover:text-[#e05d4f] transition-colors duration-300 group"
        aria-label="Scroll to About section"
      >
        <div className="w-6 h-6 rounded-full border border-[#e05d4f] flex items-center justify-center mb-2 group-hover:bg-[#e05d4f] group-hover:border-[#e05d4f] transition-all duration-300 animate-bounce">
          <ArrowDown className="h-3 w-3 text-[#e05d4f] group-hover:text-white transition-colors duration-300" />
        </div>
        <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">Scroll Down</span>
      </button>
    </div>
  )
}
