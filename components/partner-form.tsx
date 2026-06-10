"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function PartnerForm() {
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
      name: formData.get("company"), // Map company as Name
      company: formData.get("company"), // Map company as Company
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("type"), // Map partnership type as Service
      location: formData.get("location"), // Map location as Location
      message: formData.get("details"), // Map details as Message
      formType: "Partnership"
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
        throw new Error(errorData.error || "Failed to submit partnership request. Please try again.")
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
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-10 text-center animate-in fade-in zoom-in-95 duration-300">
        <CheckCircle2 className="h-12 w-12 text-accent animate-bounce" />
        <h3 className="text-xl font-semibold text-foreground">Request submitted</h3>
        <p className="max-w-md text-muted-foreground">
          Thanks for your interest in partnering with AvenBrik. Our team will review and connect with you soon.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          Form will reset automatically in 5 seconds...
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="company">Company / Name <span className="text-destructive">*</span></Label>
          <Input id="company" name="company" required placeholder="Your company or name" disabled={isSubmitting} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
            <Input id="email" name="email" type="email" required placeholder="you@email.com" disabled={isSubmitting} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone <span className="text-destructive">*</span></Label>
            <Input id="phone" name="phone" type="tel" required placeholder="+91 00000 00000" disabled={isSubmitting} />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="type">Partnership Type <span className="text-destructive">*</span></Label>
            <Input id="type" name="type" required placeholder="e.g. Material Supplier" disabled={isSubmitting} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location <span className="text-destructive">*</span></Label>
            <Input id="location" name="location" required placeholder="e.g. Hyderabad, India" disabled={isSubmitting} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="details">Details</Label>
          <Textarea id="details" name="details" rows={4} placeholder="Tell us about your business and how you'd like to partner" disabled={isSubmitting} />
        </div>
      </div>

      {errorMessage && (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="h-5 w-5 shrink-0 text-destructive" />
          <span>{errorMessage}</span>
        </div>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-75">
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  )
}
