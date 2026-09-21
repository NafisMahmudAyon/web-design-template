import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesBentoGrid from './components/FeaturesBentoGrid';
import EmpoweringSection from './components/EmpoweringSection';
import InnovativeSolutionsSection from './components/InnovativeSolutionsSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import DemoModal from './components/DemoModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signup');
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const openAuthModal = (mode = 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        openAuthModal={openAuthModal} 
      />

      {/* Hero Section */}
      <HeroSection 
        openAuthModal={openAuthModal} 
        openDemoModal={() => setDemoModalOpen(true)} 
      />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Bento Grid Features */}
      <FeaturesBentoGrid />

      {/* Empowering Finances Section */}
      <EmpoweringSection openAuthModal={openAuthModal} />

      {/* Innovative Business Solutions */}
      <InnovativeSolutionsSection openAuthModal={openAuthModal} />

      {/* Flexible Pricing Plans */}
      <PricingSection openAuthModal={openAuthModal} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Accordions */}
      <FaqSection />

      {/* CTA Banner */}
      <CtaBanner 
        openAuthModal={openAuthModal} 
        openDemoModal={() => setDemoModalOpen(true)} 
      />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialMode={authMode} 
      />
      <DemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
      />

    </div>
  );
}
