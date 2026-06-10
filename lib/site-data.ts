import {
  Zap,
  Droplets,
  Paintbrush,
  Wrench,
  LayoutGrid,
  Truck,
  Globe,
  Building2,
} from 'lucide-react'

export type Service = {
  slug: string
  name: string
  shortName: string
  icon: typeof Zap
  tagline: string
  overview: string
  inclusions: string[]
  useCases: string[]
}

export const services: Service[] = [
  {
    slug: 'electrical',
    name: 'Electrical Works',
    shortName: 'Electrical',
    icon: Zap,
    tagline: 'Secure, energy-efficient power systems',
    overview:
      'From residential buildings to commercial complexes, our electrical teams ensure complete, secure, and energy-efficient installations.',
    inclusions: [
      'Internal wiring (conduits, switchboards, fittings)',
      'External electrification (pole, streetlights, feeders)',
      'HT/LT cabling and panel installations',
      'DG, transformer, and substation work',
      'Solar panel installations',
      'Earthing, surge protection, and lightning arrestors',
      'Testing, commissioning & AMC',
    ],
    useCases: ['Apartments', 'Commercial complexes', 'Factories', 'Malls', 'Schools'],
  },
  {
    slug: 'plumbing',
    name: 'Plumbing Solutions',
    shortName: 'Plumbing',
    icon: Droplets,
    tagline: 'Water efficiency & zero-leakage systems',
    overview:
      'Our plumbing services are engineered to support water efficiency, hygiene, and zero-leakage distribution systems across property types.',
    inclusions: [
      'Underground and overhead water line installation',
      'Internal pipe fitting (PVC, CPVC, PPR, GI)',
      'Bathroom and sanitary ware fitting',
      'Drainage and sewerage systems',
      'Rainwater harvesting systems',
      'Installation of STPs, ETPs',
      'Maintenance and servicing of pumps',
    ],
    useCases: ['High-rise buildings', 'Hospitals', 'Schools', 'Commercial offices'],
  },
  {
    slug: 'painting',
    name: 'Painting & Finishing',
    shortName: 'Painting',
    icon: Paintbrush,
    tagline: 'Where aesthetics meet durability',
    overview:
      'Aesthetics meet durability in our finishing services. We apply high-quality materials for both interior and exterior finishes.',
    inclusions: [
      'Wall putty, primer, and base coatings',
      'Emulsion, enamel, oil-bound distemper',
      'Waterproofing & heat reflective coatings',
      'Decorative textures and theme walls',
      'Wood polish, melamine, PU coating',
      'Metal painting & protective layering',
    ],
    useCases: ['Residential flats', 'Villas', 'Malls', 'Corporate interiors'],
  },
  {
    slug: 'metalworks',
    name: 'Metalworks & Fabrication',
    shortName: 'Metalworks',
    icon: Wrench,
    tagline: 'Precision metal fabrication',
    overview:
      'Our team delivers reliable metal fabrications—from security features to architectural details—tailored to project needs.',
    inclusions: [
      'MS, SS gates, staircases, railings',
      'Sheet metal roofing and trusses',
      'Custom balcony grills & compound walls',
      'Heavy structure welding & anchoring',
      'Custom signage, poles, frameworks',
    ],
    useCases: ['Warehouses', 'Commercial buildings', 'Villas', 'Boundary setups'],
  },
  {
    slug: 'flooring',
    name: 'Flooring Solutions',
    shortName: 'Flooring',
    icon: LayoutGrid,
    tagline: 'Functional, elegant, durable floors',
    overview:
      'We provide flooring systems that are functional, elegant, and durable to handle various commercial and residential loads.',
    inclusions: [
      'Tile (ceramic, vitrified, marble, granite)',
      'Concrete flooring and IPS finish',
      'Industrial epoxy and PU flooring',
      'Parking tiles, pavers, interlocks',
      'Leveling, screeding, polishing services',
    ],
    useCases: ['Factory floors', 'Shopping complexes', 'Apartments'],
  },
  {
    slug: 'excavation',
    name: 'Excavation Works',
    shortName: 'Excavation',
    icon: Truck,
    tagline: 'Precision earthwork & site prep',
    overview:
      'Our excavation crew ensures precision earthwork as per approved engineering designs, backed by high-performance machinery.',
    inclusions: [
      'Trenching for foundations, pipelines',
      'Rock excavation and disposal',
      'Basement and pit excavation',
      'Backfilling, compaction, grading',
      'JCB, Poclain, Bobcat, Dumpers',
    ],
    useCases: ['Commercial plots', 'Townships', 'Industrial parks'],
  },
  {
    slug: 'site-development',
    name: 'Site Development',
    shortName: 'Site Development',
    icon: Globe,
    tagline: 'Raw plots, construction-ready',
    overview:
      'We prepare raw plots for construction with a complete suite of preparatory works.',
    inclusions: [
      'Land clearing and leveling',
      'Road development and internal pathways',
      'Drainage and water disposal setup',
      'Utility (water/electricity) setup',
      'Temporary site infrastructure & offices',
    ],
    useCases: ['Farmlands to plots', 'Gated communities', 'Layout developments'],
  },
  {
    slug: 'project-planning',
    name: 'Project Planning & Architecture',
    shortName: 'Project Planning',
    icon: Building2,
    tagline: 'From concept to permit-ready drawings',
    overview:
      'From concept to permit-ready drawings, our design team helps visualize, plan, and budget your dream project.',
    inclusions: [
      'Concept layout & floor plans',
      '3D elevations & walkthrough designs',
      'Structural engineering plans',
      'MEP (Mechanical, Electrical, Plumbing) coordination',
      'BOQ preparation, cost analysis',
      'Gantt charts, timeline scheduling',
    ],
    useCases: ['Villas', 'Apartment blocks', 'Commercial plazas', 'Retail units'],
  },
]

export const contactInfo = {
  phone: '+91 8333 85 87 85',
  phoneHref: '+918333858785',
  email: 'contact@avenbrik.com',
  website: 'www.avenbrik.com',
  financeDesk: '+91 9876543210',
}

export const whyChooseUs = [
  {
    icon: 'ShieldCheck',
    title: 'Engineering Excellence',
    description:
      'Every structure is backed by rigorous structural design, quality materials and certified workmanship that stands the test of time.',
  },
  {
    icon: 'Clock',
    title: 'On-Time Delivery',
    description:
      'Milestone-driven schedules with real-time tracking ensure your project is handed over exactly when promised.',
  },
  {
    icon: 'Wallet',
    title: 'Transparent Pricing',
    description:
      'Detailed BOQs and honest costing mean no hidden charges — you always know where your money goes.',
  },
  {
    icon: 'Users',
    title: 'Single Accountable Partner',
    description:
      'From design to construction, one team owns the entire delivery chain so nothing falls through the cracks.',
  },
  {
    icon: 'Leaf',
    title: 'Sustainable Practices',
    description:
      'Energy-efficient systems, rainwater harvesting and responsible material sourcing built into every project.',
  },
  {
    icon: 'Award',
    title: 'Proven Track Record',
    description:
      'A growing portfolio of residential, commercial and industrial projects delivered to exacting standards.',
  },
]

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/company/AvenBrick',
  facebook: 'https://www.facebook.com/AvenBrick',
  x: 'https://x.com/AvenBrick',
  instagram: 'https://www.instagram.com/AvenBrick/',
  youtube: 'https://www.youtube.com/@AvenBrick',
}
