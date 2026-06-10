'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus, CheckCircle2 } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: 'What Are The Charges Of Renovation?',
    a: 'Renovation costs vary depending on scope, materials, structural changes, and finishes. At AvenBrik, we offer transparent pricing models with itemized quotations tailored to your project.',
  },
  {
    q: 'What Is Project Timing In Construction?',
    a: 'Our services are designed to help businesses leverage technology to streamline operations, improve efficiency, and complete projects within the estimated timelines. We commit to milestone-driven schedules with real-time tracking.',
  },
  {
    q: 'How To Contact Our Support Team?',
    a: 'You can reach AvenBrik’s expert support team via phone at +91 8333 85 87 85, email at contact@avenbrik.com, or our website www.avenbrik.com. We’re here to assist you at every step — from consultation to site execution.',
  },
  {
    q: 'How Are Construction Permits Obtained?',
    a: 'Our team guides you through the full permitting process, including documentation preparation, local authority coordination, and compliance assurance. We ensure your project meets all legal and regulatory standards.',
  },
]

export function IntegratedDesign() {
  const [open, setOpen] = useState<number | null>(1)

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Support
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Integrated Building Design for Enhanced Efficiency
            </h2>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                At AvenBrik Infra, we integrate design and execution to deliver
                seamless, cost-efficient construction solutions. From initial planning
                to final handover, our approach ensures every phase contributes to
                operational excellence and sustainable outcomes.
              </p>
              <p className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                Our expertise spans across all domains — Electrical, Plumbing,
                Painting, Excavation, Metalworks, and more — enabling a unified,
                tech-driven process that saves time, reduces errors, and maximizes
                value.
              </p>
            </div>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'mt-8 bg-primary text-primary-foreground hover:bg-primary/90'
              )}
            >
              Discover Our Process
            </Link>
          </Reveal>

          <Reveal delay={1}>
            <div className="divide-y divide-border rounded-2xl border border-border bg-card">
              {faqs.map((faq, i) => {
                const isOpen = open === i
                return (
                  <div key={faq.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-medium text-foreground">{faq.q}</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
