export const navData = {
  brand: 'monsterDevs',
  links: [
    { label: 'HOME', href: '#hero' },
    {
      label: 'WORDPRESS',
      href: '#wordpress',
      hasDropdown: true,
      sublinks: [
        { label: 'Custom Enterprise Themes', desc: 'Handcrafted, ultra-fast block themes' },
        { label: 'Headless WordPress & Next.js', desc: 'Decoupled architecture for immense scale' },
        { label: 'High-Volume WooCommerce', desc: 'Zero latency checkout pipelines' },
        { label: 'Legacy Code Migration', desc: 'Secure PHP to modern stack refactors' },
      ],
    },
    { label: 'ABOUT', href: '#capabilities' },
    { label: 'NEWS', href: '#deliverables' },
    { label: 'CONTACT', href: '#contact' },
  ],
};

export const heroData = {
  badge: 'Trusted by industry experts',
  rating: '4.9',
  title: 'Dominate Your Digital Space.',
  description:
    "We don't just write code; we build the engines of your success. Whether you need enterprise-grade software, website or a scalable mobile app.",
  ctaPrimary: 'Start Your Project',
  ctaSecondary: 'Learn more about us',
  stats: {
    costSaved: '$500K',
    costLabel: 'Operational costs saved with our Tools',
    cleanCode: '100% Clean Code',
    years: '10+',
    yearsLabel: 'Years of Innovation',
  },
};

export const clientLogos = [
  { name: 'Logoipsum Pro', symbol: '◈' },
  { name: 'Logoipsum University', symbol: '⬡' },
  { name: 'Logoipsum FinTech', symbol: '◉' },
  { name: 'LOGOIPSUM Labs', symbol: '◬' },
  { name: 'Logoipsum Cloud', symbol: '◎' },
  { name: 'Logoipsum Global', symbol: '▲' },
];

export const metricsData = {
  headline: 'Transforming Ideas Into Impact',
  items: [
    { value: '500+', label: 'Successful projects' },
    { value: '60%', label: 'Faster launch time' },
    { value: '120%', label: 'Average ROI increase' },
  ],
};

export const capabilitiesData = {
  sectionTitle: 'Engineered for Impact: Our Core Capabilities',
  subtitle:
    'From concept to deployment, we deliver scale. Explore the high-performance toolkit we use to help your business dominate its market.',
  cards: [
    {
      id: 'mobile',
      icon: 'Smartphone',
      title: 'High-Velocity Mobile Apps',
      description:
        'Native and cross-platform solutions engineered for speed and flawless UX on iOS and Android.',
    },
    {
      id: 'api-iot',
      icon: 'Cpu',
      title: 'Seamless API & IoT Integration',
      description:
        'We bridge the gap between complex systems and hardware, that communicate effortlessly.',
    },
    {
      id: 'saas',
      icon: 'Database',
      title: 'Enterprise SaaS & Billing',
      description:
        'Robust, secure financial architectures and custom SaaS platforms built to handle complex things.',
    },
  ],
  featuredCard: {
    title: 'Where Security Meets Scalability',
    description:
      'Your data is your most valuable asset. We build fortress-level security protocols directly into high-speed architecture, so you never have to choose between safety and performance.',
    cta: 'Secure Your Future',
  },
};

export const deliverablesData = {
  title: 'What we deliver',
  subtitle:
    'We engineer the digital infrastructure that powers industry leaders. From operational efficiency to cutting-edge automation, we provide the tools you need to pull your performance levers and scale without limits.',
  items: [
    {
      id: 'bpo',
      title: 'Business Process Optimization',
      description:
        'Custom-built software ecosystems designed to streamline your operations, eliminate bottlenecks, and turn your raw data into actionable growth strategies. We make your business run faster and smarter.',
      linkText: 'Get Started Now',
      image: '/business-dev.jpg',
      colSpan: 'lg:col-span-8',
      type: 'photo-card',
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence Solutions',
      description:
        'Harness the power of machine learning and predictive analytics. We integrate smart algorithms that automate the complex and keep you ahead of the curve.',
      linkText: 'Explore AI Tech',
      colSpan: 'lg:col-span-4',
      badge: 'AI',
      type: 'ai-card',
    },
    {
      id: 'uiux',
      title: 'UI/UX Breakdown',
      description:
        "We don't just make it look good; we make it work. We engineer user-centric interface that turn visitors into loyal users.",
      linkText: 'See our designs',
      colSpan: 'lg:col-span-4',
      type: 'visual-card',
    },
    {
      id: 'webdev',
      title: 'Website Development',
      description:
        'We also provide high quality, well performing websites for your business that really helps you to grow',
      linkText: 'Checkout our portfolio',
      colSpan: 'lg:col-span-4',
      type: 'highlight-card',
    },
    {
      id: 'security',
      title: 'Security & Reliability',
      metric: '100%',
      metricLabel: 'Vulnerability Protection',
      description:
        'We prioritize data integrity and system resilience, ensuring your platform stands strong against digital threats.',
      colSpan: 'lg:col-span-4',
      type: 'metric-card',
    },
  ],
};

export const complexityData = {
  title: 'Transforming Complexity Into Competitive Power',
  subtitle:
    "We thrive where others struggle. From custom APIs to high-load full-stack applications, we build scalable, secure products designed to handle your business's toughest demands.",
  images: {
    tall: '/matrix-engineer.jpg',
    topSquare: '/team-collab.jpg',
    bottomSquare: '/cyber-nodes.jpg',
  },
  pillars: [
    {
      title: 'Advanced Software Engineering',
      description:
        'Tailored architectures built for raw performance. We write clean, efficient code that scales effortlessly as your user base grows.',
      link: 'Explore Solutions',
    },
    {
      title: 'Fortified Infrastructure',
      description:
        'Stability is non-negotiable. We implement rigid security protocols and optimized cloud environments to keep your data safe and your uptime perfect.',
      link: 'View Infrastructure',
    },
  ],
};

export const architectureCards = [
  {
    id: 'apis',
    icon: 'Terminal',
    title: "Powerful API's",
    description:
      'Build smarter systems using robust, well-documented APIs that simplify integrations and accelerate development processes.',
    cta: 'Get Started Now',
  },
  {
    id: 'security-isolated',
    icon: 'ShieldAlert',
    title: 'Secure & isolated',
    description:
      'Maintain complete control with isolated infrastructure designed to safeguard sensitive information and prevent cross-environment risks.',
    cta: 'Get Started Now',
  },
  {
    id: 'scale',
    icon: 'Zap',
    title: 'Ready for scale',
    description:
      'Scale your applications seamlessly with architecture optimized for speed, reliability, and evolving business requirements.',
    cta: 'Get Started Now',
  },
  {
    id: 'context',
    icon: 'Layers',
    title: 'Ongoing context',
    description:
      'Maintain seamless continuity with real-time context that persists across sessions, workflows, and collaborative environments.',
    cta: 'Get Started Now',
  },
];

export const supportData = {
  title: 'Dedicated Support Available in Every Language',
  subtitle:
    'Dedicated experts available 24/7 for clear communication, quick assistance, and outstanding worldwide experiences.',
  features: [
    'Expert guidance for code deployment and integration',
    'Fast, reliable support for technical challenges',
    'Continuous improvement through feedback and collaboration',
  ],
  cta: 'Get Started Now',
  image: '/support-agent.jpg',
};

export const footerData = {
  brand: 'monsterDevs',
  address: '5 Brayford Square, London, E1 0SG',
  copyright: 'Copyright © 2026 - Monster Devs Ltd',
  newsletterText: 'Subscribe to receive news, guides and product updates.',
};
