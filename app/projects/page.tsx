import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Clients & Projects | AvenBrik Infra",
  description:
    "Explore the residential, commercial and industrial projects delivered by AvenBrik Infra and the clients who trust us.",
}

const sectors = [
  { value: "Residential", label: "Apartments, villas & gated communities" },
  { value: "Commercial", label: "Offices, retail plazas & malls" },
  { value: "Industrial", label: "Warehouses, factories & facilities" },
  { value: "Infrastructure", label: "Roads, site development & utilities" },
]

const clients = [
  "Skyline Developers",
  "Metro Retail Group",
  "Greenfield Estates",
  "Apex Industries",
  "Harbor Logistics",
  "Crest Builders",
  "Urban Living Co.",
  "Pinnacle Realty",
]

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients & Projects"
        title="A portfolio built to last"
        description="From homes to high-rises and factories to townships, our work reflects a commitment to quality engineering and on-time delivery."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s, i) => (
              <Reveal key={s.value} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{s.value}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProjects />

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Trusted By</p>
              <h2 className="text-pretty text-3xl font-bold text-foreground md:text-4xl">
                Partners who build with us
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c, i) => (
              <Reveal key={c} delay={i * 0.04}>
                <div className="flex h-24 items-center justify-center rounded-xl border border-border bg-card px-4 text-center text-sm font-semibold text-foreground">
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
