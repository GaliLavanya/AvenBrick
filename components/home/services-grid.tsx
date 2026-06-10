import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/site-data'
import { Reveal, RevealStagger, StaggerItem } from '@/components/reveal'

export function ServicesGrid() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            What We Do
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Comprehensive Site Services Under One Roof
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We offer comprehensive site services tailored for residential,
            commercial, and industrial projects. Explore each category in detail.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                  {s.shortName}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
