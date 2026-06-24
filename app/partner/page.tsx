import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import { PartnerForm } from "@/components/partner-form"
import { Handshake, Briefcase, Hammer, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Become a Partner | AvenBrick Infra",
  description:
    "Partner with AvenBrick Infra as a vendor, subcontractor, supplier or channel partner and grow with a trusted construction brand.",
}

const partnerTypes = [
  { icon: Hammer, title: "Subcontractors", text: "Skilled trade teams for electrical, plumbing, finishing and more." },
  { icon: Briefcase, title: "Material Suppliers", text: "Reliable suppliers of quality construction materials and equipment." },
  { icon: Building2, title: "Developers", text: "Real estate developers seeking an end-to-end construction partner." },
  { icon: Handshake, title: "Channel Partners", text: "Referral and business partners who bring projects to AvenBrick." },
]

const benefits = [
  "Steady pipeline of projects across sectors",
  "Timely, transparent payment cycles",
  "Long-term, relationship-driven engagements",
  "Professional project coordination and support",
]

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Become a Partner"
        title="Grow with AvenBrick Infra"
        description="Join our network of vendors, subcontractors, suppliers and channel partners to deliver exceptional projects together."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map((p, i) => (
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
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Why Partner With Us</p>
              <h2 className="mb-6 text-pretty text-3xl font-bold text-foreground md:text-4xl">
                A partnership built for mutual growth
              </h2>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      ✓
                    </span>
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <PartnerForm />
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
