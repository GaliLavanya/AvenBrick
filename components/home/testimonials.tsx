import { Quote, Star } from 'lucide-react'
import { Reveal, RevealStagger, StaggerItem } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'AvenBrik handled our entire MEP scope with zero subcontracting chaos. Single point of accountability made our delivery timeline rock solid.',
    name: 'Rajesh Menon',
    role: 'Project Director, Skyline Developers',
  },
  {
    quote:
      'Their verified workforce and real-time tracking gave us complete visibility. We scaled from 20 to 120 workers across two sites without a hitch.',
    name: 'Anita Sharma',
    role: 'GM Operations, Meridian Group',
  },
  {
    quote:
      'Transparent pricing and documented work orders. No hidden costs, on-time milestones, and excellent finishing quality throughout.',
    name: 'Vikram Reddy',
    role: 'Founder, AeroLogix Industrial',
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Client Voices
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Trusted by Builders, Developers & Contractors
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <Quote className="h-8 w-8 text-accent/40" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
