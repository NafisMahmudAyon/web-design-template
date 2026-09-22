export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blogs', href: '#blogs' },
];

export const heroData = {
  badge: 'NEW',
  badgeText: 'Optimizing Workflow Better Than Ever',
  titleRegular1: 'Manage Your',
  titleItalic: 'Project Smarter,',
  titleRegular2: 'Powered by Real Insights',
  subtitle:
    'Stay on top of your tasks and deadlines with our intuitive project management tool designed for teams of all sizes.',
};

export const heroTasks = [
  {
    id: 't1',
    section: 'To Do',
    title: 'Homepage Conversion Optimization',
    desc: 'Improve hero messaging and interactive CTA buttons...',
    assignees: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    ],
    startDate: '01 Dec 2026',
    dueDate: '28 Dec 2026',
    priority: 'High',
    attachments: 2,
    comments: 4,
  },
  {
    id: 't2',
    section: 'To Do',
    title: 'Multi-language Support Planning',
    desc: 'Define localization strategy and string extraction...',
    assignees: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    ],
    startDate: '03 Dec 2026',
    dueDate: '18 Dec 2026',
    priority: 'Medium',
    attachments: 1,
    comments: 3,
  },
  {
    id: 't3',
    section: 'On Process',
    title: 'Mobile Dashboard Development',
    desc: 'Build responsive dashboard components for iOS...',
    assignees: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    ],
    startDate: '01 Dec 2026',
    dueDate: '22 Dec 2026',
    priority: 'High',
    attachments: 3,
    comments: 5,
  },
  {
    id: 't4',
    section: 'On Process',
    title: 'User Onboarding Experience',
    desc: 'Design onboarding screen animations to improve user...',
    assignees: [
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    ],
    startDate: '04 Dec 2026',
    dueDate: '25 Dec 2026',
    priority: 'Low',
    attachments: 2,
    comments: 1,
  },
];

export const partnerLogos = [
  { name: 'Adobe', text: 'Adobe' },
  { name: 'Framer', text: 'Framer' },
  { name: 'Notion', text: 'Notion' },
  { name: 'amazon', text: 'amazon' },
  { name: 'slack', text: 'slack' },
  { name: 'pendo', text: 'pendo' },
  { name: 'Trello', text: 'Trello' },
];

export const onboardingSteps = [
  {
    step: '1',
    title: 'Create Your Account',
    description: 'Sign up in minutes and set up your workspace to start managing projects effortlessly.',
  },
  {
    step: '2',
    title: 'Create Projects',
    description: 'Organize your work with projects, tasks, deadlines, and priorities in one place.',
  },
  {
    step: '3',
    title: 'Invite Your Teammates',
    description: 'Add your team members, assign responsibilities, and collaborate in real time.',
  },
];

export const confidenceFeatures = [
  {
    id: 'smart-boards',
    title: 'Smart Boards',
    description: 'Visualize tasks with flexible Kanban, list, timeline views.',
  },
  {
    id: 'seamless-collab',
    title: 'Seamless Collaboration',
    description: 'Visualize tasks with flexible Kanban, list, timeline views.',
  },
  {
    id: 'deadline-control',
    title: 'Deadline Control',
    description: 'Visualize tasks with flexible Kanban, list, timeline views.',
  },
  {
    id: 'progress-tracking',
    title: 'Progress Tracking',
    description: 'Visualize tasks with flexible Kanban, list, timeline views.',
  },
];

export const interactiveTabs = [
  {
    id: 'collab',
    title: 'Real Time Collaboration',
    description: 'Comment directly on tasks, mention teammates, and share live updates without leaving your project board.',
  },
  {
    id: 'tracking',
    title: 'Smarter Project Tracking',
    description: 'Monitor progress, deadlines, team workload, and milestones with live dashboards.',
    isDefaultActive: true,
  },
  {
    id: 'automations',
    title: 'Automated Workflows',
    description: 'Eliminate repetitive status updates with rule-based auto-assignment and triggered notifications.',
  },
  {
    id: 'scales',
    title: 'Scales With Your Team',
    description: 'From 5 to 5,000 members, maintain lightning-fast response times and customized workspace security.',
  },
];

