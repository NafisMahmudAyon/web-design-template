import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronRight, Layers, Sparkles, Sliders } from 'lucide-react';

const COLLECTIONS = [
  {
    id: '01',
    num: '(01)',
    title: 'Ocean Drift Series',
    subtitle: 'Ultra-light EPS blanks built for high-speed summer swell gliding.',
    boards: '2 Models • 5\'8" - 6\'4"',
    specs: {
      rocker: 'Low entry / medium exit',
      rails: 'Tapered 60/40 foil',
      volume: '32.0L - 38.5L',
      finSystem: 'Twin Keel / Quad Option',
    },
    images: ['/assets/accordion-board-1.jpg', '/assets/accordion-board-2.jpg'],
    color: 'from-teal-500/10 to-teal-500/0',
  },
  {
    id: '02',
    num: '(02)',
    title: 'Coastal Cruiser Collection',
    subtitle: 'Classic single-fin longboards and progressive mid-lengths with rolled contours.',
    boards: '4 Models • 7\'2" - 9\'6"',
    specs: {
      rocker: 'Continuous smooth curve',
      rails: 'Rolled 50/50 soft rail',
      volume: '48.0L - 74.0L',
      finSystem: 'Center 10" Box + Fiberglass Blade',
    },
    images: ['/assets/accordion-board-2.jpg', '/assets/accordion-board-1.jpg'],
    color: 'from-teal-500/10 to-teal-500/0',
  },
  {
    id: '03',
    num: '(03)',
    title: 'Sunset Twin Series',
    subtitle: 'Retro fish geometry infused with modern bottom concaves for steep drops.',
    boards: '3 Models • 5\'4" - 6\'2"',
    specs: {
      rocker: 'Flatter belly with kicked nose',
      rails: 'Hard tucked edge in tail',
      volume: '34.0L - 42.0L',
      finSystem: 'Modern Twin Pin',
    },
    images: ['/assets/accordion-board-1.jpg', '/assets/accordion-board-2.jpg'],
    color: 'from-teal-500/10 to-teal-500/0',
  },
  {
    id: '04',
    num: '(04)',
    title: 'Wave Hunter Pro Series',
    subtitle: 'Competition-grade thrusters with carbon reinforcement along high-torsion stringers.',
    boards: '3 Models • 5\'11" - 6\'6"',
    specs: {
      rocker: 'High progressive entry rocker',
      rails: 'Low performance edge',
      volume: '28.5L - 34.0L',
      finSystem: 'Futures / FCS II Thruster',
    },
    images: ['/assets/accordion-board-2.jpg', '/assets/accordion-board-1.jpg'],
    color: 'from-teal-500/10 to-teal-500/0',
  },
];

export default function FeatureCollectionAccordion({ onSelectCollection }) {
  const [activeId, setActiveId] = useState('02'); // Default to 02 as in design mockup

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="collections" className="py-24 sm:py-32 bg-[#F5F6F3] border-b border-[#0F1E1B]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#009E96] uppercase tracking-widest mb-2">
              <span>(SERIES ARCHIVE // 2026)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0F1E1B] tracking-tight">
              Featured Collections
            </h2>
          </div>

          <p className="text-[#5B6B67] text-sm sm:text-base max-w-md">
            Engineered around four distinct wave profiles. Click any collection to inspect shaper
            specifications, rail foils, and available blanks.
          </p>
        </div>

        {/* Accordion List with Zero-CLS Clean Height Transitions */}
        <div className="flex flex-col gap-4">
          {COLLECTIONS.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'bg-white border-[#009E96] shadow-xl'
                    : 'bg-[#FAFAF7] hover:bg-white border-black/5 shadow-sm'
                }`}
              >
                {/* Clickable Header Row */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left transition-colors"
                  aria-expanded={isActive}
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span
                      className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                        isActive ? 'text-[#009E96]' : 'text-gray-400'
                      }`}
                    >
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0F1E1B]">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-[#5B6B67] hidden sm:inline-block">
                        {item.boards}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className={`hidden md:inline-block text-xs font-mono px-3 py-1 rounded-full border transition-all ${
                        isActive
                          ? 'bg-[#009E96] text-white border-transparent'
                          : 'bg-transparent text-gray-500 border-gray-200'
                      }`}
                    >
                      {isActive ? 'Active Series' : 'Inspect Shape'}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-[#009E96] text-white rotate-180 shadow-teal-subtle'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Smooth Animated Content Body */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                          {/* Left Description & Specs Grid */}
                          <div className="lg:col-span-7 flex flex-col justify-between">
                            <div>
                              <p className="text-[#5B6B67] text-sm sm:text-base leading-relaxed mb-6">
                                {item.subtitle}
                              </p>

                              {/* Specs Table / Grid */}
                              <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-[#F5F6F3] border border-black/5 font-mono text-xs">
                                <div>
                                  <span className="text-gray-400 block text-[10px] uppercase">
                                    Volume Range
                                  </span>
                                  <span className="font-bold text-[#0F1E1B]">{item.specs.volume}</span>
                                </div>
                                <div>
                                  <span className="text-gray-400 block text-[10px] uppercase">
                                    Rocker Profile
                                  </span>
                                  <span className="font-bold text-[#0F1E1B]">{item.specs.rocker}</span>
                                </div>
                                <div>
                                  <span className="text-gray-400 block text-[10px] uppercase">
                                    Rail Geometry
                                  </span>
                                  <span className="font-bold text-[#0F1E1B]">{item.specs.rails}</span>
                                </div>
                                <div>
                                  <span className="text-gray-400 block text-[10px] uppercase">
                                    Fin Setup
                                  </span>
                                  <span className="font-bold text-[#0F1E1B]">{item.specs.finSystem}</span>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center gap-4">
                              <a
                                href="#boards"
                                className="px-6 py-3 rounded-full bg-[#009E96] hover:bg-[#028B84] text-white font-semibold text-xs tracking-wider transition-all duration-200 shadow-teal-subtle flex items-center gap-2"
                              >
                                <span>CONFIGURE THIS SERIES</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                              <span className="text-xs text-[#5B6B67] font-mono">
                                In-stock ready to glass • 7 day dispatch
                              </span>
                            </div>
                          </div>

                          {/* Right Dual Visual Board Photography */}
                          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                            <div className="h-44 sm:h-52 rounded-2xl overflow-hidden bg-gray-100 shadow-md group/img relative">
                              <img
                                src={item.images[0]}
                                alt={`${item.title} preview angle 1`}
                                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                              />
                              <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-white font-mono text-[9px] px-2 py-0.5 rounded">
                                TOP DECK
                              </span>
                            </div>
                            <div className="h-44 sm:h-52 rounded-2xl overflow-hidden bg-gray-100 shadow-md group/img relative">
                              <img
                                src={item.images[1]}
                                alt={`${item.title} preview angle 2`}
                                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                              />
                              <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md text-white font-mono text-[9px] px-2 py-0.5 rounded">
                                HULL CONCAVE
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
