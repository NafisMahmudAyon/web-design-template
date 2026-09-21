export const LOGOS = [
  'VISA', 'Apple Pay', 'PayPal', 'Skrill', 'stripe', 'Payoneer', 'Cash App'
];

export const STATS = [
  { value: '10M+', label: 'Customers worldwide' },
  { value: '99.99%', label: 'Platform uptime' },
  { value: '150+', label: 'Markets supported' },
  { value: '24/7', label: 'Human support' },
];

export const CARDS_DATA = [
  {
    id: 'core',
    name: 'Core — Metal-Free, Fee-Free',
    type: 'PHYSICAL',
    cardNumber: '4419 •••• •••• 2078',
    cardHolder: 'A. RIVERA',
    expiry: '08/29',
    bgColor: 'bg-[#0b2416] text-white',
    cardSkin: 'bg-emerald-950 border border-emerald-800/40 text-emerald-100',
    tagColor: 'bg-white/10 text-white',
    desc: 'Everyday banking, contactless, works in 150 markets with no foreign transaction charge.',
    isFeatured: false,
    perks: ['Free debit card', 'Virtual card creation', 'Zero FX fees up to $1k/mo']
  },
  {
    id: 'flex',
    name: 'Flex — A Card Per Purpose',
    type: 'VIRTUAL',
    cardNumber: '5502 •••• •••• 1140',
    cardHolder: 'ONLINE ONLY',
    expiry: '04/30',
    bgColor: 'bg-[#e4f7a8] text-[#0b2416]',
    cardSkin: 'bg-[#bef264] text-[#0b2416] border border-[#a3e635]',
    tagColor: 'bg-[#0b2416] text-white',
    desc: 'Create in two taps, cap the spend, freeze or delete it whenever you want.',
    isFeatured: true,
    perks: ['Unlimited virtual cards', 'Auto-freeze on suspicious activity', 'Custom merchant limits']
  },
  {
    id: 'reserve',
    name: 'Reserve — Brushed Steel',
    type: 'RESERVE',
    cardNumber: '3771 •••• •••• 0093',
    cardHolder: 'M. OKONJO',
    expiry: '12/30',
    bgColor: 'bg-[#0b2416] text-white',
    cardSkin: 'bg-gradient-to-br from-zinc-800 to-zinc-950 text-white border border-zinc-700',
    tagColor: 'bg-amber-400 text-black',
    desc: 'Lounge access, travel cover, priority support and 2% back on everything abroad.',
    isFeatured: false,
    perks: ['Heavy metal steel card', '2.0% Unlimited cash back abroad', 'LoungeKey airport access']
  }
];

export const PRICING_TIERS = [
  {
    id: 'essential',
    name: 'Essential',
    tagline: 'Everyday banking, done properly.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    isPopular: false,
    features: [
      'One physical card, free delivery',
      '$2,000 / month in transfers',
      '3 virtual cards',
      'Spending insights',
      'Standard support'
    ]
  },
  {
    id: 'plus',
    name: 'Plus',
    tagline: 'For people who move money often.',
    monthlyPrice: 9,
    yearlyPrice: 7.20,
    isPopular: true,
    features: [
      'Everything in Essential plus:',
      'Unlimited fee-free transfers',
      'Unlimited virtual cards',
      '32 currency wallets',
      'Savings at 4.1% APY',
      'Priority 24/7 human chat'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Travel, cover and a name on the door.',
    monthlyPrice: 24,
    yearlyPrice: 19.20,
    isPopular: false,
    features: [
      'Everything in Plus:',
      'Reserve steel card',
      'Airport lounge access',
      'Travel & device cover',
      'Named dedicated support team'
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: '"I invoice in three currencies. VELD was the first account where the money just landed — same day, same amount I expected."',
    author: 'Ines Cardoso',
    role: 'Product designer',
    city: 'Lisbon',
    rating: 5,
    isDark: false
  },
  {
    quote: '"We moved payroll for 40 people over in an afternoon. Support answered in under a minute — an actual person, twice."',
    author: 'Marcus Vela',
    role: 'COO',
    city: 'Hartwell Studio',
    rating: 5,
    isDark: true
  },
  {
    quote: '"The subscription radar found $61 a month I\'d forgotten about. It paid for the plan four times over in week one."',
    author: 'Daniel Okafor',
    role: 'Engineer',
    city: 'Toronto',
    rating: 5,
    isDark: false
  }
];

export const CASHFLOW_MONTHS = [
  { month: 'Jan', income: 7200, expense: 3800, saved: 1400 },
  { month: 'Feb', income: 8100, expense: 4100, saved: 1800 },
  { month: 'Mar', income: 7800, expense: 4300, saved: 1500 },
  { month: 'Apr', income: 8900, expense: 4600, saved: 2100 },
  { month: 'May', income: 9100, expense: 4800, saved: 2000 },
  { month: 'Jun', income: 8600, expense: 4400, saved: 1900 },
  { month: 'Jul', income: 9400, expense: 4900, saved: 2200 },
  { month: 'Aug', income: 9240, expense: 4922, saved: 2150 },
];
