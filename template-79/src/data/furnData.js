export const navLinks = [
  { name: 'SHOP', href: '#products' },
  { name: 'OFFERS', href: '#offers' },
  { name: 'CATEGORIES', href: '#recommendations' },
];

export const services = [
  {
    id: 1,
    title: 'Free Consulting',
    desc: '24/7 for your furniture needs',
    color: 'bg-blue-50 text-blue-600',
    icon: 'Headphones',
  },
  {
    id: 2,
    title: 'Overall Guarantee',
    desc: 'For our high quality materials',
    color: 'bg-amber-50 text-amber-600',
    icon: 'ShieldCheck',
  },
  {
    id: 3,
    title: 'Special Price',
    desc: "For undoubted furniture's quality, only for you!",
    color: 'bg-rose-50 text-rose-600',
    icon: 'Tag',
  },
];

export const productCategories = ['All', 'Sofa', 'Chair', 'Table', 'Others'];

export const products = [
  {
    id: 1,
    name: 'Doyle Armchair',
    price: 95.0,
    category: 'Chair',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=85',
    description: 'Designed for ultimate ergonomic support and timeless modernist elegance, featuring high-density foam wrapped in plush berry velvet.',
    dimensions: 'W 82cm x D 78cm x H 84cm',
    material: 'Premium Velvet & Powder-coated Steel',
  },
  {
    id: 2,
    name: 'Fauteuil Legendary',
    price: 105.0,
    category: 'Chair',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=85',
    description: 'An icon of mid-century Scandinavian design, featuring a 360-degree swivel mechanism and tailored woven olive wool blend.',
    dimensions: 'W 86cm x D 80cm x H 90cm',
    material: 'Natural Wool Upholstery & Brushed Brass',
  },
  {
    id: 3,
    name: 'Loung Couch Chair',
    price: 85.0,
    category: 'Chair',
    image: 'https://images.unsplash.com/photo-1580481077191-4b10705a6828?auto=format&fit=crop&w=600&q=85',
    description: 'Minimalist curves and warm neutral oatmeal upholstery make this dining or study lounge chair a quiet statement piece.',
    dimensions: 'W 75cm x D 72cm x H 80cm',
    material: 'Belgian Linen & Solid Ash Timber',
  },
  {
    id: 4,
    name: 'Italian Light Luxury',
    price: 110.0,
    category: 'Chair',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=85',
    description: 'Handcrafted in Milan with full-grain cognac aniline leather, contoured lumbar wingbacks, and oiled European walnut legs.',
    dimensions: 'W 88cm x D 85cm x H 98cm',
    material: 'Full-grain Aniline Leather & Walnut',
  },
  {
    id: 5,
    name: 'Velvet Nordic Sofa',
    price: 340.0,
    category: 'Sofa',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=85',
    description: 'Deep lounge proportions and modular configurations suited for grand living rooms and modern loft spaces.',
    dimensions: 'W 220cm x D 98cm x H 78cm',
    material: 'High-resilience foam & Forest Green Bouclé',
  },
  {
    id: 6,
    name: 'Solid Oak Coffee Table',
    price: 160.0,
    category: 'Table',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=85',
    description: 'Solid American white oak coffee table with soft rounded bullnose edge and seamless joint craftsmanship.',
    dimensions: 'Diameter 90cm x H 42cm',
    material: 'FSC-Certified White Oak & Matte Lacquer',
  },
];

export const recommendationsData = {
  'Living Room': {
    title: 'Living Room',
    subtitle: 'The first items created for household use were made of stone, as wood was not readily available.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    tag: 'Collection 2024',
    features: ['Low profile linen sofa', 'Minimalist black pendant light', 'Natural marble coffee table'],
  },
  'Private workspace': {
    title: 'Private Workspace',
    subtitle: 'Ergonomic precision meets warm acoustic timber walls, curated for deep focus and uninterrupted creativity.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85',
    tag: 'Ergonomic Series',
    features: ['Adjustable walnut executive desk', 'Top-grain task chair', 'Integrated wire management'],
  },
  'Gaming room': {
    title: 'Gaming Room',
    subtitle: 'Sophisticated ambient lighting paired with sound-dampening upholstery and performance ergonomics.',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=85',
    tag: 'Performance Lounge',
    features: ['Reclining hybrid armchair', 'Ambient halo backlighting', 'Ultra-breathable honeycomb fabric'],
  },
  'Patio': {
    title: 'Patio & Outdoor',
    subtitle: 'Weather-tested marine teak and water-repellent olefin woven textiles designed for open air tranquility.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    tag: 'Outdoor Resort',
    features: ['Sustainably harvested teak frame', 'UV-shielded sun cushions', 'Modular poolside loungers'],
  },
};
