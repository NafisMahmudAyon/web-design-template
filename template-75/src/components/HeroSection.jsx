import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { heroSpecs } from '../data/casalaData';

export default function HeroSection({ onShopNow }) {
  const [specIndex, setSpecIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('DESIGN');
  const [activeColor, setActiveColor] = useState('#0B6577');

  const colorVariants = [
    { name: 'Teal Blue', hex: '#0B6577', image: '/assets/hero-capsule-chair.png' },
    { name: 'Sand Grey', hex: '#C4B5A5', image: '/assets/prod-chair.png' },
    { name: 'Onyx Charcoal', hex: '#2E3338', image: '/assets/hero-capsule-chair.png' },
  ];

  const handlePrevSpec = () => {
    setSpecIndex((prev) => (prev === 0 ? heroSpecs.length - 1 : prev - 1));
  };

  const handleNextSpec = () => {
    setSpecIndex((prev) => (prev === heroSpecs.length - 1 ? 0 : prev + 1));
  };

  const currentSpec = heroSpecs[specIndex];

  return (
    <section className="relative min-h-[95vh] pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden flex flex-col justify-between">
      {/* Background Architectural Wireframe Lines (Figma motif) */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none opacity-25">
        <svg viewBox="0 0 400 400" className="w-full h-full text-slate-300">
          <circle cx="350" cy="50" r="120" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="350" cy="50" r="180" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="350" cy="50" r="240" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="350" cy="50" r="300" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <circle cx="350" cy="50" r="360" fill="none" stroke="currentColor" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* Main Grid: Social Links + Product Visual + Product Typography + Vertical Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          
          {/* Left Vertical Social Links */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center space-y-6 text-xs font-semibold text-gray-500 tracking-wider">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-casala-teal hover:-translate-y-0.5 transition-all py-1"
            >
              fb
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-casala-teal hover:-translate-y-0.5 transition-all py-1"
            >
              pi
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-casala-teal hover:-translate-y-0.5 transition-all py-1"
            >
              in
            </a>
          </div>

          {/* Center Product Image */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] w-full"
            >
              {/* Soft Ambient Shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/10 blur-xl rounded-full" />
              
              <img
                src="/assets/hero-capsule-chair.png"
                alt="Casala Capsule Armchair"
                className="w-full h-auto object-contain select-none drop-shadow-md transition-transform duration-500 hover:scale-[1.02]"
              />

              {/* Color Swatch Selector Overlay */}
              <div className="absolute bottom-2 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-100 shadow-sm flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Tone</span>
                {colorVariants.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setActiveColor(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                    className={`w-4 h-4 rounded-full transition-transform ${
                      activeColor === c.hex ? 'scale-125 ring-2 ring-offset-1 ring-gray-400' : 'hover:scale-110'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Product Typography & Actions */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm font-semibold tracking-wider text-[#353942] uppercase mb-3 inline-block"
            >
              High-back armchair
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-6xl font-serif text-[#171A1F] leading-[1.08] tracking-tight mb-6"
            >
              Casala <br />
              <span className="italic font-normal text-casala-teal">Capsule</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-[#5A606A] leading-relaxed mb-8 max-w-md"
            >
              In large office spaces CAPSULE is a stylish object that creates privacy without being completely cut off from the surroundings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={onShopNow}
                className="bg-[#0B6577] hover:bg-[#084F5D] text-white px-8 py-3.5 rounded-sm font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Far Right Indicators (DESIGN / SIZE / COLOR) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center space-y-6">
            <div className="h-16 w-[1px] bg-gray-300 mb-2" />
            {['DESIGN', 'SIZE', 'COLOR'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[11px] font-bold tracking-widest uppercase py-1 transition-colors ${
                  activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Specification Bar (Exact Figma Reproduction) */}
      <div className="w-full mt-10 sm:mt-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[96px] bg-transparent">
            
            {/* 3 Spec Columns (Span 10 on desktop) */}
            <div className="md:col-span-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 py-5 pr-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`spec-${specIndex}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="contents"
                >
                  {/* Column 1: Cushions */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                      {currentSpec.cushions.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-[280px]">
                      {currentSpec.cushions.desc}
                    </p>
                  </div>

                  {/* Column 2: Frame */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                      {currentSpec.frame.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-[280px]">
                      {currentSpec.frame.desc}
                    </p>
                  </div>

                  {/* Column 3: Upholstery */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                      {currentSpec.upholstery.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-[280px]">
                      {currentSpec.upholstery.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Arrows Container (Dark Grey Charcoal Bar) */}
            <div className="md:col-span-2 bg-[#545250] hover:bg-[#484644] text-white flex items-center justify-center px-4 py-4 sm:py-0 transition-colors">
              <div className="flex items-center space-x-6">
                <button
                  onClick={handlePrevSpec}
                  aria-label="Previous specification"
                  className="p-2 hover:text-gray-300 hover:scale-110 active:scale-95 transition-all"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2]" />
                </button>
                <span className="text-xs text-gray-300 font-mono">
                  {specIndex + 1}/{heroSpecs.length}
                </span>
                <button
                  onClick={handleNextSpec}
                  aria-label="Next specification"
                  className="p-2 hover:text-gray-300 hover:scale-110 active:scale-95 transition-all"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
