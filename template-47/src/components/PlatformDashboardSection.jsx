import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Sprout, 
  SlidersHorizontal, 
  Activity, 
  Sun, 
  CloudSun, 
  Droplets, 
  Wind, 
  ArrowUpRight, 
  MapPin, 
  TrendingUp 
} from 'lucide-react';
import { HOW_IT_WORKS_TABS, STATS } from '../data/agroviaData';

export const PlatformDashboardSection = () => {
  const [activeTabId, setActiveTabId] = useState('smart-planning');

  const getTabIcon = (iconName, isActive) => {
    switch (iconName) {
      case 'layout':
        return <LayoutDashboard className="w-5 h-5" />;
      case 'sprout':
        return <Sprout className="w-5 h-5" />;
      case 'sliders':
        return <SlidersHorizontal className="w-5 h-5" />;
      case 'activity':
        return <Activity className="w-5 h-5" />;
      default:
        return <Sprout className="w-5 h-5" />;
    }
  };

  return (
    <section id="solutions" className="py-24 sm:py-32 bg-agro-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-agro-muted uppercase tracking-wider mb-4">
              <span>//</span>
              <span className="text-agro-forest">How it Works</span>
              <span>//</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-agro-dark leading-tight">
              Smart Farming Made <br />
              <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-agro-forest">Simple and Efficient</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-agro-muted leading-relaxed">
              A smart farming platform that connects soil, crops, and operations to help farmers grow more efficiently and safely.
            </p>
          </div>
        </div>

        {/* 4 Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {HOW_IT_WORKS_TABS.map((tab) => {
            const isActive = activeTabId === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border flex items-center gap-3.5 ${
                  isActive
                    ? 'bg-agro-lime/30 border-agro-lime text-agro-dark shadow-sm'
                    : 'bg-white border-agro-border hover:border-agro-forest/30 text-agro-muted'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-agro-lime text-agro-forest shadow-xs' : 'bg-agro-subtle text-agro-muted'
                  }`}
                >
                  {getTabIcon(tab.icon, isActive)}
                </div>
                <div>
                  <div className={`text-sm sm:text-base font-bold ${isActive ? 'text-agro-forest' : 'text-agro-dark'}`}>
                    {tab.title}
                  </div>
                  <div className="text-xs text-agro-muted">{tab.subtitle}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Panoramic Dashboard Visual */}
        <div className="rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[16/8] relative shadow-2xl border border-agro-border mb-12 group">
          <img
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1600&auto=format&fit=crop&q=85"
            alt="Farmer in field overlooking crops"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          {/* Bottom Left Location Tag */}
          <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
            <MapPin className="w-3.5 h-3.5 text-agro-lime" />
            <span>Dhaka, Bangladesh</span>
          </div>

          {/* Right Floating Weather & AI Prediction Glass Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 w-72 sm:w-80 rounded-3xl bg-white/95 backdrop-blur-xl border border-white/80 p-5 shadow-2xl text-agro-dark"
          >
            {/* Weather Header */}
            <div className="flex items-center justify-between pb-3 border-b border-agro-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
                  <CloudSun className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-agro-dark tracking-tight">24°C</div>
                  <div className="text-[11px] text-agro-muted">Today's Avg Temperature</div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 py-3 border-b border-agro-border text-center">
              <div>
                <div className="text-xs font-bold text-agro-dark">68%</div>
                <div className="text-[10px] text-agro-muted">Humidity</div>
              </div>
              <div>
                <div className="text-xs font-bold text-agro-dark">20%</div>
                <div className="text-[10px] text-agro-muted">Precipitation</div>
              </div>
              <div>
                <div className="text-xs font-bold text-agro-dark">12 km/h</div>
                <div className="text-[10px] text-agro-muted">Wind Speed</div>
              </div>
            </div>

            {/* Area Prediction AI Model */}
            <div className="pt-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold text-agro-dark">Area Prediction AI Model</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Good for planting
                </span>
              </div>

              {/* Multi-tier Prediction Gauge Bar */}
              <div className="flex gap-1 h-2 my-2 rounded-full overflow-hidden">
                <div className="w-1/4 bg-emerald-500 rounded-full" />
                <div className="w-1/3 bg-agro-lime rounded-full" />
                <div className="w-1/5 bg-amber-400 rounded-full" />
                <div className="w-1/6 bg-slate-200 rounded-full" />
              </div>

              {/* Mini CTA Link */}
              <a
                href="#solutions"
                className="mt-2 text-[11px] font-bold text-agro-forest hover:text-agro-green flex items-center justify-between pt-2 border-t border-agro-border group/link"
              >
                <span>Farma AI helps optimize crop fields</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 4 Telemetry Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-agro-border shadow-card-soft text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-agro-forest tracking-tight">
                {stat.metric}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-agro-dark">
                {stat.label}
              </div>
              <div className="mt-1 text-[11px] text-agro-muted">
                {stat.change}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
