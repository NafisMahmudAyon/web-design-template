export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'investors', label: 'Investors', href: '#investors' },
  { id: 'success-story', label: 'Success Story', href: '#testimonials' },
];

export const PARTNER_LOGOS = [
  { name: 'CHASE', symbol: 'CHASE ◆' },
  { name: 'JOHN DEERE', symbol: 'JOHN DEERE 🦌' },
  { name: 'Leader', symbol: 'Z Leader ⚲' },
  { name: 'Kubota', symbol: 'Kubota 🚜' },
  { name: 'GLEANER', symbol: 'GLEANER 🌾' },
];

export const SOLUTIONS_ACCORDION = [
  {
    id: 'productivity',
    title: 'Proven Farm Productivity',
    description: 'Boost seasonal crop yield by up to 34% through automated soil telemetry, localized nutrient mapping, and precision seed drill guidance.',
    badge: '34% Yield Increase',
  },
  {
    id: 'optimization',
    title: 'Intelligent Crop Optimization',
    description: 'Our AI powered system analyzes soil health, weather patterns, irrigation cycles, and crop growth data to recommend the most effective actions automatically, improving yield and reducing risk.',
    badge: 'Real-time AI',
    defaultActive: true,
  },
  {
    id: 'integration',
    title: 'Seamless Farm System Integration',
    description: 'Plug directly into John Deere Operations Center, Trimble GPS receivers, automated pivot irrigators, and on-farm weather stations with zero latency.',
    badge: 'Universal API',
  },
  {
    id: 'water-management',
    title: 'Smart Water & Resource Management',
    description: 'Cut water consumption by 40% using soil moisture probes and satellite evapotranspiration indices that schedule drip lines with pinpoint accuracy.',
    badge: '40% Water Saved',
  },
];

export const HOW_IT_WORKS_TABS = [
  {
    id: 'overview',
    title: 'Overview',
    subtitle: 'Real-Time Insights',
    icon: 'layout',
  },
  {
    id: 'smart-planning',
    title: 'Smart Planning',
    subtitle: 'Precision Planning',
    icon: 'sprout',
    isDefault: true,
  },
  {
    id: 'farm-control',
    title: 'Farm Control',
    subtitle: 'Total Management',
    icon: 'sliders',
  },
  {
    id: 'field-monitor',
    title: 'Field Monitor',
    subtitle: 'Growth Tracker',
    icon: 'activity',
  },
];

export const STATS = [
  {
    metric: '1.5M+',
    label: 'Acres Monitored',
    change: '+18% this season',
  },
  {
    metric: '500K+',
    label: 'Farmers Empowered',
    change: 'Across 42 countries',
  },
  {
    metric: '2M+',
    label: 'Farm Decisions Optimized',
    change: '99.4% accuracy rate',
  },
  {
    metric: '750K+',
    label: 'Successful Harvests',
    change: 'Zero crop failures logged',
  },
];

export const SMART_SOLUTIONS = [
  {
    id: 'sol-1',
    title: 'Precision Crop Management',
    description: 'Track soil, crops, and weather in real time for better decisions and higher yields.',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80',
    tag: 'Sensors & Drones',
  },
  {
    id: 'sol-2',
    title: 'Smart Farm Automation',
    description: 'Automate irrigation and operations to save time, cut costs, and boost efficiency.',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&auto=format&fit=crop&q=80',
    tag: 'Autonomous Systems',
  },
  {
    id: 'sol-3',
    title: 'Sustainable Agriculture',
    description: 'Protect soil, conserve resources, and grow healthy produce for the long term.',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&auto=format&fit=crop&q=80',
    tag: 'Regenerative Earth',
  },
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    quote: 'The platform was easy to implement and delivered value fast. Within the first month, we improved irrigation planning and reduced input costs significantly.',
    author: 'Michael Thompson',
    role: 'AgriField, Iowa',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80',
    metric: '+32% ROI',
  },
  {
    id: 'test-2',
    quote: "Real-time field data completely changed how we manage our crops. We're making smarter decisions and seeing healthier yields season after season.",
    author: 'Sarah Williams',
    role: 'CropSense, California',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80',
    metric: '-28% Water',
  },
  {
    id: 'test-3',
    quote: 'Connecting our tractors and pivot irrigators directly to Agrovia saved us hundreds of man-hours during peak planting and harvest cycles.',
    author: 'David Martinez',
    role: 'SolHarvest, Texas',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    metric: '450 hrs Saved',
  },
];

export const TESTIMONIAL_BRANDS = [
  'AgroField',
  'CropSense',
  'TerraGrow',
  'FieldLogic',
  'FarmSync',
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'Does Agrovia support sustainable farming?',
    answer: 'Yes. Agrovia is engineered around regenerative principles, providing micro-dosing recommendations for fertilizers, continuous organic matter telemetry, and erosion mitigation planning to enrich soil health over generational timelines.',
  },
  {
    id: 'faq-2',
    question: 'Can I monitor multiple fields at once?',
    answer: 'Absolutely. Agrovia allows you to manage and track multiple fields from a single dashboard for better control and visibility. You can assign different crop rotations, compare soil conditions, and control variable rate equipment across dispersed properties.',
    isDefaultOpen: true,
  },
  {
    id: 'faq-3',
    question: 'How do I get started with Agrovia?',
    answer: 'Getting started takes under 5 minutes. Simply register, delineate your field boundary on our satellite GIS interface, and our system will immediately fetch historical NDVI index scans and generate your customized crop calendar.',
  },
  {
    id: 'faq-4',
    question: 'Is Agrovia easy to use for non-technical farmers?',
    answer: 'Our mobile and tablet apps feature high-contrast, sun-readable interfaces with voice guidance and one-touch reports designed specifically for field conditions—no IT background or complex setup required.',
  },
  {
    id: 'faq-5',
    question: 'Can Agrovia help reduce farming costs?',
    answer: 'By preventing over-fertilization, pinpointing early weed infestations before they spread, and optimizing pump electricity during off-peak hours, our farmers report an average input cost reduction of 22% to 35% annually.',
  },
];
