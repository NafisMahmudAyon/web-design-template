import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { countrySalesData } from '../data/mockAnalyticsData';

export default function SalesByCountriesMap() {
  const [selectedProduct, setSelectedProduct] = useState('All Products');
  const [selectedFilter, setSelectedFilter] = useState('Top Countries');
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between h-full">
      
      {/* Header with Title, Subtitle & Dropdowns */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-lg font-bold text-[#141814] tracking-tight">
            Sales by Countries
          </h2>
          <p className="text-xs text-[#7A8376] font-medium mt-0.5">
            Keep track of all orders here
          </p>
        </div>

        {/* Filter Dropdowns */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/[0.06] text-xs font-semibold text-[#141814] bg-[#F4F5F2] hover:bg-gray-100 cursor-pointer transition-colors">
            <span>{selectedProduct}</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/[0.06] text-xs font-semibold text-[#141814] bg-[#F4F5F2] hover:bg-gray-100 cursor-pointer transition-colors">
            <span>{selectedFilter}</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Main Content: Left Stats & Right World Map with Country Pins */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1">
        
        {/* Left Stats (4 cols) */}
        <div className="md:col-span-4 flex flex-col justify-around gap-4 h-full py-2">
          {/* Top Performing Country */}
          <div>
            <p className="text-xs font-semibold text-[#6C736A]">
              Top Performing Country
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#141814] tracking-tight mt-1">
              $120,000
            </p>
            <p className="text-xs font-medium text-[#7A8376] mt-0.5">
              United States
            </p>
          </div>

          {/* Revenue Growth */}
          <div className="pt-3 border-t border-black/[0.04]">
            <p className="text-xs font-semibold text-[#6C736A]">
              Revenue Growth
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#141814] tracking-tight mt-1">
              +34%
            </p>
            <p className="text-xs font-medium text-[#7A8376] mt-0.5">
              United States and Canada
            </p>
          </div>
        </div>

        {/* Right Map Canvas (8 cols) */}
        <div className="md:col-span-8 relative w-full h-56 sm:h-64 flex items-center justify-center overflow-hidden rounded-2xl bg-[#F7F8F5]">
          
          {/* Stylized Vector World Map Silhouettes */}
          <svg 
            viewBox="0 0 800 450" 
            className="w-full h-full object-contain select-none"
          >
            {/* North America */}
            <path
              d="M 120,80 Q 180,70 240,90 T 260,160 T 210,210 T 170,250 T 140,200 T 100,140 Z"
              fill="#D9DFD6"
              className="hover:fill-[#C4B5FD] transition-colors"
            />
            {/* US Highlighted Territory */}
            <path
              d="M 140,130 Q 180,120 230,135 T 240,175 T 190,190 T 140,180 Z"
              fill="#A78BFA"
              opacity="0.85"
            />

            {/* South America */}
            <path
              d="M 230,240 Q 280,250 270,320 T 240,390 T 200,340 T 210,260 Z"
              fill="#D9DFD6"
            />
            {/* Brazil Highlight */}
            <path
              d="M 240,260 Q 275,270 265,320 T 235,350 T 225,290 Z"
              fill="#C4B5FD"
              opacity="0.75"
            />

            {/* Europe */}
            <path
              d="M 390,90 Q 450,80 470,120 T 430,160 T 380,140 Z"
              fill="#D9DFD6"
            />
            {/* Scandinavia / Finland Highlight */}
            <path
              d="M 430,70 Q 460,60 455,100 T 425,105 Z"
              fill="#A78BFA"
              opacity="0.9"
            />

            {/* Africa */}
            <path
              d="M 380,180 Q 460,170 450,260 T 420,340 T 370,260 Z"
              fill="#E1E6DE"
            />

            {/* Asia */}
            <path
              d="M 480,90 Q 620,80 690,150 T 640,240 T 520,200 Z"
              fill="#D9DFD6"
            />
            {/* South Asia / Bangladesh Highlight */}
            <path
              d="M 570,170 Q 600,165 595,195 T 575,200 Z"
              fill="#A78BFA"
              opacity="0.9"
            />

            {/* Australia */}
            <path
              d="M 640,290 Q 710,280 700,350 T 630,340 Z"
              fill="#E1E6DE"
            />
          </svg>

          {/* Floating Dark Country Badges */}
          {countrySalesData.map((c) => (
            <motion.div
              key={c.id}
              whileHover={{ scale: 1.08, y: -2 }}
              onMouseEnter={() => setHoveredCountry(c.id)}
              onMouseLeave={() => setHoveredCountry(null)}
              style={{ left: `${c.coords.x}%`, top: `${c.coords.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141814] text-white shadow-xl border border-white/10 hover:ring-2 hover:ring-[#B4EE58] transition-all">
                <span className="text-sm">{c.flag}</span>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 font-semibold leading-tight">{c.name}</p>
                  <p className="text-xs font-extrabold text-white leading-tight">{c.revenue}</p>
                </div>
              </div>

              {/* Pin point dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#141814] mx-auto mt-0.5 ring-2 ring-white" />
            </motion.div>
          ))}

        </div>

      </div>

    </div>
  );
}
