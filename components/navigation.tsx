"use client"

import { useEffect, useState } from "react"
import { MobileNavigation } from "./mobile-navigation"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact me" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`text-sm font-medium transition-colors hover:text-[#e05d4f] ${
              activeSection === item.id ? "text-[#e05d4f]" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    
      {/* Mobile Navigation - only show the button on mobile */}
      <div className="md:hidden">
        <MobileNavigation activeSection={activeSection} onNavClick={handleNavClick} />
      </div>
    </>
  )
}
