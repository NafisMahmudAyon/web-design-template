export const NAV_LINKS = [
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'how-it-works', label: 'How it Works', href: '#how-it-works' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'blogs', label: 'Blogs', href: '#blogs' },
];

export const TRUST_LOGOS = [
  { name: 'Adobe', symbol: 'Adobe' },
  { name: 'Framer', symbol: 'Framer' },
  { name: 'Notion', symbol: 'Notion' },
  { name: 'Amazon', symbol: 'Amazon' },
  { name: 'Slack', symbol: 'Slack' },
  { name: 'Pendo', symbol: 'Pendo' },
  { name: 'Trello', symbol: 'Trello' },
];

export const THREE_STEPS = [
  {
    step: '1',
    title: 'Create Your Account',
    description: 'Sign up in minutes and set up your workspace to start managing projects effortlessly.',
    cardType: 'account',
  },
  {
    step: '2',
    title: 'Create Projects',
    description: 'Organize your work with projects, tasks, deadlines, and priorities in one place.',
    cardType: 'project',
  },
  {
    step: '3',
    title: 'Invite Your Teammates',
    description: 'Add your team members, assign responsibilities, and collaborate in real time.',
    cardType: 'teammates',
  },
];

export const CONFIDENCE_FEATURES = [
  {
    id: 'smart-boards',
    title: 'Smart Boards',
    description: 'Visualize tasks with flexible Kanban, list, timeline views',
    type: 'kanban',
  },
  {
    id: 'seamless-collaboration',
    title: 'Seamless Collaboration',
    description: 'Visualize tasks with flexible Kanban, list, timeline views',
    type: 'collaboration',
  },
  {
    id: 'deadline-control',
    title: 'Deadline Control',
    description: 'Visualize tasks with flexible Kanban, list, timeline views',
    type: 'calendar',
  },
  {
    id: 'progress-tracking',
    title: 'Progress Tracking',
    description: 'Visualize tasks with flexible Kanban, list, timeline views',
    type: 'progress',
  },
];

export const EVERYTHING_TABS = [
  {
    id: 'collaboration',
    title: 'Real Time Collaboration',
    description: 'Chat, comment, and co-author tasks directly in your project canvas with instant sync across teams.',
  },
  {
    id: 'tracking',
    title: 'Smarter Project Tracking',
    description: 'Monitor progress, deadlines, team workload, and milestones with live dashboards.',
  },
  {
    id: 'automation',
    title: 'Automated Workflows',
    description: 'Eliminate repetitive status updates and notifications with trigger-based auto assignments.',
  },
  {
    id: 'scaling',
    title: 'Scales With Your Team',
    description: 'Enterprise governance, customizable roles, and infinite scalability built into the core.',
  },
];

export const WORKSPACE_TASKS = [
  {
    id: 'task-1',
    title: 'Security Compliance Audit',
    subtitle: 'Final verification of security standards and rec...',
    milestone: 'Milestone',
    progress: '2/6',
    assignedFor: 'Due 3 Dec, 2026',
    priority: 'High',
    priorityColor: 'text-red-600 bg-red-50 border-red-200',
    comments: 2,
    attachments: 4,
  },
  {
    id: 'task-2',
    title: 'Mobile Dashboard Development',
    subtitle: 'Building responsive dashboard components f...',
    milestone: 'Milestone',
    progress: '4/8',
    assignedFor: 'Due 6 Dec, 2026',
    priority: 'High',
    priorityColor: 'text-red-600 bg-red-50 border-red-200',
    comments: 3,
    attachments: 4,
  },
  {
    id: 'task-3',
    title: 'API Documentation',
    subtitle: 'Awaiting technical review and approval from s...',
    milestone: 'Milestone',
    progress: '2/4',
    assignedFor: 'Due 4 Dec, 2026',
    priority: 'Medium',
    priorityColor: 'text-amber-600 bg-amber-50 border-amber-200',
    comments: 2,
    attachments: 4,
  },
  {
    id: 'task-4',
    title: 'Design System Update',
    subtitle: 'Reviewing updated components and accessi...',
    milestone: 'Milestone',
    progress: '2/8',
    assignedFor: 'Due 5 Dec, 2026',
    priority: 'Medium',
    priorityColor: 'text-amber-600 bg-amber-50 border-amber-200',
    comments: 3,
    attachments: 7,
  },
  {
    id: 'task-5',
    title: 'User Onboarding Experience',
    subtitle: 'Designing onboarding screens to improve use...',
    milestone: 'Milestone',
    progress: '5/8',
    assignedFor: 'Due 9 Dec, 2026',
    priority: 'Low',
    priorityColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    comments: 1,
    attachments: 5,
  },
];

