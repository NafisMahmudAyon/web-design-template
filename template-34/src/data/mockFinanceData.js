export const initialCards = [
  {
    id: 'card-1',
    number: '**** **** 4356',
    expiry: '09/29',
    balance: '$22,426.10',
    type: 'blue',
    holder: 'Sajibur Rahman',
    brand: 'Visa Business'
  },
  {
    id: 'card-2',
    number: '**** **** 7382',
    expiry: '08/28',
    balance: '$22,426.10',
    type: 'magenta',
    holder: 'Sajibur Rahman',
    brand: 'Mastercard World'
  }
];

export const transactionsData = [
  {
    id: 'tx-1',
    name: 'Netflix Subscription',
    category: 'Entertainment',
    date: 'Mar 12, 2026',
    method: 'PayPal',
    amount: '-$15.99',
    type: 'expense',
    status: 'Completed',
    logo: 'netflix'
  },
  {
    id: 'tx-2',
    name: 'Figma Team Plan',
    category: 'Software & Design',
    date: 'Mar 12, 2026',
    method: 'Credit Card',
    amount: '-$45.00',
    type: 'expense',
    status: 'Completed',
    logo: 'figma'
  },
  {
    id: 'tx-3',
    name: 'Client Payment',
    category: 'Invoice Settlement',
    date: 'Mar 12, 2026',
    method: 'PayPal',
    amount: '+$1,550.00',
    type: 'income',
    status: 'Pending',
    logo: 'paypal'
  },
  {
    id: 'tx-4',
    name: 'Spotify Premium',
    category: 'Music Subscription',
    date: 'Mar 12, 2026',
    method: 'Credit Card',
    amount: '-$25.89',
    type: 'expense',
    status: 'Completed',
    logo: 'spotify'
  },
  {
    id: 'tx-5',
    name: 'Adobe Creative',
    category: 'Cloud Services',
    date: 'Mar 12, 2026',
    method: 'PayPal',
    amount: '-$18.00',
    type: 'expense',
    status: 'Completed',
    logo: 'adobe'
  }
];

export const invoiceData = [
  {
    id: 'inv-1',
    date: 'July 19',
    dueText: 'in 2 weeks',
    status: 'Unpaid',
    client: 'Emma John',
    amount: '$200.00'
  },
  {
    id: 'inv-2',
    date: 'July 26',
    dueText: 'in 3 weeks',
    status: 'Paid',
    client: 'Liam Smith',
    amount: '$180.00'
  },
  {
    id: 'inv-3',
    date: 'August 2',
    dueText: 'in 4 weeks',
    status: 'Overdue',
    client: 'Olivia Brown',
    amount: '$220.00'
  },
  {
    id: 'inv-4',
    date: 'August 9',
    dueText: 'in 5 weeks',
    status: 'Paid',
    client: 'Noah Davis',
    amount: '$150.00'
  },
  {
    id: 'inv-5',
    date: 'August 16',
    dueText: 'in 6 weeks',
    status: 'Pending',
    client: 'Ava Wilson',
    amount: '$175.00'
  }
];

export const monthlyFlowData = [
  { month: 'Jan', in: 65, out: 40, inAmount: '+$65,200', outAmount: '-$40,100' },
  { month: 'Feb', in: 58, out: 45, inAmount: '+$58,400', outAmount: '-$45,300' },
  { month: 'Mar', in: 72, out: 52, inAmount: '+$72,100', outAmount: '-$52,000' },
  { month: 'Apr', in: 60, out: 42, inAmount: '+$60,300', outAmount: '-$42,800' },
  { month: 'May', in: 68, out: 48, inAmount: '+$68,500', outAmount: '-$48,200' },
  { month: 'Jun', in: 75, out: 55, inAmount: '+$75,000', outAmount: '-$55,400' },
  { month: 'Jul', in: 82, out: 62, inAmount: '+$82,300', outAmount: '-$62,100' },
  { month: 'Aug', in: 88, out: 65, inAmount: '+$80,899', outAmount: '-$60,899', isFeatured: true },
  { month: 'Sep', in: 78, out: 58, inAmount: '+$78,400', outAmount: '-$58,200' },
  { month: 'Oct', in: 84, out: 60, inAmount: '+$84,100', outAmount: '-$60,500' },
  { month: 'Nov', in: 76, out: 54, inAmount: '+$76,800', outAmount: '-$54,300' },
  { month: 'Dec', in: 80, out: 56, inAmount: '+$80,200', outAmount: '-$56,100' }
];
