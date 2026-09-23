import React from 'react';
import { partnerLogos } from '../data/saasData';

export default function PartnerLogos() {
  // Duplicate logos for seamless infinite marquee loop
  const marqueeItems = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative w-full overflow-hidden mask-edges-h">
          <div className="animate-marquee-x flex items-center space-x-14 sm:space-x-20 py-2">
            {marqueeItems.map((logo, index) => (
              <div
                key={index}
                className="flex items-center space-x-2.5 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer select-none shrink-0"
              >
                {/* Modern logo symbols */}
                <div className="w-2.5 h-2.5 rounded-full bg-gray-400 group-hover:bg-[#7C3AED]" />
                <span className={`${logo.fontStyle} text-gray-600`}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
