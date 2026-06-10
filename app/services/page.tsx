import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/site-data'
import { PageHero } from '@/components/page-hero'
import { Reveal, RevealStagger, StaggerItem } from '@/components/reveal'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Services — AvenBrik Infra',
  description:
    'Comprehensive site services for residential, commercial, and industrial projects: electrical, plumbing, painting, metalworks, flooring, excavation, site development, and project planning.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive Site Services, End to End"
        description="We offer comprehensive site services tailored for residential, commercial, and industrial projects. Click on each category to explore in detail."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <RevealStagger className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                    {s.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.overview}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.useCases.slice(0, 3).map((u) => (
                      <span
                        key={u}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {u}
                      </span>
                    ))}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <CtaSection
        title="Not sure which service you need?"
        subtitle="Talk to our team and we'll scope the right combination of works for your project — from a single trade to full turnkey execution."
        primaryLabel="Talk to an Expert"
      />
    </>
  )
}
