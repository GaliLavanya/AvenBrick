import type { Metadata } from 'next'
import { Target, Eye, Building2, Award } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal, RevealStagger, StaggerItem } from '@/components/reveal'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'About Us — AvenBrick Infra',
  description:
    'AvenBrick Infra is a multi-domain construction execution company specializing in turnkey site works with a skilled workforce and tech-driven approach.',
}

const timeline = [
  { year: 'Foundation', title: 'On-Ground Expertise', desc: 'Built from a core team of seasoned site engineers and execution specialists.' },
  { year: 'Growth', title: 'Multi-Domain Capability', desc: 'Expanded into eight integrated service domains under one roof.' },
  { year: 'Scale', title: 'Pan-India Deployment', desc: 'Scalable manpower deployment across small, mid, and large-scale projects.' },
  { year: 'Future', title: 'Tech-Driven Execution', desc: 'AI integration, predictive maintenance, and modular manpower solutions.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Who We Are"
        description="AvenBrick Infra is a multi-domain construction execution company specializing in turnkey site works."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src="/about-team.png"
                alt="AvenBrick engineers reviewing blueprints on site"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              On-Ground Expertise, Tech-Driven Delivery
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              With a skilled workforce, on-ground expertise, and a tech-driven
              approach, we deliver reliable and scalable services for builders,
              developers, contractors, and government agencies. From a single trade to
              full-scale project execution, we take ownership from mobilization to
              handover.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our reputation is built on transparency, reliability, and exceptional
              execution across diverse construction domains.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Target className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  Our Mission
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To become India&apos;s most trusted partner in on-site execution and
                  construction support.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Eye className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  Our Vision
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  To empower construction with skilled manpower, timely delivery, and
                  seamless execution.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Our Journey
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built to Scale, Designed to Last
            </h2>
          </Reveal>
          <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <StaggerItem key={t.title}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                  <span className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
                    {t.year}
                  </span>
                  <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {i === 0 ? <Award className="h-5 w-5" /> : <Building2 className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
