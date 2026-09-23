import React from 'react';
import { Headphones, ShieldCheck, Tag } from 'lucide-react';

export const ServicesSection = () => {
  const serviceItems = [
    {
      title: 'Free Consulting',
      desc: '24/7 for your furniture needs',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
          <Headphones className="w-6 h-6" />
        </div>
      ),
    },
    {
      title: 'Overall Guarantee',
      desc: 'For our high quality materials',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
          <ShieldCheck className="w-6 h-6" />
        </div>
      ),
    },
    {
      title: 'Special Price',
      desc: "For undoubted furniture's quality, only for you!",
      icon: (
        <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
          <Tag className="w-6 h-6" />
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight mb-2.5">
            Best Service for You
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm">
            Enjoy our best service for your shopping satisfaction
          </p>
        </div>

        {/* 3 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {serviceItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-neutral-200/60 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-900 mb-1">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-xs leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
