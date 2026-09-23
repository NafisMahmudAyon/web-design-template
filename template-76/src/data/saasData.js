export const navLinks = [
  { name: 'Business', href: '#business', active: true },
  { name: 'Pricing', href: '#pricing', active: false },
  { name: 'Features', href: '#features', active: false },
  { name: 'About', href: '#about', active: false },
];

export const partnerLogos = [
  { name: 'Amsterdam', fontStyle: 'font-bold tracking-tight text-lg' },
  { name: 'venice.', fontStyle: 'font-serif italic text-lg' },
  { name: 'ther', fontStyle: 'font-light tracking-widest text-lg' },
  { name: 'ob', fontStyle: 'font-mono font-black text-xl' },
  { name: 'M MILANO', fontStyle: 'font-semibold tracking-wider text-sm' },
  { name: 'Amsterdam', fontStyle: 'font-bold tracking-tight text-lg' },
  { name: 'venice.', fontStyle: 'font-serif italic text-lg' },
];

export const bentoStats = [
  {
    id: 1,
    value: '390+',
    label: 'Expert Support Team',
    accentColor: 'text-[#6D28D9]',
    bgColor: 'bg-white',
  },
  {
    id: 2,
    value: '24k+',
    label: 'Project completed',
    accentColor: 'text-[#111827]',
    bgColor: 'bg-white',
  },
  {
    id: 3,
    value: '90%',
    label: 'Repeated Customers',
    accentColor: 'text-[#6D28D9]',
    bgColor: 'bg-white',
  },
  {
    id: 4,
    value: '99%',
    label: 'Satisfaction client',
    accentColor: 'text-[#111827]',
    bgColor: 'bg-white',
  },
];

export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    priceMonthly: 0,
    priceAnnual: 0,
    period: '/month',
    ctaText: 'Get started for free',
    isPopular: false,
    description: 'Perfect for small teams and solopreneurs exploring new workflows.',
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '2GB storage',
      'Integrations',
      'Basic support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Most popular',
    priceMonthly: 9,
    priceAnnual: 7,
    period: '/month',
    ctaText: 'Sign up now',
    isPopular: true,
    description: 'Our flagship plan designed for scaling startups and fast-moving teams.',
    features: [
      'Up to 50 project members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support',
      'Advanced analytics',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    priceMonthly: 19,
    priceAnnual: 15,
    period: '/month',
    ctaText: 'Sign up now',
    isPopular: false,
    description: 'Enterprise-grade governance, custom integrations, and 24/7 dedicated support.',
    features: [
      'Unlimited project members',
      'Unlimited tasks and projects',
      '200GB storage',
      'Integrations',
      'Dedicated account manager',
      'Custom fields',
      'Advanced analytics',
      'Export capabilities',
    ],
  },
];

export const servicesList = [
  {
    id: 'mobile',
    title: 'Mobile App Development',
    category: 'Application Architecture',
    description: 'High-performance cross-platform iOS and Android applications built with instant data synchronization, offline caching, and native biometric security.',
  },
  {
    id: 'api',
    title: 'API Integration',
    category: 'System Connectivity',
    description: 'We help you streamline operations by connecting your apps, services, and platforms through powerful API integrations.',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    category: 'Product Experience',
    description: 'Human-centered digital interfaces crafted to reduce cognitive fatigue, accelerate workflow speeds, and maximize conversion across all viewports.',
  },
  {
    id: 'software',
    title: 'Custom Software',
    category: 'Enterprise Solutions',
    description: 'Tailor-made backend infrastructure, microservices, and workflow automation engines designed specifically for your proprietary business logic.',
  },
];

export const twitterTestimonials = [
  {
    id: 1,
    name: 'Luke Mccormick',
    handle: '@andysm',
    verified: true,
    text: 'Since I started it, our result has skyrocketed! The user interface is so intuitive and easy to navigate, and the features are exactly what I need.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    id: 2,
    name: 'Elena Rostova',
    handle: '@elena_dev',
    verified: true,
    text: 'Since I started using this platform, our result has skyrocketed! The user interface is so intuitive and easy to navigate, and the features are exactly what I need.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    id: 3,
    name: 'Marcus Vance',
    handle: '@marcus_v',
    verified: true,
    text: 'Seamless API integrations and our engineering team cut deployment friction by more than 60%. The ROI has been monumental.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    id: 4,
    name: 'Sophia Sterling',
    handle: '@sophia_pm',
    verified: true,
    text: 'Managing over 80 client deliverables without dropping a single task. The cleanest B2B tool we have adopted this decade.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    id: 5,
    name: 'David Chen',
    handle: '@david_tech',
    verified: true,
    text: 'The support team is astonishingly responsive. Setup took literally 10 minutes and our whole business is humming.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80',
  },
];

export const faqList = [
  {
    id: 'switch',
    question: 'Can I switch plans?',
    answer: 'Use and re-use tons of responsive sections too a main create the perfect layout. Sections are firmly of organised into the perfect start. You can upgrade, downgrade, or cancel anytime from your settings.',
  },
  {
    id: 'education',
    question: 'Is there an education discount?',
    answer: 'Yes! We offer a 50% discount for verified educational institutions, students, teachers, and non-profit organizations.',
  },
  {
    id: 'users',
    question: 'Can we add users later?',
    answer: 'Absolutely. You can invite team members with granular permission roles whenever your organization expands.',
  },
  {
    id: 'payments',
    question: 'How are payments processed?',
    answer: 'All transactions are encrypted with bank-level 256-bit SSL via Stripe and PayPal. We accept all major international credit cards.',
  },
  {
    id: 'support',
    question: 'How do I get support?',
    answer: 'Our dedicated support engineers are available 24/7 through live in-app chat, dedicated Slack connect channels, and priority ticketing.',
  },
  {
    id: 'upgrade',
    question: 'Do I need to upgrade?',
    answer: 'Our Free tier is completely free forever. You only need to upgrade if your team requires expanded cloud storage, advanced analytics, or custom API endpoints.',
  },
];
