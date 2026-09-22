import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RealtorFeaturesSection from './components/RealtorFeaturesSection';
import AboutSection from './components/AboutSection';
import AgentsAndStatsSection from './components/AgentsAndStatsSection';
import TopProjectsSection from './components/TopProjectsSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaBanner from './components/CtaBanner';
import FooterSection from './components/FooterSection';

import VirtualTourModal from './components/VirtualTourModal';
import ContactModal from './components/ContactModal';
import PropertyDetailsModal from './components/PropertyDetailsModal';

import { CheckCircle, Search, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, icon = <CheckCircle className="w-4 h-4 text-[#C88C48]" />) => {
    setToast({ message, icon });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSearch = ({ type, location, budget }) => {
    showToast(`Filtering: ${type} in ${location} (${budget})`, <Search className="w-4 h-4 text-[#C88C48]" />);
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#15181C] text-neutral-100 font-sans antialiased selection:bg-[#C88C48] selection:text-white">
      {/* Toast Alert */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-6 left-1/2 z-50 flex items-center gap-2.5 bg-neutral-900 text-white px-5 py-3 rounded-full shadow-2xl text-xs sm:text-sm font-semibold border border-neutral-700 pointer-events-none"
          >
            {toast.icon}
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <Navbar
        onContactClick={() => setIsContactOpen(true)}
        onSignUpClick={() => showToast('Membership portal opened for luxury real estate clients')}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenTour={() => setIsTourOpen(true)}
          onOpenVideo={() => setIsTourOpen(true)}
          onSearch={handleSearch}
        />

        {/* Realtor Features Section (with Card Polymorphism) */}
        <RealtorFeaturesSection />

        {/* About Us Section */}
        <AboutSection />

        {/* The Best Local Real Estate Agents & 2x2 Stats */}
        <AgentsAndStatsSection />

        {/* Discover Our Top Projects */}
        <TopProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Meet Our Team Member */}
        <TeamSection />

        {/* What Our Client Says About Us */}
        <TestimonialsSection />

        {/* Interested To Build Your Home Banner */}
        <CtaBanner
          onLearnMore={() => setIsContactOpen(true)}
        />
      </main>

      {/* Global Directory Footer */}
      <FooterSection />

      {/* 360° Virtual Tour Modal */}
      <VirtualTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
      />

      {/* Let's Talk Consultation Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Project Details Modal */}
      <PropertyDetailsModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
