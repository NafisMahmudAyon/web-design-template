import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CloudSun, Sprout } from 'lucide-react';
import { BENTO_METRICS } from '../data/terraFarmData';

export const AboutBentoSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-terra-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Block */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terra-muted uppercase tracking-wider mb-4">
            <span>[</span>
            <span className="text-terra-forest">About Us</span>
            <span>]</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-terra-dark leading-snug tracking-tight">
            <span className="font-bold">Smart Farming Starts With Better Decisions.</span>{' '}
            When farmers miss critical insights, crops suffer and profits fall. Our platform keeps you productive, informed, and connected from soil preparation to harvest.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (lg:col-span-7) containing 3 cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Top Row: 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Electric Lime AI Efficiency Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl bg-terra-lime p-8 flex flex-col justify-between shadow-sm min-h-[220px]"
              >
                <div className="w-10 h-10 rounded-2xl bg-terra-forest/10 flex items-center justify-center text-terra-forest">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-terra-dark tracking-tight">
                    {BENTO_METRICS.aiEfficiency}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-bold text-terra-forest">
                    {BENTO_METRICS.efficiencyLabel}
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Global Farm Growth Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl overflow-hidden relative p-8 flex flex-col justify-end text-white shadow-sm min-h-[220px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80"
                  alt="Wheat stalks"
                  className="w-full h-full object-cover absolute inset-0 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-0" />
                
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {BENTO_METRICS.growthForecast}
                  </div>
                  <div className="mt-1 text-xs text-white/90 font-medium">
                    {BENTO_METRICS.growthLabel}
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Bottom Card: Next-Gen Farming Tractor Visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl overflow-hidden relative p-8 flex flex-col justify-end text-white min-h-[240px] shadow-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1000&auto=format&fit=crop&q=80"
                alt="Green tractor in field"
                className="w-full h-full object-cover absolute inset-0 z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {BENTO_METRICS.nextGenTag}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 mt-1">
                  {BENTO_METRICS.nextGenSubtitle}
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column (lg:col-span-5): Tall Greenhouse Visual with Weather Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5 rounded-3xl overflow-hidden relative min-h-[480px] shadow-2xl border border-terra-border flex flex-col justify-between p-6 sm:p-8"
          >
            <img
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format&fit=crop&q=80"
              alt="Farmer in greenhouse"
              className="w-full h-full object-cover absolute inset-0 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-0" />

            {/* Spacer */}
            <div className="relative z-10" />

            {/* Weather & Crop Monitoring Card */}
            <div className="relative z-10 space-y-4">
              
              {/* Weather Widget */}
              <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md text-terra-dark shadow-xl border border-white/80 max-w-[260px] ml-auto">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                    <CloudSun className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold tracking-tight text-terra-dark">{BENTO_METRICS.weather.temp}</div>
                    <div className="text-[10px] text-terra-muted">{BENTO_METRICS.weather.condition}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1 pt-2 border-t border-terra-border text-center text-[10px]">
                  <div>
                    <div className="font-bold">{BENTO_METRICS.weather.humidity}</div>
                    <div className="text-terra-muted">Humidity</div>
                  </div>
                  <div>
                    <div className="font-bold">{BENTO_METRICS.weather.precipitation}</div>
                    <div className="text-terra-muted">Precip.</div>
                  </div>
                  <div>
                    <div className="font-bold">{BENTO_METRICS.weather.wind}</div>
                    <div className="text-terra-muted">Wind</div>
                  </div>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                <Sprout className="w-3.5 h-3.5 text-terra-lime" />
                <span>Smart Crop Monitoring</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
