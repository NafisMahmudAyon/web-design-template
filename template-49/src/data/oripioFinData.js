export const USER_PROFILE = {
  name: 'Alex Vance',
  role: 'Treasury Admin',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
  unreadNotifications: 3,
};

export const SIDEBAR_NAV = {
  mainMenu: [
    { id: 'dashboard', label: 'Dashboard', icon: 'layout-grid', badge: null, active: true },
    { id: 'analytics', label: 'Analytics', icon: 'bar-chart-2', badge: '20' },
    { id: 'transactions', label: 'Transactions', icon: 'credit-card', badge: null },
    { id: 'invoices', label: 'Invoices', icon: 'file-text', badge: null },
  ],
  features: [
    { id: 'recurring', label: 'Recurring', icon: 'repeat', badge: '16' },
    { id: 'subscriptions', label: 'Subscriptions', icon: 'shield-check', badge: null },
    { id: 'feedback', label: 'Feedback', icon: 'message-square', badge: null },
  ],
  general: [
    { id: 'settings', label: 'Settings', icon: 'settings' },
    { id: 'help', label: 'Help Desk', icon: 'help-circle' },
    { id: 'logout', label: 'Log out', icon: 'log-out' },
  ],
};

export const KPI_CARDS = [
  {
    id: 'balance',
    title: 'My balance',
    subtitle: 'Wallet Overview & Spending',
    amount: '$20,520.32',
    change: '+1.5% ↑',
    actionText: 'See details',
    isPrimary: true, // Emerald active gradient adhering to Rule 1A
  },
  {
    id: 'savings',
    title: 'Savings account',
    subtitle: 'Steady Growth Savings',
    amount: '$15,800.45',
    change: '+3.2% ↑',
    actionText: 'View summary',
    isPrimary: false,
  },
  {
    id: 'investment',
    title: 'Investment portfolio',
    subtitle: 'Track Your Wealth Growth',
    amount: '$50,120.78',
    change: '+4.7% ↑',
    actionText: 'Analyze performance',
    isPrimary: false,
  },
];

export const WALLET_CURRENCIES = [
  {
    id: 'usd',
    currency: 'USD',
    symbol: '$',
    flag: '🇺🇸',
    amount: '$22,678.00',
    limit: 'Limit is $10k a month',
    status: 'Active',
    isActive: true,
  },
  {
    id: 'eur',
    currency: 'EUR',
    symbol: '€',
    flag: '🇩🇪',
    amount: '€18,345.00',
    limit: 'Limit is €8k a month',
    status: 'Active',
    isActive: true,
  },
  {
    id: 'bdt',
    currency: 'BDT',
    symbol: '৳',
    flag: '🇧🇩',
    amount: '৳1,22,678.00',
    limit: 'Limit is ৳10k a month',
    status: 'Active',
    isActive: true,
  },
  {
    id: 'gbp',
    currency: 'GBP',
    symbol: '£',
    flag: '🇬🇧',
    amount: '£15,000.00',
    limit: 'Limit is £7.5k a month',
    status: 'Inactive',
    isActive: false,
  },
];

export const CASH_FLOW_BARS = [
  { month: 'Jan', height: 48, isFeatured: false },
  { month: 'Feb', height: 38, isFeatured: false },
  { 
    month: 'Mar', 
    height: 86, 
    isFeatured: true,
    tooltip: {
      date: 'July 23, 2026',
      cashflow: '$33,847.00',
      inflow: '-$7,456.00',
    }
  },
  { month: 'Apr', height: 42, isFeatured: false },
  { month: 'May', height: 58, isFeatured: false },
  { month: 'Jun', height: 32, isFeatured: false },
  { month: 'Jul', height: 46, isFeatured: false },
];

export const RECENT_ACTIVITIES = [
  {
    id: 'act-1',
    activity: 'Software License',
    iconType: 'adobe',
    orderId: 'INV_000076',
    date: '17 Apr, 2026',
    time: '03:45 PM',
    price: '$25,500',
    status: 'Completed',
  },
  {
    id: 'act-2',
    activity: 'Flight Ticket',
    iconType: 'flight',
    orderId: 'INV_000075',
    date: '15 Apr, 2026',
    time: '11:20 AM',
    price: '$22,750',
    status: 'Pending',
  },
  {
    id: 'act-3',
    activity: 'Cloud Infrastructure AWS',
    iconType: 'cloud',
    orderId: 'INV_000074',
    date: '12 Apr, 2026',
    time: '09:15 AM',
    price: '$8,400',
    status: 'Completed',
  },
  {
    id: 'act-4',
    activity: 'Team Subscription Slack',
    iconType: 'slack',
    orderId: 'INV_000073',
    date: '10 Apr, 2026',
    time: '02:30 PM',
    price: '$1,250',
    status: 'Completed',
  },
  {
    id: 'act-5',
    activity: 'Contractor Retainer Payout',
    iconType: 'payout',
    orderId: 'INV_000072',
    date: '08 Apr, 2026',
    time: '05:00 PM',
    price: '$14,800',
    status: 'Completed',
  },
];
