'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import { services, contactInfo } from '@/lib/site-data'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'Why AvenBrick', href: '/why-avenbrick' },
  { label: 'Finance', href: '/finance' },
  { label: 'Clients & Projects', href: '/projects' },
  { label: 'Work With Us', href: '/careers' },
  { label: 'Become Partner', href: '/partner' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-white border-b border-border shadow-sm transition-all duration-300"
    >
      <div className="w-full flex items-center justify-between gap-4 px-4 py-4 xl:px-6">
        <Logo className="shrink-0" />

        <nav className="hidden items-center gap-0.5 xl:flex xl:gap-2 flex-nowrap">
          {navLinks.map((link) =>
            link.hasMega ? (
              <div
                key={link.href}
                className="group relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 rounded-md px-1.5 py-1 text-xs font-semibold tracking-tight transition-colors hover:text-accent whitespace-nowrap xl:px-3 xl:py-2 xl:text-sm xl:font-medium xl:tracking-normal',
                    pathname.startsWith('/services')
                      ? 'text-accent'
                      : 'text-foreground/80',
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-3 w-3" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3">
                    <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-3 shadow-xl">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-secondary"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <s.icon className="h-4.5 w-4.5" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-foreground">
                              {s.shortName}
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {s.tagline}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-1.5 py-1 text-xs font-semibold tracking-tight transition-colors hover:text-accent whitespace-nowrap xl:px-3 xl:py-2 xl:text-sm xl:font-medium xl:tracking-normal',
                  pathname === link.href ? 'text-accent' : 'text-foreground/80',
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex text-xs px-2.5 h-8 xl:text-sm xl:px-4 xl:h-9'
            )}
          >
            Start Your Project
          </Link>
          <button
            className="rounded-md p-2 text-foreground xl:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-border bg-background xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.hasMega ? (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-base font-medium text-foreground">
                      Services
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="flex flex-col gap-1 pb-2 pl-2">
                      <Link href="/services" className="py-2 text-sm font-semibold text-accent">
                        All Services
                      </Link>
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="py-2 text-sm text-muted-foreground"
                        >
                          {s.shortName}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'block border-b border-border py-3 text-base font-medium',
                      pathname === link.href ? 'text-accent' : 'text-foreground',
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'bg-accent text-accent-foreground hover:bg-accent/90'
                )}
              >
                Start Your Project
              </Link>
              <a
                href={`tel:${contactInfo.phoneHref}`}
                className="flex items-center justify-center gap-2 text-sm font-medium text-foreground"
              >
                <Phone className="h-4 w-4" />
                {contactInfo.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
