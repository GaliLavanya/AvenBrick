'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, ShieldCheck, Clock, Users } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-construction.png"
          alt="Modern construction site at golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-20 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent backdrop-blur"
        >
          Multi-Domain Construction Execution
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl text-balance font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl"
        >
          Building Excellence with{' '}
          <span className="text-accent">Every Brick.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl"
        >
          AvenBrick Infra is your trusted partner for high-quality construction
          services—from electrical and plumbing to full-scale project execution.
          Explore how we bring your vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-accent text-accent-foreground hover:bg-accent/90'
            )}
          >
            Start Your Project
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15 hover:text-white'
            )}
          >
            Explore Services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { Icon: ShieldCheck, label: 'Safety & Compliance First' },
            { Icon: Clock, label: 'Milestone-Driven Delivery' },
            { Icon: Users, label: 'Verified Skilled Workforce' },
          ].map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
            >
              <Icon className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium text-white/90">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </div>
    </section>
  )
}
