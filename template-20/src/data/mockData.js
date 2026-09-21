export const HERO_ASSETS = {
  heroBg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85',
  forestAerial: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85',
  canyonGolden: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85',
};

export const RISK_CATEGORIES = [
  {
    id: 'climate-risk',
    title: 'Climate Risk',
    description: 'Monitor floods, heat, drought, storms, and changing climate risks across assets.',
    image: 'https://images.unsplash.com/photo-1511497584788-876761c119ef?auto=format&fit=crop&w=1000&q=85',
    monitoredCount: '1,420 Assets Monitored',
    highRiskPct: '24%',
    badge: 'High Sensitivity',
    details: 'Real-time telemetry and IPCC AR6 model downscaling for heatwaves, severe droughts, and intense precipitation anomalies.'
  },
  {
    id: 'natural-hazards',
    title: 'Natural Hazards',
    description: 'Monitor exposure to wildfires, earthquakes, landslides, cyclones, and other hazards.',
    image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=1000&q=85',
    monitoredCount: '890 Facilities Active',
    highRiskPct: '18%',
    badge: 'Real-Time Radar',
    details: 'Geospatial hazard mapping integrated with seismic sensors, NASA FIRMS fire detection, and hurricane track updates.'
  },
  {
    id: 'water-pollution',
    title: 'Water & Pollution',
    description: 'Monitor water stress availability air quality pollution and environmental risks.',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85',
    monitoredCount: '3,100 Basins Tracked',
    highRiskPct: '31%',
    badge: 'Water Stress Index',
    details: 'Aqueduct 4.0 water scarcity modeling, groundwater depletion tracking, and industrial effluent monitoring.'
  },
  {
    id: 'regulatory-risk',
    title: 'Regulatory Risk',
    description: 'Track environmental regulations and compliance requirements across jurisdictions.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
    monitoredCount: '14 Global Frameworks',
    highRiskPct: '12%',
    badge: 'CSRD & TCFD Ready',
    details: 'Automated compliance auditing for EU CSRD, SEC Climate Disclosure, and double materiality reporting.'
  }
];

export const DATA_DECISIONS_STEPS = [
  {
    id: 'step-1',
    title: 'From Risk to Action',
    subtitle: 'Map assets, operations, and supply chains across your entire portfolio with precision geospatial data.',
    metrics: { riskIncrease: '12.6%', period: 'Over 90 Days', mainDriver: 'Flood & heat exposure drive 82% of vulnerability' },
    trendData: [
      { month: 'Jan', val: 42 },
      { month: 'Feb', val: 48 },
      { month: 'Mar', val: 45 },
      { month: 'Apr', val: 56 },
      { month: 'May', val: 68 },
      { month: 'Jun', val: 62 },
      { month: 'Jul', val: 78 },
      { month: 'Aug', val: 84 },
    ]
  },
  {
    id: 'step-2',
    title: 'Data Into Decisions',
    subtitle: 'Measure environmental exposure with intelligent risk scores, historical baselines, and forward projections.',
    metrics: { riskIncrease: '8.4%', period: 'Vs Previous Baseline', mainDriver: 'Geospatial resolution enhanced to 10m grid' },
    trendData: [
      { month: 'Jan', val: 30 },
      { month: 'Feb', val: 35 },
      { month: 'Mar', val: 40 },
      { month: 'Apr', val: 48 },
      { month: 'May', val: 55 },
      { month: 'Jun', val: 50 },
      { month: 'Jul', val: 65 },
      { month: 'Aug', val: 72 },
    ]
  },
  {
    id: 'step-3',
    title: 'Clarity From Complexity',
    subtitle: 'Prioritize high-risk locations, generate reports, and make faster, better-informed decisions at scale.',
    metrics: { riskIncrease: '95%', period: 'Decision Confidence', mainDriver: 'Automated risk scoring reduces manual audit time by 75%' },
    trendData: [
      { month: 'Jan', val: 60 },
      { month: 'Feb', val: 58 },
      { month: 'Mar', val: 65 },
      { month: 'Apr', val: 72 },
      { month: 'May', val: 80 },
      { month: 'Jun', val: 85 },
      { month: 'Jul', val: 90 },
      { month: 'Aug', val: 95 },
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    quote: '“The real value is turning complex environmental signals into decisions our business can act on. It has completely changed how we approach risk planning.”',
    author: 'Aiko Matsuda',
    role: 'CEO at JuiceLab',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=85',
    company: 'JuiceLab Global',
    stats: 'Reduced climate vulnerability by 34% across 42 sites'
  },
  {
    id: 't-2',
    quote: '“EcoIntel gave us unprecedented clarity into supply chain bottlenecks caused by extreme weather events. We cut physical asset downtime by half in our first year.”',
    author: 'Marcus Vance',
    role: 'Head of ESG & Risk at TerraCap',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=85',
    company: 'TerraCap Infrastructure',
    stats: 'Monitors $14B in global real assets'
  },
  {
    id: 't-3',
    quote: '“Navigating CSRD compliance and double materiality used to take months of consulting. With EcoIntel, we generate audit-ready reporting in minutes.”',
    author: 'Elena Rostova',
    role: 'VP Operations at GlobalLogistics',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=85',
    company: 'GlobalLogistics Group',
    stats: '100% automated climate reporting'
  }
];

export const BUSINESS_IMPACT_CARDS = [
  {
    id: 'protect-assets',
    title: 'Protect Your Assets',
    description: 'Identify asset risks early to prevent worsening conditions and operational disruptions across properties and infrastructure.',
    statValue: '2.4M',
    statLabel: 'Assets protected globally',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85',
    tag: 'Property & Infrastructure',
    highlightText: 'Continuous 24/7 monitoring across 140+ countries'
  },
  {
    id: 'supply-chain',
    title: 'Secure Your Supply Chain',
    description: 'Discover vulnerable suppliers, facilities, and logistics networks early to strengthen supply chain resilience.',
    statValue: '95%',
    statLabel: 'Of Fortune 500 supply chains covered',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85',
    tag: 'Supplier Logistics',
    highlightText: 'Tier-1 to Tier-4 supply network risk tracing'
  },
  {
    id: 'smarter-investments',
    title: 'Make Smarter Investments',
    description: 'Integrate environmental risk into investment decisions using quantified exposure and defensible data.',
    statValue: '$8.2T',
    statLabel: 'In assets assessed annually',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=85',
    tag: 'Capital & Portfolio',
    floatingBadge: '$300.7B',
    highlightText: 'Scenario analysis tuned to NGFS climate projections'
  }
];

export const DATA_PARTNERS = [
  { name: 'NOAA Climate Data', logo: '🌐 NOAA' },
  { name: 'Copernicus Sentinel', logo: '🛰️ Copernicus' },
  { name: 'NASA Earth Data', logo: '🚀 NASA Earth' },
  { name: 'USGS Geology', logo: '🗻 USGS' },
  { name: 'ECMWF Weather', logo: '⚡ ECMWF' },
  { name: 'World Bank Climate', logo: '🏦 World Bank' },
  { name: 'IPCC Assessment', logo: '📊 IPCC Data' },
  { name: 'Global Forest Watch', logo: '🌲 Forest Watch' }
];
