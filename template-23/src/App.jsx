import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MethodSection from './components/MethodSection';
import TrainWithIntentSection from './components/TrainWithIntentSection';
import CoachesSection from './components/CoachesSection';
import MarginsSection from './components/MarginsSection';
import EventsScheduleSection from './components/EventsScheduleSection';
import PricingSection from './components/PricingSection';
import VolumeTechSection from './components/VolumeTechSection';
import PlayerQuoteSection from './components/PlayerQuoteSection';
import FaqSection from './components/FaqSection';
import FooterSection from './components/FooterSection';
import JoinModal from './components/JoinModal';

export default function App() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  const handleOpenJoin = () => setIsJoinOpen(true);
  const handleCloseJoin = () => setIsJoinOpen(false);

  return (
    <div className="min-h-screen bg-[#0b121b] text-white font-sans selection:bg-vantageNeon selection:text-black">
      {/* Navigation Header */}
      <Navbar onOpenJoin={handleOpenJoin} />

      {/* Main Content Layout */}
      <main>
        {/* Section 1: Hero Typography & Leaping Tennis Player Photo Cutout */}
        <HeroSection onOpenJoin={handleOpenJoin} />

        {/* Section 2: Build The Competitor Philosophy & 4 Metrics Banner */}
        <MethodSection onOpenJoin={handleOpenJoin} />

        {/* Section 3: Train With Intent 3-Track Grid (Polymorphic Hover Zero CLS) */}
        <TrainWithIntentSection onOpenJoin={handleOpenJoin} />

        {/* Section 4: The People On Your Court 4-Coach Cards Grid */}
        <CoachesSection onOpenJoin={handleOpenJoin} />

        {/* Section 5: Margins Decide Matches Data Stats & Facility Collage */}
        <MarginsSection />

        {/* Section 6: What's On Court Upcoming Events Schedule Table */}
        <EventsScheduleSection onOpenJoin={handleOpenJoin} />

        {/* Section 7: Your Court Your Standard Membership Tiers */}
        <PricingSection onOpenJoin={handleOpenJoin} />

        {/* Section 8: Built for Volume 4-Camera Angle Tech Grid */}
        <VolumeTechSection />

        {/* Section 9: Player Quote & +118 Ranking Places Badge */}
        <PlayerQuoteSection />

        {/* Section 10: Before You Book Warm Beige FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Section 11: Final Footer & Giant VANTAGE Decorative Typography */}
      <FooterSection onOpenJoin={handleOpenJoin} />

      {/* Player Assessment & Squad Placement Modal */}
      <JoinModal isOpen={isJoinOpen} onClose={handleCloseJoin} />
    </div>
  );
}
