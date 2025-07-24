import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, Send, ArrowRight, Linkedin, Youtube, MessageCircle } from "lucide-react"
import { ProjectCarousel } from "@/components/project-carousel"
import { SkillsSection } from "@/components/skills-section"
import { ScrollDownButton } from "@/components/scroll-down-button"
import { EnhancedMouseEffect } from "@/components/enhanced-mouse-effect"
import { Navigation } from "@/components/navigation"
import { SectionHeader } from "@/components/section-header"
import { ExperienceSection } from "@/components/experience-section"
import Link from "next/link"
import { ContactButton } from "@/components/ui/contactButton"
import { AboutModal } from "@/components/about-modal"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Left side - Mobile menu + Logo */}
          <div className="flex items-center gap-3">
            {/* Mobile Navigation - moved to left */}
            <div className="md:hidden">
              <Navigation />
            </div>
            <div >
              <img
                src="logo.png"
                alt="My Logo"
                className="object-cover logo-img"
              />
            </div>
          </div>

          {/* Center - Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Right side - Theme toggle */}
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
          {/* Enhanced Mouse Effect */}
          <EnhancedMouseEffect />

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-center">
              {/* Social Media Icons Column */}
              <div className="hidden lg:flex flex-col gap-8 items-center">
                <Link
                  href="https://www.linkedin.com/in/akila-piumal-3b7040229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e05d4f] hover:text-[#c04a3e] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                {/* <Link
                  href="https://github.com/Akila-Piumal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e05d4f] hover:text-[#c04a3e] transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link> */}
                <Link
                  href="https://github.com/Akila-Piumal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e05d4f] hover:text-[#c04a3e] transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://wa.me/783223485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#e05d4f] hover:text-[#c04a3e] transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </Link>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                    Hi, I'm <br />
                    <span className="text-[#333333] dark:text-white">Akila</span>
                  </h1>
                  <h2 className="text-xl text-muted-foreground">FullStack Engineer / Developer</h2>
                  <p className="text-muted-foreground max-w-md">
                    High-level experience in web and mobile design and development knowledge, producing quality work
                  </p>
                  <div>
                    <ContactButton/>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="mx-auto lg:mx-0">
                  <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full bg-[#e05d4f] flex items-center justify-center overflow-hidden">
                    <img
                      src="user.png"
                      alt="Akila"
                      className="w-[95%] h-[95%] object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Scroll Down Button */}
          <ScrollDownButton />
        </section>

        <section id="about" className="py-20">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="About Nuha"
                  className="object-cover w-full h-full rounded-2xl"
                  width={600}
                  height={400}
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
                  <div className="mt-2 h-1 w-20 bg-[#e05d4f] rounded-full"></div>
                </div>
                <p className="text-lg">
                  I'm an Associate Software Engineer passionate about building intuitive and efficient web applications.
                </p>
                <div className="space-y-4">
                  <p>
                    With a background in Computer Science, I've developed a strong foundation in software development
                    principles and practices. I enjoy working with modern web technologies and am constantly learning
                    new tools and frameworks to improve my skills.
                  </p>
                  <p>
                    Currently, I'm focused on frontend development with Angular, React and Next.js, while also expanding my
                    knowledge of backend technologies like Node.js and Spring Boot. I'm particularly interested in
                    creating accessible and performant user interfaces that provide great user experiences.
                  </p>
                  <p>
                    Lately, I’ve been exploring the intersection of web development and AI, working on projects that integrate intelligent features into applications to improve usability and automation.
                  </p>
                  <p>
                  When I’m not coding, I enjoy hiking new trails, staying updated on emerging tech trends, and contributing to open-source projects.
                  </p>
                </div>
                <div>
                  <AboutModal>
                    <Button className="bg-[#e05d4f] hover:bg-[#c04a3e] text-white group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </AboutModal>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <ExperienceSection />
          </div>
        </section>

        <SkillsSection />

        <section id="projects" className="py-20">
          <div className="container">
            <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
              <SectionHeader title="My Projects" subtitle="Check out some of my recent work" />
            </div>
            <ProjectCarousel />
          </div>
        </section>

        <section id="contact" className="py-20 bg-muted/30">
          <div className="container">
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <SectionHeader title="Get in Touch" align="left" />
                <p className="text-lg">Have a project in mind or want to chat? Feel free to reach out!</p>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    I'm currently open to freelance opportunities and collaborations. If you have a project that could
                    use my skills, or if you just want to connect, send me a message and I'll get back to you as soon as
                    possible.
                  </p>
                  <div className="flex items-center gap-3 p-4 rounded-xl border">
                    <Mail className="h-6 w-6 text-[#e05d4f]" />
                    <span>nuha@example.com</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6 rounded-2xl border p-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Contact Form</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and I'll respond as soon as possible.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Input id="name" placeholder="Name" />
                    </div>
                    <div className="space-y-2">
                      <Input id="email" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input id="subject" placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full bg-[#e05d4f] hover:bg-[#c04a3e] text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background py-12 border-t">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <div className="font-bold text-xl">Nuha</div>
              <p className="mt-2 text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <div>
                <h3 className="font-medium mb-2">Links</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    <a href="#home" className="hover:text-[#e05d4f]">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="hover:text-[#e05d4f]">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="hover:text-[#e05d4f]">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-[#e05d4f]">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Social</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    <a href="https://github.com/Akila-Piumal" className="hover:text-[#e05d4f]">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/akila-piumal-3b7040229/" className="hover:text-[#e05d4f]">
                      LinkedIn
                    </a>
                  </li>
                  {/* <li>
                    <a href="https://youtube.com" className="hover:text-[#e05d4f]">
                      YouTube
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
