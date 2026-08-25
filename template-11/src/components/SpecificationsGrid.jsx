import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Award, ShieldCheck, RefreshCw } from 'lucide-react';

export default function SpecificationsGrid() {
  const specs = [
    { title: 'Dimensions', val: 'W 82cm × D 78cm × H 76cm', desc: 'Ergonomic seat height 44cm', icon: Ruler },
    { title: 'Weight Capacity', val: 'Tested to 180 kg (400 lbs)', desc: 'Heavy-duty steel-reinforced joints', icon: Award },
    { title: 'Structural Warranty', val: '10-Year Frame Guarantee', desc: 'Lifetime support & repair service', icon: ShieldCheck },
    { title: 'Sustainability', val: 'FSC-Certified Timber', desc: '100% Recyclable packaging', icon: RefreshCw },
  ];

  return (
    <section id="about" className="relative w-full my-8">
      <div className="bg-[#111215] rounded-[36px] md:rounded-[44px] p-6 md:p-8 border border-white/10 text-white shadow-xl">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">Uncompromising Standards</span>
          <h2 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight text-white">
            Technical Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-[#17191e] p-5 rounded-[24px] border border-white/10 flex flex-col justify-between"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{s.title}</h4>
                  <p className="text-sm font-bold text-white font-display mt-1">{s.val}</p>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
