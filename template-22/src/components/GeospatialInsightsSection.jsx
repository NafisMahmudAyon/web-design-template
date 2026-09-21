import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cloud, Navigation, Bell, MapPin, Search } from 'lucide-react';

export default function GeospatialInsightsSection({ onOpenPlanTrip }) {
  const [activeTab, setActiveTab] = useState('Daily Data');
  const [activeCountry, setActiveCountry] = useState('Greece');
  const [searchQuery, setSearchQuery] = useState('');

  const countryData = {
    Greece: { temp: '26°C', status: 'Sunny & Perfect for Island Hopping', pins: [{ x: '58%', y: '38%' }, { x: '60%', y: '40%' }] },
    Italy: { temp: '22°C', status: 'Mild Breeze & Coastal Yachting', pins: [{ x: '52%', y: '35%' }, { x: '54%', y: '37%' }] },
    Germany: { temp: '18°C', status: 'Clear Alpine Trekking Trails', pins: [{ x: '51%', y: '28%' }] },
    England: { temp: '16°C font-mono', status: 'Light Mist & Urban Museums', pins: [{ x: '47%', y: '25%' }] },
  };

  return (
    <section id="insights" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Explore the World at a Glance
        </h2>
        <p className="text-base sm:text-lg text-gray-400 font-sans">
          Get a real-time view of your journey with AI-powered recommendations designed to make travel planning effortless.
        </p>
      </div>

      {/* 2 Panel Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
        {/* Left Panel: Insights Widget */}
        <div className="lg:col-span-5 bg-[#0f1824] border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
          <div>
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { name: 'Daily Data', icon: Cloud },
                { name: 'Trip Tracker', icon: Navigation },
                { name: 'Travel Alerts', icon: Bell },
                { name: 'Route Radar', icon: MapPin },
              ].map((tab) => {
                const IconComp = tab.icon;
                const isActive = activeTab === tab.name;
                return (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      isActive ? 'bg-cyan-500 text-black' : 'bg-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Central Cloud Icon Graphic */}
            <div className="my-8 text-center">
              <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-cyan-glow">
                <Cloud className="w-10 h-10" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Stay prepared for your next journey with accurate daily travel insights.
              </h3>
              <p className="text-xs text-gray-400 font-sans">
                {countryData[activeCountry]?.status || 'Real-time telemetry updated every 15 minutes.'}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={onOpenPlanTrip}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-gray-200 transition-colors"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="w-2 h-2 rounded-full bg-gray-600" />
              <span className="w-2 h-2 rounded-full bg-gray-600" />
            </div>
          </div>
        </div>

        {/* Right Panel: Dot Matrix World Map Canvas */}
        <div className="lg:col-span-7 bg-[#0f1824] border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          {/* Top Country Selector */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              {['Greece', 'Italy', 'Germany', 'England'].map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCountry(c)}
                  className={`px-3.5 py-1.5 rounded-full transition-all ${
                    activeCountry === c ? 'bg-white text-black font-bold' : 'bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/15 rounded-full pl-8 pr-3 py-1 text-xs text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Dot Matrix Map Visual representation */}
          <div className="relative h-64 bg-[#080d14] rounded-2xl overflow-hidden p-4 flex flex-col justify-between border border-white/10">
            {/* Dot grid pattern overlay */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:12px_12px]" />

            {/* Region Hotspot Pins */}
            {countryData[activeCountry]?.pins.map((pin, i) => (
              <div
                key={i}
                className="absolute z-20 p-2 rounded-full bg-cyan-500/30 border border-cyan-400 animate-pulse"
                style={{ top: pin.y, left: pin.x }}
              >
                <span className="block w-2.5 h-2.5 rounded-full bg-cyan-400" />
              </div>
            ))}

            <div className="relative z-10 text-xs font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg inline-block w-max">
              <span>📍 {activeCountry} Active Telemetry: </span>
              <span className="text-cyan-400 ml-1">{countryData[activeCountry]?.temp}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
