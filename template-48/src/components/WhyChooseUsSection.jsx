import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sprout, 
  Monitor, 
  SlidersHorizontal, 
  TrendingUp, 
  ArrowUpRight 
} from 'lucide-react';
import { FARMING_TOOLS } from '../data/terraFarmData';

export const WhyChooseUsSection = () => {
  const [activeToolId, setActiveToolId] = useState('tool-1');

  const getToolIcon = (iconName, isActive) => {
    switch (iconName) {
      case 'sprout':
        return <Sprout className={`w-5 h-5 ${isActive ? 'text-terra-forest' : 'text-terra-muted'}`} />;
      case 'monitor':
        return <Monitor className={`w-5 h-5 ${isActive ? 'text-terra-forest' : 'text-terra-muted'}`} />;
      case 'sliders':
        return <SlidersHorizontal className={`w-5 h-5 ${isActive ? 'text-terra-forest' : 'text-terra-muted'}`} />;
      case 'trending':
        return <TrendingUp className={`w-5 h-5 ${isActive ? 'text-terra-forest' : 'text-terra-muted'}`} />;
      default:
        return <Sprout className={`w-5 h-5 ${isActive ? 'text-terra-forest' : 'text-terra-muted'}`} />;
    }
  };

  return (
    <section id="solutions" className="py-24 sm:py-32 bg-terra-cream border-t border-terra-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terra-subtle border border-terra-border text-xs font-semibold text-terra-forest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-terra-green" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-terra-dark leading-tight">
            Powerful Farming Tools <br />
            <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-terra-forest">
              Built for Smarter Agriculture
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-terra-muted leading-relaxed">
            Smart tools to monitor fields, manage resources, and increase yields with less waste.
          </p>
        </div>

        {/* 2-Column Grid: Left Feature Cards + Right Photography Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Feature Cards (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-4">
            {FARMING_TOOLS.map((tool) => {
              const isActive = activeToolId === tool.id;

              return (
                <div
                  key={tool.id}
                  onClick={() => setActiveToolId(tool.id)}
                  className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white border-terra-forest shadow-md'
                      : 'bg-terra-subtle/60 border-terra-border/80 hover:border-terra-forest/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? 'bg-terra-lime text-terra-forest shadow-xs' : 'bg-white text-terra-muted'
                      }`}
                    >
                      {getToolIcon(tool.icon, isActive)}
                    </div>

                    <div>
                      <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                        isActive ? 'text-terra-forest' : 'text-terra-dark'
                      }`}>
                        {tool.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-terra-muted leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Visual & AI Gauge Widget (lg:col-span-6) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] relative shadow-2xl border border-terra-border">
              <img
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1000&auto=format&fit=crop&q=80"
                alt="Field technicians with solar equipment"
                className="w-full h-full object-cover"
              />

              {/* Floating Area Prediction AI Model Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/80 text-terra-dark">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-terra-dark">Area Prediction AI Model</span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Good for planting
                  </span>
                </div>

                {/* Multi-tier Prediction Gauge Bar */}
                <div className="flex gap-1 h-2 my-2.5 rounded-full overflow-hidden">
                  <div className="w-1/4 bg-emerald-500 rounded-full" />
                  <div className="w-1/3 bg-terra-lime rounded-full" />
                  <div className="w-1/5 bg-amber-400 rounded-full" />
                  <div className="w-1/6 bg-slate-200 rounded-full" />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-terra-border text-[11px] font-bold text-terra-forest">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Farma AI helps optimize crop fields</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
