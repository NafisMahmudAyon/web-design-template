import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Sparkles, Plus } from 'lucide-react';

export default function EverydayHealthCard({ onSelectIngredient }) {
  const ingredients = [
    {
      id: 'avocado',
      name: 'AVOCADO',
      tag: 'Rich in Healthy Fats & Fiber',
      image: '/assets/grov_ingredient_avocado.png',
      calories: '160 kcal',
      vitamins: 'Vitamin E, K, B6, Potassium',
      benefit: 'Supports heart health, improves nutrient absorption, and creates a creamy, satisfying smoothie texture.',
    },
    {
      id: 'cucumber',
      name: 'CUCUMBER',
      tag: '95% Hydration & Electrolytes',
      image: '/assets/grov_ingredient_cucumber.png',
      calories: '16 kcal',
      vitamins: 'Vitamin K, C, Magnesium',
      benefit: 'Flushes out toxins, reduces inflammation, and keeps your skin refreshed and hydrated all day long.',
    },
    {
      id: 'green-apple',
      name: 'GREEN APPLE',
      tag: 'Natural Detox & Antioxidants',
      image: '/assets/grov_ingredient_apple.png',
      calories: '52 kcal',
      vitamins: 'Vitamin C, Pectin Fiber',
      benefit: 'Packed with polyphenol antioxidants and soluble pectin fiber to regulate digestion and balance blood sugar.',
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      className="relative w-full bg-[#132114] rounded-[36px] md:rounded-[44px] p-6 md:p-8 text-[#e4f2df] border border-[#2d462f]/60 shadow-xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Headline & Social Icons Column (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display uppercase tracking-tight text-white leading-snug mb-3">
              A Greener Choice For Everyday Health
            </h2>
            <p className="text-xs sm:text-sm font-medium text-gray-300/90 mb-6">
              Start your green routine today.
            </p>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-3 mt-4">
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="#instagram"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="#twitter"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="#facebook"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Right 3 Side-by-Side Ingredient Cards Grid (lg:col-span-8) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {ingredients.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelectIngredient(item)}
              className="relative h-[220px] rounded-[24px] overflow-hidden shadow-lg border border-white/20 cursor-pointer group bg-black/40"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Top Plus Icon badge */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus className="w-4 h-4" />
              </div>

              {/* Bottom Label Text */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-sm font-extrabold font-display uppercase text-white tracking-wider drop-shadow-sm flex items-center justify-between">
                  <span>{item.name}</span>
                </h3>
                <p className="text-[10px] text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity truncate">
                  Click to inspect benefits
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
