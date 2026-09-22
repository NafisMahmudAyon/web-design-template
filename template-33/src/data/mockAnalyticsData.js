export const kpiStatsData = [
  {
    id: 'total-sales',
    title: 'Total Sales',
    value: '12,485',
    change: '+3.1%',
    changeType: 'increase',
    period: 'vs Last Week',
    icon: 'trending-up',
    details: '1,840 units dispatched in last 48h. Direct store checkout conversions up 4.2%.'
  },
  {
    id: 'active-customers',
    title: 'Active Customers',
    value: '4,263',
    change: '+1.8%',
    changeType: 'increase',
    period: 'New Customers',
    icon: 'users',
    details: '912 high-LTV repeat buyers active today across North American and European storefronts.'
  },
  {
    id: 'total-revenue',
    title: 'Total Revenue',
    value: '$68,837',
    change: '+2.4%',
    changeType: 'increase',
    period: 'vs Last Week',
    icon: 'dollar-sign',
    details: 'Gross merchandise volume: $82,410. Processing fees: $2,140. Net margin: 28.4%.'
  },
  {
    id: 'refund-requests',
    title: 'Refund Requests',
    value: '187',
    change: '-0.6%',
    changeType: 'decrease',
    period: 'vs Last Week',
    icon: 'rotate-ccw',
    details: 'Return rate reduced to 1.49%. 142 returns automatically routed through self-service.'
  }
];

export const monthlyProfitData = [
  { month: 'Jan', sales: 38, revenue: 28, rawSales: '38,200', rawRev: '$28,450' },
  { month: 'Feb', sales: 74, revenue: 62, rawSales: '74,120', rawRev: '$62,300' },
  { month: 'Mar', sales: 58, revenue: 46, rawSales: '58,400', rawRev: '$46,120' },
  { month: 'Apr', sales: 48, revenue: 38, rawSales: '48,900', rawRev: '$38,700' },
  { month: 'May', sales: 74, revenue: 64, rawSales: '73,940', rawRev: '$63,773.83', isFeatured: true },
  { month: 'Jun', sales: 44, revenue: 34, rawSales: '44,200', rawRev: '$34,100' },
  { month: 'Jul', sales: 52, revenue: 42, rawSales: '52,600', rawRev: '$42,300' },
  { month: 'Aug', sales: 58, revenue: 48, rawSales: '58,300', rawRev: '$48,200' },
  { month: 'Sep', sales: 42, revenue: 32, rawSales: '42,100', rawRev: '$32,400' },
  { month: 'Oct', sales: 72, revenue: 58, rawSales: '72,400', rawRev: '$58,100' },
  { month: 'Nov', sales: 54, revenue: 44, rawSales: '54,200', rawRev: '$44,600' },
  { month: 'Dec', sales: 62, revenue: 50, rawSales: '62,800', rawRev: '$50,300' }
];

export const topProductsData = [
  {
    id: 'prod-1',
    name: 'Adidas Ultraboost 22',
    category: 'Running Shoes',
    price: '$180',
    salesCount: '1,420 orders',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=128&h=128&q=80',
  },
  {
    id: 'prod-2',
    name: 'Samsung Galaxy Watch 6',
    category: 'Smartwatch',
    price: '$299',
    salesCount: '984 orders',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=128&h=128&q=80',
  },
  {
    id: 'prod-3',
    name: 'Sony WH-1000XM5',
    category: 'Noise-Canceling Headphones',
    price: '$399',
    salesCount: '742 orders',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=128&h=128&q=80',
  },
  {
    id: 'prod-4',
    name: 'Apple AirPods Pro (2nd Gen)',
    category: 'Wireless Earbuds',
    price: '$249',
    salesCount: '1,890 orders',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=128&h=128&q=80',
  }
];

export const countrySalesData = [
  {
    id: 'us',
    name: 'United State',
    flag: '🇺🇸',
    revenue: '$1,245,680',
    orders: '34,210',
    share: '48%',
    topProduct: 'Adidas Ultraboost 22',
    coords: { x: 26, y: 44 }
  },
  {
    id: 'fi',
    name: 'Finland',
    flag: '🇫🇮',
    revenue: '$312,450',
    orders: '8,420',
    share: '18%',
    topProduct: 'Sony WH-1000XM5',
    coords: { x: 56, y: 26 }
  },
  {
    id: 'bd',
    name: 'Bangladesh',
    flag: '🇧🇩',
    revenue: '$158,970',
    orders: '6,110',
    share: '12%',
    topProduct: 'Samsung Galaxy Watch 6',
    coords: { x: 73, y: 52 }
  },
  {
    id: 'br',
    name: 'Brazil',
    flag: '🇧🇷',
    revenue: '$84,200',
    orders: '3,240',
    share: '8%',
    topProduct: 'Apple AirPods Pro',
    coords: { x: 36, y: 74 }
  }
];
