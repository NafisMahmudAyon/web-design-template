export const HERO_ASSETS = {
  heroDrink: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1600&q=85',
  greenHourCan: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=85',
  oceanWave: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85',
  storyGuy: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85',
  bottleBlue: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=85',
  footerModel: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
};

export const FLAVORS = [
  {
    id: 'lime-ginger',
    name: 'LIME & GINGER',
    price: '$3.20',
    tag: 'BESTSELLER',
    tagColor: 'bg-[#b8ff00] text-black',
    desc: 'Sicilian lime pressed with garden mint. Sharp, cool and impossible to put down.',
    ingredients: ['LIME', 'GINGER', 'SEA SALT'],
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'orange-flavor',
    name: 'ORANGE FLAVOR',
    price: '$3.20',
    tag: 'LIMITED',
    tagColor: 'bg-emerald-900 text-white',
    desc: 'Late-season berries, torn basil leaf and a whisper of black pepper.',
    ingredients: ['ORANGE', 'PEPPER'],
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'golden-hour',
    name: 'GOLDEN HOUR',
    price: '$3.40',
    tag: 'NEW',
    tagColor: 'bg-[#f7c948] text-black',
    desc: 'Sun-ripened peach with a slow warm kick of root ginger.',
    ingredients: ['ORANGE', 'GINGER'],
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'apple-pear',
    name: 'APPLE & PEAR',
    price: '$3.20',
    tag: 'CRISP',
    tagColor: 'bg-emerald-200 text-emerald-950',
    desc: 'Cucumber pressed with lime zest. The quietest, cleanest one of the set.',
    ingredients: ['APPLE', 'PEAR'],
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=85'
  }
];

export const INGREDIENTS_LIST = [
  { num: '01', title: 'REAL PRESSED FRUIT' },
  { num: '02', title: 'NO ARTIFICIAL COLORS' },
  { num: '03', title: 'LIGHTLY SWEETENED' },
  { num: '04', title: 'SLOW-STEEPED BOTANICALS' },
];

export const INGREDIENT_PHOTOS = [
  { label: 'CITRUS / COLD PRESSED', image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=600&q=85' },
  { label: 'BERRIES', image: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?auto=format&fit=crop&w=600&q=85' },
  { label: 'ROOT GINGER', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=85' },
  { label: 'GARDEN MINT', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=85' },
  { label: 'SPRING WATER', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=600&q=85' },
];

export const REVIEWS = [
  {
    quote: '"Cool Spell replaced my afternoon iced coffee and I\'m not even mad about it. Takes like a garden, feels like a reset."',
    author: 'Noor Delacroix',
    role: 'SET DESIGNER',
    city: 'LISBON',
    rating: '5.0',
    isDark: false,
    isYellow: false
  },
  {
    quote: '"Golden Hour after a long ride. The ginger is real ginger — you feel it. Nothing sticky left behind."',
    author: 'Idris Kovač',
    role: 'CYCLING COACH',
    city: 'ROTTERDAM',
    rating: '5.0',
    isDark: true,
    isYellow: false
  },
  {
    quote: '"I brought a four-pack to a rooftop dinner and left with zero cans and four new questions about where to buy it."',
    author: 'Halle Ostrom',
    role: 'CHEF',
    city: 'COPENHAGEN',
    rating: '4.9',
    isDark: false,
    isYellow: false
  },
  {
    quote: '"Wild Field is the only berry drink I\'ve had that doesn\'t taste like candy. The basil is a genuinely great idea."',
    author: 'Casper Muñoz',
    role: 'PHOTOGRAPHER',
    city: 'AUSTIN',
    rating: '5.0',
    isDark: false,
    isYellow: true
  }
];

export const INSTAGRAM_PHOTOS = [
  'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=85',
];

export const JOURNAL_ARTICLES = [
  {
    category: 'FLAVOR',
    date: 'MAY 14',
    readTime: '4 MIN',
    title: 'WHY CITRUS ALWAYS WINS THE SUMMER',
    excerpt: 'Acid, aroma and temperature — the three-part trick behind a drink that actually cools you down.',
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=600&q=85'
  },
  {
    category: 'MAKING OF',
    date: 'APR 28',
    readTime: '6 MIN',
    title: 'INSIDE THE BOTANICAL BLEND',
    excerpt: 'Eleven test batches, one stubborn basil leaf, and the day we finally got Wild Field right.',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=85'
  },
  {
    category: 'RITUALS',
    date: 'APR 09',
    readTime: '3 MIN',
    title: 'A BETTER WAY TO TAKE A BREAK',
    excerpt: 'Fifteen minutes, no screen, something cold in hand. A small case for the afternoon pause.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=85'
  }
];
