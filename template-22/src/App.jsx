import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureHubSection from './components/FeatureHubSection';
import GeospatialInsightsSection from './components/GeospatialInsightsSection';
import DestinationsSection from './components/DestinationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import FooterSection from './components/FooterSection';
import PlanTripModal from './components/PlanTripModal';

export default function App() {
  const [isPlanTripOpen, setIsPlanTripOpen] = useState(false);

  const handleOpenPlanTrip = () => setIsPlanTripOpen(true);
  const handleClosePlanTrip = () => setIsPlanTripOpen(false);

  return (
    <div className="min-h-screen bg-[#0b131c] text-white font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation Header */}
      <Navbar onOpenPlanTrip={handleOpenPlanTrip} />

      {/* Main Page Layout */}
      <main>
        {/* Section 1: Hero Typography, Mountain Photo & AI Search Bar */}
        <HeroSection onOpenPlanTrip={handleOpenPlanTrip} />

        {/* Section 2: AI Feature Hub Cards (Polymorphic Hover Zero CLS) */}
        <FeatureHubSection onOpenPlanTrip={handleOpenPlanTrip} />

        {/* Section 3: Explore the World at a Glance (Geospatial Insights & Dot Matrix Map) */}
        <GeospatialInsightsSection onOpenPlanTrip={handleOpenPlanTrip} />

        {/* Section 4: Discover your dreaming journey (Destinations Cards Grid) */}
        <DestinationsSection onOpenPlanTrip={handleOpenPlanTrip} />

        {/* Section 5: Loved by Explorers Worldwide (Testimonials & 12M+ Stat) */}
        <TestimonialsSection onOpenPlanTrip={handleOpenPlanTrip} />

        {/* Section 6: Common Questions from Smart Travelers (FAQ Accordion) */}
        <FaqSection />
      </main>

      {/* Section 7: Final CTA Snowy Mountain Peak & Footer */}
      <FooterSection onOpenPlanTrip={handleOpenPlanTrip} />

      {/* Interactive AI Trip Generator & Itinerary Modal */}
      <PlanTripModal isOpen={isPlanTripOpen} onClose={handleClosePlanTrip} />
    </div>
  );
}
