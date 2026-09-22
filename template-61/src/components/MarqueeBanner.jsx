import React, { useState } from 'react';
import { Tag, Check } from 'lucide-react';
import { marqueeItems } from '../data/treadlyData';

export default function MarqueeBanner({ onCopyCoupon }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText('PACEPRO50');
    setCopied(true);
    onCopyCoupon?.('PACEPRO50');
    setTimeout(() => setCopied(false), 2500);
  };

  // Duplicate items for continuous seamless loop
  const displayItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="py-6 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          onClick={handleCopy}
          className="relative overflow-hidden cursor-pointer bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 py-4 sm:py-5 shadow-sm hover:shadow-md transition-shadow group"
        >
          {/* Dual Gradient Masks for Faded Edges */}
          <div className="mask-gradient-x overflow-hidden">
            <div className="animate-marquee flex items-center gap-8 text-neutral-800 font-extrabold text-sm sm:text-base lg:text-lg tracking-tight font-syne select-none">
              {displayItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 shrink-0">
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="hover:text-[#FF6B00] transition-colors uppercase">
                    {item.text}
                  </span>
                  <span className="text-neutral-300 mx-2">•</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Pill on Hover */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1.5 bg-neutral-900 text-white text-xs font-bold px-3.5 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copied: PACEPRO50</span>
              </>
            ) : (
              <>
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                <span>Click to Copy Code</span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
