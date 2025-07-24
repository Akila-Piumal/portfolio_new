"use client"

import { useEffect, useRef, useState } from "react"

export function EnhancedMouseEffect() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isOverInteractive, setIsOverInteractive] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById("home")?.getBoundingClientRect()
      if (!rect) return

      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })

      // Check if mouse is over interactive elements
      const target = e.target as Element
      const isInteractive =
        target.matches('a, button, .button, [role="button"]') || target.closest('a, button, .button, [role="button"]')

      setIsOverInteractive(!!isInteractive)

      // Show effect when moving (but not over interactive elements)
      setIsMoving(true)

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // Hide effect after mouse stops moving for 500ms
      timeoutRef.current = setTimeout(() => {
        setIsMoving(false)
      }, 500)
    }

    const handleMouseLeave = () => {
      setIsMoving(false)
      setIsDragging(false)
      setIsOverInteractive(false)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }

    const handleMouseDown = () => {
      setIsDragging(true)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    // Add event listeners to the entire hero section
    const heroSection = document.getElementById("home")
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove)
      heroSection.addEventListener("mouseleave", handleMouseLeave)
      heroSection.addEventListener("mousedown", handleMouseDown)
      heroSection.addEventListener("mouseup", handleMouseUp)

      return () => {
        heroSection.removeEventListener("mousemove", handleMouseMove)
        heroSection.removeEventListener("mouseleave", handleMouseLeave)
        heroSection.removeEventListener("mousedown", handleMouseDown)
        heroSection.removeEventListener("mouseup", handleMouseUp)
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }
  }, [])

  // Only show effect when moving AND not over interactive elements
  const showEffect = isMoving && !isOverInteractive

  return (
    <div ref={containerRef} className="absolute inset-0 z-30 pointer-events-none">
      {showEffect && (
        <div
          className="absolute pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -50%)",
            opacity: showEffect ? 1 : 0,
          }}
        >
          {/* Outer ring */}
          <div
            className={`
              absolute rounded-full 
              ${isDragging ? "w-24 h-24 bg-[#e05d4f]/30 animate-ping" : "w-16 h-16 bg-[#e05d4f]/25"}
            `}
            style={{
              transform: "translate(-50%, -50%)",
              transition: "width 0.3s, height 0.3s, opacity 0.3s",
            }}
          />

          {/* Middle ring */}
          <div
            className={`
              absolute rounded-full 
              ${isDragging ? "w-16 h-16 bg-[#e05d4f]/40" : "w-10 h-10 bg-[#e05d4f]/35"}
            `}
            style={{
              transform: "translate(-50%, -50%)",
              transition: "width 0.3s, height 0.3s, opacity 0.3s",
            }}
          />

          {/* Inner dot */}
          <div
            className={`
              absolute rounded-full 
              ${isDragging ? "w-6 h-6 bg-[#e05d4f]/60" : "w-4 h-4 bg-[#e05d4f]/50"}
            `}
            style={{
              transform: "translate(-50%, -50%)",
              transition: "width 0.3s, height 0.3s, opacity 0.3s",
            }}
          />
        </div>
      )}
    </div>
  )
}
