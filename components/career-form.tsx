"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function CareerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)
    setErrorMessage(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("role"), // Map role to Service column
      location: formData.get("location"), // Map location to Location column
      message: formData.get("message"),
      formType: "Careers"
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || "Failed to submit application. Please try again.")
      }

      form.reset()
      setSubmitted(true)
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitted])

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center animate-in fade-in zoom-in-95 duration-300">
        <CheckCircle2 className="h-12 w-12 text-accent animate-bounce" />
        <h3 className="text-xl font-semibold text-foreground">Application received</h3>
        <p className="max-w-md text-muted-foreground">
          Thank you for your interest in AvenBrick. Our HR team will review your details and reach out shortly.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          Form will reset automatically in 5 seconds...
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
          <Input id="name" name="name" required placeholder="Your name" disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
          <Input id="email" name="email" type="email" required placeholder="you@email.com" disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone <span className="text-destructive">*</span></Label>
          <Input id="phone" name="phone" type="tel" required placeholder="+91 00000 00000" disabled={isSubmitting} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location <span className="text-destructive">*</span></Label>
          <Input id="location" name="location" required placeholder="e.g. Hyderabad, India" disabled={isSubmitting} />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="role">Role Applying For <span className="text-destructive">*</span></Label>
          <Input id="role" name="role" required placeholder="e.g. Site Engineer" disabled={isSubmitting} />
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <Label htmlFor="message">Tell us about yourself</Label>
        <Textarea id="message" name="message" rows={4} placeholder="Experience, skills and availability" disabled={isSubmitting} />
      </div>

      {errorMessage && (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0 text-destructive" />
          <span>{errorMessage}</span>
        </div>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-75">
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  )
}
