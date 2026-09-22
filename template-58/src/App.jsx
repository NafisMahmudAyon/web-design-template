import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PartnersBar } from './components/PartnersBar';
import { EvolutionsSection } from './components/EvolutionsSection';
import { ExpertSolutionsSection } from './components/ExpertSolutionsSection';
import { SmartManagementSection } from './components/SmartManagementSection';
import { PricingSection } from './components/PricingSection';
import { BudgetAnalyticsSection } from './components/BudgetAnalyticsSection';
import { PreFooterSection } from './components/PreFooterSection';
import { FooterSection } from './components/FooterSection';
import { TrialModal } from './components/TrialModal';
import { FeatureModal } from './components/FeatureModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState('Growth ($110/mo)');
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleOpenTrial = (planName = 'Growth ($110/mo)') => {
    setSelectedPlanName(planName);
    setTrialModalOpen(true);
  };

  const handleSelectPlan = (plan) => {
    handleOpenTrial(`${plan.name} (${plan.price}${plan.period})`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brandOrange selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenTrial={() => handleOpenTrial()} />

      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenTrial={() => handleOpenTrial()}
          onLearnMore={() => {
            const featSection = document.getElementById('features');
            featSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Partners Bar */}
        <PartnersBar />

        {/* Evolutions Section */}
        <EvolutionsSection onSelectFeature={(feat) => setSelectedFeature(feat)} />

        {/* Expert Solutions Section */}
        <ExpertSolutionsSection onOpenTrial={() => handleOpenTrial()} />

        {/* Smart Financial Management Section */}
        <SmartManagementSection />

        {/* Transparent Pricing Section */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* Budget Analytics Bento Section */}
        <BudgetAnalyticsSection />

        {/* Pre-Footer Section */}
        <PreFooterSection />
      </main>

      {/* Global Footer */}
      <FooterSection />

      {/* Modals */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        initialPlan={selectedPlanName}
      />

      <FeatureModal
        isOpen={Boolean(selectedFeature)}
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
        onStartTrial={() => handleOpenTrial()}
      />
    </div>
  );
}
