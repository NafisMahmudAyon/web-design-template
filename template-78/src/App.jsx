import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SponsorMarquee } from './components/SponsorMarquee';
import { ExperienceSection } from './components/ExperienceSection';
import { PropertiesSection } from './components/PropertiesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialSection } from './components/TestimonialSection';
import { NewsletterFooter } from './components/NewsletterFooter';
import { PropertyModal } from './components/PropertyModal';
import { SignUpModal } from './components/SignUpModal';

export function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleExploreClick = (target) => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#F6E9C9] selection:text-neutral-900">
      {/* Navigation Bar */}
      <Navbar onOpenSignUp={() => setIsSignUpOpen(true)} />

      {/* Hero Section */}
      <HeroSection onExploreClick={handleExploreClick} />

      {/* Infinite Edge-Masked Sponsor Marquee */}
      <SponsorMarquee />

      {/* Experience Section with Dark Charcoal Block & Golden Champagne Vertical Panel */}
      <ExperienceSection onLearnMore={handleExploreClick} />

      {/* Properties Section (Zero CLS Spacing Stability) */}
      <PropertiesSection onSelectProperty={(p) => setSelectedProperty(p)} />

      {/* Why Choose Us with 3 Alternating Bento Rows */}
      <WhyChooseUs onExploreClick={handleExploreClick} />

      {/* Testimonials 2x2 Grid with 5 Stars */}
      <TestimonialSection />

      {/* Newsletter Subscription & Minimalist Footer */}
      <NewsletterFooter />

      {/* Interactive Property Detail Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      {/* Interactive VIP Sign Up Modal */}
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
    </div>
  );
}

export default App;
