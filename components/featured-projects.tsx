import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal, RevealStagger, StaggerItem } from '@/components/reveal'

export const featuredProjects = [
  {
    title: 'Skyline Residences',
    category: 'Residential',
    location: 'Hyderabad',
    image: '/project-residential.png',
    desc: 'Full electrical, plumbing, and finishing works for a 220-unit high-rise apartment complex.',
  },
  {
    title: 'Meridian Business Park',
    category: 'Commercial',
    location: 'Bengaluru',
    image: '/project-commercial.png',
    desc: 'Turnkey MEP execution and site development for a Grade-A glass office tower.',
  },
  {
    title: 'AeroLogix Warehouse',
    category: 'Industrial',
    location: 'Pune',
    image: '/project-industrial.png',
    desc: 'Excavation, flooring, metalworks, and electrification for a 120,000 sq.ft. facility.',
  },
]

export function FeaturedProjects() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Featured Work
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A Portfolio Built on Trust & Performance
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((p) => (
            <StaggerItem key={p.title}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image || '/placeholder.svg'}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {p.location}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
