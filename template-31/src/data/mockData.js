export const trustedBrands = [
  { name: 'Spotify', logo: '🎵 Spotify' },
  { name: 'Slack', logo: '💬 slack' },
  { name: 'Dropbox', logo: '📦 Dropbox' },
  { name: 'Webflow', logo: '🌐 Webflow' },
  { name: 'Stripe', logo: '💳 stripe' },
  { name: 'Figma', logo: '🎨 Figma' }
];

export const pricingPlans = [
  {
    id: 'personal',
    name: 'Personal',
    subtitle: 'Designed for personal use and individuals',
    price: '$60',
    period: '/month',
    isPopular: false,
    buttonText: 'Get Started',
    buttonVariant: 'dark',
    features: [
      'Advanced Analytics & Insights',
      'Customizable Financial Reports',
      'Multi-User Account (up to 5 users)',
      'Automated Expense Tracking',
      'Priority Customer Support'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'MOST POPULAR',
    subtitle: 'Designed for personal use and individuals',
    price: '$110',
    period: '/month',
    isPopular: true,
    buttonText: 'Get Started',
    buttonVariant: 'light',
    features: [
      'Advanced Analytics & Insights',
      'Customizable Financial Reports',
      'Multi-User Account (up to 15 users)',
      'Automated Expense Tracking',
      'Priority Customer Support'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    subtitle: 'Designed for personal use and individuals',
    price: '$150',
    period: '/month',
    isPopular: false,
    buttonText: 'Get Started',
    buttonVariant: 'dark',
    features: [
      'Advanced Analytics & Insights',
      'Customizable Financial Reports',
      'Multi-User Account (up to 25 users)',
      'Automated Expense Tracking',
      'Priority Customer Support'
    ]
  }
];

export const testimonialsData = [
  {
    id: 1,
    quote: '"Quick setup, easy to use, and very reliable. Highly recommended for anyone looking for smarter finance management. I can track payments, send invoices, and grow my savings faster with their smart tools and insights."',
    author: 'Zain Malik',
    role: 'Interaction Designer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    highlighted: false
  },
  {
    id: 2,
    quote: '"I\'ve tried many finance apps, but this one stands out. It combines simplicity, security, and powerful features that actually help me reach my financial goals efficiently. Their real-time balance updates and spending analytics keep me in control."',
    author: 'Khalid Amir',
    role: 'Visual Experience Architect',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    highlighted: false
  },
  {
    id: 3,
    quote: '"Managing my finances used to feel stressful, with different apps for everything. Since switching to this platform, I can handle my accounts, payments, invoices, and even plan my goals in one place. It saves me time and reduces anxiety."',
    author: 'Tariq Zahir',
    role: 'Digital Experience Designer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    highlighted: false
  },
  {
    id: 4,
    quote: '"Managing my spending, savings, and payments in one app saves me so much time and worry daily. I love how simple and secure this platform is. It makes managing my finances feel effortless every single day."',
    author: 'Rami Kadir',
    role: 'User Experience Specialist',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    highlighted: false
  },
  {
    id: 5,
    quote: '"Highly recommended for small business owners like me who need fast, secure, and powerful release solutions to grow their business every day. I\'ve tried many finance apps before, but none provided such detailed analytics, simple design, and powerful tools all together seamlessly."',
    author: 'Samir Rahman',
    role: 'User Interface Strategist',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200',
    highlighted: true // Featured highlighted card matching design
  },
  {
    id: 6,
    quote: '"I run a small business and was looking for a secure way to manage my payments and track expenses. This platform not only simplified all of that but also gave me insights that helped me increase profits."',
    author: 'Faris Nabil',
    role: 'Human-Centered Designer',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    highlighted: false
  }
];

export const faqData = [
  {
    question: '1. What is this platform used for?',
    answer: 'We help to keep track of your expense and incomes, it shows the flow of records over a specific period of time. Absolutely. You can connect and manage multiple bank accounts for seamless financial tracking and management.'
  },
  {
    question: '2. Is my financial data secure here?',
    answer: 'Yes. Our platform is built with bank-grade 256-bit encryption and multi-factor authentication ensuring your data is completely secure.'
  },
  {
    question: '3. Can I connect multiple bank accounts?',
    answer: 'Absolutely. You can connect and manage multiple bank accounts for seamless financial tracking and management.'
  },
  {
    question: '4. Does it work for small businesses?',
    answer: 'Yes. Our platform is designed for individuals, freelancers, and businesses of all sizes to manage finances effortlessly.'
  },
  {
    question: '5. How quickly can I get started?',
    answer: 'You can create an account and connect your first wallet or bank account in under 2 minutes.'
  },
  {
    question: '6. Are there any hidden fees?',
    answer: 'No hidden fees whatsoever. All pricing plans are transparently listed with clear monthly/annual billing.'
  },
  {
    question: '7. Can I make international payments?',
    answer: 'Yes, we support cross-border transfers across 50+ countries with real-time currency conversion rates.'
  },
  {
    question: '8. Is there customer support available?',
    answer: 'We provide 24/7 dedicated customer support via live chat, email, and scheduled video calls for business plans.'
  },
  {
    question: '9. Does it support multiple currencies?',
    answer: 'We support over 30 global fiat currencies as well as major stablecoins and digital assets.'
  },
  {
    question: '10. Can I track my spending and savings goals?',
    answer: 'Yes! Automated goal tracking and spending categorization insights are built right into your main dashboard.'
  }
];
