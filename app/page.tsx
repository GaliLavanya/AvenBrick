import { HomeHero } from '@/components/home/home-hero'
import { StatsBar } from '@/components/home/stats-bar'
import { ServicesGrid } from '@/components/home/services-grid'
import { WhatWeDo } from '@/components/home/what-we-do'
import { IntegratedDesign } from '@/components/home/integrated-design'
import { FeaturedProjects } from '@/components/featured-projects'
import { Testimonials } from '@/components/home/testimonials'
import { CtaSection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsBar />
      <ServicesGrid />
      <WhatWeDo />
      <IntegratedDesign />
      <FeaturedProjects />
      <Testimonials />
      <CtaSection />
    </>
  )
}
