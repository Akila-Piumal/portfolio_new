import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Github, Mail, ArrowRight, Linkedin, Youtube, MessageCircle } from "lucide-react"
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
import { ContactForm } from "@/components/contact-form"
import { Input } from "@/components/ui/input"

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
                  alt="About Akila"
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
                    <span>akilapiumal16@gmail.com</span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="font-bold text-3xl mb-2 bg-gradient-to-r from-[#e05d4f] to-[#ff7a6b] bg-clip-text text-transparent">
                  Akila
                </div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Associate Software Engineer passionate about creating beautiful, functional web experiences that make
                  a difference.
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/akila-piumal-3b7040229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/10 rounded-full hover:bg-[#e05d4f] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#e05d4f]/25"
                >
                  <svg
                    className="h-5 w-5 text-white group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Akila-Piumal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/10 rounded-full hover:bg-[#e05d4f] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#e05d4f]/25"
                >
                  <svg
                    className="h-5 w-5 text-white group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/783223485"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/10 rounded-full hover:bg-[#e05d4f] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#e05d4f]/25"
                >
                  <MessageCircle className="h-5 w-5 text-white group-hover:text-white transition-colors" />
                </a>
                <a
                  href="mailto:akilapiumal16@gmail.com"
                  className="group relative p-3 bg-white/10 rounded-full hover:bg-[#e05d4f] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#e05d4f]/25"
                >
                  <Mail className="h-5 w-5 text-white group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-semibold text-xl text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#e05d4f] to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#about", label: "About" },
                  { href: "#skills", label: "Skills" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#e05d4f] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#e05d4f] transition-colors duration-300"></div>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="font-semibold text-xl text-white relative">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#e05d4f] to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {["Web Development", "Mobile Apps", "UI/UX Design", "API Development", "Cloud Services"].map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 flex items-center gap-2 group cursor-pointer hover:text-[#e05d4f] transition-colors duration-300">
                      <div className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#e05d4f] transition-colors duration-300"></div>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="max-w-md mx-auto text-center">
              <h3 className="font-semibold text-xl text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300 mb-4">Get notified about my latest projects and blog posts.</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#e05d4f]"
                />
                <Button className="bg-[#e05d4f] hover:bg-[#c04a3e] text-white px-6">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Akila. All rights reserved. Made with ❤️ in Sri Lanka.
              </div>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-[#e05d4f] transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#e05d4f] transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-[#e05d4f] transition-colors duration-300">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#e05d4f]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#e05d4f]/5 to-transparent rounded-full blur-2xl"></div>
      </footer>
    </div>
  )
}
