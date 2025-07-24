"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Calendar, Award, Code, Heart } from "lucide-react"

interface AboutModalProps {
  children: React.ReactNode
}

export function AboutModal({ children }: AboutModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const achievements = [
    "Completed 10+ web development projects",
    "Contributed to 3 open-source projects",
    "Mentored 5 junior developers",
    "Led a team of 4 developers on a major project",
  ]

  const interests = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Open Source",
    "Machine Learning",
    "Photography",
    "Hiking",
    "Cooking",
  ]

  const personalInfo = [
    { icon: <MapPin className="h-4 w-4" />, label: "Home", value: "Mathugama, Sri Lanka" },
    { icon: <Calendar className="h-4 w-4" />, label: "Age", value: "26 years old" },
    { icon: <Code className="h-4 w-4" />, label: "Experience", value: "4+ years" },
    { icon: <Award className="h-4 w-4" />, label: "Projects", value: "10+ completed" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">More About Me</DialogTitle>
        </DialogHeader>

        <div className="space-y-8 py-4">
          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Heart className="h-5 w-5 text-[#e05d4f]" />
                Personal Information
              </h3>
              <div className="space-y-3">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="text-[#e05d4f]">{info.icon}</div>
                    <div>
                      <span className="font-medium">{info.label}:</span>
                      <span className="ml-2 text-muted-foreground">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Award className="h-5 w-5 text-[#e05d4f]" />
                Key Achievements
              </h3>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#e05d4f] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Detailed Story */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">My Journey</h3>
            <div className="prose prose-sm max-w-none space-y-4 text-muted-foreground">
              <p>
                My journey into software development began during my university years at IJSE, where I discovered my
                passion for creating digital solutions that solve real-world problems. What started as curiosity about
                how websites work evolved into a deep love for crafting user experiences and building robust
                applications.
              </p>
              <p>
                Throughout my career, I've had the opportunity to work on diverse projects ranging from e-commerce
                platforms to mobile applications. Each project has taught me something new and reinforced my belief that
                technology should be accessible, intuitive, and meaningful.
              </p>
              <p>
                I'm particularly passionate about frontend development because it sits at the intersection of technology
                and human experience. There's something magical about transforming an idea into a beautiful, functional
                interface that users can interact with seamlessly.
              </p>
              <p>
                When I'm not coding, I enjoy exploring Sri Lanka's beautiful landscapes through hiking, experimenting
                with new recipes (I make a mean kottu!), and contributing to open-source projects. I believe in
                continuous learning and am always excited to take on new challenges that push me out of my comfort zone.
              </p>
            </div>
          </div>

          {/* Interests & Hobbies */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Interests & Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-[#e05d4f]/10 text-[#e05d4f] hover:bg-[#e05d4f]/20 transition-colors"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Fun Facts About Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">🎯 Goal-Oriented</h4>
                <p className="text-sm text-muted-foreground">
                  I set monthly coding challenges for myself and have completed over 200 coding problems this year.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">🌱 Always Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Currently learning Three.js and exploring the world of 3D web development.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">🎨 Creative Side</h4>
                <p className="text-sm text-muted-foreground">
                  I design my own UI mockups in Figma before starting any project - design thinking is crucial!
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-medium mb-2">🤝 Community Focused</h4>
                <p className="text-sm text-muted-foreground">
                  Active member of the local developer community and regular attendee of tech meetups in Colombo.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-6 border-t">
            <p className="text-muted-foreground mb-4">
              Interested in working together or just want to chat about tech?
            </p>
            <Button
              onClick={() => {
                setIsOpen(false)
                // Scroll to contact section
                setTimeout(() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }, 100)
              }}
              className="bg-[#e05d4f] hover:bg-[#c04a3e] text-white"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
