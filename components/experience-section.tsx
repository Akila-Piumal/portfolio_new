"use client"

import { useState } from "react"
import { GraduationCap, Briefcase, Calendar } from "lucide-react"

type ExperienceItem = {
  title: string
  institution: string
  location: string
  period: string
  description?: string
}

const educationData: ExperienceItem[] = [
  {
    title: "Software Engineering",
    institution: "IJSE | Institute of Software Engineering",
    location: "Panadura, Sri Lanka",
    period: "2020 - 2023",
    description: "Diploma in Software Engineering with focus on web development and software architecture.",
  },
  {
    title: "Higher Studies",
    institution: "C.W.W. Kannangara Central College",
    location: "Mathugama, Sri Lanka",
    period: "2015 - 2018",
    description: "Completed Advanced Level education in Maths Stream.",
  },
]

const workData: ExperienceItem[] = [
  {
    title: "Associate Software Engineer",
    institution: "Yoors",
    location: "Colombo, Sri Lanka",
    period: "2024 - Present",
    description:
      "Developing web and mobile applications using Angular, Ionic and React. Working on both frontend and backend development.",
  },
  {
    title: "Software Engineering Intern",
    institution: "Yoors",
    location: "Colombo, Sri Lanka",
    period: "2023 - 2024",
    description:
      "Gained hands-on experience in full-stack development and agile methodologies during university internship.",
  },
]

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"education" | "work">("work")

  const currentData = activeTab === "education" ? educationData : workData

  return (
    <div className="py-16">
      <div className="container max-w-4xl mx-auto">
        {/* Tab Headers */}
        <div className="flex justify-center gap-12 mb-12">
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-3 text-lg font-medium transition-colors ${
              activeTab === "education" ? "text-[#e05d4f]" : "text-muted-foreground hover:text-[#e05d4f]"
            }`}
          >
            <GraduationCap className="h-6 w-6" />
            Education
          </button>
          <button
            onClick={() => setActiveTab("work")}
            className={`flex items-center gap-3 text-lg font-medium transition-colors ${
              activeTab === "work" ? "text-[#e05d4f]" : "text-muted-foreground hover:text-[#e05d4f]"
            }`}
          >
            <Briefcase className="h-6 w-6" />
            Work
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {currentData.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 bg-[#e05d4f] rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-card border rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-medium mb-1">{item.institution}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.location}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      {item.period}
                    </div>

                    {item.description && <p className="text-muted-foreground leading-relaxed">{item.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
