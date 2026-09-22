export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#testimonials' },
];

export const heroData = {
  badge: 'Grow with confidence',
  title: 'Empowering Your Wealth With Smart Finance',
  subtitle: 'Take charge of your finances with tools to save, invest, and grow your wealth.',
  ctaText: 'Get Started',
  savingCard: {
    title: 'Saving',
    period: 'This month',
    items: [
      { name: 'Emergency Fund', amount: '$1,120.50', color: 'blue' },
      { name: 'Fixed Deposit', amount: '$980.00', color: 'emerald' },
    ]
  },
  transferCard: {
    title: 'Quick Transfer',
    cardType: 'Debit Card',
    balance: '$20,743',
    defaultAmount: '$2,640'
  }
};

export const bentoFeatures = [
  {
    id: 'global-payments',
    title: 'Manage global payments. Effortlessly track, convert, and stay compliant in one dashboard.',
    type: 'currencies',
    items: [
      { id: 'INV384', flag: '🇺🇸', country: 'United States', currency: 'USD', amount: '$1,500' },
      { id: 'INV385', flag: '🇫🇷', country: 'France', currency: 'EUR', amount: '€1,200' },
      { id: 'INV386', flag: '🇬🇧', country: 'United Kingdom', currency: 'GBP', amount: '£900' },
    ]
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics & Reports. Gain actionable insights with detailed financial reports and visual analytics.',
    type: 'analysis',
    amount: '$83,837.93',
    bars: [
      { month: 'Jan', val: 30 },
      { month: 'Feb', val: 42 },
      { month: 'Mar', val: 78, isHigh: true },
      { month: 'Apr', val: 59 },
      { month: 'May', val: 38 },
      { month: 'Jun', val: 52 },
    ]
  },
  {
    id: 'statistics',
    title: 'Track income and expenses in real time with clear visuals to understand cash flow and spot overspending quickly.',
    type: 'stats',
    incomeShare: '60%',
    expenseShare: '40%'
  },
  {
    id: 'invoices',
    title: 'Generate invoices. Automatically send reminders and track payments seamlessly, all in one place.',
    type: 'autopay',
    platformsCount: 4,
    items: [
      { name: 'Doulube', period: 'Monthly', amount: '$100', status: 'Complete' },
      { name: 'Astroline', period: 'Monthly', amount: '$200', status: 'Pending' },
      { name: 'NetWave', period: 'Monthly', amount: '$120', status: 'Complete' },
      { name: 'Novalux', period: 'Monthly', amount: '$150', status: 'Complete' },
    ]
  }
];

export const impactMetrics = [
  { stat: '92%', label: 'Improve cash flow visibility' },
  { stat: '90%', label: 'Make faster, data-driven decisions' },
  { stat: '97%', label: 'Continue using our platform long-term' },
  { stat: '85%', label: 'Reduce financial risk effectively' }
];

export const platformFeatures = [
  {
    icon: 'credit-card',
    title: 'Smart Payments',
    desc: 'Send and receive money instantly with full visibility and confidence across accounts and partners.'
  },
  {
    icon: 'bar-chart-2',
    title: 'Financial Insights',
    desc: 'Track spending, forecast revenue, and monitor cash flow with AI-powered financial intelligence.'
  },
  {
    icon: 'file-text',
    title: 'Billing & Invoicing',
    desc: 'Create professional invoices, automate payments, and stay on top of what’s due to effortlessly.'
  },
  {
    icon: 'git-merge',
    title: 'Integrations Hub',
    desc: 'Connect seamlessly with tools like accounting software, banks, and payment gateways in real time.'
  },
  {
    icon: 'layout',
    title: 'Performance Dashboard',
    desc: 'View your financial health at a glance with clear analytics, trends, and real-time reporting.'
  },
  {
    icon: 'shield',
    title: 'Treasury & Cash Control',
    desc: 'Optimize liquidity, manage reserves, and put idle funds to work with smart allocation tools.'
  }
];

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter Plan',
    for: 'For Freelancers & Small Teams',
    monthlyPrice: '$19',
    yearlyPrice: '$129.00',
    featured: false,
    features: [
      'Unlimited invoices & clients',
      'Real-time income & expense tracking',
      'Automated tax-ready reports',
      'Secure cloud storage',
      'Email support'
    ]
  },
  {
    id: 'pro',
    name: 'Professional Plan',
    for: 'For Growing Businesses',
    monthlyPrice: '$39',
    yearlyPrice: '$259.00',
    featured: true,
    features: [
      'Everything in Starter',
      'Advanced financial analytics',
      'Cash flow forecasting',
      'Multi-user access',
      'Priority support'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    for: 'For Large Organizations',
    monthlyPrice: '$99',
    yearlyPrice: '$800.00',
    featured: false,
    features: [
      'Everything in Professional',
      'Custom financial dashboards',
      'Dedicated account manager',
      'API & system integrations',
      'Enterprise-grade security'
    ]
  }
];

export const testimonials = [
  {
    quote: 'Clear financial insights that help us make smarter, faster business decisions every day.',
    author: 'Michael Turner',
    role: 'Investment Advisor',
    company: 'Sisyphus',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80'
  },
  {
    quote: 'Managing cash flow is simple now, with real-time visibility and meaningful financial control.',
    author: 'Daniel Foster',
    role: 'Product Manager',
    company: 'Zapier',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80'
  },
  {
    quote: 'This platform gave us clarity, confidence, and better control over our financial operations.',
    author: 'Michael Turner',
    role: 'Investment Advisor',
    company: 'Webflow',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&h=128&q=80'
  }
];

export const faqsList = [
  {
    category: 'ACCOUNT',
    num: '01',
    question: 'How do I update my account information?',
    answer: 'Navigate to Settings > Profile in your dashboard. You can update your legal business name, authorized representatives, notification preferences, and tax identifiers with automatic audit logging.'
  },
  {
    category: 'ACCOUNT',
    num: '02',
    question: 'Can I change my email address?',
    answer: 'Yes. Simply go to account settings, enter your new email, and verify it securely.'
  },
  {
    category: 'ACCOUNT',
    num: '03',
    question: 'What should I do if I forget my password?',
    answer: 'Click "Forgot Password" on the login screen. You will receive an encrypted password reset token valid for 15 minutes along with secondary SMS two-factor verification.'
  },
  {
    category: 'PAYMENTS',
    num: '04',
    question: 'How long does it take to process payments?',
    answer: 'Standard ACH transfers settle in 1–2 business days. Real-time wire transfers, SEPA instant payments, and card charges settle immediately into your Finora treasury vault.'
  },
  {
    category: 'PAYMENTS',
    num: '05',
    question: 'Are refunds handled automatically?',
    answer: 'Eligible refunds are processed automatically and reflected within standard banking timelines.'
  },
  {
    category: 'PAYMENTS',
    num: '06',
    question: 'How can I contact customer support?',
    answer: 'Our dedicated 24/7 financial support engineers can be reached via in-app live chat, phone at +1 (800) 456-7890, or email at hello@plantora.earth.'
  },
  {
    category: 'PAYMENTS',
    num: '07',
    question: 'Do you provide weekend assistance?',
    answer: 'Yes, our emergency treasury and fraud monitoring teams operate 24 hours a day, 7 days a week, 365 days a year without interruption.'
  },
  {
    category: 'PAYMENTS',
    num: '08',
    question: 'Where can I find detailed financial guides?',
    answer: 'Visit the Finora Knowledge Base to download comprehensive guides on cash-flow forecasting, multi-currency invoicing, and tax accounting.'
  }
];
