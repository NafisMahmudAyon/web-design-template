export const METRICS = [
  {
    title: 'Total Portfolio Value',
    value: '$125,340',
    change: '+12.04% This Year',
    isPositive: true,
  },
  {
    title: 'Daily P/L',
    value: '+$540',
    change: '+0.43% Last Year',
    isPositive: true,
  },
  {
    title: 'Monthly Return',
    value: '+8.2%',
    change: '-1.4% Vs S&P',
    isPositive: false,
  },
  {
    title: 'Dividend Income',
    value: '$2,240',
    change: 'YTD',
    isPositive: true,
  },
  {
    title: 'Risk Score',
    value: '0.87',
    change: 'Moderate Beta',
    isPositive: true,
  },
];

export const HOLDINGS = [
  {
    symbol: 'MATIC',
    name: 'Polygon',
    price: '$1.45',
    weight: '19%',
    weightPct: 19,
    pl: '+7%',
    isPositive: true,
    color: 'bg-purple-600',
  },
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    price: '$0.25',
    weight: '12%',
    weightPct: 12,
    pl: '+4%',
    isPositive: true,
    color: 'bg-amber-500',
  },
  {
    symbol: 'SOL',
    name: 'Solana',
    price: '$150.00',
    weight: '40%',
    weightPct: 40,
    pl: '+10%',
    isPositive: true,
    color: 'bg-indigo-600',
  },
  {
    symbol: 'XRP',
    name: 'Ripple',
    price: '$35.00',
    weight: '20%',
    weightPct: 20,
    pl: '+8%',
    isPositive: true,
    color: 'bg-sky-600',
  },
  {
    symbol: 'ADA',
    name: 'Cardano',
    price: '$28.50',
    weight: '25%',
    weightPct: 25,
    pl: '+8%',
    isPositive: true,
    color: 'bg-teal-600',
  },
];

export const GAINERS = [
  { symbol: 'SOFI', name: 'SoFi Technologies', change: '+10.8%' },
  { symbol: 'CRWD', name: 'CrowdStrike Holdings', change: '+6.7%' },
  { symbol: 'UBER', name: 'Uber Technologies', change: '+5.3%' },
];

export const LOSERS = [
  { symbol: 'SNAP', name: 'Snap Inc.', change: '-14%' },
  { symbol: 'RIVN', name: 'Rivian Automotive', change: '-9.8%' },
  { symbol: 'LCID', name: 'Lucid Group', change: '-4.7%' },
];

export const WATCHLIST = [
  { symbol: 'Apple Inc.', price: '$174.55', change: '+1.8%', isPositive: true },
  { symbol: 'Nvidia', price: '$203.34', change: '+2.3%', isPositive: true },
];

export const MARKET_INTELLIGENCE = [
  {
    tag: 'MACRO · AMERICAS',
    headline: 'US Job Growth Exceeds Expectations, Boosting Consumer Confidence And Stocks.',
  },
  {
    tag: 'VESTA · EUROPE',
    headline: 'ECB Signals Rate Hikes Amid Rising Inflation Fears Across The Continent.',
  },
  {
    tag: 'MACRO · ASIA',
    headline: "China's Manufacturing Slows, Sparking Concerns Over Global Supply Chains.",
  },
];

export const AI_SUGGESTIONS = [
  "How should I rebalance my crypto vs stock allocation?",
  "What's my portfolio's risk exposure if tech dips 5%?",
  "Summarize the latest market intelligence for Americas.",
  "Which holding has generated the highest Sharpe ratio?"
];
