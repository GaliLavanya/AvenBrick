import Link from 'next/link'
import { Phone, Mail, Globe, MapPin } from 'lucide-react'
import { LinkedinIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from '@/components/social-icons'
import { Logo } from '@/components/logo'
import { services, contactInfo, socialLinks } from '@/lib/site-data'

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Why AvenBrick', href: '/why-avenbrick' },
  { label: 'Clients & Projects', href: '/projects' },
  { label: 'Finance', href: '/finance' },
  { label: 'Work With Us', href: '/careers' },
  { label: 'Become Partner', href: '/partner' },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              AvenBrick Infra is a multi-domain construction execution company
              specializing in turnkey site works — delivering reliable, scalable
              services for builders, developers, contractors, and government agencies.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: LinkedinIcon, href: socialLinks.linkedin, label: 'LinkedIn' },
                { Icon: FacebookIcon, href: socialLinks.facebook, label: 'Facebook' },
                { Icon: InstagramIcon, href: socialLinks.instagram, label: 'Instagram' },
                { Icon: YoutubeIcon, href: socialLinks.youtube, label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition-colors hover:bg-accent"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${contactInfo.phoneHref}`} className="hover:text-accent">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-accent" />
                <span>{contactInfo.website}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} AvenBrick Infra. All rights reserved.</p>
          <p>Building Excellence with Every Brick.</p>
        </div>
      </div>
    </footer>
  )
}
