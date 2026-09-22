export const NAV_LINKS = [
  { id: 'home', label: 'Home', active: true },
  { id: 'features', label: 'Features', hasDropdown: true },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'help', label: 'Help' },
];

export const TRUSTED_LOGOS = [
  { name: 'Ephemeral', icon: '✦' },
  { name: 'Wildcrafted', icon: '🌿' },
  { name: 'Codecraft_', icon: '</>' },
  { name: 'Convergence', icon: '⁑' },
  { name: 'ImgCompress', icon: '◫' },
  { name: 'Epicurious', icon: '❖' },
  { name: 'Watchtower', icon: '⚑' },
  { name: 'Renaissance', icon: '◈' },
  { name: 'ContrastAI', icon: '◐' },
  { name: 'Nietzsche', icon: '☼' },
];

export const HOW_IT_WORKS = [
  {
    id: 'analytics',
    title: 'Real-Time Analytics & A/B Testing',
    desc: 'Monitor opens, clicks, bounces, and conversions instantly as they happen. Optimize campaigns by testing different subject lines, or send times.',
    icon: 'chart',
  },
  {
    id: 'builder',
    title: 'Drag-and-Drop Email Builder',
    desc: 'Easily create stunning emails with our intuitive, no-code drag-and-drop interface.',
    icon: 'layout',
  },
  {
    id: 'campaigns',
    title: 'Campaigns & Personalized Content',
    desc: 'Deliver relevant content to each user using dynamic personalization tags. Set up email sequences that send automatically based on user actions.',
    icon: 'megaphone',
  },
  {
    id: 'scheduling',
    title: 'Smart Scheduling & List Management',
    desc: 'Schedule campaigns based on recipient time zones or engagement windows. Effortlessly manage contacts.',
    icon: 'calendar',
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: 'case-study',
    author: 'Lali Esok Maharmaaz',
    role: 'Growth Lead at NexaCorp',
    quote: 'I Boosted Sales Efficiency By 50% With This Platform',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'review-1',
    author: 'Max Hunter',
    role: 'Maxwell Bright, Tech Innovator',
    quote: 'The real-time data and reporting features have empowered us to make better-informed decisions',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    stars: 5,
  },
  {
    id: 'review-2',
    author: 'Jake Rivers',
    role: 'Jasper Stone, Renewable Energy Consultant',
    quote: "Thanks to the real-time data and reporting features, we've been able to make more informed choices on all outbound sequences.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    stars: 5,
  },
];

export const PRICING_PLANS = [
  {
    id: 'free',
    name: 'Free Plan',
    desc: 'Perfect for individuals or startups exploring financial automation.',
    price: 'Free',
    period: '',
    cta: 'Start a Project',
    isPopular: false,
    features: [
      'Simple Invoicing Solutions',
      'Comprehensive Dashboard',
      'Expense Management',
      '24/7 Email Assistance',
      'Basic Reporting Features',
    ],
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    desc: 'For growing teams who need more power and flexibility.',
    price: '$120',
    period: '/Month',
    cta: 'Start a Project',
    isPopular: true,
    features: [
      'All Features at No Cost',
      'Endless Dashboard Options',
      'Collaborate Seamlessly with Team',
      'In-Depth Reporting Tools',
      'Expedited Email Assistance',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    desc: 'Custom solutions for large teams and businesses.',
    price: '$450',
    period: '/Month',
    cta: 'Start a Project',
    isPopular: false,
    features: [
      'Custom Pricing',
      'Everything in Pro',
      'Dedicated Account Manager',
      'API Access & Integrations',
      'Custom Security & Compliance',
    ],
  },
];

export const FAQS = [
  {
    id: 'q1',
    question: 'How do I grow my email list?',
    answer: 'You can grow your email list through opt-in forms on your website, lead magnets (eBooks, discounts, etc.), social media campaigns, and by providing valuable content that encourages sign-ups.',
  },
  {
    id: 'q2',
    question: 'Is it legal to send marketing emails?',
    answer: 'Yes, as long as you comply with applicable data protection regulations such as CAN-SPAM, GDPR, and CASL by obtaining proper user consent and providing clear opt-out mechanisms in every email.',
  },
  {
    id: 'q3',
    question: 'How can I measure email marketing success?',
    answer: 'Key metrics include delivery rate, unique open rates, click-through rate (CTR), conversion rate, unsubscribe rate, and direct revenue generated per campaign.',
  },
  {
    id: 'q4',
    question: 'What is a good email open rate?',
    answer: 'A healthy average open rate across most B2B and B2C industries falls between 20% and 35%, with top targeted signature marketing campaigns exceeding 45%.',
  },
  {
    id: 'q5',
    question: 'How often should I send marketing emails?',
    answer: 'Frequency depends on your audience expectations and content value. For signature marketing and updates, weekly or bi-weekly cadence yields highest engagement without subscription fatigue.',
  },
];

export const FOOTER_SECTIONS = [
  {
    title: 'About',
    links: ['Company', 'Leadership', 'Press', 'Careers', 'Disclaimers'],
  },
  {
    title: 'Quick Links',
    links: ['Home', 'About Us', 'Features', 'Testimonials', 'Blog', 'Security & Privacy'],
  },
  {
    title: 'About',
    links: ['Company', 'Leadership', 'Press', 'Careers', 'Disclaimers'],
  },
  {
    title: 'Quick Links',
    links: ['Home', 'About Us', 'Features', 'Testimonials', 'Blog', 'Security & Privacy'],
  },
  {
    title: 'Resources',
    links: ['News & Blogs', 'Financial Guides', 'Budget Calculator', 'Investment Tips', 'Privacy Policy', 'Terms of Service'],
  },
  {
    title: 'Help Center',
    links: ['Getting Started', 'Account Setup', 'Report an Issue', 'Security Help', 'Contact Support', 'Live Chat'],
  },
];
