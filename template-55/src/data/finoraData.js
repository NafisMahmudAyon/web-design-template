export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#features' },
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#testimonials' },
];

export const heroData = {
  badge: 'Grow with confidence',
  headline: 'Empowering Your Wealth\nWith Smart Finance',
  subtitle: 'Take charge of your finances with tools to save, invest, and grow your wealth.',
  ctaText: 'Get Started',
  savingCard: {
    title: 'Saving',
    period: 'This month',
    items: [
      { name: 'Emergency Fund', amount: '$1,120.50', color: '#0284C7' },
      { name: 'Fixed Deposit', amount: '$980.00', color: '#10B981' }
    ]
  },
  transferCard: {
    title: 'Quick Transfer',
    cardType: 'Debit Card',
    balance: '$20,743',
    transferAmount: '$2,640'
  }
};

export const partnersData = {
  rating: '4.9 Star Review',
  userCount: '10k',
  logos: ['Square', 'GitHub', 'Adobe', 'Trello', 'Medium']
};

export const bentoFeaturesData = {
  badge: 'Features',
  headline: 'Powerful Finance, Zero Complexity',
  subtitle: 'Clear insights and tools to manage, track, and grow your finances with confidence.',
  cards: {
    multiCurrency: {
      caption: 'Manage global payments. Effortlessly track, convert, and stay compliant in one dashboard.',
      invoices: [
        { code: 'INV384', currency: 'USD', country: 'United States', flag: '🇺🇸', amount: '$1,500' },
        { code: 'INV385', currency: 'EUR', country: 'France', flag: '🇫🇷', amount: '€1,200' },
        { code: 'INV386', currency: 'GBP', country: 'United Kingdom', flag: '🇬🇧', amount: '£900' }
      ]
    },
    analytics: {
      title: 'Analysis',
      amount: '$83,837.93',
      caption: 'Advanced Analytics & Reports. Gain actionable insights with detailed financial reports and visual analytics.',
      bars: [
        { month: 'Jan', val: 18, height: '35%' },
        { month: 'Feb', val: 42, height: '65%' },
        { month: 'Mar', val: 31, height: '50%' },
        { month: 'Apr', val: 59, height: '88%', active: true },
        { month: 'May', val: 38, height: '58%' },
        { month: 'Jun', val: 52, height: '78%' }
      ]
    },
    statistics: {
      title: 'Statistics',
      ratio: '60% / 40%',
      caption: 'Track income and expenses in real time with clear visuals to understand cash flow and spot overspending quickly.'
    },
    autoPay: {
      title: 'Auto Pay',
      subtitle: 'Enabled for 4 Platforms',
      caption: 'Generate invoices. Automatically send reminders and track payments seamlessly, all in one place.',
      subscriptions: [
        { name: 'Doulube', cost: '$100', status: 'Complete' },
        { name: 'Astroline', cost: '$200', status: 'Pending' },
        { name: 'NetWave', cost: '$120', status: 'Complete' },
        { name: 'Novalux', cost: '$150', status: 'Complete' }
      ]
    }
  }
};

export const successData = {
  badge: 'Success',
  statementPart1: 'Expert financial guidance, data-driven insights, ',
  statementBold: 'and tailored solutions to build clarity, control, and sustainable growth.',
  disclaimer: 'Based on real client outcomes across startups, SMEs, and growing enterprises.',
  metrics: [
    { value: '92%', label: 'Improve cash flow visibility' },
    { value: '90%', label: 'Make faster, data-driven decisions' },
    { value: '97%', label: 'Continue using our platform long-term' },
    { value: '85%', label: 'Reduce financial risk effectively' }
  ]
};

