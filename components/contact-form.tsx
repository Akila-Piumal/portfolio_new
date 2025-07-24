"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return "Name is required"
    if (!formData.email.trim()) return "Email is required"
    if (!formData.subject.trim()) return "Subject is required"
    if (!formData.message.trim()) return "Message is required"

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) return "Please enter a valid email address"

    // Message length validation
    if (formData.message.length < 10) return "Message must be at least 10 characters long"

    return null
  }

  const getCurrentDateTime = () => {
    const now = new Date()
    const date = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    })
    return { date, time }
  }

  const sendEmailWithEmailJS = async () => {
    // EmailJS configuration
    const serviceId = "service_gfyfi2m" // Replace with your EmailJS service ID
    const mainTemplateId = "template_ir8um8y" // Replace with your EmailJS template ID
    const autoReplyTemplateId = "template_oos5dt6" // Replace with your EmailJS template ID
    const publicKey = "SS7Zyev0cTkgCGfpV" // Replace with your EmailJS public key

    const { date, time } = getCurrentDateTime()

    const mainTemplateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Akila", // Your name
      reply_to: formData.email,
      current_date: date,
      current_time: time
    }

    // Template parameters for the auto-reply (to the visitor)
    const autoReplyTemplateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: formData.email, // Send auto-reply to visitor's email
      current_date: date,
      current_time: time
    }

    try {
      // Import EmailJS dynamically to avoid SSR issues
      const emailjs = await import("@emailjs/browser")

      console.log("Sending main email...")
      const mainResponse = await emailjs.send(serviceId, mainTemplateId, mainTemplateParams, publicKey)

      if (mainResponse.status !== 200) {
        throw new Error("Failed to send main email")
      }

      // Send auto-reply to visitor
      console.log("Sending auto-reply email...")
      const autoReplyResponse = await emailjs.send(serviceId, autoReplyTemplateId, autoReplyTemplateParams, publicKey)

      if (autoReplyResponse.status !== 200) {
        console.warn("Auto-reply failed, but main email was sent successfully")
        // Don't throw error here - main email was successful
      }

      return { success: true }
    } catch (error) {
      console.error("EmailJS Error:", error)
      throw error
    }
  }

  const sendEmailWithFormspree = async () => {
    // Formspree endpoint - replace with your Formspree form ID
    const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID"

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // Formspree auto-reply feature
        }),
      })

      if (response.ok) {
        return { success: true }
      } else {
        throw new Error("Failed to send email via Formspree")
      }
    } catch (error) {
      console.error("Formspree Error:", error)
      throw error
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const validationError = validateForm()
    if (validationError) {
      setStatus("error")
      setStatusMessage(validationError)
      return
    }

    setStatus("loading")

    try {
      // Try multiple email services in order of preference
      let emailSent = false
      let lastError = null

      // Method 1: Try EmailJS first (most reliable)
      try {
        await sendEmailWithEmailJS()
        emailSent = true
        console.log("✅ Both main email and auto-reply sent successfully via EmailJS")
      } catch (error) {
        console.log("❌ EmailJS failed, trying Formspree...")
        lastError = error
      }

      // Method 2: Try Formspree as fallback
      if (!emailSent) {
        try {
          await sendEmailWithFormspree()
          emailSent = true
          console.log("✅ Email sent successfully via Formspree")
        } catch (error) {
          console.log("❌ Formspree failed...")
          lastError = error
        }
      }

      if (emailSent) {
        setStatus("success")
        setStatusMessage(
          "🎉 Thank you for your message! I've received it and you should receive a confirmation email shortly. I'll get back to you within 24 hours.",
        )

        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw lastError
      }

      // Reset status after 10 seconds
      setTimeout(() => {
        setStatus("idle")
        setStatusMessage("")
      }, 10000)
    } catch (error) {
      setStatus("error")
      setStatusMessage(
        "❌ Failed to send message. Please try again or contact me directly at akilaiumal16@gmail.com. You can also reach out via LinkedIn or GitHub.",
      )

      // Reset status after 10 seconds
      setTimeout(() => {
        setStatus("idle")
        setStatusMessage("")
      }, 10000)
    }
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message
  const isLoading = status === "loading"

  return (
    <div className="space-y-6 rounded-2xl border p-8">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Contact Form</h3>
        <p className="text-sm text-muted-foreground">
          Fill out the form below and I'll respond as soon as possible. You'll receive a confirmation email immediately.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" name="contact">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Input
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={isLoading}
              className="disabled:opacity-50"
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isLoading}
              className="disabled:opacity-50"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Input
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            disabled={isLoading}
            className="disabled:opacity-50"
            required
          />
        </div>
        <div className="space-y-2">
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            className="min-h-[120px] disabled:opacity-50"
            value={formData.message}
            onChange={handleInputChange}
            disabled={isLoading}
            required
          />
          <div className="text-xs text-muted-foreground text-right">{formData.message.length}/500 characters</div>
        </div>

        {/* Status Messages */}
        {statusMessage && (
          <div
            className={`flex items-start gap-3 text-sm p-4 rounded-lg border ${
              status === "success"
                ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
                : status === "error"
                  ? "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800"
                  : ""
            }`}
          >
            <div className="flex-shrink-0 mt-0.5">
              {status === "success" && <CheckCircle className="h-4 w-4" />}
              {status === "error" && <AlertCircle className="h-4 w-4" />}
            </div>
            <div className="flex-1">{statusMessage}</div>
          </div>
        )}

        <Button
          type="submit"
          disabled={!isFormValid || isLoading}
          className="w-full bg-[#e05d4f] hover:bg-[#c04a3e] text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Message & Confirmation....
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>

      {/* Service Information */}
      <div className="pt-4 border-t">
        {/* <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground mb-2">Prefer to email directly?</p>
          <a
            href="mailto:akilapiumal16@gmail.com"
            className="text-[#e05d4f] hover:text-[#c04a3e] font-medium transition-colors"
          >
            akilapiumal16@gmail.com
          </a>
        </div> */}

        {/* Email Service Status */}
        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
        <p className="text-xs text-muted-foreground text-center">
            📧 You'll receive an instant confirmation email after submitting this form
          </p>
          <p className="text-xs text-muted-foreground text-center mt-1">
            🔒 This form uses secure email services to deliver messages directly to my inbox
          </p>
        </div>
      </div>
    </div>
  )
}
