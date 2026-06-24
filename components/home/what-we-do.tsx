import { Reveal } from '@/components/reveal'

export function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-24">
      <div aria-hidden className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            What We Do
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Upgrading Your Infrastructure Efficiency
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            At AvenBrick Infra, we don’t just build — we elevate. Our expert-led
            services are designed to optimize every layer of your construction,
            infrastructure, and industrial needs with smart planning, high-quality
            workmanship, and tech-enabled execution. Whether it&apos;s a factory
            upgrade or a new facility, we bring performance, precision, and long-term
            value to every square foot.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