export const revenueBlockData = {
  headline: 'Real-Time Recurring Revenue Insights',
  subtitle: 'Monitor recurring income in real time and understand your business growth.',
  features: [
    {
      id: 'rev-1',
      title: 'Real-Time Revenue',
      desc: 'See live updates on your monthly recurring income.'
    },
    {
      id: 'rev-2',
      title: 'Growth Insights',
      desc: 'Understand trends and forecast revenue.'
    },
    {
      id: 'rev-3',
      title: 'Retention Overview',
      desc: 'Spot churn early and increase lifetime value.'
    }
  ],
  analysisCard: {
    title: 'Analysis',
    label: 'Earnings',
    amount: '$98,343.23',
    bars: [
      { month: 'Jan', height: '35%' },
      { month: 'Feb', height: '65%' },
      { month: 'Mar', height: '52%' },
      { month: 'Apr', height: '90%', active: true },
      { month: 'May', height: '58%' },
      { month: 'Jun', height: '80%' }
    ]
  }
};

export const invoicesBlockData = {
  headline: 'Professional Invoices Made Simple',
  subtitle: 'Create, send, and track professional invoices from one simple dashboard.',
  features: [
    {
      id: 'inv-1',
      title: 'Create & Send Fast',
      desc: 'Generate professional invoices in seconds.'
    },
    {
      id: 'inv-2',
      title: 'Track Every Status',
      desc: 'Instantly see which invoices are sent, viewed, overdue.'
    },
    {
      id: 'inv-3',
      title: 'Get Paid Faster',
      desc: 'Get paid easily through connected payments.'
    }
  ],
  receipts: [
    { country: 'Australia', flag: '🇦🇺', amount: 'A$1,200' },
    { country: 'United States', flag: '🇺🇸', amount: '$2,000' },
    { country: 'Italy', flag: '🇮🇹', amount: '€1,500' },
    { country: 'Mexico', flag: '🇲🇽', amount: '$2,200' },
    { country: 'New Zealand', flag: '🇳🇿', amount: 'NZ$1,100' }
  ]
};

export const platformVisibilityData = {
  badge: 'Smarter Financial Control',
  headline: 'One Platform. Total Financial Visibility.',
  subtitle: 'See your numbers clearly, automate daily tasks, and stay in control as you scale.',
  cards: [
    {
      id: 'p-1',
      title: 'Smart Payments',
      desc: 'Send and receive money instantly with full visibility and confidence across accounts and partners.',
      icon: 'payment'
    },
    {
      id: 'p-2',
      title: 'Financial Insights',
      desc: 'Track spending, forecast revenue, and monitor cash flow with AI-powered financial intelligence.',
      icon: 'insights'
    },
    {
      id: 'p-3',
      title: 'Billing & Invoicing',
      desc: 'Create professional invoices, automate payments, and stay on top of what\'s due to effortlessly.',
      icon: 'billing'
    },
    {
      id: 'p-4',
      title: 'Integrations Hub',
      desc: 'Connect seamlessly with tools like accounting software, banks, and payment gateways in real time.',
      icon: 'integrations'
    },
    {
      id: 'p-5',
      title: 'Performance Dashboard',
      desc: 'View your financial health at a glance with clear analytics, trends, and real-time reporting.',
      icon: 'dashboard'
    },
    {
      id: 'p-6',
      title: 'Treasury & Cash Control',
      desc: 'Optimize liquidity, manage reserves, and put idle funds to work with smart allocation tools.',
      icon: 'treasury'
    }
  ]
};

