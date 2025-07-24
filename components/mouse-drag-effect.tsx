"use client"

import { useEffect, useRef, useState } from "react"

interface DragTrail {
  id: number
  x: number
  y: number
  timestamp: number
}

export function MouseDragEffect() {
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dragTrails, setDragTrails] = useState<DragTrail[]>([])
  const trailIdRef = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let isMouseDown = false

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true
      setIsDragging(true)
    }

    const handleMouseUp = () => {
      isMouseDown = false
      setIsDragging(false)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setMousePosition({ x, y })

      if (!isMouseDown) return

      const newTrail: DragTrail = {
        id: trailIdRef.current++,
        x,
        y,
        timestamp: Date.now(),
      }

      setDragTrails((prev) => [...prev, newTrail])
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      isMouseDown = false
      setIsDragging(false)
      setIsHovering(false)
    }

    container.addEventListener("mousedown", handleMouseDown)
    container.addEventListener("mouseup", handleMouseUp)
    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    // Clean up old trails
    const cleanupInterval = setInterval(() => {
      const now = Date.now()
      setDragTrails((prev) => prev.filter((trail) => now - trail.timestamp < 1000))
    }, 50)

    return () => {
      container.removeEventListener("mousedown", handleMouseDown)
      container.removeEventListener("mouseup", handleMouseUp)
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      clearInterval(cleanupInterval)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-10 ${isDragging ? "cursor-grabbing" : isHovering ? "cursor-pointer" : ""}`}
      style={{ pointerEvents: "auto" }}
    >
      {/* Hover effect */}
      {isHovering && !isDragging && (
        <div
          className="absolute pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-20 h-20 rounded-full bg-[#e05d4f]/20 animate-pulse" />
          <div className="absolute w-10 h-10 rounded-full bg-[#e05d4f]/30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute w-5 h-5 rounded-full bg-[#e05d4f]/40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      )}

      {/* Drag trails */}
      {dragTrails.map((trail) => {
        const age = Date.now() - trail.timestamp
        const opacity = Math.max(0, 1 - age / 1000)
        const scale = Math.max(0.1, 1 - age / 1000)

        return (
          <div
            key={trail.id}
            className="absolute pointer-events-none"
            style={{
              left: trail.x,
              top: trail.y,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity,
              transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
            }}
          >
            {/* Ripple effect */}
            <div className="w-8 h-8 rounded-full bg-[#e05d4f]/30 animate-ping" />
            <div className="absolute inset-0 w-8 h-8 rounded-full bg-[#e05d4f]/20 animate-pulse" />

            {/* Particle effect */}
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#e05d4f] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        )
      })}

      {/* Drag cursor overlay */}
      {isDragging && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#e05d4f]/5 to-transparent pointer-events-none animate-pulse" />
      )}

      {/* Debug indicator */}
      {isHovering && (
        <div className="fixed top-4 right-4 bg-black text-white px-2 py-1 rounded text-xs z-50">Hover Active</div>
      )}
    </div>
  )
}
