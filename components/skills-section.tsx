"use client"

import type React from "react"
import { SectionHeader } from "@/components/section-header"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Code, Cloud, Smartphone, TestTube, Server, ImageIcon, Database, Paintbrush } from "lucide-react"

type Skill = {
  name: string
  percentage: number
}

type SkillCategory = {
  id: string
  title: string
  icon: React.ReactNode
  years: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Code className="h-6 w-6 text-[#e05d4f]" />,
    years: "More than 4 years",
    skills: [
      { name: "HTML", percentage: 90 },
      { name: "CSS", percentage: 85 },
      { name: "JavaScript", percentage: 90 },
      { name: "Angular", percentage: 80 },
      { name: "React", percentage: 75 },
      { name: "Next.js", percentage: 75 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Services",
    icon: <Cloud className="h-6 w-6 text-[#e05d4f]" />,
    years: "More than 2 years",
    skills: [
      { name: "AWS", percentage: 70 },
      { name: "Azure", percentage: 65 },
      { name: "Google Cloud", percentage: 60 },
      { name: "Serverless", percentage: 75 },
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    icon: <Smartphone className="h-6 w-6 text-[#e05d4f]" />,
    years: "More than 3 years",
    skills: [
      { name: "Ionic", percentage: 85 },
      { name: "React Native", percentage: 80 },
      { name: "Flutter", percentage: 65 },
      { name: "iOS", percentage: 60 },
      { name: "Android", percentage: 60 },
    ],
  },
  // {
  //   id: "testing",
  //   title: "Testing / Automation",
  //   icon: <TestTube className="h-6 w-6 text-[#e05d4f]" />,
  //   years: "More than 1 years",
  //   skills: [
  //     { name: "Jest", percentage: 75 },
  //     { name: "Cypress", percentage: 70 },
  //     { name: "Selenium", percentage: 65 },
  //     { name: "CI/CD", percentage: 80 },
  //   ],
  // },
  {
    id: "backend",
    title: "Backend Development",
    icon: <Server className="h-6 w-6 text-[#e05d4f]" />,
    years: "More than 4 years",
    skills: [
      { name: "Spring Boot", percentage: 85 },
      { name: "Node.js", percentage: 85 },
      { name: "Express", percentage: 85 },
      { name: "Java", percentage: 85 },
      { name: "Python", percentage: 75 },
    ],
  },
  // {
  //   id: "image",
  //   title: "Image Processing",
  //   icon: <ImageIcon className="h-6 w-6 text-[#e05d4f]" />,
  //   years: "More than 1 years",
  //   skills: [
  //     { name: "OpenCV", percentage: 60 },
  //     { name: "TensorFlow", percentage: 55 },
  //     { name: "PIL", percentage: 70 },
  //   ],
  // },
  {
    id: "database",
    title: "Databases",
    icon: <Database className="h-6 w-6 text-[#e05d4f]" />,
    years: "More than 3 years",
    skills: [
      { name: "MySQL", percentage: 85 },
      { name: "MongoDB", percentage: 80 },
      { name: "PostgreSQL", percentage: 80 },
      { name: "Firebase", percentage: 70 },
    ],
  },
  {
    id: "design",
    title: "Designing",
    icon: <Paintbrush className="h-6 w-6 text-[#e05d4f]" />,
    years: "More than 2 years",
    skills: [
      { name: "Figma", percentage: 80 },
      { name: "Adobe XD", percentage: 70 },
      { name: "Photoshop", percentage: 65 },
      { name: "Illustrator", percentage: 60 },
    ],
  },
]

export function SkillsSection() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({})

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  return (
    <section id="skills" className="py-20">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
          <SectionHeader title="Skills" subtitle="My technical level" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="border rounded-lg overflow-hidden"
              style={{ height: openCategories[category.id] ? "auto" : "fit-content" }}
            >
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center gap-4">
                  {category.icon}
                  <div>
                    <h3 className="font-medium">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.years}</p>
                  </div>
                </div>
                <button className="text-[#e05d4f]" aria-label={openCategories[category.id] ? "Collapse" : "Expand"}>
                  {openCategories[category.id] ? <ChevronUp /> : <ChevronDown />}
                </button>
              </div>

              {openCategories[category.id] && (
                <div className="p-4 pt-0 space-y-4 border-t">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.percentage}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#e05d4f] rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
