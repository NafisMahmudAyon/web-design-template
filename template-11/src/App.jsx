import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeaderBar from './components/HeaderBar.jsx';
import HeroCopySection from './components/HeroCopySection.jsx';
import HeroSpotlightCard from './components/HeroSpotlightCard.jsx';
import HotspotSpecModal from './components/HotspotSpecModal.jsx';
import ProductCustomizerSection from './components/ProductCustomizerSection.jsx';
import SpecificationsGrid from './components/SpecificationsGrid.jsx';
import ContactDrawer from './components/ContactDrawer.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const products = [
    {
      id: 'boucle-armchair',
      name: 'Ivory Bouclé Accent Armchair',
      image: '/assets/furniture_hero_boucle.png',
      tag: 'Iconic Design'
    },
    {
      id: 'timber-chair',
      name: 'Minimalist Curved Timber Chair',
      image: '/assets/furniture_hero_boucle.png',
      tag: 'Architectural Timber'
    },
    {
      id: 'walnut-lounge',
      name: 'Mid-Century Walnut Lounge Chair',
      image: '/assets/furniture_hero_boucle.png',
      tag: 'Hand-Crafted Series'
    }
  ];

  // Parallax scroll effects
  const { scrollY } = useScroll();
  const scaleEffect = useTransform(scrollY, [0, 400], [1, 0.985]);

  return (
    <div className="min-h-screen relative bg-[#0c0d0f] py-4 px-2 sm:px-4 md:py-8 flex flex-col items-center justify-center selection:bg-white selection:text-black">
      
      {/* Background Ambient Glow Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.2, 0.12]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-white/10 rounded-full blur-[130px]"
        />
      </div>

      {/* Main Luxury Tablet Frame */}
      <motion.main 
        style={{ scale: scaleEffect }}
        className="relative z-10 w-full max-w-[1340px] luxe-glass-frame rounded-[40px] md:rounded-[52px] p-4 md:p-8 shadow-2xl backdrop-blur-3xl border border-white/20 my-2"
      >
        {/* Header Bar */}
        <HeaderBar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          
          {/* Left Hero Copy & Thumbnail Carousel (lg:col-span-6) */}
          <div className="lg:col-span-6">
            <HeroCopySection 
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              products={products}
            />
          </div>

          {/* Right Featured Hero Scene & Hotspots (lg:col-span-6) */}
          <div className="lg:col-span-6">
            <HeroSpotlightCard 
              activeProduct={products[activeIndex]}
              onSelectHotspot={(hotspot) => setSelectedHotspot(hotspot)}
            />
          </div>

        </div>

        {/* Product Customizer Section */}
        <ProductCustomizerSection />

        {/* Specifications Grid */}
        <SpecificationsGrid />

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>© 2026 AURA Architectural Furniture. All Rights Reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#sustainability" className="hover:text-white transition-colors">Sustainability Guarantee</a>
            <a href="#studio" className="hover:text-white transition-colors">Studio Locations</a>
          </div>
        </footer>

      </motion.main>

      {/* Modals & Drawers */}
      <HotspotSpecModal 
        hotspot={selectedHotspot}
        onClose={() => setSelectedHotspot(null)}
      />

      <ContactDrawer 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
