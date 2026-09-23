export const navLinks = [
  { name: 'Product', href: '#products' },
  { name: 'Features', href: '#features' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'About us', href: '#about' },
];

export const heroSpecs = [
  {
    cushions: {
      title: 'Cushions',
      desc: 'Standard one seat and one back cushion. Cushions attached with Velcro on the inside of the CAPSULE.',
    },
    frame: {
      title: 'Frame',
      desc: 'Standard solid oak legs in lacquered S084. Steel frame standard powder coated in SFT white or SFT black. Oak legs.',
    },
    upholstery: {
      title: 'Upholstery',
      desc: 'Fully upholstered including seat and back cushion; Duo upholstery with colour possible without additional price.',
    },
  },
  {
    cushions: {
      title: 'Ergonomics',
      desc: 'Anatomically curved lumbar support with high-resilience acoustic foam core ensuring posture comfort.',
    },
    frame: {
      title: 'Durability',
      desc: 'Certified commercial EN 16139 Level 2 stress tested oak timber and reinforced tubular steel subframe.',
    },
    upholstery: {
      title: 'Acoustics',
      desc: 'Class A sound absorption rating (ISO 354) creating a quiet micro-environment for phone calls and focus.',
    },
  },
  {
    cushions: {
      title: 'Sustainability',
      desc: '100% recycled eco-wool Gabriel polyester fabrics with Oeko-Tex Standard 100 certification.',
    },
    frame: {
      title: 'Craftsmanship',
      desc: 'FSC-certified European white oak with low-VOC organic waterborne satin seal finish.',
    },
    upholstery: {
      title: 'Finishes',
      desc: 'Over 48 bespoke two-tone colour combinations with stain-resistant Nanotex weave coating.',
    },
  },
];

export const whyChooseFeatures = [
  {
    id: '01',
    title: 'Design',
    description: 'The sleek and modern design of capsule chairs adds a touch of the future to any room.',
  },
  {
    id: '02',
    title: 'Comfort',
    description: 'Step into a capsule chair, and you\'ll instantly understand what true comfort means.',
  },
  {
    id: '03',
    title: 'Space-Saving',
    description: 'Capsule chairs are the ideal solution for maximizing space in small apartments or rooms.',
  },
  {
    id: '04',
    title: 'Versatile',
    description: 'Whether you\'re a gamer, a reader, or someone who simply loves to lounge, capsule chairs.',
  },
];

export const whatSetsUsApart = [
  {
    id: 'quality',
    title: 'High Quality Assurance',
    description: 'Each piece undergoes 24 rigorous quality control checkpoints, utilizing precision CNC timber routing and hand-tailored acoustic upholstery for lifetime resilience.',
  },
  {
    id: 'selection',
    title: 'Unique Selection',
    description: 'Exclusively curated by renowned Dutch designer Kateryna Sokolova, blending acoustic sanctuary architecture with residential warmth.',
  },
  {
    id: 'customer',
    title: 'Customer-Centric Approach',
    description: 'Enjoy complimentary 3D interior spatial consulting, 100-day in-space trial guarantees, and dedicated white-glove installation across the country.',
  },
  {
    id: 'sustainable',
    title: 'Sustainable Choices',
    description: 'Crafted with zero-waste closed loop fabric recycling, zero formaldehyde adhesives, and sustainably harvested European oak.',
  },
];

export const featuredProducts = [
  {
    id: 'capsule-chair',
    name: 'Capsule | Chairs',
    designer: 'Designed by Kateryna Sokolova',
    price: 395.00,
    rating: 4.8,
    reviews: '8.5k',
    image: '/assets/prod-chair.png',
    category: 'Best Deals',
    isPopular: true,
    colors: ['#0B6577', '#C4B5A5', '#2E3338'],
    dimensions: 'W 920 x D 840 x H 1680 mm',
    tag: 'Acoustic Cocoon',
  },
  {
    id: 'capsule-lounge',
    name: 'Capsule | Lounge',
    designer: 'Designed by Kateryna Sokolova',
    price: 395.00,
    rating: 4.8,
    reviews: '8.5k',
    image: '/assets/prod-lounge.png',
    category: 'Best Deals',
    isPopular: true,
    colors: ['#C4B5A5', '#0B6577', '#DF7D72'],
    dimensions: 'W 1040 x D 920 x H 840 mm',
    tag: 'Lounge Comfort',
  },
  {
    id: 'capsule-bench',
    name: 'Capsule | Bench',
    designer: 'Designed by Kateryna Sokolova',
    price: 395.00,
    rating: 4.8,
    reviews: '8.5k',
    image: '/assets/prod-bench.png',
    category: 'Best Deals',
    isPopular: false,
    colors: ['#2E3338', '#E5E7EB', '#0B6577'],
    dimensions: 'W 800 x D 500 x H 460 mm',
    tag: 'Modular Ottoman',
  },
  {
    id: 'capsule-pod',
    name: 'Capsule | Duo Pod',
    designer: 'Designed by Kateryna Sokolova',
    price: 640.00,
    rating: 4.9,
    reviews: '9.2k',
    image: '/assets/sets-apart-chair.png',
    category: 'Most Popular',
    isPopular: true,
    colors: ['#0B6577', '#A33E38', '#40454A'],
    dimensions: 'W 1200 x D 900 x H 1720 mm',
    tag: 'Privacy Pod',
  },
  {
    id: 'capsule-grand',
    name: 'Capsule | High-Back',
    designer: 'Designed by Kateryna Sokolova',
    price: 480.00,
    rating: 4.9,
    reviews: '11.4k',
    image: '/assets/hero-capsule-chair.png',
    category: 'Most Popular',
    isPopular: true,
    colors: ['#1A4D59', '#3B4146', '#B7AFA6'],
    dimensions: 'W 960 x D 860 x H 1700 mm',
    tag: 'Signature Model',
  },
];

export const clientReviews = [
  {
    id: 1,
    quote: 'Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest-hottest deals on the Internet.',
    author: 'Rowhan Smith',
    location: 'New York',
    role: 'Creative Director at Studio MASB',
    rating: 5,
    avatar: '/assets/testimonial-client.png',
  },
  {
    id: 2,
    quote: 'The Casala Capsule chairs have revolutionized our collaborative office floor. They offer acoustic privacy without building heavy partitions. Beautiful design and incredible comfort.',
    author: 'Sophia Chen',
    location: 'San Francisco',
    role: 'Head of Workplace Design',
    rating: 5,
    avatar: '/assets/testimonial-client.png',
  },
  {
    id: 3,
    quote: 'The tactile oak legs, premium wool upholstery, and stunning sculptural lines turn any living room into an architectural statement. Truly heirloom quality furniture.',
    author: 'David Van Der Meer',
    location: 'Amsterdam',
    role: 'Senior Architect',
    rating: 5,
    avatar: '/assets/testimonial-client.png',
  },
];

export const footerLinks = {
  blog: [
    { name: 'Company', href: '#' },
    { name: 'Career', href: '#' },
    { name: 'Mobile', href: '#' },
    { name: 'How it works', href: '#' },
  ],
  about: [
    { name: 'Contacts', href: '#' },
    { name: 'About us', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Terms of service', href: '#' },
  ],
  product: [
    { name: 'Terms of use', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'Log in', href: '#' },
  ],
  downloads: [
    { name: 'Google Play', icon: 'Play', href: '#' },
    { name: 'Apple Store', icon: 'Apple', href: '#' },
    { name: 'Desktop', icon: 'Monitor', href: '#' },
  ],
};
