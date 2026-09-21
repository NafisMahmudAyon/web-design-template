export const HERO_ASSETS = {
  heroBg: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=85',
  baliTravel: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=85',
  ctaMountain: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85',
};

export const AI_FEATURES = [
  {
    id: 'itinerary-generator',
    title: 'AI Itinerary Generator',
    description: 'Create a full travel itinerary instantly complete with hotels activities and personalized daily plans.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85',
    isLive: false,
    badge: 'Smart Generator',
    details: 'Generates day-by-day maps, transportation routes, and restaurant reservations based on real-time opening hours.'
  },
  {
    id: 'budget-tracker',
    title: 'Smart Budget Tracker',
    description: 'Let AI craft your ideal journey complete with hotel options activity ideas and a perfectly balanced daily plan.',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=85',
    isLive: true,
    badge: '● LIVE',
    details: 'Live flight price telemetry, currency conversion prediction, and automated expense splitting.'
  },
  {
    id: 'chat-assistant',
    title: 'Real-Time Chat Assistant',
    description: 'Ask AI about routes, local food, or safety tips anytime.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    isLive: false,
    badge: '24/7 AI Concierge',
    details: 'Instant voice and text translation, local customs advisor, and offline emergency guidance.'
  },
  {
    id: 'collaborative-planning',
    title: 'Collaborative Planning',
    description: 'Access and edit itineraries together without hassle.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=85',
    isLive: false,
    badge: 'Group Sync',
    details: 'Multi-user real-time voting on activities, group expense ledger, and shared calendar sync.'
  }
];

export const DESTINATIONS = [
  {
    id: 'dest-1',
    country: 'France',
    title: 'Architecture & Gastro',
    duration: '5 days 4 Night',
    capacity: '6/8 Person',
    category: 'Nature & Spiritual Getaway',
    price: '$1,400',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85',
    filterTag: 'City',
    highlights: ['Eiffel Tower Sunrise Tour', 'Michelin Star Wine Tasting', 'Louvre Private Museum Access']
  },
  {
    id: 'dest-2',
    country: 'Japan',
    title: 'Misty Mountain',
    duration: '5 days 4 Night',
    capacity: '6/8 Person',
    category: 'Nature & Spiritual Getaway',
    price: '$1,700',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85',
    filterTag: 'Nature',
    highlights: ['Kyoto Zen Bamboo Forest', 'Mount Fuji Onsen Retreat', 'Traditional Tea Ceremony']
  },
  {
    id: 'dest-3',
    country: 'USA',
    title: 'Urban Adventure',
    duration: '5 days 4 Night',
    capacity: '6/8 Person',
    category: 'Nature & Spiritual Getaway',
    price: '$1,300',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1000&q=85',
    filterTag: 'City',
    highlights: ['Manhattan Rooftop Helicopter Tour', 'Broadway Musical VIP', 'Central Park Bicycle Trail']
  },
  {
    id: 'dest-4',
    country: 'Italy',
    title: 'Amalfi Coastal Paradise',
    duration: '7 days 6 Night',
    capacity: '4/6 Person',
    category: 'Luxury Coastal Escape',
    price: '$2,100',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=85',
    filterTag: 'Beach',
    highlights: ['Private Yacht Cruise Positano', 'Limoncello Tasting Villa', 'Cliffside Sunset Dining']
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    author: 'Sophia & Liam',
    role: 'Honeymoon Travelers',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85',
    quote: '“AI Travel Planner made my honeymoon trip flawless! It even adjusted our schedule when it started raining.”',
    tripPhoto: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=85'
  },
  {
    id: 't-2',
    author: 'Dianne Russell',
    role: 'Family Traveler',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=85',
    quote: '“Planning a family trip can be stressful, but the AI made it effortless. It created a balanced plan with kid friendly activities.”',
    tripPhoto: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=400&q=85'
  },
  {
    id: 't-3',
    author: 'Annette Black',
    role: 'Backpacker & Solo Explorer',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=85',
    quote: '“As a solo traveler, I was truly amazed by how the AI uncovered hidden coffee shops, charming local spots, and unique experiences I would have never found on my own.”',
    tripPhoto: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=400&q=85'
  }
];

export const FAQS = [
  {
    question: 'What is an AI Travel Planner?',
    answer: 'Travelynx AI Travel Planner uses machine learning to craft custom day-by-day itineraries based on your interests, travel dates, budget, and group preferences in seconds.'
  },
  {
    question: 'Can I edit the itinerary after it’s created?',
    answer: 'Yes! You can easily adjust destinations, activities, and timings. The AI will automatically reoptimize your trip plan to fit your new preferences.'
  },
  {
    question: 'How does it work?',
    answer: 'Simply type a destination or prompt like "7-day family vacation in Japan under $2,000". Travelynx scans live flight feeds, hotel databases, weather reports, and local attraction reviews to generate a complete plan.'
  },
  {
    question: 'Does it include hotel or flight bookings?',
    answer: 'Yes! Travelynx aggregates verified flight routes and top-rated hotel partners (Booking.com, Agoda, Expedia) so you can book directly within the app.'
  },
  {
    question: 'Can I use it for group trips?',
    answer: 'Absolutely. You can share your itinerary link with friends or family to vote on activities, split expenses, and edit plans collaboratively in real-time.'
  }
];
