import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { TrustLogosSection } from './components/TrustLogosSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ProductFeaturesBento } from './components/ProductFeaturesBento';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { WorldMapImpactSection } from './components/WorldMapImpactSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import RequestDemoModal from './components/RequestDemoModal';
import DemoVideoModal from './components/DemoVideoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-900 font-sans selection:bg-[#FF5520] selection:text-white flex flex-col justify-between">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B0F15] text-white px-4 py-3 rounded-2xl shadow-2xl text-xs font-semibold flex items-center gap-2 border border-white/10 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#FF5520] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Navigation */}
      <HeaderNav
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenSignUp={() => setIsDemoModalOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onRequestDemo={() => setIsDemoModalOpen(true)}
          onWatchDemo={() => setIsVideoModalOpen(true)}
        />

        {/* 2. Trusted Businesses Logos */}
        <TrustLogosSection />

        {/* 3. How It Works / Feature Grid */}
        <HowItWorksSection
          onGetStarted={() => setIsDemoModalOpen(true)}
        />

        {/* 4. Product Features Bento Grid */}
        <ProductFeaturesBento />

        {/* 5. Testimonials & Case Study */}
        <TestimonialsSection
          onReadCaseStudy={() => showToast('Opening NexaCorp enterprise case study')}
        />

        {/* 6. Pricing Plans */}
        <PricingSection
          onSelectPlan={(plan) => showToast(`Selected plan: ${plan.name}`)}
        />

        {/* 7. FAQ Section */}
        <FaqSection
          onSeeAllFaqs={() => showToast('Full Help Center knowledgebase loaded')}
        />

        {/* 8. Global Impact & World Map */}
        <WorldMapImpactSection />

        {/* 9. Giant Bottom CTA Banner */}
        <CtaBanner
          onStartProject={() => setIsDemoModalOpen(true)}
        />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Overlays */}
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <DemoVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
