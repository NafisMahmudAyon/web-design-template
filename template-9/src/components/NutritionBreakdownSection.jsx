import React from 'react';
import { motion } from 'framer-motion';
import { Zap, HeartPulse, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';

export default function NutritionBreakdownSection() {
  const stats = [
    { label: 'Calories', value: '120', unit: 'kcal', icon: Zap, sub: 'Low Calorie Fuel' },
    { label: 'Dietary Fiber', value: '4.2', unit: 'g', icon: HeartPulse, sub: 'Sustained Satiety' },
    { label: 'Added Sugars', value: '0', unit: 'g', icon: ShieldAlert, sub: '100% Natural Fruit Sugar' },
    { label: 'Organic Pure', value: '100', unit: '%', icon: Sparkles, sub: 'Zero Preservatives' },
  ];

  return (
    <section id="nutrition" className="relative w-full my-6">
      <div className="bg-[#dbead7] rounded-[36px] md:rounded-[44px] p-6 md:p-8 text-[#142015] border border-white/80 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#bdcca7]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#355237] block mb-1">Nutritional Integrity</span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight text-[#142015]">
              Clean Fuel Macro Breakdown
            </h2>
          </div>
          <p className="text-xs md:text-sm font-medium text-[#2d4a2f] max-w-sm mt-2 md:mt-0">
            Formulated by holistic nutritionists to maximize cellular detoxification without sugar spikes.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white/90 rounded-[24px] p-5 shadow-sm border border-white flex flex-col justify-between"
              >
                <div className="w-9 h-9 rounded-2xl bg-[#1b2d1c] text-white flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl lg:text-4xl font-extrabold font-display text-gray-900">{s.value}</span>
                    <span className="text-xs font-bold text-emerald-800">{s.unit}</span>
                  </div>
                  <h4 className="text-xs font-bold text-gray-800 mt-1">{s.label}</h4>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">{s.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
