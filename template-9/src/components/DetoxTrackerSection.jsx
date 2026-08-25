import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Activity, Droplets, Flame, Smile } from 'lucide-react';

export default function DetoxTrackerSection() {
  const [selectedDay, setSelectedDay] = useState(1);

  const days = [
    { day: 1, title: 'Cellular Flush', icon: Droplets, focus: 'Digestive Reset', detail: 'Chlorophyll and cucumber flush excess water weight and digestive bloating.' },
    { day: 3, title: 'Energy Surge', icon: Activity, focus: 'Natural Vitality', detail: 'Potassium and healthy fats from avocado stabilize blood glucose and elevate mental clarity.' },
    { day: 5, title: 'Skin Radiance', icon: Sparkles, focus: 'Antioxidant Glow', detail: 'Vitamin C and apple pectin boost collagen synthesis and reduce inflammation.' },
    { day: 7, title: 'Total Transformation', icon: Flame, focus: 'Full Rejuvenation', detail: 'Enhanced metabolic efficiency, deeper sleep quality, and vibrant natural energy.' },
  ];

  return (
    <section id="ingredients" className="relative w-full my-6">
      <div className="bg-[#132114] rounded-[36px] md:rounded-[44px] p-6 md:p-8 text-[#e4f2df] border border-[#2d462f]/60 shadow-xl">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9ad972] block mb-1">7-Day Journey</span>
          <h2 className="text-2xl md:text-4xl font-extrabold font-display uppercase tracking-tight text-white">
            What Happens In 7 Days
          </h2>
          <p className="text-xs sm:text-sm font-medium text-gray-300 mt-2">
            Experience the progressive body transformation when replacing one meal daily with Grov.
          </p>
        </div>

        {/* Days selector tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {days.map((item) => {
            const isActive = selectedDay === item.day;
            const Icon = item.icon;
            return (
              <motion.button
                key={item.day}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedDay(item.day)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#9ad972] text-gray-950 border-[#9ad972] shadow-lg font-bold'
                    : 'bg-[#1b2d1c] text-white border-white/10 hover:bg-[#233a24]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs uppercase font-extrabold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-black text-white' : 'bg-white/10 text-gray-300'
                  }`}>
                    Day {item.day}
                  </span>
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold leading-snug">{item.title}</h4>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Day Info Box */}
        {days.map((item) => {
          if (item.day !== selectedDay) return null;
          return (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1b2d1c] p-6 rounded-[24px] border border-[#2d462f] flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9ad972]">Focus: {item.focus}</span>
                <h3 className="text-xl font-bold text-white font-display">Day {item.day} — {item.title}</h3>
                <p className="text-xs md:text-sm text-gray-300 max-w-xl leading-relaxed">{item.detail}</p>
              </div>

              <div className="flex items-center gap-2 bg-[#9ad972]/10 border border-[#9ad972]/30 px-4 py-2 rounded-full text-xs font-bold text-[#9ad972] whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4" /> 100% Clinical Satisfaction
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
