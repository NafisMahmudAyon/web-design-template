export const topTickers = [
  {
    id: 'btc',
    name: 'Bitcoin',
    pair: 'BTC/USDT',
    price: 12540.00,
    change: 3.1,
    period: 'vs Last Week',
    iconColor: '#F7931A',
    symbol: 'BTC'
  },
  {
    id: 'ltc',
    name: 'Litecoin',
    pair: 'LTC/USDT',
    price: 135.10,
    change: 0.8,
    period: 'vs Last Week',
    iconColor: '#345D9D',
    symbol: 'LTC'
  },
  {
    id: 'xrp',
    name: 'Ripple',
    pair: 'XRP/USDT',
    price: 0.72,
    change: -1.2,
    period: 'vs Last Week',
    iconColor: '#23292F',
    symbol: 'XRP'
  },
  {
    id: 'eth',
    name: 'Ethereum',
    pair: 'ETH/USDT',
    price: 1040.50,
    change: 5.6,
    period: 'vs Last Week',
    iconColor: '#627EEA',
    symbol: 'ETH'
  }
];

export const marketLeadersData = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    total: '$44,343,923.00',
    change24h: '$2,384.00',
    percentage: 3.1,
    barColor: '#FF5B37',
    dotColor: '#FF5B37'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    total: '$14,332,867.00',
    change24h: '$2,384.00',
    percentage: 2.4,
    barColor: '#FF886E',
    dotColor: '#FF886E'
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    total: '$746,342.00',
    change24h: '$1,434.00',
    percentage: 1.3,
    barColor: '#FFC2B4',
    dotColor: '#FFC2B4'
  }
];

export const portfolioDays = [
  { day: 'Sunday', short: 'Sun', value: 72400, btc: '38,200', change: 1.8 },
  { day: 'Monday', short: 'Mon', value: 76500, btc: '39,800', change: 2.4 },
  { day: 'Tuesday', short: 'Tue', value: 74200, btc: '39,100', change: -0.9 },
  { day: 'Wednesday', short: 'Wed', value: 79800, btc: '41,500', change: 3.1 },
  { day: 'Thursday', short: 'Thu', value: 83727.90, btc: '44,008', change: 23.48, active: true },
  { day: 'Friday', short: 'Fri', value: 81500, btc: '42,900', change: -1.2 },
  { day: 'Saturday', short: 'Sat', value: 85200, btc: '45,100', change: 4.2 }
];

export const recentTransactions = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$64,280.50',
    change24h: '+34.5%',
    change7d: '+29.8%',
    isPositive24h: true,
    isPositive7d: true,
    volume: '$18,435.7B',
    marketCap: '$44,56.8T',
    trendPoints: [30, 42, 35, 55, 48, 68, 60, 80],
    color: '#F7931A'
  },
  {
    id: 2,
    name: 'Solana',
    symbol: 'SOL',
    price: '$520.40',
    change24h: '+36.7%',
    change7d: '+35.1%',
    isPositive24h: true,
    isPositive7d: true,
    volume: '$4,453.3B',
    marketCap: '$8,548.1B',
    trendPoints: [25, 38, 45, 40, 60, 58, 75, 88],
    color: '#14F195'
  },
  {
    id: 3,
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$4,320.75',
    change24h: '-28.9%',
    change7d: '-31.2%',
    isPositive24h: false,
    isPositive7d: false,
    volume: '$32,435.5B',
    marketCap: '$3,542.5T',
    trendPoints: [80, 65, 70, 48, 52, 35, 40, 22],
    color: '#627EEA'
  },
  {
    id: 4,
    name: 'Utrust',
    symbol: 'UTK',
    price: '$520.40',
    change24h: '+32.1%',
    change7d: '+30.4%',
    isPositive24h: true,
    isPositive7d: true,
    volume: '$4,546.3B',
    marketCap: '$8,568.1B',
    trendPoints: [20, 30, 28, 45, 40, 62, 59, 78],
    color: '#2846C7'
  },
  {
    id: 5,
    name: 'Quant',
    symbol: 'QNT',
    price: '$520.40',
    change24h: '+37.4%',
    change7d: '+33.3%',
    isPositive24h: true,
    isPositive7d: true,
    volume: '$45,635.3B',
    marketCap: '$88,443.1B',
    trendPoints: [32, 28, 44, 50, 65, 60, 82, 90],
    color: '#FF5B37'
  }
];

export const topAssets = [
  { id: 'etn', name: 'Electroneum', symbol: 'ETN', price: '$0.2724', change: '+2.85%', isPositive: true, color: '#00A9E0' },
  { id: 'sol', name: 'Solana', symbol: 'SOL', price: '$145.67', change: '+5.46%', isPositive: true, color: '#9945FF' },
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', price: '$68,420', change: '+2.85%', isPositive: true, color: '#F7931A' },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', price: '$15.82', change: '+3.12%', isPositive: true, color: '#627EEA' },
  { id: 'xrp', name: 'Ripple', symbol: 'XRP', price: '$0.62', change: '+4.03%', isPositive: true, color: '#23292F' }
];

export const topGainers = [
  { id: 'rose', name: 'ROSE', cap: '$274.8B', price: '$36.89', change: '12.99%', isDown: true, icon: 'star' },
  { id: 'jasper', name: 'JASPER', cap: '$198.4B', price: '$25.43', change: '9.87%', isDown: false, icon: 'bolt' },
  { id: 'azure', name: 'AZURE', cap: '$145.6B', price: '$19.78', change: '7.45%', isDown: true, icon: 'star' },
  { id: 'ember', name: 'EMBER', cap: '$267.3B', price: '$33.52', change: '11.68%', isDown: true, icon: 'bolt' }
];
