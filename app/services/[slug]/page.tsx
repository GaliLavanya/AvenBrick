import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react'
import { services } from '@/lib/site-data'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'
import { CtaSection } from '@/components/cta-section'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return { title: 'Service — AvenBrick Infra' }
  return {
    title: `${service.name} — AvenBrick Infra`,
    description: service.overview,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const index = services.findIndex((s) => s.slug === slug)
  const next = services[(index + 1) % services.length]
  const Icon = service.icon

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div aria-hidden className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <Icon className="h-8 w-8" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {service.tagline}
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl text-balance font-heading text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
            {service.name}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            {service.overview}
          </p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.6fr_1fr] lg:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Service Inclusions
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything our {service.shortName.toLowerCase()} teams deliver, with
              quality controls at every step.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={1}>
            <div className="sticky top-28 rounded-2xl border border-border bg-secondary p-7">
              <h3 className="font-heading text-lg font-semibold text-foreground">Ideal For</h3>
              <ul className="mt-4 space-y-3">
                {service.useCases.map((u) => (
                  <li key={u} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {u}
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">
                  Ready to scope your {service.shortName.toLowerCase()} works?
                </p>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90'
                  )}
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-4 lg:px-8">
          <Link
            href={`/services/${next.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
          >
            <span>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Next Service
              </span>
              <span className="mt-1 block font-heading text-lg font-semibold text-foreground">
                {next.name}
              </span>
            </span>
            <ArrowRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
