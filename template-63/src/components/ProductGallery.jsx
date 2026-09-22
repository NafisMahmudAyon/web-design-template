import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, Maximize2, Shield } from 'lucide-react';

export default function ProductGallery({ images = [], productTitle = '' }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const activeImage = images[selectedIndex] || images[0];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-6 items-start">
      {/* Vertical Thumbnail Strip (6 items) */}
      <div className="flex sm:flex-col gap-2.5 sm:gap-3 overflow-x-auto sm:overflow-visible w-full sm:w-20 shrink-0 no-scrollbar py-1">
        {images.map((img, idx) => {
          const isActive = selectedIndex === idx;
          return (
            <button
              key={img.id}
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-14 h-16 sm:w-18 sm:h-22 rounded-sm overflow-hidden bg-[#F4F4F4] transition-all duration-200 shrink-0 cursor-pointer ${
                isActive
                  ? 'ring-2 ring-neutral-950 ring-offset-2'
                  : 'opacity-70 hover:opacity-100 border border-neutral-200'
              }`}
            >
              <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover object-center"
              />
            </button>
          );
        })}
      </div>

      {/* Main Product Showcase Frame */}
      <div className="flex-1 w-full bg-[#EEEEEE] relative rounded-sm overflow-hidden flex items-center justify-center min-h-[480px] sm:min-h-[580px] lg:min-h-[660px] p-6 sm:p-10 border border-neutral-200/60">
        {/* Interactive Zoom Stage */}
        <div
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          className="relative w-full h-full flex items-center justify-center cursor-crosshair overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage.id}
              src={activeImage.url}
              alt={productTitle}
              initial={{ opacity: 0.8, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.8, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="max-h-[520px] sm:max-h-[600px] w-auto object-contain filter drop-shadow-md select-none transition-transform duration-200"
              style={
                isZoomed
                  ? {
                      transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                      transform: 'scale(1.4)',
                    }
                  : { transform: 'scale(1)' }
              }
            />
          </AnimatePresence>

          {/* Hover helper badge */}
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-[11px] font-mono text-neutral-600 border border-neutral-200/80 shadow-xs flex items-center gap-1.5 pointer-events-none">
            <ZoomIn className="w-3.5 h-3.5 text-neutral-500" />
            <span>Hover to Inspect Patina</span>
          </div>
        </div>
      </div>
    </div>
  );
}
