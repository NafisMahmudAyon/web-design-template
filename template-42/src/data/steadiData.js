export const USER_INFO = {
  name: 'Alex Morgan',
  email: 'alex.morgan@steadi.io',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
  unreadNotifications: 2,
};

export const MONTHLY_EARNINGS = [
  { month: 'Jan', value: 28, label: '28k' },
  { month: 'Feb', value: 82, label: '82k' },
  { month: 'Mar', value: 45, label: '45k' },
  { month: 'Apr', value: 55, label: '55k' },
  { month: 'May', value: 62, label: '62k' },
  { month: 'Jun', value: 48, label: '48k' },
  { month: 'Jul', value: 76.3, label: '76.3k', isHighlighted: true },
  { month: 'Aug', value: 58, label: '58k' },
  { month: 'Sep', value: 68, label: '68k' },
  { month: 'Oct', value: 42, label: '42k' },
  { month: 'Nov', value: 54, label: '54k' },
  { month: 'Dec', value: 65, label: '65k' },
];

export const INITIAL_GOALS = [
  {
    id: 'goal-1',
    name: 'Emergency Fund',
    category: 'Safety Net',
    progress: 72,
    current: '$7,200',
    target: '$10,000',
    icon: 'shield',
    monthlyDeposit: '$600/mo',
    dueDate: 'Dec 2026',
  },
  {
    id: 'goal-2',
    name: 'Europe Vacation',
    category: 'Travel',
    progress: 28,
    current: '$1,400',
    target: '$5,000',
    icon: 'plane',
    monthlyDeposit: '$450/mo',
    dueDate: 'Jul 2027',
  },
  {
    id: 'goal-3',
    name: 'Tesla Model 3',
    category: 'Vehicle',
    progress: 45,
    current: '$13,500',
    target: '$30,000',
    icon: 'car',
    monthlyDeposit: '$1,200/mo',
    dueDate: 'Nov 2027',
  },
];

export const NOTIFICATIONS = [
  {
    id: 'notif-1',
    title: 'Salary Deposit from Stripe Inc',
    amount: '+$4,500.00',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 'notif-2',
    title: 'Automated Savings: $450 moved to Europe Vacation',
    amount: '-$450.00',
    time: 'Yesterday',
    unread: true,
  },
];
