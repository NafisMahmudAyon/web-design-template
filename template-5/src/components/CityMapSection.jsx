import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Home, Compass, Building2, Eye, ArrowUpRight } from 'lucide-react';
import { mapHotspots } from '../data/mockData';

export default function CityMapSection({ onSelectHotspot }) {
  const [mapTab, setMapTab] = useState('Nearest');
  const [activePin, setActivePin] = useState(mapHotspots[0]);

  return (
    <section id="map-section" className="w-full py-16 sm:py-24 px-4 sm:px-8 max-w-[1400px] mx-auto">
      {/* 1. TOP PART: Interactive City Map */}
      <div className="flex flex-col items-center text-center mb-20 sm:mb-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight tracking-tight max-w-2xl mb-6"
        >
          Find the most comfortable residence near you now
        </motion.h2>

        {/* Filter Pills */}
        <div className="flex items-center gap-3 mb-10">
          <button
            onClick={() => setMapTab('Nearest')}
            className={`px-6 py-2 rounded-full text-xs font-semibold transition-all ${
              mapTab === 'Nearest'
                ? 'bg-black text-white shadow-md'
                : 'bg-white text-zinc-700 border border-zinc-300'
            }`}
          >
            Nearest Residence
          </button>
          <button
            onClick={() => setMapTab('View')}
            className={`px-6 py-2 rounded-full text-xs font-semibold transition-all ${
              mapTab === 'View'
                ? 'bg-black text-white shadow-md'
                : 'bg-white text-zinc-700 border border-zinc-300'
            }`}
          >
            View Property
          </button>
        </div>

        {/* Stylized Vector Map Canvas */}
        <div className="relative w-full max-w-4xl h-[340px] sm:h-[440px] rounded-[32px] sm:rounded-[44px] overflow-hidden bg-[#EFF4F8] border border-zinc-200/80 shadow-xl">
          {/* Stylized Vector City Street Grid */}
          <svg className="w-full h-full object-cover opacity-70" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {/* Soft land areas */}
            <path d="M0,0 L1000,0 L1000,600 L0,600 Z" fill="#EBF1F6" />
            <path d="M120,40 Q250,120 400,90 T700,160 T980,100 L1000,0 L0,0 Z" fill="#E2ECF3" opacity="0.6" />
            <path d="M0,450 Q300,420 550,520 T1000,480 L1000,600 L0,600 Z" fill="#E2ECF3" opacity="0.6" />

            {/* Street Grid lines */}
            <g stroke="#CBD8E2" strokeWidth="2.5" fill="none">
              {/* Secondary roads */}
              <line x1="50" y1="0" x2="180" y2="600" />
              <line x1="280" y1="0" x2="350" y2="600" />
              <line x1="650" y1="0" x2="550" y2="600" />
              <line x1="850" y1="0" x2="920" y2="600" />

              <line x1="0" y1="120" x2="1000" y2="160" />
              <line x1="0" y1="360" x2="1000" y2="320" />
              <line x1="0" y1="480" x2="1000" y2="520" />

              {/* Diagonal blocks */}
              <path d="M50,150 L200,280 L350,220 L250,100 Z" strokeWidth="1.5" />
              <path d="M600,180 L800,220 L750,380 L580,320 Z" strokeWidth="1.5" />
              <path d="M220,380 L380,420 L320,540 L160,490 Z" strokeWidth="1.5" />
              <path d="M680,380 L880,400 L840,550 L640,510 Z" strokeWidth="1.5" />
            </g>

            {/* Main Road Highway (Grey line) */}
            <path
              d="M 50,320 Q 250,300 350,370 T 700,320 T 950,420"
              fill="none"
              stroke="#6B7280"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Active GPS Navigation Route (Cyan / Blue Glowing Line) */}
            <motion.path
              d="M 450,100 L 480,240 L 590,320 L 750,410 L 920,440"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Center GPS Pin ("You'r here") */}
          <div className="absolute top-[38%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            {/* User Avatar Circle with Ripple */}
            <div className="relative">
              <div className="w-12 h-12 rounded-full p-0.5 bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="You"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full animate-ping" />
            </div>

            {/* "You'r here" Tag */}
            <div className="mt-1.5 px-3 py-0.5 rounded-full bg-[#B9F59D] text-zinc-900 text-[11px] font-semibold tracking-tight shadow">
              You'r here
            </div>
          </div>

          {/* Clickable Hotspot Pins on Map */}
          {mapHotspots.map((spot) => (
            <div
              key={spot.id}
              style={{ top: spot.top, left: spot.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setActivePin(spot);
                  if (onSelectHotspot) onSelectHotspot(spot);
                }}
                className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform ${
                  activePin?.id === spot.id
                    ? 'bg-zinc-900 text-white ring-4 ring-blue-300'
                    : 'bg-white text-zinc-800 border border-zinc-300'
                }`}
              >
                <MapPin className="w-4 h-4" />
              </motion.button>

              {/* Tooltip badge */}
              {activePin?.id === spot.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 rounded-xl bg-zinc-900/95 text-white p-2 text-left shadow-2xl backdrop-blur-md border border-white/20 z-30"
                >
                  <img src={spot.image} alt={spot.title} className="w-full h-16 object-cover rounded-lg mb-1.5" />
                  <p className="text-[11px] font-bold truncate">{spot.title}</p>
                  <div className="flex items-center justify-between text-[10px] text-zinc-300 mt-0.5">
                    <span>{spot.price}</span>
                    <span>{spot.distance}</span>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. BOTTOM PART: "Find your dream home in the city's heart" with floating collage */}
      <div className="relative py-12 sm:py-20 flex items-center justify-center">
        {/* Background Dotted City Matrix */}
        <div className="absolute inset-0 opacity-25 dotted-city-bg pointer-events-none" />

        {/* Center Title */}
        <div className="relative z-10 text-center max-w-xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-[1.08] tracking-tight"
          >
            Find your dream <br />
            home in the city's <br />
            heart
          </motion.h2>
        </div>

        {/* Floating Coastal Villa Image (Top Left) */}
        <motion.div
          initial={{ opacity: 0, y: 40, x: -30 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute -top-6 sm:top-0 left-4 sm:left-12 lg:left-24 z-20 hidden md:block"
        >
          <div className="w-32 sm:w-40 lg:w-44 aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=85"
              alt="Coastal Modern Villa"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Floating Forest Glass House Image (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, y: 40, x: 30 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute -bottom-6 sm:bottom-0 right-4 sm:right-12 lg:right-24 z-20 hidden md:block"
        >
          <div className="w-36 sm:w-44 lg:w-48 aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=85"
              alt="Autumn Forest Glass Pavilion"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Floating Circular Icon 1: House Badge (Dark Teal) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-4 left-1/4 z-20 hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-[#183B40] text-white shadow-xl"
        >
          <Home className="w-6 h-6" />
        </motion.div>

        {/* Floating Circular Icon 2: Compass Badge (White) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-6 right-1/4 z-20 hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-white text-zinc-800 border border-zinc-300 shadow-xl"
        >
          <Compass className="w-6 h-6" />
        </motion.div>

        {/* Floating Circular Icon 3: Building Badge (Light Gray) */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-4 right-[42%] z-20 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-zinc-200 text-zinc-700 shadow-lg"
        >
          <Building2 className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}
