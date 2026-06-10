import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form"
import { contactInfo, socialLinks } from "@/lib/site-data"
import { Phone, Mail, Globe } from "lucide-react"
import { LinkedinIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/social-icons"

export const metadata: Metadata = {
  title: "Contact | AvenBrik Infra",
  description:
    "Get in touch with AvenBrik Infra for construction, infrastructure and project enquiries. Call, email or send us a message.",
}

const details = [
  { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phoneHref}` },
  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Globe, label: "Website", value: contactInfo.website, href: `https://${contactInfo.website}` },
]

const socials = [
  { icon: LinkedinIcon, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: FacebookIcon, href: socialLinks.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: socialLinks.instagram, label: "Instagram" },
  { icon: YoutubeIcon, href: socialLinks.youtube, label: "YouTube" },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's build something together"
        description="Have a project in mind or a question for our team? Reach out and we'll get back to you promptly."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div>
              <h2 className="mb-6 text-pretty text-2xl font-bold text-foreground md:text-3xl">Get in touch</h2>
              <div className="space-y-4">
                {details.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent"
                  >
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {d.label}
                      </span>
                      <span className="font-medium text-foreground">{d.value}</span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
