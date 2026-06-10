import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { CtaSection } from "@/components/cta-section"
import { whyChooseUs } from "@/lib/site-data"
import { ShieldCheck, Clock, Wallet, Users, Leaf, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Why AvenBrik | The AvenBrik Advantage",
  description:
    "Discover why developers, businesses and homeowners trust AvenBrik Infra for end-to-end construction and infrastructure delivery.",
}

const iconMap = {
  ShieldCheck,
  Clock,
  Wallet,
  Users,
  Leaf,
  Award,
}

export default function WhyAvenBrikPage() {
  return (
    <>
      <PageHero
        eyebrow="Why AvenBrik"
        title="Built on trust. Delivered with precision."
        description="We combine engineering excellence, transparent processes and on-time delivery to turn ambitious visions into landmark structures."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Award
              return (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/about-team.png"
                alt="AvenBrik engineering team reviewing project plans on site"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Our Commitment</p>
              <h2 className="mb-6 text-pretty text-3xl font-bold text-foreground md:text-4xl">
                A single accountable partner from concept to completion
              </h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Most projects fail at the handoffs between architects, contractors and consultants. AvenBrik removes
                those gaps by owning the entire delivery chain &mdash; design, engineering, procurement and
                construction &mdash; under one roof.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated project manager as your single point of contact",
                  "Transparent costing with no hidden charges",
                  "Quality audits at every construction milestone",
                  "On-time handover backed by clear contracts",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      ✓
                    </span>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
