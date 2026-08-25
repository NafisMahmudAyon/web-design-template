import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeaderNav from './components/HeaderNav.jsx';
import HeroSectionCard from './components/HeroSectionCard.jsx';
import EverydayHealthCard from './components/EverydayHealthCard.jsx';
import IngredientModal from './components/IngredientModal.jsx';
import NutritionBreakdownSection from './components/NutritionBreakdownSection.jsx';
import DetoxTrackerSection from './components/DetoxTrackerSection.jsx';
import ReviewsCarouselSection from './components/ReviewsCarouselSection.jsx';
import OrderDrawer from './components/OrderDrawer.jsx';
import { Sprout, Heart } from 'lucide-react';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  // Parallax scroll-driven motion
  const { scrollY } = useScroll();
  const scaleEffect = useTransform(scrollY, [0, 400], [1, 0.985]);
  const opacityEffect = useTransform(scrollY, [0, 400], [1, 0.96]);

  return (
    <div className="min-h-screen relative moss-pattern-bg py-6 px-3 md:px-8 md:py-10 flex flex-col items-center justify-center overflow-x-hidden selection:bg-[#9ad972] selection:text-black">
      
      {/* Background Glowing Organic Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.25, 1],
            rotate: [0, 30, 0],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-emerald-600/20 rounded-full blur-[130px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -40, 0],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 -right-32 w-[650px] h-[650px] bg-lime-500/15 rounded-full blur-[150px]"
        />
      </div>

      {/* Main Glassmorphic Outer Dashboard Frame */}
      <motion.main 
        style={{ scale: scaleEffect, opacity: opacityEffect }}
        className="relative z-10 w-full max-w-[1300px] grov-glass-frame rounded-[44px] md:rounded-[52px] p-4 md:p-8 shadow-2xl backdrop-blur-3xl border border-[#446d46]/40 my-4"
      >
        {/* Header Navigation */}
        <HeaderNav 
          activeNav={activeNav} 
          setActiveNav={setActiveNav}
          onOpenOrder={() => setIsOrderOpen(true)} 
        />

        {/* Section 1: Hero Light Pistachio Card */}
        <div className="mb-6">
          <HeroSectionCard onStartDetox={() => setIsOrderOpen(true)} />
        </div>

        {/* Section 2: Bottom Dark Olive Card & 3 Ingredient Showcase */}
        <div className="mb-6">
          <EverydayHealthCard onSelectIngredient={(item) => setSelectedIngredient(item)} />
        </div>

        {/* Section 3: Macro Nutrition Breakdown */}
        <NutritionBreakdownSection />

        {/* Section 4: 7-Day Detox Journey Timeline */}
        <DetoxTrackerSection />

        {/* Section 5: Customer Reviews Carousel */}
        <ReviewsCarouselSection />

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div className="flex items-center gap-2">
            <Sprout className="w-4 h-4 text-[#9ad972]" />
            <span className="font-bold text-white">Grov Organic Fuel</span>
            <span>© 2026 All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact Support</a>
          </div>
        </footer>

      </motion.main>

      {/* Interactive Modals & Drawers */}
      <IngredientModal 
        ingredient={selectedIngredient} 
        onClose={() => setSelectedIngredient(null)} 
      />

      <OrderDrawer 
        isOpen={isOrderOpen} 
        onClose={() => setIsOrderOpen(false)} 
      />

    </div>
  );
}
