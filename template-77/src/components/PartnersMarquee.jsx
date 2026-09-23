import React from 'react';
import { sponsorLogos } from '../data/elevateData';

export default function PartnersMarquee() {
  const marqueeItems = [...sponsorLogos, ...sponsorLogos, ...sponsorLogos];

  return (
    <div className="py-10 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative w-full overflow-hidden mask-edges-h">
          <div className="animate-marquee-x flex items-center space-x-12 sm:space-x-20 py-2">
            {marqueeItems.map((sponsor, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 text-gray-500 hover:text-emerald-800 transition-colors select-none cursor-pointer shrink-0"
              >
                <span className="text-xs text-emerald-600">{sponsor.icon}</span>
                <span className={`${sponsor.font} text-gray-700`}>
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
