export const CURRENT_USER = {
  name: 'Noah Brooks',
  role: 'HR Lead',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
};

export const TEAM_MEMBERS = [
  {
    id: 'cavin',
    name: 'Cavin Piterson',
    role: 'UX/UI Designer',
    avatar: '/assets/cavin-piterson.jpg',
    online: true,
    experience: '1.2 years of work',
    daysInCompany: 456,
    doneProjects: 11,
    skills: [
      'Journey Map',
      'Responsive Design',
      'Design System',
      'User Experience',
      'User Flow',
      'User Interface',
      'User Research',
      'Information Architecture',
    ],
  },
  {
    id: 'sarah',
    name: 'Sarah Miller',
    role: 'Senior Product Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    online: true,
    experience: '2.4 years of work',
    daysInCompany: 890,
    doneProjects: 24,
    skills: [
      'Product Strategy',
      'Design System',
      'Figma Tokens',
      'Prototyping',
      'User Research',
      'Accessibility',
    ],
  },
  {
    id: 'alex',
    name: 'Alex Rivera',
    role: 'Design Technologist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    online: false,
    experience: '3.1 years of work',
    daysInCompany: 1120,
    doneProjects: 31,
    skills: [
      'Framer Motion',
      'React UI',
      'Design Tokens',
      'Tailwind CSS',
      'Micro-interactions',
    ],
  },
  {
    id: 'elena',
    name: 'Elena Vance',
    role: 'Brand Strategist',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    online: true,
    experience: '1.8 years of work',
    daysInCompany: 650,
    doneProjects: 18,
    skills: [
      'Brand Guidelines',
      'Typography',
      'Art Direction',
      'Visual Identity',
      'Storyboarding',
    ],
  },
  {
    id: 'julian',
    name: 'Julian Thorne',
    role: 'Mobile Engineer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    online: true,
    experience: '2.0 years of work',
    daysInCompany: 730,
    doneProjects: 19,
    skills: [
      'React Native',
      'iOS Animation',
      'Performance',
      'SwiftUI',
      'API Integration',
    ],
  },
];

export const PROGRESS_TASKS = [
  { id: 1, name: 'User Testing', hours: 10, amount: 600, icon: 'Activity' },
  { id: 2, name: 'Interviews', hours: 15, amount: 900, icon: 'MessageSquare' },
  { id: 3, name: 'A/B Testing', hours: 5, amount: 340, icon: 'Sliders' },
  { id: 4, name: 'Final Review', hours: 5, amount: 300, icon: 'Eye' },
  { id: 5, name: 'Design Iterations', hours: 20, amount: 1200, icon: 'RotateCw' },
  { id: 6, name: 'Create a CJM', hours: 20, amount: 1200, icon: 'BookOpen' },
];

export const WORKING_FORMAT_DATA = {
  days: 456,
  breakdown: [
    { label: 'Hybrid', count: '2/5', percentage: 8, color: '#10b981' },
    { label: 'Remote', count: '3/4', percentage: 32, color: '#f3f4f6' },
    { label: 'Office', count: '3/4', percentage: 60, color: '#b59273' },
  ],
};

export const SALARY_DATA = [
  { month: 'Jan', amount: 1350, height: 42 },
  { month: 'Feb', amount: 1480, height: 48 },
  { month: 'Mar', amount: 1200, height: 38 },
  { month: 'Apr', amount: 1400, height: 45 },
  { month: 'May', amount: 1650, height: 55 },
  { month: 'Jun', amount: 1420, height: 46 },
  { month: 'Jul', amount: 1580, height: 52 },
  { month: 'Aug', amount: 2000, height: 85, isHighlight: true },
  { month: 'Sep', amount: 1150, height: 35 },
  { month: 'Oct', amount: 1420, height: 46 },
  { month: 'Nov', amount: 1550, height: 50 },
  { month: 'Dec', amount: 1620, height: 53 },
];

export const TIMELINE_TASKS = [
  {
    id: 1,
    title: 'Run A/B Testing for Interface Variants',
    time: '12:11',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Map User Flow for Registration Process',
    time: '15:41',
    status: 'in-progress',
  },
  {
    id: 3,
    title: 'Perform UX Audit of Existing Product',
    time: '16:54',
    status: 'upcoming',
  },
  {
    id: 4,
    title: 'Validate Prototype Before MVP Launch',
    time: '17:11',
    status: 'upcoming',
  },
  {
    id: 5,
    title: 'Design Onboarding Experience for Users',
    time: '18:09',
    status: 'upcoming',
  },
];
