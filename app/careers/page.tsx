import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import { CareerForm } from "@/components/career-form"
import { HeartHandshake, TrendingUp, GraduationCap, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Work With Us | Careers at AvenBrick Infra",
  description:
    "Join AvenBrick Infra and build a career in construction and infrastructure. Explore open roles and apply today.",
}

const perks = [
  { icon: TrendingUp, title: "Growth Opportunities", text: "Clear career paths and the chance to lead landmark projects." },
  { icon: GraduationCap, title: "Learning Culture", text: "On-the-job training, mentorship and skill development programs." },
  { icon: ShieldCheck, title: "Safe Worksites", text: "Industry-leading safety standards across every project." },
  { icon: HeartHandshake, title: "Supportive Team", text: "A collaborative environment where your contribution matters." },
]

const roles = [
  { title: "Site Engineer", type: "Full-time", location: "On-site" },
  { title: "Project Manager", type: "Full-time", location: "On-site" },
  { title: "Architect / Designer", type: "Full-time", location: "Hybrid" },
  { title: "Quantity Surveyor", type: "Full-time", location: "On-site" },
  { title: "Electrical Supervisor", type: "Full-time", location: "On-site" },
  { title: "Procurement Executive", type: "Full-time", location: "Office" },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Work With Us"
        title="Build your career with AvenBrick"
        description="We are always looking for driven professionals who want to shape skylines and deliver infrastructure that lasts."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Open Positions</p>
              <h2 className="text-pretty text-3xl font-bold text-foreground md:text-4xl">Current openings</h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.04}>
                <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{r.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {r.type} · {r.location}
                    </p>
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">Hiring</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-pretty text-3xl font-bold text-foreground md:text-4xl">Apply now</h2>
              <p className="text-muted-foreground">
                Send us your details and our HR team will get in touch about suitable roles.
              </p>
            </div>
            <CareerForm />
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
