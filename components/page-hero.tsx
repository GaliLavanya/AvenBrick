import { cn } from '@/lib/utils'

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <section className={cn('relative overflow-hidden bg-primary pt-32 pb-16 lg:pt-40 lg:pb-24', className)}>
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
        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 max-w-3xl text-balance font-heading text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
