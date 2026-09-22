export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Deals', href: '#deals' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Reviews', href: '#reviews' },
];

export const heroData = {
  badge: 'Top Destination',
  headline: 'Discover New Places,\nCreate Lasting Memories',
  subtitle: 'Handpicked stays, seamless booking, and local experiences, everything you need to plan your next adventure with confidence.',
  bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
  // Alpine lake with traveler looking out
  heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop',
  defaultSearch: {
    destination: 'Kyoto, Japan',
    dates: 'Sat, 16 Dec 2026 - Mon, 24 Dec 2026',
    guests: '5 People',
  }
};

export const whoWeAreData = {
  badge: 'Who we are?',
  statementPart1: "We're a group of travel professionals, local guides, ",
  statementBold1: "and experience designers working",
  statementPart2: " together to create journeys that matter. ",
  statementBold2: "From the first search to the last goodbye, we take care of the details",
  statementPart3: " so your trip feels effortless and personal.",
  photos: [
    {
      id: 'photo-1',
      title: 'Alpine Peak Summit',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'photo-2',
      title: 'High Altitude Trek',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'photo-3',
      title: 'Savannah Wildlife Safari',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop'
    }
  ],
  achievementsTag: 'Our Achievements',
  metrics: [
    { value: '1.5M+', label: 'nights reserved' },
    { value: '2M+', label: 'travelers guided' },
    { value: '500K+', label: 'local experiences' },
    { value: '750K+', label: 'five-star reviews' }
  ]
};

export const dealsData = {
  headline: 'Exclusive deals just for you!',
  seeAllText: 'See All →',
  deals: [
    {
      id: 'deal-1',
      tag: 'Valid only on 28 Nov - 10 Dec',
      description: 'Hand-selected properties with flexible cancellation on eligible rates.',
      discount: '25%',
      discountLabel: 'off on handpicked hotels',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'deal-2',
      tag: 'Valid only on 4 Dec - 28 Dec',
      description: 'Discount applies to select routes and dates. Seats are limited.',
      discount: '50%',
      discountLabel: '*with Terms and Condition',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
    }
  ]
};

export const destinationsData = {
  badge: 'Who we are?',
  headline: 'Best travel destination',
  subtitle: 'Explore the best properties in prime locations and take the next step towards your future today.',
  categories: [
    'Family Holidays',
    'Mountains',
    'Beaches',
    'Luxury Stays',
    'Budget Travel',
    'City Escapes',
    'Mountain Retreats',
    'Beach Getaways'
  ],
  items: [
    {
      id: 'dest-1',
      category: 'Family Holidays',
      title: 'Culinary Journey Through the Streets of Italy',
      country: 'Italy',
      dateRange: 'August 15 to 20',
      rating: '5.0 Rating',
      price: '$750',
      period: '/ Night',
      inclusion: 'Including meals and excursions',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop',
      featured: true
    },
    {
      id: 'dest-2',
      category: 'Mountains',
      title: 'Exploring the Hidden Wonders of the World Adventure',
      country: 'Japan',
      dateRange: 'July 3 to 7',
      rating: '4.8 Rating',
      price: '$400',
      period: '/ Night',
      inclusion: 'Including taxes and fees',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
      featured: false
    },
    {
      id: 'dest-3',
      category: 'Luxury Stays',
      title: 'Wildlife Safari in the Heart of Kenya',
      country: 'Switzerland',
      dateRange: 'Sep 10 to 17',
      rating: '4.9 Rating',
      price: '$1200',
      period: '/ Night',
      inclusion: 'Including park fees and guides',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
      featured: false
    },
    {
      id: 'dest-4',
      category: 'Beaches',
      title: 'Embark on a Cultural Journey Across Stunning Landscapes',
      country: 'Indonesia',
      dateRange: 'August 15 to 20',
      rating: '5.0 Rating',
      price: '$750',
      period: '/ Night',
      inclusion: 'Including meals and excursions',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
      featured: false
    },
    {
      id: 'dest-5',
      category: 'Budget Travel',
      title: 'A Wildlife Safari in the Heart of Africa',
      country: 'Morocco',
      dateRange: 'Sep 10 to 17',
      rating: '4.7 Rating',
      price: '$2,500',
      period: '/ Week',
      inclusion: 'Accommodation',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
      featured: false
    },
    {
      id: 'dest-6',
      category: 'City Escapes',
      title: 'Culinary Journey Through the Streets of Italy',
      country: 'Greece',
      dateRange: 'August 15 to 22',
      rating: '4.9 Rating',
      price: '$1,200',
      period: '/ Week',
      inclusion: 'All meals included',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
      featured: false
    }
  ]
};

export const staysFeatureData = {
  badge: 'About Us',
  headline: 'Handpicked stays, honest prices',
  subtitle: 'Carefully selected accommodations that combine comfort, quality, and affordability.',
  features: [
    {
      id: 'f-1',
      icon: 'globe',
      title: 'Discover Distinctive Stays Worldwide',
      description: 'Unique stays across the globe designed to make every trip memorable.'
    },
    {
      id: 'f-2',
      icon: 'headset',
      title: '24/7 Dedicated Support',
      description: 'Round-the-clock assistance to ensure a smooth and stress-free travel experience.'
    }
  ],
  rightImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
  statsPill1: {
    title: 'Statistics',
    totalProfit: '$89.3k',
    rate: '$12k Rate'
  },
  statsPill2: {
    title: 'Sales Statistics',
    rooms: '3 Beds • 2 Bathrooms',
    price: '$880/m',
    reviews: '40 Reviews',
    thumb: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=300&auto=format&fit=crop'
  }
};

export const testimonialsData = {
  badge: 'Testimonials',
  headline: 'What our customer says',
  subtitle: 'Trusted by travelers worldwide, here are their stories.',
  videoCard: {
    caption: 'Our team uses Ocampos for real-time crypto and reporting',
    author: 'Michael Thompson',
    role: 'Content Marketing Specialist',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop'
  },
  stories: [
    {
      id: 'story-1',
      title: 'Traveler From New York',
      content: 'Booking through this agency was so smooth. They helped us plan every detail of our trip, from flights to hotel stays, and everything was exactly as promised. It felt stress-free the entire time and enjoyed every moment of my vacation.',
      author: 'Jonathan Johnson',
      role: 'Adventure Traveler',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
      rating: 5
    },
    {
      id: 'story-2',
      title: 'Family Vacation in Bali',
      content: 'We wanted our honeymoon to be unforgettable, and the team made it happen. From choosing the perfect destination to arranging special experiences, everything exceeded our expectations. We\'ll definitely book our next trip with them.',
      author: 'Sarah Williams',
      role: 'Family Traveler',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
      rating: 5
    }
  ]
};

export const ctaBannerData = {
  headline: 'Discover Special\nPrices for Top\nDestinations',
  offerTag: 'Special Offers',
  discountText: '45% Off Prices',
  bgImage: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1800&auto=format&fit=crop'
};

export const footerData = {
  brand: 'Journeo',
  tagline: 'A Team Committed to Enhancing Every Journey',
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#destinations' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Use', href: '#terms' }
  ],
  copyright: '© 2026 Journeo. All rights reserved.'
};
