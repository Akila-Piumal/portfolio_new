"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // When mounted on client, add a class to disable transitions during initial render
  useEffect(() => {
    const body = document.body
    body.classList.add("no-transition")

    // Remove the class after a short delay to allow the initial theme to be applied
    const timeoutId = setTimeout(() => {
      setMounted(true)
      body.classList.remove("no-transition")
    }, 50)

    return () => clearTimeout(timeoutId)
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
