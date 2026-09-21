export const HERO_DATA = {
  totalBalance: '$56,893.30',
  savingsGoal: '$15,600 / $25,000',
  emergencyFund: '$12,000 / $20,000',
  recentTransactions: [
    { name: 'Spotify', amount: '-$15.99', date: 'Today', isIncome: false },
    { name: 'PayPal Transfer', amount: '+$120.00', date: 'Today', isIncome: true },
    { name: 'Wayflow Income', amount: '+$950.00', date: 'Yesterday', isIncome: true },
  ],
  contacts: [
    { name: 'Noah', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
    { name: 'Mason', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
    { name: 'Oliver', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
    { name: 'Lucas', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80' },
  ]
};

export const ABOUT_METRICS = {
  countriesCount: '50+',
  satisfactionRate: '100%',
  earnings: '$750M+',
  totalVolume: '$2.5B+'
};

export const HOW_IT_WORKS_STEPS = [
  {
    title: 'Smart Wallet Overview',
    desc: 'Track balance, rewards, and transfers in one secure place.',
    badge: 'FINEXA CASH',
    balance: '$1,389.00',
    points: '320 Points'
  },
  {
    title: 'Financial Performance Insights',
    desc: 'Monitor trends and make smarter financial decisions.',
    badge: 'ANALYTICS',
    growth: '+35.4% growth this month'
  },
  {
    title: 'Flexible Pricing Plans',
    desc: 'Pick the right plan with clear, transparent pricing.',
    badge: 'FLEXIBLE',
    basicPrice: '$48.00',
    vipPrice: '$89.00'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: '"Real-time insights completely changed how I manage my portfolio. I\'m making smarter decisions and seeing consistent growth month after month."',
    author: 'Sarah Williams',
    role: 'Financial Analyst, Retail Fino',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85',
    company: 'Retail Fino'
  },
  {
    id: 2,
    quote: '"The platform was incredibly easy to set up and delivered value almost instantly. Within the first few weeks, I gained better control and started investing with confidence."',
    author: 'David Carter',
    role: 'Retail Investor, Adobe',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85',
    company: 'Adobe'
  },
  {
    id: 3,
    quote: '"Finexa\'s automated scheduling and AI analytics helped our team save 15+ hours a week while reducing transaction fees by 40% across all cross-border rails."',
    author: 'Elena Rostova',
    role: 'Head of Finance, TerraFinance',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85',
    company: 'TerraFinance'
  }
];

export const PRICING_PLANS = [
  {
    name: 'Starter (Free)',
    priceMonthly: 0,
    priceYearly: 0,
    desc: 'Perfect for tracking your basic expenses and getting real-time insights.',
    isPopular: false,
    features: [
      'Perfect for tracking basic plan',
      'Automatic transaction tracking',
      'Advanced budget planning',
      'Monthly and yearly reports',
      'Multi account support',
      'Standard customer support'
    ]
  },
  {
    name: 'Pro',
    priceMonthly: 99,
    priceYearly: 84,
    desc: 'Unlock advanced features for smarter financial decisions.',
    isPopular: true,
    features: [
      'Unlimited expense and income tracking',
      'Advanced budgeting tools',
      'Detailed financial reports',
      'Multi account support',
      'Priority customer support',
      'Bank level security'
    ]
  },
  {
    name: 'Enterprise',
    priceMonthly: 399,
    priceYearly: 339,
    desc: 'Built for teams, startups, and professionals with complex needs.',
    isPopular: false,
    features: [
      'Everything included in Pro',
      'Custom integrations',
      'Advanced budget planning',
      'Advanced user roles and permissions',
      'Dedicated account manager',
      'Custom reports and dashboards'
    ]
  }
];

export const FAQ_ITEMS = [
  {
    q: 'What is smart wealth management?',
    a: 'Smart wealth management combines AI analytics, automated tracking, and real-time insights to help you grow your investments while minimizing risk and transaction fees.'
  },
  {
    q: 'How does your system help individuals & businesses?',
    a: 'Our solutions provide real-time field monitoring, data-driven insights, and easy-to-use tools that help users make better decisions, reduce costs, and increase returns.'
  },
  {
    q: 'Do I need technical knowledge to use your tools?',
    a: 'No technical knowledge is required. Finexa is designed with an intuitive, seamless dashboard that guides you step-by-step through every financial action.'
  },
  {
    q: 'How does this help reduce financial transaction costs?',
    a: 'By leveraging mid-market interbank exchange rates and automated routing, Finexa eliminates hidden bank markups and cuts cross-border fees by up to 80%.'
  },
  {
    q: 'Are your solutions bank-grade and environmentally secure?',
    a: 'Yes! We use AES-256 encryption, 2FA biometric protection, and FDIC-insured partner protocols to ensure your data and assets are 100% safe.'
  }
];
