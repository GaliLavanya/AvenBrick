import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import { contactInfo } from "@/lib/site-data"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Banknote, FileCheck, Percent, CalendarClock, Building, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Construction Finance | AvenBrik Infra",
  description:
    "Flexible construction finance and EMI options from AvenBrik Infra. Build now and pay in easy installments with transparent, structured plans.",
}

const features = [
  {
    icon: Banknote,
    title: "Flexible Funding",
    description: "Tailored finance options that match your project size, from compact homes to large developments.",
  },
  {
    icon: Percent,
    title: "Competitive Rates",
    description: "Partnered lending plans with transparent interest and zero hidden processing surprises.",
  },
  {
    icon: CalendarClock,
    title: "Easy EMI Plans",
    description: "Spread your construction cost over comfortable monthly installments aligned to milestones.",
  },
  {
    icon: FileCheck,
    title: "Simple Documentation",
    description: "Minimal paperwork and a guided application process handled by our dedicated finance desk.",
  },
]

const steps = [
  { step: "01", title: "Share Your Plan", text: "Tell us about your project scope and budget requirements." },
  { step: "02", title: "Get a Quote", text: "Receive a detailed BOQ and a structured finance proposal." },
  { step: "03", title: "Approve & Sign", text: "Choose an EMI plan, complete simple documentation, and get approved." },
  { step: "04", title: "Build & Pay", text: "We start construction while you pay in convenient installments." },
]

export default function FinancePage() {
  return (
    <>
      <PageHero
        eyebrow="Construction Finance"
        title="Build now, pay in easy installments"
        description="AvenBrik Infra makes construction affordable with flexible finance and EMI options so budget never stands between you and your dream project."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">How It Works</p>
              <h2 className="text-pretty text-3xl font-bold text-foreground md:text-4xl">
                Four simple steps to financed construction
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <span className="text-3xl font-bold text-accent">{s.step}</span>
                  <h3 className="mb-2 mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 text-center md:p-12">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Building className="h-7 w-7" />
              </div>
              <h2 className="mb-4 text-pretty text-2xl font-bold text-foreground md:text-3xl">
                Talk to our finance desk
              </h2>
              <p className="mx-auto mb-8 max-w-xl leading-relaxed text-muted-foreground">
                Our team will walk you through eligibility, EMI tenures and the documents needed to get your project
                funded quickly.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`tel:${contactInfo.phoneHref}`}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-accent text-accent-foreground hover:bg-accent/90"
                  )}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {contactInfo.phone}
                </a>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
                >
                  Request a Callback
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