export const PRICING_PLANS = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Best for individuals and getting started',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    period: '/month',
    ctaText: 'Choose Plan',
    isPopular: false,
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
    tagline: 'Best for growing teams',
    monthlyPrice: '$20',
    yearlyPrice: '$17',
    period: '/month',
    ctaText: 'Choose Plan',
    isPopular: true,
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
    tagline: 'Best for large organizations',
    monthlyPrice: '$45',
    yearlyPrice: '$38',
    period: '/month',
    ctaText: 'Contact Sales',
    isPopular: false,
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

export const TESTIMONIALS_ROW_1 = [
  {
    id: 't-1',
    quote: '"With Flowzy, our client communications are clearer and more aligned. It\'s truly a game changer for us."',
    author: 'Daniel Nguyen',
    role: 'Creative Director, SparkMedia',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 't-2',
    quote: '"The automation tools in Flowzy have saved us countless hours. Our workflow is smoother and our team more aligned than ever."',
    author: 'Carlos Diaz',
    role: 'Operations Manager, GreenLeaf Industries',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 't-3',
    quote: '"Flowzy\'s intuitive interface and powerful features have transformed the way we collaborate. Deadlines are met with ease now."',
    author: 'Liam Johnson',
    role: 'Team Lead, BrightWave Solutions',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 't-4',
    quote: '"Since switching to Flowzy, our team has become more organized and productive. Managing complex projects has never been this simple."',
    author: 'Sophia Carter',
    role: 'Project Manager, NovaTech',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
  },
];

export const TESTIMONIALS_ROW_2 = [
  {
    id: 't-5',
    quote: '"The real-time updates and seamless integration with our tools make Flowzy indispensable for daily operations."',
    author: 'Ava Martinez',
    role: 'Operations Manager, GreenLeaf Corp',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 't-6',
    quote: '"Since switching to Flowzy, our team has become more organized and productive. Managing projects has never been this simple."',
    author: 'Sophia Carter',
    role: 'Project Manager, NovaTech',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 't-7',
    quote: '"With Flowzy, client feedback cycles are faster, allowing us to deliver higher quality products on schedule."',
    author: 'Ethan Chen',
    role: 'Product Designer, InnovateX',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
  },
  {
    id: 't-8',
    quote: '"Flowzy eliminated our coordination bottlenecks. Cross-functional launches happen effortlessly now."',
    author: 'Marcus Vance',
    role: 'Product Lead, CloudPeak',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80',
  },
];

export const FAQ_ITEMS = [
  {
    num: '01',
    question: 'Is there a free plan available?',
    answer: 'Yes! Our Free plan provides up to 3 projects, unlimited personal tasks, and full access to Kanban and List views with no credit card required.',
  },
  {
    num: '02',
    question: 'Can I invite my team members?',
    answer: 'Absolutely. Invite teammates, assign roles, and collaborate in real time from a shared workspace.',
    defaultOpen: true,
  },
  {
    num: '03',
    question: 'Does it integrate with other tools?',
    answer: 'Flowzy integrates natively with Slack, GitHub, Figma, Google Workspace, Jira, and over 1,000+ apps via Zapier and webhooks.',
  },
  {
    num: '04',
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer: 'Yes, you can change your plan at any time from your account billing settings. Changes take effect immediately with prorated billing.',
  },
  {
    num: '05',
    question: 'Is my project data secure?',
    answer: 'Your data is encrypted in transit and at rest with AES-256 encryption. We are SOC-2 Type II compliant and perform daily automated backups.',
  },
];
