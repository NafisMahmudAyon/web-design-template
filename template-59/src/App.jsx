import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InvestmentSection } from './components/InvestmentSection';
import { PrimaryHomeSection } from './components/PrimaryHomeSection';
import { PropertiesSection } from './components/PropertiesSection';
import { FeedbackSection } from './components/FeedbackSection';
import { NewsBlogsSection } from './components/NewsBlogsSection';
import { CTABanner } from './components/CTABanner';
import { PreFooterSection } from './components/PreFooterSection';
import { FooterSection } from './components/FooterSection';
import { PropertyModal } from './components/PropertyModal';
import { TourModal } from './components/TourModal';
import { VideoModal } from './components/VideoModal';
import { BlogModal } from './components/BlogModal';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [tourTitle, setTourTitle] = useState('');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeBlog, setActiveBlog] = useState(null);

  const handleOpenTour = (propOrTitle = '') => {
    const title = typeof propOrTitle === 'object' ? propOrTitle?.title : propOrTitle;
    setTourTitle(title || 'Crystal Hogts Residence');
    setTourModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-brandLime selection:text-slate-950">
      {/* Navigation */}
      <Navbar onOpenTour={() => handleOpenTour()} />

      <main>
        {/* Hero Section */}
        <HeroSection
          onSearch={() => {
            const propSec = document.getElementById('properties');
            propSec?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Investment Strategy & 4-Column Stats */}
        <InvestmentSection />

        {/* Primary Home Bento Section */}
        <PrimaryHomeSection
          onOpenProperty={(prop) => setSelectedProperty(prop)}
          onOpenVideo={() => setVideoModalOpen(true)}
        />

        {/* Explore Apartments and Homes for Sale Grid */}
        <PropertiesSection
          onSelectProperty={(prop) => setSelectedProperty(prop)}
        />

        {/* Our Client Feedback */}
        <FeedbackSection />

        {/* Our Latest News & Blogs */}
        <NewsBlogsSection onOpenBlog={(blog) => setActiveBlog(blog)} />

        {/* CTA Banner */}
        <CTABanner onGetStarted={() => handleOpenTour()} />

        {/* Pre-Footer Section */}
        <PreFooterSection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Modals */}
      <PropertyModal
        isOpen={Boolean(selectedProperty)}
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onScheduleTour={(prop) => handleOpenTour(prop)}
      />

      <TourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
        initialPropertyTitle={tourTitle}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <BlogModal
        isOpen={Boolean(activeBlog)}
        blog={activeBlog}
        onClose={() => setActiveBlog(null)}
        onScheduleShowing={() => handleOpenTour()}
      />
    </div>
  );
}
