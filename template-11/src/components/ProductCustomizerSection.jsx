import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Check, Sparkles } from 'lucide-react';

export default function ProductCustomizerSection() {
  const [selectedFabric, setSelectedFabric] = useState('ivory');
  const [selectedWood, setSelectedWood] = useState('dark-oak');

  const fabrics = [
    { id: 'ivory', name: 'Ivory Bouclé', color: '#eef0eb' },
    { id: 'charcoal', name: 'Charcoal Velvet', color: '#2a2c33' },
    { id: 'moss', name: 'Moss Green Linen', color: '#3d523e' },
  ];

  const woods = [
    { id: 'dark-oak', name: 'Dark Oak', color: '#2d231b' },
    { id: 'walnut', name: 'Smoked Walnut', color: '#423225' },
    { id: 'natural-ash', name: 'Natural Ash', color: '#ab967e' },
  ];

  return (
    <section id="product" className="relative w-full my-8">
      <div className="bg-[#15171b] rounded-[36px] md:rounded-[44px] p-6 md:p-8 border border-white/10 text-white shadow-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">Tailored Elegance</span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight text-white">
              Bespoke Customizer
            </h2>
          </div>
          <p className="text-xs md:text-sm text-gray-400 max-w-sm mt-2 md:mt-0 font-medium">
            Customize fabric upholstery & timber finishes to align with your interior space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fabric Selector */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">1. Upholstery Fabric</h4>
            <div className="grid grid-cols-3 gap-3">
              {fabrics.map((f) => {
                const isSelected = selectedFabric === f.id;
                return (
                  <motion.button
                    key={f.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedFabric(f.id)}
                    className={`p-3.5 rounded-2xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/15 border-white text-white font-bold shadow-md'
                        : 'bg-[#1b1d23] border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span 
                      className="w-6 h-6 rounded-full ring-2 ring-white/30 flex items-center justify-center"
                      style={{ backgroundColor: f.color }}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 text-black stroke-[3]" />}
                    </span>
                    <span className="text-xs font-semibold">{f.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Wood Finish Selector */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">2. Timber Finish</h4>
            <div className="grid grid-cols-3 gap-3">
              {woods.map((w) => {
                const isSelected = selectedWood === w.id;
                return (
                  <motion.button
                    key={w.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedWood(w.id)}
                    className={`p-3.5 rounded-2xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/15 border-white text-white font-bold shadow-md'
                        : 'bg-[#1b1d23] border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span 
                      className="w-6 h-6 rounded-full ring-2 ring-white/30 flex items-center justify-center"
                      style={{ backgroundColor: w.color }}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                    </span>
                    <span className="text-xs font-semibold">{w.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
