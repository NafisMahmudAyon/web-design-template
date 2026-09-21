export const HERO_ASSETS = {
  heroServe: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1600&q=85',
  methodBall: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=85',
  methodRacket: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=85',
};

export const METRICS = [
  { val: '31', label: 'TOURNAMENT WEEKS / YEAR' },
  { val: '87%', label: 'PLAYERS RANKED UP IN 12 MONTHS' },
  { val: '11', label: 'COURTS ACROSS TWO SITES' },
  { val: '19', label: 'COLLEGIATE PLACEMENTS' },
];

export const TRAINING_TRACKS = [
  {
    id: 'track-01',
    trackNum: 'TRACK 01',
    title: 'GROUNDWORK',
    desc: 'Contact point, footwork patterns and first competitive sets. Built for players finding their game.',
    level: 'LEVEL: AGES 8-13 • 3 SESSIONS / WEEK',
    image: 'https://images.unsplash.com/photo-1617083934555-ac7d4fed8824?auto=format&fit=crop&w=800&q=85',
    isSelectionOnly: false,
    details: 'Covers stance stability, ball strike consistency, and intro to match psychology.'
  },
  {
    id: 'track-02',
    trackNum: 'TRACK 02',
    title: 'TRAJECTORY',
    desc: 'Pattern play, serve +1, and physical block twice a week. Regional tournament calendar included.',
    level: 'LEVEL: INTERMEDIATE-ADVANCED • 5 SESSIONS / WEEK',
    image: 'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?auto=format&fit=crop&w=800&q=85',
    isSelectionOnly: true,
    tag: 'SELECTION ONLY',
    details: 'Advanced tactical routines, video biomechanics analysis, and supervised strength workouts.'
  },
  {
    id: 'track-03',
    trackNum: 'TRACK 03',
    title: 'APEX SQUAD',
    desc: 'Full-time performance living: two court blocks daily, strength, recovery, film and travel coaching.',
    level: 'LEVEL: NATIONAL RANKED • 8 SESSIONS / WEEK',
    image: 'https://images.unsplash.com/photo-1530915534664-4ac6423ca938?auto=format&fit=crop&w=800&q=85',
    isSelectionOnly: false,
    details: 'Tour-level preparation, individualized conditioning plans, and direct collegiate scouting pathways.'
  }
];

export const COACHES = [
  {
    name: 'TOMÁS FERRAND',
    role: 'Head of Performance',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=85',
    bio: 'Former ATP top 200 touring pro. 12+ years coaching Grand Slam juniors.'
  },
  {
    name: 'INÈS KOVALEVA',
    role: 'Junior Development Lead',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=85',
    bio: 'Ex-NCAA All-American champion specializing in footwork biomechanics.'
  },
  {
    name: 'MARCUS ADEYEMI',
    role: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85',
    bio: 'CSCS certified high-performance trainer for Olympic level tennis athletes.'
  },
  {
    name: 'RHEA SILVESTRI',
    role: 'Match Analyst',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=85',
    bio: 'Pioneer in AI-driven rally analysis and scoreboard telemetry.'
  }
];

export const EVENTS = [
  { date: 'FEB 07-09', title: 'JUNIOR DEVELOPMENT CUP', category: 'U12 - U14', location: 'Larkfield Bay' },
  { date: 'FEB 24-28', title: 'PERFORMANCE CAMP — BLOCK A', category: 'Advanced', location: 'North Site' },
  { date: 'MAR 14-16', title: 'VANTAGE OPEN', category: 'Open - Ranked', location: 'Centre Court' },
  { date: 'MAR 29', title: 'WEEKEND CLINIC — RETURN CRAFT', category: 'All levels', location: 'Indoor Hall 2' },
  { date: 'APR 05', title: 'MEMBER MATCH PLAY NIGHT', category: 'Members', location: 'Courts 1-6' },
];

export const MEMBERSHIP_TIERS = [
  {
    id: 'essential',
    name: 'ESSENTIAL',
    price: '$79',
    period: '/mo',
    isPopular: false,
    features: [
      'Off-peak court access',
      '1 group clinic / month',
      'Ladder & social match play',
      'Locker & recovery room'
    ]
  },
  {
    id: 'performance',
    name: 'PERFORMANCE',
    price: '$189',
    period: '/mo',
    isPopular: true,
    tag: 'Most Popular',
    features: [
      'Unrestricted court access',
      '4 squad sessions / month',
      'Strength floor + mobility class',
      'Quarterly video assessment'
    ]
  },
  {
    id: 'championship',
    name: 'CHAMPIONSHIP',
    price: '$420',
    period: '/mo',
    isPopular: false,
    features: [
      'Priority indoor booking',
      '8 sessions + 2 private hours',
      'Season plan & travel coaching',
      'Physio & recovery studio'
    ]
  }
];

export const FAQS = [
  {
    question: 'WHO CAN JOIN THE INSTITUTE?',
    answer: 'Vantage welcomes players from junior developmental levels (ages 8+) up to elite collegiate and professional touring athletes. An initial trial assessment places players into the ideal squad track.'
  },
  {
    question: 'DO YOU ORGANIZE TENNIS TOURNAMENTS?',
    answer: 'Yes! Vantage hosts regional junior development cups, sanctioned UTR tournaments, and monthly open match-play weekends on our floodlit hard and clay courts.'
  },
  {
    question: 'WHAT LEVELS DO YOU TRAIN?',
    answer: 'We offer three structured tracks: Groundwork (ages 8-13), Trajectory (intermediate-advanced selection only), and Apex Squad (national ranked high performance).'
  },
  {
    question: 'WHAT AGE GROUPS CAN JOIN THE TRAINING PROGRAMS?',
    answer: 'Junior development starts at age 8. Adult membership programs and private coaching are available for players of all ages.'
  },
  {
    question: 'DO YOU OFFER PRIVATE COACHING?',
    answer: 'Yes, private 1-on-1 technical and match analysis sessions can be booked individually or unlocked through our Championship membership tier.'
  }
];
