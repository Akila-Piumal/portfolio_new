"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArrowUpRight, Github, Pause, Play } from "lucide-react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

// Define the project type
type Project = {
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl: string
  demoUrl: string
}

// Sample projects data
const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce application with product catalog, cart functionality, and payment processing.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/nuha/ecommerce",
    demoUrl: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, task assignment, and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/nuha/task-manager",
    demoUrl: "https://task-manager-demo.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current conditions and forecasts based on location.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "OpenWeather API", "Chart.js"],
    githubUrl: "https://github.com/nuha/weather-app",
    demoUrl: "https://weather-app-demo.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills (this website).",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/nuha/portfolio",
    demoUrl: "#",
  },
  {
    title: "Recipe Finder",
    description: "An application that helps users find recipes based on available ingredients.",
    image:
      "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Spoonacular API", "CSS Modules"],
    githubUrl: "https://github.com/nuha/recipe-finder",
    demoUrl: "https://recipe-finder-demo.com",
  },
]

export function ProjectCarousel() {
  const [isMounted, setIsMounted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Create a ref for the autoplay plugin
  const autoplayRef = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  )

  // Toggle autoplay pause/play
  const toggleAutoplay = useCallback(() => {
    if (isPaused) {
      autoplayRef.current.play()
      setIsPaused(false)
    } else {
      autoplayRef.current.stop()
      setIsPaused(true)
    }
  }, [isPaused])

  // Handle client-side mounting to prevent hydration errors
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplayRef.current]}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  techStack={project.techStack}
                  githubUrl={project.githubUrl}
                  demoUrl={project.demoUrl}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8 gap-2 items-center">
          <CarouselPrevious className="static translate-y-0 mr-2 bg-white/90 hover:bg-white border-gray-200 text-gray-700 dark:bg-white/20 dark:hover:bg-white/40 dark:border-white/10 dark:text-white" />
          <Button
            variant="outline"
            size="icon"
            onClick={toggleAutoplay}
            className="h-8 w-8 rounded-full bg-white/90 hover:bg-white border-gray-200 text-gray-700 dark:bg-white/20 dark:hover:bg-white/40 dark:border-white/10 dark:text-white"
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </Button>
          <CarouselNext className="static translate-y-0 ml-2 bg-white/90 hover:bg-white border-gray-200 text-gray-700 dark:bg-white/20 dark:hover:bg-white/40 dark:border-white/10 dark:text-white" />
        </div>
      </Carousel>
    </div>
  )
}

function ProjectCard({ title, description, image, techStack, githubUrl, demoUrl }: Project) {
  return (
    <Card className="overflow-hidden h-full flex flex-col border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 dark:bg-white/10 dark:text-white group">
      <div className="aspect-video w-full overflow-hidden relative">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          width={400}
          height={225}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-gray-900 dark:text-white group-hover:text-[#e05d4f] transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-white/80 line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-3">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/20 dark:text-white dark:hover:bg-white/30 transition-colors duration-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="bg-white/80 hover:bg-white border-gray-200 text-gray-700 hover:text-gray-900 dark:bg-white/20 dark:hover:bg-white/30 dark:border-white/10 dark:text-white transition-all duration-200 hover:scale-105"
        >
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button
          size="sm"
          asChild
          className="bg-[#e05d4f] text-white hover:bg-[#c04a3e] transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
        >
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ArrowUpRight className="mr-2 h-4 w-4" />
            Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
