import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

export function CtaSection({
  title = "Let's Build the Future, Together.",
  subtitle = 'Whether it’s a standalone project or multi-phase development, AvenBrik Infra is your dependable partner on the ground — ensuring work gets done, faster and better.',
  primaryLabel = 'Start Your Project',
  primaryHref = '/contact',
  secondaryLabel = 'Explore Services',
  secondaryHref = '/services',
}: {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="relative overflow-hidden bg-white border-t border-border">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm'
              )}
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'shadow-sm border-border bg-background hover:bg-muted text-foreground'
              )}
            >
              {secondaryLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
