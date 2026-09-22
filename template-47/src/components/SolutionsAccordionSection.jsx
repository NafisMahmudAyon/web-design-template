import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  Sprout, 
  TrendingUp, 
  Workflow, 
  Droplet, 
  Sparkles,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { SOLUTIONS_ACCORDION } from '../data/agroviaData';

export const SolutionsAccordionSection = () => {
  const [activeId, setActiveId] = useState('optimization');

  const getIcon = (id, isActive) => {
    switch (id) {
      case 'productivity':
        return <TrendingUp className={`w-5 h-5 ${isActive ? 'text-agro-forest' : 'text-agro-muted'}`} />;
      case 'optimization':
        return <Cpu className={`w-5 h-5 ${isActive ? 'text-agro-forest' : 'text-agro-muted'}`} />;
      case 'integration':
        return <Workflow className={`w-5 h-5 ${isActive ? 'text-agro-forest' : 'text-agro-muted'}`} />;
      case 'water-management':
        return <Droplet className={`w-5 h-5 ${isActive ? 'text-agro-forest' : 'text-agro-muted'}`} />;
      default:
        return <Sprout className={`w-5 h-5 ${isActive ? 'text-agro-forest' : 'text-agro-muted'}`} />;
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-agro-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            {/* Top Bracket Tag */}
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-agro-muted uppercase tracking-wider mb-4">
              <span>[</span>
              <span className="text-agro-forest">About Agrovia</span>
              <span>]</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-agro-dark leading-tight">
              Smart Farming Solutions <br />
              <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-agro-forest">That Deliver Real Results</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-agro-muted leading-relaxed">
              Our intelligent agriculture solutions help farmers grow more with less by optimizing resources, improving crop health, and supporting long term sustainability across every season.
            </p>
          </div>
        </div>

        {/* 2-Column Content: Left Accordion + Right Field Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Accordion Items (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-4">
            {SOLUTIONS_ACCORDION.map((item) => {
              const isActive = activeId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(isActive ? '' : item.id)}
                  className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? 'bg-agro-subtle border-agro-border shadow-sm'
                      : 'bg-white border-agro-border/70 hover:border-agro-forest/40'
                  }`}
                >
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-agro-lime text-agro-forest shadow-xs'
                            : 'bg-agro-subtle text-agro-muted'
                        }`}
                      >
                        {getIcon(item.id, isActive)}
                      </div>
                      <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                        isActive ? 'text-agro-forest' : 'text-agro-dark'
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-agro-cream border border-agro-border flex items-center justify-center text-agro-dark shrink-0">
                      {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Expanded Content with Smooth Framer Motion Accordion */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-agro-muted border-t border-agro-border/50 mt-1 leading-relaxed">
                          <p>{item.description}</p>
                          
                          <div className="mt-4 flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-agro-lime/30 text-agro-forest text-xs font-bold">
                              {item.badge}
                            </span>
                            <span className="text-xs text-agro-muted">Automated 24/7 telemetry</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Res Irrigated Field Photography (lg:col-span-6) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] relative shadow-2xl border border-agro-border">
              <img
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1000&auto=format&fit=crop&q=80"
                alt="Farmers inspecting crops in irrigated field"
                className="w-full h-full object-cover"
              />
              
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

              {/* Floating Irrigation Telemetry Widget */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card-dark text-white flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-agro-lime text-agro-forest flex items-center justify-center font-bold">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white/70">Smart Pivot Irrigation</div>
                    <div className="text-sm font-bold text-white">Zone 04 • 94% Moisture Balance</div>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  Active Run
                </span>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
