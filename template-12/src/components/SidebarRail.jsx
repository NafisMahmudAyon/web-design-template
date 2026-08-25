import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Home, 
  Heart, 
  Image as ImageIcon, 
  Grid, 
  Settings, 
  RotateCcw,
  ArrowDownLeft
} from 'lucide-react';

export default function SidebarRail({ activeNav, setActiveNav }) {
  const tools = [
    { id: 'home', icon: Home, label: 'Studio Home' },
    { id: 'favorites', icon: Heart, label: 'Favorites' },
    { id: 'gallery', icon: ImageIcon, label: 'Generations' },
    { id: 'grid', icon: Grid, label: 'Grid Canvas' },
    { id: 'settings', icon: Settings, label: 'Engine Settings' },
  ];

  return (
    <aside className="flex flex-col items-center justify-between py-2 px-1 shrink-0 z-20">
      {/* Top 4-Point Star Logo Circle */}
      <motion.button 
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 rounded-full bg-white text-gray-950 flex items-center justify-center shadow-lg cursor-pointer mb-3"
      >
        <Sparkles className="w-6 h-6 stroke-[2.5]" />
      </motion.button>

      {/* Vertical Navigation Tool Rail (Light White Glass Container) */}
      <div className="relative flex flex-col items-center gap-3 bg-white/90 backdrop-blur-md p-2 rounded-full border border-white/60 shadow-lg my-2">
        {/* Floating Expand Button (Matching Arrow Circle in Screenshot) */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-gray-950 border border-black/10 flex items-center justify-center shadow-md z-30 cursor-pointer"
        >
          <ArrowDownLeft className="w-4 h-4 stroke-[2.5]" />
        </motion.button>

        {tools.map((t) => {
          const Icon = t.icon;
          const isActive = activeNav === t.id;
          return (
            <motion.button
              key={t.id}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveNav(t.id)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isActive
                  ? 'bg-gray-950 text-white shadow-md'
                  : 'text-gray-700 hover:bg-black/10'
              }`}
            >
              <Icon className="w-4 h-4" />
            </motion.button>
          );
        })}

        {/* Reset / History Tool */}
        <motion.button
          whileHover={{ scale: 1.15, rotate: -180 }}
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 rounded-full flex items-center justify-center text-gray-700 hover:bg-black/10 transition-colors mt-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
        </motion.button>

        {/* Bottom Stylized 3D Avatar */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-400 to-amber-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-900 overflow-hidden shadow-inner mt-2 cursor-pointer"
        >
          <span className="text-[10px] font-extrabold">3D</span>
        </motion.div>
      </div>

    </aside>
  );
}
