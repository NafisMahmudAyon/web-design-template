import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogosMarquee from './components/LogosMarquee';
import MetricsBar from './components/MetricsBar';
import CoreCapabilities from './components/CoreCapabilities';
import DeliverablesGrid from './components/DeliverablesGrid';
import ComplexitySection from './components/ComplexitySection';
import ArchitectureCards from './components/ArchitectureCards';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Enterprise SaaS');

  const handleOpenModal = (service = 'Enterprise SaaS') => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070908] text-white selection:bg-[#25E575] selection:text-black font-sans antialiased overflow-x-hidden relative">
      {/* 1. Global Navigation */}
      <Navbar onOpenContact={() => handleOpenModal('General Inquiry')} />

      <main>
        {/* 2. Hero Section with Bento Grid */}
        <HeroSection
          onStartProject={() => handleOpenModal('Custom Enterprise Software')}
          onLearnMore={() => {
            const el = document.getElementById('capabilities');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Partner Logos Infinite Marquee */}
        <LogosMarquee />

        {/* 4. Metrics Bar */}
        <MetricsBar />

        {/* 5. Engineered for Impact: Core Capabilities */}
        <CoreCapabilities
          onSelectService={(service) => handleOpenModal(service)}
          onSecureFuture={() => handleOpenModal('Security & Scalability')}
        />

        {/* 6. What We Deliver: Bento Grid */}
        <DeliverablesGrid
          onSelectDeliverable={(deliverable) => handleOpenModal(deliverable)}
        />

        {/* 7. Transforming Complexity Into Competitive Power */}
        <ComplexitySection
          onExploreSolutions={() => handleOpenModal('Advanced Software Engineering')}
          onViewInfrastructure={() => handleOpenModal('Fortified Cloud Infrastructure')}
        />

        {/* 8. 4-Card Architecture Grid */}
        <ArchitectureCards
          onSelectCard={(title) => handleOpenModal(title)}
        />

        {/* 9. Dedicated Support Available in Every Language */}
        <SupportSection
          onGetStarted={() => handleOpenModal('Dedicated 24/7 Support')}
        />
      </main>

      {/* 10. Global Footer */}
      <Footer />

      {/* 11. Interactive Project Scope Modal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
