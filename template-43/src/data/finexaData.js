export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'solutions', label: 'Solutions', href: '#solutions' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const TRUST_LOGOS = [
  { name: 'Square', symbol: 'Square' },
  { name: 'Adobe', symbol: 'Adobe' },
  { name: 'Reddit', symbol: 'Reddit' },
  { name: 'Medium', symbol: 'Medium' },
  { name: 'Trello', symbol: 'Trello' },
  { name: 'GitHub', symbol: 'GitHub' },
];

export const PAYMENT_PARTNERS = [
  { name: 'Payoneer' },
  { name: 'Wise' },
  { name: 'Stripe' },
  { name: 'PayPal' },
];

export const PLATFORM_PILLARS = [
  {
    id: 'smart-payments',
    icon: 'credit-card',
    title: 'Smart Payments',
    description: 'Send and receive money instantly with full visibility across accounts and partners.',
    badge: 'Real-Time',
    highlighted: true,
  },
  {
    id: 'financial-insights',
    icon: 'bar-chart',
    title: 'Financial Insights',
    description: 'Track spending, forecast revenue, and monitor cash flow with AI-powered insights.',
    badge: 'AI Powered',
  },
  {
    id: 'billing-invoicing',
    icon: 'file-text',
    title: 'Billing & Invoicing',
    description: 'Create professional invoices, automate payments, and stay on top of what\'s due.',
    badge: 'Automated',
  },
  {
    id: 'integrations-hub',
    icon: 'zap',
    title: 'Integrations Hub',
    description: 'Connect seamlessly with accounting tools, banks, and payment gateways in real time.',
    badge: '100+ Integrations',
  },
  {
    id: 'performance-dashboard',
    icon: 'layout',
    title: 'Performance Dashboard',
    description: 'View your financial health at a glance with clear analytics and live reporting.',
    badge: 'Live Stream',
  },
  {
    id: 'treasury-cash',
    icon: 'shield',
    title: 'Treasury & Cash Control',
    description: 'Optimize liquidity, manage reserves, and put idle funds to work intelligently.',
    badge: 'Institutional',
  },
];

export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Professional Plan',
    tagline: 'For Growing Businesses',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    period: '/yearly',
    ctaText: 'Current Plan',
    isCurrent: true,
    isPopular: false,
    features: [
      'Everything in Starter',
      'Advanced financial analytics',
      'Cash flow forecasting',
      'Multi-user access',
      'Priority support',
    ],
  },
  {
    id: 'pro',
    name: 'Professional Plan',
    tagline: 'For Growing Businesses',
    monthlyPrice: '$29.00',
    yearlyPrice: '$259.00',
    period: '/yearly',
    ctaText: 'Upgrade to Pro',
    isCurrent: false,
    isPopular: true,
    features: [
      'Everything in Starter',
      'Advanced financial analytics',
      'Cash flow forecasting',
      'Multi-user access',
      'Priority support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    tagline: 'For Large Organizations',
    monthlyPrice: '$89.00',
    yearlyPrice: '$800.00',
    period: '/yearly',
    ctaText: 'Upgrade to Premium',
    isCurrent: false,
    isPopular: false,
    features: [
      'Everything in Starter',
      'Advanced financial analytics',
      'Cash flow forecasting',
      'Multi-user access',
      'Priority support',
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 'square',
    company: 'Square',
    author: 'Daniel Morgan',
    role: 'Financial Analyst',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    quote: 'We finally understand where our money goes, which makes every financial decision more confident and intentional.',
  },
  {
    id: 'nextfin',
    company: 'Nextfin',
    author: 'Sophia Vance',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    quote: 'Finexa replaced four disparate accounting tools and cut our month-end reconciliation time from five days to twenty minutes.',
  },
  {
    id: 'payzen',
    company: 'Payzen',
    author: 'Liam Wright',
    role: 'VP of Finance',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    quote: 'The real-time global transfer engine helped us scale multi-currency payroll across 18 countries without hidden FX markups.',
  },
  {
    id: 'quanty',
    company: 'Quanty',
    author: 'Elena Rostova',
    role: 'Treasury Lead',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    quote: 'Automatic cash pooling and predictive liquidity alerts saved our team hundreds of hours during our hypergrowth phase.',
  },
  {
    id: 'investra',
    company: 'Investra',
    author: 'Marcus Chen',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    quote: 'The transparency, bank-grade encryption, and intuitive user interface give our investment committee complete peace of mind.',
  },
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: '1. What is this platform used for?',
    answer: 'Finexa is a unified global money transfer and intelligent financial management platform that helps businesses and individuals send international payments, convert currencies at live interbank rates, and automate cash flow analytics.',
  },
  {
    id: 'faq-2',
    question: '2. Is my financial data secure here?',
    answer: 'Yes. All data is encrypted end-to-end using AES-256 bank-level encryption, multi-factor biometric authentication, and SOC2-certified infrastructure with 99.99% uptime compliance.',
  },
  {
    id: 'faq-3',
    question: '3. Can I connect multiple bank accounts?',
    answer: 'Absolutely. You can connect and manage multiple bank accounts from over 50+ countries for seamless financial tracking and automated treasury management.',
    defaultOpen: true,
  },
  {
    id: 'faq-4',
    question: '4. Does it work for small businesses?',
    answer: 'Yes. Our platform is designed for individuals, freelancers, and businesses of all sizes to manage finances effortlessly.',
    defaultOpen: true,
  },
  {
    id: 'faq-5',
    question: '5. How quickly can I get started?',
    answer: 'Onboarding takes less than 3 minutes. You can sign up with your email, verify your identity with instant KYC, and start executing transfers immediately.',
  },
  {
    id: 'faq-6',
    question: '6. Are there any hidden fees?',
    answer: 'Never. We charge zero hidden fees or inflated exchange rate markups. All network costs and transparent low fees are displayed before you click confirm.',
  },
  {
    id: 'faq-7',
    question: '7. Can I make international payments?',
    answer: 'Yes, you can transfer money to over 180+ countries across 45+ local and major currencies with instant or same-day local settlement.',
  },
  {
    id: 'faq-8',
    question: '8. Is there customer support available?',
    answer: 'We provide 24/7 dedicated live chat and phone support for all accounts, plus dedicated account managers for Enterprise plans.',
  },
  {
    id: 'faq-9',
    question: '9. Does it support multiple currencies?',
    answer: 'Finexa supports multi-currency accounts allowing you to hold, convert, and transact in USD, EUR, GBP, BDT, CAD, AUD, JPY, and more seamlessly.',
  },
  {
    id: 'faq-10',
    question: '10. Can I track my spending and savings goals?',
    answer: 'Yes! Automated categorization and AI-driven spending insights track every transaction, helping you build automated savings rules and custom goals.',
  },
];