export const cascadingTasks = [
  {
    title: 'Security Compliance Audit',
    due: 'Due 5 Dec, 2026',
    milestone: '0/4',
    assigned: '2',
    priority: 'Low',
    priorityColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    title: 'Mobile Dashboard Development',
    due: 'Due 8 Dec, 2026',
    milestone: '4/8',
    assigned: '3',
    priority: 'High',
    priorityColor: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  {
    title: 'API Documentation',
    due: 'Due 4 Dec, 2026',
    milestone: '2/4',
    assigned: '1',
    priority: 'Medium',
    priorityColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    title: 'Design System Update',
    due: 'Due 5 Dec, 2026',
    milestone: '3/7',
    assigned: '4',
    priority: 'Medium',
    priorityColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    title: 'User Onboarding Experience',
    due: 'Due 9 Dec, 2026',
    milestone: '5/8',
    assigned: '2',
    priority: 'Low',
    priorityColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
];

export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    subhead: 'Best for individuals and getting started',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    period: '/month',
    ctaText: 'Choose Plan',
    features: [
      'Up to 3 Projects',
      'Unlimited Personal Tasks',
      'List & Kanban Views',
      'Basic Team Collaboration',
      '1 GB File Storage',
      'Email Support',
    ],
  },
  {
    id: 'pro',
    name: 'Professional',
    subhead: 'Best for growing teams',
    monthlyPrice: '$20',
    yearlyPrice: '$17',
    period: '/month',
    ctaText: 'Choose Plan',
    isHighlighted: true,
    features: [
      'Unlimited Projects',
      'Unlimited Tasks & Subtasks',
      'Timeline & Calendar Views',
      'Workflow Automation',
      'Advanced Analytics & Reports',
      '100 GB File Storage',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subhead: 'Best for large organizations',
    monthlyPrice: '$45',
    yearlyPrice: '$38',
    period: '/month',
    ctaText: 'Contact Sales',
    features: [
      'Everything in Professional',
      'Unlimited Team Members',
      'Custom Roles & Permissions',
      'SSO & Advanced Security',
      'Dedicated Account Manager',
      'Unlimited Storage',
    ],
  },
];

export const testimonialsRow1 = [
  {
    name: 'Alex Nguyen',
    role: 'Creative Director, SparkMedia',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    content: 'Flowzy, our client communications are clearer and more transparent. It is truly a game changer for our creative agency.',
  },
  {
    name: 'Carlos Diaz',
    role: 'Operations Manager, GreenLeaf Industries',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    content: 'The automation tools in Flowzy have saved us countless hours. Our workflow is smoother and our team more aligned than ever.',
  },
  {
    name: 'Liam Johnson',
    role: 'Team Lead, BrightWave Solutions',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    content: "Flowzy's intuitive interface and powerful features have transformed the way we collaborate. Deadlines are met with ease now.",
  },
  {
    name: 'Sophia Carter',
    role: 'Project Manager, NovaTech',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    content: 'Since switching to Flowzy, our team has become more organized and productive. Managing projects has never been this simple.',
  },
];

export const testimonialsRow2 = [
  {
    name: 'Ava Martinez',
    role: 'Operations Manager, GreenLeaf Corp',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    content: 'The real-time updates and seamless integration with our tools make Flowzy indispensable for daily operations.',
  },
  {
    name: 'Sophia Carter',
    role: 'Project Manager, NovaTech',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    content: 'Since switching to Flowzy, our team has become more organized and productive. Managing projects has never been this simple.',
  },
  {
    name: 'Ethan Chen',
    role: 'Product Designer, InnovateX',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
    content: 'With Flowzy, client feedback cycles are faster, allowing us to deliver higher quality products on schedule.',
  },
  {
    name: 'David Wright',
    role: 'VP of Product, CloudApex',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    content: 'The dashboard views make it effortless to spot bottlenecks before they impact release milestones.',
  },
];

export const faqsList = [
  {
    id: '01',
    question: 'Is there a free plan available?',
    answer: 'Yes! Flowzy offers a 100% Free plan forever for individuals and small setups with up to 3 projects, unlimited tasks, and 1GB cloud storage.',
  },
  {
    id: '02',
    question: 'Can I invite my team members?',
    answer: 'Absolutely. Invite teammates, assign roles, and collaborate in real time from a shared workspace.',
    isDefaultOpen: true,
  },
  {
    id: '03',
    question: 'Does it integrate with other tools?',
    answer: 'Yes. Flowzy integrates natively with Slack, Google Workspace, GitHub, Figma, Notion, and Zapier for over 2,000+ custom automations.',
  },
  {
    id: '04',
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer: 'Yes, switch plans whenever your team requirements change. Upgrades are immediate and downgrades take effect at the end of the billing cycle.',
  },
  {
    id: '05',
    question: 'Is my project data secure?',
    answer: 'All data is encrypted in transit and at rest using SOC-2 Type II certified infrastructure with automated daily backups.',
  },
];

export const footerColumns = {
  platform: [
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Blog', href: '#blogs' },
  ],
  resources: [
    { label: 'Help Center', href: '#help' },
    { label: 'Documentation', href: '#docs' },
    { label: 'API Access', href: '#api' },
    { label: 'Community Forum', href: '#community' },
  ],
  company: [
    { label: 'Terms', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Trust Center', href: '#trust' },
  ],
};
