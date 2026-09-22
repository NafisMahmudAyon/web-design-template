import React from 'react';
import { Shield, Hexagon, Layers, Compass, TrendingUp } from 'lucide-react';
import { partnersData } from '../data/catalxgData';

export const PartnersBar = () => {
  const brandIcons = [
    <Hexagon className="w-5 h-5 fill-current" />,
    <Shield className="w-5 h-5 fill-current" />,
    <Layers className="w-5 h-5" />,
    <Compass className="w-5 h-5" />,
    <TrendingUp className="w-5 h-5" />
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 mb-8 font-sans">
          {partnersData.title}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20">
          {partnersData.logos.map((logo, idx) => (
            <div
              key={logo}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer group"
            >
              <div className="text-slate-500 group-hover:text-brandOrange transition-colors">
                {brandIcons[idx]}
              </div>
              <span className="font-display font-bold text-base sm:text-lg tracking-tight">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
