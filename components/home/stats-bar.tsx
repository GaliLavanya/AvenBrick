'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 250, suffix: '+', label: 'Projects Executed' },
  { value: 500, suffix: '+', label: 'Skilled Workers Deployed' },
  { value: 8, suffix: '', label: 'Service Domains' },
  { value: 98, suffix: '%', label: 'On-Time Delivery' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    const duration = 1600
    const step = (ts: number) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(value)
    }
    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsBar() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-heading text-4xl font-bold text-primary md:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
