export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services', hasDropdown: true },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const PLATFORM_ACCORDION = [
  {
    id: 'revenue-tracking',
    title: 'Real-Time Revenue Tracking',
    description: 'Monitor every incoming transaction, customer recurring deposit, and cash inflow across multiple bank connections instantly.',
  },
  {
    id: 'automated-reports',
    title: 'Automated Financial Reports Delivery',
    description: 'Receive detailed financial reports automatically—no manual work required. Stay updated with timely insights tailored to your business.',
    defaultActive: true,
  },
  {
    id: 'performance-pulse',
    title: 'Visual Business Performance Pulse',
    description: 'Track key performance indicators, cash burn rate, and operating margins with interactive charts updated in real time.',
  },
  {
    id: 'secure-integration',
    title: 'Secure Finance Tool Integration',
    description: 'Connect seamlessly with your existing accounting software, ERPs, and billing engines with bank-grade 256-bit encryption.',
  },
  {
    id: 'webflow-feeds',
    title: 'Feeds For Webflow',
    description: 'Stream live financial metrics, pricing updates, and public invoices directly to your web presence without writing backend code.',
  },
];

export const KPI_PILLARS = [
  {
    metric: '↑ 50%',
    label: 'Client Acquisition',
  },
  {
    metric: '↑ 65%',
    label: 'Sales Revenue',
  },
  {
    metric: '↑ 45%',
    label: 'Improved Security',
  },
  {
    metric: '↑ 70%',
    label: 'Toolkit Engagement',
  },
];

export const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'Starter',
    icon: 'zap',
    monthlyPrice: '$9.99',
    yearlyPrice: '$6.99',
    period: '( per month )',
    isPopular: false,
    additionalInfo: 'Additional information can be added here',
    features: [
      'Expense Tracking',
      'Income Management',
      'Basic Financial Reports',
      'Budgeting Tools',
    ],
  },
  {
    id: 'pro',
    name: 'Growth',
    icon: 'rocket',
    monthlyPrice: '$19.99',
    yearlyPrice: '$13.99',
    period: '( per month )',
    isPopular: true,
    badge: 'Most Popular',
    additionalInfo: 'Additional information can be added here',
    features: [
      'Everything in Basic Plan',
      'Cash Flow Management',
      'Advanced Financial Reports',
      'Tax Calculation & Support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Premium',
    icon: 'diamond',
    monthlyPrice: '$29.99',
    yearlyPrice: '$20.99',
    period: '( per month )',
    isPopular: false,
    additionalInfo: 'Additional information can be added here',
    features: [
      'Everything in Standard Plan',
      'Inventory Management',
      'Payroll Management',
      'Custom Financial Reports',
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    stars: 5,
    quote: 'Personalized service, highly professional and trustworthy team, makes banking a pleasure. Personalized service and trustworthy execution every single day.',
    author: 'Michael Carter',
    role: 'Web Developer, Spark Studios',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
  },
  {
    id: 'test-2',
    stars: 5,
    quote: 'Personalized service, highly professional and trustworthy team, makes banking a pleasure.professional and trustworthy team, makes banking a pleasure.',
    author: 'David Thompson',
    role: 'Software Engineer, NovaTech Solutions',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    isActive: true,
  },
  {
    id: 'test-3',
    stars: 5,
    quote: 'Personalized service, highly professional and trustworthy team, makes banking a pleasure with intuitive tools that eliminate spreadsheet headaches.',
    author: 'Sarah Jenkins',
    role: 'CFO, Elevate Brand Group',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
  },
];

export const BLOG_POSTS = [
  {
    id: 'blog-1',
    city: 'Vancouver',
    date: 'March 15, 2026',
    title: 'Eco-Friendly Investments: Exploring Sustainable Fina...',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'blog-2',
    city: 'Toronto',
    date: 'July 4, 2027',
    title: 'Green Finance: The Rise of Sustainable Investment De...',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'blog-3',
    city: 'Montreal',
    date: 'November 30, 2028',
    title: 'Investing in Tomorrow: How Sustainable Practices Shap...',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
  },
];
