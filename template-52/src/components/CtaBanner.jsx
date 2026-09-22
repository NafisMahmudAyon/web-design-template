import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CtaBanner = ({ onStartProject }) => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-slate-200">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight max-w-2xl leading-[1.1]">
          Ready to Transform Your Online Presence and Drive Results?
        </h2>

        <button
          onClick={onStartProject}
          aria-label="Get Started"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FF5520] hover:bg-[#E84512] text-white flex items-center justify-center shadow-xl shadow-[#FF5520]/30 hover:scale-105 transition-all self-start md:self-center shrink-0 group"
        >
          <ArrowUpRight className="w-10 h-10 sm:w-12 sm:h-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