export const pricingData = {
  badge: 'Pricing Plans',
  headline: 'Our pricing is simple with no hidden fees',
  subtitle: 'Our pricing is transparent and straightforward, so you always know exactly what you\'re paying for.',
  discountBadge: '( GET 65% OFF )',
  plans: [
    {
      id: 'starter',
      name: 'Starter Plan',
      audience: 'For Freelancers & Small Teams',
      monthlyPrice: '$29.00',
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
      audience: 'For Growing Businesses',
      monthlyPrice: '$59.00',
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
      audience: 'For Large Organizations',
      monthlyPrice: '$199.00',
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
  ],
  customCallout: {
    headline: 'Need a custom financial solution?',
    subtext: 'We tailor plans to match your business complexity and scale.',
    buttonText: 'Contact Us'
  }
};

export const testimonialsData = {
  badge: 'Testimonials',
  headline: 'Confidence in Every Transaction',
  subtitle: 'Users share how they manage finances with clarity and control.',
  testimonials: [
    {
      id: 't-1',
      quote: '“Clear financial insights that help us make smarter, faster business decisions every day.”',
      author: 'Michael Turner',
      role: 'Investment Advisor',
      company: 'Sisyphus',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 't-2',
      quote: '“Managing cash flow is simple now, with real-time visibility and meaningful financial control.”',
      author: 'Daniel Foster',
      role: 'Product Manager',
      company: 'zapier',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 't-3',
      quote: '“This platform gave us clarity, confidence, and better control over our financial operations.”',
      author: 'Michael Turner',
      role: 'Investment Advisor',
      company: 'Webflow',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop'
    }
  ]
};

export const faqData = {
  badge: 'FAQ',
  headline: 'Quick Answers & Support',
  subtitle: 'Everything you need to know, explained clearly and simply.',
  advisorCard: {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    title: 'Need personal guidance?',
    description: 'Our financial specialists are ready to help you make confident decisions.',
    buttonText: 'Book a consultation ↗'
  },
  categories: [
    {
      category: 'ACCOUNT',
      items: [
        {
          num: '01',
          question: 'How do I update my account information?',
          answer: 'You can update your personal, banking, and tax credentials directly from Account Settings with instant two-factor verification.'
        },
        {
          num: '02',
          question: 'Can I change my email address?',
          answer: 'Yes. Simply go to account settings, enter your new email, and verify it securely via one-time confirmation code.',
          defaultExpanded: true
        },
        {
          num: '03',
          question: 'What should I do if I forget my password?',
          answer: 'Click "Forgot Password" on the login screen to receive a secure password reset link to your registered email address.'
        }
      ]
    },
    {
      category: 'PAYMENTS',
      items: [
        {
          num: '04',
          question: 'How long does it take to process payments?',
          answer: 'Domestic transfers process within seconds via Instant SEPA / ACH, while international wire transfers typically settle within 1 to 2 business days.'
        },
        {
          num: '05',
          question: 'Are refunds handled automatically?',
          answer: 'Eligible refunds are processed automatically and reflected within standard banking timelines (usually 2 to 5 business days).',
          defaultExpanded: true
        },
        {
          num: '06',
          question: 'How can I contact customer support?',
          answer: 'Our dedicated support team is available 24/7 via live chat in your dashboard, email, and scheduled video consultations.'
        },
        {
          num: '07',
          question: 'Do you provide weekend assistance?',
          answer: 'Yes, our critical financial desk and automated compliance verification engines operate continuously 24/7/365.'
        },
        {
          num: '08',
          question: 'Where can I find detailed financial guides?',
          answer: 'Explore the Finora Knowledge Base and Academy for comprehensive tutorials, tax documentation, and API guides.'
        }
      ]
    }
  ]
};

export const ctaBannerData = {
  badge: 'Start Growing Today',
  headline: 'Grow Your Money with\nConfidence',
  subtitle: 'Smart tools to save more, invest smarter, and stay in control of your money.',
  bgImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop'
};

export const footerData = {
  brand: 'Finora',
  headline: "Let's Build Your\nFinancial Future.",
  newsletter: {
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
    disclaimer: 'By subscribing you agree to with our Privacy Policy'
  },
  contactDetails: {
    location: {
      label: 'Location',
      value: 'Fintech HQ Innovation Park,\nGlobal Financial District'
    },
    callUs: {
      label: 'Call Us',
      value: '+1 (800) 456-7890'
    },
    email: {
      label: 'Email',
      value: 'hello@finora.earth'
    },
    hours: {
      label: 'Working Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM\n(GMT)'
    }
  },
  columns: [
    {
      title: 'Products',
      links: ['Personal Finance', 'Business Accounts', 'Virtual Cards', 'International Payments', 'Developer APIs']
    },
    {
      title: 'Features',
      links: ['Spending Analytics', 'Real-Time Alerts', 'Multi-Currency Wallet', 'Smart Savings Goals', 'Credit Insights']
    },
    {
      title: 'Resources',
      links: ['Getting Started', 'Help Center', 'Product Updates', 'Guides & Tutorials', 'Community']
    }
  ],
  copyright: '© 2026 Finora. All rights reserved.',
  legal: ['Terms of Service', 'Privacy Policy']
};
